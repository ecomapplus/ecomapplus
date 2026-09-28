import {
  captureSessionToken,
  getBearerToken,
  readLoginEmail,
  rememberLoginEmail,
  staySignedIn,
  withSessionHash,
} from "@/lib/auth/client";
import { readCachedChats } from "@/lib/chat-cache";
import { readCachedLand } from "@/lib/land-cache";
import { readCachedProfile } from "@/lib/profile-cache";
import { writeLocalIdentity } from "@/lib/local-identity";
import { applyUsaSignupDefault } from "@/lib/country-scope";
import { applyAdminPlus } from "@/lib/plus-membership";
import { restorePaidPlusForEmail } from "@/lib/plus-session";

type LoginOk = {
  token: string;
  created: boolean;
  user?: { id?: string; email?: string; name?: string };
};

function slimProfile(raw: unknown): unknown {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  return {
    name: row.name,
    bio: row.bio,
    wantsToFound: row.wantsToFound,
    skills: row.skills,
    contribution: row.contribution,
    hoursPerWeek: row.hoursPerWeek,
    hasLand: row.hasLand,
    landLocation: row.landLocation,
    landAcres: row.landAcres,
  };
}

function slimLand(raw: unknown): unknown {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => {
    if (!item || typeof item !== "object") return item;
    const row = item as Record<string, unknown>;
    return {
      location: row.location,
      acres: row.acres,
      notes: row.notes,
      source: row.source,
    };
  });
}

function extrasFor(email: string): { profile?: unknown; chats?: unknown; land?: unknown } {
  const extras = {
    profile: slimProfile(readCachedProfile(email)),
    chats: readCachedChats(email).filter(
      (row) => row.roomId !== "hall" && row.roomKey !== "hall" && row.kind !== "public",
    ),
    land: slimLand(readCachedLand(email)),
  };
  try {
    if (JSON.stringify(extras).length > 80_000) return {};
  } catch {
    return {};
  }
  return extras;
}

function localLogin(email: string): LoginOk {
  const name = email.split("@")[0] || email;
  return {
    token: "",
    created: false,
    user: { id: `email:${email}`, email, name },
  };
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("Sign-in timed out")), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        window.clearTimeout(timer);
        reject(err);
      },
    );
  });
}

async function loginViaApi(email: string, extras: Record<string, unknown>): Promise<LoginOk> {
  const response = await fetch("/api/email-login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, ...extras }),
  });
  const payload = (await response.json().catch(() => ({}))) as {
    token?: string;
    created?: boolean;
    error?: string;
    user?: { id?: string; email?: string; name?: string };
  };
  const headerToken = response.headers.get("set-auth-token");
  const token = (payload.token || headerToken || "").split(".")[0]?.trim();
  if (!response.ok || !token) {
    throw new Error(payload.error || "Could not sign in. Try again.");
  }
  return { token, created: Boolean(payload.created), user: payload.user };
}

export async function loginWithEmail(email: string): Promise<LoginOk> {
  const key = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key)) {
    throw new Error("Enter your email");
  }
  const extras = extrasFor(key);
  try {
    return await withTimeout(loginViaApi(key, extras), 4000);
  } catch {
    return localLogin(key);
  }
}

function rememberUser(result: LoginOk, email: string) {
  if (result.token) captureSessionToken(result.token);
  rememberLoginEmail(email);
  writeLocalIdentity({
    id: result.user?.id,
    name: result.user?.name,
    email: result.user?.email || email,
  });
  applyAdminPlus(result.user?.email || email);
  void restorePaidPlusForEmail(result.user?.email || email);
  if (result.created) applyUsaSignupDefault();
}

export async function finishEmailLogin(result: LoginOk, email: string, href: string) {
  rememberUser(result, email);
  if (result.token) window.location.assign(withSessionHash(href, result.token));
  else window.location.assign(href);
}

export async function restoreEmailSession(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (!staySignedIn()) return false;
  const email = readLoginEmail();
  const token = getBearerToken();
  if (email) {
    applyAdminPlus(email);
    void restorePaidPlusForEmail(email);
  }
  if (token) return true;
  if (!email) return false;
  try {
    const result = await loginWithEmail(email);
    rememberUser(result, email);
    return true;
  } catch {
    rememberUser(localLogin(email), email);
    return true;
  }
}
