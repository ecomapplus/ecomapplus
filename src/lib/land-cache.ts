import type { LandListing } from "@/lib/land";

const prefix = "vc-land:";

function keyFor(email: string) {
  return prefix + email.trim().toLowerCase();
}

export function readCachedLand(email: string): unknown {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(keyFor(email));
    if (!raw) return [];
    return JSON.parse(raw) as unknown;
  } catch {
    return [];
  }
}

export function cacheLandList(email: string, rows: LandListing[]) {
  if (typeof window === "undefined") return;
  const key = email.trim().toLowerCase();
  if (!key) return;
  try {
    const mine = rows.filter((row) => row.isMine).map((row) => ({
      location: row.location,
      acres: row.acres,
      notes: row.notes,
      source: row.source,
    }));
    window.localStorage.setItem(keyFor(key), JSON.stringify(mine));
  } catch {
    /* quota */
  }
}
