import { createServerFn } from "@tanstack/react-start";
import {
  FARM_OPTIONS,
  GOVERNANCE_OPTIONS,
  MEMBER_OPTIONS,
  PHILOSOPHY_OPTIONS,
  STAY_OPTIONS,
  TOGETHER_OPTIONS,
  type EcoAnswers,
  type EcoWeights,
} from "@/data/ecomap-match";
import { isPlusAdminEmail, normalizePlusEmail } from "@/lib/plus-membership";
import { isPioneerCode, normalizeReferralCode, PIONEER_LIMIT, type PioneerStatus } from "@/lib/referral";

export type WeeklyLead = {
  id: string;
  email: string;
  answers: EcoAnswers;
  weights: EcoWeights;
  matchSlugs: string[];
  referralCode: string;
  sendOn: string;
  createdAt: string;
};

export type SaveWeeklyLeadResult =
  | { id: string; sendOn: string; pioneer: PioneerStatus; remaining: number; error: null }
  | { id: null; sendOn: null; pioneer: "none"; remaining: number; error: string };
export type ListWeeklyLeadsResult =
  | { ok: true; rows: WeeklyLead[] }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asPoint(value: unknown): EcoAnswers["location"] {
  if (!value || typeof value !== "object") return null;
  const row = value as { lat?: unknown; lng?: unknown };
  if (typeof row.lat !== "number" || typeof row.lng !== "number") return null;
  if (!Number.isFinite(row.lat) || !Number.isFinite(row.lng)) return null;
  return { lat: row.lat, lng: row.lng };
}

function asChoice<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  return typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : null;
}

function asWeight(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return 50;
  return Math.max(0, Math.min(100, Math.round(n)));
}

function parseAnswers(raw: unknown): EcoAnswers {
  const row = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  return {
    location: asPoint(row.location),
    stay: asChoice(row.stay, STAY_OPTIONS.map((o) => o.id)),
    farm: asChoice(row.farm, FARM_OPTIONS.map((o) => o.id)),
    together: asChoice(row.together, TOGETHER_OPTIONS.map((o) => o.id)),
    philosophy: asChoice(row.philosophy, PHILOSOPHY_OPTIONS.map((o) => o.id)),
    governance: asChoice(row.governance, GOVERNANCE_OPTIONS.map((o) => o.id)),
    members: asChoice(row.members, MEMBER_OPTIONS.map((o) => o.id)),
  };
}

function parseWeights(raw: unknown): EcoWeights {
  const row = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  return {
    location: asWeight(row.location),
    stay: asWeight(row.stay),
    farm: asWeight(row.farm),
    together: asWeight(row.together),
    philosophy: asWeight(row.philosophy),
    governance: asWeight(row.governance),
    members: asWeight(row.members),
  };
}

function parseSlugs(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((value): value is string => typeof value === "string" && /^[a-z0-9-]{1,80}$/.test(value))
    .slice(0, 5);
}

function sanitizeLead(row: unknown): WeeklyLead | null {
  if (!row || typeof row !== "object") return null;
  const item = row as Record<string, unknown>;
  const email = typeof item.email === "string" ? normalizePlusEmail(item.email) : "";
  if (!EMAIL_RE.test(email)) return null;
  return {
    id: typeof item.id === "string" ? item.id : crypto.randomUUID(),
    email,
    answers: parseAnswers(item.answers),
    weights: parseWeights(item.weights),
    matchSlugs: parseSlugs(item.matchSlugs),
    referralCode: normalizeReferralCode(item.referralCode),
    sendOn: typeof item.sendOn === "string" ? item.sendOn.slice(0, 10) : nextWeeklySendOn(),
    createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date().toISOString(),
  };
}

export function nextWeeklySendOn(now = new Date()): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  ) as Record<string, string>;
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  const utc = Date.UTC(year, month - 1, day);
  const isMondayWindow = weekday === 1 && (hour < 16 || (hour === 16 && minute < 30));
  const addDays = isMondayWindow ? 0 : (8 - (weekday === 0 ? 7 : weekday)) % 7 || 7;
  const send = new Date(utc + addDays * 86400000);
  return send.toISOString().slice(0, 10);
}

