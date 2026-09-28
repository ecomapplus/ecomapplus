import { communities, getCommunity } from "./communities";
import { coordsFor } from "./coordinates";
import { formatDistance, kmBetween, kmToMiles, milesToKm, type DistanceUnit } from "./geo";
import { fetchRoadRoute, mapPool, type RoadRoute } from "../lib/road-route";

export type TransportMode = "walk" | "bike" | "bus" | "car" | "train" | "ferry" | "flight";

export type TravelStop = {
  id: string;
  slug?: string;
  name: string;
  location?: string;
  country?: string;
  lat: number;
  lng: number;
  kind: "start" | "village" | "end";
  /** Events or other detail for this stop. */
  note?: string;
};

export type ModeOption = {
  mode: TransportMode;
  hours: number;
  note: string;
};

export type TravelLeg = {
  from: TravelStop;
  to: TravelStop;
  km: number;
  mode: TransportMode;
  hours: number;
  note: string;
  alternatives: ModeOption[];
  /** Mapped-road polyline [lat, lng]. Flights stay geodesic and omit this. */
  geometry?: [number, number][];
};

export type TravelPlan = {
  stops: TravelStop[];
  legs: TravelLeg[];
  totalKm: number;
  totalHours: number;
  roundTrip: boolean;
  villageCount: number;
  preferDrive: boolean;
  budgetMiles?: number;
  /** Extra miles on top of the straight start-to-finish distance, for a packed path. */
  extraMiles?: number;
  /** How many villages the count-based shortest route was asked to include. */
  targetCount?: number;
  /** True after ground legs have been snapped to mapped roads (or dropped to ferry/flight). */
  roadSnapped?: boolean;
  /** True when the visit order is the user's, not the shortest-path solver. */
  preserveOrder?: boolean;
  /** Packed from dated events: drive only, 300 miles a day, no village twice. */
  eventDrive?: boolean;
};

export const modeLabels: Record<TransportMode, string> = {
  walk: "Walk",
  bike: "Bicycle",
  bus: "Bus",
  car: "Car",
  train: "Train",
  ferry: "Ferry",
  flight: "Flight",
};

type Landmass =
  | "na"
  | "cam"
  | "sa"
  | "britain"
  | "ireland"
  | "iceland"
  | "europe"
  | "africa"
  | "madagascar"
  | "west-asia"
  | "south-asia"
  | "se-asia"
  | "east-asia"
  | "taiwan"
  | "japan"
  | "aus"
  | "nz"
  | "other";

const COUNTRY_MASS: Record<string, Landmass> = {
  "United States": "na",
  Canada: "na",
  Mexico: "na",
  "Costa Rica": "cam",
  Belize: "cam",
  Guatemala: "cam",
  Nicaragua: "cam",
  "El Salvador": "cam",
  Colombia: "sa",
  Brazil: "sa",
  Argentina: "sa",
  Chile: "sa",
  Peru: "sa",
  Uruguay: "sa",
  Ecuador: "sa",
  "United Kingdom": "britain",
  Ireland: "ireland",
  Iceland: "iceland",
  Germany: "europe",
  France: "europe",
  Spain: "europe",
  Portugal: "europe",
  Italy: "europe",
  Hungary: "europe",
  Finland: "europe",
  Norway: "europe",
  Sweden: "europe",
  Netherlands: "europe",
  Denmark: "europe",
  Estonia: "europe",
  Croatia: "europe",
  Switzerland: "europe",
  Turkey: "europe",
  Egypt: "africa",
  Senegal: "africa",
  Benin: "africa",
  "South Africa": "africa",
  Zimbabwe: "africa",
  Zambia: "africa",
  Ethiopia: "africa",
  Kenya: "africa",
  Uganda: "africa",
  Ghana: "africa",
  Namibia: "africa",
  Cameroon: "africa",
  "Burkina Faso": "africa",
  Eswatini: "africa",
  Madagascar: "madagascar",
  Israel: "west-asia",
  India: "south-asia",
  "Sri Lanka": "south-asia",
  Thailand: "se-asia",
  Indonesia: "se-asia",
  Philippines: "se-asia",
  "South Korea": "east-asia",
  China: "east-asia",
  Taiwan: "taiwan",
  Japan: "japan",
  Australia: "aus",
  "New Zealand": "nz",
};

const RAIL: Partial<Record<Landmass, boolean>> = {
  europe: true,
  britain: true,
  japan: true,
  "east-asia": true,
  "south-asia": true,
};

const CAR_FIRST: Partial<Record<Landmass, boolean>> = {
  na: true,
  cam: true,
  sa: true,
  africa: true,
  aus: true,
  nz: true,
};

function massFor(stop: TravelStop): Landmass {
  if (stop.country && COUNTRY_MASS[stop.country]) return COUNTRY_MASS[stop.country];
  const { lat, lng } = stop;
  if (lat > 7 && lng < -50 && lng > -170) return lat < 28 && lng > -93 ? "cam" : "na";
  if (lat <= 12 && lng < -30 && lng > -90) return "sa";
  if (lat > 35 && lng > -12 && lng < 40) return "europe";
  if (lat < 38 && lng > -20 && lng < 52 && lat > -36) return "africa";
  if (lng > 110 && lat < -10) return lng > 150 ? "nz" : "aus";
  if (lng > 95) return "east-asia";
  return "other";
}

function linked(a: Landmass, b: Landmass): boolean {
  if (a === b) return true;
  const pair = new Set([a, b]);
  if (pair.has("na") && pair.has("cam")) return true;
  if (pair.has("britain") && pair.has("europe")) return true;
  if (pair.has("ireland") && pair.has("britain")) return true;
  return false;
}

function seaCrossing(a: Landmass, b: Landmass): boolean {
  if (a === b) return false;
  const pair = new Set([a, b]);
  if (pair.has("britain") && pair.has("ireland")) return true;
  if (pair.has("ireland") && pair.has("europe")) return true;
  if (pair.has("britain") && pair.has("europe")) return true;
  if (pair.has("africa") && pair.has("madagascar")) return true;
  if (pair.has("taiwan") && pair.has("east-asia")) return true;
  if (pair.has("taiwan") && pair.has("japan")) return true;
  return false;
}

function hoursFor(mode: TransportMode, km: number): number {
  switch (mode) {
    case "walk":
      return km / 4.6;
    case "bike":
      return km / 16;
    case "bus":
      return km / 48 + 0.45;
    case "car":
      return km / 72 + 0.25;
    case "train":
      return km / 108 + 0.6;
    case "ferry":
      return km / 32 + 1.1;
    case "flight":
      return km / 800 + 3;
  }
}

function modeNote(mode: TransportMode, from: TravelStop, to: TravelStop, km: number): string {
  const a = from.country ?? from.name;
  const b = to.country ?? to.name;
  switch (mode) {
    case "walk":
      return "On foot between neighbouring sites.";
    case "bike":
      return "A short ride. Local buses also cover this stretch.";
    case "bus":
      return `Regional bus or coach, ${a} to ${b}.`;
    case "car":
      return "Drive. Follows mapped roads, including tunnels and car ferries.";
    case "train":
      if (massFor(from) === "britain" && massFor(to) === "europe") {
        return "Train through the Channel Tunnel, then onward rail.";
      }
      if (massFor(from) === "europe" && massFor(to) === "britain") {
        return "Onward rail, then the Channel Tunnel into Britain.";
      }
      return `Train. ${Math.round(km)} km on the rails.`;
    case "ferry":
      return `Ferry crossing, then local transport on the other side.`;
    case "flight":
      return `Flight, ${a} to ${b}. The shortest path over the ground.`;
  }
}

