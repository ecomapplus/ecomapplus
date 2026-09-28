import { createServerFn } from "@tanstack/react-start";
import { villageRef, villageSlugFromText, type VillageRef } from "@/data/communities";
import { authMiddleware, optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import { archivePostedMessage } from "@/lib/chat-archive";
import { loadFundingTotals } from "@/lib/room-funding";
import { ensurePublishSchema, loadPublishProposal, seatNextFounder, type PublishProposal } from "@/lib/room-publish";
import { loadCaravan, seatCaravanFounder, type CaravanDetail } from "@/lib/caravans";
import { markPresent, onlineUserIds } from "@/lib/presence";
import { loadRoomSkillCounts, type RoomSkillCount } from "@/lib/room-skills";

export const HALL_ROOM_ID = "hall";
export const PRIVATE_NAME_UNTIL = 3;

export type ChatMessage = {
  id: number;
  userId: string;
  authorName: string;
  authorEmail?: string | null;
  body: string;
  createdAt: string;
  villageSlug: string | null;
  village: VillageRef | null;
  hasAccount: boolean;
  online: boolean;
};

export type RoomSummary = {
  id: string;
  kind: "public" | "private" | "caravan";
  name: string;
  memberCount: number;
  isMember: boolean;
  isFounder: boolean;
  requested: boolean;
  pendingCount: number;
  nameIsPublic: boolean;
  statsArePublic: boolean;
  mission: string | null;
  thumbnail: string | null;
  pledgedUsd: number | null;
  goalUsd: number | null;
  skillCounts: RoomSkillCount[] | null;
};

export type RoomView = RoomSummary & {
  founderIds: string[];
  members: { id: string; name: string; role: string; online: boolean }[];
  requests: { userId: string; name: string }[];
  messages: ChatMessage[];
  publishProposal: PublishProposal | null;
  caravan: CaravanDetail | null;
};

function assertBody(body: unknown, hasVillage: boolean): string {
  if (typeof body !== "string") {
    if (hasVillage) return "";
    throw new Error("Write something first");
  }
  const trimmed = body.replace(/\s+/g, " ").trim();
  if (!trimmed) {
    if (hasVillage) return "";
    throw new Error("Write something first");
  }
  if (trimmed.length > 1000) throw new Error("Keep it under 1,000 characters");
  return trimmed;
}

function assertVillageSlug(value: unknown): string | null {
  if (value == null || value === "") return null;
  if (typeof value !== "string") throw new Error("Unknown village");
  const village = villageRef(value.trim());
  if (!village) throw new Error("Unknown village");
  return village.slug;
}

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

function assertName(name: unknown): string {
  if (typeof name !== "string") throw new Error("Name the chat");
  const trimmed = name.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name needs at least two characters");
  if (trimmed.length > 80) throw new Error("Keep the name under 80 characters");
  return trimmed;
}

const MAX_MISSION = 600;
const MAX_THUMBNAIL = 280_000;
const REDACTED_GROUP_NAME = "Private group";

function assertMission(value: unknown): string | null {
  if (value == null) return null;
  if (typeof value !== "string") throw new Error("Write the mission in words");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  if (trimmed.length > MAX_MISSION) throw new Error(`Keep the mission under ${MAX_MISSION} characters`);
  return trimmed;
}

function assertThumbnail(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === "") return null;
  if (typeof value !== "string" || !value.startsWith("data:image/")) {
    throw new Error("The thumbnail should be an image you upload");
  }
  if (value.length > MAX_THUMBNAIL) throw new Error("That photo is too large, try a smaller shot");
  return value;
}

export function groupNameIsPublic(
  kind: RoomSummary["kind"],
  isMember: boolean,
  publicAgreed: boolean,
): boolean {
  if (kind === "public" || kind === "caravan" || isMember) return true;
  return publicAgreed;
}

export function groupStatsArePublic(kind: RoomSummary["kind"], publicAgreed: boolean): boolean {
  return kind === "private" && publicAgreed;
}

