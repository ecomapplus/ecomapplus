import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { StatusBadge } from "@/components/inactive-badge";
import { LockedDetailsCopy } from "@/components/locked-details";
import { communities, communityCount, type Community } from "@/data/communities";
import { letterCount, letterFor, type CommunityLetter } from "@/data/newsletters";
import { usePlusAccess } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/newsletters")({
  component: NewslettersPage,
  head: () => ({
    meta: [
      { title: "Newsletters · EcoMapPlus" },
      {
        name: "description",
        content: "The public newsletters of the eco-communities in the atlas.",
      },
    ],
  }),
});

type SortKey = "letter" | "country" | "name";

function NewslettersPage() {
  const plus = usePlusAccess();
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [lettersOnly, setLettersOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("letter");

  const scope = useCountryScope();
  const countries = useMemo(
    () =>
      Array.from(new Set(communities.filter((c) => !scope || c.country === scope).map((c) => c.country))).sort(
        compareCountries,
      ),
    [scope],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = communities.filter((community) => {
      const letter = letterFor(community.slug);
      if (lettersOnly && !letter) return false;
      if (scope && community.country !== scope) return false;
      if (country !== "all" && community.country !== country) return false;
      if (!q) return true;
      const hay = `${community.name} ${community.location} ${community.country} ${letter?.title ?? ""} ${letter?.note ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
    rows.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "letter") {
        return (
          Number(Boolean(letterFor(b.slug))) - Number(Boolean(letterFor(a.slug))) ||
          a.country.localeCompare(b.country) ||
          a.name.localeCompare(b.name)
        );
      }
      return a.country.localeCompare(b.country) || a.name.localeCompare(b.name);
    });
    return rows;
  }, [country, lettersOnly, query, sort, scope]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Newsletters</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          Village letters
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every eco-community in the atlas, and the public newsletter when one is on file.
          {letterCount} letters are linked. The rest are not invented — their site is there until a letter is confirmed.
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        <Stat label="Communities" value={String(communityCount)} />
        <Stat label="Letters on file" value={String(letterCount)} />
        <Stat label="Showing" value={String(plus ? visible.length : communityCount)} />
      </dl>

      {plus ? (
        <>
          <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label htmlFor="letters-q" className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-fg">Search</span>
                <input
                  id="letters-q"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Village or letter"
                  className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                />
              </label>
              <label htmlFor="letters-country" className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-fg">Country</span>
                <select
                  id="letters-country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="h-11 rounded-md border border-border bg-bg px-3 text-fg"
                >
                  <option value="all">All countries</option>
                  {countries.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="letters-sort" className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-fg">Sort</span>
                <select
                  id="letters-sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  className="h-11 rounded-md border border-border bg-bg px-3 text-fg"
                >
                  <option value="letter">Letter on file first</option>
                  <option value="country">Country</option>
                  <option value="name">Village</option>
                </select>
              </label>
              <label htmlFor="letters-only" className="flex min-h-11 items-end gap-2 text-sm">
                <input
                  id="letters-only"
                  type="checkbox"
                  checked={lettersOnly}
                  onChange={(event) => setLettersOnly(event.target.checked)}
                  className="size-4 accent-forest"
                />
                <span className="pb-3 font-medium text-fg">Letters on file only</span>
              </label>
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-10 text-muted">No communities match those filters.</p>
          ) : (
            <ul className="mt-8 divide-y divide-border border-t border-border">
              {visible.map((community) => (
                <li key={community.slug} className="py-4">
                  <LetterRow community={community} letter={letterFor(community.slug)} />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div className="mt-8 max-w-md">
          <LockedDetailsCopy next="/newsletters" />
        </div>
      )}
    </main>
  );
}

function LetterRow({ community, letter }: { community: Community; letter: CommunityLetter | null }) {
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
          {community.country && community.location.includes(community.country) ? "" : ` · ${community.country}`}
        </p>
        {letter ? (
          <p className="mt-2 leading-relaxed text-muted">{letter.note}</p>
        ) : (
          <p className="mt-2 text-muted">No public newsletter on file.</p>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        {letter ? (
          <a
            href={letter.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-forest px-3 text-sm font-medium text-cream"
          >
            {letter.title}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : community.website ? (
          <a
            href={community.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-forest hover:underline"
          >
            Village site
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-4 py-3">
      <dt className="text-xs font-medium uppercase tracking-wide text-subtle">{label}</dt>
      <dd className="mt-1 font-display text-2xl tabular-nums text-fg">{value}</dd>
    </div>
  );
}
