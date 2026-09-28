import { getSql } from "@/lib/db";

export const HALL_KEY = "hall";

export type CachedMessage = {
  authorEmail?: string;
  authorName: string;
  body: string;
  createdAt?: string;
  villageSlug?: string | null;
};

export type CachedRoom = {
  roomId: string;
  roomKey?: string;
  kind?: string;
  roomName?: string;
  otherEmail?: string | null;
  messages: CachedMessage[];
};

function normEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

function dmKey(a: string, b: string) {
  return `dm:${[a, b].sort().join("|")}`;
}

async function emailForUser(userId: string): Promise<string> {
  const sql = await getSql();
  const rows = await sql<{ email: string | null }>`
    select lower("email") as email from "user" where "id" = ${userId}
  `;
  return rows[0]?.email ?? "";
}

export async function archivePostedMessage(input: {
  roomId: string;
  userId: string;
  authorName: string;
  body: string;
  villageSlug?: string | null;
}) {
  const sql = await getSql();
  const email = await emailForUser(input.userId);
  await sql`
    update room_messages
    set author_email = ${email || null}
    where room_id = ${input.roomId}
      and user_id = ${input.userId}
      and body = ${input.body}
      and author_email is null
  `;
  const rooms = await sql<{
    id: string;
    kind: string;
    name: string;
    founder_a_email: string | null;
    founder_b_email: string | null;
  }>`
    select id, kind, name, founder_a_email, founder_b_email from rooms where id = ${input.roomId}
  `;
  const room = rooms[0];
  if (!room) return;
  const key =
    room.kind === "public"
      ? HALL_KEY
      : room.founder_a_email && room.founder_b_email
        ? dmKey(room.founder_a_email, room.founder_b_email)
        : room.id;
  await sql`
    insert into chat_archive (
      room_key, room_id, kind, room_name, author_email, author_name, body, village_slug
    )
    values (
      ${key}, ${room.id}, ${room.kind}, ${room.name}, ${email || "unknown"}, ${input.authorName}, ${input.body}, ${input.villageSlug ?? null}
    )
  `;
}

async function stampMemberEmail(userId: string, email: string) {
  const sql = await getSql();
  await sql`
    update room_members set user_email = ${email} where user_id = ${userId}
  `;
  await sql`
    update room_messages set author_email = ${email}
    where user_id = ${userId} and (author_email is null or author_email = '')
  `;
  await sql`
    update rooms set founder_a_email = ${email} where founder_a = ${userId}
  `;
  await sql`
    update rooms set founder_b_email = ${email} where founder_b = ${userId}
  `;
}

async function takeOverOldIds(userId: string, email: string) {
  const sql = await getSql();
  const others = await sql<{ id: string }>`
    select "id" from "user"
    where lower("email") = ${email} and "id" <> ${userId}
  `;
  for (const other of others) {
    await sql`
      insert into room_members (room_id, user_id, role, user_email, created_at)
      select room_id, ${userId}, role, ${email}, created_at
      from room_members
      where user_id = ${other.id}
      on conflict (room_id, user_id) do nothing
    `;
    await sql`update room_messages set user_id = ${userId}, author_email = ${email} where user_id = ${other.id}`;
    await sql`update rooms set founder_a = ${userId}, founder_a_email = ${email} where founder_a = ${other.id}`;
    await sql`update rooms set founder_b = ${userId}, founder_b_email = ${email} where founder_b = ${other.id}`;
    await sql`
      update land_listings
      set user_id = ${userId},
          owner_email = ${email},
          signup_for = case when signup_for = ${other.id} then ${userId} else signup_for end
      where user_id = ${other.id} or signup_for = ${other.id}
    `.catch(() => undefined);
    await sql`
      insert into room_members (room_id, user_id, role, user_email, created_at)
      select room_id, ${userId}, role, ${email}, created_at
      from room_members
      where user_email = ${email} and user_id <> ${userId}
      on conflict (room_id, user_id) do nothing
    `;
  }
  await sql`
    insert into room_members (room_id, user_id, role, user_email, created_at)
    select room_id, ${userId}, role, ${email}, created_at
    from room_members
    where user_email = ${email} and user_id <> ${userId}
    on conflict (room_id, user_id) do nothing
  `;
  await sql`
    update rooms set founder_a = ${userId} where founder_a_email = ${email} and founder_a <> ${userId}
  `;
  await sql`
    update rooms set founder_b = ${userId} where founder_b_email = ${email} and founder_b <> ${userId}
  `;
  await sql`
    insert into room_members (room_id, user_id, role, user_email)
    select id, ${userId}, 'founder', ${email}
    from rooms
    where kind = 'private' and (founder_a_email = ${email} or founder_b_email = ${email})
    on conflict (room_id, user_id) do nothing
  `;
  await sql`
    update land_listings set user_id = ${userId}, owner_email = ${email} where owner_email = ${email}
  `.catch(() => undefined);
}

