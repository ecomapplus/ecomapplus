import { createFileRoute } from "@tanstack/react-router";
import { AtlasMap } from "@/components/atlas-map";
import { communities, getCommunity } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";
import { COUNT_ROUTE_MAX } from "@/data/travel-plan";

type TravelSearch = {
  around?: string;
  fromLat?: number;
  fromLng?: number;
  from?: string;
  count?: number;
  loop?: boolean;
};

function parseAround(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (!/^[a-z0-9-]{2,64}$/.test(value)) return undefined;
  const community = getCommunity(value);
  if (!community?.stillActive || !coordsFor(community.slug)) return undefined;
  return community.slug;
}

function parseCoord(value: unknown, min: number, max: number): number | undefined {
  const n = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(n) || n < min || n > max) return undefined;
  return n;
}

function parseCount(value: unknown): number | undefined {
  const n = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(n)) return undefined;
  const count = Math.floor(n);
  if (count < 1 || count > COUNT_ROUTE_MAX) return undefined;
  return count;
}

function parseLabel(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const label = value.trim().slice(0, 80);
  return label || undefined;
}

export const Route = createFileRoute("/travel-plan")({
  component: TravelPlanPage,
  validateSearch: (search: Record<string, unknown>): TravelSearch => ({
    around: parseAround(search.around),
    fromLat: parseCoord(search.fromLat, -90, 90),
    fromLng: parseCoord(search.fromLng, -180, 180),
    from: parseLabel(search.from),
    count: parseCount(search.count),
    loop: search.loop === true || search.loop === "1" || search.loop === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Travel plan · ecocommunitymap.com" },
      {
        name: "description",
        content: `Build a route through the ${communities.filter((c) => c.stillActive).length} living eco-communities on the map. Start plus a count, a loop, extra miles between two places, or a trip around one village.`,
      },
    ],
  }),
});

function TravelPlanPage() {
  const { around, fromLat, fromLng, from, count, loop } = Route.useSearch();
  const seedFrom =
    fromLat != null && fromLng != null
      ? { lat: fromLat, lng: fromLng, name: from ?? "Your location" }
      : null;
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-8 pt-4 sm:px-6">
      <h1 className="sr-only">Travel plan</h1>
      <AtlasMap
        communities={communities}
        travel
        aroundSlug={around}
        seedFrom={seedFrom}
        seedCount={seedFrom ? count ?? 7 : count}
        seedLoop={loop}
      />
    </main>
  );
}
