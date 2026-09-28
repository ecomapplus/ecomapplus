import { BedDouble, Tent, Home } from "lucide-react";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { hasBookableStay } from "@/data/booking-stays";
import {
  accommodationsFor,
  guestProductTypes,
  isVisitorBedLane,
  stayLaneLabel,
  type StayKind,
  type StayLane,
  type StaySide,
} from "@/data/accommodations";

const kindIcons = {
  camping: Tent,
  rooms: BedDouble,
  other: Home,
} as const;

function LaneCard({ kind, lane }: { kind: StayKind; lane: StayLane }) {
  const Icon = kindIcons[kind];
  return (
    <li className="rounded-md bg-surface p-4 shadow-border">
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
        <Icon className="size-3.5" aria-hidden />
        {stayLaneLabel(kind, lane)}
      </p>
      {lane.types.length > 0 && kind !== "other" ? (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {lane.types.map((type) => (
            <li
              key={type}
              className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-medium text-forest"
            >
              {type}
            </li>
          ))}
        </ul>
      ) : kind === "other" && lane.types.length > 1 ? (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {lane.types.map((type) => (
            <li
              key={type}
              className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-medium text-forest"
            >
              {type}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-muted">{lane.detail}</p>
    </li>
  );
}

function alreadyCoversUnknown(text: string): boolean {
  return /\bno (public |tourist |municipal )?(guesthouse|guest house|b&b|inn|hotel|catalogue|published visitor|tourist rooms)\b|\bnot a (hotel|public resort|casa rural|booking)\b|\bovernight (lodging is not|is not the|is arranged)\b|\bno published visitor\b|\bdo not assume a spare room\b|\bbeds are not sold\b|\bnot (offered|sold) as\b/i.test(
    text,
  );
}

function mentionsABed(text: string): boolean {
  return /\b(guesthouse|guest house|guest room|guest housing|guest stay|b&b|inn|hotel|hostel|lodge|lodging|ecolodge|campground|camping|overnight|cabin|yurt|dorm|glamping|farm stay|short-term accommodation|volunteer housing)\b/i.test(
    text,
  );
}

function visitorLanes(side: StaySide): { kind: StayKind; lane: StayLane }[] {
  const camping = side.camping.available ? side.camping : null;
  const rooms = side.rooms.available ? side.rooms : null;
  const other = isVisitorBedLane("other", side.other) ? side.other : null;
  const guestTypes = (other?.types ?? []).filter((t) => guestProductTypes.has(t));
  const lanes: { kind: StayKind; lane: StayLane }[] = [];
  if (camping) lanes.push({ kind: "camping", lane: camping });
  if (rooms) {
    lanes.push({
      kind: "rooms",
      lane: guestTypes.length ? { ...rooms, types: guestTypes } : rooms,
    });
    return lanes;
  }
  if (other && guestTypes.length) {
    lanes.push({ kind: "other", lane: { ...other, types: guestTypes } });
  }
  return lanes;
}

const genericResidentRooms =
  /private dwellings: houses or units with rooms|members live in shared residences\. a room comes with membership|co-op dwellings\. you join, occupy a unit|people who live here occupy houses or rooms on the project/i;

function residentLanes(side: StaySide): { kind: StayKind; lane: StayLane }[] {
  const lanes: { kind: StayKind; lane: StayLane }[] = [];
  if (side.camping.available) lanes.push({ kind: "camping", lane: side.camping });
  if (side.rooms.available && !genericResidentRooms.test(side.rooms.detail)) {
    lanes.push({ kind: "rooms", lane: side.rooms });
  }
  if (side.other.available && side.other.types.length > 0) {
    const d = side.other.detail.toLowerCase();
    const notHowTheyLive =
      /family life is still|campus and the brand|teaching landscape/.test(d);
    if (!notHowTheyLive) lanes.push({ kind: "other", lane: side.other });
  }
  return lanes;
}

function StayBlock({
  title,
  side,
  role,
}: {
  title: string;
  side: StaySide;
  role: "visitor" | "resident";
}) {
  const lanes = role === "visitor" ? visitorLanes(side) : residentLanes(side);
  let overview = side.overview.trim();
  const unknownVisitor = role === "visitor" && lanes.length === 0;
  if (unknownVisitor && !overview) {
    overview = "No published visitor lodging of record.";
  } else if (
    unknownVisitor &&
    overview &&
    !alreadyCoversUnknown(overview) &&
    !mentionsABed(overview)
  ) {
    overview = overview.replace(/[.!?]?$/, ".") + " No published visitor lodging of record.";
  }

  return (
    <article>
      <h3 className="font-display text-xl text-fg">{title}</h3>
      <p className="mt-2 max-w-3xl leading-relaxed text-muted">{overview}</p>
      {lanes.length > 0 ? (
        <ul
          className={`mt-4 grid gap-3 ${
            lanes.length > 1 ? "sm:grid-cols-2" : ""
          } ${lanes.length > 2 ? "lg:grid-cols-3" : ""}`}
        >
          {lanes.map(({ kind, lane }) => (
            <LaneCard key={kind} kind={kind} lane={lane} />
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function AccommodationsSection({ slug }: { slug: string }) {
  const row = accommodationsFor(slug);
  const bookable = hasBookableStay(slug);
  return (
    <section className="mt-12 scroll-mt-40" id="stay">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-display text-2xl text-fg">Where people sleep</h2>
        <BookingStayChip slug={slug} />
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        {bookable
          ? "This village publishes an official page where a stranger can book a night. Tap the blue badge for a preview, tap again to open their booking page. Confirm before you travel."
          : slug === "sabbathday-lake" || slug === "findhorn" || slug === "twin-oaks" || slug === "the-farm" || slug === "willow-witt" || slug === "embercombe" || slug === "polyface" || slug === "juneberry-ridge" || slug === "riverside-oasis" || slug === "serenbe" || slug === "belterra" || slug === "shelburne-farms" || slug === "hawkwood" || slug === "yogaville" || slug === "rio-oro" || slug === "carate-base-camp" || slug === "earthaven" || slug === "monkton-wyld" || slug === "lost-valley"
            ? "What we could find about a visitor bed, and how residents live. If nothing is published, we say so. Confirm before you travel."
            : "What we could find about a visitor bed, and how residents live. If nothing is published, we say so. Confirm before you travel. This is not a booking engine."}
      </p>
      <div className="mt-8 grid gap-10">
        <StayBlock title="Visitor accommodations" side={row.visitor} role="visitor" />
        <StayBlock title="Resident accommodations" side={row.resident} role="resident" />
      </div>
    </section>
  );
}
