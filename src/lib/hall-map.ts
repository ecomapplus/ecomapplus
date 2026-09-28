import { createServerFn } from "@tanstack/react-start";
import { requireAdmin } from "@/lib/admin";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";

export type HallPin = { userId: string; name: string; lat: number; lng: number };
export type HallMapView = { lat: number; lng: number; zoom: number };

const DEFAULT_VIEW: HallMapView = { lat: 20, lng: 0, zoom: 2 };

async function ensureHallMap() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists hall_pins (
      user_id text primary key,
      name text not null,
      lat double precision not null,
      lng double precision not null,
      updated_at timestamptz not null default now()
    )
  `);
  await sql.query(`
    create table if not exists hall_map_view (
      id integer primary key,
      lat double precision not null,
      lng double precision not null,
      zoom double precision not null
    )
  `);
  await sql.query(
    `delete from hall_pins where updated_at < now() - interval '6 hours'`,
  );
}

function finiteCoord(value: number, min: number, max: number) {
  return Number.isFinite(value) && value >= min && value <= max;
}

export const readHallMap = createServerFn({ method: "GET" }).handler(async () => {
  await ensureHallMap();
  const sql = await getSql();
  const pins = await sql<{ user_id: string; name: string; lat: number; lng: number }>`
    select user_id, name, lat, lng from hall_pins order by name
  `;
  const views = await sql<{ lat: number; lng: number; zoom: number }>`
    select lat, lng, zoom from hall_map_view where id = 1
  `;
  return {
    pins: pins.map((row) => ({
      userId: row.user_id,
      name: row.name,
      lat: Number(row.lat),
      lng: Number(row.lng),
    })),
    view: views[0]
      ? { lat: Number(views[0].lat), lng: Number(views[0].lng), zoom: Number(views[0].zoom) }
      : DEFAULT_VIEW,
  };
});

export const shareHallPin = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { lat: number; lng: number }) => {
    const lat = Number(input?.lat);
    const lng = Number(input?.lng);
    if (!finiteCoord(lat, -90, 90) || !finiteCoord(lng, -180, 180)) {
      throw new Error("That location is not usable.");
    }
    return { lat, lng };
  })
  .handler(async ({ context, data }) => {
    await ensureHallMap();
    const sql = await getSql();
    const users = await sql<{ name: string | null }>`
      select "name" from "user" where "id" = ${context.userId} limit 1
    `;
    const name = users[0]?.name?.trim() || "Member";
    await sql`
      insert into hall_pins (user_id, name, lat, lng, updated_at)
      values (${context.userId}, ${name}, ${data.lat}, ${data.lng}, now())
      on conflict (user_id) do update
      set name = excluded.name, lat = excluded.lat, lng = excluded.lng, updated_at = now()
    `;
    return { ok: true as const };
  });

export const clearHallPin = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureHallMap();
    const sql = await getSql();
    await sql`delete from hall_pins where user_id = ${context.userId}`;
    return { ok: true as const };
  });

export const saveHallMapView = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: HallMapView) => {
    const lat = Number(input?.lat);
    const lng = Number(input?.lng);
    const zoom = Number(input?.zoom);
    if (!finiteCoord(lat, -90, 90) || !finiteCoord(lng, -180, 180) || !finiteCoord(zoom, 2, 18)) {
      throw new Error("That view is not usable.");
    }
    return { lat, lng, zoom };
  })
  .handler(async ({ context, data }) => {
    await requireAdmin(context.userId);
    await ensureHallMap();
    const sql = await getSql();
    await sql`
      insert into hall_map_view (id, lat, lng, zoom)
      values (1, ${data.lat}, ${data.lng}, ${data.zoom})
      on conflict (id) do update
      set lat = excluded.lat, lng = excluded.lng, zoom = excluded.zoom
    `;
    return { ok: true as const };
  });
