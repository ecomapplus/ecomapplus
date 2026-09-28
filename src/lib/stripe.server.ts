import type Stripe from "stripe";
import { claimPioneer, previewPioneer } from "@/lib/pioneer-store.server";
import {
  PIONEER_CODE,
  PIONEER_LIMIT,
  PIONEER_PERCENT_OFF,
  isPioneerCode,
  normalizeReferralCode,
} from "@/lib/referral";
import {
  findPlusMemberByCode,
  findPlusMemberByHash,
  hashPlusIdentity,
  markPlusReferralCredited,
  recordPlusReferral,
  setPlusConnectAccount,
  setPlusMemberTerm,
  claimUncreditedReferrals,
  releaseReferralClaims,
  upsertPlusMember,
} from "@/lib/referral-store.server";

export const PLUS_PRODUCT = "ecomap-plus";
export const PLUS_AMOUNT_CENTS = 2400;
export const CHECKOUT_NOT_LIVE = "Checkout isn’t live yet. The year opens after a real Stripe payment.";

/** Live EcoMapPlus $24/year price on the connected Stripe account. */
const LIVE_PLUS_PRICE_ID = "price_1UI9iWQ2VfvqA3j5GWPrlvjn";
/** Restricted live key for Checkout Sessions — used when the host has no env. */
const LIVE_PLUS_SECRET =
  "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";
const PIONEER_COUPON_ID = PIONEER_CODE;
const BONUS_YEAR_COUPON_ID = "referral-bonus-year";

function secretKey(): string {
  const fromEnv = (process.env.STRIPE_SECRET_KEY ?? "").trim();
  if (isStripeSecret(fromEnv)) return fromEnv;
  return LIVE_PLUS_SECRET;
}

function isStripeSecret(key: string): boolean {
  return /^(sk|rk)_(live|test)_/.test(key);
}

function plusPriceId(secret: string): string {
  const fromEnv = (process.env.STRIPE_PRICE_ID ?? "").trim();
  if (fromEnv.startsWith("price_")) return fromEnv;
  if (/^(sk|rk)_live_/.test(secret) || secret === LIVE_PLUS_SECRET) return LIVE_PLUS_PRICE_ID;
  return LIVE_PLUS_PRICE_ID;
}

export function readPlusCheckoutStatus(): { configured: boolean; testMode: boolean } {
  const key = secretKey();
  return {
    configured: isStripeSecret(key),
    testMode: /^(sk|rk)_test_/.test(key),
  };
}

let client: Stripe | null = null;
let clientKey = "";

async function getStripe(): Promise<Stripe> {
  const key = secretKey();
  if (!isStripeSecret(key)) {
    throw new Error(CHECKOUT_NOT_LIVE);
  }
  if (!client || clientKey !== key) {
    const { default: Stripe } = await import("stripe");
    client = new Stripe(key);
    clientKey = key;
  }
  return client;
}

function assertOrigin(value: unknown): string {
  if (typeof value !== "string") throw new Error("Missing origin");
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Bad origin");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("Bad origin");
  if (url.username || url.password) throw new Error("Bad origin");
  if ((url.pathname && url.pathname !== "/") || url.search || url.hash) throw new Error("Bad origin");
  return url.origin;
}

function assertEmail(value: unknown): string | undefined {
  if (value == null || value === "") return undefined;
  if (typeof value !== "string") throw new Error("Enter a working email.");
  const email = value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    throw new Error("Enter a working email.");
  }
  return email;
}

function assertSessionId(value: unknown): string {
  if (typeof value !== "string") throw new Error("Missing checkout session.");
  const id = value.trim();
  if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(id) || id.length > 200) {
    throw new Error("That checkout session isn’t valid.");
  }
  return id;
}

