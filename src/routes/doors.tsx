import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LockedDetailsCopy } from "@/components/locked-details";
import { PublicFlagChips } from "@/components/public-flags";
import { communities } from "@/data/communities";
import { publicFlagsFor } from "@/data/public-flags";
import { usePlusAccess } from "@/lib/plus-membership";
import { useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/doors")({
  component: DoorsPage,
  head: () => ({
    meta: [
      { title: "Dates and process · EcoMapPlus" },
      {
        name: "description",
        content: "Which eco-communities have an open door, and where the dates and the application live.",
      },
    ],
  }),
});

function DoorsPage() {
  const plus = usePlusAccess();
  const [query, setQuery] = useState("");
  const scope = useCountryScope();
  const rows = useMemo(
    () =>
      communities
        .filter((community) => publicFlagsFor(community.slug).length > 0)
        .filter((community) => !scope || community.country === scope)
        .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)),
    [scope],
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((community) =>
      `${community.name} ${community.location} ${community.country}`.toLowerCase().includes(q),
    );
  }, [query, rows]);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Dates and process</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Open doors</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Every eco-community with a work-stay, event, overnight, or residency door. The village page has the dates and how you apply.
      </p>
      {plus ? (
        <>
          <label htmlFor="doors-q" className="mt-8 block text-sm font-medium text-fg">
            Search
            <input
              id="doors-q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Village or country"
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg"
            />
          </label>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {visible.map((community) => (
              <li key={community.slug} className="py-4">
                <Link
                  to="/communities/$slug"
                  params={{ slug: community.slug }}
                  hash="open-doors"
                  className="font-display text-xl text-fg hover:underline"
                >
                  {community.name}
                </Link>
                <p className="mt-1 text-sm text-muted">
                  {community.location}
                  {community.country && !community.location.includes(community.country) ? ` · ${community.country}` : ""}
                </p>
                <div className="mt-2">
                  <PublicFlagChips slug={community.slug} />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/doors" />
        </div>
      )}
    </main>
  );
}
