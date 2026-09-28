import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, Users, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PersonNameButton } from "@/components/person-preview";
import {
  AddVillageToRoute,
  VillageDragHandle,
  villageDropTarget,
} from "@/components/travel-plan";
import {
  agreeCaravanStart,
  caravanStatus,
  formatCaravanDate,
  joinCaravan,
  proposeCaravanStart,
  updateCaravanRoute,
  type CaravanCard,
  type CaravanDetail,
} from "@/lib/caravans";
import { VillageNameButton, VillagePreview } from "@/components/village-preview";
import { formatHours, formatPlanDistance, modeLabels, villageStopsOf, type TravelStop } from "@/data/travel-plan";

export function CaravanCardButton({
  caravan,
  active,
}: {
  caravan: CaravanCard;
  active?: boolean;
}) {
  const stops = caravan.stopNames.slice(0, 4);
  const extra = caravan.stopNames.length - stops.length;
  return (
    <Link
      to="/caravans/$roomId"
      params={{ roomId: caravan.roomId }}
      className={`flex h-full w-full flex-col overflow-hidden rounded-lg border bg-surface p-4 text-left shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover ${
        active ? "border-forest" : "border-border"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Eco-community caravan</p>
      <p className="mt-1 font-display text-lg leading-snug text-fg">{caravan.title}</p>
      <p className="mt-2 text-sm text-muted">{caravanStatus(caravan)}</p>
      <p className="mt-1 text-xs text-subtle">
        {caravan.roundTrip ? "Loop · " : null}
        {caravan.villageCount} villages
        {caravan.startLocked ? ` · ${caravan.memberCount} on the caravan` : ` · ${caravan.founderCount} of 3 founders`}
      </p>
      {stops.length > 0 ? (
        <p className="mt-3 line-clamp-2 text-sm text-fg">
          {stops.join(" · ")}
          {extra > 0 ? ` · +${extra}` : ""}
        </p>
      ) : null}
    </Link>
  );
}

export function CaravanPanel({
  caravan,
  meId,
  signedIn,
  loginRedirect,
  onOpenPerson,
  onChanged,
}: {
  caravan: CaravanDetail;
  meId: string | null;
  signedIn: boolean;
  loginRedirect: string;
  onOpenPerson: (userId: string) => void;
  onChanged: (next: CaravanDetail) => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [date, setDate] = useState(caravan.proposal?.startDate ?? caravan.startDate ?? "");
  const [place, setPlace] = useState(caravan.proposal?.startPlace ?? caravan.startPlace ?? caravan.plan.stops[0]?.name ?? "");
  const villages = caravan.plan.stops.filter((s) => s.kind === "village" || s.slug);
  const agreedIds = new Set(caravan.proposal?.agreed.map((row) => row.userId) ?? []);
  const iAgreed = Boolean(meId && agreedIds.has(meId));

  async function onPropose(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    const stop = caravan.plan.stops.find((s) => s.name === place);
    try {
      const next = await proposeCaravanStart({
        data: {
          roomId: caravan.roomId,
          startDate: date,
          startPlace: place,
          startLat: stop?.lat ?? caravan.plan.stops[0]?.lat ?? null,
          startLng: stop?.lng ?? caravan.plan.stops[0]?.lng ?? null,
        },
      });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not propose the start.");
    } finally {
      setBusy(false);
    }
  }

  async function onAgree() {
    setBusy(true);
    setError(null);
    try {
      const next = await agreeCaravanStart({ data: caravan.roomId });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not agree.");
    } finally {
      setBusy(false);
    }
  }

  async function onJoin() {
    setBusy(true);
    setError(null);
    try {
      const next = await joinCaravan({ data: caravan.roomId });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not join.");
    } finally {
      setBusy(false);
    }
  }

  async function onAddVillage(slug: string) {
    setBusy(true);
    setError(null);
    try {
      const next = await updateCaravanRoute({ data: { roomId: caravan.roomId, addSlug: slug } });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not add that village.");
    } finally {
      setBusy(false);
    }
  }

  async function onRemoveVillage(slug: string) {
    setBusy(true);
    setError(null);
    try {
      const next = await updateCaravanRoute({ data: { roomId: caravan.roomId, removeSlug: slug } });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not remove that village.");
    } finally {
      setBusy(false);
    }
  }

  async function onMoveVillage(slug: string, toIndex: number) {
    const current = villageStopsOf(caravan.plan);
    const from = current.findIndex((row) => row.slug === slug);
    if (from < 0 || from === toIndex) return;
    const nextStops = current.slice();
    const [item] = nextStops.splice(from, 1);
    if (!item) return;
    nextStops.splice(toIndex, 0, item);
    const orderedSlugs = nextStops.map((row) => row.slug).filter((value): value is string => Boolean(value));
    setBusy(true);
    setError(null);
    try {
      const next = await updateCaravanRoute({ data: { roomId: caravan.roomId, orderedSlugs } });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reorder the route.");
    } finally {
      setBusy(false);
    }
  }

  async function onShortestPath() {
    setBusy(true);
    setError(null);
    try {
      const next = await updateCaravanRoute({ data: { roomId: caravan.roomId, shortestPath: true } });
      if (next) onChanged(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not restore the shortest path.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
      <p className="text-sm text-muted">{caravanStatus(caravan)}</p>
      {caravan.startLocked ? (
        <p className="mt-2 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5 text-moss" aria-hidden />
            {caravan.startDate ? formatCaravanDate(caravan.startDate) : "Day set"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-moss" aria-hidden />
            {caravan.startPlace}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-3.5 text-moss" aria-hidden />
            {caravan.memberCount} on the caravan
          </span>
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">
          The first three founders set the starting day and place. Then it is locked, and anyone can join.
        </p>
      )}

      {caravan.founders.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {caravan.founders.map((founder, i) => (
            <li key={founder.id} className="text-sm">
              <PersonNameButton
                userId={founder.id}
                onOpen={onOpenPerson}
                className="font-medium text-forest hover:underline"
              >
                {founder.id === meId ? "You" : founder.name}
              </PersonNameButton>
              <span className="text-xs text-subtle"> · founder {i + 1}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {caravan.isFounder && !caravan.startLocked && caravan.founderCount < 3 ? (
        <p className="mt-4 rounded-md border border-border bg-panel px-3 py-3 text-sm text-muted">
          Invite {3 - caravan.founderCount === 1 ? "one more founder" : `${3 - caravan.founderCount} more founders`}.
          The three of you agree on the starting day and place.
        </p>
      ) : null}

      {caravan.isFounder && !caravan.startLocked && caravan.founderCount >= 3 ? (
        <form onSubmit={onPropose} className="mt-4 rounded-md border border-border bg-panel p-3">
          <p className="text-sm font-medium text-fg">Propose the start</p>
          <label className="mt-3 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor="caravan-day">
            Starting day
          </label>
          <input
            id="caravan-day"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
          <label className="mt-3 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor="caravan-place">
            Starting place
          </label>
          <select
            id="caravan-place"
            value={villages.some((s) => s.name === place) ? place : ""}
            onChange={(e) => setPlace(e.target.value)}
            className="mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <option value="">Pick a stop, or type below</option>
            {caravan.plan.stops.map((stop) => (
              <option key={stop.id} value={stop.name}>
                {stop.name}
                {stop.location ? ` · ${stop.location}` : ""}
              </option>
            ))}
          </select>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            maxLength={80}
            placeholder="Or type a meeting place"
            className="mt-2 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
          <Button type="submit" className="mt-3" disabled={busy}>
            Propose this start
          </Button>
        </form>
      ) : null}

      {caravan.proposal && !caravan.startLocked ? (
        <div className="mt-4 rounded-md border border-forest/30 bg-forest/5 p-3">
          <p className="text-sm font-medium text-fg">
            {caravan.proposal.proposerName} proposed {formatCaravanDate(caravan.proposal.startDate)} from{" "}
            {caravan.proposal.startPlace}
          </p>
          <p className="mt-1 text-xs text-muted">
            {caravan.proposal.agreed.length} of 3 founders agree
            {caravan.proposal.agreed.length > 0
              ? ` · ${caravan.proposal.agreed.map((row) => (row.userId === meId ? "You" : row.name)).join(", ")}`
              : ""}
          </p>
          {caravan.isFounder && !iAgreed ? (
            <Button type="button" className="mt-3" disabled={busy} onClick={() => void onAgree()}>
              Agree to this start
            </Button>
          ) : caravan.isFounder && iAgreed ? (
            <p className="mt-2 text-sm text-muted">You agreed. Waiting on the other founders.</p>
          ) : null}
        </div>
      ) : null}

      {caravan.canJoin ? (
        <div className="mt-4">
          {!signedIn ? (
            <Button asChild>
              <Link to="/login" search={{ redirect: loginRedirect }}>
                Sign in to join this caravan
              </Link>
            </Button>
          ) : (
            <Button type="button" disabled={busy} onClick={() => void onJoin()}>
              Join this caravan
            </Button>
          )}
        </div>
      ) : null}

      {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p> : null}

      <h3 className="mt-6 font-display text-xl text-fg">
        {caravan.roundTrip ? "Loop · " : null}
        {caravan.villageCount} stops · {formatPlanDistance(caravan.plan.totalKm)} · {formatHours(caravan.plan.totalHours)} moving
      </h3>
      {caravan.isMember ? (
        <p className="mt-1 text-sm text-muted">
          Add, remove, or reorder Eco-communities. Hold the grip and drag to set the visit order.
          {caravan.plan.preserveOrder ? " Visit order is yours." : ""}
        </p>
      ) : null}
      {caravan.isMember && caravan.plan.preserveOrder ? (
        <button
          type="button"
          disabled={busy}
          onClick={() => void onShortestPath()}
          className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline disabled:opacity-50"
        >
          Use the shortest path
        </button>
      ) : null}
      <ol className="mt-3 space-y-3" data-preserve-order={caravan.plan.preserveOrder ? "true" : "false"}>
        {caravan.plan.stops.map((stop, i) => (
          <CaravanStopRow
            key={`${stop.id}-${i}`}
            stop={stop}
            index={i}
            caravan={caravan}
            busy={busy}
            onRemoveVillage={onRemoveVillage}
            onMoveVillage={onMoveVillage}
            onPreviewVillage={setPreviewSlug}
          />
        ))}
      </ol>
      {caravan.isMember ? (
        <AddVillageToRoute
          excludeSlugs={villageStopsOf(caravan.plan)
            .map((stop) => stop.slug)
            .filter((slug): slug is string => Boolean(slug))}
          onAdd={(slug) => void onAddVillage(slug)}
          disabled={busy}
        />
      ) : null}
      {previewSlug ? <VillagePreview slug={previewSlug} onClose={() => setPreviewSlug(null)} /> : null}
    </div>
  );
}

function CaravanStopRow({
  stop,
  index,
  caravan,
  busy,
  onRemoveVillage,
  onMoveVillage,
  onPreviewVillage,
}: {
  stop: TravelStop;
  index: number;
  caravan: CaravanDetail;
  busy: boolean;
  onRemoveVillage: (slug: string) => void;
  onMoveVillage: (slug: string, toIndex: number) => void;
  onPreviewVillage: (slug: string) => void;
}) {
  const villages = villageStopsOf(caravan.plan);
  const villageIndex = stop.slug ? villages.findIndex((row) => row.slug === stop.slug) : -1;
  const canReorder = Boolean(caravan.isMember && stop.slug && villageIndex >= 0 && villages.length > 1);
  const [over, setOver] = useState(false);

  return (
    <li
      data-stop-slug={stop.slug ?? ""}
      data-village-index={villageIndex >= 0 ? String(villageIndex) : undefined}
      className={`flex gap-2 ${over ? "rounded-md bg-panel" : ""}`}
      {...(canReorder && stop.slug ? villageDropTarget(stop.slug, villages, onMoveVillage, setOver) : {})}
    >
      {canReorder && stop.slug ? (
        <VillageDragHandle
          name={stop.name}
          slug={stop.slug}
          villages={villages}
          onMove={onMoveVillage}
          disabled={busy}
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="text-fg">
          <span className="mr-2 inline-flex size-6 items-center justify-center rounded-full bg-forest text-xs font-medium text-cream">
            {index + 1}
          </span>
          {stop.slug ? (
            <>
              <VillageNameButton slug={stop.slug} name={stop.name} onPreview={onPreviewVillage} />
              <span className="ml-2 text-xs font-medium text-forest">Preview</span>
            </>
          ) : (
            <span className="font-medium">{stop.name}</span>
          )}
          {index === 0 ? (
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">Start</span>
          ) : null}
          {!caravan.roundTrip && index === caravan.plan.stops.length - 1 ? (
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">Finish</span>
          ) : null}
        </p>
        {stop.location ? <p className="ml-8 text-xs text-subtle">{stop.location}</p> : null}
        {caravan.plan.legs[index] ? (
          <p className="ml-8 mt-1 text-xs text-muted">
            {modeLabels[caravan.plan.legs[index].mode]} · {formatPlanDistance(caravan.plan.legs[index].km)} ·{" "}
            {formatHours(caravan.plan.legs[index].hours)}
          </p>
        ) : null}
      </div>
      {caravan.isMember && stop.slug ? (
        <button
          type="button"
          disabled={busy}
          onClick={() => void onRemoveVillage(stop.slug!)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-panel hover:text-fg disabled:opacity-50"
          aria-label={`Remove ${stop.name} from the route`}
        >
          <X className="size-4" aria-hidden />
        </button>
      ) : null}
    </li>
  );
}