function labelOf<T extends string>(id: T | null, options: { id: T; label: string }[]): string {
  if (!id) return "—";
  return options.find((row) => row.id === id)?.label ?? id;
}

export function weeklyAnswerLines(
  answers: EcoAnswers,
  weights: EcoWeights,
): { label: string; value: string; weight: number }[] {
  const place = answers.location
    ? `${answers.location.lat.toFixed(2)}°, ${answers.location.lng.toFixed(2)}°`
    : "—";
  return [
    { label: "Location", value: place, weight: weights.location },
    { label: "Stay", value: labelOf(answers.stay, STAY_OPTIONS), weight: weights.stay },
    { label: "Farm", value: labelOf(answers.farm, FARM_OPTIONS), weight: weights.farm },
    { label: "Time together", value: labelOf(answers.together, TOGETHER_OPTIONS), weight: weights.together },
    { label: "Philosophy", value: labelOf(answers.philosophy, PHILOSOPHY_OPTIONS), weight: weights.philosophy },
    { label: "Governance", value: labelOf(answers.governance, GOVERNANCE_OPTIONS), weight: weights.governance },
    { label: "Members", value: labelOf(answers.members, MEMBER_OPTIONS), weight: weights.members },
  ];
}

export const saveWeeklyLead = createServerFn({ method: "POST" })
  .validator(
    (input: {
      email: string;
      answers: EcoAnswers;
      weights: EcoWeights;
      matchSlugs?: string[];
      referralCode?: string;
    }) => {
      const email = typeof input?.email === "string" ? normalizePlusEmail(input.email) : "";
      const referralCode = normalizeReferralCode(input?.referralCode);
      if (!EMAIL_RE.test(email) || email.length > 200) {
        return {
          error: "Enter a working email.",
          email: "",
          answers: parseAnswers(null),
          weights: parseWeights(null),
          matchSlugs: [] as string[],
          referralCode,
        };
      }

      return {
        error: null as string | null,
        email,
        answers: parseAnswers(input.answers),
        weights: parseWeights(input.weights),
        matchSlugs: parseSlugs(input.matchSlugs),
        referralCode,
      };
    },
  )
  .handler(async ({ data }): Promise<SaveWeeklyLeadResult> => {
    if (data.error) return { id: null, sendOn: null, pioneer: "none", remaining: PIONEER_LIMIT, error: data.error };
    const row: WeeklyLead = {
      id: crypto.randomUUID(),
      email: data.email,
      answers: data.answers,
      weights: data.weights,
      matchSlugs: data.matchSlugs,
      referralCode: data.referralCode,
      sendOn: nextWeeklySendOn(),
      createdAt: new Date().toISOString(),
    };
    try {
      const { insertLeadRow } = await import("./weekly-leads-store.server");
      await insertLeadRow(row);
    } catch {
      return { id: null, sendOn: null, pioneer: "none", remaining: PIONEER_LIMIT, error: "Could not save that email. Try again." };
    }
    let pioneer: PioneerStatus = "none";
    let remaining = PIONEER_LIMIT;
    if (isPioneerCode(data.referralCode)) {
      const { claimPioneer } = await import("./pioneer-store.server");
      const claimed = await claimPioneer(data.email);
      pioneer = claimed.status === "none" ? (claimed.eligible ? "claimed" : "full") : claimed.status;
      remaining = claimed.remaining;
    }
    return { id: row.id, sendOn: row.sendOn, pioneer, remaining, error: null };
  });

export const listWeeklyLeads = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => {
    const email = typeof input?.email === "string" ? input.email : "";
    return { email };
  })
  .handler(async ({ data }): Promise<ListWeeklyLeadsResult> => {
    if (!isPlusAdminEmail(data.email)) return { ok: false, error: "Not this address." };
    const { listLeadRows } = await import("./weekly-leads-store.server");
    const rows = (await listLeadRows()).map(sanitizeLead).filter((row): row is WeeklyLead => Boolean(row));
    return { ok: true, rows };
  });
