import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { StatusBadge } from "@/components/inactive-badge";
import { LockedDirectoryRow } from "@/components/locked-details";
import { DatedEventRow } from "@/components/upcoming-events";
import { getCommunity, communityCount } from "@/data/communities";
import { easeLabels } from "@/data/visit-join";
import { groupEventsByMonth } from "@/data/events";
import {
  datedResidencyVillageCount,
  residencyCount,
  residencyListings,
  upcomingResidencies,
  type ResidencyListing,
} from "@/data/residencies";
import { usePlusAccess } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/residencies")({
  component: ResidenciesIndex,
  head: () => ({
    meta: [
      { title: "Residencies · ecocommunitymap.com" },
      {
        name: "description",
        content: `Current membership-trial paths and upcoming live-in visitor programmes from ${residencyCount} eco-communities.`,
      },
    ],
  }),
});

type SortKey = "country" | "name" | "join";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "country", label: "Country (A–Z)" },
  { value: "name", label: "Village (A–Z)" },
  { value: "join", label: "Easier to join first" },
];

function ResidenciesIndex() {
  const scope = useCountryScope();
  const dated = useMemo(
    () => upcomingResidencies().filter((row) => !scope || getCommunity(row.slug)?.country === scope),
    [scope],
  );
  const villages = useMemo(
    () => residencyListings().filter((row) => !scope || row.community.country === scope),
    [scope],
  );
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [month, setMonth] = useState("all");
  const [sort, setSort] = useState<SortKey>("country");
  const [activeOnly, setActiveOnly] = useState(true);

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
      if (activeOnly && !community.stillActive) return false;
      if (country !== "all" && community.country !== country) return false;
      if (month !== "all" && row.start.slice(0, 7) !== month) return false;
      if (!q) return true;
      const hay =
        `${row.title} ${row.blurb ?? ""} ${community.name} ${community.location} ${community.country}`.toLowerCase();
      return hay.includes(q);
    });
  }, [dated, query, country, month, activeOnly]);

  const monthGroups = useMemo(() => groupEventsByMonth(visibleDated), [visibleDated]);

  const visibleVillages = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = villages.filter((row) => {
      if (activeOnly && !row.community.stillActive) return false;
      if (country !== "all" && row.community.country !== country) return false;
      if (!q) return true;
      const hay =
        `${row.community.name} ${row.community.location} ${row.community.country} ${row.note}`.toLowerCase();
      return hay.includes(q);
    });
    const copy = [...filtered];
    copy.sort((a, b) => {
      if (sort === "name") return a.community.name.localeCompare(b.community.name);
      if (sort === "join") {
        const ae = a.joinEase ?? 9;
        const be = b.joinEase ?? 9;
        return be - ae || a.community.name.localeCompare(b.community.name);
      }
      return (
        a.community.country.localeCompare(b.community.country) ||
        a.community.name.localeCompare(b.community.name)
      );
    });
    return copy;
  }, [villages, query, country, sort, activeOnly]);

  const groups = useMemo(() => {
    if (sort === "name" || sort === "join") return [{ country: "", rows: visibleVillages }];
    const map = new Map<string, ResidencyListing[]>();
    for (const row of visibleVillages) {
      const list = map.get(row.community.country) ?? [];
      list.push(row);
      map.set(row.community.country, list);
    }
    return Array.from(map.entries()).map(([countryName, rows]) => ({ country: countryName, rows }));
  }, [visibleVillages, sort]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Residencies</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          Live-in paths at the villages
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Current membership-trial residencies, plus dated visitor programmes, experience weeks,
          and community-service stays copied from official calendars. Purple on the map. Confirm
          with the village before you travel — intakes close, and a guest week is not a key.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        <HeroStat label="Upcoming dates" value={String(dated.length)} />
        <HeroStat label="Villages with dates" value={String(datedResidencyVillageCount)} />
        <HeroStat label="Residency villages" value={String(villages.length)} />
        <HeroStat label="Of the atlas" value={`${residencyCount} of ${communityCount}`} />
      </dl>

      <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label htmlFor="residencies-q" className="flex flex-col gap-1.5 text-sm sm:col-span-2 lg:col-span-1">
            <span className="font-medium text-fg">Search</span>
            <input
              id="residencies-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Village, place, or programme"
              className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
          </label>
          <SelectField id="residencies-month" label="Month" value={month} onChange={setMonth}>
            <option value="all">All months</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
                  new Date(`${m}-01T12:00:00`),
                )}
              </option>
            ))}
          </SelectField>
          <SelectField id="residencies-country" label="Country" value={country} onChange={setCountry}>
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </SelectField>
          <SelectField
            id="residencies-sort"
            label="Sort villages by"
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
        </div>
        <label htmlFor="residencies-active" className="mt-3 flex min-h-11 items-center gap-2 text-sm">
          <input
            id="residencies-active"
            type="checkbox"
            checked={activeOnly}
            onChange={(event) => setActiveOnly(event.target.checked)}
            className="size-4 accent-forest"
          />
          <span className="font-medium text-fg">Still-active villages only</span>
        </label>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-fg">Upcoming</h2>
        <p className="mt-2 text-sm text-muted">
          Showing <span className="tabular-nums font-medium text-fg">{visibleDated.length}</span>
          {visibleDated.length === 1 ? " dated residency" : " dated residencies"} from official
          village calendars.
        </p>
        {visibleDated.length === 0 ? (
          <p className="mt-6 text-muted">No dated residencies match those filters.</p>
        ) : (
          <div className="mt-8 space-y-10">
            {monthGroups.map((group) => (
              <section key={group.month}>
                <h3
                  className="font-display text-xl text-fg"
                  aria-label={`${group.label}, ${group.events.length} ${group.events.length === 1 ? "residency" : "residencies"}`}
                >
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
        <h2 className="font-display text-2xl text-fg">Open join paths</h2>
        <p className="mt-2 text-sm text-muted">
          {visibleVillages.length} {visibleVillages.length === 1 ? "village" : "villages"} with a
          membership trial or residency door. A visit is not automatically a yes.
        </p>
        {visibleVillages.length === 0 ? (
          <p className="mt-6 text-muted">No residency villages match those filters.</p>
        ) : (
          <div className="mt-8 space-y-10">
            {groups.map((group) => (
              <section key={group.country || "all"}>
                {group.country ? (
                  <h3 className="font-display text-xl text-fg">
                    {group.country}
                    <span className="ml-2 text-base font-sans font-medium tabular-nums text-subtle">
                      {group.rows.length}
                    </span>
                  </h3>
                ) : null}
                <ul
                  className={
                    group.country
                      ? "mt-4 divide-y divide-border border-t border-border"
                      : "divide-y divide-border border-t border-border"
                  }
                >
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

function VillageRow({ row }: { row: ResidencyListing }) {
  const plus = usePlusAccess();
  const { community, note, applyUrl, joinEase } = row;
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
          <span className="rounded-full bg-residency/15 px-2 py-0.5 text-xs font-medium text-residency-deep">
            Residency
          </span>
          {joinEase ? (
            <span className="rounded-full bg-panel px-2 py-0.5 text-xs font-medium text-muted">
              Join: {easeLabels[joinEase]}
            </span>
          ) : null}
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
        {applyUrl ? (
          <a
            href={applyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
          >
            Site
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
