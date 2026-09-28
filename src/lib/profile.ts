import { createServerFn } from "@tanstack/react-start";
import { type ContributionId } from "@/data/founder-skills";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import {
  assertAcres,
  assertContributionOptional,
  assertHours,
  assertLocation,
  assertPhotos,
  parseSkillList,
  readProfile,
  writeFounder,
  type FounderProfile,
} from "@/lib/founders";
import { saveIdentity } from "@/lib/identity-profile";
import { PORTRAIT_IMAGE_MAX, portraitImage, sessionSafeImage } from "@/lib/session-image";

export type EditableProfile = {
  name: string;
  email: string;
  image: string | null;
  bio: string;
  founder: FounderProfile | null;
};

const MAX_BIO = 800;
const MAX_NAME = 80;
const MAX_IMAGE = PORTRAIT_IMAGE_MAX;

function assertName(value: unknown): string {
  if (typeof value !== "string") throw new Error("Name yourself");
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (trimmed.length < 2) throw new Error("Name needs at least two characters");
  if (trimmed.length > MAX_NAME) throw new Error("Keep the name under 80 characters");
  return trimmed;
}

function assertBio(value: unknown): string {
  if (value == null) return "";
  if (typeof value !== "string") throw new Error("Write a bio in words");
  const trimmed = value.trim();
  if (trimmed.length > MAX_BIO) throw new Error(`Keep the bio under ${MAX_BIO} characters`);
  return trimmed;
}

function assertImage(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === "") return null;
  if (typeof value !== "string" || !value.startsWith("data:image/")) {
    throw new Error("The portrait should be an image you upload");
  }
  if (value.length > MAX_IMAGE) throw new Error("That portrait is too large, try a smaller shot");
  return value;
}

function assertHasLand(value: unknown): boolean | null {
  if (value === true) return true;
  if (value === false) return false;
  return null;
}

export const getMyProfile = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<EditableProfile> => {
    const sql = await getSql();
    const users = await sql<{ name: string | null; email: string; image: string | null }>`
      select "name", "email", "image" from "user" where "id" = ${context.userId}
    `;
    const user = users[0];
    if (!user) throw new Error("Unknown account");
    const bios = await sql<{ bio: string }>`
      select bio from member_profiles where user_id = ${context.userId}
    `;
    const founder = await readProfile(context.userId);
    if (!user.image || !founder) {
      try {
        const { restoreIdentity } = await import("@/lib/identity-profile");
        await restoreIdentity(context.userId, user.email);
      } catch {
        /* keep the account row even if the backup table is empty */
      }
    }
    const fresh = await sql<{ name: string | null; email: string; image: string | null }>`
      select "name", "email", "image" from "user" where "id" = ${context.userId}
    `;
    const next = fresh[0] ?? user;
    const portraits = await sql<{ image: string | null }>`
      select image from identity_profiles where lower(email) = lower(${next.email}) limit 1
    `;
    const biosFresh = await sql<{ bio: string }>`
      select bio from member_profiles where user_id = ${context.userId}
    `;
    return {
      name: next.name?.trim() || "Member",
      email: next.email,
      image: portraits[0]?.image || next.image,
      bio: biosFresh[0]?.bio ?? bios[0]?.bio ?? "",
      founder: (await readProfile(context.userId)) ?? founder,
    };
  });

type SaveProfileInput = {
  name: string;
  bio: string;
  image?: string | null;
  thumb?: string | null;
  wantsToFound: boolean;
  skills?: string[];
  contribution?: string;
  hoursPerWeek?: number | null;
  hasLand?: boolean | null;
  landLocation?: string | null;
  landAcres?: number | null;
  photos?: string[];
};

export const saveProfile = createServerFn({ method: "POST" })
  .validator((input: SaveProfileInput) => {
    const wantsToFound = Boolean(input.wantsToFound);
    const hasLand = assertHasLand(input.hasLand);
    const landRequired = wantsToFound && hasLand === true;
    const contribution = assertContributionOptional(input.contribution);
    if (wantsToFound && !contribution) throw new Error("Say how much you can put in");
    return {
      name: assertName(input.name),
      bio: assertBio(input.bio),
      image: assertImage(input.image),
      thumb: assertImage(input.thumb),
      wantsToFound,
      skills: parseSkillList(input.skills, wantsToFound),
      contribution,
      hoursPerWeek: assertHours(input.hoursPerWeek),
      hasLand,
      landLocation: assertLocation(input.landLocation, landRequired),
      landAcres: assertAcres(input.landAcres, landRequired),
      photos: assertPhotos(input.photos ?? []),
    };
  })
  .middleware([authMiddleware])
  .handler(async ({ context, data }): Promise<EditableProfile> => {
    const sql = await getSql();
    const portrait = data.image === undefined ? undefined : portraitImage(data.image);
    const thumb =
      data.thumb === undefined
        ? undefined
        : sessionSafeImage(data.thumb) ?? sessionSafeImage(data.image);
    if (data.image === undefined && data.thumb === undefined) {
      await sql`
        update "user"
        set "name" = ${data.name}, "updatedAt" = now()
        where "id" = ${context.userId}
      `;
    } else {
      await sql`
        update "user"
        set "name" = ${data.name}, "image" = ${thumb ?? sessionSafeImage(portrait) ?? null}, "updatedAt" = now()
        where "id" = ${context.userId}
      `;
    }
    await sql`
      insert into member_profiles (user_id, bio, updated_at)
      values (${context.userId}, ${data.bio}, now())
      on conflict (user_id) do update set bio = excluded.bio, updated_at = now()
    `;
    await writeFounder(context.userId, {
      wantsToFound: data.wantsToFound,
      skills: data.skills,
      contribution: data.contribution as ContributionId | null,
      hoursPerWeek: data.hoursPerWeek,
      hasLand: data.hasLand,
      landLocation: data.landLocation,
      landAcres: data.landAcres,
      photos: data.photos,
    });
    const users = await sql<{ name: string | null; email: string; image: string | null }>`
      select "name", "email", "image" from "user" where "id" = ${context.userId}
    `;
    const user = users[0];
    await saveIdentity(user?.email ?? "", context.userId, {
      name: user?.name?.trim() || data.name,
      image: portrait ?? user?.image ?? null,
      bio: data.bio,
      wantsToFound: data.wantsToFound,
      skills: data.skills,
      contribution: data.contribution,
      hoursPerWeek: data.hoursPerWeek,
      hasLand: data.hasLand,
      landLocation: data.landLocation,
      landAcres: data.landAcres,
      photos: data.photos,
    });
    const stored = await sql<{ image: string | null }>`
      select image from identity_profiles where lower(email) = lower(${user?.email ?? ""}) limit 1
    `;
    return {
      name: user?.name?.trim() || data.name,
      email: user?.email ?? "",
      image: stored[0]?.image ?? user?.image ?? null,
      bio: data.bio,
      founder: await readProfile(context.userId),
    };
  });

export type PublicBio = { bio: string };

export async function readBio(userId: string): Promise<string> {
  const sql = await getSql();
  const rows = await sql<{ bio: string }>`
    select bio from member_profiles where user_id = ${userId}
  `;
  return rows[0]?.bio ?? "";
}
