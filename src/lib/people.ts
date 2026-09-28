import { createServerFn } from "@tanstack/react-start";
import { villageRef, type VillageRef } from "@/data/communities";
import { optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { type FounderProfile, readProfile } from "@/lib/founders";
import { markPresent, onlineUserIds } from "@/lib/presence";
import { readBio } from "@/lib/profile";

export type PersonCard = {
  id: string;
  name: string;
  image: string | null;
  isMe: boolean;
  wantsToFound: boolean;
  online: boolean;
  hasAccount: boolean;
  /** Villages this person and the viewer have both saved. Zero if you are signed out. */
  sharedBookmarks: number;
};

export type PersonProfile = PersonCard & {
  founder: FounderProfile | null;
  bio: string;
  saved: VillageRef[];
};

function label(name: string | null): string {
  const trimmed = name?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Member";
}

async function readSavedVillages(userId: string): Promise<VillageRef[]> {
  const sql = await getSql();
  const rows = await sql<{ community_slug: string }>`
    select community_slug from bookmarks
    where user_id = ${userId}
    order by created_at desc
  `;
  const seen = new Set<string>();
  const saved: VillageRef[] = [];
  for (const row of rows) {
    const village = villageRef(row.community_slug);
    if (!village || seen.has(village.slug)) continue;
    seen.add(village.slug);
    saved.push(village);
  }
  return saved;
}

async function sharedBookmarkCounts(viewerId: string | null): Promise<Map<string, number>> {
  const counts = new Map<string, number>();
  if (!viewerId) return counts;
  const sql = await getSql();
  const rows = await sql<{ id: string; n: number }>`
    select theirs.user_id as id, count(*)::int as n
    from bookmarks mine
    inner join bookmarks theirs
      on theirs.community_slug = mine.community_slug
     and theirs.user_id <> mine.user_id
    where mine.user_id = ${viewerId}
    group by theirs.user_id
  `;
  for (const row of rows) counts.set(row.id, Number(row.n));
  return counts;
}

export const listPeople = createServerFn({ method: "GET" })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context }): Promise<PersonCard[]> => {
    const sql = await getSql();
    if (context.userId) await markPresent(context.userId).catch(() => undefined);
    const online = await onlineUserIds();
    const rows = await sql<{
      id: string;
      name: string;
      image: string | null;
      wants_to_found: boolean | null;
    }>`
      select u."id", u."name", u."image", f.wants_to_found
      from "user" u
      left join founder_profiles f on f.user_id = u."id"
      order by u."name" asc
    `;
    const me = context.userId;
    const shared = await sharedBookmarkCounts(me ?? null);
    return rows.map((row) => ({
      id: row.id,
      name: label(row.name),
      image: row.image,
      isMe: Boolean(me) && row.id === me,
      wantsToFound: Boolean(row.wants_to_found),
      online: online.has(row.id),
      hasAccount: true,
      sharedBookmarks: row.id === me ? 0 : shared.get(row.id) ?? 0,
    }));
  });

export const getPerson = createServerFn({ method: "GET" })
  .validator((id: string) => {
    if (typeof id !== "string" || id.trim().length < 1 || id.length > 80) {
      throw new Error("Unknown person");
    }
    return id.trim();
  })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: id }): Promise<PersonProfile> => {
    const sql = await getSql();
    const users = await sql<{ id: string; name: string; image: string | null; email: string | null }>`
      select "id", "name", "image", "email" from "user" where "id" = ${id}
    `;
    const user = users[0];
    if (!user) throw new Error("Unknown person");
    const portraits = user.email
      ? await sql<{ image: string | null }>`
          select image from identity_profiles where lower(email) = lower(${user.email}) limit 1
        `
      : [];
    const founder = await readProfile(id);
    const online = await onlineUserIds();
    const me = context.userId ?? null;
    const shared = id === me ? 0 : (await sharedBookmarkCounts(me)).get(id) ?? 0;
    return {
      id: user.id,
      name: label(user.name),
      image: portraits[0]?.image || user.image,
      isMe: Boolean(me) && user.id === me,
      wantsToFound: Boolean(founder?.wantsToFound),
      online: online.has(user.id),
      hasAccount: true,
      sharedBookmarks: shared,
      founder,
      bio: await readBio(id),
      saved: await readSavedVillages(id),
    };
  });
