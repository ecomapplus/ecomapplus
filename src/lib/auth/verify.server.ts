import { getRequest } from "@tanstack/react-start/server";
import { getSql } from "@/lib/db";
import { gateIdentityEnabled } from "./gate-identity.server";
import { auth, authConfigured } from "./server";

/**
 * Server-side session resolution (server-only).
 *
 * Because this app runs its OWN Better Auth at same-origin `/api/auth/*`, the
 * session cookie is sent with every request to this app, server functions AND
 * SSR loaders included. So we resolve the user straight from the request cookies
 * via `auth.api.getSession` (no client-minted JWT needed). Never trust a
 * client-supplied user id, only the result of this verification.
 */

/** True when a real database is configured server-side. */
const databaseConfigured = Boolean(process.env.DATABASE_URL?.trim());

/** Re-export so callers can branch on it without importing `server.ts`. */
export { authConfigured };

if (databaseConfigured && !authConfigured) {
  console.error(
    "[auth] DATABASE_URL is set but auth is disabled (VITE_AUTH_ENABLED=false) " +
      ",  requireUserId() will reject every request (fail closed) rather than " +
      "share one dev user on a real database.",
  );
}

/** Dev fallback user id, used only when auth is disabled (VITE_AUTH_ENABLED=false). */
export const DEV_USER_ID = "dev-user";

/**
 * Thrown by `requireUserId` when the caller has no valid session. Carries
 * `status: 401`; the message is a stable contract, match
 * `err.message === "Unauthorized"` client-side to send the visitor to sign-in.
 */
export class UnauthorizedError extends Error {
  readonly status = 401;
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}

export type VerifiedUser = { id: string; email: string | null };

function rawToken(value: string | null | undefined): string {
  if (!value) return "";
  return value.replace(/^Bearer\s+/i, "").split(".")[0]?.trim() ?? "";
}

function tokenFromRequest(request: Request, bearerToken?: string): string {
  const fromArg = rawToken(bearerToken);
  if (fromArg) return fromArg;
  const fromHeader = rawToken(request.headers.get("authorization"));
  if (fromHeader) return fromHeader;
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)(?:vc-session|__Host-grok-auth\.session_token)=([^;]+)/);
  if (!match?.[1]) return "";
  try {
    return rawToken(decodeURIComponent(match[1]));
  } catch {
    return rawToken(match[1]);
  }
}

async function userFromSessionTable(token: string): Promise<VerifiedUser | null> {
  if (!token) return null;
  try {
    const sql = await getSql();
    const rows = await sql<{ id: string; email: string | null }>`
      select u.id, u.email
      from "session" s
      join "user" u on u.id = s."userId"
      where s.token = ${token} and s."expiresAt" > now()
      limit 1
    `;
    const row = rows[0];
    if (!row) return null;
    return { id: row.id, email: row.email ?? null };
  } catch (err) {
    console.error("[auth] session table", err);
    return null;
  }
}

/**
 * Resolve the signed-in user from the current request, or `null` when auth isn't
 * configured / nobody is signed in. Safe to call from server functions and SSR
 * loaders.
 *
 * `bearerToken` is for the LIVE PREVIEW: the app runs in a partitioned iframe
 * whose cookies don't reach the server, so `authMiddleware` forwards the session
 * as a bearer token, which we present as `Authorization: Bearer …` (the `bearer`
 * plugin resolves it). When deployed no token is passed and the cookie is used.
 */
export async function getSessionUser(
  bearerToken?: string,
): Promise<VerifiedUser | null> {
  if (!authConfigured && !gateIdentityEnabled()) return null;
  const request = getRequest();
  if (!request) return null;
  let headers = request.headers;
  if (bearerToken) {
    headers = new Headers(request.headers);
    headers.set("Authorization", `Bearer ${bearerToken}`);
  }
  try {
    const session = await auth.api.getSession({ headers });
    if (session?.user) return { id: session.user.id, email: session.user.email ?? null };
  } catch (err) {
    console.error("[auth] getSession", err);
  }
  return userFromSessionTable(tokenFromRequest(request, bearerToken));
}

/**
 * Resolve the current user id for a server function, or throw when unauthorized.
 * Prefer `authMiddleware` (`./middleware`), which calls this for you.
 * - Auth enabled -> the verified session user id; throws
 *   `UnauthorizedError` when signed out. Works in the sandbox preview too (real
 *   sign-in via the baked preview client).
 * - Auth disabled (`VITE_AUTH_ENABLED=false`) + `DATABASE_URL` set -> throw (fail
 *   closed): one shared dev user on a real database would let every visitor
 *   read/write everyone's rows.
 * - Auth disabled + no database -> the shared dev user id.
 */
export async function requireUserId(bearerToken?: string): Promise<string> {
  if (!authConfigured && !gateIdentityEnabled()) {
    if (databaseConfigured) {
      throw new Error(
        "Auth is disabled (VITE_AUTH_ENABLED=false) but DATABASE_URL is set, " +
          "refusing to fall back to the shared dev user against a real database.",
      );
    }
    return DEV_USER_ID;
  }
  const user = await getSessionUser(bearerToken);
  if (!user) throw new UnauthorizedError();
  return user.id;
}

/** Session user id when signed in; `null` when the visitor is a guest. */
export async function optionalUserId(bearerToken?: string): Promise<string | null> {
  if (!authConfigured && !gateIdentityEnabled()) {
    if (databaseConfigured) return null;
    return DEV_USER_ID;
  }
  const user = await getSessionUser(bearerToken);
  return user?.id ?? null;
}
