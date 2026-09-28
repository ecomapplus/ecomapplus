import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { DoorLetter } from "@/components/door-letter";
import { accommodationsFor, type StayLane } from "@/data/accommodations";
import { bookingFor, bookingHost } from "@/data/booking-stays";
import { getCommunity } from "@/data/communities";
import {
  eventCalendarBySlug,
  eventKindLabel,
  formatEventWhen,
  isUnderway,
  upcomingEventsFor,
  type DatedEvent,
} from "@/data/events";
import { publicFlagLabel, publicFlagOrder, type PublicFlag } from "@/data/public-flags";
import { upcomingResidenciesFor, residencyFor, trialStayUrl } from "@/data/residencies";
import { isCalendarEvent, stayClass } from "@/data/stay-class";
import { easeLabels } from "@/data/visit-join";
import { visitDoorLabel, visitDoorsFor } from "@/data/visit-types";
import { workStayFor } from "@/data/work-stay";

function OutLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
    >
      {children}
      <ExternalLink className="size-3.5" aria-hidden />
    </a>
  );
}

const headTone: Record<PublicFlag, string> = {
  "work-stay": "text-ink",
  event: "text-danger-deep",
  overnight: "text-stay-deep",
  residency: "text-residency-deep",
};

type DoorItem = {
  id: string;
  flag: PublicFlag;
  title: string;
  event?: DatedEvent;
  lane?: string;
};

function visitorLanes(slug: string) {
  const beds = accommodationsFor(slug);
  return [
    beds.visitor.camping.available ? { label: "Camping", lane: beds.visitor.camping } : null,
    beds.visitor.rooms.available ? { label: "Rooms", lane: beds.visitor.rooms } : null,
    beds.visitor.other.available && beds.visitor.other.types.length > 0
      ? { label: "Other lodging", lane: beds.visitor.other }
      : null,
  ].filter((row): row is { label: string; lane: StayLane } => Boolean(row));
}

function doorColumns(slug: string): { flag: PublicFlag; items: DoorItem[] }[] {
  const doors = visitDoorsFor(slug);
  const residencies = upcomingResidenciesFor(slug);
  const residencyKeys = new Set(residencies.map((row) => `${row.start}:${row.title}`));
  const dated = upcomingEventsFor(slug);
  const events = dated.filter(
    (row) => isCalendarEvent(row) && !residencyKeys.has(`${row.start}:${row.title}`),
  );
  const workDates = dated.filter((row) => stayClass(row) === "work-stay" && !isUnderway(row));

  const work: DoorItem[] = [
    ...(doors.includes("work-stay")
      ? [{ id: "work-stay", flag: "work-stay" as const, title: "Work-stay" }]
      : []),
    ...workDates.map((row) => ({
      id: `work:${row.start}:${row.title}`,
      flag: "work-stay" as const,
      title: row.title,
      event: row,
    })),
  ];

  const eventItems: DoorItem[] = events.map((row) => ({
    id: `event:${row.start}:${row.title}`,
    flag: "event",
    title: row.title,
    event: row,
  }));

  const lanes = doors.includes("overnight") ? visitorLanes(slug) : [];
  const nights: DoorItem[] = doors.includes("overnight")
    ? lanes.length > 0
      ? lanes.map((row) => ({ id: `overnight:${row.label}`, flag: "overnight", title: row.label, lane: row.label }))
      : [{ id: "overnight", flag: "overnight", title: "Book a night" }]
    : [];

  const trials: DoorItem[] =
    residencies.length > 0
      ? residencies.map((row) => ({
          id: `residency:${row.start}:${row.title}`,
          flag: "residency",
          title: row.title,
          event: row,
        }))
      : doors.includes("residency")
        ? [{ id: "residency", flag: "residency", title: "Trial stay" }]
        : [];

  const byFlag: Record<PublicFlag, DoorItem[]> = {
    "work-stay": work,
    event: eventItems,
    overnight: nights,
    residency: trials,
  };
  return publicFlagOrder.map((flag) => ({ flag, items: byFlag[flag] }));
}

export function titlesForDoor(slug: string, flag: PublicFlag): string[] {
  return doorColumns(slug).find((column) => column.flag === flag)?.items.map((item) => item.title) ?? [];
}

