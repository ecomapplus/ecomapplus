import { createServerFn } from "@tanstack/react-start";
import {
  contributionIds,
  skillIds,
  type ContributionId,
} from "@/data/founder-skills";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { syncSignupLand } from "@/lib/land";

export type FounderProfile = {
  wantsToFound: boolean;
  complete: boolean;
  skills: string[];
  contribution: ContributionId | null;
  hoursPerWeek: number | null;
  hasLand: boolean | null;
  landLocation: string | null;
  landAcres: number | null;
  photos: { id: number; src: string }[];
};

const MAX_PHOTOS = 5;
const MAX_PHOTO_CHARS = 280_000;

function parseSkills(raw: unknown): string[] {
  let value: unknown = raw;
  if (typeof raw === "string") {
    try {
      value = JSON.parse(raw) as unknown;
    } catch {
      return [];
    }
  }
  if (!Array.isArray(value)) return [];
  return value.filter((id): id is string => typeof id === "string" && skillIds.has(id));
}

export function parseSkillList(value: unknown, required: boolean): string[] {
  if (!Array.isArray(value)) {
    if (required) throw new Error("Pick at least one skill");
    return [];
  }
  const skills = [...new Set(value.filter((id): id is string => typeof id === "string" && skillIds.has(id)))];
  if (required && skills.length < 1) throw new Error("Pick at least one skill");
  if (skills.length > skillIds.size) throw new Error("Unknown skill");
  return skills;
}

function assertSkills(value: unknown): string[] {
  return parseSkillList(value, true);
}

function assertContribution(value: unknown): ContributionId {
  if (typeof value !== "string" || !contributionIds.has(value as ContributionId)) {
    throw new Error("Say how much you can put in");
  }
  return value as ContributionId;
}

function assertContributionOptional(value: unknown): ContributionId | null {
  if (value == null || value === "") return null;
  if (typeof value !== "string" || !contributionIds.has(value as ContributionId)) {
    throw new Error("Say how much you can put in");
  }
  return value as ContributionId;
}

function assertHours(value: unknown): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < 0 || n > 80) throw new Error("Hours per week should be between 0 and 80");
  return Math.round(n);
}

function assertLocation(value: unknown, required: boolean): string | null {
  if (typeof value !== "string") {
    if (required) throw new Error("Where is the land?");
    return null;
  }
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) {
    if (required) throw new Error("Where is the land?");
    return null;
  }
  if (trimmed.length > 200) throw new Error("Keep the location under 200 characters");
  return trimmed;
}

function assertAcres(value: unknown, required: boolean): number | null {
  if (value == null || value === "") {
    if (required) throw new Error("How many acres?");
    return null;
  }
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n <= 0 || n > 1_000_000) throw new Error("Acres should be a positive number");
  return Math.round(n * 10) / 10;
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

export {
  assertAcres,
  assertContributionOptional,
  assertHours,
  assertLocation,
  assertPhotos,
};

export async function readProfile(userId: string): Promise<FounderProfile | null> {
  const sql = await getSql();
  const rows = await sql<{
    wants_to_found: boolean;
    onboarding_complete: boolean;
    skills: unknown;
    contribution: string | null;
    hours_per_week: number | null;
    has_land: boolean | null;
    land_location: string | null;
    land_acres: string | null;
    photo_data: unknown;
  }>`
    select
      wants_to_found,
      onboarding_complete,
      skills,
      contribution,
      hours_per_week,
      has_land,
      land_location,
      land_acres::text as land_acres,
      photo_data
    from founder_profiles
    where user_id = ${userId}
  `;
  const row = rows[0];
  if (!row) return null;
  let photos: { id: number; src: string }[] = [];
  try {
    const parsed =
      typeof row.photo_data === "string"
        ? (JSON.parse(row.photo_data || "[]") as unknown)
        : row.photo_data;
    if (Array.isArray(parsed)) {
      photos = parsed
        .filter((src): src is string => typeof src === "string" && src.startsWith("data:image/") && src.length <= MAX_PHOTO_CHARS)
        .map((src, i) => ({ id: i + 1, src }));
    }
  } catch {
    photos = [];
  }
  return {
    wantsToFound: Boolean(row.wants_to_found),
    complete: Boolean(row.onboarding_complete),
    skills: parseSkills(row.skills),
    contribution: row.contribution && contributionIds.has(row.contribution as ContributionId)
      ? (row.contribution as ContributionId)
      : null,
    hoursPerWeek: row.hours_per_week == null ? null : Number(row.hours_per_week),
    hasLand: row.has_land == null ? null : Boolean(row.has_land),
    landLocation: row.land_location,
    landAcres: row.land_acres == null ? null : Number(row.land_acres),
    photos,
  };
}

