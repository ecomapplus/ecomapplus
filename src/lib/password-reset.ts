import { randomBytes } from "node:crypto";
import { hashPassword, verifyPassword } from "@better-auth/utils/password";
import { getSql } from "@/lib/db";

const TOKEN_MINUTES = 20;
const MAX_REQUESTS = 6;
const WINDOW_MS = 15 * 60_000;
const MIN_PASSWORD = 8;

const hits = new Map<string, number[]>();
let dummyHashPromise: Promise<string> | null = null;

function dummyHash() {
  dummyHashPromise ??= hashPassword("not-a-real-password-dummy");
  return dummyHashPromise;
}

function tooMany(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export function normalizeEmail(value: unknown) {
  if (typeof value !== "string") throw new Error("Enter the email on the account");
  const email = value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    throw new Error("Enter the email on the account");
  }
  return email;
}

export function normalizePassword(value: unknown) {
  if (typeof value !== "string") throw new Error("Choose a password");
  if (value.length < MIN_PASSWORD) throw new Error("Use at least 8 characters");
  if (value.length > 128) throw new Error("Keep the password under 128 characters");
  return value;
}

export function normalizeToken(value: unknown) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]{16,80}$/.test(value)) {
    throw new Error("That reset is expired. Request a new one.");
  }
  return value;
}

export async function issueResetToken(email: string): Promise<{ ok: true; token: string }> {
  const dummy = randomBytes(18).toString("base64url");
  if (tooMany(email) || tooMany("global")) {
    await verifyPassword(await dummyHash(), "x").catch(() => undefined);
    return { ok: true, token: dummy };
  }

  const sql = await getSql();
  const users = await sql<{ id: string }>`
    select "id" from "user" where lower("email") = ${email} limit 1
  `;
  const user = users[0];
  if (!user) {
    await verifyPassword(await dummyHash(), "x").catch(() => undefined);
    return { ok: true, token: dummy };
  }

  await sql`delete from verification where "value" = ${user.id} and "identifier" like ${"reset-password:%"}`;
  const token = randomBytes(18).toString("base64url");
  const id = randomBytes(16).toString("hex");
  const expiresAt = new Date(Date.now() + TOKEN_MINUTES * 60_000).toISOString();
  await sql`
    insert into verification (id, identifier, value, "expiresAt", "createdAt", "updatedAt")
    values (
      ${id},
      ${`reset-password:${token}`},
      ${user.id},
      ${expiresAt},
      now(),
      now()
    )
  `;
  return { ok: true, token };
}

export async function applyResetToken(token: string, password: string): Promise<{ ok: true; email: string }> {
  const sql = await getSql();
  const rows = await sql<{ id: string; value: string; expiresAt: string | Date }>`
    select id, value, "expiresAt" from verification
    where identifier = ${`reset-password:${token}`}
    limit 1
  `;
  const row = rows[0];
  const expiresAt = row ? new Date(row.expiresAt).getTime() : 0;
  if (!row || !Number.isFinite(expiresAt) || expiresAt < Date.now()) {
    if (row) await sql`delete from verification where id = ${row.id}`;
    throw new Error("That reset is expired. Request a new one.");
  }

  const users = await sql<{ id: string; email: string }>`
    select "id", "email" from "user" where "id" = ${row.value} limit 1
  `;
  const user = users[0];
  await sql`delete from verification where id = ${row.id}`;
  if (!user) throw new Error("That reset is expired. Request a new one.");

  const hash = await hashPassword(password);
  const accounts = await sql<{ id: string }>`
    select id from account where "userId" = ${user.id} and "providerId" = 'credential'
  `;
  if (accounts[0]) {
    await sql`
      update account
      set password = ${hash}, "updatedAt" = now()
      where id = ${accounts[0].id}
    `;
  } else {
    const accountId = randomBytes(16).toString("hex");
    await sql`
      insert into account (
        id, "accountId", "providerId", "userId", password, "createdAt", "updatedAt"
      )
      values (
        ${accountId}, ${user.id}, 'credential', ${user.id}, ${hash}, now(), now()
      )
    `;
  }
  await sql`delete from session where "userId" = ${user.id}`;
  return { ok: true, email: user.email };
}
