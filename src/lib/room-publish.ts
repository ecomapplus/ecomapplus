import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type PublishVote = {
  userId: string;
  name: string;
};

export type PublishProposal = {
  proposedBy: string;
  proposerName: string;
  mission: string;
  goalUsd: number;
  thumbnail: string;
  agreed: PublishVote[];
};

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

export async function ensurePublishSchema() {
  const sql = await getSql();
  await sql.query(`alter table rooms add column if not exists founder_c text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists founder_c_email text`).catch(() => undefined);
  await sql.query(`alter table rooms add column if not exists public_agreed boolean not null default false`).catch(() => undefined);
  await sql.query(`
    create table if not exists room_publish_proposals (
      room_id text primary key,
      proposed_by text not null,
      mission text not null,
      goal_usd integer not null,
      thumbnail text not null,
      created_at timestamptz not null default now()
    )
  `).catch(() => undefined);
  await sql.query(`
    create table if not exists room_publish_votes (
      room_id text not null,
      user_id text not null,
      created_at timestamptz not null default now(),
      primary key (room_id, user_id)
    )
  `).catch(() => undefined);
}

export async function founderIdsFor(roomId: string): Promise<string[]> {
  const sql = await getSql();
  const rooms = await sql<{
    founder_a: string | null;
    founder_b: string | null;
    founder_c: string | null;
  }>`
    select founder_a, founder_b, founder_c from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) return [];
  return [room.founder_a, room.founder_b, room.founder_c].filter((id): id is string => Boolean(id));
}

export async function seatNextFounder(
  roomId: string,
  userId: string,
  email: string | null,
): Promise<"founder" | "member"> {
  const sql = await getSql();
  const rooms = await sql<{
    founder_a: string | null;
    founder_b: string | null;
    founder_c: string | null;
  }>`
    select founder_a, founder_b, founder_c from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  if (userId === room.founder_a || userId === room.founder_b || userId === room.founder_c) {
    return "founder";
  }
  if (!room.founder_a) {
    await sql`
      update rooms
      set founder_a = ${userId}, founder_a_email = ${email}
      where id = ${roomId} and founder_a is null
    `;
    return "founder";
  }
  if (!room.founder_b) {
    await sql`
      update rooms
      set founder_b = ${userId}, founder_b_email = ${email}
      where id = ${roomId} and founder_b is null
    `;
    return "founder";
  }
  if (!room.founder_c) {
    await sql`
      update rooms
      set founder_c = ${userId}, founder_c_email = ${email}
      where id = ${roomId} and founder_c is null
    `;
    return "founder";
  }
  return "member";
}

export async function seatThirdFounder(
  roomId: string,
  userId: string,
  email: string | null,
): Promise<"founder" | "member"> {
  return seatNextFounder(roomId, userId, email);
}

export async function loadPublishProposal(roomId: string): Promise<PublishProposal | null> {
  await ensurePublishSchema();
  const sql = await getSql();
  const rows = await sql<{
    proposed_by: string;
    proposer_name: string;
    mission: string;
    goal_usd: number;
    thumbnail: string;
  }>`
    select
      p.proposed_by,
      coalesce(nullif(u."name", ''), 'Member') as proposer_name,
      p.mission,
      p.goal_usd,
      p.thumbnail
    from room_publish_proposals p
    left join "user" u on u."id" = p.proposed_by
    where p.room_id = ${roomId}
  `;
  const row = rows[0];
  if (!row) return null;
  const votes = await sql<{ user_id: string; name: string }>`
    select v.user_id, coalesce(nullif(u."name", ''), 'Member') as name
    from room_publish_votes v
    left join "user" u on u."id" = v.user_id
    where v.room_id = ${roomId}
    order by u."name" asc
  `;
  return {
    proposedBy: row.proposed_by,
    proposerName: row.proposer_name,
    mission: row.mission,
    goalUsd: Number(row.goal_usd),
    thumbnail: row.thumbnail,
    agreed: votes.map((vote) => ({ userId: vote.user_id, name: vote.name })),
  };
}

