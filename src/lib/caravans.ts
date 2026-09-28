import { createServerFn } from "@tanstack/react-start";
import { villageRef } from "@/data/communities";
import {
  buildTravelPlan,
  changeRouteVillages,
  formatHours,
  formatPlanDistance,
  insertAlongOrder,
  orderedVillageStops,
  planDestination,
  planOrigin,
  travelStopForSlug,
  villageStopsOf,
  type TravelPlan,
  type TravelStop,
} from "@/data/travel-plan";
import { authMiddleware, optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { founderIdsFor } from "@/lib/room-publish";

export type CaravanFounder = { id: string; name: string };
export type CaravanVote = { userId: string; name: string };

export type CaravanStartProposal = {
  proposedBy: string;
  proposerName: string;
  startDate: string;
  startPlace: string;
  startLat: number | null;
  startLng: number | null;
  agreed: CaravanVote[];
};

export type CaravanCard = {
  roomId: string;
  title: string;
  roundTrip: boolean;
  villageCount: number;
  stopNames: string[];
  founderCount: number;
  memberCount: number;
  startLocked: boolean;
  startDate: string | null;
  startPlace: string | null;
  isMember: boolean;
  isFounder: boolean;
};

export type CaravanDetail = CaravanCard & {
  plan: TravelPlan;
  founders: CaravanFounder[];
  startLat: number | null;
  startLng: number | null;
  proposal: CaravanStartProposal | null;
  canJoin: boolean;
};

const MAX_TITLE = 80;
const MAX_PLAN_JSON = 400_000;

export function caravanPath(roomId: string) {
  return `/caravans/${roomId}`;
}

export function caravanJoinMessage(title: string, roomId: string) {
  return `Join this caravan: ${title}\n${caravanPath(roomId)}`;
}

function assertRoomId(id: unknown): string {
  if (typeof id !== "string") throw new Error("Unknown caravan");
  const trimmed = id.trim();
  if (!/^[a-zA-Z0-9_-]{2,64}$/.test(trimmed)) throw new Error("Unknown caravan");
  return trimmed;
}

function assertTitle(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name the caravan");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name needs at least two characters");
  if (trimmed.length > MAX_TITLE) throw new Error(`Keep the name under ${MAX_TITLE} characters`);
  return trimmed;
}

function assertPlace(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name the starting place");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name the starting place");
  if (trimmed.length > MAX_TITLE) throw new Error("Keep the place under 80 characters");
  return trimmed;
}

function assertDate(value: unknown): string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("Pick a starting day");
  const floor = new Date(Date.now() - 129_600_000).toISOString().slice(0, 10);
  const ceiling = new Date(Date.now() + 632_448_000_00).toISOString().slice(0, 10);
  if (value < floor) throw new Error("The starting day has to be today or later");
  if (value > ceiling) throw new Error("Pick a starting day within two years");
  return value;
}

function assertCoord(value: unknown): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return null;
  return n;
}

