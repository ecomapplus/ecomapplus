import { createServerFn } from "@tanstack/react-start";
import { isPlusAdminEmail, normalizePlusEmail, safePlusNext } from "@/lib/plus-membership";
import {
  isPioneerCode,
  normalizeReferralCode,
  type PioneerPreview,
  type ReferralKind,
} from "@/lib/referral";

export type PlusCheckoutStatus = {
  configured: boolean;
  testMode: boolean;
};

export type StartCheckoutResult = {
  url: string | null;
  discounted: boolean;
  bonusYear: boolean;
  error: string | null;
};

export type ConfirmCheckoutResult = {
  until: string | null;
  paidAt: string | null;
  shareCode: string | null;
  bonusYear: boolean;
  error: string | null;
};

export type RestorePlusResult = ConfirmCheckoutResult;

export type PreviewReferralResult = PioneerPreview & {
  kind: ReferralKind;
  bonusYear: boolean;
  error: string | null;
};

export type ShareCodeResult = {
  code: string | null;
  referredCount: number;
  earnedCents: number;
  creditedCents: number;
  error: string | null;
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

export type ListPlusReferralsResult =
  | { ok: true; rows: PlusReferralAdminRow[] }
  | { ok: false; error: string };

const CHECKOUT_NOT_LIVE = "Checkout isn’t live yet. The year opens after a real Stripe payment.";

function errorMessage(err: unknown, fallback: string): string {
  if (err instanceof Error && err.message) return err.message;
  return fallback;
}

function optionalEmail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const email = value.trim().toLowerCase();
  return email ? email : undefined;
}

export const plusCheckoutStatus = createServerFn({ method: "GET" }).handler(async (): Promise<PlusCheckoutStatus> => {
  const { readPlusCheckoutStatus } = await import("./stripe.server");
  return readPlusCheckoutStatus();
});

export const previewPlusReferral = createServerFn({ method: "POST" })
  .validator((input: { email?: string; referralCode?: string }) => ({
    email: optionalEmail(input?.email) ?? "",
    referralCode: normalizeReferralCode(input?.referralCode),
  }))
  .handler(async ({ data }): Promise<PreviewReferralResult> => {
    try {
      if (!data.referralCode) {
        const { previewPioneer } = await import("./pioneer-store.server");
        const preview = await previewPioneer(data.email, "");
        return { ...preview, kind: "none", bonusYear: false, error: null };
      }
      if (isPioneerCode(data.referralCode)) {
        const { previewPioneer } = await import("./pioneer-store.server");
        const preview = await previewPioneer(data.email, data.referralCode);
        return { ...preview, kind: "pioneer", bonusYear: false, error: null };
      }
      const { findPlusMemberByCode, hashPlusIdentity } = await import("./referral-store.server");
      const member = await findPlusMemberByCode(data.referralCode);
      if (!member) {
        return {
          eligible: false,
          remaining: 0,
          status: "none",
          kind: "none",
          bonusYear: false,
          error: "That code isn’t active.",
        };
      }
      if (data.email && hashPlusIdentity(data.email) === member.emailHash) {
        return {
          eligible: false,
          remaining: 0,
          status: "none",
          kind: "none",
          bonusYear: false,
          error: "You can’t use your own code.",
        };
      }
      return {
        eligible: true,
        remaining: 0,
        status: "none",
        kind: "member",
        bonusYear: true,
        error: null,
      };
    } catch (err) {
      return {
        eligible: false,
        remaining: 0,
        status: "none",
        kind: "none",
        bonusYear: false,
        error: errorMessage(err, "Could not check that code."),
      };
    }
  });

