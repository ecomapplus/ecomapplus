import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { LockedDetailsCopy } from "@/components/locked-details";
import { VillageDoorsPanel } from "@/components/village-doors";
import { getCommunity } from "@/data/communities";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/communities_/$slug/doors")({
  component: VillageDoorsPage,
  notFoundComponent: () => notFound(),
  beforeLoad: ({ params }) => {
    const community = getCommunity(params.slug);
    if (community && community.slug !== params.slug) {
      throw redirect({ to: "/communities/$slug/doors", params: { slug: community.slug } });
    }
  },
  head: ({ params }) => {
    const community = getCommunity(params.slug);
    return {
      meta: [
        { title: community ? `Open doors · ${community.name}` : "Open doors" },
        {
          name: "description",
          content: community
            ? `Every work-stay, event, overnight, and residency listed for ${community.name}.`
            : "Open doors",
        },
      ],
    };
  },
});

function VillageDoorsPage() {
  const plus = usePlusAccess();
  const { slug } = Route.useParams();
  const community = getCommunity(slug);
  if (!community) throw notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Open doors</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">{community.name}</h1>
      <p className="mt-3 text-muted">
        {community.location}
        {community.country && !community.location.includes(community.country) ? ` · ${community.country}` : ""}
      </p>
      <Link
        to="/communities/$slug"
        params={{ slug: community.slug }}
        className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
      >
        Back to the village
      </Link>
      {plus ? (
        <div className="mt-8">
          <VillageDoorsPanel slug={community.slug} all />
        </div>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next={`/communities/${community.slug}/doors`} />
        </div>
      )}
    </main>
  );
}
