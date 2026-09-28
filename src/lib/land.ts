import { createServerFn } from "@tanstack/react-start";
import { authMiddleware, optionalAuthMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { sessionSafeImage } from "@/lib/session-image";

export type LandListing = {
  id: number;
  userId: string;
  ownerName: string;
  ownerImage: string | null;
  source: "signup" | "extra";
  location: string;
  acres: number;
  notes: string;
  photos: string[];
  isMine: boolean;
};

const MAX_PHOTOS = 5;
const MAX_PHOTO_CHARS = 280_000;
const MAX_NOTES = 400;
const MAX_LOCATION = 200;

const globalRef = globalThis as typeof globalThis & {
  __landTableReady__?: Promise<void>;
};

function isSayulita(location: string): boolean {
  return location.toLowerCase().includes("sayulita");
}

export async function ensureLandTable() {
  if (!globalRef.__landTableReady__) {
    globalRef.__landTableReady__ = (async () => {
      const sql = await getSql();
      await sql.query(`
        create table if not exists land_listings (
          id serial primary key,
          user_id text not null,
          source text not null default 'extra',
          signup_for text unique,
          location text not null,
          acres numeric not null,
          notes text not null default '',
          photo_data text not null default '[]',
          created_at timestamptz not null default now(),
          updated_at timestamptz not null default now()
        )
      `);
      await sql.query(`create index if not exists land_listings_created_idx on land_listings (created_at desc)`);
      await sql.query(`create index if not exists land_listings_user_idx on land_listings (user_id)`);
      await sql.query(`alter table land_listings add column if not exists owner_email text`).catch(() => undefined);
      await sql.query(`
        insert into land_listings (user_id, source, signup_for, location, acres, notes, photo_data)
        select
          user_id,
          'signup',
          user_id,
          land_location,
          land_acres,
          '',
          coalesce(photo_data, '[]')
        from founder_profiles
        where has_land is true
          and land_location is not null
          and length(trim(land_location)) > 0
          and land_acres is not null
          and land_location not ilike '%sayulita%'
          and not exists (
            select 1 from land_listings l where l.signup_for = founder_profiles.user_id
          )
      `);
      await sql.query(`delete from land_listings where location ilike '%sayulita%'`);
    })().catch((err) => {
      globalRef.__landTableReady__ = undefined;
      throw err;
    });
  }
  await globalRef.__landTableReady__;
}

function parsePhotos(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const value = JSON.parse(raw) as unknown;
    if (!Array.isArray(value)) return [];
    return value.filter((src): src is string => typeof src === "string" && src.startsWith("data:image/"));
  } catch {
    return [];
  }
}

function assertLocation(value: unknown): string {
  if (typeof value !== "string") throw new Error("Where is the land?");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Where is the land?");
  if (trimmed.length > MAX_LOCATION) throw new Error("Keep the location under 200 characters");
  return trimmed;
}

function assertAcres(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n <= 0 || n > 1_000_000) throw new Error("Acres should be a positive number");
  return Math.round(n * 10) / 10;
}

function assertNotes(value: unknown): string {
  if (value == null) return "";
  if (typeof value !== "string") throw new Error("Write the note in words");
  const trimmed = value.trim();
  if (trimmed.length > MAX_NOTES) throw new Error(`Keep the note under ${MAX_NOTES} characters`);
  return trimmed;
}

function assertPhotos(value: unknown): string[] {
  if (value == null) return [];
  if (!Array.isArray(value)) throw new Error("Photos should be a list");
  if (value.length > MAX_PHOTOS) throw new Error(`Keep it to ${MAX_PHOTOS} photos`);
  const photos: string[] = [];
  for (const item of value) {
    if (typeof item !== "string" || !item.startsWith("data:image/")) {
      throw new Error("Photos must be images you upload");
    }
    if (item.length > MAX_PHOTO_CHARS) throw new Error("One of the photos is too large, try a smaller shot");
    photos.push(item);
  }
  return photos;
}

function mapRows(
  rows: {
    id: number;
    user_id: string;
    source: string;
    location: string;
    acres: string;
    notes: string;
    photo_data: string | null;
    owner_name: string | null;
    owner_image: string | null;
  }[],
  meId: string | null,
): LandListing[] {
  return rows.map((row) => ({
    id: Number(row.id),
    userId: row.user_id,
    ownerName: row.owner_name?.trim() || "Member",
    ownerImage: sessionSafeImage(row.owner_image),
    source: row.source === "signup" ? "signup" : "extra",
    location: row.location,
    acres: Number(row.acres),
    notes: row.notes ?? "",
    photos: parsePhotos(row.photo_data),
    isMine: Boolean(meId) && row.user_id === meId,
  }));
}

export async function syncSignupLand(
  userId: string,
  data: {
    hasLand: boolean;
    landLocation: string | null;
    landAcres: number | null;
    photos: string[];
  },
) {
  await ensureLandTable();
  const sql = await getSql();
  if (!data.hasLand || !data.landLocation || data.landAcres == null || data.landAcres <= 0 || isSayulita(data.landLocation)) {
    await sql`delete from land_listings where signup_for = ${userId}`;
    return;
  }
  const photos = JSON.stringify(data.photos);
  const emails = await sql<{ email: string | null }>`
    select lower("email") as email from "user" where "id" = ${userId}
  `;
  await sql`
    insert into land_listings (user_id, source, signup_for, location, acres, notes, photo_data, owner_email, updated_at)
    values (${userId}, 'signup', ${userId}, ${data.landLocation}, ${data.landAcres}, '', ${photos}, ${emails[0]?.email ?? null}, now())
    on conflict (signup_for) do update set
      location = excluded.location,
      acres = excluded.acres,
      photo_data = excluded.photo_data,
      owner_email = excluded.owner_email,
      updated_at = now()
  `;
}

