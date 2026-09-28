import { createFileRoute, Link } from "@tanstack/react-router";
import { LockedDetailsCopy } from "@/components/locked-details";
import { getCommunity } from "@/data/communities";
import { dailyLifeFor } from "@/data/daily-life";
import { usePlusAccess } from "@/lib/plus-membership";

const ROTATION = [
  "twin-oaks",
  "earthaven",
  "findhorn",
  "tamera",
  "auroville",
  "damanhur",
  "sieben-linden",
  "zegg",
  "cloughjordan",
  "lost-valley",
] as const;

export const Route = createFileRoute("/case-study")({
  component: CaseStudyPage,
  head: () => ({
    meta: [
      { title: "Weekly case study · EcoMapPlus" },
      { name: "description", content: "One eco-community from the atlas, in detail, for the week." },
    ],
  }),
});

function weekSlug() {
  const start = Date.UTC(2026, 0, 5);
  const weeks = Math.floor((Date.now() - start) / (7 * 24 * 60 * 60 * 1000));
  const index = ((weeks % ROTATION.length) + ROTATION.length) % ROTATION.length;
  return ROTATION[index];
}

function CaseStudyPage() {
  const plus = usePlusAccess();
  const slug = weekSlug();
  const community = getCommunity(slug);
  const life = dailyLifeFor(slug);
  if (!plus) {
    return (
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-12 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Weekly case study</p>
        <h1 className="mt-2 font-display text-4xl text-fg">This week’s village</h1>
        <div className="mt-8">
          <LockedDetailsCopy next="/case-study" />
        </div>
      </main>
    );
  }
  if (!community) return null;
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Weekly case study</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">{community.name}</h1>
      <p className="mt-3 text-muted">
        {community.location}
        {community.country && !community.location.includes(community.country) ? ` · ${community.country}` : ""}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-fg">{community.summary}</p>
      <h2 className="mt-10 font-display text-2xl text-fg">{life.unique.title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{life.unique.detail}</p>
      <p className="mt-6 leading-relaxed text-muted">{community.foundingProcess}</p>
      <Link
        to="/communities/$slug"
        params={{ slug: community.slug }}
        className="mt-8 inline-flex min-h-11 items-center font-medium text-forest hover:underline"
      >
        Open the full village page
      </Link>
    </main>
  );
}
