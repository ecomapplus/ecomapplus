import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AtlasMap } from "@/components/atlas-map";
import { CommunityCard } from "@/components/community-card";
import { Pager } from "@/components/pager";
import { OpportunityCalendar } from "@/routes/calendar";
import {
  communities,
  legalCategories,
  paginate,
  parsePageParam,
  parseSortParam,
  sortCommunities,
  sortOptions,
  type SortKey,
} from "@/data/communities";
import { workStayFor } from "@/data/work-stay";
import { useCountryScope } from "@/lib/country-scope";

export type AtlasSearch = { page?: number; sort?: SortKey };
type AtlasFrom = "/" | "/atlas";

export function parseAtlasSearch(search: Record<string, unknown>): AtlasSearch {
  return {
    page: parsePageParam(search.page),
    sort: parseSortParam(search.sort),
  };
}

function readRandomKey() {
  try {
    const raw = sessionStorage.getItem("vc-random-sort");
    const n = raw ? Number(raw) : NaN;
    if (Number.isFinite(n)) return n;
  } catch {
    /* ignore */
  }
  const n = Math.random();
  try {
    sessionStorage.setItem("vc-random-sort", String(n));
  } catch {
    /* ignore */
  }
  return n;
}

function atlasSearch(page?: number, sort?: SortKey): AtlasSearch {
  const search: AtlasSearch = {};
  if (page && page > 1) search.page = page;
  if (sort && sort !== "random") search.sort = sort;
  return search;
}

export function AtlasDirectory({
  from,
  page: pageParam,
  sort: sortParam,
}: {
  from: AtlasFrom;
  page?: number;
  sort?: SortKey;
}) {
  const navigate = useNavigate();
  const scope = useCountryScope();
  const sort = sortParam ?? "random";
  const [randomKey, setRandomKey] = useState(1);
  const pool = useMemo(
    () => (scope ? communities.filter((row) => row.country === scope) : communities),
    [scope],
  );
  const visible = useMemo(() => sortCommunities(pool, sort, randomKey), [pool, sort, randomKey]);
  const paged = paginate(visible, pageParam ?? 1);

  useEffect(() => {
    setRandomKey(readRandomKey());
  }, []);

  useEffect(() => {
    if ((pageParam ?? 1) !== paged.page) {
      void navigate({
        to: from,
        search: atlasSearch(paged.page, sort),
        replace: true,
        resetScroll: false,
      });
    }
  }, [navigate, from, pageParam, paged.page, sort]);

  function goPage(n: number, opts?: { replace?: boolean; scroll?: boolean }) {
    void navigate({
      to: from,
      search: atlasSearch(n, sort),
      replace: opts?.replace,
      resetScroll: false,
    });
    if (opts?.scroll !== false) scrollToResults();
  }

  function changeSort(value: SortKey) {
    if (value === "random") {
      const n = Math.random();
      try {
        sessionStorage.setItem("vc-random-sort", String(n));
      } catch {
        /* ignore */
      }
      setRandomKey(n);
    }
    void navigate({
      to: from,
      search: atlasSearch(1, value),
      replace: true,
      resetScroll: false,
    });
    requestAnimationFrame(() => scrollToResults());
  }

  return (
    <main data-home={from === "/" ? "plus-atlas" : "atlas"} className="w-full flex-1">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Atlas</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
            {pool.length} eco-communities
          </h1>
        </div>

        <AtlasMap communities={visible} showRandom />

        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          <HeroStat label="Communities" value={String(pool.length)} />
          <HeroStat label="Countries" value={String(new Set(pool.map((c) => c.country)).size)} />
          <HeroStat label="Legal forms" value={String(legalCategories.length)} />
          <HeroStat label="Oldest" value={pool.length ? String(Math.min(...pool.map((c) => c.foundedYear))) : "—"} />
          <HeroStat
            label="Still active"
            value={`${pool.filter((c) => c.stillActive).length} of ${pool.length}`}
          />
          <HeroStat label="Work-stay" value={`${pool.filter((c) => workStayFor(c.slug)).length} of ${pool.length}`} />
        </dl>

        {from === "/" ? (
          <OpportunityCalendar embedded />
        ) : (
        <div id="atlas-results" className="scroll-mt-20">
          <div className="mt-8 max-w-md">
            <SelectField id="sort-by" label="Sort by" value={sort} onChange={(v) => changeSort(v as SortKey)}>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </SelectField>
          </div>
          <div className="mt-8">
            <Pager
              page={paged.page}
              pages={paged.pages}
              from={paged.from}
              to={paged.to}
              total={paged.total}
              onPage={(n) => goPage(n)}
            />
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paged.items.map((c, i) => (
              <li key={c.slug} id={i === 0 ? "atlas-first" : undefined} className={i === 0 ? "scroll-mt-20" : undefined}>
                <CommunityCard community={c} priority={i === 0} />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Pager
              page={paged.page}
              pages={paged.pages}
              from={paged.from}
              to={paged.to}
              total={paged.total}
              onPage={(n) => goPage(n)}
            />
          </div>
        </div>
        )}

        <p className="mt-10 text-sm text-muted">
          Want the legal-form overview?{" "}
          <Link to="/about" className="font-medium text-forest hover:underline">
            Read about this atlas
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

function scrollToResults() {
  const el = document.getElementById("atlas-results");
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
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
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      >
        {children}
      </select>
    </label>
  );
}
