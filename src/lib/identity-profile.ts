import { contributionIds, skillIds, type ContributionId } from "@/data/founder-skills";
import { getSql } from "@/lib/db";
import { portraitImage, sessionSafeImage } from "@/lib/session-image";

export type IdentitySnapshot = {
  name?: string;
  image?: string | null;
  bio?: string;
  wantsToFound?: boolean;
  skills?: string[];
  contribution?: string | null;
  hoursPerWeek?: number | null;
  hasLand?: boolean | null;
  landLocation?: string | null;
  landAcres?: number | null;
  photos?: string[];
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

async function ensureIdentityTable() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists identity_profiles (
      email text primary key,
      user_id text,
      name text,
      image text,
      bio text not null default '',
      wants_to_found boolean not null default false,
      skills text not null default '[]',
      contribution text,
      hours_per_week integer,
      has_land boolean,
      land_location text,
      land_acres numeric,
      photo_data text not null default '[]',
      updated_at timestamptz not null default now()
    )
  `).catch(() => undefined);
}

function asSkills(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((id): id is string => typeof id === "string" && skillIds.has(id)))];
}

function asPhotos(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((src): src is string => typeof src === "string" && src.startsWith("data:image/") && src.length <= 280_000)
    .slice(0, 5);
}

function asContribution(value: unknown): ContributionId | null {
  if (typeof value !== "string" || !contributionIds.has(value as ContributionId)) return null;
  return value as ContributionId;
}

function asText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function asImage(value: unknown): string | null {
  if (typeof value !== "string") return null;
  return portraitImage(value);
}

export function parseIdentitySnapshot(raw: unknown): IdentitySnapshot | null {
  if (!raw || typeof raw !== "object") return null;
  const input = raw as Record<string, unknown>;
  const name = asText(input.name, 80);
  const bio = typeof input.bio === "string" ? input.bio.trim().slice(0, 800) : "";
  const hours =
    typeof input.hoursPerWeek === "number" && Number.isFinite(input.hoursPerWeek)
      ? Math.round(input.hoursPerWeek)
      : null;
  const acres =
    typeof input.landAcres === "number" && Number.isFinite(input.landAcres) && input.landAcres > 0
      ? Math.round(input.landAcres * 10) / 10
      : null;
  return {
    name: name.length >= 2 ? name : undefined,
    image: asImage(input.image),
    bio,
    wantsToFound: Boolean(input.wantsToFound),
    skills: asSkills(input.skills),
    contribution: asContribution(input.contribution),
    hoursPerWeek: hours != null && hours >= 0 && hours <= 80 ? hours : null,
    hasLand: input.hasLand === true ? true : input.hasLand === false ? false : null,
    landLocation: asText(input.landLocation, 200) || null,
    landAcres: acres,
    photos: asPhotos(input.photos),
  };
}

export async function saveIdentity(email: string, userId: string, data: IdentitySnapshot) {
  await ensureIdentityTable();
  const sql = await getSql();
  const key = normalizeEmail(email);
  if (!key) return;
  const skills = JSON.stringify(asSkills(data.skills));
  const photos = JSON.stringify(asPhotos(data.photos));
  const image = data.image === undefined ? undefined : asImage(data.image);
  await sql`
    insert into identity_profiles (
      email, user_id, name, image, bio, wants_to_found, skills, contribution,
      hours_per_week, has_land, land_location, land_acres, photo_data, updated_at
    )
    values (
      ${key}, ${userId}, ${data.name ?? null}, ${image ?? null}, ${data.bio ?? ""},
      ${Boolean(data.wantsToFound)}, ${skills}, ${data.contribution ?? null},
      ${data.hoursPerWeek ?? null}, ${data.hasLand ?? null}, ${data.landLocation ?? null},
      ${data.landAcres ?? null}, ${photos}, now()
    )
    on conflict (email) do update set
      user_id = ${userId},
      name = coalesce(${data.name ?? null}, identity_profiles.name),
      image = case
        when ${image !== undefined} then ${image ?? null}
        else identity_profiles.image
      end,
      bio = coalesce(nullif(${data.bio ?? ""}, ''), identity_profiles.bio),
      wants_to_found = ${Boolean(data.wantsToFound)},
      skills = ${skills},
      contribution = ${data.contribution ?? null},
      hours_per_week = ${data.hoursPerWeek ?? null},
      has_land = ${data.hasLand ?? null},
      land_location = ${data.landLocation ?? null},
      land_acres = ${data.landAcres ?? null},
      photo_data = ${photos},
      updated_at = now()
  `;
}

export async function restoreIdentity(userId: string, email: string, snapshot?: IdentitySnapshot | null) {
  await ensureIdentityTable();
  const sql = await getSql();
  const key = normalizeEmail(email);
  if (!key) return;
  if (snapshot) {
    const existing = await sql<{ email: string }>`
      select email from identity_profiles where email = ${key} limit 1
    `;
    if (!existing[0]) {
      await saveIdentity(key, userId, snapshot);
    } else {
      const users = await sql<{ image: string | null; name: string | null }>`
        select "image", "name" from "user" where "id" = ${userId}
      `;
      const empty = !users[0]?.image && (!users[0]?.name || users[0].name === "Member");
      if (empty) await saveIdentity(key, userId, snapshot);
    }
  }
  const rows = await sql<{
    name: string | null;
    image: string | null;
    bio: string;
    wants_to_found: boolean;
    skills: string;
    contribution: string | null;
    hours_per_week: number | null;
    has_land: boolean | null;
    land_location: string | null;
    land_acres: string | null;
    photo_data: string;
  }>`
    select
      name, image, bio, wants_to_found, skills, contribution, hours_per_week,
      has_land, land_location, land_acres::text as land_acres, photo_data
    from identity_profiles
    where email = ${key}
    limit 1
  `;
  const row = rows[0];
  if (!row) return;
  if (row.name || row.image) {
    const publicImage = sessionSafeImage(row.image);
    if (publicImage) {
      await sql`
        update "user"
        set
          "name" = coalesce(nullif(${row.name}, ''), "name"),
          "image" = ${publicImage},
          "updatedAt" = now()
        where "id" = ${userId}
      `;
    } else {
      await sql`
        update "user"
        set
          "name" = coalesce(nullif(${row.name}, ''), "name"),
          "image" = case
            when "image" is not null and length("image") > 16000 then null
            else "image"
          end,
          "updatedAt" = now()
        where "id" = ${userId}
      `;
    }
  }
  await sql`
    insert into member_profiles (user_id, bio, updated_at)
    values (${userId}, ${row.bio ?? ""}, now())
    on conflict (user_id) do update set
      bio = case when excluded.bio <> '' then excluded.bio else member_profiles.bio end,
      updated_at = now()
  `;
  let skills: string[] = [];
  try {
    skills = asSkills(JSON.parse(row.skills || "[]"));
  } catch {
    skills = [];
  }
  let photos: string[] = [];
  try {
    photos = asPhotos(JSON.parse(row.photo_data || "[]"));
  } catch {
    photos = [];
  }
  const { writeFounder } = await import("@/lib/founders");
  await writeFounder(userId, {
    wantsToFound: Boolean(row.wants_to_found),
    skills,
    contribution: asContribution(row.contribution),
    hoursPerWeek: row.hours_per_week == null ? null : Number(row.hours_per_week),
    hasLand: row.has_land == null ? null : Boolean(row.has_land),
    landLocation: row.land_location,
    landAcres: row.land_acres == null ? null : Number(row.land_acres),
    photos,
  });
  await sql`
    update identity_profiles set user_id = ${userId}, updated_at = now() where email = ${key}
  `;
}