function asDate(value: unknown): string | null {
  if (value == null) return null;
  if (typeof value === "string") {
    const m = value.match(/^(\d{4}-\d{2}-\d{2})/);
    return m ? m[1] : null;
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  return null;
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

function parseTravelPlan(value: unknown): TravelPlan {
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
  if (stops.length < 2) throw new Error("A caravan needs at least two stops");
  const villageCount =
    typeof row.villageCount === "number" && row.villageCount > 0
      ? Math.round(row.villageCount)
      : stops.filter((s) => s.kind === "village" || s.slug).length;
  if (villageCount < 2) throw new Error("A caravan needs at least two eco-communities");
  const roundTrip = Boolean(row.roundTrip);
  const totalKm = Number(row.totalKm);
  const totalHours = Number(row.totalHours);
  return {
    stops,
    legs: Array.isArray(row.legs) ? (row.legs as TravelPlan["legs"]) : [],
    totalKm: Number.isFinite(totalKm) ? totalKm : 0,
    totalHours: Number.isFinite(totalHours) ? totalHours : 0,
    roundTrip,
    villageCount,
    preferDrive: row.preferDrive !== false,
    preserveOrder: row.preserveOrder === true,
    budgetMiles: typeof row.budgetMiles === "number" && row.budgetMiles > 0 ? row.budgetMiles : undefined,
    extraMiles: typeof row.extraMiles === "number" && row.extraMiles >= 0 ? row.extraMiles : undefined,
    targetCount: typeof row.targetCount === "number" && row.targetCount > 0 ? Math.round(row.targetCount) : undefined,
    roadSnapped: row.roadSnapped === true,
  };
}

export function defaultCaravanTitle(plan: TravelPlan) {
  const villages = plan.stops.filter((s) => s.kind === "village" || s.slug);
  const first = villages[0]?.name ?? plan.stops[0]?.name ?? "Eco-communities";
  const last = villages[villages.length - 1]?.name ?? plan.stops[plan.stops.length - 1]?.name;
  const end = plan.stops[plan.stops.length - 1];
  const finish = end && (end.kind === "end" || end.kind === "start") ? end.name : last;
  const span = finish && finish !== first ? `${first} to ${finish}` : first;
  return `${plan.roundTrip ? "Loop" : "Caravan"} · ${span}`.slice(0, MAX_TITLE);
}

async function ensureCaravanSchema() {
  const sql = await getSql();
  await sql
    .query(
      `
    create table if not exists caravans (
      room_id text primary key,
      created_by text not null,
      title text not null,
      round_trip boolean not null default false,
      village_count integer not null,
      plan_json text not null,
      start_locked boolean not null default false,
      start_date date,
      start_place text,
      start_lat double precision,
      start_lng double precision,
      created_at timestamptz not null default now()
    )
  `,
    )
    .catch(() => undefined);
  await sql
    .query(
      `
    create table if not exists caravan_start_proposals (
      room_id text primary key,
      proposed_by text not null,
      start_date date not null,
      start_place text not null,
      start_lat double precision,
      start_lng double precision,
      created_at timestamptz not null default now()
    )
  `,
    )
    .catch(() => undefined);
  await sql
    .query(
      `
    create table if not exists caravan_start_votes (
      room_id text not null,
      user_id text not null,
      created_at timestamptz not null default now(),
      primary key (room_id, user_id)
    )
  `,
    )
    .catch(() => undefined);
}

async function authorName(userId: string) {
  const rows = await (await getSql())<{ name: string | null }>`
    select "name" from "user" where "id" = ${userId}
  `;
  const name = rows[0]?.name?.trim();
  return name && name.length > 0 ? name : "Member";
}

export async function seatCaravanFounder(roomId: string, userId: string, email: string | null) {
  await ensureCaravanSchema();
  const sql = await getSql();
  const room = (
    await sql<{ founder_a: string | null; founder_b: string | null; founder_c: string | null }>`
    select founder_a, founder_b, founder_c from rooms where id = ${roomId}
  `
  )[0];
  if (!room) throw new Error("Unknown caravan");
  if (userId === room.founder_a || userId === room.founder_b || userId === room.founder_c) return "founder";
  if (!room.founder_b) {
    await sql`
      update rooms
      set founder_b = ${userId}, founder_b_email = ${email}
      where id = ${roomId} and founder_b is null
    `;
    return "founder";
  }
  if (!room.founder_c) {
    await sql`
      update rooms
      set founder_c = ${userId}, founder_c_email = ${email}
      where id = ${roomId} and founder_c is null
    `;
    return "founder";
  }
  return "member";
}

async function loadProposal(roomId: string): Promise<CaravanStartProposal | null> {
  const sql = await getSql();
  const row = (
    await sql<{
      proposed_by: string;
      proposer_name: string;
      start_date: string | Date;
      start_place: string;
      start_lat: number | null;
      start_lng: number | null;
    }>`
    select
      p.proposed_by,
      coalesce(nullif(u."name", ''), 'Member') as proposer_name,
      p.start_date,
      p.start_place,
      p.start_lat,
      p.start_lng
    from caravan_start_proposals p
    left join "user" u on u."id" = p.proposed_by
    where p.room_id = ${roomId}
  `
  )[0];
  if (!row) return null;
  const votes = await sql<{ user_id: string; name: string }>`
    select v.user_id, coalesce(nullif(u."name", ''), 'Member') as name
    from caravan_start_votes v
    left join "user" u on u."id" = v.user_id
    where v.room_id = ${roomId}
    order by u."name" asc
  `;
  return {
    proposedBy: row.proposed_by,
    proposerName: row.proposer_name,
    startDate: asDate(row.start_date) ?? "",
    startPlace: row.start_place,
    startLat: row.start_lat == null ? null : Number(row.start_lat),
    startLng: row.start_lng == null ? null : Number(row.start_lng),
    agreed: votes.map((vote) => ({ userId: vote.user_id, name: vote.name })),
  };
}

export async function loadCaravan(roomId: string, userId: string | null): Promise<CaravanDetail | null> {
  await ensureCaravanSchema();
  const sql = await getSql();
  const rows = await sql<{
    room_id: string;
    title: string;
    round_trip: boolean;
    village_count: number;
    plan_json: string;
    start_locked: boolean;
    start_date: string | Date | null;
    start_place: string | null;
    start_lat: number | null;
    start_lng: number | null;
    founder_a: string | null;
    founder_b: string | null;
    founder_c: string | null;
  }>`
    select
      c.room_id,
      c.title,
      c.round_trip,
      c.village_count,
      c.plan_json,
      c.start_locked,
      c.start_date,
      c.start_place,
      c.start_lat,
      c.start_lng,
      r.founder_a,
      r.founder_b,
      r.founder_c
    from caravans c
    join rooms r on r.id = c.room_id
    where c.room_id = ${roomId}
  `;
  const row = rows[0];
  if (!row) return null;
  let plan: TravelPlan;
  try {
    plan = parseTravelPlan(row.plan_json);
  } catch {
    return null;
  }
  const founderIds = [row.founder_a, row.founder_b, row.founder_c].filter((id): id is string => Boolean(id));
  const members = await sql<{ n: number }>`
    select count(*)::int as n from room_members where room_id = ${roomId}
  `;
  const mine = userId
    ? await sql<{ role: string }>`
        select role from room_members where room_id = ${roomId} and user_id = ${userId}
      `
    : [];
  const isMember = Boolean(mine[0]);
  const isFounder = Boolean(userId && (mine[0]?.role === "founder" || founderIds.includes(userId)));
  const startLocked = Boolean(row.start_locked);
  const order = new Map(founderIds.map((id, i) => [id, i]));
  let founderRows: { id: string; name: string }[] = [];
  if (founderIds.length > 0) {
    founderRows = await sql<{ id: string; name: string }>`
      select u."id" as id, coalesce(nullif(u."name", ''), 'Member') as name
      from "user" u
      where u."id" = ${founderIds[0]}
         or u."id" = ${founderIds[1] ?? founderIds[0]}
         or u."id" = ${founderIds[2] ?? founderIds[0]}
    `;
  }
  return {
    roomId: row.room_id,
    title: row.title,
    roundTrip: Boolean(row.round_trip),
    villageCount: Number(row.village_count) || plan.villageCount,
    stopNames: plan.stops.filter((s) => s.kind === "village" || s.slug).map((s) => s.name),
    founderCount: founderIds.length,
    memberCount: members[0]?.n ?? founderIds.length,
    startLocked,
    startDate: asDate(row.start_date),
    startPlace: row.start_place,
    isMember,
    isFounder,
    plan,
    founders: founderRows.sort((a, b) => (order.get(a.id) ?? 9) - (order.get(b.id) ?? 9)),
    startLat: row.start_lat == null ? null : Number(row.start_lat),
    startLng: row.start_lng == null ? null : Number(row.start_lng),
    proposal: startLocked ? null : await loadProposal(roomId),
    canJoin: !isMember,
  };
}

function toCard(detail: CaravanDetail): CaravanCard {
  return {
    roomId: detail.roomId,
    title: detail.title,
    roundTrip: detail.roundTrip,
    villageCount: detail.villageCount,
    stopNames: detail.stopNames.slice(0, 8),
    founderCount: detail.founderCount,
    memberCount: detail.memberCount,
    startLocked: detail.startLocked,
    startDate: detail.startDate,
    startPlace: detail.startPlace,
    isMember: detail.isMember,
    isFounder: detail.isFounder,
  };
}

export const listCaravans = createServerFn({ method: "GET" })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context }): Promise<CaravanCard[]> => {
    await ensureCaravanSchema();
    const sql = await getSql();
    const rows = await sql<{ room_id: string }>`
      select room_id from caravans order by created_at desc
    `;
    const out: CaravanCard[] = [];
    for (const row of rows) {
      const detail = await loadCaravan(row.room_id, context.userId);
      if (detail) out.push(toCard(detail));
    }
    return out;
  });

