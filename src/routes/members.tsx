import { createFileRoute, Link } from "@tanstack/react-router";
import { MemberShareButton, useMemberPlaces } from "@/components/member-places";
import { LockedDetailsCopy } from "@/components/locked-details";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/members")({
  ssr: false,
  component: MembersPage,
  head: () => ({
    meta: [
      { title: "Member locations · EcoMapPlus" },
      { name: "description", content: "Share your location with other EcoMapPlus members." },
    ],
  }),
});

function MembersPage() {
  const plus = usePlusAccess();
  const { places, refresh } = useMemberPlaces(plus);
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Member locations</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Where members are</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Share a location. Other Plus members can see the pin. Stop sharing whenever you want.
      </p>
      {plus ? (
        <>
          <div className="mt-8">
            <MemberShareButton onChange={() => void refresh()} />
          </div>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {places.length === 0 ? (
              <li className="py-4 text-muted">No one is sharing a location right now.</li>
            ) : (
              places.map((place) => (
                <li key={place.id} className="py-3">
                  <p className="font-medium text-fg">{place.name}</p>
                  <p className="text-sm text-muted">
                    {place.lat.toFixed(2)}, {place.lng.toFixed(2)}
                  </p>
                </li>
              ))
            )}
          </ul>
          <Link to="/" className="mt-6 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
            See the pins on the map
          </Link>
        </>
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/members" />
        </div>
      )}
    </main>
  );
}
