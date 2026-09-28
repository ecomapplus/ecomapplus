import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AtlasMap } from "@/components/atlas-map";
import { LockedDetailsCopy } from "@/components/locked-details";
import { getCommunity } from "@/data/communities";
import { formatEventWhen } from "@/data/events";
import {
  inVisitRegion,
  visitorPrograms,
  type VisitRegion,
} from "@/data/visitor-programs";
import { usePlusAccess } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/visits")({
  component: VisitsPage,
  head: () => ({
    meta: [
      { title: "Visitor programs · EcoMapPlus" },
      {
        name: "description",
        content: "Dated visitor programs, with length and the published price.",
      },
    ],
  }),
});

type SortKey = "date" | "length" | "price";

const regions: { id: VisitRegion; label: string }[] = [
  { id: "all", label: "All" },
  { id: "north-america", label: "North America" },
  { id: "usa", label: "USA" },
];

function VisitsPage() {
  const plus = usePlusAccess();
  const scope = useCountryScope();
  const all = useMemo(
    () => visitorPrograms().filter((row) => !scope || row.country === scope),
    [scope],
  );
  const [region, setRegion] = useState<VisitRegion>("all");
  const [country, setCountry] = useState("all");
  const [sort, setSort] = useState<SortKey>("date");
  const [dir, setDir] = useState<1 | -1>(1);
  const [mapOpen, setMapOpen] = useState(false);

  const countries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of all) {
      if (!inVisitRegion(row.country, region)) continue;
      counts.set(row.country, (counts.get(row.country) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => compareCountries(a[0], b[0]));
  }, [all, region]);

  const rows = useMemo(() => {
    const list = all.filter(
      (row) => inVisitRegion(row.country, region) && (country === "all" || row.country === country),
    );
    list.sort((a, b) => {
      if (sort === "price") {
        if (a.priceUsd == null && b.priceUsd == null) return a.name.localeCompare(b.name);
        if (a.priceUsd == null) return 1;
        if (b.priceUsd == null) return -1;
        const priced = (a.priceUsd - b.priceUsd) * dir;
        if (priced !== 0) return priced;
      } else {
        const base = sort === "length" ? a.days - b.days : a.start.localeCompare(b.start);
        const ordered = base * dir;
        if (ordered !== 0) return ordered;
      }
      return a.start.localeCompare(b.start) || a.name.localeCompare(b.name);
    });
    return list;
  }, [all, region, country, sort, dir]);

  const mapped = useMemo(() => {
    const slugs = new Set(rows.map((row) => row.slug));
    return [...slugs].map((slug) => getCommunity(slug)).filter((row) => row != null);
  }, [rows]);

  function pickSort(next: SortKey) {
    if (next === sort) {
      setDir((current) => (current === 1 ? -1 : 1));
      return;
    }
    setSort(next);
    setDir(next === "length" ? -1 : 1);
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Visitor programs</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Come and stay</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Dated overnight visitor programs still ahead. A tour or open afternoon that ends the same day is not listed. Length is the published stay. Price is what the host lists.
          A blank price sorts last.
        </p>
      </div>

      {plus ? (
        <>
          <div className="mt-8 flex flex-wrap items-end gap-3">
            <label htmlFor="visit-country" className="flex min-w-[16rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs sm:flex-none">
              <span className="font-medium text-fg">Country</span>
              <select
                id="visit-country"
                value={country}
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
            {mapOpen ? null : (
              <button
                type="button"
                onClick={() => setMapOpen(true)}
                className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
              >
                Open map
              </button>
            )}
          </div>

          {mapOpen ? (
            <div className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Region">
                  {regions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={region === item.id}
                      onClick={() => {
                        setRegion(item.id);
                        setCountry("all");
                      }}
                      className={
                        region === item.id
                          ? "inline-flex min-h-11 items-center rounded-md bg-forest px-3 text-sm font-medium text-cream"
                          : "inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setMapOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
                >
                  Minimize map
                </button>
              </div>
              <AtlasMap communities={mapped} lockView />
            </div>
          ) : null}

          <div className="mt-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-surface text-xs uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-3 py-3 font-medium">Village</th>
                  <th className="px-3 py-3 font-medium">Program</th>
                  <SortHead label="Dates" active={sort === "date"} dir={dir} onClick={() => pickSort("date")} />
                  <SortHead label="Length" active={sort === "length"} dir={dir} onClick={() => pickSort("length")} />
                  <SortHead label="Price" active={sort === "price"} dir={dir} onClick={() => pickSort("price")} />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.slug}:${row.start}:${row.title}`} className="border-t border-border">
                    <td className="px-3 py-3">
                      <Link to="/communities/$slug" params={{ slug: row.slug }} className="font-medium text-fg hover:underline">
                        {row.name}
                      </Link>
                      <span className="mt-0.5 block text-xs text-muted">{row.country}</span>
                    </td>
                    <td className="px-3 py-3">
                      <a href={row.url} target="_blank" rel="noreferrer" className="text-forest hover:underline">
                        {row.title}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-fg">{formatEventWhen(row.start, row.end)}</td>
                    <td className="whitespace-nowrap px-3 py-3 text-fg">{row.days === 1 ? "1 day" : `${row.days} days`}</td>
                    <td className="px-3 py-3 text-fg">{row.priceLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {rows.length === 0 ? (
              <p className="px-3 py-6 text-muted">
                {country !== "all" ? `No visitor programs in ${country}.` : "No visitor programs in that region."}
              </p>
            ) : null}
          </div>
          <p className="mt-3 text-sm text-muted">{rows.length} programs</p>
        </>
      ) : (
        <div className="mt-8 max-w-md">
          <LockedDetailsCopy next="/visits" />
        </div>
      )}
    </main>
  );
}

function SortHead({
  label,
  active,
  dir,
  onClick,
}: {
  label: string;
  active: boolean;
  dir: 1 | -1;
  onClick: () => void;
}) {
  return (
    <th className="px-3 py-3 font-medium">
      <button type="button" onClick={onClick} className="inline-flex min-h-11 items-center gap-1 uppercase tracking-[0.12em]">
        {label}
        <span aria-hidden>{active ? (dir === 1 ? "↑" : "↓") : ""}</span>
      </button>
    </th>
  );
}
