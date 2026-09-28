import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bike,
  Bus,
  Car,
  ChevronDown,
  Copy,
  Flag,
  FolderCheck,
  FolderPlus,
  Footprints,
  Gauge,
  GripVertical,
  Hash,
  Locate,
  MapPin,
  Plane,
  Plus,
  RotateCcw,
  Ship,
  Tent,
  TrainFront,
  X,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { VillageNameButton, VillagePreview } from "@/components/village-preview";
import { BookingStayChip, BookingStayPreview } from "@/components/booking-stay-preview";
import { Button } from "@/components/ui/button";
import { VillagePicker } from "@/components/village-picker";
import { getCommunity } from "@/data/communities";
import { bookingFor, hasBookableStay, openBookingStay } from "@/data/booking-stays";
import {
  formatHours,
  formatPlanDistance,
  googleMapsUrl,
  itineraryText,
  modeLabels,
  roadsReady,
  villageStopsOf,
  COUNT_ROUTE_MAX,
  type TransportMode,
  type TravelPlan,
  type TravelStop,
} from "@/data/travel-plan";
import { geocodePlaces, kmBetween, kmToMiles, localPlaceHits, mergePlaceHits, type PlaceHit } from "@/data/geo";
import { createCaravan, defaultCaravanTitle } from "@/lib/caravans";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  defaultSavedPlanTitle,
  compactTravelPlan,
  emitSavedPlansChanged,
  SAVED_PLANS_CHANGED,
} from "@/lib/saved-plans";
import { saveTravelPlan } from "@/lib/saved-plans-api";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

const modeIcons: Record<TransportMode, typeof Plane> = {
  walk: Footprints,
  bike: Bike,
  bus: Bus,
  car: Car,
  train: TrainFront,
  ferry: Ship,
  flight: Plane,
};

const MILE_PRESETS = [100, 250, 500, 1000, 2500] as const;
const EXTRA_PRESETS = [0, 50, 100, 200, 400, 800] as const;

function PlanProcess({
  id,
  title,
  blurb,
  active,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  blurb: string;
  active?: boolean;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[22rem] rounded-md border bg-bg ${open ? "px-3 py-3" : "px-3"} ${active ? "border-forest" : "border-border"}`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-sm font-medium text-fg">{title}</span>
        <ChevronDown className={`size-4 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open ? (
        <>
          {active ? <p className="mt-0.5 text-xs font-medium text-forest">On this plan</p> : null}
          <p className="mt-0.5 text-xs text-muted">{blurb}</p>
          <div className="mt-3">{children}</div>
        </>
      ) : null}
    </section>
  );
}

const SPAN_MIN = 50;
const SPAN_MAX = 3000;
const SPAN_STEP = 25;
const SPAN_DEFAULT = 500;