export function shouldListPrivateGroup(summary: RoomSummary): boolean {
  if (summary.kind !== "private") return true;
  if (summary.isMember || summary.requested) return true;
  return summary.statsArePublic;
}

function asKind(kind: string): RoomSummary["kind"] {
  if (kind === "public") return "public";
  if (kind === "caravan") return "caravan";
  return "private";
}

async function ensureHall() {
  const sql = await getSql();
  await sql.query(`alter table room_messages add column if not exists author_email text`).catch(() => undefined);
  await sql.query(`alter table room_messages add column if not exists village_slug text`).catch(() => undefined);
  await sql.query(`alter table room_members add column if not exists user_email text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists founder_a_email text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists founder_b_email text`).catch(() => undefined);
  await ensurePublishSchema();
  await sql.query(`
    create table if not exists chat_archive (
      id serial primary key,
      room_key text not null,
      room_id text not null,
      kind text not null,
      room_name text,
      author_email text not null,
      author_name text not null,
      body text not null,
      village_slug text,
      created_at timestamptz not null default now()
    )
  `).catch(() => undefined);
  await sql.query(`alter table chat_archive add column if not exists village_slug text`).catch(() => undefined);
  await sql`
    insert into rooms (id, kind, name)
    values (${HALL_ROOM_ID}, 'public', 'The village square')
    on conflict (id) do nothing
  `;
  await sql`
    update rooms
    set name = 'The village square'
    where id = ${HALL_ROOM_ID} and name is distinct from 'The village square'
  `;
  await sql.query(`
    create table if not exists app_flags (
      key text primary key
    )
  `).catch(() => undefined);
  let cleared: { key: string }[] | null = null;
  try {
    cleared = await sql<{ key: string }>`
      select key from app_flags where key = 'hall-chat-cleared'
    `;
  } catch {
    cleared = null;
  }
  if (cleared && !cleared[0]) {
    await sql.query(`delete from room_messages where room_id = 'hall'`).catch(() => undefined);
    await sql.query(`delete from chat_archive where room_key = 'hall' or room_id = 'hall'`).catch(() => undefined);
    await sql`
      insert into app_flags (key) values ('hall-chat-cleared')
      on conflict (key) do nothing
    `.catch(() => undefined);
  }
}

async function authorName(userId: string): Promise<string> {
  const sql = await getSql();
  const rows = await sql<{ name: string | null }>`
    select "name" from "user" where "id" = ${userId}
  `;
  const name = rows[0]?.name?.trim();
  return name && name.length > 0 ? name : "Member";
}

export async function isRepeatPost(roomId: string, userId: string, body: string): Promise<boolean> {
  const text = body.replace(/\s+/g, " ").trim();
  if (!text) return false;
  const sql = await getSql();
  const last = await sql<{ user_id: string; body: string }>`
    select user_id, body from room_messages
    where room_id = ${roomId}
    order by created_at desc, id desc
    limit 1
  `;
  if (last[0] && last[0].user_id === userId && last[0].body === text) return true;
  const recent = await sql<{ id: number }>`
    select id from room_messages
    where room_id = ${roomId}
      and user_id = ${userId}
      and body = ${text}
      and created_at > now() - interval '2 minutes'
    limit 1
  `;
  return Boolean(recent[0]);
}

type MessageRow = {
  id: number;
  user_id: string;
  author_name: string;
  author_email: string | null;
  body: string;
  village_slug: string | null;
  created_at: string;
  account_id: string | null;
};

