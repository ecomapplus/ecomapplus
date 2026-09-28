export const PIONEER_CODE = "pioneer90";
export const PIONEER_LIMIT = 9;
export const PIONEER_PERCENT_OFF = 90;
export const PLUS_PIONEER_AMOUNT_CENTS = 240;
export const PLUS_PIONEER_PRICE_LABEL = "$2.40 a year";
export const REFERRAL_STORAGE_KEY = "ecomap-referral-code";
export const SHARE_CODE_STORAGE_KEY = "ecomap-plus-share-code";
export const REFERRAL_COMMISSION_PERCENT = 50;
export const REFERRAL_COMMISSION_CENTS = 1200;
export const REFERRAL_COMMISSION_LABEL = "$12";
export const REFERRAL_BONUS_YEARS = 2;
const LEAD_KEY = "ecomap-plus-lead";

export type PioneerStatus = "claimed" | "already" | "full" | "none";

export type PioneerPreview = {
  eligible: boolean;
  remaining: number;
  status: PioneerStatus;
};

export type ReferralKind = "none" | "pioneer" | "member";

export type SavedLead = {
  email: string;
  slugs: string[];
  referralCode: string;
  at: string;
};

export function normalizeReferralCode(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);
}

export function isPioneerCode(value: unknown): boolean {
  return normalizeReferralCode(value) === PIONEER_CODE;
}

export function rememberReferralCode(code: string) {
  if (typeof window === "undefined") return;
  const normalized = normalizeReferralCode(code);
  try {
    if (normalized) localStorage.setItem(REFERRAL_STORAGE_KEY, normalized);
    else localStorage.removeItem(REFERRAL_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function readReferralCode(): string {
  if (typeof window === "undefined") return "";
  try {
    return normalizeReferralCode(localStorage.getItem(REFERRAL_STORAGE_KEY) ?? "");
  } catch {
    return "";
  }
}

export function captureReferralFromUrl(search = typeof window === "undefined" ? "" : window.location.search): string {
  if (!search) return "";
  try {
    const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
    const code = normalizeReferralCode(params.get("ref") ?? params.get("referral") ?? "");
    if (code) rememberReferralCode(code);
    return code;
  } catch {
    return "";
  }
}

export function rememberShareCode(code: string) {
  if (typeof window === "undefined") return;
  const normalized = normalizeReferralCode(code);
  try {
    if (normalized) localStorage.setItem(SHARE_CODE_STORAGE_KEY, normalized);
    else localStorage.removeItem(SHARE_CODE_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function readShareCode(): string {
  if (typeof window === "undefined") return "";
  try {
    return normalizeReferralCode(localStorage.getItem(SHARE_CODE_STORAGE_KEY) ?? "");
  } catch {
    return "";
  }
}

export function shareLinkFor(code: string, origin = typeof window === "undefined" ? "" : window.location.origin): string {
  const normalized = normalizeReferralCode(code);
  if (!normalized || !origin) return "";
  return `${origin}/plus?ref=${encodeURIComponent(normalized)}`;
}

export function saveLead(email: string, slugs: string[], referralCode = "") {
  if (typeof window === "undefined") return;
  const row: SavedLead = {
    email: email.trim().toLowerCase(),
    slugs,
    referralCode: normalizeReferralCode(referralCode),
    at: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(LEAD_KEY, JSON.stringify(row));
    rememberReferralCode(row.referralCode);
  } catch {
    /* ignore */
  }
}

export function readLead(): SavedLead | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LEAD_KEY);
    if (!raw) return null;
    const row = JSON.parse(raw) as Partial<SavedLead>;
    if (typeof row.email !== "string" || !row.email.includes("@")) return null;
    return {
      email: row.email.trim().toLowerCase(),
      slugs: Array.isArray(row.slugs) ? row.slugs.filter((value): value is string => typeof value === "string") : [],
      referralCode: normalizeReferralCode(row.referralCode) || readReferralCode(),
      at: typeof row.at === "string" ? row.at : "",
    };
  } catch {
    return null;
  }
}
