import { createFileRoute } from "@tanstack/react-router";
import { ShareCodeCard } from "@/components/share-code-card";
import { LockedDetailsCopy } from "@/components/locked-details";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/refer")({
  ssr: false,
  component: ReferPage,
  head: () => ({
    meta: [
      { title: "Referral bonus · EcoMapPlus" },
      {
        name: "description",
        content: "Each EcoMapPlus member gets a referral code. You earn $12 for each person who joins. They get a bonus year.",
      },
    ],
  }),
});

function ReferPage() {
  const plus = usePlusAccess();
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">EcoMapPlus</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Referral bonus</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Every Plus member gets a referral code. You earn $12 for each person who joins with it. They pay $24 and get a bonus year. Connect Stripe to withdraw the $12 to your bank.
      </p>
      {plus ? (
        <ShareCodeCard />
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/refer" />
        </div>
      )}
    </main>
  );
}
