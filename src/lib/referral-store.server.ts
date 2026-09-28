import { createHash, randomBytes } from "node:crypto";
import {
  isPioneerCode,
  normalizeReferralCode,
  REFERRAL_COMMISSION_CENTS,
} from "@/lib/referral";

export type PlusMemberRow = {
  code: string;
  emailHash: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripeAccountId: string;
  until: string;
  paidAt: string;
  bonusYear: boolean;
  createdAt: string;
};

export type PlusReferralStats = {
  code: string;
  referredCount: number;
  earnedCents: number;
  creditedCents: number;
};

export type PlusReferralAdminRow = {
  id: string;
  referrerCode: string;
  sessionId: string;
  commissionCents: number;
  credited: boolean;
  bonusApplied: boolean;
  createdAt: string;
};

type FileStore = {
  members: Array<{
    code: string;
    emailHash: string;
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    stripeAccountId?: string;
    createdAt: string;
    until?: string;
    paidAt?: string;
    bonusYear?: boolean;
  }>;
  referrals: Array<{
    id: string;
    referrerCode: string;
    sessionId: string;
    commissionCents: number;
    credited: boolean;
    bonusApplied: boolean;
    createdAt: string;
  }>;
};

const STORE_PATH = ".data/plus-referrals.json";
const CODE_ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789";

const g = globalThis as typeof globalThis & {
  __ecomapPlusReferralFile?: FileStore;
  __ecomapPlusReferralLock?: Promise<void>;
  __ecomapPlusReferralTables?: Promise<void>;
};

export function hashPlusIdentity(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function mintShareCode(): string {
  const bytes = randomBytes(8);
  let body = "";
  for (const byte of bytes) body += CODE_ALPHABET[byte % CODE_ALPHABET.length];
  return normalizeReferralCode(`g${body.slice(0, 7)}`);
}

function emptyStore(): FileStore {
  return { members: [], referrals: [] };
}

async function nodeIo() {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  return { fs, path };
}

function dest(path: typeof import("node:path")) {
  return path.join(process.cwd(), STORE_PATH);
}

async function readDisk(): Promise<FileStore> {
  try {
    const { fs, path } = await nodeIo();
    const raw = JSON.parse(await fs.readFile(dest(path), "utf8")) as Partial<FileStore>;
    return {
      members: Array.isArray(raw.members) ? raw.members : [],
      referrals: Array.isArray(raw.referrals) ? raw.referrals : [],
    };
  } catch {
    return emptyStore();
  }
}

async function writeDisk(store: FileStore) {
  try {
    const { fs, path } = await nodeIo();
    const file = dest(path);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(store), { mode: 0o600 });
  } catch {
    /* memory still holds the list */
  }
}

async function loadFileStore(): Promise<FileStore> {
  if (!g.__ecomapPlusReferralFile) g.__ecomapPlusReferralFile = await readDisk();
  return g.__ecomapPlusReferralFile;
}

async function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const prev = g.__ecomapPlusReferralLock ?? Promise.resolve();
  let release: () => void = () => undefined;
  const next = new Promise<void>((resolve) => {
    release = resolve;
  });
  g.__ecomapPlusReferralLock = prev.then(() => next);
  await prev;
  try {
    return await fn();
  } finally {
    release();
  }
}

function useSql(): boolean {
  const url = typeof process !== "undefined" ? process.env.DATABASE_URL : undefined;
  return Boolean(url && url.trim());
}

async function getSql() {
  const db = await import("@/lib/db");
  return db.getSql();
}

