import { createFileRoute, Link } from "@tanstack/react-router";
import { FeatureInfo } from "@/components/feature-info";
import { LockedDetailsCopy } from "@/components/locked-details";
import { PLUS_FEATURES, usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/member")({
  component: MemberPage,
  head: () => ({
    meta: [
      { title: "Member · EcoMapPlus" },
      { name: "description", content: "Every EcoMapPlus feature." },
    ],
  }),
});

function MemberPage() {
  const plus = usePlusAccess();
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">EcoMapPlus</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Member</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">Every feature that comes with the year.</p>
      {plus ? (
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {PLUS_FEATURES.map((row) => (
            <li key={row.title} className="flex items-center justify-between gap-3 py-4">
              <Link to={row.to} className="font-display text-2xl text-fg hover:underline">
                {row.title}
              </Link>
              <FeatureInfo text={row.body} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/member" />
        </div>
      )}
    </main>
  );
}
