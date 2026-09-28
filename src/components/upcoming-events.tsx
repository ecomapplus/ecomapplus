import { Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink } from "lucide-react";
import { LockedDirectoryRow } from "@/components/locked-details";
import { getCommunity } from "@/data/communities";
import { PlaceImagesLink } from "@/components/place-images-link";
import {
  eventKindLabel,
  formatEventWhen,
  upcomingEventsFor,
  type DatedEvent,
} from "@/data/events";
import { isCalendarEvent } from "@/data/stay-class";
import { usePlusAccess } from "@/lib/plus-membership";

export function DatedEventRow({
  row,
  showVillage = true,
}: {
  row: DatedEvent;
  showVillage?: boolean;
}) {
  const plus = usePlusAccess();
  const community = getCommunity(row.slug);
  if (!community) return null;
  if (!plus) return <LockedDirectoryRow community={community} />;
  return (
    <article className="flex flex-col gap-2">
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 max-w-2xl">
          <p className="text-sm font-medium tabular-nums text-moss">
            {formatEventWhen(row.start, row.end)}
            {row.unannounced ? (
              <span className="ml-2 inline-flex rounded-full bg-bg px-2 py-0.5 font-sans text-xs font-medium normal-case tracking-normal text-muted shadow-border">
                Not officially announced
              </span>
            ) : null}
            {row.kind ? (
              <span className="ml-2 font-sans text-xs font-medium uppercase tracking-wide text-subtle">
                {eventKindLabel[row.kind]}
              </span>
            ) : null}
          </p>
          <h3 className="mt-1 font-display text-xl leading-snug text-fg">{row.title}</h3>
          {showVillage ? (
            <p className="mt-1 text-sm text-muted">
              <Link
                to="/communities/$slug"
                params={{ slug: community.slug }}
                className="font-medium text-forest hover:underline"
              >
                {community.name}
              </Link>
              {` · ${community.location}`}
            </p>
          ) : (
            <p className="mt-1 text-sm text-muted">{community.location}</p>
          )}
          {row.blurb ? <p className="mt-2 leading-relaxed text-muted">{row.blurb}</p> : null}
          <PlaceImagesLink name={community.name} location={community.location} />
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {showVillage ? (
            <Link
              to="/communities/$slug"
              params={{ slug: community.slug }}
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-forest hover:underline"
            >
              Village
            </Link>
          ) : null}
          <a
            href={row.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
          >
            Details
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

/** Next public date, for atlas pin previews and the top of a village page. */
export function NextUpcomingEventCard({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const events = upcomingEventsFor(slug).filter(isCalendarEvent);
  if (events.length === 0) return null;
  const next = events[0];
  const more = events.length - 1;
  const when = formatEventWhen(next.start, next.end);

  return (
    <article
      className={`rounded-md border border-forest/25 bg-forest/5 ${compact ? "p-3" : "mt-4 p-4"}`}
    >
      <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-moss">
        <CalendarDays className="size-3.5" aria-hidden />
        Coming up
      </p>
      <p className="mt-1.5 text-sm font-medium tabular-nums text-forest">
        {when}
        {next.kind ? (
          <span className="ml-2 font-sans text-xs font-medium uppercase tracking-wide text-subtle">
            {eventKindLabel[next.kind]}
          </span>
        ) : null}
      </p>
      <h3
        className={`mt-1 font-display leading-snug text-fg ${compact ? "text-lg" : "text-xl"}`}
      >
        {next.title}
      </h3>
      {next.blurb ? (
        <p
          className={`mt-1.5 text-muted ${
            compact ? "text-sm leading-snug line-clamp-3" : "leading-relaxed"
          }`}
        >
          {next.blurb}
        </p>
      ) : null}
      {more > 0 ? (
        <p className="mt-2 text-xs text-muted">
          <Link
            to="/communities/$slug/doors"
            params={{ slug }}
            onClick={(event) => event.stopPropagation()}
            className="font-medium text-forest hover:underline"
          >
            See all open doors
          </Link>
        </p>
      ) : null}
      <div className={`flex flex-wrap gap-2 ${compact ? "mt-3" : "mt-4"}`}>
        {compact ? (
          <Link
            to="/communities/$slug"
            params={{ slug }}
            hash="events"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-forest hover:underline"
          >
            Village dates
          </Link>
        ) : (
          <a
            href="#events"
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-forest hover:underline"
          >
            All dates here
          </a>
        )}
        <a
          href={next.url}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
        >
          Details
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
      </div>
    </article>
  );
}

export function VillageUpcomingEvents({
  slug,
  events,
}: {
  slug: string;
  events: DatedEvent[];
}) {
  if (events.length === 0) return null;
  const community = getCommunity(slug);
  return (
    <section className="mt-12 scroll-mt-40" id="events">
      <h2 className="font-display text-2xl text-fg">Coming up</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Dates they have posted. Confirm with the village before you travel.
      </p>
      <ul className="mt-4 divide-y divide-border border-t border-border">
        {events.map((row) => (
          <li key={`${row.slug}-${row.start}-${row.title}`} className="py-4 sm:py-5">
            <DatedEventRow row={row} showVillage={false} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        <Link to="/events" className="font-medium text-forest hover:underline">
          All upcoming events
        </Link>
        {community ? ` across the atlas.` : "."}
      </p>
    </section>
  );
}
