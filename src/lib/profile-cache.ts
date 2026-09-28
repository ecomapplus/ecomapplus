const prefix = "vc-profile:";

export function cacheProfile(email: string, data: unknown) {
  if (typeof window === "undefined") return;
  const key = email.trim().toLowerCase();
  if (!key) return;
  try {
    window.localStorage.setItem(prefix + key, JSON.stringify(data));
  } catch {
    /* quota */
  }
}

export function readCachedProfile(email: string): unknown {
  if (typeof window === "undefined") return null;
  const key = email.trim().toLowerCase();
  if (!key) return null;
  try {
    const raw = window.localStorage.getItem(prefix + key);
    if (!raw) return null;
    return JSON.parse(raw) as unknown;
  } catch {
    return null;
  }
}