async function ensurePlusReferralTables() {
  if (!useSql()) return;
  if (!g.__ecomapPlusReferralTables) {
    g.__ecomapPlusReferralTables = (async () => {
      const sql = await getSql();
      await sql.query(`
        create table if not exists plus_members (
          code text primary key,
          email_hash text not null unique,
          stripe_customer_id text not null default '',
          stripe_subscription_id text not null default '',
          created_at timestamptz not null default now()
        )
      `);
      await sql.query(`alter table plus_members add column if not exists until timestamptz`);
      await sql.query(`alter table plus_members add column if not exists paid_at timestamptz`);
      await sql.query(`alter table plus_members add column if not exists bonus_year boolean not null default false`);
      await sql.query(`alter table plus_members add column if not exists stripe_account_id text not null default ''`);
      await sql.query(`
        create table if not exists plus_referrals (
          id text primary key,
          referrer_code text not null references plus_members (code),
          session_id text not null unique,
          commission_cents integer not null,
          credited boolean not null default false,
          bonus_applied boolean not null default false,
          created_at timestamptz not null default now()
        )
      `);
      await sql.query(`create index if not exists plus_members_customer_idx on plus_members (stripe_customer_id)`);
      await sql.query(`create index if not exists plus_referrals_referrer_idx on plus_referrals (referrer_code)`);
    })().catch((err) => {
      g.__ecomapPlusReferralTables = undefined;
      throw err;
    });
  }
  await g.__ecomapPlusReferralTables;
}

function asIso(value: unknown): string {
  if (!value) return "";
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString();
  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) return new Date(value).toISOString();
  return "";
}

function inferredUntil(createdAt: string, bonusYear: boolean): string {
  const start = createdAt && !Number.isNaN(Date.parse(createdAt)) ? new Date(createdAt) : new Date();
  start.setFullYear(start.getFullYear() + (bonusYear ? 2 : 1));
  return start.toISOString();
}

function asMember(row: {
  code: string;
  emailHash?: string;
  email_hash?: string;
  stripeCustomerId?: string;
  stripe_customer_id?: string;
  stripeSubscriptionId?: string;
  stripe_subscription_id?: string;
  stripeAccountId?: string | null;
  stripe_account_id?: string | null;
  until?: unknown;
  paidAt?: unknown;
  paid_at?: unknown;
  bonusYear?: unknown;
  bonus_year?: unknown;
  createdAt?: unknown;
  created_at?: unknown;
}): PlusMemberRow {
  const createdAt = asIso(row.createdAt ?? row.created_at);
  const bonusYear = Boolean(row.bonusYear ?? row.bonus_year);
  const paidAt = asIso(row.paidAt ?? row.paid_at) || createdAt;
  const until = asIso(row.until) || inferredUntil(createdAt, bonusYear);
  return {
    code: row.code,
    emailHash: row.emailHash ?? row.email_hash ?? "",
    stripeCustomerId: row.stripeCustomerId ?? row.stripe_customer_id ?? "",
    stripeSubscriptionId: row.stripeSubscriptionId ?? row.stripe_subscription_id ?? "",
    stripeAccountId: row.stripeAccountId ?? row.stripe_account_id ?? "",
    until,
    paidAt,
    bonusYear,
    createdAt,
  };
}

type MemberSqlRow = {
  code: string;
  email_hash: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  stripe_account_id?: string | null;
  until: Date | string | null;
  paid_at: Date | string | null;
  bonus_year: boolean | null;
  created_at: Date | string | null;
};

