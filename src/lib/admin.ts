import { createServerFn } from "@tanstack/react-start";
import { contributions, founderSkills, skillIds, type ContributionId } from "@/data/founder-skills";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { ensureSignupAlerts, safeWebhookUrl } from "@/lib/signup-alerts";
import { ensureLandTable } from "@/lib/land";

export type AdminSignup = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  complete: boolean;
  wantsToFound: boolean;
  skipped: boolean;
  unanswered: boolean;
  skills: { id: string; label: string }[];
  contribution: { id: ContributionId; label: string } | null;
  hoursPerWeek: number | null;
  hasLand: boolean | null;
  landLocation: string | null;
  landAcres: number | null;
  photoCount: number;
};

function parseSkills(raw: string | null): { id: string; label: string }[] {
  if (!raw) return [];
  try {
    const value = JSON.parse(raw) as unknown;
    if (!Array.isArray(value)) return [];
    return founderSkills.filter((s) => value.includes(s.id) && skillIds.has(s.id)).map((s) => ({
      id: s.id,
      label: s.label,
    }));
  } catch {
    return [];
  }
}

function parsePhotoCount(raw: string | null): number {
  if (!raw) return 0;
  try {
    const value = JSON.parse(raw) as unknown;
    if (!Array.isArray(value)) return 0;
    return value.filter((src) => typeof src === "string" && src.startsWith("data:image/")).length;
  } catch {
    return 0;
  }
}

export const OWNER_EMAIL = "benbloch99@gmail.com";

