import { upcomingEvents } from "./events";
import { residencyListings } from "./residencies";
import { stayClass } from "./stay-class";
import { workStayListings } from "./work-stay";

export type OpenStayType = "work-trade" | "residency";

/** A standing residency or work-trade with no upcoming date on file. */
export type OpenStay = {
  id: string;
  type: OpenStayType;
  slug: string;
  name: string;
  country: string;
  place: string;
  note: string;
  url: string;
};

export function openStays(): OpenStay[] {
  const dated = upcomingEvents();
  const datedWork = new Set(dated.filter((row) => stayClass(row) === "work-stay").map((row) => row.slug));
  const datedResidency = new Set(dated.filter((row) => stayClass(row) === "residency").map((row) => row.slug));
  const work = workStayListings()
    .filter((row) => !datedWork.has(row.community.slug))
    .map((row) => ({
      id: `work|${row.community.slug}`,
      type: "work-trade" as const,
      slug: row.community.slug,
      name: row.community.name,
      country: row.community.country,
      place: row.community.location,
      note: row.note,
      url: row.program?.url ?? row.community.website,
    }));
  const residencies = residencyListings()
    .filter((row) => !datedResidency.has(row.community.slug))
    .map((row) => ({
      id: `residency|${row.community.slug}`,
      type: "residency" as const,
      slug: row.community.slug,
      name: row.community.name,
      country: row.community.country,
      place: row.community.location,
      note: row.note,
      url: row.applyUrl,
    }));
  return [...work, ...residencies].sort(
    (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name) || a.type.localeCompare(b.type),
  );
}
