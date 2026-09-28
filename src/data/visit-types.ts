import { hasBookableStay } from "./booking-stays";
import { informalFor } from "./informal-agreements";
import { hasVolunteerProgram } from "./volunteer-programs";

/** Public doors a stranger can actually use. Grey is none of these. */
export type VisitDoor = "work-stay" | "event" | "overnight" | "residency" | "private";

export const visitDoorOrder: VisitDoor[] = ["work-stay", "event", "overnight", "residency", "private"];

/** Homepage / free atlas: the four arrival doors, never the private remainder. */
export const publicVisitDoorOrder: VisitDoor[] = ["work-stay", "event", "overnight", "residency"];

export const visitDoorLabel: Record<VisitDoor, string> = {
  "work-stay": "Work-stay",
  event: "Event",
  overnight: "Overnight",
  residency: "Residency",
  private: "Relatively private",
};

/** CSS color tokens — no forest green. */
export const visitDoorColor: Record<VisitDoor, string> = {
  "work-stay": "var(--color-gold)",
  event: "var(--color-danger)",
  overnight: "var(--color-stay)",
  residency: "var(--color-residency)",
  private: "var(--color-private)",
};

const cache = new Map<string, VisitDoor[]>();

/** No public door a stranger can use. A hidden directory, a paused programme, or “houses are private” does not count. */
const NO_PUBLIC_CONTACT = new Set([
  "the-vale",
  "sekkan",
  "meltemi",
  "tiberkul",
  "tateikie",
  "qiandao",
  "muir-commons",
  "tuggelite",
  "tuntable-falls",
  "fryers-forest",
  "ndanifor",
  "gaviotas",
  "kitezh",
  "orion",
  "belfast-cohousing",
  "bellingham",
  "comunidad-del-sur",
  "hjortshoj",
  "kersentuin",
  "la-borda",
  "landmatters",
  "miccosukee",
  "nevo-ecoville",
  "new-ground",
  "numero-zero",
  "nyland",
  "overdrevet",
  "puget-ridge",
  "spreefeld",
  "tierra-nueva",
  "villa-locomuna",
  "windsong",
]);

function compactKinds(slug: string): Set<string> {
  try {
    return new Set(informalFor(slug).map((row) => row.kind));
  } catch {
    return new Set();
  }
}

/** Work-stay, overnight, and residency if present; otherwise relatively private. Events come from dated programmes, not a course-host tag. */
export function visitDoorsFor(slug: string): VisitDoor[] {
  const hit = cache.get(slug);
  if (hit) return hit;
  if (NO_PUBLIC_CONTACT.has(slug)) {
    const hidden: VisitDoor[] = ["private"];
    cache.set(slug, hidden);
    return hidden;
  }
  const kinds = compactKinds(slug);
  const doors: VisitDoor[] = [];
  if (hasVolunteerProgram(slug) || kinds.has("volunteer-intern")) doors.push("work-stay");
  if (hasBookableStay(slug)) doors.push("overnight");
  if (kinds.has("membership-trial")) doors.push("residency");
  const result = doors.length ? doors : (["private"] as VisitDoor[]);
  cache.set(slug, result);
  return result;
}

export function hasOpenVisitDoor(slug: string): boolean {
  return visitDoorsFor(slug).some((door) => door !== "private");
}

export function conicForDoors(doors: VisitDoor[]): string {
  const counts = new Map<VisitDoor, number>();
  for (const door of doors) counts.set(door, (counts.get(door) ?? 0) + 1);
  const present = visitDoorOrder.filter((door) => (counts.get(door) ?? 0) > 0);
  const total = doors.length || 1;
  let acc = 0;
  const parts: string[] = [];
  for (const door of present) {
    const n = counts.get(door) ?? 0;
    const from = (acc / total) * 100;
    acc += n;
    const to = (acc / total) * 100;
    parts.push(`${visitDoorColor[door]} ${from.toFixed(2)}% ${to.toFixed(2)}%`);
  }
  return `conic-gradient(${parts.join(", ")})`;
}