export const getCaravan = createServerFn({ method: "GET" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context, data: roomId }) => {
    const caravan = await loadCaravan(roomId, context.userId);
    if (!caravan) throw new Error("Unknown caravan");
    return caravan;
  });

export const createCaravan = createServerFn({ method: "POST" })
  .validator((input: { title?: string; plan: unknown }) => {
    const plan = parseTravelPlan(input.plan);
    const json = JSON.stringify(plan);
    if (json.length > MAX_PLAN_JSON) throw new Error("That route is too large to share");
    const title = input.title && String(input.title).trim() ? assertTitle(input.title) : defaultCaravanTitle(plan);
    return { title, plan, json };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await ensureCaravanSchema();
    const sql = await getSql();
    const me = await sql<{ email: string | null }>`
      select lower("email") as email from "user" where "id" = ${context.userId}
    `;
    const email = me[0]?.email ?? null;
    const id = `c_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    await sql`
      insert into rooms (id, kind, name, founder_a, founder_a_email)
      values (${id}, 'caravan', ${data.title}, ${context.userId}, ${email})
    `;
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${id}, ${context.userId}, 'founder', ${email})
    `;
    await sql`
      insert into caravans (room_id, created_by, title, round_trip, village_count, plan_json)
      values (
        ${id},
        ${context.userId},
        ${data.title},
        ${data.plan.roundTrip},
        ${data.plan.villageCount},
        ${data.json}
      )
    `;
    return { id };
  });

