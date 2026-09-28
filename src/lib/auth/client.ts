import { genericOAuthClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { runPreSignInSignOut, runSignOut } from "../../../scripts/sign-out-plan.mjs";
import { clearLocalIdentity } from "@/lib/local-identity";
import { GROK_PROVIDERS } from "./providers";

const BEARER_KEY = "grok-auth.bearer-token";
const COOKIE_KEY = "vc-session";
const LAST_EMAIL_KEY = "vc-last-email";
const STAY_KEY = "vc-stay-in";

function rawSessionToken(token: string | null | undefined): string {
  if (!token) return "";
  const base = token.split(".")[0]?.trim() ?? "";
  return base || token.trim();
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    if (!part.startsWith(`${name}=`)) continue;
    try {
      return decodeURIComponent(part.slice(name.length + 1));
    } catch {
      return part.slice(name.length + 1);
    }
  }
  return null;
}

function writeCookie(token: string | null): void {
  if (typeof document === "undefined") return;
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  if (!token) {
    document.cookie = `${COOKIE_KEY}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
    return;
  }
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(token)}; Path=/; Max-Age=2592000; SameSite=Lax${secure}`;
}

function tokenFromHash(): string {
  if (typeof window === "undefined") return "";
  try {
    const hash = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash;
    return rawSessionToken(new URLSearchParams(hash).get("vc"));
  } catch {
    return "";
  }
}

function stripHashToken(): void {
  if (typeof window === "undefined") return;
  try {
    const hash = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash;
    const params = new URLSearchParams(hash);
    if (!params.has("vc")) return;
    params.delete("vc");
    const nextHash = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${nextHash ? `#${nextHash}` : ""}`,
    );
  } catch {
    /* ignore */
  }
}

function writeAll(token: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(BEARER_KEY, token);
  } catch {
    /* ignore */
  }
  try {
    window.localStorage.setItem(BEARER_KEY, token);
  } catch {
    /* ignore */
  }
  writeCookie(token);
}

function clearAll(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(BEARER_KEY);
  } catch {
    /* ignore */
  }
  try {
    window.localStorage.removeItem(BEARER_KEY);
  } catch {
    /* ignore */
  }
  writeCookie(null);
}

function readStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  const fromHash = tokenFromHash();
  if (fromHash) {
    writeAll(fromHash);
    stripHashToken();
    return fromHash;
  }
  try {
    const session = window.sessionStorage.getItem(BEARER_KEY);
    if (session) return rawSessionToken(session);
  } catch {
    /* ignore */
  }
  try {
    const local = window.localStorage.getItem(BEARER_KEY);
    if (local) return rawSessionToken(local);
  } catch {
    /* ignore */
  }
  const cookie = readCookie(COOKIE_KEY);
  return cookie ? rawSessionToken(cookie) : null;
}

readStoredToken();

/**
 * Better Auth client for this React SPA (browser-side).
 *
 * Talks to this app's OWN Better Auth at same-origin `/api/auth/*`. In the live
 * preview the app is an embedded iframe with PARTITIONED cookies, so after a
 * popup sign-in it can't read the session cookie, it authenticates with a
 * bearer token instead (captured from the popup, see `signIn`). The `onRequest`
 * hook attaches that token when present; when deployed (cookie auth) no token
 * is stored, so nothing changes.
 *
 * To sign out call `signOut()` below, NOT `authClient.signOut()`: the raw call
 * leaves the bearer token in place, and `onRequest` keeps re-attaching it, so
 * the visitor stays signed in.
 */
export const authClient = createAuthClient({
  plugins: [genericOAuthClient()],
  fetchOptions: {
    credentials: "include",
    onRequest(ctx) {
      const token = getBearerToken();
      if (token) ctx.headers.set("Authorization", `Bearer ${token}`);
      return ctx;
    },
    onSuccess(ctx) {
      const token = rawSessionToken(ctx.response?.headers?.get("set-auth-token"));
      if (token) setBearerToken(token);
    },
  },
});

/**
 * True when sign-in UI should be shown, i.e. whenever `VITE_AUTH_ENABLED` is
 * not `"false"`. The shipped template sets it to `"false"`
 * (`.grok/app-env.json`), which selects the dev user (see `use-current-user`);
 * with the key removed, sign-in is real in preview (baked preview client) and
 * when deployed (injected per-app client).
 */
export const authEnabled = import.meta.env.VITE_AUTH_ENABLED !== "false";

/** The upstream providers to render sign-in buttons for. */
export { GROK_PROVIDERS };

/** The stored preview bearer token, or null. */
export function getBearerToken(): string | null {
  return readStoredToken();
}

function setBearerToken(token: string | null): void {
  if (token) writeAll(rawSessionToken(token));
  else clearAll();
}

export function rememberLoginEmail(email: string) {
  if (typeof window === "undefined") return;
  const key = email.trim().toLowerCase();
  if (!key) return;
  try {
    window.localStorage.setItem(LAST_EMAIL_KEY, key);
    window.localStorage.setItem(STAY_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function readLoginEmail(): string {
  if (typeof window === "undefined") return "";
  try {
    return (window.localStorage.getItem(LAST_EMAIL_KEY) ?? "").trim().toLowerCase();
  } catch {
    return "";
  }
}

export function staySignedIn(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STAY_KEY) === "1";
  } catch {
    return false;
  }
}

function clearStay() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STAY_KEY);
  } catch {
    /* ignore */
  }
}

/** Keep the session token so email sign-in works inside the live preview iframe. */
export function captureSessionToken(token: string | null | undefined) {
  const raw = rawSessionToken(token);
  if (raw) setBearerToken(raw);
}

/** Put the session on the next URL so a reload in the Grok preview cannot drop it. */
export function withSessionHash(href: string, token: string): string {
  const url = new URL(href, typeof window !== "undefined" ? window.location.origin : "http://localhost");
  const params = new URLSearchParams(url.hash.startsWith("#") ? url.hash.slice(1) : url.hash);
  params.set("vc", rawSessionToken(token));
  url.hash = params.toString();
  return `${url.pathname}${url.search}${url.hash}`;
}

/**
 * The sandbox live preview runs this app inside an iframe on a `*.grok-sandbox.com`
 * host, where a full-page redirect to the broker can't work, so sign-in uses a
 * popup there and a normal redirect everywhere else.
 */
function inLivePreview(): boolean {
  return (
    typeof window !== "undefined" &&
    window.location.hostname.endsWith(".grok-sandbox.com")
  );
}

/** Message the popup posts back to the opener once sign-in completes. */
type PopupMessage = { source: "grok-auth-popup"; token: string | null; error?: string };

/**
 * Start sign-in with one upstream provider (`providerId` from `GROK_PROVIDERS`),
 * federating through the Grok auth broker.
 */
export async function signIn(
  providerId: string,
  opts: { callbackURL?: string; errorCallbackURL?: string } = {},
): Promise<void> {
  const callbackURL = opts.callbackURL ?? "/";
  const errorCallbackURL = opts.errorCallbackURL ?? "/";

  const popup = inLivePreview() ? openSignInPopup(providerId) : null;

  await runPreSignInSignOut({
    livePreview: inLivePreview(),
    hasBearer: Boolean(getBearerToken()),
    requestSignOut: () => authClient.signOut(),
    clearToken: () => setBearerToken(null),
  });

  if (inLivePreview()) {
    if (!popup) throw new Error("Pop-up blocked, allow pop-ups for sign-in");
    const token = await waitForPopupToken(popup);
    if (!token) throw new Error("Sign-in was cancelled or failed");
    setBearerToken(token);
    try {
      await authClient.getSession();
    } catch {
      /* session store will recover on next useSession fetch */
    }
    if (typeof window !== "undefined") {
      const dest = new URL(callbackURL, window.location.origin);
      const here = window.location;
      if (dest.origin !== here.origin || dest.pathname !== here.pathname || dest.search !== here.search) {
        window.location.href = withSessionHash(callbackURL, token);
      }
    }
    return;
  }

  const { data, error } = await authClient.signIn.oauth2({
    providerId,
    callbackURL,
    errorCallbackURL,
  });
  if (error) throw new Error(error.message ?? "Sign-in failed");
  if (data?.url) window.location.href = data.url;
}

function openSignInPopup(providerId: string): Window | null {
  const origin = window.location.origin;
  const url = `${origin}/auth/popup?providerId=${encodeURIComponent(providerId)}`;
  const name = `grok-signin-${Date.now()}`;
  return window.open(url, name, "popup,width=500,height=650");
}

function waitForPopupToken(popup: Window): Promise<string | null> {
  return new Promise((resolve) => {
    const origin = window.location.origin;
    let settled = false;
    let closeTimer: number | undefined;
    const settle = (token: string | null) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(token);
    };
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== origin) return;
      const data = event.data as PopupMessage | undefined;
      if (!data || data.source !== "grok-auth-popup") return;
      settle(data.token ?? null);
    };
    const pollTimer = window.setInterval(() => {
      if (!popup.closed) return;
      window.clearInterval(pollTimer);
      closeTimer = window.setTimeout(() => settle(null), 400);
    }, 300);
    function cleanup() {
      window.clearInterval(pollTimer);
      if (closeTimer !== undefined) window.clearTimeout(closeTimer);
      window.removeEventListener("message", onMessage);
    }
    window.addEventListener("message", onMessage);
  });
}

export async function signOut(redirectTo = "/"): Promise<void> {
  const clearIdentity = () => {
    setBearerToken(null);
    clearStay();
    clearLocalIdentity();
    try {
      window.localStorage.removeItem(LAST_EMAIL_KEY);
    } catch {
      /* ignore */
    }
  };

  if (!authEnabled) {
    clearIdentity();
    if (typeof window !== "undefined") window.location.href = redirectTo;
    return;
  }

  await runSignOut({
    livePreview: inLivePreview(),
    hasBearer: Boolean(getBearerToken()),
    requestSignOut: async () => {
      const { error } = await authClient.signOut();
      if (error) throw new Error(error.message ?? "Sign-out failed");
    },
    clearToken: clearIdentity,
    redirect: () => {
      window.location.href = redirectTo;
    },
  });
}