function allowedModes(from: TravelStop, to: TravelStop, km: number, preferDrive: boolean): TransportMode[] {
  const a = massFor(from);
  const b = massFor(to);
  const land = linked(a, b);
  const sea = seaCrossing(a, b);
  const out: TransportMode[] = [];
  if (land && km <= 6) out.push("walk");
  if (land && km <= 40) out.push("bike");
  if (land && km <= 220) out.push("bus");
  if (land && (preferDrive || km <= 1100)) out.push("car");
  if (land && (RAIL[a] || RAIL[b]) && km >= 20 && km <= 1400) out.push("train");
  if (sea && km <= 400) out.push("ferry");
  if (km >= 80) out.push("flight");
  if (out.length === 0) out.push(land ? "car" : "flight");
  return out;
}

function pickMode(from: TravelStop, to: TravelStop, km: number, preferDrive: boolean): TransportMode {
  const a = massFor(from);
  const b = massFor(to);
  const land = linked(a, b);
  const sea = seaCrossing(a, b);
  const rail = Boolean(RAIL[a] && RAIL[b]) || (RAIL[a] && land) || (RAIL[b] && land);

  if (preferDrive) {
    if (land) return "car";
    if (sea && km <= 280) return "ferry";
    return "flight";
  }

  if (km <= 2.5 && land) return "walk";
  if (km <= 12 && land) return "bike";
  if (!land && sea && km <= 280) return "ferry";
  if (!land) return "flight";
  if (km <= 28) return rail && km >= 18 ? "train" : CAR_FIRST[a] ? "car" : "bus";
  if (km <= 80) return CAR_FIRST[a] ? "car" : rail ? "train" : "bus";
  if (km <= 480) return rail ? "train" : "car";
  if (km <= 900) return rail ? "train" : "flight";
  return "flight";
}

export function driveableByCar(from: TravelStop, to: TravelStop): boolean {
  return pickMode(from, to, kmBetween(from, to), true) === "car";
}

export function describeLeg(from: TravelStop, to: TravelStop, preferDrive = true): TravelLeg {
  const km = kmBetween(from, to);
  const mode = pickMode(from, to, km, preferDrive);
  const allowed = allowedModes(from, to, km, preferDrive);
  const alternatives: ModeOption[] = allowed
    .filter((item) => item !== mode)
    .map((item) => ({
      mode: item,
      hours: hoursFor(item, km),
      note: modeNote(item, from, to, km),
    }))
    .sort((x, y) => x.hours - y.hours)
    .slice(0, 2);
  return {
    from,
    to,
    km,
    mode,
    hours: hoursFor(mode, km),
    note: modeNote(mode, from, to, km),
    alternatives,
  };
}

function pathLen(order: number[], dist: number[][], roundTrip: boolean): number {
  let sum = 0;
  for (let i = 1; i < order.length; i++) sum += dist[order[i - 1]][order[i]];
  if (roundTrip && order.length > 1) sum += dist[order[order.length - 1]][order[0]];
  return sum;
}

function nearestNeighbor(dist: number[][], start: number, lockEnd: boolean): number[] {
  const n = dist.length;
  if (n === 0) return [];
  if (lockEnd && n > 1 && start === n - 1) start = 0;
  const used = new Array<boolean>(n).fill(false);
  const order = [start];
  used[start] = true;
  if (lockEnd && n > 1) used[n - 1] = true;
  const target = lockEnd && n > 1 ? n - 1 : n;
  while (order.length < target) {
    const last = order[order.length - 1];
    let best = -1;
    let bestD = Infinity;
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (dist[last][i] < bestD) {
        bestD = dist[last][i];
        best = i;
      }
    }
    if (best < 0) break;
    used[best] = true;
    order.push(best);
  }
  if (lockEnd && n > 1) order.push(n - 1);
  return order;
}

function twoOpt(order: number[], dist: number[][], lockStart: boolean, lockEnd: boolean, roundTrip: boolean): number[] {
  const n = order.length;
  if (n < 4) return order;
  const first = lockStart ? 1 : 0;
  const lastK = lockEnd ? n - 2 : n - 1;
  let best = order.slice();
  let improved = true;
  let guard = 0;
  while (improved && guard++ < 80) {
    improved = false;
    for (let i = first; i < lastK; i++) {
      const a = i === 0 ? (roundTrip ? best[n - 1] : -1) : best[i - 1];
      const b = best[i];
      for (let k = i + 1; k <= lastK; k++) {
        const c = best[k];
        const d = k === n - 1 ? (roundTrip ? best[0] : -1) : best[k + 1];
        const before = (a < 0 ? 0 : dist[a][b]) + (d < 0 ? 0 : dist[c][d]);
        const after = (a < 0 ? 0 : dist[a][c]) + (d < 0 ? 0 : dist[b][d]);
        if (after + 1e-9 < before) {
          const mid = best.slice(i, k + 1).reverse();
          best = best.slice(0, i).concat(mid, best.slice(k + 1));
          improved = true;
          break;
        }
      }
      if (improved) break;
    }
  }
  return best;
}

function relocate(order: number[], dist: number[][], lockStart: boolean, lockEnd: boolean, roundTrip: boolean): number[] {
  const n = order.length;
  if (n < 4 || n > 48) return order;
  const first = lockStart ? 1 : 0;
  const lastI = lockEnd ? n - 1 : n;
  const lastJ = lockEnd ? n - 1 : n;
  let best = order.slice();
  let bestLen = pathLen(best, dist, roundTrip);
  let improved = true;
  let guard = 0;
  while (improved && guard++ < 20) {
    improved = false;
    for (let i = first; i < lastI; i++) {
      const city = best[i];
      for (let j = first; j <= lastJ; j++) {
        if (j === i || j === i + 1) continue;
        const next = best.slice();
        next.splice(i, 1);
        const at = j > i ? j - 1 : j;
        next.splice(at, 0, city);
        const len = pathLen(next, dist, roundTrip);
        if (len + 1e-6 < bestLen) {
          best = next;
          bestLen = len;
          improved = true;
          break;
        }
      }
      if (improved) break;
    }
  }
  return best;
}

