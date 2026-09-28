import type { DatedEvent } from "./events";

/** Nights between arrival and the published end date. A same-day listing is zero. */
export function nightsOf(row: Pick<DatedEvent, "start" | "end">): number {
  if (!row.end || row.end <= row.start) return 0;
  return Math.round(
    (Date.parse(`${row.end}T00:00:00Z`) - Date.parse(`${row.start}T00:00:00Z`)) / 86_400_000,
  );
}

/** Longer than one night, and the stay is built around work. */
const WORK_STAY_KEYS = new Set([
  "east-wind|Three-week visitor period",
  "twin-oaks|Three-week visitor program",
  "tamera|Community Service (4th arc)",
  "zegg|Saisonier month",
  "sieben-linden|Mitarbeitswoche: Ökodorfgelände gestalten",
  "sieben-linden|Garten-Mitarbeitswoche",
  "sieben-linden|Waldmitarbeitswoche",
  "sieben-linden|Info-Woche und Urlaub",
  "sieben-linden|Info-Wochenende",
  "lakabe|Ate Irekiak — Puertas Abiertas",
]);

export type StayClass = "event" | "residency" | "work-stay";

function keyOf(row: Pick<DatedEvent, "slug" | "title">): string {
  return `${row.slug}|${row.title}`;
}

/**
 * A dated workshop, course, or retreat is a visit, not a residency.
 * A residency is a named live-in visitor, trial, or service programme.
 * Multi-day labour with no fee is a work-stay.
 */
const residencyTitleRe =
  /visitor program|experience week|community experience|new life|community service|community life campus|info-woche|info-wochenende|introduction to tamera|land stewardship|rains retreat|mitarbeitswoche|ecovillage adventure|weekend in community|golden autumn in community/i;

export function isResidencyTitle(row: Pick<DatedEvent, "title" | "blurb">): boolean {
  return residencyTitleRe.test(`${row.title} ${row.blurb ?? ""}`);
}

export function stayClass(row: DatedEvent): StayClass {
  if (WORK_STAY_KEYS.has(keyOf(row))) return "work-stay";
  if (row.kind === "volunteer" && nightsOf(row) > 1) return "work-stay";
  if (isResidencyTitle(row)) return "residency";
  return "event";
}

export function isCalendarEvent(row: DatedEvent): boolean {
  return stayClass(row) === "event";
}