export const proposeCaravanStart = createServerFn({ method: "POST" })
  .validator((input: {
    roomId: string;
    startDate: string;
    startPlace: string;
    startLat?: number | null;
    startLng?: number | null;
  }) => ({
    roomId: assertRoomId(input.roomId),
    startDate: assertDate(input.startDate),
    startPlace: assertPlace(input.startPlace),
    startLat: assertCoord(input.startLat),
    startLng: assertCoord(input.startLng),
  }))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await ensureCaravanSchema();
    const founderIds = await founderIdsFor(data.roomId);
    if (!founderIds.includes(context.userId)) throw new Error("Only a founder can propose the start");
    if (founderIds.length < 3) throw new Error("Invite two more founders first. The three of you set the start.");
    const caravan = await loadCaravan(data.roomId, context.userId);
    if (!caravan) throw new Error("Unknown caravan");
    if (caravan.startLocked) throw new Error("The start is already set");
    const sql = await getSql();
    await sql`
      insert into caravan_start_proposals (room_id, proposed_by, start_date, start_place, start_lat, start_lng, created_at)
      values (${data.roomId}, ${context.userId}, ${data.startDate}, ${data.startPlace}, ${data.startLat}, ${data.startLng}, now())
      on conflict (room_id) do update set
        proposed_by = excluded.proposed_by,
        start_date = excluded.start_date,
        start_place = excluded.start_place,
        start_lat = excluded.start_lat,
        start_lng = excluded.start_lng,
        created_at = now()
    `;
    await sql`delete from caravan_start_votes where room_id = ${data.roomId}`;
    await sql`
      insert into caravan_start_votes (room_id, user_id)
      values (${data.roomId}, ${context.userId})
      on conflict (room_id, user_id) do nothing
    `;
    return loadCaravan(data.roomId, context.userId);
  });

