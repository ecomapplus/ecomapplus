import { getCommunity, villageRef } from "@/data/communities";
import type { TravelLeg, TravelPlan, TravelStop } from "@/data/travel-plan";

export type SavedPlanCard = {
  id: number;
  title: string;
  villageCount: number;
  roundTrip: boolean;
  stopNames: string[];
  thumbSlugs: string[];
  totalKm: number;
  totalHours: number;
  createdAt: string;
};

export type SavedPlanDetail = SavedPlanCard & { plan: TravelPlan };

const MAX_TITLE = 80;
export const MAX_PLAN_JSON = 400_000;
export const MAX_SAVED_PLANS = 40;

function villageStops(plan: TravelPlan) {
  return plan.stops.filter((stop) => stop.kind === "village" || Boolean(stop.slug));
}

export function defaultSavedPlanTitle(plan: TravelPlan) {
  const villages = villageStops(plan);
  const first = villages[0]?.name ?? plan.stops[0]?.name ?? "Eco-communities";
  const last = villages[villages.length - 1]?.name ?? plan.stops[plan.stops.length - 1]?.name;
  const span = last && last !== first ? `${first} to ${last}` : first;
  return `${plan.roundTrip ? "Loop" : "Route"} · ${span}`.slice(0, MAX_TITLE);
}

export function assertSavedPlanTitle(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name the plan");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name needs at least two characters");
  if (trimmed.length > MAX_TITLE) throw new Error(`Keep the name under ${MAX_TITLE} characters`);
  return trimmed;
}

export function assertSavedPlanId(id: unknown): number {
  const n = typeof id === "number" ? id : typeof id === "string" ? Number(id) : NaN;
  if (!Number.isInteger(n) || n < 1) throw new Error("Unknown saved plan");
  return n;
}

function parseStop(raw: unknown): TravelStop | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const lat = Number(row.lat);
  const lng = Number(row.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  const name = typeof row.name === "string" ? row.name.trim() : "";
  if (!name) return null;
  const kind = row.kind === "start" ? "start" : row.kind === "end" ? "end" : "village";
  const slug = typeof row.slug === "string" && villageRef(row.slug) ? row.slug : undefined;
  return {
    id: typeof row.id === "string" && row.id ? row.id : `${lat.toFixed(4)}:${lng.toFixed(4)}`,
    slug,
    name,
    location: typeof row.location === "string" ? row.location : undefined,
    country: typeof row.country === "string" ? row.country : undefined,
    lat,
    lng,
    kind,
  };
}

function parseLeg(raw: unknown): TravelLeg | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const from = parseStop(row.from);
  const to = parseStop(row.to);
  if (!from || !to) return null;
  const km = Number(row.km);
  const hours = Number(row.hours);
  const mode = row.mode;
  const allowed = new Set(["walk", "bike", "bus", "car", "train", "ferry", "flight"]);
  if (typeof mode !== "string" || !allowed.has(mode)) return null;
  return {
    from,
    to,
    km: Number.isFinite(km) ? km : 0,
    hours: Number.isFinite(hours) ? hours : 0,
    mode: mode as TravelLeg["mode"],
    note: typeof row.note === "string" ? row.note : "",
    alternatives: Array.isArray(row.alternatives) ? (row.alternatives as TravelLeg["alternatives"]) : [],
  };
}

export function parseSavedTravelPlan(value: unknown): TravelPlan {
  const raw =
    typeof value === "string"
      ? (() => {
          try {
            return JSON.parse(value) as unknown;
          } catch {
            return null;
          }
        })()
      : value;
  if (!raw || typeof raw !== "object") throw new Error("Need a travel plan first");
  const row = raw as Record<string, unknown>;
  const stops = Array.isArray(row.stops) ? row.stops.map(parseStop).filter((s): s is TravelStop => Boolean(s)) : [];
  if (stops.length < 2) throw new Error("A saved plan needs at least two stops");
  const villageCount =
    typeof row.villageCount === "number" && row.villageCount > 0
      ? Math.round(row.villageCount)
      : stops.filter((s) => s.kind === "village" || s.slug).length;
  if (villageCount < 1) throw new Error("A saved plan needs at least one eco-community");
  const totalKm = Number(row.totalKm);
  const totalHours = Number(row.totalHours);
  return {
    stops,
    legs: Array.isArray(row.legs) ? row.legs.map(parseLeg).filter((leg): leg is TravelLeg => Boolean(leg)) : [],
    totalKm: Number.isFinite(totalKm) ? totalKm : 0,
    totalHours: Number.isFinite(totalHours) ? totalHours : 0,
    roundTrip: Boolean(row.roundTrip),
    villageCount,
    preferDrive: row.preferDrive !== false,
    preserveOrder: row.preserveOrder === true,
    budgetMiles: typeof row.budgetMiles === "number" && row.budgetMiles > 0 ? row.budgetMiles : undefined,
    extraMiles: typeof row.extraMiles === "number" && row.extraMiles >= 0 ? row.extraMiles : undefined,
    targetCount: typeof row.targetCount === "number" && row.targetCount > 0 ? Math.round(row.targetCount) : undefined,
    roadSnapped: false,
  };
}

export function compactTravelPlan(plan: TravelPlan): TravelPlan {
  const parsed = parseSavedTravelPlan(plan);
  return {
    ...parsed,
    legs: parsed.legs.map((leg) => ({
      from: leg.from,
      to: leg.to,
      km: leg.km,
      hours: leg.hours,
      mode: leg.mode,
      note: leg.note,
      alternatives: Array.isArray(leg.alternatives) ? leg.alternatives : [],
    })),
    roadSnapped: false,
  };
}

export function savedPlanCard(id: number, title: string, createdAt: string, plan: TravelPlan): SavedPlanCard {
  const villages = villageStops(plan);
  const thumbSlugs = villages
    .map((stop) => stop.slug)
    .filter((slug): slug is string => Boolean(slug && getCommunity(slug)))
    .slice(0, 3);
  return {
    id,
    title,
    villageCount: plan.villageCount,
    roundTrip: plan.roundTrip,
    stopNames: plan.stops.map((stop) => stop.name).slice(0, 8),
    thumbSlugs,
    totalKm: plan.totalKm,
    totalHours: plan.totalHours,
    createdAt,
  };
}

export const SAVED_PLANS_CHANGED = "vc:saved-plans-changed";

export function emitSavedPlansChanged(detail?: { id?: number; action?: "save" | "delete" }) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SAVED_PLANS_CHANGED, { detail }));
}