function DoorDetail({ slug, village, item }: { slug: string; village: string; item: DoorItem }) {
  const calendar = eventCalendarBySlug[slug];
  const work = workStayFor(slug);
  const residency = residencyFor(slug);
  const stay = bookingFor(slug);
  const lane = item.lane ? visitorLanes(slug).find((row) => row.label === item.lane) : undefined;
  const hideStay =
    (item.flag === "work-stay" || item.flag === "residency") &&
    (item.event ? isUnderway(item.event) : upcomingEventsFor(slug).some((row) => stayClass(row) === (item.flag === "work-stay" ? "work-stay" : "residency") && isUnderway(row)));
  if (hideStay) return null;

  return (
    <div className="mt-3 rounded-md border border-border bg-surface p-3">
      <p className={`text-xs font-medium uppercase tracking-[0.14em] ${headTone[item.flag]}`}>
        {publicFlagLabel[item.flag]}
      </p>
      <p className="mt-1 font-display text-lg leading-snug text-fg">{item.title}</p>

      {item.event ? (
        <div className="mt-2">
          <p className="text-sm font-medium tabular-nums text-moss">
            {formatEventWhen(item.event.start, item.event.end)}
            {item.event.unannounced ? (
              <span className="ml-2 inline-flex rounded-full bg-bg px-2 py-0.5 font-sans text-xs font-medium normal-case tracking-normal text-muted shadow-border">
                Not officially announced
              </span>
            ) : null}
            {item.event.kind ? (
              <span className="ml-2 font-sans text-xs font-medium uppercase tracking-wide text-subtle">
                {eventKindLabel[item.event.kind]}
              </span>
            ) : null}
          </p>
          {item.event.blurb ? <p className="mt-2 text-sm leading-relaxed text-muted">{item.event.blurb}</p> : null}
          {item.event.url ? <OutLink href={item.event.url}>Event page</OutLink> : null}
        </div>
      ) : null}

      {item.flag === "event" && calendar ? <OutLink href={calendar}>Event calendar</OutLink> : null}

      {item.flag === "work-stay" && work ? (
        <>
          <p className="mt-2 text-sm leading-relaxed text-muted">{work.note}</p>
          {work.program ? <OutLink href={work.program.url}>Work-stay signup</OutLink> : null}
        </>
      ) : null}

      {item.flag === "residency" && residency ? (
        <>
          {residency.joinEase ? (
            <p className="mt-2 text-sm text-muted">
              Ease of joining: <span className="font-medium text-fg">{easeLabels[residency.joinEase]}</span>
            </p>
          ) : null}
          <p className="mt-2 text-sm leading-relaxed text-muted">{residency.note}</p>
          {trialStayUrl(slug) ? <OutLink href={trialStayUrl(slug)!}>Trial stay</OutLink> : null}
        </>
      ) : null}

      {item.flag === "overnight" ? (
        <>
          {stay ? (
            <>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stay.note}</p>
              <p className="mt-2 text-sm text-muted">
                Book on <span className="font-medium text-fg">{bookingHost(stay.url)}</span>
              </p>
              <OutLink href={stay.url}>Book a night</OutLink>
            </>
          ) : null}
          {lane ? (
            <div className="mt-3 rounded-md bg-panel p-3">
              {lane.lane.types.length > 0 ? (
                <p className="text-sm font-medium text-fg">{lane.lane.types.join(" · ")}</p>
              ) : null}
              <p className="mt-1 text-sm leading-relaxed text-muted">{lane.lane.detail}</p>
            </div>
          ) : null}
        </>
      ) : null}

      <DoorLetter slug={slug} village={village} door={item.flag} />
    </div>
  );
}

export function VillageDoorsPanel({
  slug,
  compact = false,
  all = false,
}: {
  slug: string;
  compact?: boolean;
  all?: boolean;
}) {
  const village = getCommunity(slug)?.name ?? "this village";
  const columns = doorColumns(slug);
  const [openId, setOpenId] = useState<string | null>(null);
  const open = columns.flatMap((column) => column.items).find((item) => item.id === openId) ?? null;
  const extra = columns.reduce((sum, column) => sum + Math.max(0, column.items.length - 1), 0);

  return (
    <section id="open-doors" className={compact ? "" : "mt-4 scroll-mt-40"}>
      {compact || all ? null : <h2 className="font-display text-2xl text-fg">Open doors</h2>}
      {all ? (
        <div className="flex flex-col gap-8">
          {columns.filter((column) => column.items.length > 0).map((column) => (
            <div key={column.flag}>
              <h2 className={`font-display text-2xl ${headTone[column.flag]}`}>{visitDoorLabel[column.flag]}</h2>
              {column.items.length === 0 ? (
                <p className="mt-2 text-sm text-subtle">None</p>
              ) : (
                <ul className="mt-3 divide-y divide-border border-y border-border">
                  {column.items.map((item) => (
                    <li key={item.id} className="py-3">
                      <button
                        type="button"
                        aria-expanded={item.id === openId}
                        onClick={() => setOpenId(item.id === openId ? null : item.id)}
                        className="w-full text-left"
                      >
                        <span className="font-display text-lg text-fg">{item.title}</span>
                        {item.event ? (
                          <span className="mt-1 block text-sm tabular-nums text-muted">
                            {formatEventWhen(item.event.start, item.event.end)}
                          </span>
                        ) : null}
                      </button>
                      {item.id === openId ? <DoorDetail slug={slug} village={village} item={item} /> : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
      <div className={`grid grid-cols-4 gap-2 ${compact ? "" : "mt-3"}`}>
        {columns.map((column) => {
          const shown = column.items.slice(0, 1);
          return (
            <div key={column.flag} className="min-w-0">
              <p className={`text-[10px] font-medium uppercase leading-tight tracking-wide ${headTone[column.flag]}`}>
                {visitDoorLabel[column.flag]}
              </p>
              {shown.length === 0 ? (
                <p className="mt-1 text-xs text-subtle">None</p>
              ) : (
                <ul className="mt-1 space-y-1">
                  {shown.map((item) => {
                    const selected = item.id === openId;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          aria-expanded={selected}
                          onClick={() => setOpenId(selected ? null : item.id)}
                          className={`w-full rounded-md px-1 py-1 text-left text-xs font-medium leading-snug ${
                            selected ? "bg-panel text-fg" : "text-fg hover:bg-panel"
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      )}
      {all ? null : open ? <DoorDetail slug={slug} village={village} item={open} /> : null}
      {all || extra === 0 ? null : (
        <Link
          to="/communities/$slug/doors"
          params={{ slug }}
          onClick={(event) => event.stopPropagation()}
          className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
        >
          See all open doors
        </Link>
      )}
    </section>
  );
}