function heldKarp(dist: number[][], lockStart: boolean, lockEnd: boolean, roundTrip: boolean): number[] {
  const n = dist.length;
  const size = 1 << n;
  const INF = 1e15;
  const dp = new Float64Array(size * n).fill(INF);
  const parent = new Int16Array(size * n).fill(-1);
  const at = (mask: number, i: number) => mask * n + i;

  if (lockStart) dp[at(1, 0)] = 0;
  else {
    for (let i = 0; i < n; i++) dp[at(1 << i, i)] = 0;
  }

  for (let mask = 1; mask < size; mask++) {
    for (let j = 0; j < n; j++) {
      if ((mask & (1 << j)) === 0) continue;
      const prev = mask ^ (1 << j);
      if (prev === 0) continue;
      let min = INF;
      let arg = -1;
      for (let i = 0; i < n; i++) {
        if ((prev & (1 << i)) === 0) continue;
        const cost = dp[at(prev, i)] + dist[i][j];
        if (cost < min) {
          min = cost;
          arg = i;
        }
      }
      if (arg >= 0) {
        dp[at(mask, j)] = min;
        parent[at(mask, j)] = arg;
      }
    }
  }

  const full = size - 1;
  const nEnd = dist.length;
  let end = lockEnd ? nEnd - 1 : 0;
  let best = Infinity;
  if (lockEnd) {
    best = dp[at(full, nEnd - 1)];
    end = nEnd - 1;
  } else if (roundTrip && lockStart) {
    for (let j = 1; j < n; j++) {
      const cost = dp[at(full, j)] + dist[j][0];
      if (cost < best) {
        best = cost;
        end = j;
      }
    }
  } else {
    for (let j = 0; j < n; j++) {
      const cost = dp[at(full, j)];
      if (cost < best) {
        best = cost;
        end = j;
      }
    }
  }

  const order: number[] = [];
  let mask = full;
  let cur = end;
  while (cur >= 0 && order.length < n) {
    order.push(cur);
    const prev = parent[at(mask, cur)];
    mask ^= 1 << cur;
    cur = prev;
  }
  order.reverse();
  if (lockStart && !lockEnd && order[0] !== 0) {
    const i = order.indexOf(0);
    if (i > 0) order.unshift(...order.splice(i));
  }
  return order;
}

function startCandidates(n: number, dist: number[][], lockStart: boolean, lockEnd: boolean): number[] {
  if (lockStart) return [0];
  const skip = lockEnd && n > 1 ? n - 1 : -1;
  const usable = n - (skip >= 0 ? 1 : 0);
  if (n <= 16) return Array.from({ length: n }, (_, i) => i).filter((i) => i !== skip);
  const picked = new Set<number>([0]);
  if (skip < 0) picked.add(n - 1);
  const mid = Math.floor(n / 2);
  if (mid !== skip) picked.add(mid);
  while (picked.size < Math.min(8, usable)) {
    let bestI = 0;
    let bestD = -1;
    for (let i = 0; i < n; i++) {
      if (picked.has(i) || i === skip) continue;
      let d = Infinity;
      for (const j of picked) d = Math.min(d, dist[i][j]);
      if (d > bestD) {
        bestD = d;
        bestI = i;
      }
    }
    if (bestD < 0) break;
    picked.add(bestI);
  }
  return [...picked];
}

function enforceLocks(order: number[], n: number, lockStart: boolean, lockEnd: boolean): number[] {
  if (n <= 1) return order.slice(0, n);
  const mid = order.filter((i) => i >= 0 && i < n && (!lockStart || i !== 0) && (!lockEnd || i !== n - 1));
  const seen = new Set<number>();
  const unique: number[] = [];
  for (const i of mid) {
    if (seen.has(i)) continue;
    seen.add(i);
    unique.push(i);
  }
  const out = [...(lockStart ? [0] : []), ...unique, ...(lockEnd ? [n - 1] : [])];
  if (out.length === n) return out;
  for (let i = 0; i < n; i++) {
    if (out.includes(i)) continue;
    if (lockEnd && i === n - 1) continue;
    if (lockStart && i === 0) continue;
    out.splice(out.length - (lockEnd ? 1 : 0), 0, i);
  }
  return out;
}

function shortestOrder(dist: number[][], lockStart: boolean, lockEnd: boolean, roundTrip: boolean): number[] {
  const n = dist.length;
  if (n <= 1) return n ? [0] : [];
  if (n === 2) return [0, 1];
  if (n <= 11) {
    const exact =
      !lockStart && !lockEnd && roundTrip ? heldKarp(dist, true, false, true) : heldKarp(dist, lockStart, lockEnd, roundTrip);
    return enforceLocks(exact, n, lockStart, lockEnd);
  }
  let best: number[] = [];
  let bestLen = Infinity;
  for (const start of startCandidates(n, dist, lockStart, lockEnd)) {
    if (lockEnd && start === n - 1) continue;
    let order = nearestNeighbor(dist, start, lockEnd);
    if (lockStart && order[0] !== 0) {
      order = nearestNeighbor(dist, 0, lockEnd);
    }
    order = enforceLocks(order, n, lockStart, lockEnd);
    order = twoOpt(order, dist, lockStart, lockEnd, roundTrip);
    order = relocate(order, dist, lockStart, lockEnd, roundTrip);
    order = twoOpt(order, dist, lockStart, lockEnd, roundTrip);
    order = enforceLocks(order, n, lockStart, lockEnd);
    const len = pathLen(order, dist, roundTrip);
    if (len < bestLen) {
      bestLen = len;
      best = order;
    }
  }
  return best.length ? best : enforceLocks(nearestNeighbor(dist, 0, lockEnd), n, lockStart, lockEnd);
}

function nearStop(point: TravelStop, rows: TravelStop[]): TravelStop | null {
  return rows.find((row) => kmBetween(row, point) <= 3) ?? null;
}

function layoutStops(
  villages: TravelStop[],
  origin: TravelStop | null,
  destination: TravelStop | null,
): { stops: TravelStop[]; lockStart: boolean; lockEnd: boolean; roundTrip: boolean } {
  const pool = uniqueStops(villages);
  let start: TravelStop | null = null;
  let rest = pool;
  if (origin) {
    const hit = nearStop(origin, rest);
    if (hit) {
      start = hit;
      rest = rest.filter((row) => row.id !== hit.id);
    } else {
      start = { ...origin, kind: "start" };
    }
  }

  let end: TravelStop | null = null;
  if (destination) {
    const hit = nearStop(destination, rest);
    if (hit) {
      end = hit;
      rest = rest.filter((row) => row.id !== hit.id);
    } else if (start && kmBetween(start, destination) <= 3) {
      return {
        stops: start ? [start, ...rest] : rest,
        lockStart: Boolean(start),
        lockEnd: false,
        roundTrip: true,
      };
    } else {
      end = { ...destination, id: destination.id || "end", kind: "end" };
    }
  }

  return {
    stops: [...(start ? [start] : []), ...rest, ...(end ? [end] : [])],
    lockStart: Boolean(start),
    lockEnd: Boolean(end),
    roundTrip: false,
  };
}

export function buildTravelPlan(opts: {
  villages: TravelStop[];
  origin?: TravelStop | null;
  destination?: TravelStop | null;
  roundTrip?: boolean;
  preferDrive?: boolean;
  preserveOrder?: boolean;
}): TravelPlan {
  const villages = uniqueStops(opts.villages.filter((row) => Number.isFinite(row.lat) && Number.isFinite(row.lng)));
  const preferDrive = opts.preferDrive !== false;
  const laid = layoutStops(villages, opts.origin ?? null, opts.destination ?? null);
  const roundTrip = laid.roundTrip || (Boolean(opts.roundTrip) && !laid.lockEnd);
  const raw = laid.stops;
  let stops: TravelStop[];
  if (opts.preserveOrder) {
    stops = raw;
  } else {
    const dist = raw.map((a) => raw.map((b) => (a.id === b.id ? 0 : kmBetween(a, b))));
    const order = shortestOrder(dist, laid.lockStart, laid.lockEnd, roundTrip);
    stops = order.map((i) => raw[i]);
    if (roundTrip && !laid.lockStart && !laid.lockEnd && stops.length > 1) {
      let west = 0;
      for (let i = 1; i < stops.length; i++) {
        if (stops[i].lng < stops[west].lng) west = i;
      }
      if (west > 0) stops = stops.slice(west).concat(stops.slice(0, west));
    }
  }
  const legs: TravelLeg[] = [];
  for (let i = 1; i < stops.length; i++) legs.push(describeLeg(stops[i - 1], stops[i], preferDrive));
  if (roundTrip && stops.length > 1) legs.push(describeLeg(stops[stops.length - 1], stops[0], preferDrive));
  const totalKm = legs.reduce((sum, leg) => sum + leg.km, 0);
  const totalHours = legs.reduce((sum, leg) => sum + leg.hours, 0);
  return {
    stops,
    legs,
    totalKm,
    totalHours,
    roundTrip,
    villageCount: villages.length,
    preferDrive,
    preserveOrder: Boolean(opts.preserveOrder),
  };
}

