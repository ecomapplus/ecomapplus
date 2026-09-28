import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CaravanPanel } from "@/components/caravan";
import { PersonPreview } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getCaravan, type CaravanDetail } from "@/lib/caravans";
import { formatHours, formatPlanDistance } from "@/data/travel-plan";
import { useMounted } from "@/lib/use-mounted";

export const Route = createFileRoute("/caravans/$roomId")({
  ssr: false,
  component: CaravanPage,
  head: () => ({
    meta: [
      { title: "Caravan · ecocommunitymap.com" },
      { name: "description", content: "See this eco-community caravan’s route and join it." },
    ],
  }),
});

function CaravanPage() {
  const { roomId } = Route.useParams();
  const navigate = useNavigate();
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const [caravan, setCaravan] = useState<CaravanDetail | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const loginRedirect = `/caravans/${roomId}`;

  useEffect(() => {
    let cancelled = false;
    getCaravan({ data: roomId })
      .then((next) => {
        if (!cancelled) {
          setCaravan(next);
          setError(null);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setCaravan(null);
        setError(err instanceof Error ? err.message : "Could not load this caravan.");
      });
    return () => {
      cancelled = true;
    };
  }, [roomId, user?.id]);

  if (!mounted || isPending || caravan === undefined) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
        <div className="h-10 w-48 animate-pulse rounded-md bg-panel" />
      </main>
    );
  }

  if (!caravan) {
    return (
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Routes</p>
        <h1 className="mt-2 font-display text-3xl text-fg">This caravan is not on the map</h1>
        <p className="mt-3 text-muted">{error ?? "That join link is out of date, or the caravan was taken down."}</p>
        <Link
          to="/travel-plan"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
        >
          Make a travel plan
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Eco-community caravan</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">{caravan.title}</h1>
      <p className="mt-3 text-lg text-muted">
        {caravan.roundTrip ? "Loop · " : null}
        {caravan.villageCount} villages · {formatPlanDistance(caravan.plan.totalKm)} ·{" "}
        {formatHours(caravan.plan.totalHours)} moving. Anyone can join from this page.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" asChild>
          <Link to="/hall">Village square</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/travel-plan">Travel plan</Link>
        </Button>
      </div>
      <div className="mt-8 rounded-lg border border-border bg-surface px-4 py-4 shadow-border sm:px-5">
        <CaravanPanel
          caravan={caravan}
          meId={user?.id ?? null}
          signedIn={Boolean(user)}
          loginRedirect={loginRedirect}
          onOpenPerson={setPreviewId}
          onChanged={setCaravan}
        />
      </div>
      {previewId ? (
        <PersonPreview
          userId={previewId}
          onClose={() => setPreviewId(null)}
          onMessage={(id) => {
            void navigate({ to: "/hall", search: { room: id } });
          }}
        />
      ) : null}
    </main>
  );
}
