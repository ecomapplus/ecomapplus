import { hashPassword } from "@better-auth/utils/password";
import { getSql } from "@/lib/db";
import { keepOnlyOwnerOnce, seedOwnerAdmin, wipeUser, wipeUserByEmail } from "@/lib/admin";

const OWNER_EMAIL = "benbloch99@gmail.com";
const OWNER_NAME = "Ben Bloch";
/** Used only when the owner account is first created. Never overwrites a set password. */
const INITIAL_OWNER_PASSWORD = "Atlas99hall!";

async function ensureCredential(sql: Awaited<ReturnType<typeof getSql>>, userId: string) {
  const existing = await sql<{ id: string }>`
    select id from account
    where "userId" = ${userId} and "providerId" = 'credential'
  `;
  if (existing[0]) return;
  const hash = await hashPassword(INITIAL_OWNER_PASSWORD);
  const accountId = crypto.randomUUID().replace(/-/g, "").slice(0, 32);
  await sql`
    insert into account (
      id, "accountId", "providerId", "userId", password, "createdAt", "updatedAt"
    )
    values (
      ${accountId}, ${userId}, 'credential', ${userId}, ${hash}, now(), now()
    )
  `;
}

export async function ensureOwnerAccount() {
  const sql = await getSql();
  await wipeUserByEmail("fred258098@gmail.com").catch(() => undefined);
  await wipeUserByEmail("guest.login.test@example.com").catch(() => undefined);
  await wipeUserByEmail("fresh.member@example.com").catch(() => undefined);
  await keepOnlyOwnerOnce();

  const users = await sql<{ id: string; email: string }>`
    select "id", "email" from "user" where lower("email") = ${OWNER_EMAIL}
    order by "createdAt" asc
  `;
  if (users.length > 1) {
    for (const extra of users.slice(1)) {
      await wipeUser(sql, extra.id, { keepEmailData: true });
    }
  }

  let owner = users[0];
  if (!owner) {
    const id = crypto.randomUUID().replace(/-/g, "").slice(0, 32);
    await sql`
      insert into "user" ("id", "name", "email", "emailVerified", "createdAt", "updatedAt")
      values (${id}, ${OWNER_NAME}, ${OWNER_EMAIL}, true, now(), now())
    `;
    owner = { id, email: OWNER_EMAIL };
  } else {
    await sql`
      update "user" set "email" = ${OWNER_EMAIL}, "updatedAt" = now()
      where "id" = ${owner.id} and "email" is distinct from ${OWNER_EMAIL}
    `;
  }

  await ensureCredential(sql, owner.id);
  await seedOwnerAdmin();
  return { ok: true as const };
}