export const agreeCaravanStart = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await ensureCaravanSchema();
    const founderIds = await founderIdsFor(roomId);
    if (!founderIds.includes(context.userId)) throw new Error("Only a founder can agree");
    const sql = await getSql();
    if (
      !(
        await sql<{ room_id: string }>`
      select room_id from caravan_start_proposals where room_id = ${roomId}
    `
      )[0]
    ) {
      throw new Error("Nothing to agree to yet");
    }
    await sql`
      insert into caravan_start_votes (room_id, user_id)
      values (${roomId}, ${context.userId})
      on conflict (room_id, user_id) do nothing
    `;
    const votes = await sql<{ user_id: string }>`
      select user_id from caravan_start_votes where room_id = ${roomId}
    `;
    const agreed = new Set(votes.map((row) => row.user_id));
    if (founderIds.length >= 3 && founderIds.every((id) => agreed.has(id))) {
      const row = (
        await sql<{
          start_date: string | Date;
          start_place: string;
          start_lat: number | null;
          start_lng: number | null;
        }>`
        select start_date, start_place, start_lat, start_lng
        from caravan_start_proposals where room_id = ${roomId}
      `
      )[0];
      if (row) {
        const startDate = asDate(row.start_date);
        await sql`
          update caravans
          set start_locked = true,
              start_date = ${startDate},
              start_place = ${row.start_place},
              start_lat = ${row.start_lat},
              start_lng = ${row.start_lng}
          where room_id = ${roomId}
        `;
        await sql`delete from caravan_start_votes where room_id = ${roomId}`;
        await sql`delete from caravan_start_proposals where room_id = ${roomId}`;
      }
    }
    return loadCaravan(roomId, context.userId);
  });

export const joinCaravan = createServerFn({ method: "POST" })
  .validator((roomId: string) => assertRoomId(roomId))
  .middleware([authMiddleware])
  .handler(async ({ context, data: roomId }) => {
    await ensureCaravanSchema();
    const caravan = await loadCaravan(roomId, context.userId);
    if (!caravan) throw new Error("Unknown caravan");
    if (caravan.isMember) return caravan;
    const sql = await getSql();
    const me = await sql<{ email: string | null }>`
      select lower("email") as email from "user" where "id" = ${context.userId}
    `;
    await sql`
      insert into room_members (room_id, user_id, role, user_email)
      values (${roomId}, ${context.userId}, 'member', ${me[0]?.email ?? null})
      on conflict (room_id, user_id) do nothing
    `;
    return loadCaravan(roomId, context.userId);
  });

