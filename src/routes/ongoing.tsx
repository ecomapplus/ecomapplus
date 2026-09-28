import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { AtlasMap } from "@/components/atlas-map";
import { LockedDetailsCopy } from "@/components/locked-details";
import { getCommunity, type Community } from "@/data/communities";
import { openStays, type OpenStayType } from "@/data/open-stays";
import { compareCountries, useCountryScope } from "@/lib/country-scope";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/ongoing")({
  component: OngoingPage,
  head: () => ({
    meta: [
      { title: "Ongoing residencies and work-trade · EcoMapPlus" },
      {
        name: "description",
        content:
          "Residencies and work-trade with no fixed date. Filter them, see them on the map, and open the page where the village explains the stay.",
      },
    ],
  }),
});

const TYPE_LABEL: Record<OpenStayType, string> = {
  "work-trade": "Work-trade",
  residency: "Residency",
};

const TYPE_CHIP: Record<OpenStayType, string> = {
  "work-trade": "bg-gold text-ink",
  residency: "bg-residency text-cream",
};

function OngoingPage() {
  const plus = usePlusAccess();
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Open doors</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          Ongoing residencies and work-trade
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          These stays have no fixed date. Filter the list, find them on the map, and open the page where the village explains how to join.
        </p>
      </div>
      {plus ? <OngoingExplorer /> : (
        <div className="mt-8">
          <LockedDetailsCopy next="/ongoing" />
        </div>
      )}
    </main>
  );
}

function OngoingExplorer() {
  const scope = useCountryScope();
  const all = useMemo(
    () => openStays().filter((row) => !scope || row.country === scope),
    [scope],
  );
  const [country, setCountry] = useState("all");
  const [type, setType] = useState<OpenStayType | "all">("all");
  const [query, setQuery] = useState("");

  const countries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of all) {
      if (type !== "all" && row.type !== type) continue;
      counts.set(row.country, (counts.get(row.country) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => compareCountries(a[0], b[0]));
  }, [all, type]);
  const countryActive = countries.some(([name]) => name === country) ? country : "all";

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((row) => {
      if (countryActive !== "all" && row.country !== countryActive) return false;
      if (type !== "all" && row.type !== type) return false;
      if (!q) return true;
      return `${row.name} ${row.place} ${row.country} ${row.note}`.toLowerCase().includes(q);
    });
  }, [all, countryActive, type, query]);

  const mapped = useMemo(() => {
    const seen = new Set<string>();
    const list: Community[] = [];
    for (const row of visible) {
      if (seen.has(row.slug)) continue;
      seen.add(row.slug);
      const community = getCommunity(row.slug);
      if (community) list.push(community);
    }
    return list;
  }, [visible]);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-end gap-3">
        <label htmlFor="ongoing-q" className="flex min-w-[14rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs">
          <span className="font-medium text-fg">Search</span>
          <input
            id="ongoing-q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Village or place"
            className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
        <label htmlFor="ongoing-country" className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs sm:flex-none">
          <span className="font-medium text-fg">Country</span>
          <select
            id="ongoing-country"
            value={countryActive}
            onChange={(event) => setCountry(event.target.value)}
            className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <option value="all">All countries</option>
            {countries.map(([name, count]) => (
              <option key={name} value={name}>
                {name} ({count})
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ongoing-type" className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs sm:flex-none">
          <span className="font-medium text-fg">Type</span>
          <select
            id="ongoing-type"
            value={type}
            onChange={(event) => setType(event.target.value as OpenStayType | "all")}
            className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <option value="all">All types</option>
            <option value="work-trade">Work-trade</option>
            <option value="residency">Residency</option>
          </select>
        </label>
      </div>

      <p className="mt-3 text-sm text-muted">
        <span className="tabular-nums font-medium text-fg">{visible.length}</span>
        {visible.length === 1 ? " stay" : " stays"}
        {" · "}
        <span className="tabular-nums font-medium text-fg">{mapped.length}</span>
        {mapped.length === 1 ? " village" : " villages"} on the map.
      </p>

      <AtlasMap communities={mapped} />

      {visible.length === 0 ? (
        <p className="mt-8 text-muted">None match those filters.</p>
      ) : (
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {visible.map((row) => (
            <li key={row.id} className="py-4">
              <p>
                <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_CHIP[row.type]}`}>
                  {TYPE_LABEL[row.type]}
                </span>
              </p>
              <h2 className="mt-1 font-display text-xl text-fg">
                <Link to="/communities/$slug" params={{ slug: row.slug }} className="hover:underline">
                  {row.name}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-muted">
                {row.place}, {row.country}
              </p>
              <p className="mt-2 text-muted">{row.note}</p>
              <a
                href={row.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest hover:underline"
              >
                Their page
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