export async function writeFounder(
  userId: string,
  data: {
    wantsToFound?: boolean;
    skills: string[];
    contribution: ContributionId | null;
    hoursPerWeek: number | null;
    hasLand: boolean | null;
    landLocation: string | null;
    landAcres: number | null;
    photos: string[];
  },
) {
  const sql = await getSql();
  const wantsToFound = data.wantsToFound !== false;
  let photos = data.photos;
  if (photos.length === 0 && data.hasLand === true) {
    const existing = await readProfile(userId);
    if (existing?.photos.length) photos = existing.photos.map((p) => p.src);
  }
  const skillsJson = JSON.stringify(parseSkillList(data.skills, false));
  const photoJson = JSON.stringify(photos);
  await sql`
    insert into founder_profiles (
      user_id, wants_to_found, onboarding_complete, skills, contribution,
      hours_per_week, has_land, land_location, land_acres, photo_data, updated_at
    )
    values (
      ${userId}, ${wantsToFound}, true, ${skillsJson}, ${data.contribution},
      ${data.hoursPerWeek}, ${data.hasLand}, ${data.landLocation}, ${data.landAcres}, ${photoJson}, now()
    )
    on conflict (user_id) do update set
      wants_to_found = ${wantsToFound},
      onboarding_complete = true,
      skills = ${skillsJson},
      contribution = ${data.contribution},
      hours_per_week = ${data.hoursPerWeek},
      has_land = ${data.hasLand},
      land_location = ${data.landLocation},
      land_acres = ${data.landAcres},
      photo_data = ${photoJson},
      updated_at = now()
  `;
  await syncSignupLand(userId, {
    hasLand: data.hasLand === true,
    landLocation: data.landLocation,
    landAcres: data.landAcres,
    photos,
  });
}

export async function writeSkills(userId: string, skills: string[]) {
  const sql = await getSql();
  const skillsJson = JSON.stringify(parseSkillList(skills, false));
  await sql`
    insert into founder_profiles (user_id, skills, onboarding_complete, updated_at)
    values (${userId}, ${skillsJson}, true, now())
    on conflict (user_id) do update set
      skills = ${skillsJson},
      onboarding_complete = true,
      updated_at = now()
  `;
}

export async function writeSkipFounder(userId: string) {
  const sql = await getSql();
  await sql`
    insert into founder_profiles (user_id, wants_to_found, onboarding_complete, updated_at)
    values (${userId}, false, true, now())
    on conflict (user_id) do update set
      wants_to_found = false,
      onboarding_complete = true,
      updated_at = now()
  `;
}

export const getFounderProfile = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<FounderProfile | null> => {
    return readProfile(context.userId);
  });

export const skipFounderOnboarding = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await writeSkipFounder(context.userId);
    return { ok: true };
  });

type SaveInput = {
  skills: string[];
  contribution: string;
  hoursPerWeek?: number | null;
  hasLand: boolean;
  landLocation?: string | null;
  landAcres?: number | null;
  photos?: string[];
};

export function parseFounderSave(input: SaveInput) {
  const hasLand = Boolean(input.hasLand);
  return {
    wantsToFound: true as const,
    skills: assertSkills(input.skills),
    contribution: assertContribution(input.contribution),
    hoursPerWeek: assertHours(input.hoursPerWeek),
    hasLand,
    landLocation: assertLocation(input.landLocation, hasLand),
    landAcres: assertAcres(input.landAcres, hasLand),
    photos: hasLand ? assertPhotos(input.photos) : [],
  };
}

export const saveFounderProfile = createServerFn({ method: "POST" })
  .validator((input: SaveInput) => parseFounderSave(input))
  .middleware([authMiddleware])
  .handler(async ({ context, data }) => {
    await writeFounder(context.userId, data);
    const sql = await getSql();
    const users = await sql<{ email: string; name: string | null; image: string | null }>`
      select "email", "name", "image" from "user" where "id" = ${context.userId}
    `;
    const { saveIdentity } = await import("@/lib/identity-profile");
    await saveIdentity(users[0]?.email ?? "", context.userId, {
      name: users[0]?.name ?? undefined,
      image: users[0]?.image ?? null,
      wantsToFound: true,
      skills: data.skills,
      contribution: data.contribution,
      hoursPerWeek: data.hoursPerWeek,
      hasLand: data.hasLand,
      landLocation: data.landLocation,
      landAcres: data.landAcres,
      photos: data.photos,
    });
    return readProfile(context.userId);
  });
