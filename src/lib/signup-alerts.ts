import { getSql } from "@/lib/db";

export type NewSignup = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function listUserIds(): Promise<Set<string>> {
  const sql = await getSql();
  const rows = await sql<{ id: string }>`select "id" from "user"`;
  return new Set(rows.map((row) => row.id));
}

/**
 * Insert any account that is not yet in signup_alerts.
 * Admins are marked already-seen so the owner is not pinged for themselves.
 */
export async function ensureSignupAlerts(): Promise<void> {
  const sql = await getSql();
  await sql`
    insert into signup_alerts (id, user_id, name, email, created_at, read_at)
    select
      'sig-' || u."id",
      u."id",
      coalesce(u."name", ''),
      coalesce(u."email", ''),
      u."createdAt",
      case
        when exists (select 1 from admins a where a.user_id = u."id") then now()
        else null
      end
    from "user" u
    on conflict (user_id) do nothing
  `;
}

export async function recordNewSignups(before: Set<string>): Promise<NewSignup[]> {
  const sql = await getSql();
  const rows = await sql<{
    id: string;
    name: string;
    email: string;
    created_at: string;
  }>`
    select "id", "name", "email", "createdAt"::text as created_at
    from "user"
  `;
  const fresh = rows.filter((row) => !before.has(row.id));
  if (fresh.length === 0) return [];

  const autoRead = before.size === 0;
  const created: NewSignup[] = [];
  for (const row of fresh) {
    const id = `sig-${row.id}`;
    await sql`
      insert into signup_alerts (id, user_id, name, email, created_at, read_at)
      values (
        ${id},
        ${row.id},
        ${row.name ?? ""},
        ${row.email ?? ""},
        now(),
        ${autoRead ? new Date().toISOString() : null}
      )
      on conflict (user_id) do nothing
    `;
    created.push({
      id: row.id,
      name: row.name?.trim() || "Member",
      email: row.email,
      createdAt: row.created_at,
    });
  }
  if (!autoRead) {
    for (const person of created) {
      void pingSignupWebhook(person).catch((err) => {
        console.error("[signup-alerts] webhook failed", err);
      });
    }
  }
  return created;
}

const PRIVATE_HOST = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.|::1|0\.0\.0\.0|169\.254\.)/i;

export function safeWebhookUrl(raw: string): string | null {
  try {
    const url = new URL(raw.trim());
    if (url.protocol !== "https:") return null;
    if (PRIVATE_HOST.test(url.hostname) || url.hostname.includes(":")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function pingSignupWebhook(person: NewSignup) {
  const sql = await getSql();
  const rows = await sql<{ value: string }>`
    select value from admin_settings where key = 'signup_webhook_url'
  `;
  const url = rows[0]?.value ? safeWebhookUrl(rows[0].value) : null;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "village-charter",
      event: "signup",
      userId: person.id,
      name: person.name,
      email: person.email,
      createdAt: person.createdAt,
    }),
  });
}
