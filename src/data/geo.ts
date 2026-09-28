import { communities, searchVillages, type Community } from "./communities";
import { coordsFor } from "./coordinates";
import { publicFlagsFor, type PublicFlag } from "./public-flags";

export type DistanceUnit = "mi" | "km";

export type NearFilter = {
  label: string;
  lat: number;
  lng: number;
  radius: number;
  unit: DistanceUnit;
};

export type PlaceHit = {
  label: string;
  lat: number;
  lng: number;
  kind: "village" | "town" | "country" | "geocode";
  slug?: string;
};

export const radiusPresets = [25, 50, 100, 250, 500] as const;
export const DEFAULT_RADIUS = 100;

/** Contiguous US geographic center — default framing for every atlas map. */
export const DEFAULT_MAP_CENTER: [number, number] = [39.8283, -98.5795];
export const DEFAULT_MAP_ZOOM = 4;

const KM_PER_MI = 1.609344;

export function radiusKm(near: NearFilter): number {
  const n = Number(near.radius);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return near.unit === "km" ? n : n * KM_PER_MI;
}

export function milesToKm(miles: number): number {
  return miles * KM_PER_MI;
}

export function kmToMiles(km: number): number {
  return km / KM_PER_MI;
}

export function kmToUnit(km: number, unit: DistanceUnit): number {
  return unit === "km" ? km : km / KM_PER_MI;
}

export function formatDistance(km: number, unit: DistanceUnit): string {
  const value = kmToUnit(km, unit);
  const n = value < 10 ? Math.round(value * 10) / 10 : Math.round(value);
  return `${n.toLocaleString("en-US")} ${unit}`;
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function kmBetween(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function closestCommunity(
  here: { lat: number; lng: number },
  list: Community[] = communities,
): { community: Community; km: number } | null {
  let best: { community: Community; km: number } | null = null;
  for (const community of list) {
    if (!community.stillActive) continue;
    const point = coordsFor(community.slug);
    if (!point) continue;
    const km = kmBetween(here, point);
    if (!best || km < best.km) best = { community, km };
  }
  return best;
}

export function withinRadius(
  point: { lat: number; lng: number } | undefined,
  near: NearFilter | null | undefined,
): boolean {
  if (!near) return true;
  if (!point) return false;
  const max = radiusKm(near);
  if (max <= 0) return true;
  return kmBetween(point, near) <= max;
}

export function isNearFilter(value: unknown): value is NearFilter {
  if (!value || typeof value !== "object") return false;
  const row = value as NearFilter;
  return (
    typeof row.label === "string" &&
    row.label.trim().length > 0 &&
    Number.isFinite(row.lat) &&
    row.lat >= -90 &&
    row.lat <= 90 &&
    Number.isFinite(row.lng) &&
    row.lng >= -180 &&
    row.lng <= 180 &&
    Number.isFinite(row.radius) &&
    row.radius > 0 &&
    row.radius <= 12500 &&
    (row.unit === "mi" || row.unit === "km")
  );
}

export function geographicMidpoint(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): { lat: number; lng: number } {
  const φ1 = toRad(a.lat);
  const λ1 = toRad(a.lng);
  const φ2 = toRad(b.lat);
  const Δλ = toRad(b.lng - a.lng);
  const bx = Math.cos(φ2) * Math.cos(Δλ);
  const by = Math.cos(φ2) * Math.sin(Δλ);
  const φ3 = Math.atan2(
    Math.sin(φ1) + Math.sin(φ2),
    Math.sqrt((Math.cos(φ1) + bx) ** 2 + by * by),
  );
  const λ3 = λ1 + Math.atan2(by, Math.cos(φ1) + bx);
  const lng = ((((λ3 * 180) / Math.PI + 540) % 360) + 360) % 360 - 180;
  return { lat: (φ3 * 180) / Math.PI, lng };
}

export function communityBetween(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
  door?: PublicFlag | null,
): { community: Community; km: number; mid: { lat: number; lng: number } } | null {
  const mid = geographicMidpoint(a, b);
  const list = door ? communities.filter((community) => publicFlagsFor(community.slug).includes(door)) : communities;
  const hit = closestCommunity(mid, list);
  if (!hit) return null;
  return { ...hit, mid };
}

function centroid(points: { lat: number; lng: number }[]): { lat: number; lng: number } | null {
  if (points.length === 0) return null;
  const lat = points.reduce((sum, p) => sum + p.lat, 0) / points.length;
  const lng = points.reduce((sum, p) => sum + p.lng, 0) / points.length;
  return { lat, lng };
}

function uniqueLabel(parts: Array<string | undefined | null>): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of parts) {
    const value = part?.replace(/\s+/g, " ").trim();
    if (!value) continue;
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out.join(", ");
}

export function localPlaceHits(query: string, limit = 8): PlaceHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const hits: PlaceHit[] = [];
  const seen = new Set<string>();

  function push(hit: PlaceHit) {
    const key = `${hit.kind}:${hit.label.toLowerCase()}:${hit.lat.toFixed(3)}:${hit.lng.toFixed(3)}`;
    if (seen.has(key)) return;
    seen.add(key);
    hits.push(hit);
  }

  for (const row of searchVillages(query, limit)) {
    const point = coordsFor(row.slug);
    if (!point) continue;
    push({
      label: uniqueLabel([row.name, row.location]),
      lat: point.lat,
      lng: point.lng,
      kind: "village",
      slug: row.slug,
    });
  }

  const towns = new Map<string, { lat: number; lng: number }[]>();
  const countries = new Map<string, { lat: number; lng: number }[]>();
  for (const community of communities) {
    const point = coordsFor(community.slug);
    if (!point) continue;
    const loc = community.location.trim();
    if (loc) {
      const list = towns.get(loc) ?? [];
      list.push(point);
      towns.set(loc, list);
    }
    const country = community.country.trim();
    if (country) {
      const list = countries.get(country) ?? [];
      list.push(point);
      countries.set(country, list);
    }
  }

  for (const [name, points] of towns) {
    if (!name.toLowerCase().includes(q)) continue;
    const center = centroid(points);
    if (!center) continue;
    push({ label: name, lat: center.lat, lng: center.lng, kind: "town" });
  }
  for (const [name, points] of countries) {
    if (!name.toLowerCase().includes(q)) continue;
    const center = centroid(points);
    if (!center) continue;
    push({
      label: `${name} (atlas villages)`,
      lat: center.lat,
      lng: center.lng,
      kind: "country",
    });
  }

  return hits.slice(0, limit);
}

