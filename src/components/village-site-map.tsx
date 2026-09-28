import { Link, useNavigate } from "@tanstack/react-router";
import { Route } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { communities, type Community } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";
import { kmBetween } from "@/data/geo";
import { useMounted } from "@/lib/use-mounted";

type LeafletLib = typeof import("leaflet");
type LeafletMap = import("leaflet").Map;

const NEAR_KM = 400;

export function CreateTravelPlanButton({
  slug,
  stillActive,
  compact = false,
}: {
  slug: string;
  stillActive: boolean;
  compact?: boolean;
}) {
  if (!stillActive || !coordsFor(slug)) return null;
  if (compact) {
    return (
      <Link
        to="/travel-plan"
        search={{ around: slug }}
        className="inline-flex h-9 items-center gap-1 rounded-full bg-forest px-2.5 text-xs font-medium text-cream hover:bg-forest-deep"
      >
        <Route className="size-3" aria-hidden />
        Create a travel plan
      </Link>
    );
  }
  return (
    <Button asChild className="mt-3 w-full">
      <Link to="/travel-plan" search={{ around: slug }}>
        <Route className="size-4" aria-hidden />
        Create a travel plan
      </Link>
    </Button>
  );
}

export function VillageSiteMap({ community }: { community: Community }) {
  const mounted = useMounted();
  const navigate = useNavigate();
  const hostRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;
  const point = coordsFor(community.slug);

  useEffect(() => {
    if (!mounted || !point) return;
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let map: LeafletMap | null = null;

    void (async () => {
      const leafletMod = (await import("leaflet")) as unknown as LeafletLib & { default?: LeafletLib };
      if (cancelled || !hostRef.current) return;
      const L = leafletMod.default ?? leafletMod;
      map = L.map(host, {
        scrollWheelZoom: false,
        doubleClickZoom: true,
        zoomControl: false,
        attributionControl: true,
        minZoom: 2,
        maxZoom: 12,
      });
      L.control.zoom({ position: "topright" }).addTo(map);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 12,
      }).addTo(map);
      map.setView([point.lat, point.lng], 8, { animate: false });

      const nearby = communities.filter((row) => {
        if (!row.stillActive || row.slug === community.slug) return false;
        const other = coordsFor(row.slug);
        if (!other) return false;
        return kmBetween(point, other) <= NEAR_KM;
      });

      for (const row of nearby) {
        const other = coordsFor(row.slug);
        if (!other) continue;
        const icon = L.divIcon({
          className: "atlas-pin-wrap",
          html: `<span class="atlas-pin"><span class="atlas-pin-dot"></span></span>`,
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        });
        const marker = L.marker([other.lat, other.lng], {
          icon,
          title: row.name,
          keyboard: true,
          riseOnHover: true,
        });
        marker.on("click", () => {
          void navigateRef.current({
            to: "/communities/$slug",
            params: { slug: row.slug },
          });
        });
        marker.addTo(map);
      }

      const focus = L.divIcon({
        className: "atlas-pin-wrap is-selected",
        html: `<span class="atlas-pin"><span class="atlas-pin-dot"></span></span>`,
        iconSize: [44, 44],
        iconAnchor: [22, 22],
      });
      L.marker([point.lat, point.lng], {
        icon: focus,
        title: community.name,
        keyboard: true,
        zIndexOffset: 600,
      }).addTo(map);

      mapRef.current = map;
      requestAnimationFrame(() => map?.invalidateSize());
    })();

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
    };
  }, [mounted, community.slug, community.name, point?.lat, point?.lng]);

  if (!point) return null;

  return (
    <div id="map" className="scroll-mt-40">
      <div className="overflow-hidden rounded-lg bg-panel shadow-border">
        {mounted ? (
          <div
            ref={hostRef}
            className="relative z-0 h-64 w-full sm:h-72 lg:h-80"
            role="application"
            aria-label={`Map centered on ${community.name}`}
          />
        ) : (
          <div className="h-64 animate-pulse bg-panel sm:h-72 lg:h-80" />
        )}
      </div>
      {community.stillActive ? <CreateTravelPlanButton slug={community.slug} stillActive /> : null}
    </div>
  );
}
