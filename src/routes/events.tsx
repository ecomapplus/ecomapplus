import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { StatusBadge } from "@/components/inactive-badge";
import { LockedDirectoryRow } from "@/components/locked-details";
import { DatedEventRow } from "@/components/upcoming-events";
import { getCommunity } from "@/data/communities";
import { isCalendarEvent } from "@/data/stay-class";
import {
  eventCalendarBySlug,
  eventKindLabel,
  eventListings,
  eventVillageCount,
  datedVillageCount,
  groupEventsByMonth,
  upcomingEvents,
  type EventKind,
  type EventListing,
} from "@/data/events";
import { usePlusAccess } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/events")({
  component: EventsIndex,
  head: () => ({
    meta: [
      { title: "Events · ecocommunitymap.com" },
      {
        name: "description",
        content: `Upcoming courses, festivals, and open days from ${eventVillageCount} eco-communities that host public events.`,
      },
    ],
  }),
});

const kindOptions: { value: EventKind | "all"; label: string }[] = [
  { value: "all", label: "All kinds" },
  ...(Object.entries(eventKindLabel) as [EventKind, string][]).map(([value, label]) => ({
    value,
    label,
  })),
];

function EventsIndex() {
  const scope = useCountryScope();
  const dated = useMemo(
    () =>
      upcomingEvents().filter((row) => {
        if (!isCalendarEvent(row)) return false;
        if (!scope) return true;
        return getCommunity(row.slug)?.country === scope;
      }),
    [scope],
  );
  const villages = useMemo(
    () => eventListings().filter((row) => !scope || row.community.country === scope),
    [scope],
  );
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [month, setMonth] = useState("all");
  const [kind, setKind] = useState<EventKind | "all">("all");

  const countries = useMemo(() => {
    const set = new Set<string>();
    for (const row of villages) set.add(row.community.country);
    for (const row of dated) {
      const community = getCommunity(row.slug);
      if (community) set.add(community.country);
    }
    return Array.from(set).sort(compareCountries);
  }, [villages, dated]);

  const months = useMemo(() => groupEventsByMonth(dated).map((g) => g.month), [dated]);

  const visibleDated = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dated.filter((row) => {
      const community = getCommunity(row.slug);
      if (!community) return false;
      if (country !== "all" && community.country !== country) return false;
      if (month !== "all" && row.start.slice(0, 7) !== month) return false;
      if (kind !== "all" && row.kind !== kind) return false;
      if (!q) return true;
      const hay =
        `${row.title} ${row.blurb ?? ""} ${community.name} ${community.location} ${community.country}`.toLowerCase();
      return hay.includes(q);
    });
  }, [dated, query, country, month, kind]);

  const monthGroups = useMemo(() => groupEventsByMonth(visibleDated), [visibleDated]);

  const visibleVillages = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = villages.filter((row) => {
      if (country !== "all" && row.community.country !== country) return false;
      if (!q) return true;
      const hay = `${row.community.name} ${row.community.location} ${row.community.country} ${row.note}`.toLowerCase();
      return hay.includes(q);
    });
    const map = new Map<string, EventListing[]>();
    for (const row of filtered) {
      const list = map.get(row.community.country) ?? [];
      list.push(row);
      map.set(row.community.country, list);
    }
    return Array.from(map.entries()).map(([countryName, rows]) => ({ country: countryName, rows }));
  }, [villages, query, country]);

  const villageN = visibleVillages.reduce((n, g) => n + g.rows.length, 0);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Events</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          What’s on at the villages
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Dated courses, festivals, tours, and open days. A date tagged Not officially announced is a yearly programme projected into 2027, not a date the village has posted. A retreat or stay longer than one night is a residency if it costs money, or a work-stay if it is free and you work. Confirm with the village before you travel — programmes move.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        <HeroStat label="Upcoming dates" value={String(dated.length)} />
        <HeroStat label="Villages with dates" value={String(datedVillageCount)} />
        <HeroStat label="Event villages" value={String(villages.length)} />
        <HeroStat label="Official calendars" value={String(Object.keys(eventCalendarBySlug).length)} />
      </dl>

      <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label htmlFor="events-q" className="flex flex-col gap-1.5 text-sm sm:col-span-2 lg:col-span-1">
            <span className="font-medium text-fg">Search</span>
            <input
              id="events-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Village, place, or event"
              className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
          </label>
          <SelectField id="events-month" label="Month" value={month} onChange={setMonth}>
            <option value="all">All months</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
                  new Date(`${m}-01T12:00:00`),
                )}
              </option>
            ))}
          </SelectField>
          <SelectField id="events-country" label="Country" value={country} onChange={setCountry}>
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </SelectField>
          <SelectField
            id="events-kind"
            label="Kind"
            value={kind}
            onChange={(v) => setKind(v as EventKind | "all")}
          >
            {kindOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Upcoming</h2>
        <p className="mt-2 text-sm text-muted">
          Showing <span className="tabular-nums font-medium text-fg">{visibleDated.length}</span>
          {visibleDated.length === 1 ? " date" : " dates"} from official village calendars.
        </p>
        {visibleDated.length === 0 ? (
          <p className="mt-6 text-muted">No dated events match those filters.</p>
        ) : (
          <div className="mt-8 space-y-10">
            {monthGroups.map((group) => (
              <section key={group.month}>
                <h3 className="font-display text-xl text-fg" aria-label={`${group.label}, ${group.events.length} events`}>
                  {group.label}
                  <span className="ml-2 text-base font-sans font-medium tabular-nums text-subtle" aria-hidden>
                    {group.events.length}
                  </span>
                </h3>
                <ul className="mt-4 divide-y divide-border border-t border-border">
                  {group.events.map((row) => (
                    <li key={`${row.slug}-${row.start}-${row.title}`} className="py-4 sm:py-5">
                      <DatedEventRow row={row} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-fg">Every event village</h2>
        <p className="mt-2 text-sm text-muted">
          {villageN} {villageN === 1 ? "village" : "villages"} with a public course, seminar, or event
          door. Open their calendar when they publish one.
        </p>
        {visibleVillages.length === 0 ? (
          <p className="mt-6 text-muted">No event villages match those filters.</p>
        ) : (
          <div className="mt-8 space-y-10">
            {visibleVillages.map((group) => (
              <section key={group.country}>
                <h3 className="font-display text-xl text-fg">
                  {group.country}
                  <span className="ml-2 text-base font-sans font-medium tabular-nums text-subtle">
                    {group.rows.length}
                  </span>
                </h3>
                <ul className="mt-4 divide-y divide-border border-t border-border">
                  {group.rows.map((row) => (
                    <li key={row.community.slug} className="py-4 sm:py-5">
                      <VillageRow row={row} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function VillageRow({ row }: { row: EventListing }) {
  const plus = usePlusAccess();
  const { community, note, calendarUrl } = row;
  if (!plus) return <LockedDirectoryRow community={community} />;
  return (
    <article className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/communities/$slug"
            params={{ slug: community.slug }}
            className="font-display text-xl leading-snug text-fg hover:underline"
          >
            {community.name}
          </Link>
          {community.stillActive ? null : <StatusBadge active={false} size="compact" />}
        </div>
        <p className="mt-1 text-sm text-muted">
          {community.location}
          {community.location.includes(community.country) ? "" : ` · ${community.country}`}
        </p>
        <p className="mt-2 leading-relaxed text-muted">{note}</p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <Link
          to="/communities/$slug"
          params={{ slug: community.slug }}
          className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-forest hover:underline"
        >
          Village
        </Link>
        {calendarUrl ? (
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
          >
            Calendar
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-3 py-2">
      <dt className="text-xs uppercase tracking-wide text-subtle">{label}</dt>
      <dd className="mt-0.5 font-display text-lg leading-tight text-fg">{value}</dd>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-fg">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      >
        {children}
      </select>
    </label>
  );
}
