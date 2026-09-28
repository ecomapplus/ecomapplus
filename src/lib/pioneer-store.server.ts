import { createHash } from "node:crypto";
import { PIONEER_CODE, PIONEER_LIMIT, type PioneerPreview, type PioneerStatus } from "@/lib/referral";

type ClaimRow = { hash: string; at: string };

const STORE_PATH = ".data/pioneer-claims.json";
const g = globalThis as typeof globalThis & {
  __ecomapPioneerClaims?: ClaimRow[];
  __ecomapPioneerLock?: Promise<void>;
};

async function nodeIo() {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  return { fs, path };
}

function dest(path: typeof import("node:path")) {
  return path.join(process.cwd(), STORE_PATH);
}

function emailHash(email: string): string {
  return createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
}

async function readDisk(): Promise<ClaimRow[]> {
  try {
    const { fs, path } = await nodeIo();
    const raw = JSON.parse(await fs.readFile(dest(path), "utf8")) as unknown;
    if (!Array.isArray(raw)) return [];
    return raw.filter((row): row is ClaimRow => {
      if (!row || typeof row !== "object") return false;
      const item = row as ClaimRow;
      return typeof item.hash === "string" && item.hash.length === 64 && typeof item.at === "string";
    });
  } catch {
    return [];
  }
}

async function writeDisk(rows: ClaimRow[]) {
  try {
    const { fs, path } = await nodeIo();
    const file = dest(path);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(rows), { mode: 0o600 });
  } catch {
    /* preview-only store; memory still holds the list */
  }
}

async function listClaims(): Promise<ClaimRow[]> {
  if (!g.__ecomapPioneerClaims) g.__ecomapPioneerClaims = await readDisk();
  return g.__ecomapPioneerClaims;
}

async function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const prev = g.__ecomapPioneerLock ?? Promise.resolve();
  let release: () => void = () => undefined;
  const next = new Promise<void>((resolve) => {
    release = resolve;
  });
  g.__ecomapPioneerLock = prev.then(() => next);
  await prev;
  try {
    return await fn();
  } finally {
    release();
  }
}

function previewFrom(rows: ClaimRow[], hash: string): PioneerPreview {
  const remaining = Math.max(0, PIONEER_LIMIT - rows.length);
  if (rows.some((row) => row.hash === hash)) {
    return { eligible: true, remaining, status: "already" };
  }
  if (remaining <= 0) {
    return { eligible: false, remaining: 0, status: "full" };
  }
  return { eligible: true, remaining, status: "none" };
}

export async function previewPioneer(email: string, code: string): Promise<PioneerPreview> {
  const rows = await listClaims();
  const hash = email ? emailHash(email) : "";
  const remaining = Math.max(0, PIONEER_LIMIT - rows.length);
  if (hash && rows.some((row) => row.hash === hash)) {
    return { eligible: true, remaining, status: "already" };
  }
  if (code !== PIONEER_CODE) {
    return { eligible: false, remaining, status: "none" };
  }
  if (!hash) {
    return { eligible: false, remaining, status: remaining > 0 ? "none" : "full" };
  }
  if (remaining <= 0) {
    return { eligible: false, remaining: 0, status: "full" };
  }
  return { eligible: true, remaining, status: "none" };
}

export async function claimPioneer(email: string): Promise<PioneerPreview> {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return { eligible: false, remaining: PIONEER_LIMIT, status: "none" };
  const hash = emailHash(trimmed);
  return withLock(async () => {
    const rows = await listClaims();
    const existing = previewFrom(rows, hash);
    if (existing.status === "already") return existing;
    if (existing.status === "full") return existing;
    const next: ClaimRow[] = [{ hash, at: new Date().toISOString() }, ...rows].slice(0, PIONEER_LIMIT);
    g.__ecomapPioneerClaims = next;
    await writeDisk(next);
    return {
      eligible: true,
      remaining: Math.max(0, PIONEER_LIMIT - next.length),
      status: "claimed" satisfies PioneerStatus,
    };
  });
}

export async function pioneerRemaining(): Promise<number> {
  const rows = await listClaims();
  return Math.max(0, PIONEER_LIMIT - rows.length);
}