export const startPlusCheckout = createServerFn({ method: "POST" })
  .validator((input: { origin: string; email?: string; next?: string; referralCode?: string }) => {
    if (typeof input?.origin !== "string" || input.origin.length < 8) {
      throw new Error("Missing origin");
    }
    return {
      origin: input.origin,
      email: optionalEmail(input.email),
      next: safePlusNext(input.next),
      referralCode: normalizeReferralCode(input.referralCode),
    };
  })
  .handler(async ({ data }): Promise<StartCheckoutResult> => {
    const { createPlusCheckoutSession, readPlusCheckoutStatus } = await import("./stripe.server");
    if (!readPlusCheckoutStatus().configured) {
      return { url: null, discounted: false, bonusYear: false, error: CHECKOUT_NOT_LIVE };
    }
    try {
      const result = await createPlusCheckoutSession(data);
      return { url: result.url, discounted: result.discounted, bonusYear: result.bonusYear, error: null };
    } catch (err) {
      return {
        url: null,
        discounted: false,
        bonusYear: false,
        error: errorMessage(err, "Stripe couldn’t start checkout. Try again in a moment."),
      };
    }
  });

export const confirmPlusCheckout = createServerFn({ method: "POST" })
  .validator((input: { sessionId: string }) => {
    const sessionId = typeof input?.sessionId === "string" ? input.sessionId.trim() : "";
    if (!sessionId) throw new Error("Missing checkout session.");
    return { sessionId };
  })
  .handler(async ({ data }): Promise<ConfirmCheckoutResult> => {
    const { confirmPlusCheckoutSession, readPlusCheckoutStatus } = await import("./stripe.server");
    if (!readPlusCheckoutStatus().configured) {
      return { until: null, paidAt: null, shareCode: null, bonusYear: false, error: CHECKOUT_NOT_LIVE };
    }
    try {
      const result = await confirmPlusCheckoutSession(data.sessionId);
      return {
        until: result.until,
        paidAt: result.paidAt,
        shareCode: result.shareCode || null,
        bonusYear: result.bonusYear,
        error: null,
      };
    } catch (err) {
      return {
        until: null,
        paidAt: null,
        shareCode: null,
        bonusYear: false,
        error: errorMessage(err, "Could not confirm that payment."),
      };
    }
  });

export const restorePlusMembership = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => ({
    email: optionalEmail(input?.email) ?? "",
  }))
  .handler(async ({ data }): Promise<RestorePlusResult> => {
    const empty: RestorePlusResult = {
      until: null,
      paidAt: null,
      shareCode: null,
      bonusYear: false,
      error: null,
    };
    if (!data.email || !data.email.includes("@")) return empty;
    try {
      const { findPlusMemberByHash, hashPlusIdentity } = await import("./referral-store.server");
      const member = await findPlusMemberByHash(hashPlusIdentity(data.email));
      if (!member) return empty;
      const untilMs = Date.parse(member.until);
      if (!Number.isFinite(untilMs) || untilMs <= Date.now()) return empty;
      return {
        until: member.until,
        paidAt: member.paidAt || null,
        shareCode: member.code || null,
        bonusYear: Boolean(member.bonusYear),
        error: null,
      };
    } catch (err) {
      return {
        until: null,
        paidAt: null,
        shareCode: null,
        bonusYear: false,
        error: errorMessage(err, "Could not restore that membership."),
      };
    }
  });

export type ReferralPayoutResult = {
  connected: boolean;
  payoutsReady: boolean;
  availableCents: number;
  error: string | null;
};

export const referralPayoutStatus = createServerFn({ method: "POST" })
  .validator((input: { email?: string }) => ({
    email: optionalEmail(input?.email) ?? "",
  }))
  .handler(async ({ data }): Promise<ReferralPayoutResult> => {
    if (!data.email) {
      return { connected: false, payoutsReady: false, availableCents: 0, error: null };
    }
    try {
      const { referralPayoutState } = await import("./stripe.server");
      const state = await referralPayoutState(data.email);
      return { ...state, error: null };
    } catch (err) {
      return {
        connected: false,
        payoutsReady: false,
        availableCents: 0,
        error: errorMessage(err, "Could not check Stripe."),
      };
    }
  });

