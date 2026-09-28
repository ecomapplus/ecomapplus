import { getCommunity } from "./communities";
import { compareCountries } from "@/lib/country-scope";
import { coordsFor } from "./coordinates";
import { isCalendarEvent } from "./stay-class";
import {
  eventKindLabel,
  formatEventWhen,
  upcomingEvents,
  type DatedEvent,
  type EventKind,
} from "./events";
import { formatDistance, geocodePlaces, kmBetween, kmToMiles, localPlaceHits, type PlaceHit } from "./geo";
import { driveableByCar, type TravelStop } from "./travel-plan";

export type TourOrigin = {
  label: string;
  lat: number;
  lng: number;
};

export type TourEvent = {
  id: string;
  slug: string;
  title: string;
  start: string;
  end: string;
  kind: EventKind;
  url: string;
  blurb?: string;
  name: string;
  place: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  days: number;
};

export type TourStopEvent = {
  title: string;
  kind: EventKind;
  kindLabel: string;
  start: string;
  end: string;
  when: string;
  url: string;
  blurb?: string;
};

export type TourStop = {
  slug: string;
  name: string;
  place: string;
  country: string;
  lat: number;
  lng: number;
  arrive: string;
  depart: string;
  milesFromPrev: number;
  events: TourStopEvent[];
};

export type EventTour = {
  origin: TourOrigin | null;
  after: string;
  before: string;
  days: number;
  eventCount: number;
  villageCount: number;
  totalMiles: number;
  totalKm: number;
  milesLabel: string;
  cluster: string;
  stops: TourStop[];
};

export type EventTourRequest = {
  origin?: TourOrigin | null;
  originQuery?: string;
  after?: string;
  before?: string;
  maxDays?: number;
  maxStops?: number;
  country?: string;
  region?: string;
  kinds?: EventKind[];
};

const KIND_SET = new Set<EventKind>([
  "workshop",
  "course",
  "retreat",
  "tour",
  "festival",
  "open-day",
  "volunteer",
]);

export function isEventKind(value: unknown): value is EventKind {
  return typeof value === "string" && KIND_SET.has(value as EventKind);
}

function todayIso() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function clampIso(value: unknown, fallback: string): string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return fallback;
  const ms = Date.parse(`${value}T12:00:00Z`);
  if (Number.isNaN(ms)) return fallback;
  return value;
}

function addDays(iso: string, days: number): string {
  const ms = Date.parse(`${iso}T12:00:00Z`);
  const next = new Date(ms + days * 86400000);
  return next.toISOString().slice(0, 10);
}

function diffDays(from: string, to: string): number {
  return Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / 86400000);
}

function eventId(row: DatedEvent): string {
  return `${row.slug}|${row.start}|${row.title}`.toLowerCase();
}

export function eventTourCatalog(asOf = todayIso()): TourEvent[] {
  const out: TourEvent[] = [];
  for (const row of upcomingEvents(asOf)) {
    if (!isCalendarEvent(row)) continue;
    const community = getCommunity(row.slug);
    const point = coordsFor(row.slug);
    if (!community?.stillActive || !point) continue;
    const end = row.end && row.end >= row.start ? row.end : row.start;
    const days = Math.max(1, diffDays(row.start, end) + 1);
    out.push({
      id: eventId(row),
      slug: community.slug,
      title: row.title,
      start: row.start,
      end,
      kind: row.kind ?? "workshop",
      url: row.url,
      blurb: row.blurb,
      name: community.name,
      place: community.location,
      country: community.country,
      region: community.region,
      lat: point.lat,
      lng: point.lng,
      days,
    });
  }
  return out;
}

export function clusterLabel(lat: number, lng: number, country: string): string {
  if (country === "United States" || country === "Canada" || country === "Mexico") {
    if (lng <= -115) return "Pacific coast";
    if (lng <= -102) return "Interior West";
    if (lng <= -84) return "Central North America";
    return "Eastern North America";
  }
  if (
    country === "United Kingdom" ||
    country === "Ireland" ||
    country === "France" ||
    country === "Portugal" ||
    country === "Spain"
  ) {
    return "Atlantic Europe";
  }
  if (
    country === "Germany" ||
    country === "Denmark" ||
    country === "Netherlands" ||
    country === "Switzerland" ||
    country === "Austria" ||
    country === "Belgium"
  ) {
    return "Central Europe";
  }
  if (country === "Italy" || country === "Croatia") return "Southern Europe";
  if (country === "Estonia" || country === "Finland" || country === "Sweden" || country === "Norway") {
    return "Northern Europe";
  }
  return country;
}

