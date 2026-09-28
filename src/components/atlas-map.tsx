import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, Locate, Minus, Plus, Route, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { RandomVillageButton } from "@/components/random-village-button";
import { LegalFormChips } from "@/components/legal-form-chips";
import { LockedVillagePanel, DoorsVillagePanel } from "@/components/locked-details";
import { SaveVillageButton } from "@/components/save-village-button";
import { SaveTravelPlanButton, TravelPlanCard, TravelPlanItinerary } from "@/components/travel-plan";
import { SavedPlansFolder } from "@/components/saved-plans-folder";
import { VolunteerProgramPreviewLink } from "@/components/volunteer-program";
import { NextUpcomingEventCard } from "@/components/upcoming-events";
import { BookingStayBody } from "@/components/booking-stay-preview";
import { Button } from "@/components/ui/button";
import { DirectionsButton } from "@/components/directions-button";
import { VillageDoorsPanel } from "@/components/village-doors";
import { type Community } from "@/data/communities";
import { PlaceImagesLink } from "@/components/place-images-link";
import { PreviewOutboundLinks } from "@/components/village-preview";
import { bookingFor, hasBookableStay, openBookingStay } from "@/data/booking-stays";
import { coordsFor } from "@/data/coordinates";
import { dailyLifeFor } from "@/data/daily-life";
import { fundingFor } from "@/data/funding";
import { closestCommunity, reverseGeocode, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/data/geo";
import { planMostEventsDrive } from "@/data/event-tour";
import { hasPublicArrival, publicFlagOrder, publicFlagsFor, type PublicFlag } from "@/data/public-flags";
import { isGlampingListing } from "@/data/glamping";
import { conicForDoors, publicVisitDoorOrder, visitDoorLabel, visitDoorOrder, visitDoorsFor, type VisitDoor } from "@/data/visit-types";
import { governanceFor } from "@/data/governance";
import { InactivePhotoWash, StatusBadge } from "@/components/inactive-badge";
import { UniqueGovernanceChip } from "@/components/governance";
import { UniqueFoundingChip } from "@/components/unique-founding";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { entityCount } from "@/data/legal-entities";
import {
  buildTravelPlan,
  changeRouteVillages,
  insertVillageInPlan,
  pathForLeg,
  reorderTravelPlan,
  snapPlanToRoads,
  travelStopForSlug,
  villageStopsOf,
  buildMileageLoop,
  buildMileagePath,
  buildCountRoute,
  allVillageStops,
  copyTravelPlan,
  planDestination,
  planOrigin,
  type TransportMode,
  type TravelPlan,
  type TravelStop,
} from "@/data/travel-plan";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { usePlusAccess } from "@/lib/plus-membership";
import { useCountryScope } from "@/lib/country-scope";
import { useMounted } from "@/lib/use-mounted";
import { BOOKMARKS_CHANGED, listMyBookmarks } from "@/lib/social";
import { MeetHalfway, MemberShareButton, useMemberPlaces } from "@/components/member-places";
import { readMemberDevice } from "@/lib/member-places";

type LeafletLib = typeof import("leaflet");
type LeafletMap = import("leaflet").Map;
type LeafletMarker = import("leaflet").Marker;

type LeafletCircle = import("leaflet").Circle;
type LeafletCircleMarker = import("leaflet").CircleMarker;
type LeafletLayerGroup = import("leaflet").LayerGroup;

type MapPin = { slug: string; lat: number; lng: number; name: string };

export type MapNear = { lat: number; lng: number; radiusKm: number; label?: string };

const CLUSTER_RADIUS = 20;

function groupPins(map: LeafletMap, pins: MapPin[], radius = CLUSTER_RADIUS, zoom = map.getZoom()): MapPin[][] {
 const points = pins.map((pin) => ({
 pin,
 pt: map.project([pin.lat, pin.lng], zoom),
 }));
 const groups: { pins: MapPin[]; x: number; y: number }[] = [];
 const limit = radius * radius;
 for (const item of points) {
 let best = -1;
 let bestD = limit;
 for (let i = 0; i < groups.length; i++) {
 const g = groups[i];
 const dx = item.pt.x - g.x;
 const dy = item.pt.y - g.y;
 const d = dx * dx + dy * dy;
 if (d <= bestD) {
 bestD = d;
 best = i;
 }
 }
 if (best >= 0) {
 const g = groups[best];
 const n = g.pins.length;
 g.x = (g.x * n + item.pt.x) / (n + 1);
 g.y = (g.y * n + item.pt.y) / (n + 1);
 g.pins.push(item.pin);
 } else {
 groups.push({ pins: [item.pin], x: item.pt.x, y: item.pt.y });
 }
 }
 return groups.map((g) => g.pins);
}

function centroid(pins: MapPin[]): [number, number] {
 const lat = pins.reduce((sum, p) => sum + p.lat, 0) / pins.length;
 const lng = pins.reduce((sum, p) => sum + p.lng, 0) / pins.length;
 return [lat, lng];
}

/** Screen-space ring for pins that still share one spot at max zoom. */
function spreadRing(pins: MapPin[], zoom: number): MapPin[] {
 const [lat, lng] = centroid(pins);
 const n = pins.length;
 const radiusPx = Math.max(34, 16 + n * 5);
 const metersPerPx = (156543.03392 * Math.cos((lat * Math.PI) / 180)) / 2 ** zoom;
 const radiusM = radiusPx * metersPerPx;
 const latRad = (lat * Math.PI) / 180;
 return pins.map((pin, i) => {
  const angle = (2 * Math.PI * i) / n - Math.PI / 2;
  const north = radiusM * Math.sin(angle);
  const east = radiusM * Math.cos(angle);
  return {
   ...pin,
   lat: lat + north / 111320,
   lng: lng + east / (111320 * Math.cos(latRad) || 1e-6),
  };
 });
}

function onThisMap(
 community: Community,
 doorsOnly: boolean,
 showGlamping: boolean,
 showPrivate: boolean,
): boolean {
 if (!community.stillActive) return false;
 if (isGlampingListing(community.slug)) return !doorsOnly && showGlamping;
 if (!hasPublicArrival(community.slug)) return !doorsOnly && showPrivate;
 return true;
}

function pinDoors(slug: string): VisitDoor[] {
 const flags = publicFlagsFor(slug);
 if (flags.length > 0) return flags;
 return visitDoorsFor(slug);
}

function clusterPieCss(pins: MapPin[]) {
 const doors = pins.flatMap((pin) => pinDoors(pin.slug));
 return conicForDoors(doors);
}

function clusterIconHtml(pins: MapPin[]) {
 const count = pins.length;
 return `<span class="atlas-cluster"><span class="atlas-cluster-pie" style="background:${clusterPieCss(pins)}"></span><span class="atlas-cluster-count">${count}</span></span>`;
}

function pinIconBits(slug: string, selected: boolean, stay: boolean) {
 if (isGlampingListing(slug)) {
  return {
   className: `atlas-pin-wrap is-glamping${selected ? " is-selected" : ""}`,
   html: `<span class="atlas-pin"><span class="atlas-pin-dot"></span></span>`,
  };
 }
 if (stay) {
  return {
   className: `atlas-pin-wrap${selected ? " is-selected" : ""} is-stay`,
   html: `<span class="atlas-pin"><span class="atlas-pin-dot"></span></span>`,
  };
 }
 const doors = pinDoors(slug);
 if (doors.length === 1) {
  return {
   className: `atlas-pin-wrap is-${doors[0]}${selected ? " is-selected" : ""}`,
   html: `<span class="atlas-pin"><span class="atlas-pin-dot"></span></span>`,
  };
 }
 return {
  className: `atlas-pin-wrap is-split${selected ? " is-selected" : ""}`,
  html: `<span class="atlas-pin"><span class="atlas-pin-dot is-split" style="background:${conicForDoors(doors)}"></span></span>`,
 };
}

function MinOpenDoorsFilter({
 value,
 onChange,
}: {
 value: number;
 onChange: (next: number) => void;
}) {
 return (
  <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Minimum open doors">
   <span className="text-xs text-muted">At least</span>
   {[1, 2, 3, 4].map((n) => (
    <button
     key={n}
     type="button"
     aria-pressed={value === n}
     onClick={() => onChange(value === n ? 0 : n)}
     className={
      value === n
       ? "inline-flex size-11 items-center justify-center rounded-md bg-forest text-sm font-medium text-cream"
       : "inline-flex size-11 items-center justify-center rounded-md bg-bg text-sm font-medium text-fg shadow-border"
     }
    >
     {n}
    </button>
   ))}
   <span className="text-xs text-muted">open doors</span>
  </div>
 );
}

type MapQuick = "usa" | "north-america" | PublicFlag;

const NORTH_AMERICA = new Set([
 "United States",
 "Canada",
 "Mexico",
 "Belize",
 "Guatemala",
 "El Salvador",
 "Nicaragua",
 "Costa Rica",
 "Panama",
]);

const QUICK_FILTERS: { id: MapQuick; label: string }[] = [
 { id: "usa", label: "USA" },
 { id: "north-america", label: "North America" },
 ...publicFlagOrder.map((flag) => ({ id: flag, label: visitDoorLabel[flag] })),
];

function matchesQuick(community: Community, selected: readonly MapQuick[]): boolean {
 for (const filter of selected) {
  if (filter === "usa" && community.country !== "United States") return false;
  if (filter === "north-america" && !NORTH_AMERICA.has(community.country)) return false;
  if (filter !== "usa" && filter !== "north-america" && !publicFlagsFor(community.slug).includes(filter)) return false;
 }
 return true;
}

function QuickMapFilters({
 selected,
 onToggle,
}: {
 selected: readonly MapQuick[];
 onToggle: (id: MapQuick) => void;
}) {
 return (
  <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Quick filters">
   {QUICK_FILTERS.map((filter) => {
    const on = selected.includes(filter.id);
    return (
     <button
      key={filter.id}
      type="button"
      aria-pressed={on}
      onClick={() => onToggle(filter.id)}
      className={
       on
        ? "inline-flex min-h-11 items-center rounded-md bg-forest px-3 text-sm font-medium text-cream"
        : "inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
      }
     >
      {filter.label}
     </button>
    );
   })}
  </div>
 );
}

export function AtlasMap({
 communities,
 lockView = false,
 travel = false,
 docked = false,
 startMinimized = false,
 showRandom = false,
 doorsOnly = false,
 near = null,
 onPickCenter,
 aroundSlug = null,
 seedFrom = null,
 seedCount = null,
 seedLoop = false,
 filters = null,
 hallPlan = false,
 belowMap = null,
}: {
 communities: Community[];
 lockView?: boolean;
 travel?: boolean;
 docked?: boolean;
 startMinimized?: boolean;
 showRandom?: boolean;
 doorsOnly?: boolean;
 near?: MapNear | null;
 onPickCenter?: (lat: number, lng: number) => void;
 aroundSlug?: string | null;
 seedFrom?: { lat: number; lng: number; name?: string } | null;
 seedCount?: number | null;
 seedLoop?: boolean;
 filters?: React.ReactNode;
 hallPlan?: boolean;
 belowMap?: React.ReactNode | ((routeSlugs: string[] | null) => React.ReactNode);
}) {
 const navigate = useNavigate();
 const mounted = useMounted();
 const plus = usePlusAccess();
 const memberPlacesOn = plus && !doorsOnly;
 const { places: memberPlaces, refresh: refreshMemberPlaces } = useMemberPlaces(memberPlacesOn);
 const memberLayerRef = useRef<LeafletLayerGroup | null>(null);
 const { user, isPending } = useCurrentUserState();
 const hostRef = useRef<HTMLDivElement>(null);
 const mapRef = useRef<LeafletMap | null>(null);
 const markersRef = useRef<LeafletMarker[]>([]);
 const circleRef = useRef<LeafletCircle | null>(null);
 const centerRef = useRef<LeafletCircleMarker | null>(null);
 const routeGroupRef = useRef<LeafletLayerGroup | null>(null);
 const meMarkerRef = useRef<LeafletCircleMarker | null>(null);
 const pinsRef = useRef<MapPin[]>([]);
 const spiderRef = useRef<string[] | null>(null);
 const routeMarkersRef = useRef<LeafletMarker[]>([]);
 const leafletRef = useRef<LeafletLib | null>(null);
 const selectedRef = useRef<string | null>(null);
 const communitiesRef = useRef(communities);
 const chooseRef = useRef<(slug: string) => void>(() => {});
 const pickCenterRef = useRef(onPickCenter);
 const selectedAtRef = useRef(0);
 const lockViewRef = useRef(lockView);
 const doorsOnlyRef = useRef(doorsOnly);
 const savedOnlyRef = useRef(false);
 const savedSlugsRef = useRef<Set<string>>(new Set());
 const savedReadyRef = useRef(false);
 const prevSavedOnlyRef = useRef(false);
 const prevMinDoorsRef = useRef(0);
 const prevQuickRef = useRef("");
 const prevCommunitiesRef = useRef(communities);
 const planGenRef = useRef(0);
 const loopGenRef = useRef(0);
 const seededRef = useRef(false);
 const aroundCopiedRef = useRef(false);
 const travelRef = useRef(travel);
 travelRef.current = travel;
 const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
 const [bookingPreviewSlug, setBookingPreviewSlug] = useState<string | null>(null);
 const [mapReady, setMapReady] = useState(false);
 const [mapOpen, setMapOpen] = useState(travel ? false : !startMinimized);
 const [planPanelOpen, setPlanPanelOpen] = useState(!travel);
 const [savedOnly, setSavedOnly] = useState(false);
 const [savedSlugs, setSavedSlugs] = useState<Set<string>>(() => new Set());
 const [savedReady, setSavedReady] = useState(false);
 const [plan, setPlan] = useState<TravelPlan | null>(null);
 const [roundTrip, setRoundTrip] = useState(false);
 const [origin, setOrigin] = useState<TravelStop | null>(null);
 const [destination, setDestination] = useState<TravelStop | null>(null);
 const [preferDrive, setPreferDrive] = useState(true);
 const [locating, setLocating] = useState(false);
 const [locatingEnd, setLocatingEnd] = useState(false);
 const [locatingOrigin, setLocatingOrigin] = useState(false);
 const [planMessage, setPlanMessage] = useState("");
 const [excludedSlugs, setExcludedSlugs] = useState<Set<string>>(() => new Set());
 const [extraStops, setExtraStops] = useState<TravelStop[]>([]);
 const [meStop, setMeStop] = useState<TravelStop | null>(null);
 const [closestPhase, setClosestPhase] = useState<"idle" | "locating" | "ready">("idle");
 const [nearHint, setNearHint] = useState("");
 const [minOpenDoors, setMinOpenDoors] = useState(0);
 const [showGlamping, setShowGlamping] = useState(false);
 const showGlampingRef = useRef(false);
 showGlampingRef.current = showGlamping;
 const [showPrivate, setShowPrivate] = useState(false);
 const showPrivateRef = useRef(false);
 showPrivateRef.current = showPrivate;
 const minOpenDoorsRef = useRef(0);
 minOpenDoorsRef.current = minOpenDoors;
 const [quickFilters, setQuickFilters] = useState<MapQuick[]>([]);
 const quickFiltersRef = useRef<MapQuick[]>([]);
 quickFiltersRef.current = quickFilters;
 const quickKey = quickFilters.join(",");
 const titleId = useId();
 const countryScope = useCountryScope();
 const countryScopeRef = useRef(countryScope);
 countryScopeRef.current = countryScope;
 const prevCountryRef = useRef(countryScope);
 communitiesRef.current = communities;
 lockViewRef.current = lockView;
 doorsOnlyRef.current = doorsOnly;
 pickCenterRef.current = onPickCenter;
 savedOnlyRef.current = savedOnly;
 savedSlugsRef.current = savedSlugs;
 savedReadyRef.current = savedReady;
 const planRef = useRef(plan);
 planRef.current = plan;
 const bookingPreviewSlugRef = useRef(bookingPreviewSlug);
 bookingPreviewSlugRef.current = bookingPreviewSlug;
 const pinCommunities = (savedOnly && savedReady
  ? communities.filter((c) => savedSlugs.has(c.slug))
  : communities
 ).filter((c) => onThisMap(c, doorsOnly, showGlamping, showPrivate))
  .filter((c) => !countryScope || c.country === countryScope)
  .filter((c) => minOpenDoors === 0 || publicFlagsFor(c.slug).length >= minOpenDoors)
  .filter((c) => matchesQuick(c, quickFilters));
 const savedCount = communities.filter((c) => savedSlugs.has(c.slug)).length;
 const selected = pinCommunities.find((c) => c.slug === selectedSlug) ?? null;
 const villageStops: TravelStop[] = pinCommunities.flatMap((community) => {
  const point = coordsFor(community.slug);
  if (!point) return [];
  return [{
   id: community.slug,
   slug: community.slug,
   name: community.name,
   location: community.location,
   country: community.country,
   lat: point.lat,
   lng: point.lng,
   kind: "village",
  }];
 });
 const pinKey = villageStops.map((row) => row.slug).slice().sort().join("|");
 const routeStops = [
  ...villageStops.filter((row) => !row.slug || !excludedSlugs.has(row.slug)),
  ...extraStops.filter(
   (row) => row.slug && !excludedSlugs.has(row.slug) && !villageStops.some((item) => item.slug === row.slug),
  ),
 ];
 const showTravel = travel || hallPlan || (!lockView && !doorsOnly && ((savedOnly && (villageStops.length >= 2 || Boolean(plan))) || Boolean(plan)));
 const tallMap = travel || docked;

 function routeFrom(exclude: Set<string>, extra: TravelStop[]): TravelStop[] {
  const base = villageStops.filter((row) => !row.slug || !exclude.has(row.slug));
  const more = extra.filter(
   (row) => row.slug && !exclude.has(row.slug) && !base.some((item) => item.slug === row.slug),
  );
  return [...base, ...more];
 }

 function nearOrigin(): TravelStop | null {
  if (!near) return null;
  return {
   id: "search-center",
   name: near.label || "Search center",
   lat: near.lat,
   lng: near.lng,
   kind: "start",
   location: near.label,
  };
 }

 function effectiveOrigin() {
  return origin ?? nearOrigin();
 }

 function stopsForNewPlan(): TravelStop[] {
  return allVillageStops().filter((stop) => {
   const slug = stop.slug;
   if (!slug) return false;
   if (isGlampingListing(slug)) return showGlamping;
   if (!hasPublicArrival(slug)) return showPrivate;
   return true;
  });
 }

 function publishPlan(next: TravelPlan | null) {
  const gen = ++planGenRef.current;
  setPlan(next);
  if (!next) return;
  if (travel || hallPlan) {
   const wasClosed = travel && !planPanelOpen;
   if (travel) {
    setPlanPanelOpen(true);
    setMapOpen(true);
   }
   if (wasClosed || hallPlan) {
    window.setTimeout(() => {
     document.getElementById("atlas-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
   }
  }
  void snapPlanToRoads(next)
   .then((snapped) => {
    if (planGenRef.current !== gen) return;
    setPlan(snapped);
   })
   .catch(() => {
    /* keep the straight-line draft */
   });
 }

 function announceCopied(next: TravelPlan, summary?: string) {
  void copyTravelPlan(next).then((ok) => {
   const lead = (summary ?? "").replace(/\s*Copied to the clipboard\.$/, "").trim();
   if (ok) {
    setPlanMessage(lead ? `${lead} Copied to the clipboard.` : "Travel plan copied to the clipboard.");
   } else if (lead) {
    setPlanMessage(lead);
   }
  });
 }

 function makePlan(
  nextOrigin = effectiveOrigin(),
  nextRound = roundTrip,
  nextDest = destination,
  nextDrive = preferDrive,
  villages = routeStops,
  preserveOrder = false,
  copy = false,
 ) {
  if (villages.length < 2) {
   setPlanMessage("Need at least two mapped villages for a route.");
   if (!plan) publishPlan(null);
   return;
  }
  const looping = Boolean(nextRound) && !nextDest;
  setRoundTrip(looping);
  const next = buildTravelPlan({
   villages,
   origin: nextOrigin,
   destination: looping ? null : nextDest,
   roundTrip: looping,
   preferDrive: nextDrive,
   preserveOrder,
  });
  publishPlan(next);
  if (copy) announceCopied(next);
  else setPlanMessage("");
 }

 function applyPackedPlan(next: TravelPlan, looping: boolean, finish: TravelStop | null) {
  const packedStops = next.stops.filter((stop) => Boolean(stop.slug));
  const packed = new Set(
   packedStops.map((stop) => stop.slug).filter((slug): slug is string => Boolean(slug)),
  );
  const extras = packedStops.filter(
   (stop) => stop.slug && !villageStops.some((row) => row.slug === stop.slug),
  );
  const excluded = new Set(
   villageStops
    .map((row) => row.slug)
    .filter((slug): slug is string => Boolean(slug))
    .filter((slug) => !packed.has(slug)),
  );
  setExcludedSlugs(excluded);
  setExtraStops(extras);
  setDestination(finish);
  setRoundTrip(looping);
  publishPlan(next);
 }

 function restoreSavedPlan(next: TravelPlan, title: string) {
  const originStop = planOrigin(next);
  setOrigin(originStop);
  setPreferDrive(next.preferDrive !== false);
  applyPackedPlan(next, Boolean(next.roundTrip), planDestination(next));
  setPlanMessage(`Opened ${title}.`);
  window.setTimeout(() => {
   document.getElementById("route")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
 }

 function runEventRoute(date: string) {
  const start = effectiveOrigin();
  if (!start) {
   setPlanMessage("Choose a starting spot.");
   return;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
   setPlanMessage("Choose a start date.");
   return;
  }
  const packed = planMostEventsDrive(
   { label: start.name, lat: start.lat, lng: start.lng },
   date,
  );
  if (!packed) {
   setPlanMessage("No events you can drive to from there on that date, within 300 miles a day.");
   return;
  }
  const villages: TravelStop[] = packed.stops
   .filter((stop) => !isGlampingListing(stop.slug) && (showPrivate || hasPublicArrival(stop.slug)))
   .map((stop) => ({
   id: stop.slug,
   slug: stop.slug,
   name: stop.name,
   location: stop.place,
   country: stop.country,
   lat: stop.lat,
   lng: stop.lng,
   kind: "village",
   note: stop.events.map((event) => `${event.when} · ${event.title}`).join("\n"),
  }));
  if (villages.length === 0) {
   setPlanMessage("No events you can drive to from there on that date, within 300 miles a day.");
   return;
  }
  const next = buildTravelPlan({
   villages,
   origin: { ...start, kind: "start" },
   preferDrive: true,
   preserveOrder: true,
   roundTrip: false,
  });
  next.eventDrive = true;
  for (const leg of next.legs) {
   leg.mode = "car";
   leg.alternatives = [];
   leg.note = "Drive. At most 300 miles in a day between events.";
  }
  setPreferDrive(true);
  setDestination(null);
  setRoundTrip(false);
  applyPackedPlan(next, false, null);
  setPlanMessage(
   `${packed.eventCount} events at ${packed.stops.length} villages. Driving only, no village twice, 300 miles a day.`,
  );
 }

 function runBudgetRoute(miles: number, loop: boolean, start = effectiveOrigin()) {
  if (!start) {
   setPlanMessage("Choose a starting spot.");
   return;
  }
  if (!Number.isFinite(miles) || miles <= 0) {
   setPlanMessage("Enter how many miles you can travel.");
   return;
  }
  setPlanMessage(loop ? "Figuring the loop…" : "Figuring the route…");
  const gen = ++loopGenRef.current;
  window.setTimeout(() => {
   if (loopGenRef.current !== gen) return;
   try {
    const next = buildMileageLoop({
     villages: stopsForNewPlan(),
     origin: start,
     budgetMiles: miles,
     preferDrive,
     roundTrip: loop,
    });
    if (loopGenRef.current !== gen) return;
    applyPackedPlan(next, loop, null);
    const summary = `${loop ? "Loop" : "One way"} of ${Math.round(miles).toLocaleString("en-US")} miles from ${start.name}: ${next.villageCount} ${next.villageCount === 1 ? "Eco-community" : "Eco-communities"}.`;
    setPlanMessage(summary);
   } catch (err) {
    if (loopGenRef.current !== gen) return;
    setPlanMessage(err instanceof Error ? err.message : "Could not build that route.");
   }
  }, 0);
 }

 function runMileageLoop(miles: number, start = effectiveOrigin(), copy = true) {
  if (!start) {
   setPlanMessage("Choose a starting point for the loop.");
   return;
  }
  if (!Number.isFinite(miles) || miles <= 0) {
   setPlanMessage("Enter how many miles you can travel.");
   return;
  }
  setPlanMessage("Figuring the loop…");
  const gen = ++loopGenRef.current;
  window.setTimeout(() => {
   if (loopGenRef.current !== gen) return;
   try {
    const next = buildMileageLoop({
     villages: stopsForNewPlan(),
     origin: start,
     budgetMiles: miles,
     preferDrive,
    });
    if (loopGenRef.current !== gen) return;
    applyPackedPlan(next, true, null);
    const summary = `Loop of ${Math.round(miles).toLocaleString("en-US")} miles from ${start.name}: ${next.villageCount} ${next.villageCount === 1 ? "Eco-community" : "Eco-communities"}.`;
    if (copy) announceCopied(next, summary);
    else setPlanMessage(summary);
   } catch (err) {
    if (loopGenRef.current !== gen) return;
    setPlanMessage(err instanceof Error ? err.message : "Could not build that loop.");
   }
  }, 0);
 }

 function runCountRoute(count: number, loop: boolean, start = effectiveOrigin()) {
  if (!start) {
   setPlanMessage("Choose a starting point.");
   return;
  }
  if (!Number.isFinite(count) || count < 1) {
   setPlanMessage("Enter how many Eco-communities to visit.");
   return;
  }
  setPlanMessage(loop ? "Figuring the shortest loop…" : "Figuring the shortest route…");
  const gen = ++loopGenRef.current;
  window.setTimeout(() => {
   if (loopGenRef.current !== gen) return;
   try {
    const next = buildCountRoute({
     villages: stopsForNewPlan(),
     origin: start,
     count,
     roundTrip: loop,
     preferDrive,
    });
    if (loopGenRef.current !== gen) return;
    applyPackedPlan(next, loop, null);
    announceCopied(
     next,
     `${loop ? "Loop" : "Route"} of ${next.villageCount} ${next.villageCount === 1 ? "Eco-community" : "Eco-communities"} from ${start.name}.`,
    );
   } catch (err) {
    if (loopGenRef.current !== gen) return;
    setPlanMessage(err instanceof Error ? err.message : "Could not build that route.");
   }
  }, 0);
 }

 function runAroundVillage(slug: string, miles: number) {
  const stop = travelStopForSlug(slug);
  if (!stop) {
   setPlanMessage("That village is not on the map.");
   return;
  }
  setOrigin(stop);
  setDestination(null);
  const first = !aroundCopiedRef.current;
  aroundCopiedRef.current = true;
  runMileageLoop(miles, stop, first);
 }

 function runMileagePath(extraMiles: number, start = effectiveOrigin(), finish = destination) {
  if (!start) {
   setPlanMessage("Choose a starting point for the path.");
   return;
  }
  if (!finish) {
   setPlanMessage("Choose a finish for the path.");
   return;
  }
  if (!Number.isFinite(extraMiles) || extraMiles < 0) {
   setPlanMessage("Enter how many extra miles you can add between start and finish.");
   return;
  }
  setPlanMessage("Figuring the path…");
  window.setTimeout(() => {
   try {
    const next = buildMileagePath({
     villages: stopsForNewPlan(),
     origin: start,
     destination: finish,
     extraMiles,
     preferDrive,
    });
    applyPackedPlan(next, false, finish);
    announceCopied(
     next,
     `From ${start.name} to ${finish.name} with ${Math.round(extraMiles).toLocaleString("en-US")} extra miles: ${next.villageCount} ${next.villageCount === 1 ? "Eco-community" : "Eco-communities"}.`,
    );
   } catch (err) {
    setPlanMessage(err instanceof Error ? err.message : "Could not build that path.");
   }
  }, 0);
 }

 function locateMileageStart() {
  if (!navigator.geolocation) {
   setPlanMessage("This browser will not share a location.");
   return;
  }
  setLocatingOrigin(true);
  setPlanMessage("");
  navigator.geolocation.getCurrentPosition(
   (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    reverseGeocode(lat, lng)
     .then((label) => {
      setOrigin({
       id: "me",
       name: label ?? "Your location",
       lat,
       lng,
       kind: "start",
       location: label ?? undefined,
      });
      setLocatingOrigin(false);
     })
     .catch(() => {
      setOrigin({
       id: "me",
       name: "Your location",
       lat,
       lng,
       kind: "start",
      });
      setLocatingOrigin(false);
     });
   },
   () => {
    setLocatingOrigin(false);
    setPlanMessage("Location was blocked. Type a place or a village for the start.");
   },
   { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 },
  );
 }

 function locatePathEnd() {
  if (!navigator.geolocation) {
   setPlanMessage("This browser will not share a location.");
   return;
  }
  setLocatingEnd(true);
  setPlanMessage("");
  navigator.geolocation.getCurrentPosition(
   (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    reverseGeocode(lat, lng)
     .then((label) => {
      setDestination({
       id: "end-me",
       name: label ?? "Your location",
       lat,
       lng,
       kind: "end",
       location: label ?? undefined,
      });
      setLocatingEnd(false);
     })
     .catch(() => {
      setDestination({
       id: "end-me",
       name: "Your location",
       lat,
       lng,
       kind: "end",
      });
      setLocatingEnd(false);
     });
   },
   () => {
    setLocatingEnd(false);
    setPlanMessage("Location was blocked. Type a place or a village for the finish.");
   },
   { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 },
  );
 }

 function addVillage(slug: string) {
  const stop = travelStopForSlug(slug);
  if (!stop) {
   setPlanMessage("That village is not on the map.");
   return;
  }
  if (routeStops.some((row) => row.slug === slug) || (plan && villageStopsOf(plan).some((row) => row.slug === slug))) {
   setPlanMessage(`${stop.name} is already on the route.`);
   return;
  }
  try {
   const nextExcluded = new Set(excludedSlugs);
   nextExcluded.delete(slug);
   const inSearch = villageStops.some((row) => row.slug === slug);
   const nextExtra = inSearch
    ? extraStops.filter((row) => row.slug !== slug)
    : changeRouteVillages(extraStops, { addSlug: slug });
   setExcludedSlugs(nextExcluded);
   setExtraStops(nextExtra);
   if (plan) {
    publishPlan(insertVillageInPlan(plan, slug));
    setPlanMessage(
     plan.preserveOrder
      ? `Added ${stop.name}. Kept your visit order.`
      : `Added ${stop.name}. The path was recalculated.`,
    );
    return;
   }
   const villages = routeFrom(nextExcluded, nextExtra);
   makePlan(effectiveOrigin(), roundTrip, destination, preferDrive, villages);
   setPlanMessage(`Added ${stop.name}. The path was recalculated.`);
  } catch (err) {
   setPlanMessage(err instanceof Error ? err.message : "Could not add that village.");
  }
 }

 function removeVillage(slug: string) {
  const name = routeStops.find((row) => row.slug === slug)?.name
   ?? plan?.stops.find((row) => row.slug === slug)?.name
   ?? "that village";
  const nextExcluded = new Set(excludedSlugs);
  nextExcluded.add(slug);
  const nextExtra = extraStops.filter((row) => row.slug !== slug);
  const nextOrigin = origin?.slug === slug ? null : origin;
  const nextDest = destination?.slug === slug ? null : destination;
  const villages = plan
   ? villageStopsOf(plan).filter((row) => row.slug !== slug)
   : routeFrom(nextExcluded, nextExtra);
  if (villages.length < 2) {
   setPlanMessage("Keep at least two Eco-communities on the route.");
   return;
  }
  setExcludedSlugs(nextExcluded);
  setExtraStops(nextExtra);
  if (nextOrigin !== origin) setOrigin(nextOrigin);
  if (nextDest !== destination) setDestination(nextDest);
  if (!plan) return;
  const looping = roundTrip && !nextDest;
  const next = buildTravelPlan({
   villages,
   origin: nextOrigin ?? nearOrigin(),
   destination: looping ? null : nextDest,
   roundTrip: looping,
   preferDrive,
   preserveOrder: Boolean(plan.preserveOrder),
  });
  publishPlan(plan.budgetMiles || plan.targetCount || plan.extraMiles != null ? { ...next, budgetMiles: plan.budgetMiles, targetCount: plan.targetCount, extraMiles: plan.extraMiles } : next);
  setPlanMessage(
   plan.preserveOrder
    ? `Removed ${name}. Kept your visit order.`
    : `Removed ${name}. The path was recalculated.`,
  );
 }

 function reorderVillage(slug: string, toIndex: number) {
  if (!plan) return;
  const next = reorderTravelPlan(plan, slug, toIndex);
  publishPlan(next);
  setPlanMessage("Visit order updated. Rebuild the plan to return to the shortest path.");
 }

 function useMyLocationStart() {
  if (!navigator.geolocation) {
   setPlanMessage("This browser will not share a location.");
   return;
  }
  setLocating(true);
  setPlanMessage("");
  navigator.geolocation.getCurrentPosition(
   (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    reverseGeocode(lat, lng)
     .then((label) => {
      const stop: TravelStop = {
       id: "me",
       name: label ?? "Your location",
       lat,
       lng,
       kind: "start",
       location: label ?? undefined,
      };
      setOrigin(stop);
      setLocating(false);
     })
     .catch(() => {
      const stop: TravelStop = {
       id: "me",
       name: "Your location",
       lat,
       lng,
       kind: "start",
      };
      setOrigin(stop);
      setLocating(false);
     });
   },
   () => {
    setLocating(false);
    setPlanMessage("Location was blocked. Start from a search place, or from the first village.");
   },
   { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 },
  );
 }

 function selectPin(slug: string, opts?: { zoom?: number }) {
  selectedRef.current = slug;
  selectedAtRef.current = Date.now();
  setSelectedSlug(slug);
  const map = mapRef.current;
  const L = leafletRef.current;
  const point = coordsFor(slug);
  if (map && L && point) {
   const zoom = map.getZoom();
   const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   const target = opts?.zoom ?? (zoom < 4 ? 5 : zoom);
   if (reduce) map.setView([point.lat, point.lng], target);
   else if (opts?.zoom != null || zoom < 4) map.flyTo([point.lat, point.lng], target, { duration: 0.6 });
   else map.panTo([point.lat, point.lng]);
  }
  paintSelection();
 }

 function choose(slug: string) {
  const stay = bookingFor(slug);
  const onAPlan = travelRef.current || Boolean(planRef.current);
  if (stay && onAPlan && !doorsOnlyRef.current) {
   if (bookingPreviewSlugRef.current === slug) {
    if (Date.now() - selectedAtRef.current < 450) return;
    openBookingStay(slug);
    return;
   }
   selectPin(slug);
   setBookingPreviewSlug(slug);
   return;
  }
  if (bookingPreviewSlugRef.current) setBookingPreviewSlug(null);
  if (selectedRef.current === slug) {
   if (Date.now() - selectedAtRef.current < 450) return;
   if (doorsOnlyRef.current) {
    clearSelection();
    return;
   }
   navigate({ to: "/communities/$slug", params: { slug } });
   return;
  }
  selectPin(slug);
 }

 function findClosestToMe() {
  if (!navigator.geolocation) {
   setNearHint("This browser will not share a location.");
   return;
  }
  setClosestPhase("locating");
  setNearHint("");
  navigator.geolocation.getCurrentPosition(
   (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const hit = closestCommunity({ lat, lng }, pinCommunities);
    if (!hit) {
     setClosestPhase("idle");
     setNearHint("No mapped Eco-community to compare.");
     return;
    }
    const finish = (label?: string) => {
     const stop: TravelStop = {
      id: "me",
      name: label ?? "Your location",
      lat,
      lng,
      kind: "start",
      location: label ?? undefined,
     };
     setMeStop(stop);
     setOrigin(stop);
     setClosestPhase("ready");
     selectPin(hit.community.slug, { zoom: 8 });
    };
    reverseGeocode(lat, lng)
     .then((label) => finish(label ?? undefined))
     .catch(() => finish());
   },
   () => {
    setClosestPhase("idle");
    setNearHint("Location was blocked. Allow location to find the closest village.");
   },
   { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 },
  );
 }

 function goToClosestLoop() {
  const start = meStop;
  if (!start) {
   findClosestToMe();
   return;
  }
  try {
   const next = buildCountRoute({
    villages: stopsForNewPlan(),
    origin: start,
    count: 7,
    roundTrip: true,
    preferDrive,
   });
   void copyTravelPlan(next);
  } catch {
   /* still open the travel plan */
  }
  void navigate({
   to: "/travel-plan",
   search: {
    fromLat: start.lat,
    fromLng: start.lng,
    from: start.name,
    count: 7,
    loop: true,
   },
  });
 }

 chooseRef.current = choose;

 function clearSelection() {
  selectedRef.current = null;
  setSelectedSlug(null);
  setBookingPreviewSlug(null);
  paintSelection();
 }

 function paintSelection() {
  const current = selectedRef.current;
  const paint = (marker: LeafletMarker, route: boolean) => {
   const el = marker.getElement();
   const slug = (marker.options as { slug?: string }).slug;
   if (!el || !slug) return;
   const on = slug === current;
   el.classList.toggle("is-selected", on);
   marker.setZIndexOffset(on ? (route ? 1100 : 800) : route ? 900 : 0);
  };
  for (const marker of markersRef.current) paint(marker, false);
  for (const marker of routeMarkersRef.current) paint(marker, true);
 }

 function expandCluster(pins: MapPin[]) {
  const map = mapRef.current;
  if (!map || pins.length < 2) return;
  const current = Math.round(map.getZoom());
  const maxZoom = map.getMaxZoom();
  let splitAt = -1;
  let allDots = -1;
  for (let z = current + 1; z <= maxZoom; z++) {
   const parts = groupPins(map, pins, CLUSTER_RADIUS, z).length;
   if (splitAt < 0 && parts > 1) splitAt = z;
   if (parts === pins.length) {
    allDots = z;
    break;
   }
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = allDots > 0 && (splitAt < 0 || allDots - splitAt <= 2) ? allDots : splitAt;
  if (target > current) {
   spiderRef.current = null;
   const [lat, lng] = centroid(pins);
   if (reduce) map.setView([lat, lng], target, { animate: false });
   else map.flyTo([lat, lng], target, { duration: 0.4 });
   return;
  }
  spiderRef.current = pins.map((pin) => pin.slug);
  rebuildOverlays();
 }

 function overlayPins(): MapPin[] {
  const all = pinsRef.current;
  const plan = planRef.current;
  if (plan && plan.stops.length >= 2) {
   const allowed = new Set(
    villageStopsOf(plan)
     .map((row) => row.slug)
     .filter((slug): slug is string => Boolean(slug)),
   );
   return all.filter((pin) => allowed.has(pin.slug));
  }
  if (travelRef.current) return [];
  return all;
 }

 function rebuildOverlays() {
  const L = leafletRef.current;
  const map = mapRef.current;
  if (!L || !map) return;

  for (const marker of markersRef.current) {
   try {
    marker.remove();
   } catch {
    /* Icon can be missing mid-zoom; drop the ref anyway. */
   }
  }
  markersRef.current = [];

  const pins = overlayPins();
  const onPlan = Boolean(planRef.current && planRef.current.stops.length >= 2) || travelRef.current;
  const spider = onPlan ? null : spiderRef.current;
  const spiderSet = spider && spider.length > 1 ? new Set(spider) : null;
  const loose = spiderSet ? pins.filter((pin) => spiderSet.has(pin.slug)) : [];
  const rest = spiderSet ? pins.filter((pin) => !spiderSet.has(pin.slug)) : pins;
  const spread = loose.length > 1 ? spreadRing(loose, map.getZoom()) : loose;
  const groups = onPlan ? rest.map((pin) => [pin]) : groupPins(map, rest);

  function placeDot(pin: MapPin) {
   const lib = leafletRef.current;
   const view = mapRef.current;
   if (!lib || !view) return;
   const stay = hasBookableStay(pin.slug) && (travelRef.current || Boolean(planRef.current));
   const bits = pinIconBits(pin.slug, selectedRef.current === pin.slug, stay);
   const icon = lib.divIcon({
    className: bits.className,
    html: bits.html,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
   });
   const marker = lib.marker([pin.lat, pin.lng], {
    icon,
    title: pin.name,
    keyboard: true,
    riseOnHover: true,
    zIndexOffset: selectedRef.current === pin.slug ? 600 : 0,
   });
   (marker.options as { slug?: string }).slug = pin.slug;
   marker.on("click", (event: import("leaflet").LeafletMouseEvent) => {
    lib.DomEvent.stopPropagation(event.originalEvent);
    lib.DomEvent.preventDefault(event.originalEvent);
    chooseRef.current(pin.slug);
   });
   marker.addTo(view);
   marker.getElement()?.setAttribute("data-slug", pin.slug);
   markersRef.current.push(marker);
  }

  for (const pin of spread) placeDot(pin);
  for (const group of groups) {
   if (group.length === 1) {
    placeDot(group[0]!);
    continue;
   }

   const [lat, lng] = centroid(group);
   const count = group.length;
   const icon = L.divIcon({
    className: `atlas-pin-wrap atlas-cluster-wrap${count >= 10 ? " is-large" : ""}`,
    html: clusterIconHtml(group),
    iconSize: [44, 44],
    iconAnchor: [22, 22],
   });
   const marker = L.marker([lat, lng], {
    icon,
    title: `${count} villages`,
    keyboard: true,
    riseOnHover: true,
    zIndexOffset: 200,
   });
   marker.on("click", (event: import("leaflet").LeafletMouseEvent) => {
    L.DomEvent.stopPropagation(event.originalEvent);
    L.DomEvent.preventDefault(event.originalEvent);
    expandCluster(group);
   });
   marker.addTo(map);
   markersRef.current.push(marker);
  }
  paintSelection();
 }

 function drawMarkers(fit = true) {
  const map = mapRef.current;
  if (!map) return;

  const source = (savedOnlyRef.current && savedReadyRef.current
   ? communitiesRef.current.filter((c) => savedSlugsRef.current.has(c.slug))
   : communitiesRef.current
  ).filter((c) => onThisMap(c, doorsOnlyRef.current, showGlampingRef.current, showPrivateRef.current))
   .filter((c) => !countryScopeRef.current || c.country === countryScopeRef.current)
   .filter((c) => minOpenDoorsRef.current === 0 || publicFlagsFor(c.slug).length >= minOpenDoorsRef.current)
   .filter((c) => matchesQuick(c, quickFiltersRef.current));

  const bounds: [number, number][] = [];
  const pins: MapPin[] = [];
  for (const community of source) {
   const point = coordsFor(community.slug);
   if (!point) continue;
   bounds.push([point.lat, point.lng]);
   pins.push({ slug: community.slug, lat: point.lat, lng: point.lng, name: community.name });
  }
  pinsRef.current = pins;
  if (fit && bounds.length === 1) {
   map.setView(bounds[0], 6, { animate: false });
  } else if (fit) {
   map.setView(DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, { animate: false });
  }
  rebuildOverlays();
 }

 useEffect(() => {
  if (!mapOpen) return;
  let cancelled = false;
  const host = hostRef.current;
  if (!host) return;
  let sizeTimer = 0;

  function resetHost(node: HTMLElement) {
   const marked = node as HTMLElement & { _leaflet_id?: number };
   if (marked._leaflet_id) delete marked._leaflet_id;
   node.replaceChildren();
   node.className = node.className
    .split(/\s+/)
    .filter((cls) => cls && !cls.startsWith("leaflet-"))
    .join(" ");
  }

  (async () => {
   try {
    const leafletMod = (await import("leaflet")) as unknown as LeafletLib & { default?: LeafletLib };
    const node = hostRef.current;
    if (cancelled || !node) return;
    const L = leafletMod.default ?? leafletMod;
    leafletRef.current = L;
    resetHost(node);

    const map = L.map(node, {
     scrollWheelZoom: true,
     doubleClickZoom: false,
     zoomControl: false,
     attributionControl: true,
     minZoom: 2,
     maxZoom: 16,
     worldCopyJump: true,
     center: DEFAULT_MAP_CENTER,
     zoom: DEFAULT_MAP_ZOOM,
    });
   L.control.zoom({ position: "topright" }).addTo(map);
   L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 16,
   }).addTo(map);
   map.on("click", (event: import("leaflet").LeafletMouseEvent) => {
    const target = event.originalEvent?.target as HTMLElement | undefined;
    if (target?.closest?.(".atlas-pin-wrap.atlas-cluster-wrap")) return;
    if (Date.now() - selectedAtRef.current < 450) return;
    const pick = pickCenterRef.current;
    if (pick) {
     pick(event.latlng.lat, event.latlng.lng);
     return;
    }
    if (spiderRef.current) {
     spiderRef.current = null;
     rebuildOverlays();
    }
    clearSelection();
   });
   map.on("zoomend", () => {
    spiderRef.current = null;
    window.setTimeout(() => rebuildOverlays(), 0);
   });
   map.on("dragend", () => {
    if (!spiderRef.current) return;
    spiderRef.current = null;
    rebuildOverlays();
   });
   mapRef.current = map;
   drawMarkers(true);
   setMapReady(true);
   const resize = () => {
    if (!cancelled) map.invalidateSize();
   };
   requestAnimationFrame(resize);
   sizeTimer = window.setTimeout(resize, 280);
   } catch (err) {
    console.error("Atlas map failed to start", err);
   }
  })();

  return () => {
   cancelled = true;
   window.clearTimeout(sizeTimer);
   for (const marker of markersRef.current) marker.remove();
   markersRef.current = [];
   circleRef.current?.remove();
   circleRef.current = null;
   centerRef.current?.remove();
   centerRef.current = null;
   routeGroupRef.current?.remove();
   routeGroupRef.current = null;
   routeMarkersRef.current = [];
   meMarkerRef.current?.remove();
   meMarkerRef.current = null;
   mapRef.current?.remove();
   mapRef.current = null;
   setMapReady(false);
   if (hostRef.current) resetHost(hostRef.current);
  };
  // Recreate when the search map is opened from its minimized state.
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [mapOpen]);

 useEffect(() => {
  if (!mapReady) return;
  const source = (savedOnly && savedReady
   ? communities.filter((c) => savedSlugs.has(c.slug))
   : communities
  ).filter((c) => onThisMap(c, doorsOnly, showGlamping, showPrivate))
   .filter((c) => !countryScope || c.country === countryScope)
   .filter((c) => minOpenDoors === 0 || publicFlagsFor(c.slug).length >= minOpenDoors)
   .filter((c) => matchesQuick(c, quickFilters));
  if (selectedRef.current && !source.some((c) => c.slug === selectedRef.current)) {
   selectedRef.current = null;
   setSelectedSlug(null);
  }
  const communitiesChanged = prevCommunitiesRef.current !== communities;
  const justTurnedOn = savedOnly && savedReady && !prevSavedOnlyRef.current;
  const minChanged = minOpenDoors !== prevMinDoorsRef.current;
  const quickChanged = quickKey !== prevQuickRef.current;
  const countryChanged = countryScope !== prevCountryRef.current;
  prevSavedOnlyRef.current = savedOnly && savedReady;
  prevCommunitiesRef.current = communities;
  prevMinDoorsRef.current = minOpenDoors;
  prevQuickRef.current = quickKey;
  prevCountryRef.current = countryScope;
  const fit =
   !lockViewRef.current &&
   ((communitiesChanged && !(savedOnly && savedReady)) ||
    (justTurnedOn && source.length > 0) ||
    (minChanged && source.length > 0) ||
    (quickChanged && source.length > 0) ||
    (countryChanged && source.length > 0));
  drawMarkers(fit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [communities, mapReady, savedOnly, savedSlugs, savedReady, minOpenDoors, quickKey, showGlamping, showPrivate, countryScope]);

 useEffect(() => {
  if (!mapReady) return;
  const map = mapRef.current;
  const L = leafletRef.current;
  if (!map || !L) return;
  circleRef.current?.remove();
  circleRef.current = null;
  centerRef.current?.remove();
  centerRef.current = null;
  if (!near || !Number.isFinite(near.radiusKm) || near.radiusKm <= 0) return;
  const color = "#3b5d3a";
  const circle = L.circle([near.lat, near.lng], {
   radius: near.radiusKm * 1000,
   color,
   weight: 1.5,
   fillColor: color,
   fillOpacity: 0.08,
   interactive: false,
  });
  circle.addTo(map);
  circleRef.current = circle;
  const marker = L.circleMarker([near.lat, near.lng], {
   radius: 6,
   color,
   weight: 2,
   fillColor: "#faf7f0",
   fillOpacity: 1,
   interactive: false,
  });
  marker.addTo(map);
  centerRef.current = marker;
  const bounds = circle.getBounds();
  map.fitBounds(bounds, { padding: [36, 36], maxZoom: 10, animate: false });
 }, [near?.lat, near?.lng, near?.radiusKm, mapReady]);

 useEffect(() => {
  if (!mapReady) return;
  const map = mapRef.current;
  const L = leafletRef.current;
  meMarkerRef.current?.remove();
  meMarkerRef.current = null;
  if (!map || !L || !meStop) return;
  const marker = L.circleMarker([meStop.lat, meStop.lng], {
   radius: 7,
   color: "#3b5d3a",
   weight: 2,
   fillColor: "#c45c26",
   fillOpacity: 1,
   interactive: false,
  });
  marker.bindTooltip("You are here", { direction: "top", offset: [0, -8] });
  marker.addTo(map);
  meMarkerRef.current = marker;
 }, [meStop, mapReady]);

 useEffect(() => {
  if (!mapReady) return;
  const map = mapRef.current;
  const host = hostRef.current;
  if (!map || !host) return;
  const ro = new ResizeObserver(() => {
    map.invalidateSize();
  });
  ro.observe(host);
  return () => ro.disconnect();
 }, [mapReady]);

 useEffect(() => {
  return () => {
   planGenRef.current += 1;
  };
 }, []);

 useEffect(() => {
  publishPlan(null);
  setRoundTrip(false);
  setOrigin(null);
  setPlanMessage("");
  setExcludedSlugs(new Set());
  setExtraStops([]);
 }, [pinKey, savedOnly]);

 useEffect(() => {
  if (!travel || seededRef.current) return;
  if (!seedFrom) return;
  seededRef.current = true;
  const stop: TravelStop = {
   id: "me",
   name: seedFrom.name ?? "Your location",
   lat: seedFrom.lat,
   lng: seedFrom.lng,
   kind: "start",
  };
  setMeStop(stop);
  setOrigin(stop);
  runCountRoute(seedCount ?? 7, seedLoop !== false, stop);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [travel, seedFrom?.lat, seedFrom?.lng, seedCount, seedLoop]);

 useEffect(() => {
  if (!mapReady) return;
  const map = mapRef.current;
  const L = leafletRef.current;
  routeGroupRef.current?.remove();
  routeGroupRef.current = null;
  routeMarkersRef.current = [];
  rebuildOverlays();
  if (!map || !L || !plan || plan.stops.length < 2) return;
  const group = L.layerGroup();
  const allLatLngs: [number, number][] = [];
  for (const leg of plan.legs) {
   const pts = pathForLeg(leg);
   for (const pt of pts) allLatLngs.push(pt);
   const line = L.polyline(pts, {
    color: "#3b5d3a",
    weight: leg.mode === "flight" ? 1.75 : 2.5,
    opacity: 0.9,
    dashArray: dashFor(leg.mode),
    className: `atlas-route-line is-${leg.mode}`,
    lineJoin: "round",
    interactive: false,
   });
   group.addLayer(line);
  }
  plan.stops.forEach((stop, i) => {
   const stay = Boolean(stop.slug && hasBookableStay(stop.slug));
   const selected = Boolean(stop.slug && selectedRef.current === stop.slug);
   const icon = L.divIcon({
    className: [
     i === 0
      ? "atlas-route-wrap is-start"
      : !plan.roundTrip && i === plan.stops.length - 1
        ? "atlas-route-wrap is-end"
        : "atlas-route-wrap",
     stay ? "is-stay" : "",
     selected ? "is-selected" : "",
    ].filter(Boolean).join(" "),
    html: `<span class="atlas-route-num">${i + 1}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
   });
   const marker = L.marker([stop.lat, stop.lng], {
    icon,
    title: `${i + 1}. ${stop.name}`,
    keyboard: true,
    zIndexOffset: selected ? 1100 : 900,
   });
   if (stop.slug) {
    (marker.options as { slug?: string }).slug = stop.slug;
    marker.on("click", (event: import("leaflet").LeafletMouseEvent) => {
     L.DomEvent.stopPropagation(event.originalEvent);
     chooseRef.current(stop.slug!);
    });
   }
   group.addLayer(marker);
   routeMarkersRef.current.push(marker);
  });
  group.addTo(map);
  for (const marker of routeMarkersRef.current) {
   const slug = (marker.options as { slug?: string }).slug;
   if (slug) marker.getElement()?.setAttribute("data-slug", slug);
  }
  routeGroupRef.current = group;
  if (allLatLngs.length > 1) {
   try {
    map.fitBounds(allLatLngs, { padding: [36, 36], maxZoom: 8, animate: false });
   } catch {
    /* unwrapped longitudes can confuse bounds; the line still draws */
   }
  }
  paintSelection();
 }, [plan, mapReady]);

 useEffect(() => {
  const map = mapRef.current;
  const L = leafletRef.current;
  memberLayerRef.current?.remove();
  memberLayerRef.current = null;
  if (!map || !L || !mapReady || !memberPlacesOn) return;
  const mine = readMemberDevice().id;
  const group = L.layerGroup();
  for (const place of memberPlaces) {
   const minePin = place.id === mine;
   const marker = L.marker([place.lat, place.lng], {
    icon: L.divIcon({
     className: minePin ? "atlas-member-wrap is-me" : "atlas-member-wrap",
     html: `<span class="atlas-member-pin"></span>`,
     iconSize: [16, 16],
     iconAnchor: [8, 8],
    }),
    title: place.name,
    keyboard: true,
    zIndexOffset: minePin ? 850 : 700,
   });
   marker.bindTooltip(place.name, { direction: "top", offset: [0, -10], opacity: 1 });
   group.addLayer(marker);
  }
  group.addTo(map);
  memberLayerRef.current = group;
 }, [memberPlaces, mapReady, memberPlacesOn]);

 useEffect(() => {
  if (!mounted || isPending) return;
  if (!user) {
   savedSlugsRef.current = new Set();
   setSavedSlugs(new Set());
   setSavedReady(true);
   if (savedOnlyRef.current) setSavedOnly(false);
   return;
  }
  let cancelled = false;
  setSavedReady(false);
  listMyBookmarks()
   .then((rows) => {
    if (cancelled) return;
    const next = new Set(rows.map((row) => row.community_slug));
    savedSlugsRef.current = next;
    setSavedSlugs(next);
    setSavedReady(true);
   })
   .catch(() => {
    if (cancelled) return;
    savedSlugsRef.current = new Set();
    setSavedSlugs(new Set());
    setSavedReady(true);
   });
  return () => {
   cancelled = true;
  };
 }, [mounted, isPending, user?.id]);

 useEffect(() => {
  function onChange(event: Event) {
   const detail = (event as CustomEvent<{ slug?: string; bookmarked?: boolean }>).detail;
   if (!detail?.slug) return;
   const next = new Set(savedSlugsRef.current);
   if (detail.bookmarked) next.add(detail.slug);
   else next.delete(detail.slug);
   savedSlugsRef.current = next;
   if (savedOnlyRef.current) setSavedSlugs(next);
  }
  window.addEventListener(BOOKMARKS_CHANGED, onChange);
  return () => window.removeEventListener(BOOKMARKS_CHANGED, onChange);
 }, []);

 function routeControls(embedded: boolean) {
  if (!showTravel) return null;
  return (
   <div className={embedded ? undefined : "min-w-0"}>
   <TravelPlanCard
    count={routeStops.length}
    savedOnly={savedOnly}
    plan={plan}
    locating={locating}
    locatingEnd={locatingEnd}
    locatingOrigin={locatingOrigin}
    message={planMessage}
    hasCustomStart={Boolean(origin || near)}
    startLabel={plan?.stops[0]?.name ?? effectiveOrigin()?.name ?? null}
    origin={effectiveOrigin()}
    preferDrive={preferDrive}
    destination={destination}
    aroundSlug={aroundSlug}
    embedded={embedded}
    onEventRoute={runEventRoute}
    onClear={() => {
     publishPlan(null);
     setPlanMessage("");
     setExcludedSlugs(new Set());
     setExtraStops([]);
     if (travel) {
      setPlanPanelOpen(false);
      setMapOpen(false);
     }
    }}
    onMyLocation={useMyLocationStart}
    onStartAtVillage={() => {
     setOrigin(null);
    }}
    onPreferDrive={(next) => {
     setPreferDrive(next);
    }}
    onSetOrigin={(stop) => setOrigin(stop)}
    onLocateOrigin={locateMileageStart}
    onMileageLoop={(miles) => runMileageLoop(miles)}
    onBudgetRoute={(miles, loop) => runBudgetRoute(miles, loop)}
    onCountRoute={runCountRoute}
    onAroundVillage={runAroundVillage}
    onMileagePath={(miles) => runMileagePath(miles)}
    onSetPathEnd={(stop) => setDestination(stop)}
    onLocatePathEnd={locatePathEnd}
    onAddVillage={addVillage}
    onRemoveVillage={removeVillage}
    onMoveVillage={reorderVillage}
    onShortestPath={() => {
     if (!plan) return;
     makePlan(
      effectiveOrigin(),
      roundTrip,
      destination,
      preferDrive,
      villageStopsOf(plan),
      false,
     );
     setPlanMessage("Back to the shortest path.");
    }}
   />
   </div>
  );
 }

 return mapOpen || travel ? (<section
  id="atlas-map"
  className={
   travel
    ? "atlas-map mt-3 flex scroll-mt-20 flex-col gap-4 pb-24"
    : docked
      ? "atlas-map scroll-mt-20 overflow-hidden rounded-lg border border-border bg-panel shadow-border"
      : "atlas-map mt-6 scroll-mt-20 overflow-hidden rounded-lg bg-panel shadow-border"
  }
  aria-labelledby={titleId}
 >
  {travel ? <SavedPlansFolder onOpen={restoreSavedPlan} /> : null}
  <div className={travel ? "overflow-hidden rounded-lg border border-border bg-panel shadow-border" : undefined}>
  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border bg-surface px-4 py-3">
   <div>
    <h2 id={titleId} className="font-display text-xl text-fg">
     {travel ? "Travel plan" : "Map of the atlas"}
    </h2>
    {travel ? null : (
    <>
    <p className="mt-0.5 text-sm text-muted">
     {doorsOnly
      ? "Tap a pin. You get the name, and whether a work-stay, overnight, residency, or event is open."
      : savedOnly
      ? "Showing villages you have saved. Tap a pin for a preview."
      : onPickCenter
        ? "Tap the map to set a search center. Tap a pin for a preview."
        : "Tap a pin for a preview. A cluster is a pie of the doors inside it — tap it to zoom until each village is readable."}
    </p>
    </>
    )}
   </div>
   <div className="flex flex-wrap items-center gap-2">
    {showRandom && !doorsOnly ? <RandomVillageButton exceptSlug={selectedSlug} /> : null}
    {showRandom && !travel && !doorsOnly ? (
     <Button
      type="button"
      variant={closestPhase === "ready" ? "default" : "outline"}
      className="h-auto min-h-11 max-w-xs whitespace-normal px-3 py-2 text-left"
      disabled={closestPhase === "locating"}
      onClick={closestPhase === "ready" ? goToClosestLoop : findClosestToMe}
     >
      {closestPhase === "ready" ? (
       <Route className="size-4 shrink-0" aria-hidden />
      ) : (
       <Locate className="size-4 shrink-0" aria-hidden />
      )}
      {closestPhase === "locating"
       ? "Finding the closest Eco-community…"
       : closestPhase === "ready"
         ? "Create travel plan"
         : "Find the closest Eco-community to me"}
     </Button>
    ) : null}
    {plus && !doorsOnly && !travel ? <MinOpenDoorsFilter value={minOpenDoors} onChange={setMinOpenDoors} /> : null}
    {plus && !doorsOnly && !travel ? (
     <button
      type="button"
      aria-pressed={showGlamping}
      title={showGlamping ? "Hide farm glamping" : "Show farm glamping. Off until you turn this on."}
      onClick={() => setShowGlamping((on) => !on)}
      className={
       showGlamping
        ? "inline-flex min-h-11 items-center rounded-md bg-forest px-3 text-sm font-medium text-cream"
        : "inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
      }
     >
      Glamping
     </button>
    ) : null}
    {plus && !doorsOnly && !travel ? (
     <button
      type="button"
      aria-pressed={showPrivate}
      title={showPrivate ? "Hide villages with no open door" : "Show villages with no open door. Off until you turn this on."}
      onClick={() => setShowPrivate((on) => !on)}
      className={
       showPrivate
        ? "inline-flex min-h-11 items-center rounded-md bg-forest px-3 text-sm font-medium text-cream"
        : "inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
      }
     >
      Private
     </button>
    ) : null}
    {plus && !doorsOnly && !travel ? (
     <QuickMapFilters
      selected={quickFilters}
      onToggle={(id) =>
       setQuickFilters((current) => (current.includes(id) ? current.filter((row) => row !== id) : [...current, id]))
      }
     />
    ) : null}
    {plus && !doorsOnly && !travel ? <MemberShareButton onChange={() => void refreshMemberPlaces()} /> : null}
    {plus && !doorsOnly && !travel ? (
     <MeetHalfway places={memberPlaces} onOpen={(slug) => chooseRef.current(slug)} />
    ) : null}
    {mounted && !isPending && user && !doorsOnly && !travel ? (
     <SavedOnlyToggle
      pressed={savedOnly}
      canToggle={savedReady}
      onToggle={() => {
       setSavedOnly((on) => {
        const next = !on;
        if (next) setSavedSlugs(new Set(savedSlugsRef.current));
        return next;
       });
      }}
     />
    ) : null}
    {travel ? null : (
    <p className="text-xs text-subtle">
     {plan
      ? `${villageStopsOf(plan).length} on this route`
      : savedOnly
      ? `${savedReady ? savedCount : "…"} saved`
      : `${pinCommunities.length} pins`}
    </p>
    )}
    {travel && !planPanelOpen ? (
     <Button
      type="button"
      onClick={() => {
       setPlanPanelOpen(true);
       setMapOpen(true);
      }}
     >
      Show plan
     </Button>
    ) : null}
    {(travel ? planPanelOpen : startMinimized && mapOpen) ? (
     <Button
      type="button"
      variant="outline"
      onClick={() => {
       setMapOpen(false);
       if (travel) setPlanPanelOpen(false);
      }}
     >
      Minimize
     </Button>
    ) : null}
    {nearHint ? <p className="text-xs text-danger">{nearHint}</p> : null}
   </div>
  </div>

  {travel ? routeControls(true) : null}
  {mapOpen && !travel ? (
   <div className="border-b border-border bg-surface px-4 py-2">
    <ul className="atlas-map-legend flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
     {(doorsOnly ? publicVisitDoorOrder : visitDoorOrder).map((door) => (
      <li key={door} className="inline-flex items-center gap-1.5">
       <span className={`atlas-legend-swatch is-${door}`} aria-hidden />
       {visitDoorLabel[door]}
       {door === "private" && plus && !doorsOnly && !showPrivate ? " · off" : ""}
      </li>
     ))}
     {plus && !doorsOnly ? (
      <li className="inline-flex items-center gap-1.5">
       <span className="atlas-legend-swatch is-glamping" aria-hidden />
       Glamping{showGlamping ? "" : " · off"}
      </li>
     ) : null}
    </ul>
    <p className="mt-1 text-xs text-subtle">
     When more than one community shares a pin, the pin is split so each listing stays distinct.
    </p>
   </div>
  ) : null}
  {mapOpen && (!travel || planPanelOpen) ? (
  <div className="relative isolate">
   <div
    ref={hostRef}
    className={
     travel
      ? "relative z-0 h-48 w-full sm:h-56 lg:h-64"
      : tallMap
      ? "relative z-0 h-56 w-full sm:h-72 lg:h-[calc(100dvh-10.5rem)]"
      : "relative z-0 h-[22rem] w-full sm:h-[28rem] lg:h-[32rem]"
    }
    role="application"
    aria-label={
     plan
      ? "Map of this travel plan"
      : savedOnly
        ? "Map of saved Eco-communities"
        : "Map of Eco-communities"
    }
   />

   {savedOnly && savedReady && pinCommunities.length === 0 ? (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-surface/80 px-6">
     <div className="pointer-events-auto max-w-sm rounded-md bg-surface px-5 py-4 text-center shadow-border">
      <p className="font-display text-xl text-fg">No saved villages here</p>
      <p className="mt-2 text-sm text-muted">
       {savedSlugs.size === 0
        ? "Bookmark a village from a pin or a card, then this map will hold just those."
        : "None of the villages in this view are on your saved list."}
      </p>
      {user ? (
       <Link to="/leaders" hash="saved" className="mt-3 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
        Open your saved list
       </Link>
      ) : null}
     </div>
    </div>
   ) : null}

   {selected && travel && !bookingPreviewSlug ? (
    <aside
     aria-label="Village preview"
     data-plan-pin-preview={selected.slug}
     className="plan-pin-preview absolute bottom-3 left-3 z-20 max-w-56"
    >
     <button
      type="button"
      onClick={() =>
       navigate({ to: "/communities/$slug", params: { slug: selected.slug } })
      }
      className="flex min-h-11 w-full items-center gap-2 rounded-md bg-surface p-1.5 pr-3 text-left shadow-border-hover transition-transform duration-150 ease-out active:scale-[0.96]"
     >
      <span className="min-w-0 font-display text-sm leading-snug text-fg line-clamp-2">
       {selected.name}
      </span>
     </button>
    </aside>
   ) : null}
   {selected && !travel && !bookingPreviewSlug ? (
    doorsOnly ? (
     <aside
      aria-label="Village preview"
      data-doors-preview={selected.slug}
      className="absolute inset-x-3 bottom-3 z-20 max-h-[min(32rem,calc(100%-1.5rem))] max-w-md overflow-y-auto overflow-x-hidden rounded-md bg-surface shadow-border-hover sm:inset-x-auto sm:left-3 sm:top-3 sm:bottom-auto"
     >
      <DoorsVillagePanel community={selected} />
      <button
       type="button"
       onClick={clearSelection}
       className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
       aria-label="Close preview"
      >
       <X className="size-4" aria-hidden />
      </button>
     </aside>
    ) : plus ? (
   <aside aria-label="Village preview" className="absolute inset-x-3 bottom-3 z-20 max-h-[calc(100%-1.5rem)] max-w-md overflow-y-auto overflow-x-hidden rounded-md bg-surface shadow-border-hover sm:inset-x-auto sm:left-3 sm:top-3 sm:bottom-auto">
    <div className="px-14 pt-3">
     <VillageDoorsPanel slug={selected.slug} compact />
    </div>
    <button
     type="button"
     onClick={() =>
      navigate({ to: "/communities/$slug", params: { slug: selected.slug } })
     }
     className="block w-full text-left"
    >
     <div className="p-3 pb-0">
      <StatusBadge active={selected.stillActive} size="card" />
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-moss">{selected.region}</p>
      <p className="mt-1 font-display text-xl leading-snug text-fg">{selected.name}</p>
     </div>
    </button>
    <div className="flex flex-col gap-2 px-3 pt-2">
     <PlaceImagesLink name={selected.name} location={selected.location} />
     <PreviewOutboundLinks community={selected} />
     <DirectionsButton slug={selected.slug} />
     <NextUpcomingEventCard slug={selected.slug} compact />
     <PreviewKnownFor slug={selected.slug} />
     <PreviewGovernance slug={selected.slug} />
     <LegalFormChips slug={selected.slug} compact />
     <BookingStayChip slug={selected.slug} compact />
     <UniqueFoundingChip slug={selected.slug} compact />
     <VolunteerProgramPreviewLink slug={selected.slug} />
     {plan ? (
      routeStops.some((row) => row.slug === selected.slug) ? (
       <button
        type="button"
        onClick={() => removeVillage(selected.slug)}
        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg hover:bg-panel"
       >
        <Minus className="size-3.5" aria-hidden />
        Remove from route
       </button>
      ) : (
       <button
        type="button"
        onClick={() => addVillage(selected.slug)}
        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg hover:bg-panel"
       >
        <Plus className="size-3.5" aria-hidden />
        Add to route
       </button>
      )
     ) : null}
    </div>
    <button
     type="button"
     onClick={() =>
      navigate({ to: "/communities/$slug", params: { slug: selected.slug } })
     }
     className="block w-full p-3 pt-1 text-left"
    >
     <PreviewFacts community={selected} />
     <p className="mt-2 text-sm font-medium text-forest">Tap the pin again to open the page</p>
    </button>
    <button
     type="button"
     onClick={clearSelection}
     className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
     aria-label="Close preview"
    >
     <X className="size-4" aria-hidden />
    </button>
    <div className="absolute left-2 top-2 z-10">
     <SaveVillageButton slug={selected.slug} variant="icon" className="bg-gold text-ink hover:bg-gold-deep" />
    </div>
   </aside>
    ) : (
     <aside
      aria-label="Village preview"
      className="absolute inset-x-3 bottom-3 z-20 max-h-[calc(100%-1.5rem)] max-w-md overflow-y-auto overflow-x-hidden rounded-md bg-surface shadow-border-hover sm:inset-x-auto sm:left-3 sm:top-3 sm:bottom-auto"
     >
      <LockedVillagePanel community={selected} />
      <button
       type="button"
       onClick={clearSelection}
       className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
       aria-label="Close preview"
      >
       <X className="size-4" aria-hidden />
      </button>
     </aside>
    )
   ): null}
   {bookingPreviewSlug && plus && !doorsOnly ? (
    <aside
     aria-label="Booking preview"
     data-booking-preview={bookingPreviewSlug}
     className="absolute inset-x-3 bottom-3 z-20 max-h-[calc(100%-1.5rem)] max-w-md overflow-y-auto overflow-x-hidden rounded-md bg-surface shadow-border-hover sm:inset-x-auto sm:left-3 sm:top-3 sm:bottom-auto"
    >
     <BookingStayBody
      slug={bookingPreviewSlug}
      onOpen={() => openBookingStay(bookingPreviewSlug)}
      hint="Tap the pin again to open their booking page"
     />
     <button
      type="button"
      onClick={clearSelection}
      className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
      aria-label="Close booking preview"
     >
      <X className="size-4" aria-hidden />
     </button>
    </aside>
   ) : null}
  </div>
  ) : null}
  </div>
  {travel ? (
   <div className="flex flex-wrap items-center gap-2 px-1">
    {plus && !doorsOnly ? <MemberShareButton onChange={() => void refreshMemberPlaces()} /> : null}
    {plus && !doorsOnly ? (
     <MeetHalfway places={memberPlaces} onOpen={(slug) => chooseRef.current(slug)} />
    ) : null}
    {mounted && !isPending && user && !doorsOnly ? (
     <SavedOnlyToggle
      pressed={savedOnly}
      canToggle={savedReady}
      onToggle={() => {
       setSavedOnly((on) => {
        const next = !on;
        if (next) setSavedSlugs(new Set(savedSlugsRef.current));
        return next;
       });
      }}
     />
    ) : null}
    <p className="text-xs text-subtle">
     {plan
      ? `${villageStopsOf(plan).length} on this route`
      : savedOnly
      ? `${savedReady ? savedCount : "…"} saved`
      : `${pinCommunities.length} pins`}
    </p>
    {plan ? <SaveTravelPlanButton plan={plan} /> : null}
   </div>
  ) : null}
  {hallPlan ? (typeof belowMap === "function" ? belowMap(plan ? [...new Set(villageStopsOf(plan).flatMap((stop) => (stop.slug ? [stop.slug] : [])))] : null) : belowMap) : null}
  {plan && (!travel || planPanelOpen) ? (
   <TravelPlanItinerary
    plan={plan}
    locating={locating}
    hasCustomStart={Boolean(origin || near)}
    startLabel={plan.stops[0]?.name ?? effectiveOrigin()?.name ?? null}
    destination={destination}
    message={planMessage}
    panel={travel}
    onMyLocation={useMyLocationStart}
    onStartAtVillage={() => {
     setOrigin(null);
    }}
    onSetDestination={(stop) => {
     setDestination(stop);
     if (stop) setRoundTrip(false);
    }}
    onAddVillage={addVillage}
    onRemoveVillage={removeVillage}
    onMoveVillage={reorderVillage}
    onShortestPath={() => {
     makePlan(
      effectiveOrigin(),
      roundTrip,
      destination,
      preferDrive,
      villageStopsOf(plan),
      false,
     );
     setPlanMessage("Back to the shortest path.");
    }}
   />
  ) : null}
  {hallPlan && plus ? routeControls(true) : null}
  {travel || hallPlan ? null : routeControls(false)}
 </section>
 ) : (
  <section
   id="atlas-map"
   className={
    docked
     ? "atlas-map scroll-mt-20 overflow-hidden rounded-lg border border-border bg-panel shadow-border"
     : "atlas-map mt-6 scroll-mt-20 overflow-hidden rounded-lg bg-panel shadow-border"
   }
   aria-labelledby={titleId}
  >
   <div className="flex flex-wrap items-center justify-between gap-3 bg-surface px-4 py-3">
    <h2 id={titleId} className="font-display text-xl text-fg">
     Map of the atlas
    </h2>
    <Button type="button" onClick={() => setMapOpen(true)}>
     Show map
    </Button>
   </div>
  </section>
 );
}

function dashFor(mode: TransportMode): string | undefined {
 switch (mode) {
  case "walk":
   return "1 8";
  case "bike":
   return "2 8";
  case "bus":
   return "6 8";
  case "train":
   return "14 8";
  case "ferry":
   return "4 10";
  case "flight":
   return "18 12";
  default:
   return undefined;
 }
}

function PreviewKnownFor({ slug }: { slug: string }) {
 const life = dailyLifeFor(slug);
 return (
  <article className="rounded-md border border-forest/20 bg-forest/5 p-3">
   <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Known for</p>
   <h3 className="mt-1 font-display text-lg leading-snug text-fg">{life.unique.title}</h3>
   <p className="mt-1.5 text-sm leading-snug text-muted line-clamp-3 sm:line-clamp-none">{life.unique.detail}</p>
  </article>
 );
}

function PreviewGovernance({ slug }: { slug: string }) {
 const row = governanceFor(slug);
 return (
  <article
   className={`rounded-md p-3 ${
    row.unique ? "border border-forest/25 bg-forest/5" : "bg-panel"
   }`}
  >
   <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
    Internal governance
   </p>
   <div className="mt-1.5 flex flex-wrap gap-1.5">
    {row.unique ? <UniqueGovernanceChip slug={slug} compact /> : null}
    <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-fg shadow-border">
     {row.modelLabel}
    </span>
   </div>
   <p className="mt-2 text-sm leading-snug text-fg line-clamp-3 sm:line-clamp-none">{row.whoDecides}</p>
   {row.bodies.length > 0 ? (
    <ul className="mt-2 flex flex-wrap gap-1.5">
     {row.bodies.map((body) => (
      <li
       key={body.name}
       className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-fg shadow-border"
      >
       {body.name}
      </li>
     ))}
    </ul>
   ) : null}
  </article>
 );
}

function PreviewFacts({ community }: { community: Community }) {
 const n = entityCount(community.slug);
 const money = fundingFor(community.slug);
 const rows: { label: string; value: string; wide?: boolean }[] = [
  { label: "Mission", value: community.summary, wide: true },
  { label: "Founded", value: String(community.foundedYear) },
  { label: "Members", value: community.members.toLocaleString() },
  { label: "Land", value: community.acres ? `${community.acres.toLocaleString()} ac` : "Urban" },
  { label: "Status", value: community.stillActive ? "Active" : "Inactive" },
  { label: "Legal form", value: community.legalCategory },
  { label: "Entities", value: String(n) },
  { label: "Main income", value: money.privateHeadline },
  { label: "Grants", value: money.grantsHeadline },
 ];
 return (
  <table className="w-full text-xs">
   <tbody>
    {rows.map((row) => (
     <tr key={row.label} className="border-t border-border">
      <th
       scope="row"
       className={`py-1.5 pr-3 text-left font-medium text-subtle ${row.wide ? "align-top" : ""}`}
      >
       {row.label}
      </th>
      <td
       className={`py-1.5 font-medium leading-snug text-fg ${
        row.wide ? "text-left" : "text-right tabular-nums"
       }`}
      >
       {row.value}
      </td>
     </tr>
    ))}
   </tbody>
  </table>
 );
}

function SavedOnlyToggle({
 pressed,
 canToggle,
 onToggle,
}: {
 pressed: boolean;
 canToggle: boolean;
 onToggle: () => void;
}) {
 return (
  <button
   type="button"
   aria-pressed={pressed}
   aria-label={pressed ? "Showing saved villages. Tap to show all." : "Show only saved villages"}
   onClick={onToggle}
   disabled={!canToggle}
   className={`inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium shadow-border ${
    pressed ? "bg-forest text-cream" : "bg-bg text-fg hover:bg-panel"
   }`}
  >
   {pressed ? <BookmarkCheck className="size-4" aria-hidden /> : <Bookmark className="size-4" aria-hidden />}
   Saved only
  </button>
 );
}
