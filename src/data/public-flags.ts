import { eventKindLabel, upcomingEventsFor } from "./events";
import { isGlampingListing } from "./glamping";
import { stayClass } from "./stay-class";
import { hasOpenVisitDoor, visitDoorsFor } from "./visit-types";

export type PublicFlag = "work-stay" | "event" | "overnight" | "residency";

export type PublicChip = {
  id: string;
  flag: PublicFlag;
  label: string;
};

export const publicFlagLabel: Record<PublicFlag, string> = {
  "work-stay": "Work-stay",
  event: "Event coming up",
  overnight: "Overnight",
  residency: "Residency",
};

export const publicFlagOrder: PublicFlag[] = ["work-stay", "event", "overnight", "residency"];

/**
 * Four public arrival doors. Event means a dated programme still ahead.
 * A course-host tag is not an event.
 */
export function publicChipsFor(slug: string): PublicChip[] {
  const doors = visitDoorsFor(slug);
  const chips: PublicChip[] = [];

  if (doors.includes("work-stay")) {
    chips.push({ id: "work-stay", flag: "work-stay", label: publicFlagLabel["work-stay"] });
  }

  const upcoming = upcomingEventsFor(slug);
  const asEvents = upcoming.filter((row) => stayClass(row) === "event");
  const kinds = [
    ...new Set(asEvents.map((row) => row.kind).filter((kind): kind is NonNullable<typeof kind> => Boolean(kind))),
  ];
  if (kinds.length > 0) {
    for (const kind of kinds) {
      chips.push({ id: `event:${kind}`, flag: "event", label: eventKindLabel[kind] });
    }
  } else if (asEvents.length > 0) {
    chips.push({
      id: "event",
      flag: "event",
      label: publicFlagLabel.event,
    });
  }

  if (doors.includes("overnight")) {
    chips.push({ id: "overnight", flag: "overnight", label: publicFlagLabel.overnight });
  }
  if (doors.includes("residency") || upcoming.some((row) => stayClass(row) === "residency")) {
    chips.push({ id: "residency", flag: "residency", label: publicFlagLabel.residency });
  }
  if (!doors.includes("work-stay") && upcoming.some((row) => stayClass(row) === "work-stay")) {
    chips.push({ id: "work-stay-dated", flag: "work-stay", label: publicFlagLabel["work-stay"] });
  }

  return chips;
}

/** The four public doors: work-stay, a dated or hosted event, overnight, residency. */
export function publicFlagsFor(slug: string): PublicFlag[] {
  const seen = new Set(publicChipsFor(slug).map((chip) => chip.flag));
  return publicFlagOrder.filter((flag) => seen.has(flag));
}

/** Free map and quizzes: living villages with a public door. Glamping farms stay off. */
export function hasPublicArrival(slug: string): boolean {
  if (isGlampingListing(slug)) return false;
  if (hasOpenVisitDoor(slug)) return true;
  return upcomingEventsFor(slug).length > 0;
}