function OneWayLoopFields({
  origin,
  locating,
  oneWayOn,
  loopOn,
  onPickStart,
  onMyLocation,
  onBuild,
}: {
  origin: TravelStop | null;
  locating: boolean;
  oneWayOn: boolean;
  loopOn: boolean;
  onPickStart: (stop: TravelStop | null) => void;
  onMyLocation: () => void;
  onBuild: (miles: number, loop: boolean) => void;
}) {
  const sliderId = useId();
  const [miles, setMiles] = useState(SPAN_DEFAULT);
  const [loop, setLoop] = useState(false);

  function slide(next: number) {
    setMiles(Math.min(SPAN_MAX, Math.max(SPAN_MIN, next)));
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Starting spot</p>
      {origin ? (
        <p className="mt-2 text-sm text-fg">
          Starts at <span className="font-medium">{origin.name}</span>
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">Choose a city, a village, or your location.</p>
      )}
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onMyLocation}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-forest hover:underline"
        >
          <Locate className="size-4" aria-hidden />
          {locating ? "Finding you…" : "Use my location"}
        </button>
        {origin ? (
          <button
            type="button"
            onClick={() => onPickStart(null)}
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg"
          >
            Clear start
          </button>
        ) : null}
      </div>
      <StartPlaceField onPick={onPickStart} />
      <label className="mt-4 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor={sliderId}>
        Trip length · {miles.toLocaleString("en-US")} miles
      </label>
      <input
        id={sliderId}
        type="range"
        min={SPAN_MIN}
        max={SPAN_MAX}
        step={SPAN_STEP}
        value={miles}
        disabled={!origin || locating}
        onChange={(event) => slide(Number(event.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-forest disabled:cursor-not-allowed disabled:opacity-40"
        aria-valuemin={SPAN_MIN}
        aria-valuemax={SPAN_MAX}
        aria-valuenow={miles}
        aria-valuetext={`${miles.toLocaleString("en-US")} miles`}
      />
      <div className="mt-1 flex justify-between text-xs text-subtle">
        <span>{SPAN_MIN} mi</span>
        <span>Set the miles, then submit</span>
        <span>{SPAN_MAX.toLocaleString("en-US")} mi</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button
          type="button"
          className="w-full"
          variant={loop ? "outline" : "default"}
          aria-pressed={!loop}
          disabled={!origin || locating}
          onClick={() => setLoop(false)}
        >
          One way
        </Button>
        <Button
          type="button"
          className="w-full"
          variant={loop ? "default" : "outline"}
          aria-pressed={loop}
          disabled={!origin || locating}
          onClick={() => setLoop(true)}
        >
          Loop
        </Button>
      </div>
      <Button type="button" className="mt-3 w-full" disabled={!origin || locating} onClick={() => onBuild(miles, loop)}>
        Submit
      </Button>
    </div>
  );
}

export function OneWayLoopButtons({
  plan,
  count,
  locating,
  onOneWay,
  onLoop,
}: {
  plan: TravelPlan | null;
  count: number;
  locating?: boolean;
  onOneWay: () => void;
  onLoop: () => void;
}) {
  if (count < 2 && !plan) return null;
  const mileageLoopOn = Boolean(plan?.budgetMiles) && Boolean(plan?.roundTrip);
  const mileagePathOn =
    plan?.extraMiles != null || (Boolean(plan?.budgetMiles) && !plan?.roundTrip && !plan?.targetCount);
  const countOn = Boolean(plan?.targetCount);
  const countLoopOn = countOn && Boolean(plan?.roundTrip);
  const loopOn = Boolean(plan?.roundTrip) && !mileageLoopOn && !countLoopOn;
  const oneWayOn = Boolean(plan) && !loopOn && !mileageLoopOn && !mileagePathOn && !countOn;
  const busy = Boolean(locating) || count < 2;

  return (
    <div className="mt-3 grid grid-cols-2 gap-2">
      <Button
        type="button"
        id="plan-oneway"
        className="w-full"
        variant={oneWayOn ? "default" : "outline"}
        aria-pressed={oneWayOn}
        disabled={busy}
        onClick={onOneWay}
      >
        One way
      </Button>
      <Button
        type="button"
        id="plan-loop"
        className="w-full"
        variant={loopOn ? "default" : "outline"}
        aria-pressed={loopOn}
        disabled={busy}
        onClick={onLoop}
      >
        Loop
      </Button>
    </div>
  );
}

export function SaveTravelPlanButton({ plan }: { plan: TravelPlan }) {
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const [saved, setSaved] = useState(false);
  const [saveBusy, setSaveBusy] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const fingerprint = `${villageStopsOf(plan)
    .map((stop) => stop.slug ?? stop.id)
    .join("|")}|${plan.roundTrip}|${plan.villageCount}`;

  useEffect(() => {
    setSaved(false);
    setSaveError(null);
  }, [fingerprint]);

  useEffect(() => {
    function onChange(event: Event) {
      const detail = (event as CustomEvent<{ action?: "save" | "delete" }>).detail;
      if (detail?.action === "save") setSaved(true);
    }
    window.addEventListener(SAVED_PLANS_CHANGED, onChange);
    return () => window.removeEventListener(SAVED_PLANS_CHANGED, onChange);
  }, []);

  async function savePlan() {
    if (saveBusy || saved) return;
    setSaveBusy(true);
    setSaveError(null);
    try {
      const compact = compactTravelPlan(plan);
      const row = await saveTravelPlan({
        data: { title: defaultSavedPlanTitle(compact), plan: compact },
      });
      setSaved(true);
      emitSavedPlansChanged({ id: row.id, action: "save" });
    } catch (err) {
      if (isUnauthorized(err)) setSaveError("Sign in to save this plan.");
      else setSaveError(err instanceof Error ? err.message : "Could not save that plan.");
    } finally {
      setSaveBusy(false);
    }
  }

  if (!mounted) {
    return (
      <Button type="button" variant="outline" disabled>
        <FolderPlus className="size-4" aria-hidden />
        Save this plan
      </Button>
    );
  }

  if (!user) {
    return (
      <Button type="button" variant="outline" asChild>
        <Link
          to="/login"
          search={{
            redirect:
              typeof window !== "undefined"
                ? `${window.location.pathname}${window.location.search}`
                : "/travel-plan",
            reason: "plan",
          }}
        >
          <FolderPlus className="size-4" aria-hidden />
          Sign in to save this plan
        </Link>
      </Button>
    );
  }

  return (
    <>
      <Button
        type="button"
        data-save-plan
        variant={saved ? "outline" : "default"}
        disabled={saveBusy || saved || isPending}
        onClick={() => void savePlan()}
      >
        {saved ? <FolderCheck className="size-4" aria-hidden /> : <FolderPlus className="size-4" aria-hidden />}
        {saved ? "Saved to folder" : saveBusy ? "Saving…" : "Save this plan"}
      </Button>
      {saveError ? (
        <p data-save-error className="basis-full text-sm text-forest-deep" role="status">
          {saveError}
        </p>
      ) : null}
    </>
  );
}

export function TravelPlanItinerary({
  plan,
  locating,
  hasCustomStart,
  startLabel,
  destination,
  message,
  onMyLocation,
  onStartAtVillage,
  onSetDestination,
  onAddVillage,
  onRemoveVillage,
  onMoveVillage,
  onShortestPath,
  panel = false,
}: {
  plan: TravelPlan;
  locating: boolean;
  hasCustomStart: boolean;
  startLabel: string | null;
  destination: TravelStop | null;
  message: string;
  onMyLocation: () => void;
  onStartAtVillage: () => void;
  onSetDestination: (stop: TravelStop | null) => void;
  onAddVillage?: (slug: string) => void;
  onRemoveVillage?: (slug: string) => void;
  onMoveVillage?: (slug: string, toIndex: number) => void;
  onShortestPath?: () => void;
  panel?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shareTitle, setShareTitle] = useState("");
  const [shareBusy, setShareBusy] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [bookingSlug, setBookingSlug] = useState<string | null>(null);
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const distUnit = "mi" as const;

  function previewStop(slug: string) {
    const stay = bookingFor(slug);
    if (stay) {
      if (bookingSlug === slug) {
        openBookingStay(slug);
        return;
      }
      setBookingSlug(slug);
      setPreviewSlug(null);
      return;
    }
    setPreviewSlug(slug);
    setBookingSlug(null);
  }

  useEffect(() => {
    if (!/copied to the clipboard/i.test(message)) return;
    setCopied(true);
    const handle = window.setTimeout(() => setCopied(false), 4000);
    return () => window.clearTimeout(handle);
  }, [message]);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(itineraryText(plan));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      /* ignore */
    }
  }

  async function shareCaravan() {
    setShareBusy(true);
    setShareError(null);
    try {
      const result = await createCaravan({
        data: { title: shareTitle.trim() || defaultCaravanTitle(plan), plan },
      });
      setSharing(false);
      void navigate({ to: "/caravans/$roomId", params: { roomId: result.id } });
    } catch (err) {
      setShareError(err instanceof Error ? err.message : "Could not share the caravan.");
    } finally {
      setShareBusy(false);
    }
  }

  return (
    <div
      id="route"
      className={
        panel
          ? "mt-4 rounded-lg border border-border bg-surface px-4 py-4 shadow-border sm:px-5"
          : "border-t border-border bg-surface px-4 py-4 sm:px-5"
      }
      data-road-snapped={roadsReady(plan) ? "true" : "false"}
    >
          {copied ? (
            <p
              className="mb-3 rounded-md bg-forest/10 px-3 py-2 text-sm font-medium text-forest-deep"
              role="status"
            >
              Travel plan copied to the clipboard.
            </p>
          ) : null}
          <p className="font-display text-xl text-fg">
            {plan.roundTrip ? "Loop · " : null}
            {plan.extraMiles != null ? `${plan.extraMiles.toLocaleString("en-US")} extra mi · ` : null}
            {plan.budgetMiles && plan.extraMiles == null ? `${plan.budgetMiles.toLocaleString("en-US")} mi budget · ` : null}
            {plan.targetCount ? `${plan.targetCount} villages · ` : null}
            {plan.villageCount} stops · {formatPlanDistance(plan.totalKm, distUnit)} · {formatHours(plan.totalHours)} moving
          </p>
          <p className="mt-1 text-sm text-muted">
            {plan.budgetMiles && plan.roundTrip
              ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"}, this round trip visits the most Eco-communities that fit in ${plan.budgetMiles.toLocaleString("en-US")} miles.`
              : plan.extraMiles != null
                ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"} to ${destination?.name ?? plan.stops[plan.stops.length - 1]?.name ?? "the finish"} with ${plan.extraMiles.toLocaleString("en-US")} extra miles, this route visits the most Eco-communities along the way.`
              : plan.budgetMiles
                ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"} to ${destination?.name ?? plan.stops[plan.stops.length - 1]?.name ?? "the finish"}, this route visits the most Eco-communities that fit in ${plan.budgetMiles.toLocaleString("en-US")} miles.`
              : plan.targetCount && plan.roundTrip
                ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"}, the shortest round trip of ${plan.villageCount} Eco-communities.`
                : plan.targetCount
                  ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"}, the shortest visit of ${plan.villageCount} Eco-communities.`
              : plan.roundTrip
              ? `Closed loop from ${startLabel ?? plan.stops[0]?.name ?? "the first stop"}. Last leg returns to the start.`
              : destination
                ? `From ${startLabel ?? plan.stops[0]?.name ?? "the start"} to ${destination.name}, visiting every Eco-community in between.`
              : startLabel
                ? `Starts from ${startLabel}. One way; it does not come back.`
                : "Starts at one end of the shortest path. One way; it does not come back."}{" "}
            Sleep at each village; the hours are time on the move. Blue stops have a bookable overnight
            stay — tap the name for a preview of their booking page, tap again to open it.
            {plan.preferDrive ? " Driving wherever the road allows." : ""}
            {plan.preserveOrder
              ? " Visit order is yours. Rebuild the plan, or use the shortest path, to go back to the solver."
              : onMoveVillage
                ? " Hold the grip and drag a village to change the visit order."
                : ""}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <ToggleChip pressed={false} onClick={onMyLocation}>
              <Locate className="size-3.5" aria-hidden />
              {locating ? "Finding…" : "Start from my location"}
            </ToggleChip>
            {hasCustomStart ? (
              <ToggleChip pressed={false} onClick={onStartAtVillage}>
                Start at first village
              </ToggleChip>
            ) : null}
            {destination ? (
              <ToggleChip pressed onClick={() => onSetDestination(null)}>
                <Flag className="size-3.5" aria-hidden />
                Clear endpoint
              </ToggleChip>
            ) : null}
          </div>

          {onMoveVillage && villageStopsOf(plan).length > 1 ? (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Visit order</p>
              {plan.preserveOrder && onShortestPath ? (
                <button
                  type="button"
                  onClick={onShortestPath}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
                >
                  Use the shortest path
                </button>
              ) : null}
            </div>
          ) : null}
          <ol
            className="mt-2 max-h-[32rem] space-y-0 overflow-auto"
            data-preserve-order={plan.preserveOrder ? "true" : "false"}
            data-can-reorder={onMoveVillage ? "true" : "false"}
          >
            {plan.stops.map((stop, i) => (
              <PlanStopRow
                key={`${stop.id}-${i}`}
                stop={stop}
                index={i}
                plan={plan}
                destination={destination}
                distUnit={distUnit}
                onRemoveVillage={onRemoveVillage}
                onMoveVillage={onMoveVillage}
                onPreviewVillage={previewStop}
              />
            ))}
            {plan.roundTrip && plan.legs[plan.stops.length - 1] ? (
              <li>
                <LegLine leg={plan.legs[plan.stops.length - 1]} unit={distUnit} />
                <div className="flex gap-3">
                  <span className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium text-cream ${plan.stops[0]?.slug && hasBookableStay(plan.stops[0].slug) ? "bg-stay" : "bg-forest"}`}>
                    1
                  </span>
                  <p className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 pt-0.5 text-sm text-fg">
                    <span>
                      Back to{" "}
                      {plan.stops[0]?.slug ? (
                        <VillageNameButton
                          slug={plan.stops[0].slug}
                          name={plan.stops[0].name}
                          onPreview={previewStop}
                          className={
                            hasBookableStay(plan.stops[0].slug)
                              ? "font-medium text-left text-stay hover:text-stay-deep hover:underline"
                              : undefined
                          }
                        />
                      ) : (
                        <span className="font-medium">{plan.stops[0]?.name}</span>
                      )}
                    </span>
                    {plan.stops[0]?.slug && hasBookableStay(plan.stops[0].slug) ? (
                      <BookingStayChip slug={plan.stops[0].slug} compact />
                    ) : null}
                    <span className="basis-full text-xs text-subtle">Same place you started</span>
                  </p>
                </div>
              </li>
            ) : null}
          </ol>
          {onAddVillage ? (
            <AddVillageToRoute
              excludeSlugs={villageStopsOf(plan).map((stop) => stop.slug).filter((slug): slug is string => Boolean(slug))}
              onAdd={onAddVillage}
            />
          ) : null}

          <div className="mt-2 flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={() => void copyPlan()}>
              <Copy className="size-4" aria-hidden />
              {copied ? "Copied" : "Copy itinerary"}
            </Button>
            <SaveTravelPlanButton plan={plan} />
            <Button type="button" variant="outline" asChild>
              <a href={googleMapsUrl(plan.roundTrip ? [...plan.stops, plan.stops[0]] : plan.stops)} target="_blank" rel="noreferrer">
                Open in Google Maps
                {plan.stops.length > 10 ? " (first 10)" : ""}
              </a>
            </Button>
            {!isPending && !user ? (
              <Button type="button" variant="outline" asChild>
                <Link
                  to="/login"
                  search={{
                    redirect:
                      typeof window !== "undefined"
                        ? `${window.location.pathname}${window.location.search}`
                        : "/travel-plan",
                  }}
                >
                  <Tent className="size-4" aria-hidden />
                  Sign in to submit to the village square
                </Link>
              </Button>
            ) : (
              <Button
                type="button"
                variant={sharing ? "default" : "outline"}
                onClick={() => {
                  setSharing((open) => !open);
                  if (!shareTitle) setShareTitle(defaultCaravanTitle(plan));
                }}
              >
                <Tent className="size-4" aria-hidden />
                Submit to village square
              </Button>
            )}
          </div>
          {sharing ? (
            <form
              className="mt-3 rounded-md border border-border bg-panel p-3"
              onSubmit={(event) => {
                event.preventDefault();
                void shareCaravan();
              }}
            >
              <p className="text-sm text-muted">
                Posts a join link in the village square. Anyone can open the caravan page, see the route, and join.
              </p>
              <label className="mt-3 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor="caravan-title">
                Caravan name
              </label>
              <input
                id="caravan-title"
                value={shareTitle}
                onChange={(e) => setShareTitle(e.target.value)}
                maxLength={80}
                className="mt-1 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              />
              {shareError ? <p className="mt-2 text-sm text-forest-deep">{shareError}</p> : null}
              <div className="mt-3 flex flex-wrap gap-2">
                <Button type="submit" disabled={shareBusy}>
                  {shareBusy ? "Submitting…" : "Submit to village square"}
                </Button>
                <Button type="button" variant="ghost" onClick={() => setSharing(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : null}
      {previewSlug ? <VillagePreview slug={previewSlug} onClose={() => setPreviewSlug(null)} /> : null}
      {bookingSlug ? <BookingStayPreview slug={bookingSlug} onClose={() => setBookingSlug(null)} /> : null}
    </div>
  );
}

export function TravelPlanCard({
  count,
  savedOnly,
  plan,
  locating,
  locatingEnd,
  locatingOrigin,
  message,
  hasCustomStart,
  startLabel,
  origin,
  preferDrive,
  destination,
  onClear,
  onMyLocation,
  onStartAtVillage,
  onPreferDrive,
  onSetOrigin,
  onLocateOrigin,
  onMileageLoop,
  onBudgetRoute,
  onCountRoute,
  onAroundVillage,
  onMileagePath,
  onEventRoute,
  onSetPathEnd,
  onLocatePathEnd,
  onAddVillage,
  onRemoveVillage,
  onMoveVillage,
  onShortestPath,
  aroundSlug = null,
  panel = false,
  embedded = false,
}: {
  count: number;
  savedOnly: boolean;
  plan: TravelPlan | null;
  locating: boolean;
  locatingEnd?: boolean;
  locatingOrigin?: boolean;
  message: string;
  hasCustomStart: boolean;
  startLabel: string | null;
  origin: TravelStop | null;
  preferDrive: boolean;
  destination: TravelStop | null;
  onClear: () => void;
  onMyLocation: () => void;
  onStartAtVillage: () => void;
  onPreferDrive: (next: boolean) => void;
  onSetOrigin: (stop: TravelStop | null) => void;
  onLocateOrigin: () => void;
  onMileageLoop: (miles: number) => void;
  onBudgetRoute: (miles: number, loop: boolean) => void;
  onCountRoute?: (count: number, loop: boolean) => void;
  onAroundVillage?: (slug: string, miles: number) => void;
  onMileagePath: (miles: number) => void;
  onEventRoute?: (date: string) => void;
  onSetPathEnd: (stop: TravelStop | null) => void;
  onLocatePathEnd: () => void;
  onAddVillage?: (slug: string) => void;
  onRemoveVillage?: (slug: string) => void;
  onMoveVillage?: (slug: string, toIndex: number) => void;
  onShortestPath?: () => void;
  aroundSlug?: string | null;
  panel?: boolean;
  embedded?: boolean;
}) {
  const [dateDraft, setDateDraft] = useState(() => new Date().toISOString().slice(0, 10));
  const [milesDraft, setMilesDraft] = useState(String(plan?.budgetMiles && plan.roundTrip ? plan.budgetMiles : 500));
  const [pathExtraDraft, setPathExtraDraft] = useState(String(plan?.extraMiles ?? 150));
  const [countDraft, setCountDraft] = useState(String(plan?.targetCount ?? 5));
  const milesId = useId();
  const pathMilesId = useId();
  const mileageLoopOn = Boolean(plan?.budgetMiles) && Boolean(plan?.roundTrip);
  const mileagePathOn = plan?.extraMiles != null || (Boolean(plan?.budgetMiles) && !plan?.roundTrip && !plan?.targetCount);
  const countOn = Boolean(plan?.targetCount);
  const countLoopOn = countOn && Boolean(plan?.roundTrip);
  const aroundOn = Boolean(mileageLoopOn && aroundSlug);
  const [openPlan, setOpenPlan] = useState<string | null>(null);

  function togglePlan(id: string) {
    setOpenPlan((current) => (current === id ? null : id));
  }

  useEffect(() => {
    if (plan?.budgetMiles && plan.roundTrip) setMilesDraft(String(plan.budgetMiles));
    if (plan?.extraMiles != null) setPathExtraDraft(String(plan.extraMiles));
    if (plan?.targetCount) setCountDraft(String(plan.targetCount));
  }, [plan?.budgetMiles, plan?.roundTrip, plan?.targetCount, plan?.extraMiles]);

  if (count < 2 && !plan && !onAroundVillage && !onCountRoute && !onEventRoute) return null;

  return (
    <div
      id="travel-plan"
      className={
        embedded
          ? "border-t border-border px-4 py-4 sm:px-5"
          : panel
            ? "rounded-lg border border-border bg-surface px-4 py-4 shadow-border sm:px-5"
            : "border-t border-border bg-surface px-4 py-4 sm:px-5"
      }
      data-road-snapped={plan && roadsReady(plan) ? "true" : "false"}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-fg">How to build a route</p>
        {plan ? (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-muted hover:text-fg"
          >
            <X className="size-4" aria-hidden />
            Clear plan
          </button>
        ) : null}
      </div>
      <div className="mt-3 space-y-2">
        <PlanProcess
          id="one-way"
          title="One way or loop"
          blurb="From a starting spot, fit as many villages as the miles allow. One way stops at the end. A loop comes back."
          active={Boolean(plan?.budgetMiles) && !plan?.roundTrip && !countOn && !mileagePathOn && !plan?.eventDrive}
          open={openPlan === "one-way"}
          onToggle={() => togglePlan("one-way")}
        >
          <OneWayLoopFields
            origin={origin}
            locating={Boolean(locatingOrigin)}
            oneWayOn={Boolean(plan?.budgetMiles) && !plan?.roundTrip && !countOn && !mileagePathOn && !plan?.eventDrive}
            loopOn={Boolean(plan?.budgetMiles) && Boolean(plan?.roundTrip) && !countOn && !mileagePathOn && !aroundSlug}
            onPickStart={onSetOrigin}
            onMyLocation={onLocateOrigin}
            onBuild={onBudgetRoute}
          />
        </PlanProcess>
        {onEventRoute ? (
          <PlanProcess
            id="event-route"
            title="Most events by car"
            blurb="A start place and a date. The route hits as many events as it can, never the same village twice, driving only, at most 300 miles a day between events."
            active={Boolean(plan?.eventDrive)}
            open={openPlan === "event-route"}
            onToggle={() => togglePlan("event-route")}
          >
            <label className="block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor="event-start-date">
              Start date
            </label>
            <input
              id="event-start-date"
              type="date"
              value={dateDraft}
              onChange={(event) => setDateDraft(event.target.value)}
              className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg"
            />
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-moss">Starting point</p>
            {origin ? (
              <p className="mt-2 text-sm text-fg">
                Starts at <span className="font-medium">{origin.name}</span>
              </p>
            ) : (
              <p className="mt-2 text-sm text-muted">Choose a city or use your location.</p>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onLocateOrigin}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-forest hover:underline"
              >
                <Locate className="size-4" aria-hidden />
                {locatingOrigin ? "Finding you…" : "Use my location"}
              </button>
            </div>
            <StartPlaceField onPick={onSetOrigin} />
            <Button type="button" className="mt-3" onClick={() => onEventRoute(dateDraft)}>
              Submit
            </Button>
          </PlanProcess>
        ) : null}
        {onCountRoute ? (
          <PlanProcess
            id="count-route"
            title="Start plus a number"
            blurb="From a place you choose, the shortest visit or loop of that many villages."
            active={countOn}
            open={openPlan === "count-route"}
            onToggle={() => togglePlan("count-route")}
          >
            <CountRouteFields
              countId={`${milesId}-count`}
              countDraft={countDraft}
              onCountDraft={setCountDraft}
              origin={origin}
              locating={Boolean(locatingOrigin)}
              active={countOn}
              loopActive={countLoopOn}
              onPickStart={onSetOrigin}
              onMyLocation={onLocateOrigin}
              onBuild={(loop) => onCountRoute(Number(countDraft), loop)}
            />
          </PlanProcess>
        ) : null}
        {onAroundVillage ? (
          <PlanProcess
            id="around-village"
            title="Around an Eco-community"
            blurb="Round trip from that village. Drag the miles to add or drop nearby stops."
            active={aroundOn}
            open={openPlan === "around-village"}
            onToggle={() => togglePlan("around-village")}
          >
            <AroundVillageFields plan={plan} onBuild={onAroundVillage} initialSlug={aroundSlug} />
          </PlanProcess>
        ) : null}
        <PlanProcess
            id="mileage-loop"
            title="Mileage loop"
            blurb="From a start, fit as many villages as the miles allow, then come back."
            active={mileageLoopOn && !aroundSlug}
            open={openPlan === "mileage-loop"}
            onToggle={() => togglePlan("mileage-loop")}
          >
            <MileageLoopFields
              milesId={milesId}
              milesDraft={milesDraft}
              onMilesDraft={setMilesDraft}
              origin={origin}
              locating={Boolean(locatingOrigin)}
              active={mileageLoopOn}
              onPickStart={onSetOrigin}
              onMyLocation={onLocateOrigin}
              onBuild={() => onMileageLoop(Number(milesDraft))}
            />
          </PlanProcess>
        <PlanProcess
            id="mileage-path"
            title="Start, finish, extra miles"
            blurb="Path between two places. Extra miles are detour for more villages."
            active={mileagePathOn}
            open={openPlan === "mileage-path"}
            onToggle={() => togglePlan("mileage-path")}
          >
            <MileagePathFields
              milesId={pathMilesId}
              extraDraft={pathExtraDraft}
              onExtraDraft={setPathExtraDraft}
              origin={origin}
              destination={destination}
              locatingStart={Boolean(locatingOrigin)}
              locatingEnd={Boolean(locatingEnd)}
              active={mileagePathOn}
              onPickStart={onSetOrigin}
              onPickEnd={onSetPathEnd}
              onMyLocationStart={onLocateOrigin}
              onMyLocationEnd={onLocatePathEnd}
              onBuild={() => onMileagePath(Number(pathExtraDraft))}
            />
          </PlanProcess>
      </div>
      <label className="mt-3 flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border bg-bg px-3 py-2.5">
        <input
          type="checkbox"
          checked={preferDrive}
          onChange={(event) => onPreferDrive(event.target.checked)}
          className="mt-1 size-4 accent-forest"
        />
        <span>
          <span className="block text-sm font-medium text-fg">Always drive if possible</span>
          <span className="block text-xs text-muted">
            Car follows mapped roads, including tunnels and car ferries. Flight only when there is no road.
          </span>
        </span>
      </label>
      {message ? <p className="mt-2 text-sm text-forest-deep">{message}</p> : null}
    </div>
  );
}

function PlanStopRow({
  stop,
  index,
  plan,
  destination,
  distUnit,
  onRemoveVillage,
  onMoveVillage,
  onPreviewVillage,
}: {
  stop: TravelStop;
  index: number;
  plan: TravelPlan;
  destination: TravelStop | null;
  distUnit: "km" | "mi";
  onRemoveVillage?: (slug: string) => void;
  onMoveVillage?: (slug: string, toIndex: number) => void;
  onPreviewVillage: (slug: string) => void;
}) {
  const stay = Boolean(stop.slug && hasBookableStay(stop.slug));
  const villages = villageStopsOf(plan);
  const villageIndex = stop.slug ? villages.findIndex((row) => row.slug === stop.slug) : -1;
  const canReorder = Boolean(onMoveVillage && stop.slug && villageIndex >= 0 && villages.length > 1);
  const [over, setOver] = useState(false);

  return (
    <li
      data-stop-slug={stop.slug ?? ""}
      data-village-index={villageIndex >= 0 ? String(villageIndex) : undefined}
      className={over ? "rounded-md bg-panel" : undefined}
      {...(canReorder && stop.slug && onMoveVillage
        ? villageDropTarget(stop.slug, villages, onMoveVillage, setOver)
        : {})}
    >
      <div className="flex gap-2 sm:gap-3">
        {canReorder && stop.slug && onMoveVillage ? (
          <VillageDragHandle
            name={stop.name}
            slug={stop.slug}
            villages={villages}
            onMove={onMoveVillage}
          />
        ) : null}
        <span className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium text-cream ${stay ? "bg-stay" : "bg-forest"}`}>
          {index + 1}
        </span>
        <div className="min-w-0 flex-1 pb-1">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-fg">
            {stop.slug ? (
              <VillageNameButton
                slug={stop.slug}
                name={stop.name}
                onPreview={onPreviewVillage}
                className={stay ? "font-medium text-left text-stay hover:text-stay-deep hover:underline" : undefined}
              />
            ) : (
              <span className="font-medium">{stop.name}</span>
            )}
            {stay && stop.slug ? <BookingStayChip slug={stop.slug} compact /> : null}
            {stop.kind === "start" && index === 0 ? (
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Start</span>
            ) : null}
            {stop.kind === "end" || (destination && index === plan.stops.length - 1 && !plan.roundTrip) ? (
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Finish</span>
            ) : null}
          </p>
          {stop.location ? <p className="text-xs text-subtle">{stop.location}</p> : null}
          {stop.note ? <p className="mt-1 text-sm leading-snug text-muted">{stop.note}</p> : null}
        </div>
        {stop.slug && onRemoveVillage ? (
          <button
            type="button"
            onClick={() => onRemoveVillage(stop.slug!)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-panel hover:text-fg"
            aria-label={`Remove ${stop.name} from the route`}
          >
            <X className="size-4" aria-hidden />
          </button>
        ) : null}
      </div>
      {index < plan.stops.length - 1 && plan.legs[index] ? <LegLine leg={plan.legs[index]} unit={distUnit} /> : null}
    </li>
  );
}

export function VillageDragHandle({
  name,
  slug,
  villages,
  onMove,
  disabled,
}: {
  name: string;
  slug: string;
  villages: { slug?: string }[];
  onMove: (slug: string, toIndex: number) => void;
  disabled?: boolean;
}) {
  const origin = useRef<{ id: number; slug: string } | null>(null);

  function clearOver() {
    document.querySelectorAll("[data-drop-over]").forEach((node) => node.removeAttribute("data-drop-over"));
  }

  function dropAt(clientX: number, clientY: number) {
    const el = document.elementFromPoint(clientX, clientY);
    const row = el?.closest("[data-stop-slug]");
    const target = row?.getAttribute("data-stop-slug");
    const toIndex = target ? villages.findIndex((item) => item.slug === target) : -1;
    clearOver();
    if (target && toIndex >= 0 && target !== slug) onMove(slug, toIndex);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    if (disabled || event.button !== 0) return;
    origin.current = { id: event.pointerId, slug };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!origin.current || origin.current.id !== event.pointerId) return;
    clearOver();
    const el = document.elementFromPoint(event.clientX, event.clientY);
    const row = el?.closest("[data-stop-slug]");
    const target = row?.getAttribute("data-stop-slug");
    if (row && target && target !== slug) row.setAttribute("data-drop-over", "true");
  }

  function onPointerUp(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!origin.current || origin.current.id !== event.pointerId) return;
    origin.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dropAt(event.clientX, event.clientY);
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        origin.current = null;
        clearOver();
      }}
      className="inline-flex size-11 shrink-0 touch-none cursor-grab items-center justify-center rounded-md text-muted hover:bg-panel hover:text-fg active:cursor-grabbing disabled:opacity-30"
      aria-label={`Drag ${name} to reorder`}
      title="Drag to reorder"
    >
      <GripVertical className="size-4" aria-hidden />
    </button>
  );
}