export const startReferralConnect = createServerFn({ method: "POST" })
  .validator((input: { email?: string; origin?: string }) => ({
    email: optionalEmail(input?.email) ?? "",
    origin: typeof input?.origin === "string" ? input.origin : "",
  }))
  .handler(async ({ data }) => {
    try {
      const { beginReferralConnect } = await import("./stripe.server");
      const result = await beginReferralConnect({ email: data.email, origin: data.origin });
      return { url: result.url, error: null as string | null };
    } catch (err) {
      return { url: null as string | null, error: errorMessage(err, "Could not open Stripe Connect.") };
    }
  });

export const withdrawReferral = createServerFn({ method: "POST" })
  .validator((input: { email?: string }) => ({
    email: optionalEmail(input?.email) ?? "",
  }))
  .handler(async ({ data }) => {
    try {
      const { withdrawReferralBonus } = await import("./stripe.server");
      const result = await withdrawReferralBonus(data.email);
      return { cents: result.cents, error: null as string | null };
    } catch (err) {
      return { cents: 0, error: errorMessage(err, "Could not withdraw.") };
    }
  });

export const ensurePlusShareCode = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => {
    const email = typeof input?.email === "string" ? normalizePlusEmail(input.email) : "";
    return { email };
  })
  .handler(async ({ data }): Promise<ShareCodeResult> => {
    if (!data.email || !data.email.includes("@")) {
      return { code: null, referredCount: 0, earnedCents: 0, creditedCents: 0, error: "Enter a working email." };
    }
    try {
      const { findPlusMemberByHash, hashPlusIdentity, plusReferralStats, upsertPlusMember } =
        await import("./referral-store.server");
      const hash = hashPlusIdentity(data.email);
      let member = await findPlusMemberByHash(hash);
      if (!member && isPlusAdminEmail(data.email)) {
        member = await upsertPlusMember({ identity: data.email });
      }
      if (!member) {
        return {
          code: null,
          referredCount: 0,
          earnedCents: 0,
          creditedCents: 0,
          error: "A share code appears after a paid EcoMapPlus year.",
        };
      }
      const stats = await plusReferralStats(member.code);
      return { ...stats, code: member.code, error: null };
    } catch (err) {
      return {
        code: null,
        referredCount: 0,
        earnedCents: 0,
        creditedCents: 0,
        error: errorMessage(err, "Could not load that share code."),
      };
    }
  });

export const plusShareStats = createServerFn({ method: "POST" })
  .validator((input: { code: string }) => ({
    code: normalizeReferralCode(input?.code),
  }))
  .handler(async ({ data }): Promise<ShareCodeResult> => {
    if (!data.code) {
      return { code: null, referredCount: 0, earnedCents: 0, creditedCents: 0, error: null };
    }
    try {
      const { findPlusMemberByCode, plusReferralStats } = await import("./referral-store.server");
      const member = await findPlusMemberByCode(data.code);
      if (!member) {
        return { code: data.code, referredCount: 0, earnedCents: 0, creditedCents: 0, error: null };
      }
      const stats = await plusReferralStats(member.code);
      return { ...stats, code: member.code, error: null };
    } catch (err) {
      return {
        code: data.code,
        referredCount: 0,
        earnedCents: 0,
        creditedCents: 0,
        error: errorMessage(err, "Could not load referral totals."),
      };
    }
  });

export const listPlusReferrals = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => ({
    email: typeof input?.email === "string" ? input.email : "",
  }))
  .handler(async ({ data }): Promise<ListPlusReferralsResult> => {
    if (!isPlusAdminEmail(data.email)) return { ok: false, error: "Not this address." };
    try {
      const { listPlusReferrals: listRows } = await import("./referral-store.server");
      return { ok: true, rows: await listRows() };
    } catch (err) {
      return { ok: false, error: errorMessage(err, "Could not load referrals.") };
    }
  });
