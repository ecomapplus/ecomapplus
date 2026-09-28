import { getCommunity } from "./communities";
import { upcomingEvents, type DatedEvent } from "./events";
import { isResidencyEvent } from "./residencies";

const NORTH_AMERICA = new Set([
  "United States",
  "Canada",
  "Mexico",
  "Belize",
  "Guatemala",
  "El Salvador",
  "Nicaragua",
  "Costa Rica",
  "Panama",
]);

const extraTitle =
  /visitor period|visitor program|kennlernt?|saisonier|einführungs-wochenende|experience week|adventure weekend/i;

type Price = { label: string; usd: number | null };

/** Published low price, in USD, used only for sorting. Null sorts last. */
const prices: Record<string, Price> = {
  "twin-oaks|Three-week visitor program": { label: "$50–$250", usd: 50 },
  "dancing-rabbit|Visitor Program": { label: "$497–$1,097", usd: 497 },
  "dancing-rabbit|Ecovillage Adventure Weekend": { label: "$297 adult, $75 child", usd: 297 },
  "findhorn|Experience Week: From I to We": { label: "Not published", usd: null },
  "damanhur|New Life 2.0": { label: "€1,200 plus €600–€800 room and board", usd: 1320 },
  "damanhur|Community Life Campus": { label: "€700, food and lodging extra", usd: 770 },
  "tamera|Community Service (4th arc)": { label: "€20 a night + €150 registration", usd: 22 },
  "tamera|Introduction to Tamera": { label: "€730–€1,180", usd: 803 },
  "tamera|Golden Autumn in Community": { label: "€390–€560", usd: 429 },
  "sieben-linden|Mitarbeitswoche: Ökodorfgelände gestalten": { label: "Not published", usd: null },
  "sieben-linden|Info-Woche und Urlaub": { label: "Not published", usd: null },
  "sieben-linden|Info-Wochenende": { label: "Not published", usd: null },
  "lost-valley|Community Experience Week": { label: "$609–$800", usd: 609 },
  "plum-village|90-Day Rains Retreat": { label: "From €326 a week", usd: 359 },
  "arcosanti|Land Stewardship & Sustainable Technology Workshop": {
    label: "$1,550 (2025; 2026 page is down)",
    usd: 1550,
  },
  "mount-madonna|A Weekend in Community": { label: "$105 day visit", usd: 105 },
  "east-wind|Three-week visitor period": { label: "No stay fee", usd: 0 },
  "moora-moora|Visitor day": { label: "No fee listed", usd: 0 },
  "svanholm|Besøgsdag — visitor day": { label: "No fee published", usd: 0 },
  "svanholm|Sunday tour of the collective": { label: "130 kr", usd: 20 },
  "ecovillage-ithaca|Free public tour": { label: "Free", usd: 0 },
  "aardehuis|Open tour": { label: "Free", usd: 0 },
  "cite-ecologique|Guided visit": { label: "$25 adult, $15 ages 10–18", usd: 18 },
  "los-portales|Open Saturday": { label: "€15 adult, €5 child", usd: 17 },
  "zegg|Sunday grounds tour": { label: "Donation", usd: 0 },
  "zegg|Experiment Gemeinschaft — Kennlern weekend": {
    label: "€90–€160 plus €132–€152 lodging",
    usd: 244,
  },
  "zegg|Saisonier month": { label: "From €855 for September", usd: 941 },
  "tamera|Open Afternoon": { label: "Donation", usd: 0 },
  "sieben-linden|Garten-Mitarbeitswoche": { label: "Not published", usd: null },
  "sieben-linden|Waldmitarbeitswoche": { label: "Not published", usd: null },
  "cloughjordan|Monthly guided tour": { label: "Suggested donation €5", usd: 6 },
  "white-oak-pastures|Saturday Bluffton Walking Tour": { label: "$15", usd: 15 },
};

export type VisitRegion = "all" | "usa" | "north-america";

export type VisitorProgram = {
  slug: string;
  name: string;
  country: string;
  title: string;
  start: string;
  end?: string;
  days: number;
  url: string;
  priceLabel: string;
  priceUsd: number | null;
};

export function isVisitorProgram(row: DatedEvent): boolean {
  if (!row.end || row.end <= row.start) return false;
  return isResidencyEvent(row) || extraTitle.test(`${row.title} ${row.blurb ?? ""}`);
}

export function stayDays(start: string, end?: string): number {
  const a = Date.parse(`${start}T00:00:00Z`);
  const b = Date.parse(`${(end ?? start)}T00:00:00Z`);
  return Math.round((b - a) / 86_400_000) + 1;
}

export function inVisitRegion(country: string, region: VisitRegion): boolean {
  if (region === "all") return true;
  if (region === "usa") return country === "United States";
  return NORTH_AMERICA.has(country);
}

function priceFor(slug: string, title: string): Price {
  return prices[`${slug}|${title}`] ?? { label: "Not published", usd: null };
}

export function visitorPrograms(asOf?: string): VisitorProgram[] {
  return upcomingEvents(asOf).flatMap((row) => {
    if (!isVisitorProgram(row)) return [];
    const community = getCommunity(row.slug);
    if (!community) return [];
    const price = priceFor(row.slug, row.title);
    return [
      {
        slug: row.slug,
        name: community.name,
        country: community.country,
        title: row.title,
        start: row.start,
        end: row.end,
        days: stayDays(row.start, row.end),
        url: row.url,
        priceLabel: price.label,
        priceUsd: price.usd,
      },
    ];
  });
}