async function replayArchive(userId: string, email: string) {
  const sql = await getSql();
  await sql.query(`alter table chat_archive add column if not exists village_slug text`).catch(() => undefined);
  await sql.query(`alter table room_messages add column if not exists village_slug text`).catch(() => undefined);
  const rows = await sql<{
    room_key: string;
    room_id: string;
    kind: string;
    room_name: string | null;
    author_email: string;
    author_name: string;
    body: string;
    village_slug: string | null;
    created_at: string;
  }>`
    select
      room_key, room_id, kind, room_name, author_email, author_name, body, village_slug,
      created_at::text as created_at
    from chat_archive
    where author_email = ${email}
      or room_key = ${HALL_KEY}
      or room_key like ${"dm:%"}
    order by created_at asc, id asc
  `;
  const mine = rows.filter((row) => {
    if (row.author_email === email && row.room_key !== HALL_KEY) return true;
    if (row.room_key.startsWith("dm:") && row.room_key.includes(email)) return true;
    return false;
  });
  for (const row of mine) {
    try {
      await insertIfMissing({
        roomId: row.room_id,
        roomKey: row.room_key,
        kind: row.kind,
        roomName: row.room_name,
        authorEmail: row.author_email,
        authorName: row.author_name,
        body: row.body,
        villageSlug: row.village_slug,
        createdAt: row.created_at,
        meId: userId,
        meEmail: email,
      });
    } catch {
      /* keep going so one bad line cannot drop the rest */
    }
  }
}