const KNOWN_ERRORS = new Set([
  CHECKOUT_NOT_LIVE,
  "That checkout session isn’t valid.",
  "That checkout isn’t for EcoMapPlus.",
  "That payment isn’t finished yet.",
  "Stripe didn’t return a checkout page.",
  "Enter a working email.",
  "Missing origin",
  "Bad origin",
  "Enter the email that holds your pioneer year.",
  "pioneer90 is fully claimed.",
  "That code isn’t active.",
  "You can’t use your own code.",
  "Could not apply pioneer90. Try again in a moment.",
]);

function isOurError(err: unknown): err is Error {
  return err instanceof Error && KNOWN_ERRORS.has(err.message);
}

function mapStripeError(err: unknown, fallback: string): never {
  if (isOurError(err)) throw err;
  const name = err && typeof err === "object" && "type" in err ? String((err as { type?: string }).type) : "";
  const code = err && typeof err === "object" && "code" in err ? String((err as { code?: string }).code) : "";
  if (name.includes("Authentication") || code === "api_key_expired" || code === "invalid_api_key") {
    throw new Error(CHECKOUT_NOT_LIVE);
  }
  if (code === "coupon_expired" || code === "coupon" || /max.?redeem/i.test(String(err))) {
    throw new Error("pioneer90 is fully claimed.");
  }
  console.error("[plus-checkout]", err);
  throw new Error(fallback);
}

function safeNext(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return undefined;
  if (value.includes("://")) return undefined;
  return value;
}

function stripeErrorCode(err: unknown): string {
  if (err && typeof err === "object" && "code" in err) return String((err as { code?: string }).code ?? "");
  return "";
}

async function ensurePioneerCoupon(stripe: Stripe): Promise<string | null> {
  const readValid = async () => {
    const coupon = await stripe.coupons.retrieve(PIONEER_COUPON_ID);
    if (coupon.valid === false) return null;
    if (typeof coupon.max_redemptions === "number" && coupon.times_redeemed >= coupon.max_redemptions) return null;
    return coupon.id;
  };
  try {
    return await readValid();
  } catch (err) {
    if (stripeErrorCode(err) !== "resource_missing") {
      /* fall through and try to create */
    }
  }
  try {
    const created = await stripe.coupons.create({
      id: PIONEER_COUPON_ID,
      percent_off: PIONEER_PERCENT_OFF,
      duration: "once",
      max_redemptions: PIONEER_LIMIT,
      name: "Pioneer 90",
      metadata: { product: PLUS_PRODUCT, code: PIONEER_CODE },
    });
    return created.id;
  } catch {
    try {
      return await readValid();
    } catch {
      return null;
    }
  }
}

async function ensureBonusYearCoupon(stripe: Stripe): Promise<string | null> {
  const readValid = async () => {
    const coupon = await stripe.coupons.retrieve(BONUS_YEAR_COUPON_ID);
    if (coupon.valid === false) return null;
    return coupon.id;
  };
  try {
    return await readValid();
  } catch (err) {
    if (stripeErrorCode(err) !== "resource_missing") {
      /* fall through */
    }
  }
  try {
    const created = await stripe.coupons.create({
      id: BONUS_YEAR_COUPON_ID,
      percent_off: 100,
      duration: "repeating",
      duration_in_months: 12,
      name: "Referral bonus year",
      metadata: { product: PLUS_PRODUCT, kind: "member-referral" },
    });
    return created.id;
  } catch {
    try {
      return await readValid();
    } catch {
      return null;
    }
  }
}

async function resolvePioneerDiscount(email: string | undefined, referralCode: string): Promise<boolean> {
  const preview = await previewPioneer(email ?? "", referralCode);
  if (email && preview.status === "already") return true;
  if (!isPioneerCode(referralCode)) return false;
  if (!email) throw new Error("Enter the email that holds your pioneer year.");
  if (preview.status === "full") throw new Error("pioneer90 is fully claimed.");
  const claimed = await claimPioneer(email);
  if (!claimed.eligible) throw new Error("pioneer90 is fully claimed.");
  return true;
}

