import { kmBetween } from "../data/geo";

export type LatLng = { lat: number; lng: number };

export type RoadRoute = {
  km: number;
  hours: number;
  geometry: [number, number][];
};

const HOSTS = [
  "https://router.project-osrm.org",
  "https://routing.openstreetmap.de/routed-car",
];

const TIMEOUT_MS = 8000;
const MAX_SNAP_KM = 80;
const MAX_RATIO = 8;
const RATIO_MIN_GEODESIC_KM = 80;
const MAX_POINTS = 180;

const cache = new Map<string, RoadRoute | null>();

function roundKey(n: number) {
  return n.toFixed(3);
}

function cacheKey(a: LatLng, b: LatLng) {
  return `${roundKey(a.lat)},${roundKey(a.lng)}|${roundKey(b.lat)},${roundKey(b.lng)}`;
}

function snapKm(requested: LatLng, waypoint: [number, number] | undefined) {
  if (!waypoint || waypoint.length < 2) return Infinity;
  return kmBetween(requested, { lat: waypoint[1], lng: waypoint[0] });
}

function unwrap(points: [number, number][]): [number, number][] {
  if (points.length === 0) return points;
  const out: [number, number][] = [points[0]];
  for (let i = 1; i < points.length; i++) {
    let lng = points[i][1];
    const prev = out[i - 1][1];
    while (lng - prev > 180) lng -= 360;
    while (lng - prev < -180) lng += 360;
    out.push([points[i][0], lng]);
  }
  return out;
}

function downsample(points: [number, number][], max = MAX_POINTS): [number, number][] {
  if (points.length <= max) return points;
  const out: [number, number][] = [];
  const step = (points.length - 1) / (max - 1);
  for (let i = 0; i < max - 1; i++) out.push(points[Math.round(i * step)]);
  out.push(points[points.length - 1]);
  return out;
}

function reverseRoute(route: RoadRoute): RoadRoute {
  return { km: route.km, hours: route.hours, geometry: route.geometry.slice().reverse() };
}

type OsrmJson = {
  code?: string;
  routes?: Array<{
    distance: number;
    duration: number;
    geometry?: { coordinates?: [number, number][] };
  }>;
  waypoints?: Array<{ location?: [number, number] }>;
};

async function fetchOne(url: string, from: LatLng, to: LatLng, geodesic: number): Promise<RoadRoute | "reject" | "retry"> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (res.status === 429 || res.status >= 500) return "retry";
    if (!res.ok) return "retry";
    const data = (await res.json()) as OsrmJson;
    if (data?.code !== "Ok" || !data.routes?.[0]) return "retry";
    const route = data.routes[0];
    const wps = data.waypoints ?? [];
    const d0 = snapKm(from, wps[0]?.location);
    const d1 = snapKm(to, wps[wps.length - 1]?.location);
    if (d0 > MAX_SNAP_KM || d1 > MAX_SNAP_KM) return "reject";
    const km = route.distance / 1000;
    if (!(km > 0) || !Number.isFinite(km)) return "reject";
    if (geodesic > RATIO_MIN_GEODESIC_KM && km / geodesic > MAX_RATIO) return "reject";
    const coords = (route.geometry?.coordinates ?? []).map((c) => [c[1], c[0]] as [number, number]);
    if (coords.length < 2) return "reject";
    const hours = route.duration / 3600;
    return {
      km,
      hours: Number.isFinite(hours) && hours > 0 ? hours : km / 72,
      geometry: downsample(
        unwrap([[from.lat, from.lng], ...coords, [to.lat, to.lng]]),
      ),
    };
  } catch {
    return "retry";
  } finally {
    clearTimeout(timer);
  }
}

async function queryHosts(from: LatLng, to: LatLng, geodesic: number): Promise<RoadRoute | null> {
  const path = `/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=simplified&geometries=geojson&alternatives=false&steps=false`;
  for (const host of HOSTS) {
    const got = await fetchOne(host + path, from, to, geodesic);
    if (got === "retry") continue;
    if (got === "reject") return null;
    return got;
  }
  return null;
}

/** Driving route on mapped roads (tunnels and car ferries included). Null if there is no sensible road. */
export async function fetchRoadRoute(from: LatLng, to: LatLng): Promise<RoadRoute | null> {
  const key = cacheKey(from, to);
  if (cache.has(key)) return cache.get(key) ?? null;
  const geodesic = kmBetween(from, to);
  if (!Number.isFinite(geodesic) || geodesic < 0.05) {
    const short: RoadRoute = {
      km: Math.max(0, geodesic),
      hours: 0.01,
      geometry: [
        [from.lat, from.lng],
        [to.lat, to.lng],
      ],
    };
    cache.set(key, short);
    return short;
  }
  if (geodesic < 2) {
    const short: RoadRoute = {
      km: geodesic,
      hours: geodesic / 72 + 0.05,
      geometry: [
        [from.lat, from.lng],
        [to.lat, to.lng],
      ],
    };
    cache.set(key, short);
    return short;
  }
  const result = await queryHosts(from, to, geodesic);
  cache.set(key, result);
  const back = cacheKey(to, from);
  if (!cache.has(back)) cache.set(back, result ? reverseRoute(result) : null);
  return result;
}

export async function mapPool<T, R>(items: T[], limit: number, fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  async function worker() {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      out[i] = await fn(items[i], i);
    }
  }
  const n = Math.max(1, Math.min(limit, items.length));
  await Promise.all(Array.from({ length: n }, () => worker()));
  return out;
}