export const updateCaravanRoute = createServerFn({ method: "POST" })
  .validator(
    (input: {
      roomId: string;
      addSlug?: string | null;
      removeSlug?: string | null;
      orderedSlugs?: string[] | null;
      shortestPath?: boolean;
    }) => {
      const roomId = assertRoomId(input.roomId);
      const addRaw = typeof input.addSlug === "string" ? input.addSlug.trim() : "";
      const removeRaw = typeof input.removeSlug === "string" ? input.removeSlug.trim() : "";
      const addSlug = addRaw ? villageRef(addRaw)?.slug ?? null : null;
      const removeSlug = removeRaw ? villageRef(removeRaw)?.slug ?? null : null;
      if (addRaw && !addSlug) throw new Error("Unknown village");
      if (removeRaw && !removeSlug) throw new Error("Unknown village");
      const shortestPath = input.shortestPath === true;
      const orderedRaw = Array.isArray(input.orderedSlugs)
        ? input.orderedSlugs
            .filter((slug): slug is string => typeof slug === "string")
            .map((slug) => slug.trim())
            .filter(Boolean)
        : [];
      const orderedSlugs = orderedRaw.map((slug) => villageRef(slug)?.slug ?? null);
      if (orderedRaw.length && orderedSlugs.some((slug) => !slug)) throw new Error("Unknown village");
      const ordered = orderedSlugs.filter((slug): slug is string => Boolean(slug));
      const kinds = [Boolean(addSlug), Boolean(removeSlug), ordered.length > 0, shortestPath].filter(Boolean).length;
      if (kinds !== 1) throw new Error("Add, remove, reorder, or restore the shortest path");
      return { roomId, addSlug, removeSlug, orderedSlugs: ordered, shortestPath };
    },
  )
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await ensureCaravanSchema();
    const caravan = await loadCaravan(data.roomId, context.userId);
    if (!caravan) throw new Error("Unknown caravan");
    if (!caravan.isMember) throw new Error("Join the caravan first");
    const current = villageStopsOf(caravan.plan);
    if (data.addSlug && current.some((row) => row.slug === data.addSlug)) {
      throw new Error("That village is already on the route");
    }
    if (data.removeSlug && !current.some((row) => row.slug === data.removeSlug)) {
      throw new Error("That village is not on this route");
    }
    let villages: TravelStop[];
    let preserveOrder = Boolean(caravan.plan.preserveOrder);
    if (data.shortestPath) {
      villages = current;
      preserveOrder = false;
    } else if (data.orderedSlugs.length > 0) {
      villages = orderedVillageStops(current, data.orderedSlugs);
      preserveOrder = true;
    } else if (data.addSlug) {
      const stop = travelStopForSlug(data.addSlug);
      if (!stop) throw new Error("That village is not on the map");
      villages = preserveOrder
        ? insertAlongOrder(current, stop, caravan.plan.roundTrip)
        : changeRouteVillages(current, { addSlug: data.addSlug });
    } else {
      villages = changeRouteVillages(current, { removeSlug: data.removeSlug });
    }
    if (villages.filter((row) => row.slug).length < 2) throw new Error("Keep at least two eco-communities on the route");
    let origin =
      caravan.startLocked && caravan.startLat != null && caravan.startLng != null
        ? {
            id: "caravan-start",
            name: caravan.startPlace || "Start",
            location: caravan.startPlace ?? undefined,
            lat: caravan.startLat,
            lng: caravan.startLng,
            kind: "start" as const,
          }
        : planOrigin(caravan.plan);
    if (data.removeSlug && origin?.slug === data.removeSlug) origin = null;
    let destination = planDestination(caravan.plan);
    if (data.removeSlug && destination?.slug === data.removeSlug) destination = null;
    const plan = buildTravelPlan({
      villages,
      origin,
      destination,
      roundTrip: caravan.plan.roundTrip && !destination,
      preferDrive: caravan.plan.preferDrive,
      preserveOrder,
    });
    const stored: TravelPlan = caravan.plan.budgetMiles
      ? { ...plan, budgetMiles: caravan.plan.budgetMiles }
      : plan;
    const json = JSON.stringify(stored);
    if (json.length > MAX_PLAN_JSON) throw new Error("That route is too large to share");
    const sql = await getSql();
    await sql`
      update caravans
      set plan_json = ${json},
          village_count = ${stored.villageCount},
          round_trip = ${stored.roundTrip}
      where room_id = ${data.roomId}
    `;
    return loadCaravan(data.roomId, context.userId);
  });

function caravanRouteBlurb(
  name: string,
  data: { addSlug: string | null; removeSlug: string | null; orderedSlugs: string[]; shortestPath: boolean },
  current: TravelStop[],
  villages: TravelStop[],
  plan: TravelPlan,
) {
  const stats = `${plan.villageCount} villages · ${formatPlanDistance(plan.totalKm)} · ${formatHours(plan.totalHours)} moving.`;
  if (data.shortestPath) return `${name} restored the shortest path. ${stats}`;
  if (data.orderedSlugs.length > 0) return `${name} changed the visit order. ${stats}`;
  const changed = data.addSlug
    ? villages.find((row) => row.slug === data.addSlug)?.name ?? "a village"
    : current.find((row) => row.slug === data.removeSlug)?.name ?? "a village";
  return `${name} ${data.addSlug ? "added" : "removed"} ${changed} ${data.addSlug ? "to" : "from"} the route. ${stats}`;
}

export function formatCaravanDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function caravanStatus(row: Pick<CaravanCard, "startLocked" | "startDate" | "startPlace" | "founderCount">) {
  if (row.startLocked) {
    const day = row.startDate ? formatCaravanDate(row.startDate) : "the start day";
    return row.startPlace ? `Leaves ${day} from ${row.startPlace}` : `Leaves ${day}`;
  }
  if (row.founderCount < 3) return `Gathering founders · ${row.founderCount} of 3`;
  return "Founders agreeing on the start";
}