async function loadLand(meId: string | null): Promise<LandListing[]> {
  await ensureLandTable();
  const sql = await getSql();
  const rows = await sql<{
    id: number;
    user_id: string;
    source: string;
    location: string;
    acres: string;
    notes: string;
    photo_data: string | null;
    owner_name: string | null;
    owner_image: string | null;
  }>`
    select
      l.id,
      l.user_id,
      l.source,
      l.location,
      l.acres::text as acres,
      l.notes,
      l.photo_data,
      u."name" as owner_name,
      u."image" as owner_image
    from land_listings l
    left join "user" u on u."id" = l.user_id
    order by l.created_at desc, l.id desc
  `;
  return mapRows(rows, meId).filter((row) => !isSayulita(row.location));
}

export const listLand = createServerFn({ method: "GET" })
  .middleware([optionalAuthMiddleware])
  .handler(async ({ context }): Promise<LandListing[]> => {
    return loadLand(context.userId ?? null);
  });

export const submitLand = createServerFn({ method: "POST" })
  .validator((input: { location: string; acres: number; notes?: string; photos?: string[] }) => {
    const location = assertLocation(input.location);
    if (isSayulita(location)) throw new Error("That land is not listed on the square.");
    return {
      location,
      acres: assertAcres(input.acres),
      notes: assertNotes(input.notes),
      photos: assertPhotos(input.photos),
    };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }): Promise<LandListing[]> => {
    await ensureLandTable();
    const sql = await getSql();
    const photos = JSON.stringify(data.photos);
    const emails = await sql<{ email: string | null }>`
      select lower("email") as email from "user" where "id" = ${context.userId}
    `;
    await sql`
      insert into land_listings (user_id, source, location, acres, notes, photo_data, owner_email)
      values (${context.userId}, 'extra', ${data.location}, ${data.acres}, ${data.notes}, ${photos}, ${emails[0]?.email ?? null})
    `;
    return loadLand(context.userId);
  });

export const removeLand = createServerFn({ method: "POST" })
  .validator((id: number) => {
    if (!Number.isInteger(id) || id < 1) throw new Error("Unknown land");
    return id;
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data: id }): Promise<LandListing[]> => {
    await ensureLandTable();
    const sql = await getSql();
    const rows = await sql<{ id: number; user_id: string }>`
      select id, user_id from land_listings where id = ${id}
    `;
    const row = rows[0];
    if (!row) throw new Error("Unknown land");
    if (row.user_id !== context.userId) throw new Error("That land is not yours to remove");
    await sql`delete from land_listings where id = ${id}`;
    return loadLand(context.userId);
  });

export type CachedLand = {
  location: string;
  acres: number;
  notes?: string;
  photos?: string[];
  source?: "signup" | "extra";
};

export function parseCachedLand(raw: unknown): CachedLand[] {
  if (!Array.isArray(raw)) return [];
  const out: CachedLand[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    const location = typeof row.location === "string" ? row.location.replace(/\s+/g, " ").trim() : "";
    const acres = typeof row.acres === "number" ? row.acres : Number(row.acres);
    if (location.length < 2 || !Number.isFinite(acres) || acres <= 0) continue;
    let photos: string[] = [];
    try {
      photos = assertPhotos(Array.isArray(row.photos) ? row.photos.slice(0, MAX_PHOTOS) : []);
    } catch {
      photos = [];
    }
    out.push({
      location: location.slice(0, MAX_LOCATION),
      acres: Math.round(acres * 10) / 10,
      notes: typeof row.notes === "string" ? row.notes.trim().slice(0, MAX_NOTES) : "",
      photos,
      source: row.source === "signup" ? "signup" : "extra",
    });
    if (out.length >= 20) break;
  }
  return out;
}

export async function restoreLandListings(userId: string, email: string, cached?: unknown) {
  await ensureLandTable();
  const sql = await getSql();
  const key = email.trim().toLowerCase();
  if (!key) return;
  await sql`
    update land_listings
    set user_id = ${userId}, owner_email = ${key}
    where owner_email = ${key} or user_id = ${userId}
  `;
  const others = await sql<{ id: string }>`
    select "id" from "user" where lower("email") = ${key} and "id" <> ${userId}
  `;
  for (const other of others) {
    await sql`
      update land_listings
      set user_id = ${userId},
          owner_email = ${key},
          signup_for = case when signup_for = ${other.id} then ${userId} else signup_for end
      where user_id = ${other.id} or signup_for = ${other.id}
    `;
  }
  for (const parcel of parseCachedLand(cached)) {
    const existing = await sql<{ id: number }>`
      select id from land_listings
      where user_id = ${userId} and location = ${parcel.location} and acres = ${parcel.acres}
      limit 1
    `;
    if (existing[0]) continue;
    const photos = JSON.stringify(parcel.photos ?? []);
    await sql`
      insert into land_listings (user_id, source, location, acres, notes, photo_data, owner_email)
      values (
        ${userId}, ${parcel.source ?? "extra"}, ${parcel.location}, ${parcel.acres},
        ${parcel.notes ?? ""}, ${photos}, ${key}
      )
    `;
  }
}
