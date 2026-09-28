import { randomBytes } from "node:crypto";
import { auth } from "@/lib/auth/server";
import { ensureOwnerAccount } from "@/lib/auth/ensure-owner";
import { getSql } from "@/lib/db";
import { parseIdentitySnapshot, restoreIdentity } from "@/lib/identity-profile";
import { restoreChats } from "@/lib/chat-archive";
import { restoreLandListings } from "@/lib/land";

function normalizeEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

function nameFromEmail(email: string, name?: string) {
  const trimmed = (name ?? "").replace(/\s+/g, " ").trim();
  if (trimmed.length >= 2) return trimmed.slice(0, 80);
  const local = email.split("@")[0]?.replace(/[._+-]+/g, " ").trim() ?? "";
  if (!local) return "Member";
  return local.replace(/\b\w/g, (char) => char.toUpperCase()).slice(0, 80);
}

async function upsertUser(email: string, name: string) {
  const sql = await getSql();
  const existing = await sql<{ id: string; name: string }>`
    select id, name from "user" where lower("email") = ${email} limit 1
  `;
  if (existing[0]) {
    return { id: existing[0].id, name: existing[0].name || name, created: false };
  }
  const id = randomBytes(16).toString("hex");
  try {
    await sql`
      insert into "user" ("id", "name", "email", "emailVerified", "createdAt", "updatedAt")
      values (${id}, ${name}, ${email}, true, now(), now())
    `;
    return { id, name, created: true };
  } catch {
    const again = await sql<{ id: string; name: string }>`
      select id, name from "user" where lower("email") = ${email} limit 1
    `;
    if (again[0]) return { id: again[0].id, name: again[0].name || name, created: false };
    throw new Error("Could not open that account");
  }
}

async function createAppSession(userId: string): Promise<string> {
  try {
    const ctx = await auth.$context;
    const session = await ctx.internalAdapter.createSession(userId);
    const token = session?.token?.split(".")[0]?.trim();
    if (token) return token;
  } catch (err) {
    console.error("[email-session] adapter", err);
  }
  const sql = await getSql();
  const token = randomBytes(32).toString("hex");
  const id = randomBytes(16).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString();
  await sql`
    insert into "session" (id, "expiresAt", token, "createdAt", "updatedAt", "userId")
    values (${id}, ${expires}::timestamptz, ${token}, now(), now(), ${userId})
  `;
  return token;
}

export type EmailLoginResult = {
  ok: true;
  token: string;
  created: boolean;
  user: { id: string; email: string; name: string };
};

export async function completeEmailLogin(
  email: string,
  extras?: { name?: string; profile?: unknown; chats?: unknown; land?: unknown },
): Promise<EmailLoginResult> {
  const key = normalizeEmail(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key) || key.length > 200) {
    throw new Error("Enter your email");
  }
  await ensureOwnerAccount().catch(() => undefined);
  const name = nameFromEmail(key, extras?.name);
  const user = await upsertUser(key, name);
  const sql = await getSql();
  await sql`
    update "user"
    set "image" = null
    where "id" = ${user.id} and "image" is not null and length("image") > 16000
  `.catch(() => undefined);
  await restoreIdentity(user.id, key, parseIdentitySnapshot(extras?.profile)).catch((err) => {
    console.error("[email-session] profile", err);
  });
  await restoreChats(user.id, key, extras?.chats).catch((err) => {
    console.error("[email-session] chats", err);
  });
  await restoreLandListings(user.id, key, extras?.land).catch((err) => {
    console.error("[email-session] land", err);
  });
  const token = await createAppSession(user.id);
  if (!token) throw new Error("Could not sign in");
  return { ok: true, token, created: user.created, user: { id: user.id, email: key, name: user.name } };
}