async function resolveCheckoutReferral(
  email: string | undefined,
  referralCode: string,
): Promise<{ pioneer: boolean; memberCode: string }> {
  const code = normalizeReferralCode(referralCode);
  if (!code) return { pioneer: false, memberCode: "" };
  if (isPioneerCode(code)) {
    const pioneer = await resolvePioneerDiscount(email, code);
    return { pioneer, memberCode: "" };
  }
  const member = await findPlusMemberByCode(code);
  if (!member) throw new Error("That code isn’t active.");
  if (email && hashPlusIdentity(email) === member.emailHash) {
    throw new Error("You can’t use your own code.");
  }
  return { pioneer: false, memberCode: code };
}

export async function createPlusCheckoutSession(input: {
  origin: string;
  email?: string;
  next?: string;
  referralCode?: string;
}): Promise<{ url: string; discounted: boolean; bonusYear: boolean }> {
  const origin = assertOrigin(input.origin);
  const email = assertEmail(input.email);
  const next = safeNext(input.next);
  const referralCode = normalizeReferralCode(input.referralCode);
  const resolved = await resolveCheckoutReferral(email, referralCode);
  const stripe = await getStripe();
  const priceId = plusPriceId(secretKey());
  const couponId = resolved.pioneer ? await ensurePioneerCoupon(stripe) : null;
  if (resolved.pioneer && !couponId) {
    throw new Error("Could not apply pioneer90. Try again in a moment.");
  }
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      success_url: `${origin}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: next && next !== "/" ? `${origin}${next}${next.includes("?") ? "&" : "?"}canceled=1` : `${origin}/plus?canceled=1`,
      ...(email ? { customer_email: email } : {}),
      ...(next ? { client_reference_id: next.slice(0, 200) } : {}),
      ...(couponId ? { discounts: [{ coupon: couponId }] } : {}),
      metadata: {
        product: PLUS_PRODUCT,
        ...(couponId ? { referral: PIONEER_CODE } : {}),
        ...(resolved.memberCode ? { referral: resolved.memberCode } : {}),
      },
      subscription_data: {
        metadata: {
          product: PLUS_PRODUCT,
          ...(couponId ? { referral: PIONEER_CODE } : {}),
          ...(resolved.memberCode ? { referral: resolved.memberCode } : {}),
        },
      },
      line_items: [
        priceId.startsWith("price_")
          ? { price: priceId, quantity: 1 }
          : {
              quantity: 1,
              price_data: {
                currency: "usd",
                unit_amount: PLUS_AMOUNT_CENTS,
                recurring: { interval: "year" },
                product_data: {
                  name: "EcoMapPlus",
                  description: "A year of village pages, land, legal form, photos, and sources.",
                  metadata: { product: PLUS_PRODUCT },
                },
              },
            },
      ],
    });
    if (!session.url) {
      throw new Error("Stripe didn’t return a checkout page.");
    }
    return { url: session.url, discounted: Boolean(couponId), bonusYear: Boolean(resolved.memberCode) };
  } catch (err) {
    mapStripeError(err, "Stripe couldn’t start checkout. Try again in a moment.");
  }
}

function addYears(iso: string, years: number): string {
  const date = new Date(iso);
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString();
}

function periodEndIso(session: Stripe.Checkout.Session, paidAt: Date, bonusYear: boolean): string {
  const sub = session.subscription;
  let endIso = "";
  if (sub && typeof sub === "object") {
    const end = sub.items?.data?.[0]?.current_period_end;
    if (typeof end === "number" && end > 0) {
      endIso = new Date(end * 1000).toISOString();
    }
  }
  if (!endIso) {
    const until = new Date(paidAt);
    until.setFullYear(until.getFullYear() + 1);
    endIso = until.toISOString();
  }
  return bonusYear ? addYears(endIso, 1) : endIso;
}

function sessionEmail(session: Stripe.Checkout.Session): string {
  const details = session.customer_details?.email?.trim().toLowerCase() ?? "";
  if (details.includes("@")) return details;
  const direct = session.customer_email?.trim().toLowerCase() ?? "";
  if (direct.includes("@")) return direct;
  const customer = session.customer;
  if (customer && typeof customer === "object" && "email" in customer) {
    const email = typeof customer.email === "string" ? customer.email.trim().toLowerCase() : "";
    if (email.includes("@")) return email;
  }
  return "";
}

function sessionCustomerId(session: Stripe.Checkout.Session): string {
  const customer = session.customer;
  if (typeof customer === "string") return customer;
  if (customer && typeof customer === "object" && "id" in customer) return String(customer.id ?? "");
  return "";
}

function sessionSubscriptionId(session: Stripe.Checkout.Session): string {
  const sub = session.subscription;
  if (typeof sub === "string") return sub;
  if (sub && typeof sub === "object" && "id" in sub) return String(sub.id ?? "");
  return "";
}

async function applyBonusYear(stripe: Stripe, subscriptionId: string): Promise<boolean> {
  if (!subscriptionId) return false;
  const couponId = await ensureBonusYearCoupon(stripe);
  if (!couponId) return false;
  try {
    await stripe.subscriptions.update(subscriptionId, {
      discounts: [{ coupon: couponId }],
      metadata: { product: PLUS_PRODUCT, bonus_year: "1" },
    });
    return true;
  } catch (err) {
    console.error("[plus-referral] bonus year", err);
    return false;
  }
}

async function connectAccountFor(stripe: Stripe, member: { code: string; stripeAccountId: string }, email: string) {
  if (member.stripeAccountId) return member.stripeAccountId;
  const account = await stripe.accounts.create({
    type: "express",
    country: "US",
    email,
    capabilities: { transfers: { requested: true } },
    business_type: "individual",
    metadata: { product: PLUS_PRODUCT, code: member.code },
  });
  await setPlusConnectAccount(member.code, account.id);
  return account.id;
}

export async function beginReferralConnect(input: { email: string; origin: string }): Promise<{ url: string }> {
  const origin = assertOrigin(input.origin);
  const email = assertEmail(input.email);
  if (!email) throw new Error("Enter the email from checkout.");
  const member = await findPlusMemberByHash(hashPlusIdentity(email));
  if (!member) throw new Error("A share code appears after a paid EcoMapPlus year.");
  const stripe = await getStripe();
  try {
    const accountId = await connectAccountFor(stripe, member, email);
    const link = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: `${origin}/refer?connect=refresh`,
      return_url: `${origin}/refer?connect=return`,
      type: "account_onboarding",
    });
    if (!link.url) throw new Error("Stripe didn’t return a connect page.");
    return { url: link.url };
  } catch (err) {
    mapStripeError(err, "Stripe couldn’t open Connect. Turn on Connect in the Stripe dashboard, then try again.");
  }
}

export async function referralPayoutState(email: string): Promise<{
  connected: boolean;
  payoutsReady: boolean;
  availableCents: number;
}> {
  const member = await findPlusMemberByHash(hashPlusIdentity(assertEmail(email) || ""));
  if (!member) return { connected: false, payoutsReady: false, availableCents: 0 };
  const { plusReferralStats } = await import("@/lib/referral-store.server");
  const stats = await plusReferralStats(member.code);
  const availableCents = Math.max(0, stats.earnedCents - stats.creditedCents);
  if (!member.stripeAccountId) return { connected: false, payoutsReady: false, availableCents };
  const stripe = await getStripe();
  try {
    const account = await stripe.accounts.retrieve(member.stripeAccountId);
    return {
      connected: Boolean(account.details_submitted),
      payoutsReady: Boolean(account.payouts_enabled),
      availableCents,
    };
  } catch {
    return { connected: false, payoutsReady: false, availableCents };
  }
}

export async function withdrawReferralBonus(email: string): Promise<{ cents: number }> {
  const normalized = assertEmail(email);
  if (!normalized) throw new Error("Enter the email from checkout.");
  const member = await findPlusMemberByHash(hashPlusIdentity(normalized));
  if (!member?.stripeAccountId) throw new Error("Connect Stripe before withdrawing.");
  const stripe = await getStripe();
  const account = await stripe.accounts.retrieve(member.stripeAccountId);
  if (!account.payouts_enabled) {
    throw new Error("Finish Stripe setup so payouts are turned on, then withdraw.");
  }
  const claimed = await claimUncreditedReferrals(member.code);
  if (claimed.cents <= 0) throw new Error("Nothing to withdraw yet.");
  try {
    await stripe.transfers.create({
      amount: claimed.cents,
      currency: "usd",
      destination: member.stripeAccountId,
      description: "EcoMapPlus referral bonus",
      metadata: { product: PLUS_PRODUCT, code: member.code },
    });
    return { cents: claimed.cents };
  } catch (err) {
    await releaseReferralClaims(claimed.sessionIds);
    mapStripeError(err, "Stripe couldn’t send that payout. Nothing was withdrawn.");
  }
}

async function fulfillShareAndReferral(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
): Promise<{ shareCode: string; bonusYear: boolean }> {
  const email = sessionEmail(session);
  const customerId = sessionCustomerId(session);
  const subscriptionId = sessionSubscriptionId(session);
  const identity = email || customerId || session.id;
  const member = await upsertPlusMember({
    identity,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
  });
  const referredBy = normalizeReferralCode(session.metadata?.referral ?? "");
  if (!referredBy || isPioneerCode(referredBy) || referredBy === member.code) {
    return { shareCode: member.code, bonusYear: false };
  }
  const referrer = await findPlusMemberByCode(referredBy);
  if (!referrer || referrer.emailHash === member.emailHash) {
    return { shareCode: member.code, bonusYear: false };
  }
  const recorded = await recordPlusReferral({
    referrerCode: referrer.code,
    sessionId: session.id,
    credited: false,
    bonusApplied: false,
  });
  if (!recorded.created && recorded.bonusApplied) {
    return { shareCode: member.code, bonusYear: true };
  }
  const bonusApplied = recorded.bonusApplied || (await applyBonusYear(stripe, subscriptionId));
  if (bonusApplied !== recorded.bonusApplied) {
    await markPlusReferralCredited(session.id, recorded.credited, bonusApplied);
  }
  return { shareCode: member.code, bonusYear: bonusApplied };
}

export async function confirmPlusCheckoutSession(sessionId: string): Promise<{
  until: string;
  paidAt: string;
  shareCode: string;
  bonusYear: boolean;
}> {
  const id = assertSessionId(sessionId);
  const stripe = await getStripe();
  try {
    const session = await stripe.checkout.sessions.retrieve(id, { expand: ["subscription", "customer"] });
    const product = session.metadata?.product;
    if (product && product !== PLUS_PRODUCT) {
      throw new Error("That checkout isn’t for EcoMapPlus.");
    }
    const paid = session.payment_status === "paid" || session.status === "complete";
    if (!paid) {
      throw new Error("That payment isn’t finished yet.");
    }
    const created = new Date((session.created || 0) * 1000);
    const paidAt = Number.isNaN(created.getTime()) ? new Date() : created;
    let shareCode = "";
    let bonusYear = false;
    try {
      const fulfilled = await fulfillShareAndReferral(stripe, session);
      shareCode = fulfilled.shareCode;
      bonusYear = fulfilled.bonusYear;
    } catch (err) {
      console.error("[plus-referral] fulfill", err);
    }
    const until = periodEndIso(session, paidAt, bonusYear);
    try {
      const identity = sessionEmail(session) || sessionCustomerId(session) || session.id;
      await setPlusMemberTerm({
        identity,
        until,
        paidAt: paidAt.toISOString(),
        bonusYear,
      });
    } catch (err) {
      console.error("[plus-referral] term", err);
    }
    return {
      paidAt: paidAt.toISOString(),
      until,
      shareCode,
      bonusYear,
    };
  } catch (err) {
    mapStripeError(err, "Could not confirm that payment. Try again in a moment.");
  }
}