function travelDaysForKm(km: number): number {
  if (km <= 420) return 0;
  if (km <= 1300) return 1;
  return 2;
}

function canReach(
  from: { lat: number; lng: number } | null,
  freeOn: string,
  next: TourEvent,
): boolean {
  if (!from) return next.start >= freeOn;
  const km = kmBetween(from, next);
  const ready = addDays(freeOn, travelDaysForKm(km));
  return next.start >= ready;
}

function nearbyFutureCount(anchor: TourEvent, pool: TourEvent[], used: Set<string>): number {
  let n = 0;
  for (const row of pool) {
    if (used.has(row.id) || row.id === anchor.id) continue;
    if (row.start < anchor.end) continue;
    if (kmBetween(anchor, row) <= 280) n += 1;
  }
  return n;
}

function pickNext(
  from: { lat: number; lng: number } | null,
  freeOn: string,
  pool: TourEvent[],
  used: Set<string>,
): TourEvent | null {
  const open = pool.filter((row) => !used.has(row.id) && canReach(from, freeOn, row));
  if (open.length === 0) return null;
  const earliest = open.reduce((min, row) => (row.start < min ? row.start : min), open[0].start);
  const wave = open.filter((row) => diffDays(earliest, row.start) <= 6);
  let best = wave[0];
  let bestScore = -Infinity;
  for (const row of wave) {
    const km = from ? kmBetween(from, row) : 0;
    const density = nearbyFutureCount(row, pool, used);
    const sameVillage = from && km <= 4 ? 160 : 0;
    const shortBonus = row.days <= 2 ? 140 : row.days <= 4 ? 40 : -55 * row.days;
    const blocked = pool.filter(
      (event) =>
        !used.has(event.id) &&
        event.id !== row.id &&
        event.start >= row.start &&
        event.start < row.end &&
        kmBetween(row, event) <= 500,
    ).length;
    const farPenalty = km > 1800 ? kmToMiles(km) * 2 : kmToMiles(km);
    const score = density * 140 + sameVillage + shortBonus - farPenalty - blocked * 260;
    if (score > bestScore) {
      bestScore = score;
      best = row;
    }
  }
  return best;
}

function sameDaySameVillage(a: TourEvent, b: TourEvent): boolean {
  return a.slug === b.slug && a.start === b.start;
}

function toStopEvent(row: TourEvent): TourStopEvent {
  return {
    title: row.title,
    kind: row.kind,
    kindLabel: eventKindLabel[row.kind],
    start: row.start,
    end: row.end,
    when: formatEventWhen(row.start, row.end === row.start ? undefined : row.end),
    url: row.url,
    blurb: row.blurb,
  };
}

function packTour(
  pool: TourEvent[],
  origin: TourOrigin | null,
  maxStops: number,
  leaveOn: string,
): TourStop[] {
  if (pool.length === 0 || maxStops < 1) return [];
  const used = new Set<string>();
  const stops: TourStop[] = [];
  let from: { lat: number; lng: number } | null = origin;
  let freeOn = leaveOn;

  while (stops.length < maxStops) {
    const next = pickNext(from, freeOn, pool, used);
    if (!next) break;
    const extras = pool.filter(
      (row) => !used.has(row.id) && row.id !== next.id && sameDaySameVillage(row, next),
    );
    const bunch = [next, ...extras];
    for (const row of bunch) used.add(row.id);
    const km = from ? kmBetween(from, next) : 0;
    const depart = bunch.reduce((max, row) => (row.end > max ? row.end : max), next.end);
    stops.push({
      slug: next.slug,
      name: next.name,
      place: next.place,
      country: next.country,
      lat: next.lat,
      lng: next.lng,
      arrive: next.start,
      depart,
      milesFromPrev: Math.round(kmToMiles(km)),
      events: bunch.sort((a, b) => a.title.localeCompare(b.title)).map(toStopEvent),
    });
    from = next;
    freeOn = depart;
  }
  return coalesceStops(stops);
}

