import type { AppUser } from "@/lib/auth/use-current-user";

const KEY = "vc-identity";

export const IDENTITY_CHANGED = "vc-identity-changed";

export type LocalIdentity = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
};

function notifyIdentity() {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new Event(IDENTITY_CHANGED));
  } catch {
    /* ignore */
  }
}

export function writeLocalIdentity(user: {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}) {
  if (typeof window === "undefined") return;
  const email = (user.email ?? "").trim().toLowerCase();
  const id = (user.id ?? "").trim() || (email ? `email:${email}` : "");
  if (!id && !email) return;
  const row: LocalIdentity = {
    id,
    displayName: user.name ?? null,
    primaryEmail: email || null,
    profileImageUrl: user.image && user.image.length < 16000 ? user.image : null,
  };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(row));
  } catch {
    /* ignore */
  }
  notifyIdentity();
}

export function readLocalIdentity(): AppUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LocalIdentity;
    if (!parsed?.id && !parsed?.primaryEmail) return null;
    return {
      id: parsed.id || `email:${parsed.primaryEmail}`,
      displayName: parsed.displayName ?? null,
      primaryEmail: parsed.primaryEmail ?? null,
      profileImageUrl: parsed.profileImageUrl ?? null,
      isDevFallback: false,
    };
  } catch {
    return null;
  }
}

export function clearLocalIdentity() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  notifyIdentity();
}
