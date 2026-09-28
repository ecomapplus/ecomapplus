import { createServerFn } from "@tanstack/react-start";
import { getCommunity } from "@/data/communities";
import { isAdminUser } from "@/lib/admin";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type VillageComment = {
  id: number;
  userId: string;
  slug: string;
  body: string;
  authorName: string;
  createdAt: string;
};

export type VillageSaver = {
  id: string;
  name: string;
  image: string | null;
};

export type VillageSocial = {
  comments: VillageComment[];
  bookmarkCount: number;
  savers: VillageSaver[];
};

function labelName(name: string | null): string {
  const trimmed = name?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Member";
}

function assertSlug(slug: unknown): string {
  if (typeof slug !== "string") throw new Error("Unknown community");
  const trimmed = slug.trim();
  if (!getCommunity(trimmed)) throw new Error("Unknown community");
  return trimmed;
}

function assertBody(body: unknown): string {
  if (typeof body !== "string") throw new Error("Write a comment first");
  const trimmed = body.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Write a bit more");
  if (trimmed.length > 1000) throw new Error("Keep it under 1,000 characters");
  return trimmed;
}

function mapComment(row: {
  id: number;
  user_id: string;
  community_slug: string;
  body: string;
  author_name: string;
  created_at: string;
}): VillageComment {
  return {
    id: Number(row.id),
    userId: row.user_id,
    slug: row.community_slug,
    body: row.body,
    authorName: row.author_name,
    createdAt: row.created_at,
  };
}

export const loadVillageSocial = createServerFn({ method: "GET" })
  .validator((slug: string) => assertSlug(slug))
  .handler(async ({ data: slug }): Promise<VillageSocial> => {
    const sql = await getSql();
    const comments = await sql<{
      id: number;
      user_id: string;
      community_slug: string;
      body: string;
      author_name: string;
      created_at: string;
    }>`
      select id, user_id, community_slug, body, author_name, created_at::text as created_at
      from comments
      where community_slug = ${slug}
      order by created_at desc
    `;
    const savers = await sql<{
      id: string;
      name: string | null;
      user_image: string | null;
      identity_image: string | null;
    }>`
      select
        u."id" as id,
        u."name" as name,
        u."image" as user_image,
        ip.image as identity_image
      from bookmarks b
      inner join "user" u on u."id" = b.user_id
      left join identity_profiles ip on u."email" is not null and lower(ip.email) = lower(u."email")
      where b.community_slug = ${slug}
      order by b.created_at desc
    `;
    const people: VillageSaver[] = savers.map((row) => ({
      id: row.id,
      name: labelName(row.name),
      image: row.identity_image || row.user_image,
    }));
    return {
      comments: comments.map(mapComment),
      bookmarkCount: people.length,
      savers: people,
    };
  });

export const myBookmark = createServerFn({ method: "GET" })
  .validator((slug: string) => assertSlug(slug))
  .middleware([authMiddleware])
  .handler(async ({ context, data: slug }) => {
    const sql = await getSql();
    const rows = await sql<{ community_slug: string }>`
      select community_slug from bookmarks
      where user_id = ${context.userId} and community_slug = ${slug}
    `;
    return { bookmarked: rows.length > 0 };
  });

export const toggleBookmark = createServerFn({ method: "POST" })
  .validator((slug: string) => assertSlug(slug))
  .middleware([authMiddleware])
  .handler(async ({ context, data: slug }) => {
    const sql = await getSql();
    const existing = await sql<{ community_slug: string }>`
      select community_slug from bookmarks
      where user_id = ${context.userId} and community_slug = ${slug}
    `;
    if (existing.length > 0) {
      await sql`
        delete from bookmarks
        where user_id = ${context.userId} and community_slug = ${slug}
      `;
      return { bookmarked: false };
    }
    await sql`
      insert into bookmarks (user_id, community_slug)
      values (${context.userId}, ${slug})
    `;
    return { bookmarked: true };
  });

export const listMyBookmarks = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    return sql<{ community_slug: string; created_at: string }>`
      select community_slug, created_at::text as created_at
      from bookmarks
      where user_id = ${context.userId}
      order by created_at desc
    `;
  });

export type LeaderboardRow = {
  slug: string;
  count: number;
};

export const listBookmarkLeaderboard = createServerFn({ method: "GET" })
  .handler(async (): Promise<LeaderboardRow[]> => {
    const sql = await getSql();
    const rows = await sql<{ slug: string; count: number }>`
      select community_slug as slug, count(*)::int as count
      from bookmarks
      group by community_slug
      having count(*) > 0
      order by count desc, community_slug asc
    `;
    return rows
      .map((row) => ({ slug: row.slug, count: Number(row.count) }))
      .filter((row) => Boolean(getCommunity(row.slug)));
  });

export const addComment = createServerFn({ method: "POST" })
  .validator((input: { slug: string; body: string }) => ({
    slug: assertSlug(input.slug),
    body: assertBody(input.body),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const users = await sql<{ name: string | null; email: string | null }>`
      select "name", "email" from "user" where "id" = ${context.userId}
    `;
    const authorName =
      users[0]?.name?.trim() ||
      users[0]?.email?.split("@")[0] ||
      "Member";
    const rows = await sql<{
      id: number;
      user_id: string;
      community_slug: string;
      body: string;
      author_name: string;
      created_at: string;
    }>`
      insert into comments (user_id, community_slug, body, author_name)
      values (${context.userId}, ${data.slug}, ${data.body}, ${authorName})
      returning id, user_id, community_slug, body, author_name, created_at::text as created_at
    `;
    return mapComment(rows[0]);
  });

export const deleteComment = createServerFn({ method: "POST" })
  .validator((id: number) => {
    if (!Number.isInteger(id) || id < 1) throw new Error("Unknown comment");
    return id;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    const admin = await isAdminUser(context.userId);
    const rows = admin
      ? await sql`delete from comments where id = ${id} returning id`
      : await sql`delete from comments where id = ${id} and user_id = ${context.userId} returning id`;
    if (!rows[0]) throw new Error("Could not remove that.");
    return { ok: true };
  });

export function isUnauthorized(err: unknown): boolean {
  if (!err) return false;
  if (typeof err === "object" && "message" in err && (err as { message: string }).message === "Unauthorized") {
    return true;
  }
  return String(err).includes("Unauthorized");
}

export const BOOKMARKS_CHANGED = "vc:bookmarks-changed";

export function emitBookmarksChanged(slug: string, bookmarked: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(BOOKMARKS_CHANGED, { detail: { slug, bookmarked } }));
}