function coalesceStops(stops: TourStop[]): TourStop[] {
  const out: TourStop[] = [];
  for (const stop of stops) {
    const prev = out[out.length - 1];
    if (prev && prev.slug === stop.slug) {
      prev.depart = stop.depart > prev.depart ? stop.depart : prev.depart;
      prev.events = prev.events.concat(stop.events);
      continue;
    }
    out.push({ ...stop, events: stop.events.slice() });
  }
  return out;
}

function tourFromStops(
  stops: TourStop[],
  origin: TourOrigin | null,
  after: string,
  before: string,
  cluster: string,
): EventTour | null {
  if (stops.length === 0) return null;
  const eventCount = stops.reduce((sum, stop) => sum + stop.events.length, 0);
  const villageCount = new Set(stops.map((stop) => stop.slug)).size;
  const totalMiles = stops.reduce((sum, stop) => sum + stop.milesFromPrev, 0);
  const homeMiles =
    origin && stops.length > 0 ? Math.round(kmToMiles(kmBetween(origin, stops[stops.length - 1]))) : 0;
  const days = Math.max(1, diffDays(stops[0].arrive, stops[stops.length - 1].depart) + 1);
  const totalKm = totalMiles * 1.609344;
  return {
    origin,
    after,
    before,
    days,
    eventCount,
    villageCount,
    totalMiles,
    totalKm,
    milesLabel: formatDistance(totalKm, "mi"),
    cluster,
    stops,
  };
}

function scoreTour(tour: EventTour): number {
  const density = tour.eventCount / Math.max(tour.days, 1);
  return (
    tour.eventCount * 80000 +
    tour.villageCount * 2500 +
    density * 4000 -
    tour.totalMiles * 8 -
    tour.days * 120
  );
}

function windowSizes(maxDays: number): number[] {
  const sizes = [maxDays];
  for (const n of [7, 10, 14, 21]) {
    if (n < maxDays) sizes.push(n);
  }
  return Array.from(new Set(sizes)).sort((a, b) => a - b);
}

function filterCatalog(rows: TourEvent[], req: EventTourRequest, after: string, before: string): TourEvent[] {
  const country = req.country?.trim().toLowerCase();
  const region = req.region?.trim().toLowerCase();
  const kinds = req.kinds?.filter(isEventKind);
  return rows.filter((row) => {
    if (row.start > before || row.end < after) return false;
    if (country && row.country.toLowerCase() !== country && !row.country.toLowerCase().includes(country)) {
      return false;
    }
    if (
      region &&
      !row.region.toLowerCase().includes(region) &&
      !clusterLabel(row.lat, row.lng, row.country).toLowerCase().includes(region)
    ) {
      return false;
    }
    if (kinds && kinds.length > 0 && !kinds.includes(row.kind)) return false;
    return true;
  });
}

function preferredPool(rows: TourEvent[]): TourEvent[] {
  const short = rows.filter((row) => row.days <= 8);
  return short.length >= 3 ? short : rows;
}

type Candidate = { rows: TourEvent[]; cluster: string };

function candidateSets(rows: TourEvent[], origin: TourOrigin | null): Candidate[] {
  const sets: Candidate[] = [];
  const seen = new Set<string>();
  function push(cluster: string, list: TourEvent[]) {
    if (list.length === 0) return;
    const key = `${cluster}:${list.map((row) => row.id).join(",")}`;
    if (seen.has(key)) return;
    seen.add(key);
    sets.push({ cluster, rows: list });
  }

  push("All matching events", rows);

  const byCluster = new Map<string, TourEvent[]>();
  const byCountry = new Map<string, TourEvent[]>();
  for (const row of rows) {
    const cluster = clusterLabel(row.lat, row.lng, row.country);
    byCluster.set(cluster, (byCluster.get(cluster) ?? []).concat(row));
    byCountry.set(row.country, (byCountry.get(row.country) ?? []).concat(row));
  }
  for (const [cluster, list] of byCluster) push(cluster, list);
  for (const [country, list] of byCountry) push(country, list);

  if (origin) {
    for (const miles of [250, 500, 900, 1600]) {
      const km = miles * 1.609344;
      const near = rows.filter((row) => kmBetween(origin, row) <= km);
      push(`Within ${miles} miles of ${origin.label}`, near);
    }
  }
  return sets;
}

