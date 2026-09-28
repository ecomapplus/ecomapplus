import { communities, type Community } from "./communities";
import { informalFor } from "./informal-agreements";
import { visitDoorsFor } from "./visit-types";
import { volunteerFor, type VolunteerProgram } from "./volunteer-programs";

export type WorkStayListing = {
  community: Community;
  program: VolunteerProgram | undefined;
  note: string;
};

function internNote(slug: string): string | undefined {
  try {
    return informalFor(slug).find((row) => row.kind === "volunteer-intern")?.why;
  } catch {
    return undefined;
  }
}

function listingFor(community: Community): WorkStayListing {
  const program = volunteerFor(community.slug);
  return {
    community,
    program,
    note:
      program?.note ??
      internNote(community.slug) ??
      "A volunteer or intern door is on file for this village.",
  };
}

let cache: WorkStayListing[] | null = null;

/** Every village the atlas tags as work-stay: a signup page, or a volunteer/intern compact. */
export function workStayListings(): WorkStayListing[] {
  if (cache) return cache;
  cache = communities
    .filter((community) => visitDoorsFor(community.slug).includes("work-stay"))
    .map(listingFor)
    .sort(
      (a, b) =>
        a.community.country.localeCompare(b.community.country) ||
        a.community.name.localeCompare(b.community.name),
    );
  return cache;
}

export const workStayCount = workStayListings().length;

export function workStayFor(slug: string): WorkStayListing | undefined {
  if (!visitDoorsFor(slug).includes("work-stay")) return undefined;
  const community = communities.find((row) => row.slug === slug);
  if (!community) return undefined;
  return listingFor(community);
}