async function loadMessageRows(roomId: string): Promise<MessageRow[]> {
  const sql = await getSql();
  function collapse(rows: MessageRow[]): MessageRow[] {
    const out: MessageRow[] = [];
    for (const row of rows) {
      const prev = out[out.length - 1];
      if (prev && prev.user_id === row.user_id && prev.body === row.body) continue;
      out.push(row);
    }
    return out;
  }
  try {
    return collapse(
      await sql<MessageRow>`
      select
        m.id,
        m.user_id,
        m.author_name,
        lower(u."email") as author_email,
        m.body,
        m.village_slug,
        m.created_at::text as created_at,
        u."id" as account_id
      from room_messages m
      left join "user" u on u."id" = m.user_id
      where m.room_id = ${roomId}
      order by m.created_at asc, m.id asc
    `,
    );
  } catch {
    const rows = await sql<Omit<MessageRow, "village_slug">>`
      select
        m.id,
        m.user_id,
        m.author_name,
        lower(u."email") as author_email,
        m.body,
        m.created_at::text as created_at,
        u."id" as account_id
      from room_messages m
      left join "user" u on u."id" = m.user_id
      where m.room_id = ${roomId}
      order by m.created_at asc, m.id asc
    `;
    return collapse(rows.map((row) => ({ ...row, village_slug: null })));
  }
}

