import { createServerFn } from "@tanstack/react-start";
import { founderSkills, skillIds } from "@/data/founder-skills";
import { optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type RoomSkillCount = {
  id: string;
  label: string;
  detail: string;
  count: number;
};

export type SkillPerson = {
  id: string;
  name: string;
};

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown chat");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown chat");
  return trimmed;
}

function assertSkillId(id: unknown): string {
  if (typeof id !== "string" || !skillIds.has(id)) throw new Error("Unknown skill");
  return id;
}

function parseSkillIds(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const value = JSON.parse(raw) as unknown;
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((id): id is string => typeof id === "string" && skillIds.has(id)))];
  } catch {
    return [];
  }
}

function tally(rows: { skills: string | null }[]): RoomSkillCount[] {
  const counts = new Map<string, number>(founderSkills.map((skill) => [skill.id, 0]));
  for (const row of rows) {
    for (const id of parseSkillIds(row.skills)) {
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }
  }
  return founderSkills.map((skill) => ({
    id: skill.id,
    label: skill.label,
    detail: skill.detail,
    count: counts.get(skill.id) ?? 0,
  }));
}

function peopleWithSkill(
  rows: { id: string; name: string | null; skills: string | null }[],
  skillId: string,
): SkillPerson[] {
  return rows
    .filter((row) => parseSkillIds(row.skills).includes(skillId))
    .map((row) => ({
      id: row.id,
      name: row.name?.trim() || "Member",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function loadRoomSkillCounts(roomId: string, kind: "public" | "private"): Promise<RoomSkillCount[]> {
  const sql = await getSql();
  if (kind === "public") {
    const rows = await sql<{ skills: string | null }>`
      select skills from founder_profiles
    `;
    return tally(rows);
  }
  const rows = await sql<{ skills: string | null }>`
    select f.skills
    from room_members m
    left join founder_profiles f on f.user_id = m.user_id
    where m.room_id = ${roomId}
  `;
  return tally(rows);
}

async function loadSkillPeople(roomId: string, kind: "public" | "private", skillId: string): Promise<SkillPerson[]> {
  const sql = await getSql();
  if (kind === "public") {
    const rows = await sql<{ id: string; name: string | null; skills: string | null }>`
      select u."id", u."name", f.skills
      from founder_profiles f
      join "user" u on u."id" = f.user_id
    `;
    return peopleWithSkill(rows, skillId);
  }
  const rows = await sql<{ id: string; name: string | null; skills: string | null }>`
    select u."id", u."name", f.skills
    from room_members m
    join "user" u on u."id" = m.user_id
    left join founder_profiles f on f.user_id = m.user_id
    where m.room_id = ${roomId}
  `;
  return peopleWithSkill(rows, skillId);
}

async function assertCanReadSkills(roomId: string, userId: string | null) {
  const sql = await getSql();
  const rooms = await sql<{ kind: string }>`
    select kind from rooms where id = ${roomId}
  `;
  const room = rooms[0];
  if (!room) throw new Error("Unknown chat");
  const kind = room.kind === "public" ? "public" : "private";
  if (kind === "public") return kind;

  const counts = await sql<{ n: number }>`
    select count(*)::int as n from room_members where room_id = ${roomId}
  `;
  const memberCount = counts[0]?.n ?? 0;
  const mine = userId
    ? await sql<{ user_id: string }>`
        select user_id from room_members
        where room_id = ${roomId} and user_id = ${userId}
      `
    : [];
  const isMember = Boolean(mine[0]);
  if (!isMember && memberCount < 3) throw new Error("You are not in this chat");
  return kind;
}

export const getRoomSkillCounts = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: roomId }): Promise<RoomSkillCount[]> => {
    const kind = await assertCanReadSkills(roomId, context.userId);
    return loadRoomSkillCounts(roomId, kind);
  });

export const listRoomSkillPeople = createServerFn({ method: "POST" })
  .validator((input: { roomId: string; skillId: string }) => ({
    roomId: assertRoomId(input.roomId),
    skillId: assertSkillId(input.skillId),
  }))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data }): Promise<SkillPerson[]> => {
    const kind = await assertCanReadSkills(data.roomId, context.userId);
    return loadSkillPeople(data.roomId, kind, data.skillId);
  });