export async function resolveTourOrigin(
  req: EventTourRequest,
): Promise<TourOrigin | null> {
  if (
    req.origin &&
    Number.isFinite(req.origin.lat) &&
    Number.isFinite(req.origin.lng) &&
    req.origin.label.trim()
  ) {
    return {
      label: req.origin.label.trim().slice(0, 80),
      lat: req.origin.lat,
      lng: req.origin.lng,
    };
  }
  const query = req.originQuery?.trim();
  if (!query) return null;
  const local = localPlaceHits(query, 4);
  if (local[0]) return { label: local[0].label, lat: local[0].lat, lng: local[0].lng };
  try {
    const remote = await geocodePlaces(query);
    if (remote[0]) return { label: remote[0].label, lat: remote[0].lat, lng: remote[0].lng };
  } catch {
    /* atlas-only fallback */
  }
  return null;
}

export function planEventTourSync(req: EventTourRequest, origin: TourOrigin | null): EventTour | null {
  const after = clampIso(req.after, todayIso());
  const rawBefore = clampIso(req.before, addDays(after, 120));
  const before = rawBefore < after ? addDays(after, 120) : rawBefore;
  const maxDays = Math.min(28, Math.max(3, Math.round(req.maxDays ?? 10)));
  const maxStops = Math.min(12, Math.max(2, Math.round(req.maxStops ?? 8)));
  const catalog = filterCatalog(eventTourCatalog(after), req, after, before);
  if (catalog.length === 0) return null;

  let best: EventTour | null = null;
  let bestScore = -Infinity;

  for (const candidate of candidateSets(catalog, origin)) {
    const pool = preferredPool(candidate.rows);
    const starts = Array.from(new Set(pool.map((row) => row.start))).sort();
    for (const span of windowSizes(maxDays)) {
      for (const start of starts) {
        const end = addDays(start, span - 1);
        if (end > before || start < after) continue;
        const slice = pool.filter(
          (row) => row.start >= start && row.start <= end && row.end <= addDays(end, 1),
        );
        if (slice.length < 2 && !(slice.length === 1 && origin)) continue;
        const stops = packTour(slice, origin, maxStops, start);
        const tour = tourFromStops(stops, origin, start, end > before ? before : end, candidate.cluster);
        if (!tour) continue;
        const score = scoreTour(tour);
        if (score > bestScore) {
          bestScore = score;
          best = tour;
        }
      }
    }
  }

  if (best) return best;

  const fallbackStops = packTour(preferredPool(catalog), origin, maxStops, after);
  return tourFromStops(
    fallbackStops,
    origin,
    after,
    before,
    origin ? `From ${origin.label}` : "All matching events",
  );
}

export async function planEventTour(req: EventTourRequest): Promise<EventTour | null> {
  const origin = await resolveTourOrigin(req);
  return planEventTourSync(req, origin);
}

export function compactTour(tour: EventTour) {
  return {
    cluster: tour.cluster,
    days: tour.days,
    eventCount: tour.eventCount,
    villageCount: tour.villageCount,
    miles: tour.totalMiles,
    milesLabel: tour.milesLabel,
    window: `${tour.after} to ${tour.before}`,
    origin: tour.origin?.label ?? null,
    stops: tour.stops.map((stop) => ({
      date: stop.arrive,
      until: stop.depart,
      village: stop.name,
      slug: stop.slug,
      place: stop.place,
      milesFromPrev: stop.milesFromPrev,
      events: stop.events.map((event) => `${event.kindLabel}: ${event.title} (${event.when})`),
    })),
  };
}

export function suggestPlaces(query: string): PlaceHit[] {
  return localPlaceHits(query, 6);
}

export const EVENT_TOUR_COUNTRIES = Array.from(
  new Set(eventTourCatalog().map((row) => row.country)),
).sort(compareCountries);

/** Straight-line miles, inflated so a road drive is unlikely to exceed the cap. */
const ROAD_FACTOR = 1.3;
export const EVENT_DRIVE_MILES_PER_DAY = 300;

export type EventDriveStop = {
  slug: string;
  name: string;
  place: string;
  country: string;
  lat: number;
  lng: number;
  arrive: string;
  depart: string;
  milesFromPrev: number;
  events: TourStopEvent[];
};