async function ensureAdminsTable() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists admins (
      user_id text primary key
    )
  `).catch(() => undefined);
}

export async function seedOwnerAdmin() {
  await ensureAdminsTable();
  const sql = await getSql();
  await sql`
    insert into admins (user_id)
    select "id" from "user" where lower("email") = ${OWNER_EMAIL}
    on conflict (user_id) do nothing
  `.catch(() => undefined);
  await sql`
    delete from admins
    where user_id not in (select "id" from "user" where lower("email") = ${OWNER_EMAIL})
  `.catch(() => undefined);
}

export async function isAdminUser(userId: string) {
  await seedOwnerAdmin();
  const sql = await getSql();
  const users = await sql<{ email: string | null }>`
    select "email" from "user" where "id" = ${userId} limit 1
  `;
  if ((users[0]?.email ?? "").trim().toLowerCase() === OWNER_EMAIL) return true;
  const mine = await sql<{ user_id: string }>`
    select user_id from admins where user_id = ${userId}
  `;
  return Boolean(mine[0]);
}

export async function requireAdmin(userId: string) {
  if (!(await isAdminUser(userId))) throw new Error("Not an admin");
}

export const amIAdmin = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await keepOnlyOwnerOnce();
    await seedOwnerAdmin();
    return { admin: await isAdminUser(context.userId), unclaimed: false };
  });

export const listSignups = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<AdminSignup[]> => {
    await requireAdmin(context.userId);
    await ensureSignupAlerts();
    const sql = await getSql();
    const rows = await sql<{
      id: string;
      name: string | null;
      email: string | null;
      created_at: string;
      wants_to_found: boolean | null;
      onboarding_complete: boolean | null;
      skills: string | null;
      contribution: string | null;
      hours_per_week: number | null;
      has_land: boolean | null;
      land_location: string | null;
      land_acres: number | null;
      photo_data: string | null;
    }>`
      select
        u."id",
        u."name",
        u."email",
        u."createdAt"::text as created_at,
        f.wants_to_found,
        f.onboarding_complete,
        f.skills,
        f.contribution,
        f.hours_per_week,
        f.has_land,
        f.land_location,
        f.land_acres,
        f.photo_data
      from "user" u
      left join founder_profiles f on f.user_id = u."id"
      order by u."createdAt" desc
    `;
    return rows.map((row) => {
      const wantsToFound = Boolean(row.wants_to_found);
      const complete = Boolean(row.onboarding_complete);
      const skipped = complete && !wantsToFound;
      const unanswered = !complete && !wantsToFound;
      const contribution = contributions.find((c) => c.id === row.contribution) ?? null;
      return {
        id: row.id,
        name: row.name?.trim() || "Member",
        email: row.email ?? "",
        createdAt: row.created_at,
        complete,
        wantsToFound,
        skipped,
        unanswered,
        skills: parseSkills(row.skills),
        contribution: contribution ? { id: contribution.id, label: contribution.label } : null,
        hoursPerWeek: row.hours_per_week,
        hasLand: row.has_land,
        landLocation: row.land_location,
        landAcres: row.land_acres != null ? Number(row.land_acres) : null,
        photoCount: parsePhotoCount(row.photo_data),
      };
    });
  });

export const unreadSignupCount = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await requireAdmin(context.userId);
    await ensureSignupAlerts();
    const sql = await getSql();
    const rows = await sql<{ n: number }>`
      select count(*)::int as n from signup_alerts where read_at is null
    `;
    const latest = await sql<{ name: string; email: string }>`
      select name, email from signup_alerts
      where read_at is null
      order by created_at desc
      limit 1
    `;
    return { count: rows[0]?.n ?? 0, latest: latest[0] ?? null };
  });

export const markSignupAlertsRead = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await requireAdmin(context.userId);
    const sql = await getSql();
    await sql`update signup_alerts set read_at = now() where read_at is null`;
    return { ok: true as const };
  });

export const getSignupWebhook = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await requireAdmin(context.userId);
    const sql = await getSql();
    const rows = await sql<{ value: string }>`
      select value from admin_settings where key = 'signup_webhook_url'
    `;
    return { url: rows[0]?.value ?? "" };
  });

export const saveSignupWebhook = createServerFn({ method: "POST" })
  .validator((url: string) => (typeof url === "string" ? url.trim() : ""))
  .middleware([authMiddleware])
  .handler(async ({ context, data: url }) => {
    await requireAdmin(context.userId);
    const cleaned = url ? safeWebhookUrl(url) : "";
    if (url && !cleaned) throw new Error("That webhook URL was not accepted. Use https.");
    const sql = await getSql();
    await sql`
      insert into admin_settings (key, value)
      values ('signup_webhook_url', ${cleaned ?? ""})
      on conflict (key) do update set value = excluded.value
    `;
    return { url: cleaned ?? "" };
  });

export const getSignupPhotos = createServerFn({ method: "POST" })
  .validator((userId: string) => {
    if (typeof userId !== "string" || userId.trim().length < 1) throw new Error("Unknown person");
    return userId.trim();
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: userId }) => {
    await requireAdmin(context.userId);
    const sql = await getSql();
    const rows = await sql<{ photo_data: string | null }>`
      select photo_data from founder_profiles where user_id = ${userId}
    `;
    const raw = rows[0]?.photo_data;
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((src): src is string => typeof src === "string" && src.startsWith("data:image/"))
        .map((src) => ({ src }));
    } catch {
      return [];
    }
  });

export async function wipeUser(
  sql: Awaited<ReturnType<typeof getSql>>,
  userId: string,
  opts: { keepEmailData?: boolean } = {},
) {
  await ensureLandTable();
  const emails = await sql<{ email: string | null }>`
    select "email" from "user" where "id" = ${userId} limit 1
  `;
  const email = (emails[0]?.email ?? "").trim().toLowerCase();
  const run = async (label: string, fn: () => Promise<unknown>) => {
    try {
      await fn();
    } catch (err) {
      console.error(`[wipeUser] ${label}`, err);
    }
  };

  await run("poll votes by user", () => sql`delete from room_poll_votes where user_id = ${userId}`);
  await run("poll votes on their polls", () => sql`
    delete from room_poll_votes
    where poll_id in (select id from room_polls where created_by = ${userId})
  `);
  await run("poll options on their polls", () => sql`
    delete from room_poll_options
    where poll_id in (select id from room_polls where created_by = ${userId})
  `);
  await run("polls", () => sql`delete from room_polls where created_by = ${userId}`);
  await run("agreement signatures by user", () => sql`delete from room_agreement_signatures where user_id = ${userId}`);
  await run("signatures on their agreements", () => sql`
    delete from room_agreement_signatures
    where agreement_id in (select id from room_agreements where proposed_by = ${userId})
  `);
  await run("agreements", () => sql`delete from room_agreements where proposed_by = ${userId}`);
  await run("tasks", () => sql`delete from room_tasks where user_id = ${userId} or completed_by = ${userId}`);
  await run("messages", () => sql`delete from room_messages where user_id = ${userId}`);
  await run("members", () => sql`delete from room_members where user_id = ${userId}`);
  await run("join requests", () => sql`delete from room_join_requests where user_id = ${userId}`);
  await run("pledges", () => sql`delete from room_funding_pledges where user_id = ${userId}`);
  await run("land", () => sql`delete from land_listings where user_id = ${userId}`);
  if (email && !opts.keepEmailData) {
    await run("land by email", () => sql`delete from land_listings where lower(owner_email) = ${email}`);
    await run("identity", () => sql`
      delete from identity_profiles where user_id = ${userId} or lower(email) = ${email}
    `);
    await run("chat archive", () => sql`delete from chat_archive where lower(author_email) = ${email}`);
  } else {
    await run("identity", () => sql`delete from identity_profiles where user_id = ${userId}`);
  }
  await run("founder photos", () => sql`delete from founder_photos where user_id = ${userId}`);
  await run("founder profiles", () => sql`delete from founder_profiles where user_id = ${userId}`);
  await run("member profiles", () => sql`delete from member_profiles where user_id = ${userId}`);
  await run("bookmarks", () => sql`delete from bookmarks where user_id = ${userId}`);
  await run("presence", () => sql`delete from presence where user_id = ${userId}`);
  await run("comments", () => sql`delete from comments where user_id = ${userId}`);
  await run("signup alerts", () => sql`delete from signup_alerts where user_id = ${userId}`);
  await run("admins", () => sql`delete from admins where user_id = ${userId}`);
  await run("rooms founders", () => sql`
    update rooms
    set founder_a = case when founder_a = ${userId} then null else founder_a end,
        founder_b = case when founder_b = ${userId} then null else founder_b end,
        founder_c = case when founder_c = ${userId} then null else founder_c end
    where founder_a = ${userId} or founder_b = ${userId} or founder_c = ${userId}
  `);
  await run("verification", () => sql`delete from verification where "value" = ${userId}`);
  await run("session", () => sql`delete from "session" where "userId" = ${userId}`);
  await run("account", () => sql`delete from "account" where "userId" = ${userId}`);
  await sql`delete from "user" where "id" = ${userId}`;
}

const globalRef = globalThis as typeof globalThis & { __ownerOnlyPurged__?: boolean };

export async function keepOnlyOwner() {
  const sql = await getSql();
  const others = await sql<{ id: string; email: string | null }>`
    select "id", "email" from "user"
    where "email" is null or lower("email") <> ${OWNER_EMAIL}
  `;
  for (const row of others) {
    await wipeUser(sql, row.id);
  }
  const owners = await sql<{ id: string }>`
    select "id" from "user" where lower("email") = ${OWNER_EMAIL}
    order by "createdAt" asc
  `;
  for (const extra of owners.slice(1)) {
    await wipeUser(sql, extra.id, { keepEmailData: true });
  }
  await sql`
    delete from identity_profiles
    where email is null or lower(email) <> ${OWNER_EMAIL}
  `.catch(() => undefined);
  await seedOwnerAdmin();
  const left = await sql<{ n: number; email: string | null }>`
    select count(*)::int as n, min("email") as email from "user"
  `;
  console.info("[auth] keepOnlyOwner", { remaining: left[0]?.n ?? 0, email: left[0]?.email, removed: others.length + Math.max(0, owners.length - 1) });
  return { ok: true as const, remaining: left[0]?.n ?? 0, removed: others.length + Math.max(0, owners.length - 1) };
}

export async function keepOnlyOwnerOnce() {
  if (globalRef.__ownerOnlyPurged__) return;
  const sql = await getSql();
  await sql.query(`
    create table if not exists app_meta (
      key text primary key,
      value text not null,
      updated_at timestamptz not null default now()
    )
  `).catch(() => undefined);
  const done = await sql<{ value: string }>`
    select value from app_meta where key = 'keep_only_owner'
  `.catch(() => []);
  if (done[0]?.value === "done") {
    globalRef.__ownerOnlyPurged__ = true;
    return;
  }
  try {
    await keepOnlyOwner();
    await sql`
      insert into app_meta (key, value, updated_at)
      values ('keep_only_owner', 'done', now())
      on conflict (key) do update set value = 'done', updated_at = now()
    `;
    globalRef.__ownerOnlyPurged__ = true;
  } catch (err) {
    console.error("[auth] keepOnlyOwnerOnce", err);
  }
}

export async function wipeUserByEmail(email: string) {
  const target = email.trim().toLowerCase();
  if (!target) throw new Error("Unknown person");
  const sql = await getSql();
  const users = await sql<{ id: string; name: string | null }>`
    select "id", "name" from "user" where lower(email) = ${target}
  `;
  if (!users[0]) return { ok: true as const, deleted: 0, name: null as string | null };
  for (const row of users) {
    await wipeUser(sql, row.id);
  }
  return { ok: true as const, deleted: users.length, name: users[0].name?.trim() || "Member" };
}

export const deleteAccount = createServerFn({ method: "POST" })
  .validator((userId: string) => {
    if (typeof userId !== "string" || userId.trim().length < 1) throw new Error("Unknown person");
    return userId.trim();
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: userId }) => {
    await requireAdmin(context.userId);
    if (userId === context.userId) throw new Error("You cannot delete your own account from here");
    const sql = await getSql();
    const users = await sql<{ id: string; name: string; email: string | null }>`
      select "id", "name", "email" from "user" where "id" = ${userId}
    `;
    if (!users[0]) throw new Error("Unknown person");
    if ((users[0].email ?? "").trim().toLowerCase() === OWNER_EMAIL) {
      throw new Error("That account stays");
    }
    await wipeUser(sql, userId);
    return { ok: true as const, name: users[0].name?.trim() || "Member" };
  });
