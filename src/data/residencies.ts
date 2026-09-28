import { communities, type Community } from "./communities";
import { datedEvents, isUnderway, upcomingEvents, type DatedEvent } from "./events";
import { informalFor } from "./informal-agreements";
import { visitJoinFor, type Ease } from "./visit-join";
import { stayClass, isResidencyTitle } from "./stay-class";
import { isDirectoryUrl } from "./sources";
import { visitDoorsFor } from "./visit-types";

export type ResidencyListing = {
  community: Community;
  note: string;
  applyUrl: string;
  joinEase: Ease | null;
};

export function isResidencyEvent(row: DatedEvent): boolean {
  return isResidencyTitle(row);
}

export function datedResidencies(): DatedEvent[] {
  return datedEvents.filter(isResidencyEvent);
}

export function upcomingResidencies(asOf?: string): DatedEvent[] {
  return upcomingEvents(asOf).filter(
    (row) =>
      !isUnderway(row, asOf) &&
      (stayClass(row) === "residency" || (isResidencyEvent(row) && stayClass(row) !== "work-stay")),
  );
}

export function upcomingResidenciesFor(slug: string, asOf?: string): DatedEvent[] {
  return upcomingResidencies(asOf).filter((row) => row.slug === slug);
}

function residencyNote(slug: string): string {
  try {
    const trial = informalFor(slug).find((row) => row.kind === "membership-trial")?.why;
    if (trial) return trial;
  } catch {
    /* fall through */
  }
  try {
    return visitJoinFor(slug).joinProcess;
  } catch {
    return "A membership or trial-residency path is on file for this village.";
  }
}

function joinEaseFor(slug: string): Ease | null {
  try {
    return visitJoinFor(slug).join;
  } catch {
    return null;
  }
}

function listingFor(community: Community): ResidencyListing {
  return {
    community,
    note: residencyNote(community.slug),
    applyUrl: community.website,
    joinEase: joinEaseFor(community.slug),
  };
}

let cache: ResidencyListing[] | null = null;

/** Every village the atlas tags as residency: a membership-trial compact. */
export function residencyListings(): ResidencyListing[] {
  if (cache) return cache;
  cache = communities
    .filter((community) => visitDoorsFor(community.slug).includes("residency"))
    .map(listingFor)
    .sort(
      (a, b) =>
        a.community.country.localeCompare(b.community.country) ||
        a.community.name.localeCompare(b.community.name),
    );
  return cache;
}

export const residencyCount = residencyListings().length;

export function residencyFor(slug: string): ResidencyListing | undefined {
  if (!visitDoorsFor(slug).includes("residency")) return undefined;
  const community = communities.find((row) => row.slug === slug);
  if (!community) return undefined;
  return listingFor(community);
}

/** A page a stranger can use to ask about a trial stay. Only a dated programme whose own page is that stay, not the village homepage or a general calendar. */
const trialStayTitleRe =
  /experience week|community experience|introduction to|experiment gemeinschaft|kennler|kenlern|community life campus|golden autumn in community|ecovillage adventure|weekend in community|info-woch|mitarbeitswoche|visitor program/i;

const genericTrialPaths = new Set([
  "/events",
  "/event",
  "/event-calendar",
  "/events-calendar",
  "/workshops",
  "/classes-and-events",
  "/our-programmes",
  "/programs",
  "/programmes",
  "/calendar",
  "/all-events",
]);

function isSpecificTrialPage(url: string, homepage: string): boolean {
  const clean = url.trim();
  if (!clean || isDirectoryUrl(clean)) return false;
  const norm = (value: string) => value.trim().replace(/\/+$/, "").toLowerCase();
  if (homepage && norm(clean) === norm(homepage)) return false;
  try {
    const path = new URL(clean).pathname.replace(/\/+$/, "").toLowerCase();
    if (!path || genericTrialPaths.has(path)) return false;
  } catch {
    return false;
  }
  return true;
}

/** Published trial stays whose own page is the stay, not the village homepage. */
const standingTrialStayPages: Record<string, string> = {
  "twin-oaks": "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program",
  "east-wind": "https://www.eastwind.org/visiting-eastwind",
  sandhill: "https://sandhillfarm.org/internships-visiting/",
  "lost-valley": "https://www.lostvalley.org/community-experience-week",
  findhorn: "https://findhorn-foundation.secure.retreat.guru/experience-week-from-i-to-we-dec",
  damanhur: "https://damanhur.org/community-life-campus/",
  tamera: "https://www.tamera.org/learn/introduction-to-tamera/",
  "sieben-linden": "https://siebenlinden.org/de/uns-kennenlernen/zuzug-ins-dorf/",
  tempelhof: "https://www.schloss-tempelhof.de/gemeinschaft/zukunftswerkstatt-lernort-gemeinschaft/kennenlernen/",
  "tui-community": "https://www.tuitrust.org.nz/visit-us",
};

export function trialStayUrl(slug: string): string | undefined {
  const standing = standingTrialStayPages[slug];
  if (standing) return standing;
  const homepage = communities.find((row) => row.slug === slug)?.website ?? "";
  const dated = upcomingResidenciesFor(slug).find((row) => {
    const blob = `${row.title} ${row.blurb ?? ""}`;
    return trialStayTitleRe.test(blob) && isSpecificTrialPage(row.url, homepage);
  });
  return dated?.url.trim() || undefined;
}

export function datedResidenciesFor(slug: string): DatedEvent[] {
  return datedResidencies()
    .filter((row) => row.slug === slug)
    .sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));
}

const datedSlugSet = new Set(datedResidencies().map((row) => row.slug));
export const datedResidencyVillageCount = datedSlugSet.size;
