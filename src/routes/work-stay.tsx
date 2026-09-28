import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { StatusBadge } from "@/components/inactive-badge";
import { LockedDirectoryRow } from "@/components/locked-details";
import { DatedEventRow } from "@/components/upcoming-events";
import { communityCount, getCommunity } from "@/data/communities";
import { isUnderway, upcomingEvents } from "@/data/events";
import { stayClass } from "@/data/stay-class";
import { workStayCount, workStayListings, type WorkStayListing } from "@/data/work-stay";
import { usePlusAccess } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/work-stay")({
  component: WorkStayIndex,
  head: () => ({
    meta: [
      { title: "Work-stay · ecocommunitymap.com" },
      {
        name: "description",
        content: `${workStayCount} eco-communities with a work-stay, volunteer, internship, or work-exchange door.`,
      },
    ],
  }),
});

type SortKey = "country" | "name" | "signup";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "country", label: "Country (A–Z)" },
  { value: "name", label: "Village (A–Z)" },
  { value: "signup", label: "Signup page first" },
];

function WorkStayIndex() {
  const scope = useCountryScope();
  const all = useMemo(
    () => workStayListings().filter((row) => !scope || row.community.country === scope),
    [scope],
  );
  const dated = useMemo(
    () =>
      upcomingEvents().filter(
        (row) =>
          stayClass(row) === "work-stay" &&
          !isUnderway(row) &&
          (!scope || getCommunity(row.slug)?.country === scope),
      ),
    [scope],
  );
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [signupOnly, setSignupOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("country");

  const countries = useMemo(
    () => Array.from(new Set(all.map((row) => row.community.country))).sort(compareCountries),
    [all],
  );
  const signupN = useMemo(() => all.filter((row) => row.program).length, [all]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = all.filter((row) => {
      if (country !== "all" && row.community.country !== country) return false;
      if (signupOnly && !row.program) return false;
      if (!q) return true;
      const hay = `${row.community.name} ${row.community.location} ${row.community.country} ${row.note}`.toLowerCase();
      return hay.includes(q);
    });
    const copy = [...filtered];
    copy.sort((a, b) => {
      if (sort === "name") return a.community.name.localeCompare(b.community.name);
      if (sort === "signup") {
        return (
          Number(Boolean(b.program)) - Number(Boolean(a.program)) ||
          a.community.country.localeCompare(b.community.country) ||
          a.community.name.localeCompare(b.community.name)
        );
      }
      return (
        a.community.country.localeCompare(b.community.country) ||
        a.community.name.localeCompare(b.community.name)
      );
    });
    return copy;
  }, [all, country, query, signupOnly, sort]);

  const groups = useMemo(() => {
    if (sort === "name") return [{ country: "", rows: visible }];
    const map = new Map<string, WorkStayListing[]>();
    for (const row of visible) {
      const list = map.get(row.community.country) ?? [];
      list.push(row);
      map.set(row.community.country, list);
    }
    return Array.from(map.entries()).map(([countryName, rows]) => ({ country: countryName, rows }));
  }, [visible, sort]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Work-stay</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          Villages you can work at
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every community in this atlas with a work-stay door: a volunteer, internship, or
          work-exchange program. Yellow on the map. Confirm dates with them before you go.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        <HeroStat label="Work-stay villages" value={String(all.length)} />
        <HeroStat label="Signup pages" value={String(signupN)} />
        <HeroStat label="Of the atlas" value={`${all.length} of ${communityCount}`} />
      </dl>

      <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label htmlFor="work-stay-q" className="flex flex-col gap-1.5 text-sm sm:col-span-2 lg:col-span-1">
            <span className="font-medium text-fg">Search</span>
            <input
              id="work-stay-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Village, place, or program"
              className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
          </label>
          <SelectField id="work-stay-country" label="Country" value={country} onChange={setCountry}>
            <option value="all">All countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </SelectField>
          <SelectField id="work-stay-sort" label="Sort by" value={sort} onChange={(v) => setSort(v as SortKey)}>
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectField>
          <label htmlFor="work-stay-signup" className="flex min-h-11 items-end gap-2 text-sm">
            <input
              id="work-stay-signup"
              type="checkbox"
              checked={signupOnly}
              onChange={(event) => setSignupOnly(event.target.checked)}
              className="size-4 accent-forest"
            />
            <span className="pb-3 font-medium text-fg">Signup page only</span>
          </label>
        </div>
        <p className="mt-3 text-sm text-muted">
          Showing <span className="tabular-nums font-medium text-fg">{visible.length}</span>
          {visible.length === 1 ? " village" : " villages"}
          {signupOnly ? " with a signup page on their own site" : ""}.
        </p>
      </div>

      {dated.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl text-fg">Dated work-stays</h2>
          <p className="mt-2 text-sm text-muted">
            Longer than one night, and the stay is built around work.
          </p>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {dated.map((row) => (
              <li key={`${row.slug}:${row.start}:${row.title}`} className="py-3">
                <DatedEventRow row={row} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">No work-stay villages match those filters.</p>
      ) : (
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <section key={group.country || "all"}>
              {group.country ? (
                <h2 className="font-display text-2xl text-fg">
                  {group.country}
                  <span className="ml-2 text-base font-sans font-medium tabular-nums text-subtle">
                    {group.rows.length}
                  </span>
                </h2>
              ) : null}
              <ul className={group.country ? "mt-4 divide-y divide-border border-t border-border" : "divide-y divide-border border-t border-border"}>
                {group.rows.map((row) => (
                  <li key={row.community.slug} className="py-4 sm:py-5">
                    <WorkStayRow row={row} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

function WorkStayRow({ row }: { row: WorkStayListing }) {
  const plus = usePlusAccess();
  const { community, program, note } = row;
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
          {program ? (
            <span className="rounded-full bg-gold/20 px-2 py-0.5 text-xs font-medium text-fg">Signup page</span>
          ) : (
            <span className="rounded-full bg-panel px-2 py-0.5 text-xs font-medium text-muted">Listed intern / volunteer</span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted">
          {community.location}
          {community.country && community.location.includes(community.country) ? "" : ` · ${community.country}`}
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
        {program ? (
          <a
            href={program.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
          >
            Apply
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