async function insertIfMissing(input: {
  roomId: string;
  roomKey: string;
  kind: string;
  roomName: string | null;
  authorEmail: string;
  authorName: string;
  body: string;
  villageSlug?: string | null;
  createdAt?: string;
  meId: string;
  meEmail: string;
}) {
  const sql = await getSql();
  if (input.roomKey === HALL_KEY || input.roomId === HALL_KEY || input.kind === "public") return;
  let roomId = input.roomId;
  const existing = await sql<{ id: string }>`select id from rooms where id = ${roomId}`;
  if (!existing[0] && input.roomKey.startsWith("dm:")) {
    const parts = input.roomKey.slice(3).split("|");
    const [a, b] = parts;
    if (a && b) {
      const byEmail = await sql<{ id: string }>`
        select id from rooms
        where kind = 'private'
          and (
            (founder_a_email = ${a} and founder_b_email = ${b})
            or (founder_a_email = ${b} and founder_b_email = ${a})
          )
        limit 1
      `;
      if (byEmail[0]) roomId = byEmail[0].id;
      else {
        const otherEmail = a === input.meEmail ? b : a;
        const other = await sql<{ id: string }>`
          select "id" from "user" where lower("email") = ${otherEmail} limit 1
        `;
        const otherId = other[0]?.id ?? `pending_${otherEmail.replace(/[^a-z0-9]/g, "").slice(0, 18)}`;
        const [founderA, founderB] = [input.meId, otherId].sort();
        const [emailA, emailB] = [input.meEmail, otherEmail].sort();
        roomId = `r_${Math.abs(hashCode(input.roomKey)).toString(36)}`;
        await sql`
          insert into rooms (id, kind, name, founder_a, founder_b, founder_a_email, founder_b_email)
          values (${roomId}, 'private', ${input.roomName || "Private chat"}, ${founderA}, ${founderB}, ${emailA}, ${emailB})
          on conflict (id) do nothing
        `;
      }
    }
  }

  const rooms = await sql<{ id: string }>`select id from rooms where id = ${roomId}`;
  if (!rooms[0]) return;

  if (input.authorEmail === input.meEmail || input.kind === "public") {
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${roomId}, ${input.meId}, ${input.kind === "public" ? "member" : "founder"}, ${input.meEmail})
      on conflict (room_id, user_id) do nothing
    `;
  }

  const dupes = await sql<{ id: number }>`
    select id from room_messages
    where room_id = ${roomId}
      and body = ${input.body}
      and coalesce(author_email, '') = ${input.authorEmail}
    limit 1
  `;
  if (dupes[0]) return;
  const authorId =
    input.authorEmail === input.meEmail
      ? input.meId
      : (
          await sql<{ id: string }>`
            select "id" from "user" where lower("email") = ${input.authorEmail} limit 1
          `
        )[0]?.id ?? input.meId;
  if (input.createdAt) {
    await sql`
      insert into room_messages (room_id, user_id, author_name, author_email, body, village_slug, created_at)
      values (
        ${roomId}, ${authorId}, ${input.authorName}, ${input.authorEmail}, ${input.body}, ${input.villageSlug ?? null}, ${input.createdAt}::timestamptz
      )
    `;
  } else {
    await sql`
      insert into room_messages (room_id, user_id, author_name, author_email, body, village_slug)
      values (${roomId}, ${authorId}, ${input.authorName}, ${input.authorEmail}, ${input.body}, ${input.villageSlug ?? null})
    `;
  }
}

function hashCode(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) | 0;
  return hash;
}

export function parseCachedRooms(raw: unknown): CachedRoom[] {
  if (!Array.isArray(raw)) return [];
  const out: CachedRoom[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") continue;
    const item = row as Record<string, unknown>;
    if (typeof item.roomId !== "string") continue;
    const messages: CachedMessage[] = [];
    if (Array.isArray(item.messages)) {
      for (const msg of item.messages) {
        if (!msg || typeof msg !== "object") continue;
        const m = msg as Record<string, unknown>;
        if (typeof m.body !== "string" || typeof m.authorName !== "string") continue;
        messages.push({
          authorEmail: normEmail(m.authorEmail) || undefined,
          authorName: m.authorName.slice(0, 80),
          body: m.body.slice(0, 1000),
          createdAt: typeof m.createdAt === "string" ? m.createdAt : undefined,
        });
        if (messages.length >= 200) break;
      }
    }
    out.push({
      roomId: item.roomId.slice(0, 64),
      roomKey: typeof item.roomKey === "string" ? item.roomKey.slice(0, 120) : undefined,
      kind: item.kind === "private" ? "private" : item.kind === "caravan" ? "caravan" : "public",
      roomName: typeof item.roomName === "string" ? item.roomName.slice(0, 80) : undefined,
      otherEmail: normEmail(item.otherEmail) || null,
      messages,
    });
  }
  return out.slice(0, 30);
}

async function saveArchiveRow(input: {
  roomKey: string;
  roomId: string;
  kind: string;
  roomName: string | null;
  authorEmail: string;
  authorName: string;
  body: string;
  createdAt?: string;
}) {
  const sql = await getSql();
  const dupes = await sql<{ id: number }>`
    select id from chat_archive
    where room_key = ${input.roomKey}
      and author_email = ${input.authorEmail}
      and body = ${input.body}
    limit 1
  `;
  if (dupes[0]) return;
  if (input.createdAt) {
    await sql`
      insert into chat_archive (
        room_key, room_id, kind, room_name, author_email, author_name, body, created_at
      )
      values (
        ${input.roomKey}, ${input.roomId}, ${input.kind}, ${input.roomName},
        ${input.authorEmail}, ${input.authorName}, ${input.body}, ${input.createdAt}::timestamptz
      )
    `;
    return;
  }
  await sql`
    insert into chat_archive (
      room_key, room_id, kind, room_name, author_email, author_name, body
    )
    values (
      ${input.roomKey}, ${input.roomId}, ${input.kind}, ${input.roomName},
      ${input.authorEmail}, ${input.authorName}, ${input.body}
    )
  `;
}

export async function restoreChats(userId: string, email: string, cached?: unknown) {
  const key = normEmail(email);
  if (!key) return;
  await stampMemberEmail(userId, key);
  await takeOverOldIds(userId, key);
  const rooms = parseCachedRooms(cached);
  for (const room of rooms) {
    const roomKey =
      room.roomKey ||
      (room.kind === "private" && room.otherEmail
        ? dmKey(key, room.otherEmail)
        : room.roomId === HALL_KEY
          ? HALL_KEY
          : room.roomId);
    if (roomKey === HALL_KEY || room.roomId === HALL_KEY || room.kind === "public") continue;
    for (const msg of room.messages) {
      try {
        await insertIfMissing({
          roomId: room.roomId,
          roomKey,
          kind: room.kind === "private" ? "private" : room.kind === "caravan" ? "caravan" : "public",
          roomName: room.roomName ?? null,
          authorEmail: msg.authorEmail || key,
          authorName: msg.authorName,
          body: msg.body,
          createdAt: msg.createdAt,
          meId: userId,
          meEmail: key,
        });
        await saveArchiveRow({
          roomKey,
          roomId: room.roomId,
          kind: room.kind === "private" ? "private" : room.kind === "caravan" ? "caravan" : "public",
          roomName: room.roomName ?? null,
          authorEmail: msg.authorEmail || key,
          authorName: msg.authorName,
          body: msg.body,
          createdAt: msg.createdAt,
        });
      } catch {
        /* keep going */
      }
    }
  }
  await replayArchive(userId, key);
  await stampMemberEmail(userId, key);
}