export type EventDrivePlan = {
  origin: TourOrigin;
  startDate: string;
  eventCount: number;
  stops: EventDriveStop[];
};

function asStop(point: { lat: number; lng: number; country?: string; name?: string }): TravelStop {
  return {
    id: "hop",
    name: point.name ?? "Stop",
    country: point.country,
    lat: point.lat,
    lng: point.lng,
    kind: "village",
  };
}

function roadMiles(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  return kmToMiles(kmBetween(a, b)) * ROAD_FACTOR;
}

function canDriveToEvent(
  from: { lat: number; lng: number; country?: string; name?: string },
  freeOn: string,
  next: TourEvent,
  firstHop: boolean,
): boolean {
  if (!driveableByCar(asStop(from), asStop(next))) return false;
  const days = firstHop ? Math.max(1, diffDays(freeOn, next.start)) : diffDays(freeOn, next.start);
  if (days < 1) return false;
  return roadMiles(from, next) <= days * EVENT_DRIVE_MILES_PER_DAY;
}

function visitBunch(anchor: TourEvent, pool: TourEvent[]): TourEvent[] {
  const rows = pool.filter(
    (row) => row.slug === anchor.slug && row.start <= anchor.end && row.end >= anchor.start,
  );
  return rows.length > 0 ? rows : [anchor];
}

type DriveState = {
  lat: number;
  lng: number;
  country?: string;
  name: string;
  freeOn: string;
  slugs: string[];
  events: TourEvent[];
  stops: EventDriveStop[];
  miles: number;
  first: boolean;
};

function extendDrive(state: DriveState, next: TourEvent, pool: TourEvent[]): DriveState {
  const bunch = visitBunch(next, pool);
  const depart = bunch.reduce((max, row) => (row.end > max ? row.end : max), next.end);
  const miles = Math.round(roadMiles(state, next));
  return {
    lat: next.lat,
    lng: next.lng,
    country: next.country,
    name: next.name,
    freeOn: depart,
    slugs: state.slugs.concat(next.slug),
    events: state.events.concat(bunch),
    stops: state.stops.concat({
      slug: next.slug,
      name: next.name,
      place: next.place,
      country: next.country,
      lat: next.lat,
      lng: next.lng,
      arrive: next.start,
      depart,
      milesFromPrev: miles,
      events: bunch.sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title)).map(toStopEvent),
    }),
    miles: state.miles + miles,
    first: false,
  };
}

/**
 * Most dated events reachable by car from a start place and date.
 * A village is visited once. Each driving day is at most 300 miles.
 */
export function planMostEventsDrive(origin: TourOrigin, startDate: string): EventDrivePlan | null {
  const after = clampIso(startDate, todayIso());
  const horizon = addDays(after, 180);
  const pool = eventTourCatalog(after).filter((row) => row.start >= after && row.start <= horizon);
  if (pool.length === 0) return null;

  let beam: DriveState[] = [
    {
      lat: origin.lat,
      lng: origin.lng,
      name: origin.label,
      freeOn: after,
      slugs: [],
      events: [],
      stops: [],
      miles: 0,
      first: true,
    },
  ];
  let best = beam[0];

  for (let step = 0; step < 24; step++) {
    const nextBeam: DriveState[] = [];
    for (const state of beam) {
      const used = new Set(state.slugs);
      const options = pool.filter(
        (row) => !used.has(row.slug) && canDriveToEvent(state, state.freeOn, row, state.first),
      );
      options.sort(
        (a, b) => a.start.localeCompare(b.start) || roadMiles(state, a) - roadMiles(state, b),
      );
      for (const row of options.slice(0, 18)) {
        const next = extendDrive(state, row, pool);
        if (next.events.length > best.events.length || (next.events.length === best.events.length && next.miles < best.miles)) {
          best = next;
        }
        nextBeam.push(next);
      }
    }
    if (nextBeam.length === 0) break;
    nextBeam.sort((a, b) => b.events.length - a.events.length || a.miles - b.miles || a.freeOn.localeCompare(b.freeOn));
    beam = nextBeam.slice(0, 28);
  }

  if (best.stops.length === 0) return null;
  return {
    origin,
    startDate: after,
    eventCount: best.events.length,
    stops: best.stops,
  };
}
