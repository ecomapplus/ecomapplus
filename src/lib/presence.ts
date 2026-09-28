import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

const ONLINE_SECS = 90;

export async function ensurePresence() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists presence (
      user_id text primary key,
      last_seen timestamptz not null default now()
    )
  `).catch(() => undefined);
}

export async function markPresent(userId: string) {
  await ensurePresence();
  const sql = await getSql();
  await sql`
    insert into presence (user_id, last_seen)
    values (${userId}, now())
    on conflict (user_id) do update set last_seen = now()
  `;
}

export async function onlineUserIds(): Promise<Set<string>> {
  await ensurePresence();
  const sql = await getSql();
  const rows = await sql<{ user_id: string }>`
    select user_id from presence
    where last_seen > now() - make_interval(secs => ${ONLINE_SECS})
  `;
  return new Set(rows.map((row) => row.user_id));
}

export const beatPresence = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await markPresent(context.userId);
    return { ok: true as const };
  });

/** Signed-in Plus members seen in the last minute and a half. */
export const plusMembersOnline = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { hashPlusIdentity, activePlusEmailHashes } = await import("@/lib/referral-store.server");
    const { PLUS_ADMIN_EMAILS } = await import("@/lib/plus-membership");
    await ensurePresence();
    const sql = await getSql();
    const online = await sql<{ email: string }>`
      select distinct lower(u.email) as email
      from presence p
      join "user" u on u.id = p.user_id
      where p.last_seen > now() - make_interval(secs => ${ONLINE_SECS})
        and u.email is not null
        and u.email <> ''
    `;
    const members = await activePlusEmailHashes();
    const admins = new Set(PLUS_ADMIN_EMAILS.map((email) => email.toLowerCase()));
    let count = 0;
    for (const row of online) {
      const email = row.email.trim().toLowerCase();
      if (!email) continue;
      if (admins.has(email) || members.has(hashPlusIdentity(email))) count += 1;
    }
    return { count };
  } catch {
    return { count: 0 };
  }
});
