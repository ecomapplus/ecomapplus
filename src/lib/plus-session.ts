import { useEffect, useRef, useState } from "react";
import { readLoginEmail } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { confirmPlusCheckout, restorePlusMembership } from "@/lib/plus-checkout";
import {
  grantPlusMembership,
  hasPlusAccess,
  readPlusNext,
  usePlusAccess,
} from "@/lib/plus-membership";
import { readLead } from "@/lib/referral";

const RESTORE_KEY = "ecomap-plus-restore-email";
let restoreInflight: Promise<boolean> | null = null;
let restoreEmail = "";

function clientPlusEmail(userEmail?: string | null): string {
  const fromUser = typeof userEmail === "string" ? userEmail.trim().toLowerCase() : "";
  if (fromUser.includes("@")) return fromUser;
  const login = readLoginEmail()?.trim().toLowerCase() ?? "";
  if (login.includes("@")) return login;
  const lead = readLead()?.email.trim().toLowerCase() ?? "";
  return lead.includes("@") ? lead : "";
}

function applyPaidPlus(result: { until?: string | null; paidAt?: string | null; shareCode?: string | null; bonusYear?: boolean }) {
  if (!result.until) return false;
  grantPlusMembership(result.until, result.paidAt ?? undefined, {
    shareCode: result.shareCode ?? undefined,
    bonusYear: Boolean(result.bonusYear),
  });
  return true;
}

function restoreFor(email: string): Promise<boolean> {
  if (restoreInflight && restoreEmail === email) return restoreInflight;
  restoreEmail = email;
  restoreInflight = restorePlusMembership({ data: { email } })
    .then((result) => {
      try {
        sessionStorage.setItem(RESTORE_KEY, email);
      } catch {
        /* ignore */
      }
      return applyPaidPlus(result);
    })
    .catch(() => false)
    .finally(() => {
      if (restoreEmail === email) restoreInflight = null;
    });
  return restoreInflight;
}

/** Restore a paid year from the email on this device so future members get the atlas home. */
export function useRestorePaidPlus(): boolean {
  const plus = usePlusAccess();
  const { user } = useCurrentUserState();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (plus || hasPlusAccess()) {
      setPending(false);
      return;
    }
    const email = clientPlusEmail(user?.primaryEmail);
    if (!email) return;
    try {
      if (sessionStorage.getItem(RESTORE_KEY) === email) return;
    } catch {
      /* try anyway */
    }
    let cancelled = false;
    setPending(true);
    restoreFor(email).finally(() => {
      if (!cancelled) setPending(false);
    });
    return () => {
      cancelled = true;
    };
  }, [plus, user?.primaryEmail]);

  return pending && !plus;
}

export async function restorePaidPlusForEmail(email: string) {
  const key = email.trim().toLowerCase();
  if (!key.includes("@")) return;
  await restoreFor(key);
}

/** Confirm Stripe return, grant the year, then send the member onward. */
export function useConfirmPlusSession(
  sessionId: string | undefined,
  onGranted?: () => void,
): { confirming: boolean; error: string } {
  const [confirming, setConfirming] = useState(Boolean(sessionId));
  const [error, setError] = useState("");
  const onGrantedRef = useRef(onGranted);
  onGrantedRef.current = onGranted;

  useEffect(() => {
    if (!sessionId) {
      setConfirming(false);
      return;
    }
    let cancelled = false;
    setConfirming(true);
    setError("");
    confirmPlusCheckout({ data: { sessionId } })
      .then((result) => {
        if (cancelled) return;
        if (result.error || !result.until) {
          setError(result.error || "Could not confirm that payment.");
          setConfirming(false);
          return;
        }
        applyPaidPlus(result);
        setConfirming(false);
        onGrantedRef.current?.();
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error && err.message ? err.message : "Could not confirm that payment.");
        setConfirming(false);
      });
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return { confirming, error };
}

export function goAfterPlusCheckout() {
  const next = readPlusNext();
  window.location.replace(next || "/");
}