async function loadSummary(roomId: string, userId: string | null): Promise<RoomSummary | null> {
  const sql = await getSql();
  const rooms = await sql<{
    id: string;
    kind: string;
    name: string;
    founder_a: string | null;
    founder_b: string | null;
    founder_c: string | null;
    mission: string | null;
    thumbnail: string | null;
    public_agreed: boolean | null;
  }>`
    select id, kind, name, founder_a, founder_b, founder_c, mission, thumbnail, public_agreed
    from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) return null;
  const kind = asKind(room.kind);
  const isPublic = kind === "public";
  const counts = await sql<{ n: number }>`
    select count(*)::int as n from room_members where room_id = ${roomId}
  `;
  const mine = userId
    ? await sql<{ role: string }>`
        select role from room_members where room_id = ${roomId} and user_id = ${userId}
      `
    : [];
  const req = userId
    ? await sql<{ user_id: string }>`
        select user_id from room_join_requests where room_id = ${roomId} and user_id = ${userId}
      `
    : [];
  const pending = await sql<{ n: number }>`
    select count(*)::int as n from room_join_requests where room_id = ${roomId}
  `;
  const isFounder = userId
    ? mine[0]?.role === "founder" ||
      room.founder_a === userId ||
      room.founder_b === userId ||
      room.founder_c === userId
    : false;
  const isMember = isPublic ? true : Boolean(mine[0]);
  const memberCount = isPublic ? Math.max(counts[0]?.n ?? 0, 1) : counts[0]?.n ?? 0;
  const publicAgreed = Boolean(room.public_agreed);
  const nameIsPublic = groupNameIsPublic(kind, isMember, publicAgreed);
  const statsArePublic = groupStatsArePublic(kind, publicAgreed);
  const canSeeFace = isMember || statsArePublic;
  const mission = canSeeFace && room.mission?.trim() ? room.mission.trim() : null;
  const thumbnail = canSeeFace && room.thumbnail?.startsWith("data:image/") ? room.thumbnail : null;
  let pledgedUsd: number | null = null;
  let goalUsd: number | null = null;
  let skillCounts: RoomSkillCount[] | null = null;
  if (statsArePublic || isMember) {
    const totals = await loadFundingTotals(roomId);
    pledgedUsd = statsArePublic || isMember ? totals.pledgedUsd : null;
    goalUsd = totals.goalUsd;
    if (statsArePublic) skillCounts = await loadRoomSkillCounts(roomId, "private");
  }
  return {
    id: room.id,
    kind,
    name: room.id === HALL_ROOM_ID ? "The village square" : nameIsPublic ? room.name : REDACTED_GROUP_NAME,
    memberCount,
    isMember,
    isFounder: isPublic ? false : isFounder,
    requested: req.length > 0,
    pendingCount: isFounder ? pending[0]?.n ?? 0 : 0,
    nameIsPublic,
    statsArePublic,
    mission,
    thumbnail,
    pledgedUsd,
    goalUsd,
    skillCounts,
  };
}

async function loadView(roomId: string, userId: string | null): Promise<RoomView> {
  const sql = await getSql();
  const summary = await loadSummary(roomId, userId);
  if (!summary) throw new Error("Unknown chat");
  const rooms = await sql<{ founder_a: string | null; founder_b: string | null; founder_c: string | null }>`
    select founder_a, founder_b, founder_c from rooms where id = ${roomId}
  `;
  const founderIds = [rooms[0]?.founder_a, rooms[0]?.founder_b, rooms[0]?.founder_c].filter(
    (id): id is string => Boolean(id),
  );
  const canReadMessages = summary.kind === "public" || summary.isMember;
  if (userId) await markPresent(userId).catch(() => undefined);
  const online = await onlineUserIds();
  const members = summary.isMember
    ? (
        await sql<{ id: string; name: string; role: string }>`
        select m.user_id as id, coalesce(nullif(u."name", ''), 'Member') as name, m.role
        from room_members m
        join "user" u on u."id" = m.user_id
        where m.room_id = ${roomId}
        order by m.role desc, u."name" asc
      `
      ).map((row) => ({ ...row, online: online.has(row.id) }))
    : [];
  const requests = summary.isFounder
    ? await sql<{ userId: string; name: string }>`
        select r.user_id as "userId", coalesce(nullif(u."name", ''), 'Member') as name
        from room_join_requests r
        join "user" u on u."id" = r.user_id
        where r.room_id = ${roomId}
        order by r.created_at asc
      `
    : [];
  const messages = canReadMessages
    ? (await loadMessageRows(roomId)).map((row) => {
        const villageSlug =
          villageRef(row.village_slug ?? "")?.slug ?? villageSlugFromText(row.body);
        return {
          id: Number(row.id),
          userId: row.user_id,
          authorName: row.author_name,
          authorEmail: row.author_email,
          body: row.body,
          createdAt: row.created_at,
          villageSlug,
          village: villageSlug ? villageRef(villageSlug) : null,
          hasAccount: Boolean(row.account_id),
          online: Boolean(row.account_id) && online.has(row.user_id),
        };
      })
    : [];
  return {
    ...summary,
    founderIds,
    members,
    requests,
    messages,
    publishProposal: summary.isMember && summary.kind === "private" ? await loadPublishProposal(roomId) : null,
    caravan: summary.kind === "caravan" ? await loadCaravan(roomId, userId) : null,
  };
}

export const listRooms = createServerFn({ method: "GET" })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context }): Promise<RoomSummary[]> => {
    await ensureHall();
    const sql = await getSql();
    const rows = await sql<{ id: string }>`
      select id from rooms order by case when kind = 'public' then 0 else 1 end, created_at desc
    `;
    const out: RoomSummary[] = [];
    for (const row of rows) {
      const summary = await loadSummary(row.id, context.userId);
      if (summary && shouldListPrivateGroup(summary)) out.push(summary);
    }
    return out;
  });

export const getRoom = createServerFn({ method: "GET" })
  .validator((id: string) => assertRoomId(id))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: id }) => {
    await ensureHall();
    return loadView(id, context.userId);
  });

export const postMessage = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; body: string; villageSlug?: string | null }) => {
    const villageSlug = assertVillageSlug(input.villageSlug ?? villageSlugFromText(String(input.body ?? "")));
    return {
      roomId: assertRoomId(input.roomId),
      body: assertBody(input.body, Boolean(villageSlug)),
      villageSlug,
    };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await ensureHall();
    const summary = await loadSummary(data.roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (!summary.isMember) throw new Error("You are not in this chat");
    if (await isRepeatPost(data.roomId, context.userId, data.body)) {
      return loadView(data.roomId, context.userId);
    }
    const name = await authorName(context.userId);
    const sql = await getSql();
    const emailRows = await sql<{ email: string | null }>`
      select lower("email") as email from "user" where "id" = ${context.userId}
    `;
    try {
      await sql`
        insert into room_messages (room_id, user_id, author_name, author_email, body, village_slug)
        values (
          ${data.roomId}, ${context.userId}, ${name}, ${emailRows[0]?.email ?? null}, ${data.body}, ${data.villageSlug}
        )
      `;
    } catch {
      await sql`
        insert into room_messages (room_id, user_id, author_name, body)
        values (${data.roomId}, ${context.userId}, ${name}, ${data.body})
      `;
    }
    await archivePostedMessage({
      roomId: data.roomId,
      userId: context.userId,
      authorName: name,
      body: data.body,
      villageSlug: data.villageSlug,
    }).catch(() => undefined);
    return loadView(data.roomId, context.userId);
  });

export const deleteHallMessage = createServerFn({ method: "POST" })
  .validator((id: number) => {
    if (!Number.isInteger(id) || id < 1) throw new Error("Unknown message");
    return id;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }) => {
    await requireAdmin(context.userId);
    const sql = await getSql();
    const rows = await sql<{ id: number }>`
      delete from room_messages
      where id = ${id} and room_id = ${HALL_ROOM_ID}
      returning id
    `;
    if (!rows[0]) throw new Error("Unknown village square message");
    return loadView(HALL_ROOM_ID, context.userId);
  });

export const startPrivateChat = createServerFn({ method: "POST" })
  .validator((userId: string) => {
    if (typeof userId !== "string" || userId.trim().length < 1) throw new Error("Unknown person");
    return userId.trim();
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: otherId }) => {
    if (otherId === context.userId) throw new Error("Pick someone else");
    const sql = await getSql();
    const other = await sql<{ id: string; name: string; email: string | null }>`
      select "id", "name", lower("email") as email from "user" where "id" = ${otherId}
    `;
    if (!other[0]) throw new Error("Unknown person");
    const me = await sql<{ email: string | null }>`
      select lower("email") as email from "user" where "id" = ${context.userId}
    `;
    const myEmail = me[0]?.email ?? "";
    const theirEmail = other[0].email ?? "";
    const [founderA, founderB] = [context.userId, otherId].sort();
    const existing = await sql<{ id: string }>`
      select id from rooms
      where kind = 'private' and (
        (founder_a = ${founderA} and founder_b = ${founderB})
        or (
          ${myEmail} <> '' and ${theirEmail} <> ''
          and founder_a_email is not null and founder_b_email is not null
          and (
            (founder_a_email = ${myEmail} and founder_b_email = ${theirEmail})
            or (founder_a_email = ${theirEmail} and founder_b_email = ${myEmail})
          )
        )
      )
      limit 1
    `;
    if (existing[0]) {
      await sql`
        insert into room_members (room_id, user_id, role, user_email)
        values (${existing[0].id}, ${context.userId}, 'founder', ${myEmail || null})
        on conflict (room_id, user_id) do nothing
      `;
      await sql`
        insert into room_members (room_id, user_id, role, user_email)
        values (${existing[0].id}, ${otherId}, 'founder', ${theirEmail || null})
        on conflict (room_id, user_id) do nothing
      `;
      return { id: existing[0].id };
    }
    const myName = await authorName(context.userId);
    const theirName = other[0].name?.trim() || "Member";
    const id = `r_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    const name = `${myName} & ${theirName}`;
    const [emailA, emailB] = [myEmail, theirEmail].sort();
    await sql`
      insert into rooms (id, kind, name, founder_a, founder_b, founder_a_email, founder_b_email)
      values (${id}, 'private', ${name}, ${founderA}, ${founderB}, ${emailA || null}, ${emailB || null})
    `;
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${id}, ${founderA}, 'founder', ${founderA === context.userId ? myEmail || null : theirEmail || null})
    `;
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${id}, ${founderB}, 'founder', ${founderB === context.userId ? myEmail || null : theirEmail || null})
    `;
    return { id };
  });

