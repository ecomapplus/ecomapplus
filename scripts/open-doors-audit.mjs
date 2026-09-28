import { communities } from "../src/data/communities.ts";
import { hasBookableStay } from "../src/data/booking-stays.ts";
import { upcomingEventsFor } from "../src/data/events.ts";
import { landingPhotos } from "../src/data/landing-photos.ts";
import { hasPublicArrival, publicChipsFor, publicFlagsFor } from "../src/data/public-flags.ts";
import { visitDoorsFor } from "../src/data/visit-types.ts";

const living = communities.filter((c) => c.stillActive);
const rows = living.map((c) => {
  const doors = visitDoorsFor(c.slug);
  const flags = publicFlagsFor(c.slug);
  return {
    slug: c.slug,
    name: c.name,
    doors,
    flags,
    open: hasPublicArrival(c.slug),
    overnight: hasBookableStay(c.slug),
    dated: upcomingEventsFor(c.slug).length,
  };
});

const counts = {
  living: living.length,
  open: rows.filter((r) => r.open).length,
  closed: rows.filter((r) => !r.open).length,
  work: rows.filter((r) => r.doors.includes("work-stay")).length,
  event: rows.filter((r) => r.doors.includes("event") || r.dated > 0).length,
  overnight: rows.filter((r) => r.overnight).length,
  residency: rows.filter((r) => r.doors.includes("residency")).length,
  private: rows.filter((r) => r.doors.includes("private")).length,
};
console.log("counts", counts);
console.log("grove");
for (const row of landingPhotos) {
  const hit = rows.find((r) => r.slug === row.slug);
  if (!hit) {
    console.log("  missing", row.slug);
    continue;
  }
  console.log(
    `  ${hit.slug.padEnd(28)} open=${hit.open} doors=${hit.doors.join("+")} chips=${publicChipsFor(hit.slug)
      .map((c) => c.label)
      .join(",")}`,
  );
}
console.log("sample closed", rows.filter((r) => !r.open).slice(0, 25).map((r) => r.slug).join(", "));