export async function findPlusMemberByCode(code: string): Promise<PlusMemberRow | null> {
  const normalized = normalizeReferralCode(code);
  if (!normalized || isPioneerCode(normalized)) return null;
  if (!useSql()) {
    const store = await loadFileStore();
    const row = store.members.find((item) => item.code === normalized);
    return row ? asMember(row) : null;
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<MemberSqlRow>`
    select code, email_hash, stripe_customer_id, stripe_subscription_id, stripe_account_id, until, paid_at, bonus_year, created_at
    from plus_members
    where code = ${normalized}
    limit 1
  `;
  return rows[0] ? asMember(rows[0]) : null;
}

export async function findPlusMemberByHash(emailHash: string): Promise<PlusMemberRow | null> {
  if (!emailHash) return null;
  if (!useSql()) {
    const store = await loadFileStore();
    const row = store.members.find((item) => item.emailHash === emailHash);
    return row ? asMember(row) : null;
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<MemberSqlRow>`
    select code, email_hash, stripe_customer_id, stripe_subscription_id, stripe_account_id, until, paid_at, bonus_year, created_at
    from plus_members
    where email_hash = ${emailHash}
    limit 1
  `;
  return rows[0] ? asMember(rows[0]) : null;
}

/** Email hashes of Plus memberships that have not expired. */
export async function activePlusEmailHashes(): Promise<Set<string>> {
  const now = Date.now();
  const live = (row: PlusMemberRow) => {
    const until = Date.parse(row.until);
    return Number.isFinite(until) && until > now;
  };
  if (!useSql()) {
    const store = await loadFileStore();
    return new Set(store.members.map(asMember).filter(live).map((row) => row.emailHash));
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<MemberSqlRow>`
    select code, email_hash, stripe_customer_id, stripe_subscription_id, stripe_account_id, until, paid_at, bonus_year, created_at
    from plus_members
  `;
  return new Set(rows.map(asMember).filter(live).map((row) => row.emailHash));
}

export async function upsertPlusMember(input: {
  identity: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}): Promise<PlusMemberRow> {
  const emailHash = hashPlusIdentity(input.identity);
  const customerId = (input.stripeCustomerId ?? "").trim();
  const subscriptionId = (input.stripeSubscriptionId ?? "").trim();
  if (!useSql()) {
    return withLock(async () => {
      const store = await loadFileStore();
      const existing = store.members.find((item) => item.emailHash === emailHash);
      if (existing) {
        existing.stripeCustomerId = customerId || existing.stripeCustomerId;
        existing.stripeSubscriptionId = subscriptionId || existing.stripeSubscriptionId;
        g.__ecomapPlusReferralFile = store;
        await writeDisk(store);
        return asMember(existing);
      }
      let code = "";
      for (let attempt = 0; attempt < 8; attempt += 1) {
        const next = mintShareCode();
        if (next && !isPioneerCode(next) && !store.members.some((item) => item.code === next)) {
          code = next;
          break;
        }
      }
      if (!code) throw new Error("Could not mint a share code.");
      const row = {
        code,
        emailHash,
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscriptionId,
        createdAt: new Date().toISOString(),
      };
      store.members.unshift(row);
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
      return asMember(row);
    });
  }
  await ensurePlusReferralTables();
  const existing = await findPlusMemberByHash(emailHash);
  const sql = await getSql();
  if (existing) {
    const nextCustomer = customerId || existing.stripeCustomerId;
    const nextSub = subscriptionId || existing.stripeSubscriptionId;
    if (nextCustomer !== existing.stripeCustomerId || nextSub !== existing.stripeSubscriptionId) {
      await sql`
        update plus_members
        set stripe_customer_id = ${nextCustomer},
            stripe_subscription_id = ${nextSub}
        where code = ${existing.code}
      `;
    }
    return {
      ...existing,
      stripeCustomerId: nextCustomer,
      stripeSubscriptionId: nextSub,
    };
  }
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const code = mintShareCode();
    if (!code || isPioneerCode(code)) continue;
    try {
      const rows = await sql<MemberSqlRow>`
        insert into plus_members (code, email_hash, stripe_customer_id, stripe_subscription_id)
        values (${code}, ${emailHash}, ${customerId}, ${subscriptionId})
        on conflict (email_hash) do update
          set stripe_customer_id = case
            when excluded.stripe_customer_id = '' then plus_members.stripe_customer_id
            else excluded.stripe_customer_id
          end,
          stripe_subscription_id = case
            when excluded.stripe_subscription_id = '' then plus_members.stripe_subscription_id
            else excluded.stripe_subscription_id
          end
        returning code, email_hash, stripe_customer_id, stripe_subscription_id, until, paid_at, bonus_year, created_at
      `;
      if (rows[0]) return asMember(rows[0]);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (/plus_members_pkey|duplicate key/i.test(message) && attempt < 7) continue;
      throw err;
    }
  }
  throw new Error("Could not mint a share code.");
}

export async function setPlusMemberTerm(input: {
  identity: string;
  until: string;
  paidAt: string;
  bonusYear: boolean;
}): Promise<PlusMemberRow | null> {
  const emailHash = hashPlusIdentity(input.identity);
  const until = asIso(input.until);
  const paidAt = asIso(input.paidAt) || new Date().toISOString();
  const bonusYear = Boolean(input.bonusYear);
  if (!until) return findPlusMemberByHash(emailHash);
  if (!useSql()) {
    return withLock(async () => {
      const store = await loadFileStore();
      const row = store.members.find((item) => item.emailHash === emailHash);
      if (!row) return null;
      row.until = until;
      row.paidAt = paidAt;
      row.bonusYear = bonusYear;
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
      return asMember(row);
    });
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<MemberSqlRow>`
    update plus_members
    set until = ${until},
        paid_at = ${paidAt},
        bonus_year = ${bonusYear}
    where email_hash = ${emailHash}
    returning code, email_hash, stripe_customer_id, stripe_subscription_id, until, paid_at, bonus_year, created_at
  `;
  return rows[0] ? asMember(rows[0]) : null;
}

export async function recordPlusReferral(input: {
  referrerCode: string;
  sessionId: string;
  credited: boolean;
  bonusApplied: boolean;
}): Promise<{ created: boolean; credited: boolean; bonusApplied: boolean }> {
  const referrerCode = normalizeReferralCode(input.referrerCode);
  const sessionId = input.sessionId.trim();
  if (!referrerCode || !sessionId) {
    return { created: false, credited: false, bonusApplied: false };
  }
  if (!useSql()) {
    return withLock(async () => {
      const store = await loadFileStore();
      const existing = store.referrals.find((item) => item.sessionId === sessionId);
      if (existing) {
        return { created: false, credited: existing.credited, bonusApplied: existing.bonusApplied };
      }
      store.referrals.unshift({
        id: `ref_${randomBytes(12).toString("hex")}`,
        referrerCode,
        sessionId,
        commissionCents: REFERRAL_COMMISSION_CENTS,
        credited: input.credited,
        bonusApplied: input.bonusApplied,
        createdAt: new Date().toISOString(),
      });
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
      return { created: true, credited: input.credited, bonusApplied: input.bonusApplied };
    });
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const existing = await sql<{ credited: boolean; bonus_applied: boolean }>`
    select credited, bonus_applied from plus_referrals where session_id = ${sessionId} limit 1
  `;
  if (existing[0]) {
    return {
      created: false,
      credited: Boolean(existing[0].credited),
      bonusApplied: Boolean(existing[0].bonus_applied),
    };
  }
  const id = `ref_${randomBytes(12).toString("hex")}`;
  try {
    await sql`
      insert into plus_referrals (
        id, referrer_code, session_id, commission_cents, credited, bonus_applied
      )
      values (
        ${id},
        ${referrerCode},
        ${sessionId},
        ${REFERRAL_COMMISSION_CENTS},
        ${input.credited},
        ${input.bonusApplied}
      )
    `;
    return { created: true, credited: input.credited, bonusApplied: input.bonusApplied };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (/plus_referrals_session_id|duplicate key/i.test(message)) {
      return { created: false, credited: false, bonusApplied: false };
    }
    throw err;
  }
}

export async function markPlusReferralCredited(sessionId: string, credited: boolean, bonusApplied: boolean) {
  if (!useSql()) {
    await withLock(async () => {
      const store = await loadFileStore();
      const row = store.referrals.find((item) => item.sessionId === sessionId);
      if (!row) return;
      row.credited = credited;
      row.bonusApplied = bonusApplied;
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
    });
    return;
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  await sql`
    update plus_referrals
    set credited = ${credited},
        bonus_applied = ${bonusApplied}
    where session_id = ${sessionId}
  `;
}

export async function plusReferralStats(code: string): Promise<PlusReferralStats> {
  const normalized = normalizeReferralCode(code);
  if (!normalized) return { code: "", referredCount: 0, earnedCents: 0, creditedCents: 0 };
  if (!useSql()) {
    const store = await loadFileStore();
    const rows = store.referrals.filter((item) => item.referrerCode === normalized);
    return {
      code: normalized,
      referredCount: rows.length,
      earnedCents: rows.reduce((sum, row) => sum + row.commissionCents, 0),
      creditedCents: rows.reduce((sum, row) => sum + (row.credited ? row.commissionCents : 0), 0),
    };
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<{ n: number; earned: number; credited: number }>`
    select
      count(*)::int as n,
      coalesce(sum(commission_cents), 0)::int as earned,
      coalesce(sum(case when credited then commission_cents else 0 end), 0)::int as credited
    from plus_referrals
    where referrer_code = ${normalized}
  `;
  const row = rows[0];
  return {
    code: normalized,
    referredCount: row?.n ?? 0,
    earnedCents: row?.earned ?? 0,
    creditedCents: row?.credited ?? 0,
  };
}

export async function listPlusReferrals(limit = 200): Promise<PlusReferralAdminRow[]> {
  const cap = Math.max(1, Math.min(500, Math.floor(limit)));
  if (!useSql()) {
    const store = await loadFileStore();
    return store.referrals.slice(0, cap).map((row) => ({
      id: row.id,
      referrerCode: row.referrerCode,
      sessionId: row.sessionId,
      commissionCents: row.commissionCents,
      credited: row.credited,
      bonusApplied: row.bonusApplied,
      createdAt: row.createdAt,
    }));
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<{
    id: string;
    referrer_code: string;
    session_id: string;
    commission_cents: number;
    credited: boolean;
    bonus_applied: boolean;
    created_at: string;
  }>`
    select
      id,
      referrer_code,
      session_id,
      commission_cents,
      credited,
      bonus_applied,
      created_at::text as created_at
    from plus_referrals
    order by created_at desc
    limit ${cap}
  `;
  return rows.map((row) => ({
    id: row.id,
    referrerCode: row.referrer_code,
    sessionId: row.session_id,
    commissionCents: Number(row.commission_cents) || 0,
    credited: Boolean(row.credited),
    bonusApplied: Boolean(row.bonus_applied),
    createdAt: row.created_at,
  }));
}

export async function setPlusConnectAccount(code: string, accountId: string): Promise<void> {
  const normalized = normalizeReferralCode(code);
  const id = accountId.trim();
  if (!normalized || !id) return;
  if (!useSql()) {
    await withLock(async () => {
      const store = await loadFileStore();
      const row = store.members.find((item) => item.code === normalized);
      if (!row) return;
      row.stripeAccountId = id;
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
    });
    return;
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  await sql`
    update plus_members
    set stripe_account_id = ${id}
    where code = ${normalized}
  `;
}

export async function claimUncreditedReferrals(code: string): Promise<{ cents: number; sessionIds: string[] }> {
  const normalized = normalizeReferralCode(code);
  if (!normalized) return { cents: 0, sessionIds: [] };
  if (!useSql()) {
    return withLock(async () => {
      const store = await loadFileStore();
      const rows = store.referrals.filter((item) => item.referrerCode === normalized && !item.credited);
      for (const row of rows) row.credited = true;
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
      return {
        cents: rows.reduce((sum, row) => sum + row.commissionCents, 0),
        sessionIds: rows.map((row) => row.sessionId),
      };
    });
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  const rows = await sql<{ session_id: string; commission_cents: number }>`
    update plus_referrals
    set credited = true
    where referrer_code = ${normalized} and credited = false
    returning session_id, commission_cents
  `;
  return {
    cents: rows.reduce((sum, row) => sum + (Number(row.commission_cents) || 0), 0),
    sessionIds: rows.map((row) => row.session_id),
  };
}

export async function releaseReferralClaims(sessionIds: string[]): Promise<void> {
  const ids = sessionIds.map((id) => id.trim()).filter(Boolean);
  if (ids.length === 0) return;
  if (!useSql()) {
    await withLock(async () => {
      const store = await loadFileStore();
      for (const row of store.referrals) {
        if (ids.includes(row.sessionId)) row.credited = false;
      }
      g.__ecomapPlusReferralFile = store;
      await writeDisk(store);
    });
    return;
  }
  await ensurePlusReferralTables();
  const sql = await getSql();
  for (const id of ids) {
    await sql`update plus_referrals set credited = false where session_id = ${id}`;
  }
}
