import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { MeetHalfway, useMemberPlaces } from "@/components/member-places";
import { LockedDetailsCopy } from "@/components/locked-details";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/meet")({
  ssr: false,
  component: MeetPage,
  head: () => ({
    meta: [
      { title: "Meet in the middle · EcoMapPlus" },
      {
        name: "description",
        content: "Find the eco-community closest to the halfway point between two members.",
      },
    ],
  }),
});

function MeetPage() {
  const plus = usePlusAccess();
  const navigate = useNavigate();
  const { places } = useMemberPlaces(plus);
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Meet in the middle</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">The village between you</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Two Plus members who are sharing a location. This names the eco-community closest to the point halfway between them. You can require a work-stay, event, overnight, or residency door, and then see those doors.
      </p>
      {plus ? (
        <div className="mt-8">
          <MeetHalfway
            places={places}
            onOpen={(slug) => {
              void navigate({ to: "/communities/$slug", params: { slug } });
            }}
          />
        </div>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/meet" />
        </div>
      )}
    </main>
  );
}