function pathThroughKm(villages: TravelStop[], origin: TravelStop): number {
  const laid = layoutStops(villages, origin, null);
  const raw = laid.stops;
  if (raw.length === 0) return Infinity;
  if (raw.length === 1) return 0;
  const dist = raw.map((a) => raw.map((b) => (a.id === b.id ? 0 : kmBetween(a, b))));
  let order = nearestNeighbor(dist, 0, false);
  order = enforceLocks(order, raw.length, laid.lockStart, false);
  order = twoOpt(order, dist, laid.lockStart, false, false);
  return pathLen(order, dist, false);
}

function setScore(origin: TravelStop, chosen: TravelStop[], roundTrip: boolean): number {
  return roundTrip ? loopKm(chosen, origin) : pathThroughKm(chosen, origin);
}

function cheapestInsertOpen(origin: TravelStop, chosen: TravelStop[], candidate: TravelStop): number {
  const laid = layoutStops(chosen, origin, null);
  const stops = laid.stops;
  if (stops.length === 0) return kmBetween(origin, candidate);
  const from = laid.lockStart ? 1 : 0;
  let best = Infinity;
  for (let i = from; i <= stops.length; i++) {
    const prev = i === 0 ? null : stops[i - 1];
    const next = i === stops.length ? null : stops[i];
    let extra = 0;
    if (prev && next) extra = kmBetween(prev, candidate) + kmBetween(candidate, next) - kmBetween(prev, next);
    else if (prev) extra = kmBetween(prev, candidate);
    else if (next) extra = kmBetween(candidate, next);
    if (extra < best) best = extra;
  }
  return best;
}

function insertUntilCount(
  origin: TravelStop,
  pool: TravelStop[],
  seed: TravelStop[],
  count: number,
  roundTrip: boolean,
): TravelStop[] {
  const have = new Set(seed.map((row) => row.id));
  let chosen = seed.slice();
  let leftover = pool.filter((row) => !have.has(row.id));
  let guard = 0;
  while (chosen.length < count && leftover.length > 0 && guard++ < 200) {
    let best: TravelStop | null = null;
    let bestExtra = Infinity;
    for (const row of leftover) {
      const extra = roundTrip
        ? cheapestInsert(origin, chosen, row)
        : cheapestInsertOpen(origin, chosen, row);
      if (extra < bestExtra) {
        bestExtra = extra;
        best = row;
      }
    }
    if (!best) break;
    chosen = [...chosen, best];
    leftover = leftover.filter((row) => row.id !== best!.id);
  }
  return chosen;
}

function swapToShorten(
  origin: TravelStop,
  chosen: TravelStop[],
  pool: TravelStop[],
  roundTrip: boolean,
): TravelStop[] {
  const originHit = nearStop(origin, chosen);
  const locked = originHit?.id;
  const unused = pool.filter((row) => !chosen.some((item) => item.id === row.id));
  if (unused.length === 0) return chosen;
  let current = chosen.slice();
  let bestLen = setScore(origin, current, roundTrip);
  let guard = 0;
  let improved = true;
  while (improved && guard++ < 40) {
    improved = false;
    const droppable = locked ? current.filter((row) => row.id !== locked) : current;
    for (const drop of droppable) {
      for (const add of unused.slice(0, 18)) {
        const trial = current.filter((row) => row.id !== drop.id).concat(add);
        const len = setScore(origin, trial, roundTrip);
        if (len + 0.05 < bestLen) {
          current = trial;
          bestLen = len;
          unused.splice(
            unused.findIndex((row) => row.id === add.id),
            1,
            drop,
          );
          improved = true;
          break;
        }
      }
      if (improved) break;
    }
  }
  return current;
}

/** Largest "start plus a number" route. Also limited by how many villages are in reach. */
export const COUNT_ROUTE_MAX = 200;

export function buildCountRoute(opts: {
  villages: TravelStop[];
  origin: TravelStop;
  count: number;
  roundTrip: boolean;
  preferDrive?: boolean;
}): TravelPlan {
  const want = Math.floor(Number(opts.count));
  if (!Number.isFinite(want) || want < 1) {
    throw new Error("Enter how many Eco-communities to visit.");
  }
  if (opts.roundTrip && want < 2) {
    throw new Error("A loop needs at least two Eco-communities.");
  }
  const preferDrive = opts.preferDrive !== false;
  const origin = opts.origin;
  const all = uniqueStops(
    opts.villages.filter((row) => Number.isFinite(row.lat) && Number.isFinite(row.lng)),
  );
  if (all.length < (opts.roundTrip ? 2 : 1)) {
    throw new Error("Need more mapped Eco-communities for that route.");
  }
  const count = Math.min(Math.max(want, opts.roundTrip ? 2 : 1), COUNT_ROUTE_MAX, all.length);
  const originHit = nearStop(origin, all);
  const others = (originHit ? all.filter((row) => row.id !== originHit.id) : all)
    .slice()
    .sort((a, b) => kmBetween(origin, a) - kmBetween(origin, b));
  const needOthers = originHit ? Math.max(0, count - 1) : count;
  if (needOthers > others.length) {
    throw new Error(
      `Only ${originHit ? others.length + 1 : others.length} mapped Eco-communities are in reach. Try a smaller number.`,
    );
  }
  const pool = originHit
    ? [originHit, ...others.slice(0, Math.max(needOthers * 4, 28))]
    : others.slice(0, Math.max(needOthers * 4, 28));
  const nearest = originHit ? [originHit, ...others.slice(0, needOthers)] : others.slice(0, needOthers);
  const seed = originHit ? [originHit] : [];
  const inserted = insertUntilCount(origin, pool, seed, count, opts.roundTrip);
  const nearestLen = setScore(origin, nearest, opts.roundTrip);
  const insertedLen = setScore(origin, inserted, opts.roundTrip);
  let picked = inserted.length >= count && insertedLen <= nearestLen ? inserted : nearest;
  picked = uniqueStops(picked).slice(0, count);
  picked = swapToShorten(origin, picked, pool, opts.roundTrip);
  picked = uniqueStops(picked);
  if (picked.length < (opts.roundTrip ? 2 : 1)) {
    throw new Error("Could not fit that many Eco-communities from this start.");
  }
  const plan = buildTravelPlan({
    villages: picked,
    origin,
    roundTrip: opts.roundTrip,
    preferDrive,
  });
  if (plan.villageCount < (opts.roundTrip ? 2 : 1)) {
    throw new Error("Could not fit that many Eco-communities from this start.");
  }
  return { ...plan, targetCount: count };
}