type PhotonFeature = {
  geometry?: { coordinates?: number[] };
  properties?: {
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    locality?: string;
    county?: string;
    state?: string;
    country?: string;
  };
};

function photonLabel(props: PhotonFeature["properties"]): string {
  if (!props) return "";
  const street = uniqueLabel([props.housenumber, props.street]);
  return uniqueLabel([props.name, street, props.city ?? props.locality, props.county, props.state, props.country]);
}

export async function geocodePlaces(query: string, signal?: AbortSignal): Promise<PlaceHit[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=5&lang=en`;
  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) return [];
  const data = (await res.json()) as { features?: PhotonFeature[] };
  const out: PlaceHit[] = [];
  for (const feature of data.features ?? []) {
    const coords = feature.geometry?.coordinates;
    if (!coords || coords.length < 2) continue;
    const lng = coords[0];
    const lat = coords[1];
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
    const label = photonLabel(feature.properties);
    if (!label) continue;
    out.push({ label, lat, lng, kind: "geocode" });
  }
  return out;
}

export async function reverseGeocode(
  lat: number,
  lng: number,
  signal?: AbortSignal,
): Promise<string | null> {
  const url = `https://photon.komoot.io/reverse?lat=${lat}&lon=${lng}`;
  try {
    const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    const data = (await res.json()) as { features?: PhotonFeature[] };
    const label = photonLabel(data.features?.[0]?.properties);
    return label || null;
  } catch {
    return null;
  }
}

export function mergePlaceHits(local: PlaceHit[], remote: PlaceHit[], limit = 8): PlaceHit[] {
  const out: PlaceHit[] = [];
  const seen = new Set<string>();
  for (const hit of [...local, ...remote]) {
    const key = `${hit.label.toLowerCase()}:${hit.lat.toFixed(2)}:${hit.lng.toFixed(2)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(hit);
    if (out.length >= limit) break;
  }
  return out;
}