export function villageDropTarget(
  slug: string,
  villages: { slug?: string }[],
  onMove: (slug: string, toIndex: number) => void,
  setOver: (over: boolean) => void,
) {
  return {
    onDragOver: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      setOver(true);
    },
    onDrop: (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault();
      setOver(false);
      const from = event.dataTransfer.getData("text/plain");
      const toIndex = villages.findIndex((row) => row.slug === slug);
      if (from && toIndex >= 0 && from !== slug) onMove(from, toIndex);
    },
    onDragLeave: (event: React.DragEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setOver(false);
    },
  };
}

function LegLine({
  leg,
  unit = "mi",
}: {
  leg: TravelPlan["legs"][number];
  unit?: "km" | "mi";
}) {
  const Icon = modeIcons[leg.mode];
  return (
    <div className="mb-4 ml-3.5 border-l border-border pl-6">
      <p className="inline-flex flex-wrap items-center gap-x-2 text-sm text-fg">
        <Icon className="size-3.5 text-moss" aria-hidden />
        <span className="font-medium">{modeLabels[leg.mode]}</span>
        <span className="text-muted">
          {formatPlanDistance(leg.km, unit)} · {formatHours(leg.hours)}
        </span>
      </p>
      <p className="mt-0.5 text-xs text-subtle">{leg.note}</p>
      {leg.alternatives.length > 0 ? (
        <p className="mt-1 text-xs text-subtle">
          Also{" "}
          {leg.alternatives.map((alt, i) => (
            <span key={alt.mode}>
              {i > 0 ? ", " : ""}
              {modeLabels[alt.mode].toLowerCase()} ({formatHours(alt.hours)})
            </span>
          ))}
          .
        </p>
      ) : null}
    </div>
  );
}