function loopKm(villages: TravelStop[], origin: TravelStop, roundTrip = true): number {
  if (villages.length === 0) return Infinity;
  const laid = layoutStops(villages, origin, null);
  const raw = laid.stops;
  if (raw.length === 0) return Infinity;
  if (raw.length === 1) return 0;
  const dist = raw.map((a) => raw.map((b) => (a.id === b.id ? 0 : kmBetween(a, b))));
  let order = nearestNeighbor(dist, 0, false);
  order = enforceLocks(order, raw.length, laid.lockStart, false);
  order = twoOpt(order, dist, laid.lockStart, false, roundTrip);
  return pathLen(order, dist, roundTrip);
}

function cheapestInsert(
  origin: TravelStop,
  chosen: TravelStop[],
  candidate: TravelStop,
  roundTrip = true,
): number {
  const laid = layoutStops(chosen, origin, null);
  const stops = laid.stops;
  if (stops.length === 0) return (roundTrip ? 2 : 1) * kmBetween(origin, candidate);
  if (stops.length === 1) return (roundTrip ? 2 : 1) * kmBetween(stops[0], candidate);
  let best = Infinity;
  const span = roundTrip ? stops.length : Math.max(0, stops.length - 1);
  for (let i = 0; i < span; i++) {
    const a = stops[i];
    const b = stops[(i + 1) % stops.length];
    const extra = kmBetween(a, candidate) + kmBetween(candidate, b) - kmBetween(a, b);
    if (extra < best) best = extra;
  }
  if (!roundTrip && stops.length > 0) {
    const append = kmBetween(stops[stops.length - 1], candidate);
    if (append < best) best = append;
  }
  return best;
}

function packByInsertion(
  origin: TravelStop,
  pool: TravelStop[],
  budgetKm: number,
  seed: TravelStop[],
  roundTrip = true,
): TravelStop[] {
  const have = new Set(seed.map((row) => row.id));
  let chosen = seed.slice();
  let length = chosen.length === 0 ? 0 : loopKm(chosen, origin, roundTrip);
  if (chosen.length > 0 && (!Number.isFinite(length) || length > budgetKm + 1)) return seed.slice();
  let leftover = pool.filter((row) => !have.has(row.id));
  let guard = 0;
  const reach = roundTrip ? 2 : 1;
  while (leftover.length > 0 && guard++ < 200) {
    let best: TravelStop | null = null;
    let bestExtra = Infinity;
    for (const row of leftover) {
      if (reach * kmBetween(origin, row) > budgetKm + 1) continue;
      const extra = cheapestInsert(origin, chosen, row, roundTrip);
      if (extra < bestExtra) {
        bestExtra = extra;
        best = row;
      }
    }
    if (!best) break;
    const next = [...chosen, best];
    const nextLen = loopKm(next, origin, roundTrip);
    if (nextLen > budgetKm + 1) {
      leftover = leftover.filter((row) => row.id !== best!.id);
      continue;
    }
    chosen = next;
    length = nextLen;
    leftover = leftover.filter((row) => row.id !== best!.id);
  }
  return chosen;
}