export const renameRoom = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; name: string }) => ({
    roomId: assertRoomId(input.roomId),
    name: assertName(input.name),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const summary = await loadSummary(data.roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (!summary.isFounder) throw new Error("Only a founder can rename this group");
    const sql = await getSql();
    await sql`update rooms set name = ${data.name} where id = ${data.roomId}`;
    return loadView(data.roomId, context.userId);
  });

export const updateRoomAbout = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; mission: string; thumbnail?: string | null }) => ({
    roomId: assertRoomId(input.roomId),
    mission: assertMission(input.mission),
    thumbnail: assertThumbnail(input.thumbnail),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const summary = await loadSummary(data.roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (summary.kind !== "private") throw new Error("The village square keeps its own face");
    if (!summary.isFounder) throw new Error("Only a founder can edit this");
    const sql = await getSql();
    if (data.thumbnail === undefined) {
      await sql`update rooms set mission = ${data.mission} where id = ${data.roomId}`;
    } else {
      await sql`
        update rooms set mission = ${data.mission}, thumbnail = ${data.thumbnail}
        where id = ${data.roomId}
      `;
    }
    return loadView(data.roomId, context.userId);
  });

export const inviteToRoom = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; userId: string }) => ({
    roomId: assertRoomId(input.roomId),
    userId: typeof input.userId === "string" && input.userId.trim().length > 0 ? input.userId.trim() : "",
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    if (!data.userId) throw new Error("Pick someone");
    const summary = await loadSummary(data.roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (!summary.isFounder) throw new Error("Only a founder can invite");
    if (summary.kind !== "private" && summary.kind !== "caravan") throw new Error("The village square is already open");
    const sql = await getSql();
    const person = await sql<{ id: string; email: string | null }>`
      select "id", lower("email") as email from "user" where "id" = ${data.userId}
    `;
    if (!person[0]) throw new Error("Unknown person");
    const role =
      summary.kind === "caravan"
        ? await seatCaravanFounder(data.roomId, data.userId, person[0].email)
        : await seatNextFounder(data.roomId, data.userId, person[0].email);
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${data.roomId}, ${data.userId}, ${role}, ${person[0].email})
      on conflict (room_id, user_id) do nothing
    `;
    await sql`
      delete from room_join_requests where room_id = ${data.roomId} and user_id = ${data.userId}
    `;
    return loadView(data.roomId, context.userId);
  });

export const requestJoin = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => {
    const summary = await loadSummary(roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (summary.kind !== "private" && summary.kind !== "caravan") throw new Error("The village square is already open");
    if (summary.isMember) return loadView(roomId, context.userId);
    const sql = await getSql();
    await sql`
      insert into room_join_requests (room_id, user_id)
      values (${roomId}, ${context.userId})
      on conflict (room_id, user_id) do nothing
    `;
    return loadView(roomId, context.userId);
  });

export const decideJoin = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; userId: string; approve: boolean }) => ({
    roomId: assertRoomId(input.roomId),
    userId: typeof input.userId === "string" ? input.userId.trim() : "",
    approve: Boolean(input.approve),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    if (!data.userId) throw new Error("Unknown person");
    const summary = await loadSummary(data.roomId, context.userId);
    if (!summary) throw new Error("Unknown chat");
    if (!summary.isFounder) throw new Error("Only a founder can approve");
    const sql = await getSql();
    if (data.approve) {
      const person = await sql<{ email: string | null }>`
        select lower("email") as email from "user" where "id" = ${data.userId}
      `;
      const role =
        summary.kind === "caravan"
          ? await seatCaravanFounder(data.roomId, data.userId, person[0]?.email ?? null)
          : await seatNextFounder(data.roomId, data.userId, person[0]?.email ?? null);
      await sql`
        insert into room_members (room_id, user_id, role, user_email)
        values (${data.roomId}, ${data.userId}, ${role}, ${person[0]?.email ?? null})
        on conflict (room_id, user_id) do nothing
      `;
    }
    await sql`
      delete from room_join_requests where room_id = ${data.roomId} and user_id = ${data.userId}
    `;
    return loadView(data.roomId, context.userId);
  });