const COUNT_PRESETS = [3, 5, 8, 12, 20] as const;

function StartPlaceField({ onPick }: { onPick: (stop: TravelStop | null) => void }) {
  const listId = useId();
  const [draft, setDraft] = useState("");
  const [remote, setRemote] = useState<PlaceHit[]>([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const local = useMemo(() => localPlaceHits(draft, 6), [draft]);
  const suggestions = useMemo(() => mergePlaceHits(local, remote, 6), [local, remote]);

  useEffect(() => {
    const q = draft.trim();
    if (q.length < 3) {
      setRemote([]);
      return;
    }
    const ac = new AbortController();
    const handle = window.setTimeout(() => {
      geocodePlaces(q, ac.signal)
        .then((hits) => {
          if (!ac.signal.aborted) setRemote(hits);
        })
        .catch(() => {
          if (!ac.signal.aborted) setRemote([]);
        });
    }, 320);
    return () => {
      window.clearTimeout(handle);
      ac.abort();
    };
  }, [draft]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function pick(hit: PlaceHit) {
    onPick({
      id: hit.slug ? hit.slug : `start-${hit.lat.toFixed(4)}:${hit.lng.toFixed(4)}`,
      slug: hit.slug,
      name: hit.label,
      location: hit.label,
      lat: hit.lat,
      lng: hit.lng,
      kind: "start",
    });
    setDraft("");
    setOpen(false);
  }

  return (
    <div ref={wrapRef} className="relative mt-2">
      <input
        value={draft}
        onChange={(event) => {
          setDraft(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            if (suggestions[0]) pick(suggestions[0]);
          } else if (event.key === "Escape") setOpen(false);
        }}
        placeholder="City, address, or village"
        aria-label="Starting spot"
        aria-autocomplete="list"
        aria-controls={listId}
        className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle"
      />
      {open && suggestions.length > 0 ? (
        <ul id={listId} className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-surface shadow-border">
          {suggestions.map((hit) => (
            <li key={`${hit.label}:${hit.lat}:${hit.lng}`}>
              <button
                type="button"
                onClick={() => pick(hit)}
                className="flex min-h-11 w-full items-center px-3 py-2 text-left text-sm text-fg hover:bg-panel"
              >
                {hit.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function CountRouteFields({
  countId,
  countDraft,
  onCountDraft,
  origin,
  locating,
  active,
  loopActive,
  onPickStart,
  onMyLocation,
  onBuild,
}: {
  countId: string;
  countDraft: string;
  onCountDraft: (value: string) => void;
  origin: TravelStop | null;
  locating: boolean;
  active: boolean;
  loopActive: boolean;
  onPickStart: (stop: TravelStop | null) => void;
  onMyLocation: () => void;
  onBuild: (loop: boolean) => void;
}) {
  const listId = useId();
  const [draft, setDraft] = useState("");
  const [remote, setRemote] = useState<PlaceHit[]>([]);
  const [open, setOpen] = useState(false);
  const [asLoop, setAsLoop] = useState(loopActive);
  const wrapRef = useRef<HTMLDivElement>(null);
  const local = useMemo(() => localPlaceHits(draft, 6), [draft]);
  const suggestions = useMemo(() => mergePlaceHits(local, remote, 6), [local, remote]);

  useEffect(() => {
    const q = draft.trim();
    if (q.length < 3) {
      setRemote([]);
      return;
    }
    const ac = new AbortController();
    const handle = window.setTimeout(() => {
      geocodePlaces(q, ac.signal)
        .then((hits) => {
          if (!ac.signal.aborted) setRemote(hits);
        })
        .catch(() => {
          if (!ac.signal.aborted) setRemote([]);
        });
    }, 320);
    return () => {
      window.clearTimeout(handle);
      ac.abort();
    };
  }, [draft]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function pick(hit: PlaceHit) {
    onPickStart({
      id: hit.slug ? hit.slug : `start-${hit.lat.toFixed(4)}:${hit.lng.toFixed(4)}`,
      slug: hit.slug,
      name: hit.label,
      location: hit.label,
      lat: hit.lat,
      lng: hit.lng,
      kind: "start",
    });
    setDraft("");
    setOpen(false);
  }

  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor={countId}>
        Number of Eco-communities
      </label>
      <input
        id={countId}
        type="number"
        min={2}
        max={COUNT_ROUTE_MAX}
        inputMode="numeric"
        value={countDraft}
        onChange={(event) => onCountDraft(event.target.value)}
        className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {COUNT_PRESETS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onCountDraft(String(n))}
            className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
              Number(countDraft) === n ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-moss">Starting point</p>
      {origin ? (
        <p className="mt-2 text-sm text-fg">
          Starts at <span className="font-medium">{origin.name}</span>
          {origin.location && origin.location !== origin.name ? ` · ${origin.location}` : ""}
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">Choose a village, a city, or your location.</p>
      )}
      <div ref={wrapRef} className="relative mt-2">
        <input
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (suggestions[0]) pick(suggestions[0]);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder="City, address, or village"
          aria-label="Starting point for a counted route"
          id="count-start"
          aria-autocomplete="list"
          aria-controls={listId}
          className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
        {open && suggestions.length > 0 ? (
          <ul
            id={listId}
            className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-surface shadow-border"
          >
            {suggestions.map((hit) => (
              <li key={`${hit.label}:${hit.lat}:${hit.lng}`}>
                <button
                  type="button"
                  onClick={() => pick(hit)}
                  className="flex min-h-11 w-full items-center px-3 py-2 text-left text-sm text-fg hover:bg-panel"
                >
                  {hit.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onMyLocation}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-forest hover:underline"
        >
          <Locate className="size-3.5" aria-hidden />
          {locating ? "Finding…" : "Use my location"}
        </button>
        {origin && origin.id !== "search-center" ? (
          <button
            type="button"
            onClick={() => onPickStart(null)}
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg"
          >
            Clear start
          </button>
        ) : null}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button type="button" variant={asLoop ? "outline" : "default"} aria-pressed={!asLoop} onClick={() => setAsLoop(false)}>
          One way
        </Button>
        <Button type="button" variant={asLoop ? "default" : "outline"} aria-pressed={asLoop} onClick={() => setAsLoop(true)}>
          Loop
        </Button>
      </div>
      <Button
        type="button"
        className="mt-3"
        onClick={() => onBuild(asLoop)}
        disabled={locating || !origin || !Number.isFinite(Number(countDraft)) || Number(countDraft) < 2}
      >
        Submit
      </Button>
    </div>
  );
}

const AROUND_MIN = 50;
const AROUND_MAX = 3000;
const AROUND_STEP = 25;
const AROUND_DEFAULT = 400;

function AroundVillageFields({
  plan,
  onBuild,
  initialSlug = null,
}: {
  plan: TravelPlan | null;
  onBuild: (slug: string, miles: number) => void;
  initialSlug?: string | null;
}) {
  const sliderId = useId();
  const [hubSlug, setHubSlug] = useState<string | null>(initialSlug);
  const [miles, setMiles] = useState(AROUND_DEFAULT);
  const [picking, setPicking] = useState(false);
  const hub = hubSlug ? getCommunity(hubSlug) : null;
  const active = Boolean(
    plan?.budgetMiles &&
      plan.roundTrip &&
      hubSlug &&
      plan.stops.some((stop) => stop.slug === hubSlug),
  );

  function pickHub(slug: string) {
    setHubSlug(slug);
    setPicking(false);
  }

  function slide(next: number) {
    setMiles(Math.min(AROUND_MAX, Math.max(AROUND_MIN, next)));
  }

  return (
    <div>
      {hub ? (
        <p className="mt-3 text-sm text-fg">
          Around <span className="font-medium">{hub.name}</span>
          <span className="text-muted">{` · ${hub.location}`}</span>
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">Choose the village the trip is built around.</p>
      )}

      {picking ? (
        <div className="mt-2 overflow-hidden rounded-md border border-border">
          <VillagePicker
            heading="Hub village"
            placeholder="Search by name or place"
            requireCoords
            onPick={(village) => pickHub(village.slug)}
            onClose={() => setPicking(false)}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPicking(true)}
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-sm font-medium text-fg hover:bg-panel"
        >
          <MapPin className="size-3.5" aria-hidden />
          {hub ? "Change village" : "Pick a village"}
        </button>
      )}

      <label className="mt-4 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor={sliderId}>
        Trip length · {miles.toLocaleString("en-US")} miles
      </label>
      <input
        id={sliderId}
        type="range"
        min={AROUND_MIN}
        max={AROUND_MAX}
        step={AROUND_STEP}
        value={miles}
        disabled={!hubSlug}
        onChange={(event) => slide(Number(event.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-forest disabled:cursor-not-allowed disabled:opacity-40"
        aria-valuemin={AROUND_MIN}
        aria-valuemax={AROUND_MAX}
        aria-valuenow={miles}
        aria-valuetext={`${miles.toLocaleString("en-US")} miles`}
      />
      <div className="mt-1 flex justify-between text-xs text-subtle">
        <span>{AROUND_MIN} mi</span>
        <span>Set the miles, then submit</span>
        <span>{AROUND_MAX.toLocaleString("en-US")} mi</span>
      </div>
      <Button type="button" className="mt-3" disabled={!hubSlug} onClick={() => hubSlug && onBuild(hubSlug, miles)}>
        Submit
      </Button>
      {active && plan ? (
        <p className="mt-2 text-sm text-fg">
          {plan.villageCount} {plan.villageCount === 1 ? "Eco-community" : "Eco-communities"} on this loop
          {plan.budgetMiles ? ` · ${plan.budgetMiles.toLocaleString("en-US")} mi budget` : ""}
        </p>
      ) : null}
    </div>
  );
}

function MileageLoopFields({
  milesId,
  milesDraft,
  onMilesDraft,
  origin,
  locating,
  active,
  onPickStart,
  onMyLocation,
  onBuild,
}: {
  milesId: string;
  milesDraft: string;
  onMilesDraft: (value: string) => void;
  origin: TravelStop | null;
  locating: boolean;
  active: boolean;
  onPickStart: (stop: TravelStop | null) => void;
  onMyLocation: () => void;
  onBuild: () => void;
}) {
  const listId = useId();
  const [draft, setDraft] = useState("");
  const [remote, setRemote] = useState<PlaceHit[]>([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const local = useMemo(() => localPlaceHits(draft, 6), [draft]);
  const suggestions = useMemo(() => mergePlaceHits(local, remote, 6), [local, remote]);

  useEffect(() => {
    const q = draft.trim();
    if (q.length < 3) {
      setRemote([]);
      return;
    }
    const ac = new AbortController();
    const handle = window.setTimeout(() => {
      geocodePlaces(q, ac.signal)
        .then((hits) => {
          if (!ac.signal.aborted) setRemote(hits);
        })
        .catch(() => {
          if (!ac.signal.aborted) setRemote([]);
        });
    }, 320);
    return () => {
      window.clearTimeout(handle);
      ac.abort();
    };
  }, [draft]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function pick(hit: PlaceHit) {
    onPickStart({
      id: hit.slug ? hit.slug : `start-${hit.lat.toFixed(4)}:${hit.lng.toFixed(4)}`,
      slug: hit.slug,
      name: hit.label,
      location: hit.label,
      lat: hit.lat,
      lng: hit.lng,
      kind: "start",
    });
    setDraft("");
    setOpen(false);
  }

  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor={milesId}>
        Total miles
      </label>
      <input
        id={milesId}
        type="number"
        min={1}
        max={50000}
        inputMode="numeric"
        value={milesDraft}
        onChange={(event) => onMilesDraft(event.target.value)}
        className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {MILE_PRESETS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onMilesDraft(String(n))}
            className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
              Number(milesDraft) === n ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
            }`}
          >
            {n} mi
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-moss">Starting point</p>
      {origin ? (
        <p className="mt-2 text-sm text-fg">
          Starts at <span className="font-medium">{origin.name}</span>
          {origin.location && origin.location !== origin.name ? ` · ${origin.location}` : ""}
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">Choose a village, a city, or your location.</p>
      )}
      <div ref={wrapRef} className="relative mt-2">
        <input
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (suggestions[0]) pick(suggestions[0]);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder="City, address, or village"
          aria-label="Starting point"
          id="mileage-start"
          aria-autocomplete="list"
          aria-controls={listId}
          className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
        {open && suggestions.length > 0 ? (
          <ul
            id={listId}
            className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-surface shadow-border"
          >
            {suggestions.map((hit) => (
              <li key={`${hit.label}:${hit.lat}:${hit.lng}`}>
                <button
                  type="button"
                  onClick={() => pick(hit)}
                  className="flex min-h-11 w-full items-center px-3 py-2 text-left text-sm text-fg hover:bg-panel"
                >
                  {hit.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onMyLocation}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-forest hover:underline"
        >
          <Locate className="size-3.5" aria-hidden />
          {locating ? "Finding…" : "Use my location"}
        </button>
        {origin && origin.id !== "search-center" ? (
          <button
            type="button"
            onClick={() => onPickStart(null)}
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg"
          >
            Clear start
          </button>
        ) : null}
      </div>
      <Button type="button" className="mt-3" onClick={onBuild} disabled={locating || !origin}>
        Submit
      </Button>
    </div>
  );
}

function MileagePathFields({
  milesId,
  extraDraft,
  onExtraDraft,
  origin,
  destination,
  locatingStart,
  locatingEnd,
  active,
  onPickStart,
  onPickEnd,
  onMyLocationStart,
  onMyLocationEnd,
  onBuild,
}: {
  milesId: string;
  extraDraft: string;
  onExtraDraft: (value: string) => void;
  origin: TravelStop | null;
  destination: TravelStop | null;
  locatingStart: boolean;
  locatingEnd: boolean;
  active: boolean;
  onPickStart: (stop: TravelStop | null) => void;
  onPickEnd: (stop: TravelStop | null) => void;
  onMyLocationStart: () => void;
  onMyLocationEnd: () => void;
  onBuild: () => void;
}) {
  const directMiles =
    origin && destination && kmBetween(origin, destination) > 3
      ? Math.round(kmToMiles(kmBetween(origin, destination)))
      : null;
  const extra = Number(extraDraft);
  const totalMiles =
    directMiles != null && Number.isFinite(extra) && extra >= 0 ? directMiles + extra : null;

  return (
    <div>
      <PlaceSuggest
        label="Starting point"
        ariaLabel="Path starting point"
        value={origin}
        kind="start"
        locating={locatingStart}
        onPick={onPickStart}
        onMyLocation={onMyLocationStart}
        presentLabel="Starts at"
        emptyHint="Choose a village, a city, or your location."
        inputId="mileage-path-start"
      />
      <PlaceSuggest
        label="Finish"
        ariaLabel="Path finish"
        value={destination}
        kind="end"
        locating={locatingEnd}
        onPick={onPickEnd}
        onMyLocation={onMyLocationEnd}
        presentLabel="Ends at"
        emptyHint="Choose a different village, city, or your location."
        inputId="mileage-path-end"
      />
      <label className="mt-3 block text-xs font-medium uppercase tracking-[0.16em] text-moss" htmlFor={milesId}>
        Additional miles
      </label>
      <input
        id={milesId}
        type="number"
        min={0}
        max={20000}
        inputMode="numeric"
        value={extraDraft}
        onChange={(event) => onExtraDraft(event.target.value)}
        className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {EXTRA_PRESETS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onExtraDraft(String(n))}
            className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
              Number(extraDraft) === n ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
            }`}
          >
            {n === 0 ? "None" : `+${n} mi`}
          </button>
        ))}
      </div>
      {directMiles != null ? (
        <p className="mt-2 text-sm text-fg">
          Straight to the finish is about {directMiles.toLocaleString("en-US")} mi.
          {totalMiles != null ? ` With extra, the budget is ${totalMiles.toLocaleString("en-US")} mi.` : ""}
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">Choose both ends to see the straight-line miles.</p>
      )}
      <Button
        type="button"
        className="mt-3"
        onClick={onBuild}
        disabled={locatingStart || locatingEnd || !origin || !destination}
      >
        Submit
      </Button>
    </div>
  );
}

function PlaceSuggest({
  label,
  ariaLabel,
  value,
  kind,
  locating,
  onPick,
  onMyLocation,
  presentLabel,
  emptyHint,
  inputId,
}: {
  label: string;
  ariaLabel: string;
  value: TravelStop | null;
  kind: "start" | "end";
  locating: boolean;
  onPick: (stop: TravelStop | null) => void;
  onMyLocation: () => void;
  presentLabel: string;
  emptyHint: string;
  inputId: string;
}) {
  const listId = useId();
  const [draft, setDraft] = useState("");
  const [remote, setRemote] = useState<PlaceHit[]>([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const local = useMemo(() => localPlaceHits(draft, 6), [draft]);
  const suggestions = useMemo(() => mergePlaceHits(local, remote, 6), [local, remote]);

  useEffect(() => {
    const q = draft.trim();
    if (q.length < 3) {
      setRemote([]);
      return;
    }
    const ac = new AbortController();
    const handle = window.setTimeout(() => {
      geocodePlaces(q, ac.signal)
        .then((hits) => {
          if (!ac.signal.aborted) setRemote(hits);
        })
        .catch(() => {
          if (!ac.signal.aborted) setRemote([]);
        });
    }, 320);
    return () => {
      window.clearTimeout(handle);
      ac.abort();
    };
  }, [draft]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function pick(hit: PlaceHit) {
    onPick({
      id: hit.slug ? hit.slug : `${kind}-${hit.lat.toFixed(4)}:${hit.lng.toFixed(4)}`,
      slug: hit.slug,
      name: hit.label,
      location: hit.label,
      lat: hit.lat,
      lng: hit.lng,
      kind,
    });
    setDraft("");
    setOpen(false);
  }

  return (
    <div className="mt-3">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">{label}</p>
      {value ? (
        <p className="mt-2 text-sm text-fg">
          {presentLabel} <span className="font-medium">{value.name}</span>
          {value.location && value.location !== value.name ? ` · ${value.location}` : ""}
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">{emptyHint}</p>
      )}
      <div ref={wrapRef} className="relative mt-2">
        <input
          id={inputId}
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (suggestions[0]) pick(suggestions[0]);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          placeholder="City, address, or village"
          aria-label={ariaLabel}
          aria-autocomplete="list"
          aria-controls={listId}
          className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
        {open && suggestions.length > 0 ? (
          <ul
            id={listId}
            className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-border bg-surface shadow-border"
          >
            {suggestions.map((hit) => (
              <li key={`${hit.label}:${hit.lat}:${hit.lng}`}>
                <button
                  type="button"
                  onClick={() => pick(hit)}
                  className="flex min-h-11 w-full items-center px-3 py-2 text-left text-sm text-fg hover:bg-panel"
                >
                  {hit.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onMyLocation}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-forest hover:underline"
        >
          <Locate className="size-3.5" aria-hidden />
          {locating ? "Finding…" : "Use my location"}
        </button>
        {value && value.id !== "search-center" ? (
          <button
            type="button"
            onClick={() => onPick(null)}
            className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function AddVillageToRoute({
  excludeSlugs,
  onAdd,
  disabled,
}: {
  excludeSlugs: string[];
  onAdd: (slug: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <div className="mt-3">
        <Button type="button" variant="outline" disabled={disabled} onClick={() => setOpen(true)}>
          <Plus className="size-4" aria-hidden />
          Add an Eco-community
        </Button>
      </div>
    );
  }
  return (
    <div className="mt-3 overflow-hidden rounded-md border border-border">
      <VillagePicker
        heading="Add an Eco-community"
        placeholder="Search by name or place"
        excludeSlugs={excludeSlugs}
        requireCoords
        onPick={(village) => {
          onAdd(village.slug);
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

function ToggleChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm ${
        pressed ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
      }`}
    >
      {children}
    </button>
  );
}