function nearestFit(origin: TravelStop, pool: TravelStop[], budgetKm: number, roundTrip = true): TravelStop[] {
  const originHit = nearStop(origin, pool);
  const others = originHit ? pool.filter((row) => row.id !== originHit.id) : pool;
  const byNear = others.slice().sort((a, b) => kmBetween(origin, a) - kmBetween(origin, b));
  const seed = originHit ? [originHit] : [];
  if (byNear.length === 0) return seed;
  let lo = 0;
  let hi = byNear.length;
  let bestK = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const subset = originHit ? [originHit, ...byNear.slice(0, mid)] : byNear.slice(0, mid);
    const len = loopKm(subset, origin, roundTrip);
    if (Number.isFinite(len) && len <= budgetKm + 1) {
      bestK = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return originHit ? [originHit, ...byNear.slice(0, bestK)] : byNear.slice(0, bestK);
}

function fillUnderBudget(
  origin: TravelStop,
  chosen: TravelStop[],
  pool: TravelStop[],
  budgetKm: number,
  roundTrip = true,
): TravelStop[] {
  const have = new Set(chosen.map((row) => row.id));
  const leftover = pool
    .filter((row) => !have.has(row.id))
    .sort((a, b) => kmBetween(origin, a) - kmBetween(origin, b));
  let current = chosen.slice();
  for (const row of leftover) {
    const next = [...current, row];
    const len = loopKm(next, origin, roundTrip);
    if (Number.isFinite(len) && len <= budgetKm + 1) current = next;
  }
  return current;
}

function dropUntilFits(
  origin: TravelStop,
  chosen: TravelStop[],
  budgetKm: number,
  roundTrip = true,
): TravelStop[] {
  let current = chosen.slice();
  let guard = 0;
  while (current.length > 0 && loopKm(current, origin, roundTrip) > budgetKm + 1 && guard++ < 200) {
    const originHit = nearStop(origin, current);
    const droppable = originHit ? current.filter((row) => row.id !== originHit.id) : current;
    if (droppable.length === 0) break;
    droppable.sort((a, b) => kmBetween(origin, b) - kmBetween(origin, a));
    const drop = droppable[0];
    current = current.filter((row) => row.id !== drop.id);
  }
  return current;
}

function betterPack(a: TravelStop[], b: TravelStop[], origin: TravelStop, roundTrip = true): TravelStop[] {
  if (a.length > b.length) return a;
  if (b.length > a.length) return b;
  return loopKm(a, origin, roundTrip) <= loopKm(b, origin, roundTrip) ? a : b;
}

export function buildMileageLoop(opts: {
  villages: TravelStop[];
  origin: TravelStop;
  budgetMiles: number;
  preferDrive?: boolean;
  roundTrip?: boolean;
}): TravelPlan {
  const budgetMiles = Number(opts.budgetMiles);
  if (!Number.isFinite(budgetMiles) || budgetMiles <= 0) {
    throw new Error("Enter how many miles you can travel.");
  }
  const roundTrip = opts.roundTrip !== false;
  const budgetKm = milesToKm(budgetMiles);
  const preferDrive = opts.preferDrive !== false;
  const origin = opts.origin;
  const reach = roundTrip ? 2 : 1;
  const noun = roundTrip ? "loop" : "route";
  const all = uniqueStops(
    opts.villages.filter((row) => Number.isFinite(row.lat) && Number.isFinite(row.lng)),
  ).filter((row) => {
    if (nearStop(origin, [row])) return true;
    return reach * kmBetween(origin, row) <= budgetKm + 1;
  });
  if (all.length === 0) {
    throw new Error(`No Eco-community fits in that ${noun}. Try more miles, or a different start.`);
  }
  const originHit = nearStop(origin, all);
  const others = (originHit ? all.filter((row) => row.id !== originHit.id) : all)
    .slice()
    .sort((a, b) => kmBetween(origin, a) - kmBetween(origin, b));
  const pool = originHit ? [originHit, ...others.slice(0, 27)] : others.slice(0, 28);

  const nearest = nearestFit(origin, pool, budgetKm, roundTrip);
  const inserted = packByInsertion(origin, pool, budgetKm, nearStop(origin, pool) ? [nearStop(origin, pool)!] : [], roundTrip);
  let picked = betterPack(nearest, inserted, origin, roundTrip);
  picked = fillUnderBudget(origin, picked, pool, budgetKm, roundTrip);
  picked = dropUntilFits(origin, picked, budgetKm, roundTrip);
  picked = uniqueStops(picked);

  if (picked.length === 0 || loopKm(picked, origin, roundTrip) > budgetKm + 1) {
    throw new Error(`No Eco-community fits in that ${noun}. Try more miles, or a different start.`);
  }

  const laid = layoutStops(picked, origin, null);
  if (laid.stops.length < 2) {
    throw new Error(`No Eco-community fits in that ${noun}. Try more miles, or a different start.`);
  }

  const plan = buildTravelPlan({
    villages: picked,
    origin,
    roundTrip,
    preferDrive,
  });
  if (plan.totalKm > budgetKm + 1.5) {
    const tighter = dropUntilFits(origin, picked, budgetKm, roundTrip);
    if (tighter.length === 0 || layoutStops(tighter, origin, null).stops.length < 2) {
      throw new Error(`No Eco-community fits in that ${noun}. Try more miles, or a different start.`);
    }
    const retry = buildTravelPlan({
      villages: tighter,
      origin,
      roundTrip,
      preferDrive,
    });
    return { ...retry, budgetMiles };
  }
  return { ...plan, budgetMiles };
}

function pathKm(villages: TravelStop[], origin: TravelStop, destination: TravelStop): number {
  const laid = layoutStops(villages, origin, destination);
  const raw = laid.stops;
  if (raw.length < 2) return Infinity;
  const dist = raw.map((a) => raw.map((b) => (a.id === b.id ? 0 : kmBetween(a, b))));
  let order = nearestNeighbor(dist, 0, true);
  order = enforceLocks(order, raw.length, true, true);
  order = twoOpt(order, dist, true, true, false);
  return pathLen(order, dist, false);
}

function cheapestInsertPath(
  origin: TravelStop,
  destination: TravelStop,
  chosen: TravelStop[],
  candidate: TravelStop,
): number {
  const laid = layoutStops(chosen, origin, destination);
  const stops = laid.stops;
  if (stops.length < 2) {
    return kmBetween(origin, candidate) + kmBetween(candidate, destination);
  }
  let best = Infinity;
  for (let i = 0; i < stops.length - 1; i++) {
    const extra =
      kmBetween(stops[i], candidate) + kmBetween(candidate, stops[i + 1]) - kmBetween(stops[i], stops[i + 1]);
    if (extra < best) best = extra;
  }
  return best;
}

function packPathByInsertion(
  origin: TravelStop,
  destination: TravelStop,
  pool: TravelStop[],
  budgetKm: number,
  seed: TravelStop[],
): TravelStop[] {
  const have = new Set(seed.map((row) => row.id));
  let chosen = seed.slice();
  let length = pathKm(chosen, origin, destination);
  if (!Number.isFinite(length) || length > budgetKm + 1) return seed.slice();
  let leftover = pool.filter((row) => !have.has(row.id));
  let guard = 0;
  while (leftover.length > 0 && guard++ < 200) {
    let best: TravelStop | null = null;
    let bestExtra = Infinity;
    for (const row of leftover) {
      const via = kmBetween(origin, row) + kmBetween(row, destination);
      if (via > budgetKm + 1) continue;
      const extra = cheapestInsertPath(origin, destination, chosen, row);
      if (extra < bestExtra) {
        bestExtra = extra;
        best = row;
      }
    }
    if (!best) break;
    const next = [...chosen, best];
    const nextLen = pathKm(next, origin, destination);
    if (nextLen > budgetKm + 1) {
      leftover = leftover.filter((row) => row.id !== best!.id);
      continue;
    }
    chosen = next;
    length = nextLen;
    leftover = leftover.filter((row) => row.id !== best!.id);
  }
  return chosen;
}

function nearestPathFit(
  origin: TravelStop,
  destination: TravelStop,
  pool: TravelStop[],
  budgetKm: number,
): TravelStop[] {
  const byCorridor = pool
    .slice()
    .sort(
      (a, b) =>
        kmBetween(origin, a) + kmBetween(a, destination) - (kmBetween(origin, b) + kmBetween(b, destination)),
    );
  if (byCorridor.length === 0) return [];
  let lo = 0;
  let hi = byCorridor.length;
  let bestK = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const subset = byCorridor.slice(0, mid);
    const len = pathKm(subset, origin, destination);
    if (Number.isFinite(len) && len <= budgetKm + 1) {
      bestK = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return byCorridor.slice(0, bestK);
}

function fillPathUnderBudget(
  origin: TravelStop,
  destination: TravelStop,
  chosen: TravelStop[],
  pool: TravelStop[],
  budgetKm: number,
): TravelStop[] {
  const have = new Set(chosen.map((row) => row.id));
  const leftover = pool
    .filter((row) => !have.has(row.id))
    .sort(
      (a, b) =>
        kmBetween(origin, a) + kmBetween(a, destination) - (kmBetween(origin, b) + kmBetween(b, destination)),
    );
  let current = chosen.slice();
  for (const row of leftover) {
    const next = [...current, row];
    const len = pathKm(next, origin, destination);
    if (Number.isFinite(len) && len <= budgetKm + 1) current = next;
  }
  return current;
}

function dropPathUntilFits(
  origin: TravelStop,
  destination: TravelStop,
  chosen: TravelStop[],
  budgetKm: number,
): TravelStop[] {
  let current = chosen.slice();
  let guard = 0;
  while (current.length > 0 && pathKm(current, origin, destination) > budgetKm + 1 && guard++ < 200) {
    current.sort(
      (a, b) =>
        kmBetween(origin, b) + kmBetween(b, destination) - (kmBetween(origin, a) + kmBetween(a, destination)),
    );
    current = current.slice(1);
  }
  return current;
}

function betterPathPack(
  a: TravelStop[],
  b: TravelStop[],
  origin: TravelStop,
  destination: TravelStop,
): TravelStop[] {
  if (a.length > b.length) return a;
  if (b.length > a.length) return b;
  return pathKm(a, origin, destination) <= pathKm(b, origin, destination) ? a : b;
}

export function buildMileagePath(opts: {
  villages: TravelStop[];
  origin: TravelStop;
  destination: TravelStop;
  extraMiles: number;
  preferDrive?: boolean;
}): TravelPlan {
  const extraMiles = Number(opts.extraMiles);
  if (!Number.isFinite(extraMiles) || extraMiles < 0) {
    throw new Error("Enter how many extra miles you can add between start and finish.");
  }
  const origin = opts.origin;
  const destination = opts.destination;
  if (kmBetween(origin, destination) <= 3) {
    throw new Error("Start and finish are the same place. Use a mileage loop, or pick a different end.");
  }
  const directKm = kmBetween(origin, destination);
  const budgetKm = directKm + milesToKm(extraMiles);
  const budgetMiles = Math.max(1, Math.round(kmToMiles(budgetKm)));
  const preferDrive = opts.preferDrive !== false;

  const all = uniqueStops(
    opts.villages.filter((row) => Number.isFinite(row.lat) && Number.isFinite(row.lng)),
  );
  const originHit = nearStop(origin, all);
  const destHit = nearStop(destination, all);
  const extras = all.filter((row) => {
    if (originHit && row.id === originHit.id) return false;
    if (destHit && row.id === destHit.id) return false;
    return kmBetween(origin, row) + kmBetween(row, destination) <= budgetKm + 1;
  });
  extras.sort(
    (a, b) =>
      kmBetween(origin, a) + kmBetween(a, destination) - (kmBetween(origin, b) + kmBetween(b, destination)),
  );
  const pool = extras.slice(0, 28);

  const nearest = nearestPathFit(origin, destination, pool, budgetKm);
  const inserted = packPathByInsertion(origin, destination, pool, budgetKm, []);
  let picked = betterPathPack(nearest, inserted, origin, destination);
  picked = fillPathUnderBudget(origin, destination, picked, pool, budgetKm);
  picked = dropPathUntilFits(origin, destination, picked, budgetKm);
  picked = uniqueStops(picked);

  const withEnds = uniqueStops([...(originHit ? [originHit] : []), ...picked, ...(destHit ? [destHit] : [])]);
  if (withEnds.length === 0) {
    throw new Error("No Eco-community fits between those points. Try more extra miles.");
  }
  if (pathKm(withEnds, origin, destination) > budgetKm + 1) {
    picked = dropPathUntilFits(origin, destination, picked, budgetKm);
  }

  const villages = uniqueStops([...(originHit ? [originHit] : []), ...picked, ...(destHit ? [destHit] : [])]);
  if (pathKm(villages, origin, destination) > budgetKm + 1.5) {
    throw new Error("No Eco-community fits between those points. Try more extra miles.");
  }

  const plan = buildTravelPlan({
    villages,
    origin,
    destination,
    roundTrip: false,
    preferDrive,
  });
  if (plan.totalKm > budgetKm + 1.5) {
    throw new Error("No Eco-community fits between those points. Try more extra miles.");
  }
  if (plan.stops.length < 2) {
    throw new Error("No Eco-community fits between those points. Try more extra miles.");
  }
  return { ...plan, budgetMiles, extraMiles };
}

function uniqueStops(rows: TravelStop[]): TravelStop[] {
  const seen = new Set<string>();
  const out: TravelStop[] = [];
  for (const row of rows) {
    const key = row.slug ?? `${row.lat.toFixed(4)}:${row.lng.toFixed(4)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out;
}

export function travelStopForSlug(slug: string): TravelStop | null {
  const community = getCommunity(slug);
  const point = coordsFor(slug);
  if (!community || !community.stillActive || !point) return null;
  return {
    id: community.slug,
    slug: community.slug,
    name: community.name,
    location: community.location,
    country: community.country,
    lat: point.lat,
    lng: point.lng,
    kind: "village",
  };
}

export function allVillageStops(): TravelStop[] {
  return uniqueStops(
    communities.flatMap((row) => {
      const stop = travelStopForSlug(row.slug);
      return stop ? [stop] : [];
    }),
  );
}

export function villageStopsOf(plan: TravelPlan): TravelStop[] {
  return uniqueStops(plan.stops.filter((row) => row.kind === "village" || Boolean(row.slug)));
}

export function planOrigin(plan: TravelPlan): TravelStop | null {
  const first = plan.stops[0];
  return first?.kind === "start" ? first : null;
}

export function planDestination(plan: TravelPlan): TravelStop | null {
  if (plan.roundTrip) return null;
  const last = plan.stops[plan.stops.length - 1];
  return last?.kind === "end" ? last : null;
}

export function changeRouteVillages(
  villages: TravelStop[],
  change: { addSlug?: string | null; removeSlug?: string | null },
): TravelStop[] {
  let next = uniqueStops(villages.filter((row) => row.kind === "village" || Boolean(row.slug)));
  if (change.removeSlug) {
    next = next.filter((row) => row.slug !== change.removeSlug);
  }
  if (change.addSlug && !next.some((row) => row.slug === change.addSlug)) {
    const stop = travelStopForSlug(change.addSlug);
    if (!stop) throw new Error("That village is not on the map");
    next = [...next, stop];
  }
  return next;
}

export function recalculateTravelPlan(
  plan: TravelPlan,
  villages: TravelStop[],
  originOverride?: TravelStop | null,
): TravelPlan {
  const next = buildTravelPlan({
    villages,
    origin: originOverride === undefined ? planOrigin(plan) : originOverride,
    destination: planDestination(plan),
    roundTrip: plan.roundTrip,
    preferDrive: plan.preferDrive,
    preserveOrder: plan.preserveOrder,
  });
  return plan.budgetMiles || plan.targetCount || plan.extraMiles != null
    ? { ...next, budgetMiles: plan.budgetMiles, targetCount: plan.targetCount, extraMiles: plan.extraMiles }
    : next;
}

export function insertAlongOrder(
  ordered: TravelStop[],
  candidate: TravelStop,
  roundTrip: boolean,
): TravelStop[] {
  const unique = uniqueStops([...ordered, candidate]);
  if (unique.length === ordered.length) return uniqueStops(ordered);
  if (ordered.length === 0) return [candidate];
  let bestI = ordered.length;
  let bestExtra = Infinity;
  for (let i = 0; i <= ordered.length; i++) {
    const prev = i === 0 ? (roundTrip ? ordered[ordered.length - 1] : null) : ordered[i - 1];
    const next = i === ordered.length ? (roundTrip ? ordered[0] : null) : ordered[i];
    let extra = 0;
    if (prev && next) extra = kmBetween(prev, candidate) + kmBetween(candidate, next) - kmBetween(prev, next);
    else if (prev) extra = kmBetween(prev, candidate);
    else if (next) extra = kmBetween(candidate, next);
    if (extra < bestExtra) {
      bestExtra = extra;
      bestI = i;
    }
  }
  return [...ordered.slice(0, bestI), candidate, ...ordered.slice(bestI)];
}

export function orderedVillageStops(current: TravelStop[], slugs: string[]): TravelStop[] {
  const currentSlugs = current
    .map((row) => row.slug)
    .filter((slug): slug is string => Boolean(slug));
  if (slugs.length !== currentSlugs.length) {
    throw new Error("Reorder the current villages");
  }
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Each village can only appear once");
  }
  const allowed = new Set(currentSlugs);
  if (!slugs.every((slug) => allowed.has(slug))) {
    throw new Error("Reorder the current villages");
  }
  const bySlug = new Map(
    current.filter((row) => row.slug).map((row) => [row.slug as string, row]),
  );
  return slugs.map((slug) => bySlug.get(slug)!);
}

export function orderTravelPlan(plan: TravelPlan, slugs: string[]): TravelPlan {
  const villages = orderedVillageStops(villageStopsOf(plan), slugs);
  const next = buildTravelPlan({
    villages,
    origin: planOrigin(plan),
    destination: planDestination(plan),
    roundTrip: plan.roundTrip,
    preferDrive: plan.preferDrive,
    preserveOrder: true,
  });
  return plan.budgetMiles || plan.targetCount || plan.extraMiles != null
    ? { ...next, budgetMiles: plan.budgetMiles, targetCount: plan.targetCount, extraMiles: plan.extraMiles }
    : next;
}

export function reorderTravelPlan(plan: TravelPlan, slug: string, toIndex: number): TravelPlan {
  const villages = villageStopsOf(plan);
  const from = villages.findIndex((row) => row.slug === slug);
  if (from < 0) return plan;
  const clamped = Math.max(0, Math.min(villages.length - 1, Math.round(toIndex)));
  if (from === clamped) return plan;
  const nextVillages = villages.slice();
  const [item] = nextVillages.splice(from, 1);
  if (!item) return plan;
  nextVillages.splice(clamped, 0, item);
  const slugs = nextVillages.map((row) => row.slug).filter((value): value is string => Boolean(value));
  return orderTravelPlan(plan, slugs);
}

export function insertVillageInPlan(plan: TravelPlan, slug: string): TravelPlan {
  const stop = travelStopForSlug(slug);
  if (!stop) throw new Error("That village is not on the map");
  const current = villageStopsOf(plan);
  if (current.some((row) => row.slug === slug)) return plan;
  const villages = plan.preserveOrder
    ? insertAlongOrder(current, stop, plan.roundTrip)
    : changeRouteVillages(current, { addSlug: slug });
  return recalculateTravelPlan(plan, villages);
}

export function formatHours(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return "0 min";
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  if (hours < 24) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m === 0 ? `${h}h` : `${h}h ${m}m`;
  }
  const d = Math.floor(hours / 24);
  const h = Math.round(hours - d * 24);
  return h === 0 ? `${d}d` : `${d}d ${h}h`;
}

export function formatPlanDistance(km: number, unit: DistanceUnit = "mi"): string {
  return formatDistance(km, unit);
}

export function itineraryText(plan: TravelPlan): string {
  return conciseItineraryText(plan);
}

/** Short plain-text itinerary for the clipboard. */
export function conciseItineraryText(plan: TravelPlan): string {
  const unit = "mi" as const;
  const start = plan.stops[0]?.name ?? "Start";
  const bits = [
    plan.roundTrip ? "Loop" : "Route",
    `${plan.villageCount} village${plan.villageCount === 1 ? "" : "s"}`,
    formatPlanDistance(plan.totalKm, unit),
    `${formatHours(plan.totalHours)} moving`,
  ];
  if (plan.roundTrip) bits.push(`back to ${start}`);
  const lines = [bits.join(" · "), ""];

  plan.stops.forEach((stop, i) => {
    const where = stop.location && stop.location !== stop.name ? ` · ${stop.location}` : "";
    lines.push(`${i + 1}. ${stop.name}${where}`);
    if (i < plan.stops.length - 1 && plan.legs[i]) {
      const leg = plan.legs[i];
      lines.push(`   ${modeLabels[leg.mode]} ${formatPlanDistance(leg.km, unit)} · ${formatHours(leg.hours)}`);
    }
  });

  if (plan.roundTrip && plan.legs.length === plan.stops.length) {
    const last = plan.legs[plan.legs.length - 1];
    lines.push(
      `   ${modeLabels[last.mode]} ${formatPlanDistance(last.km, unit)} · ${formatHours(last.hours)} back to ${last.to.name}`,
    );
  }

  return lines.join("\n");
}

export async function copyTravelPlan(plan: TravelPlan): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return false;
  try {
    await navigator.clipboard.writeText(conciseItineraryText(plan));
    return true;
  } catch {
    return false;
  }
}

export function googleMapsUrl(stops: TravelStop[]): string {
  const pts = stops.slice(0, 10).map((stop) => `${stop.lat},${stop.lng}`);
  if (pts.length < 2) return "https://www.google.com/maps";
  return `https://www.google.com/maps/dir/${pts.join("/")}`;
}

export function geodesicPoints(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): [number, number][] {
  const km = kmBetween(a, b);
  if (km < 220) return unwrap([[a.lat, a.lng], [b.lat, b.lng]]);
  const n = Math.min(36, Math.max(8, Math.round(km / 350)));
  const φ1 = toRad(a.lat);
  const λ1 = toRad(a.lng);
  const φ2 = toRad(b.lat);
  const λ2 = toRad(b.lng);
  const x1 = Math.cos(φ1) * Math.cos(λ1);
  const y1 = Math.cos(φ1) * Math.sin(λ1);
  const z1 = Math.sin(φ1);
  const x2 = Math.cos(φ2) * Math.cos(λ2);
  const y2 = Math.cos(φ2) * Math.sin(λ2);
  const z2 = Math.sin(φ2);
  const dot = Math.min(1, Math.max(-1, x1 * x2 + y1 * y2 + z1 * z2));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return [[a.lat, a.lng], [b.lat, b.lng]];
  const sin = Math.sin(omega);
  const raw: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const s1 = Math.sin((1 - t) * omega) / sin;
    const s2 = Math.sin(t * omega) / sin;
    const x = s1 * x1 + s2 * x2;
    const y = s1 * y1 + s2 * y2;
    const z = s1 * z1 + s2 * z2;
    const hyp = Math.hypot(x, y);
    raw.push([(Math.atan2(z, hyp) * 180) / Math.PI, (Math.atan2(y, x) * 180) / Math.PI]);
  }
  return unwrap(raw);
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

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

const GROUND_MODES = new Set<TransportMode>(["walk", "bike", "bus", "car", "train", "ferry"]);

function applyRoad(leg: TravelLeg, route: RoadRoute | null): TravelLeg {
  if (leg.mode === "flight") return leg;
  if (route) {
    const hours =
      leg.mode === "car" || leg.mode === "bus" ? route.hours : hoursFor(leg.mode, route.km);
    return {
      ...leg,
      km: route.km,
      hours,
      note: modeNote(leg.mode, leg.from, leg.to, route.km),
      geometry: route.geometry,
    };
  }
  if (leg.mode === "ferry") return leg;
  const geodesic = kmBetween(leg.from, leg.to);
  const sea = seaCrossing(massFor(leg.from), massFor(leg.to));
  if (sea && geodesic <= 400) {
    return {
      ...leg,
      mode: "ferry",
      km: geodesic,
      hours: hoursFor("ferry", geodesic),
      note: modeNote("ferry", leg.from, leg.to, geodesic),
      alternatives: [
        {
          mode: "flight",
          hours: hoursFor("flight", geodesic),
          note: modeNote("flight", leg.from, leg.to, geodesic),
        },
      ],
    };
  }
  return {
    ...leg,
    mode: "flight",
    km: geodesic,
    hours: hoursFor("flight", geodesic),
    note: "Flight. No continuous driving route on mapped roads.",
    alternatives: sea
      ? [
          {
            mode: "ferry",
            hours: hoursFor("ferry", geodesic),
            note: modeNote("ferry", leg.from, leg.to, geodesic),
          },
        ]
      : [],
    geometry: undefined,
  };
}

/** Snap ground legs onto OpenStreetMap roads. Flights stay great-circle. */
export async function snapPlanToRoads(plan: TravelPlan): Promise<TravelPlan> {
  const targets = plan.legs.map((leg) => GROUND_MODES.has(leg.mode));
  if (!targets.some(Boolean)) return { ...plan, roadSnapped: true };
  const routes = await mapPool(plan.legs, 3, async (leg, i) => {
    if (!targets[i]) return null;
    return fetchRoadRoute(leg.from, leg.to);
  });
  const legs = plan.legs.map((leg, i) => applyRoad(leg, routes[i]));
  return {
    ...plan,
    legs,
    totalKm: legs.reduce((sum, leg) => sum + leg.km, 0),
    totalHours: legs.reduce((sum, leg) => sum + leg.hours, 0),
    roadSnapped: true,
  };
}

export function pathForLeg(leg: TravelLeg): [number, number][] {
  if (leg.geometry && leg.geometry.length >= 2) return unwrap(leg.geometry);
  return geodesicPoints(leg.from, leg.to);
}

export function roadsReady(plan: TravelPlan): boolean {
  return Boolean(plan.roadSnapped);
}