async function applyProposal(roomId: string) {
  const sql = await getSql();
  const proposals = await sql<{
    mission: string;
    goal_usd: number;
    thumbnail: string;
    proposed_by: string;
  }>`
    select mission, goal_usd, thumbnail, proposed_by
    from room_publish_proposals where room_id = ${roomId}
  `;
  const proposal = proposals[0];
  if (!proposal) return;
  await sql`
    update rooms
    set mission = ${proposal.mission},
        thumbnail = ${proposal.thumbnail},
        public_agreed = true
    where id = ${roomId}
  `;
  await sql`
    insert into room_funding_goals (room_id, amount_usd, updated_by, updated_at)
    values (${roomId}, ${proposal.goal_usd}, ${proposal.proposed_by}, now())
    on conflict (room_id) do update
    set amount_usd = excluded.amount_usd,
        updated_by = excluded.updated_by,
        updated_at = now()
  `;
  await sql`delete from room_publish_votes where room_id = ${roomId}`;
  await sql`delete from room_publish_proposals where room_id = ${roomId}`;
}

async function requireFounder(roomId: string, userId: string) {
  const ids = await founderIdsFor(roomId);
  if (!ids.includes(userId)) throw new Error("Only a founder can do that");
  return ids;
}

export const proposePublish = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await ensurePublishSchema();
    const founderIds = await requireFounder(roomId, context.userId);
    if (founderIds.length < 3) throw new Error("A project needs three founders before it can go public");
    const sql = await getSql();
    const rooms = await sql<{ mission: string | null; thumbnail: string | null; kind: string }>`
      select mission, thumbnail, kind from rooms where id = ${roomId}
    `;
    const room = rooms[0];
    if (!room || room.kind !== "private") throw new Error("Unknown group");
    const mission = room.mission?.replace(/\s+/g, " ").trim() ?? "";
    if (mission.length < 8) throw new Error("Write a mission first");
    const thumbnail = room.thumbnail ?? "";
    if (!thumbnail.startsWith("data:image/")) throw new Error("Add a thumbnail photo first");
    const goals = await sql<{ amount_usd: number }>`
      select amount_usd from room_funding_goals where room_id = ${roomId}
    `;
    const goalUsd = goals[0] ? Number(goals[0].amount_usd) : 0;
    if (goalUsd < 1) throw new Error("Set a funding goal first");
    await sql`
      insert into room_publish_proposals (room_id, proposed_by, mission, goal_usd, thumbnail, created_at)
      values (${roomId}, ${context.userId}, ${mission}, ${goalUsd}, ${thumbnail}, now())
      on conflict (room_id) do update set
        proposed_by = excluded.proposed_by,
        mission = excluded.mission,
        goal_usd = excluded.goal_usd,
        thumbnail = excluded.thumbnail,
        created_at = now()
    `;
    await sql`delete from room_publish_votes where room_id = ${roomId}`;
    await sql`
      insert into room_publish_votes (room_id, user_id)
      values (${roomId}, ${context.userId})
      on conflict (room_id, user_id) do nothing
    `;
    return { ok: true as const };
  });

export const agreePublish = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await ensurePublishSchema();
    const founderIds = await requireFounder(roomId, context.userId);
    const sql = await getSql();
    const proposals = await sql<{ room_id: string }>`
      select room_id from room_publish_proposals where room_id = ${roomId}
    `;
    if (!proposals[0]) throw new Error("Nothing to agree to yet");
    await sql`
      insert into room_publish_votes (room_id, user_id)
      values (${roomId}, ${context.userId})
      on conflict (room_id, user_id) do nothing
    `;
    const votes = await sql<{ user_id: string }>`
      select user_id from room_publish_votes where room_id = ${roomId}
    `;
    const agreed = new Set(votes.map((row) => row.user_id));
    if (founderIds.length >= 3 && founderIds.every((id) => agreed.has(id))) {
      await applyProposal(roomId);
    }
    return { ok: true as const };
  });
