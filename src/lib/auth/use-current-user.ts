import { useEffect, useState } from "react";
import { IDENTITY_CHANGED, readLocalIdentity } from "@/lib/local-identity";
import { authClient, authEnabled } from "./client";

/** Normalized user shape used across the app, auth on or off. */
export type AppUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
  /** True when this is the sandbox/dev fallback (auth not configured). */
  isDevFallback: boolean;
};

/**
 * Stable fallback user, used ONLY when auth is disabled
 * (`VITE_AUTH_ENABLED=false`, the shipped default). With auth on, the sandbox
 * live preview does real sign-in via the baked preview client. Its id is
 * `"dev-user"` (the SAME id `verify.server.ts` returns server-side) so per-user
 * rows written in that mode belong to one consistent owner.
 */
export const DEV_USER: AppUser = {
  id: "dev-user",
  displayName: "Dev User",
  primaryEmail: "dev@example.com",
  profileImageUrl: null,
  isDevFallback: true,
};

/** `useCurrentUserState()` result: the user plus the session-loading flag. */
export type CurrentUserState = {
  /** The user, `null` BOTH while the session loads and when signed out. */
  user: AppUser | null;
  /** True while the session is still resolving, don't treat `user: null` as signed out yet. */
  isPending: boolean;
};

function fromSessionUser(user: {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}): AppUser {
  const image = user.image && user.image.length < 16000 ? user.image : null;
  return {
    id: user.id,
    displayName: user.name ?? null,
    primaryEmail: user.email ?? null,
    profileImageUrl: image,
    isDevFallback: false,
  };
}

function useLocalIdentityUser(): CurrentUserState {
  const [local, setLocal] = useState<AppUser | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const sync = () => {
      setLocal(readLocalIdentity());
      setReady(true);
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(IDENTITY_CHANGED, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(IDENTITY_CHANGED, sync);
    };
  }, []);
  return { user: local, isPending: !ready };
}

/**
 * Current user + loading state. Same behavior in live preview and when deployed:
 *   - Auth enabled -> the real signed-in user; `user` is `null` while
 *                            the session resolves (`isPending: true`) and when
 *                            signed out (`isPending: false`). Session comes from
 *                            Better Auth `useSession()` → `/api/auth/get-session`
 *                            (cookie when deployed; bearer in live preview).
 *   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> email identity on this
 *                            browser if they signed in; otherwise signed out.
 *                            Server functions still use the shared dev user.
 *
 * Protect a route by waiting out `isPending` before acting on `user` ,
 * redirecting on `user: null` alone bounces signed-in visitors to sign-in on
 * every hard reload:
 *
 *   import { RedirectToSignIn } from "@/lib/auth/gates";
 *   const { user, isPending } = useCurrentUserState();
 *   if (isPending) return null;              // still resolving, don't redirect yet
 *   if (!user) return <RedirectToSignIn />;  // definitely signed out
 *
 * `authEnabled` is a module-level constant fixed at load, so the guarded hook
 * call keeps a stable hook order across every render of a given component.
 */
export function useCurrentUserState(): CurrentUserState {
  if (!authEnabled) {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- authEnabled is constant for the app's lifetime
    return useLocalIdentityUser();
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- authEnabled is constant for the app's lifetime
  const { data, isPending } = authClient.useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [local, setLocal] = useState<AppUser | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const sync = () => setLocal(readLocalIdentity());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(IDENTITY_CHANGED, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(IDENTITY_CHANGED, sync);
    };
  }, [data?.user?.id]);
  const session = data?.user ? fromSessionUser(data.user) : null;
  const user = session ?? local;
  return {
    user,
    isPending: Boolean(isPending) && !user,
  };
}

/**
 * Convenience view of `useCurrentUserState().user` for display (e.g.
 * `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* ,
 * for redirects/guards use `useCurrentUserState()` and check `isPending`.
 */
export function useCurrentUser(): AppUser | null {
  return useCurrentUserState().user;
}
