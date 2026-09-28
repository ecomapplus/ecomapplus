import { useEffect, useRef, useState } from "react";
import type { EcoPoint } from "@/data/ecomap-match";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/data/geo";

type LeafletLib = typeof import("leaflet");

function tokenColor(name: string, fallback: string) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return raw || fallback;
}

export function LocationPicker({
  value,
  onChange,
}: {
  value: EcoPoint | null;
  onChange: (point: EcoPoint) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const leafletRef = useRef<LeafletLib | null>(null);
  const markerRef = useRef<import("leaflet").CircleMarker | null>(null);
  const onChangeRef = useRef(onChange);
  const [ready, setReady] = useState(false);
  onChangeRef.current = onChange;

  useEffect(() => {
    let cancelled = false;
    let later = 0;
    const host = hostRef.current;
    if (!host) return;

    (async () => {
      const leafletMod = (await import("leaflet")) as unknown as LeafletLib & { default?: LeafletLib };
      if (cancelled || !hostRef.current) return;
      const L = leafletMod.default ?? leafletMod;
      leafletRef.current = L;
      const map = L.map(host, {
        scrollWheelZoom: true,
        doubleClickZoom: false,
        zoomControl: false,
        attributionControl: true,
        minZoom: 1,
        maxZoom: 8,
        worldCopyJump: true,
      });
      L.control.zoom({ position: "topright" }).addTo(map);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 8,
      }).addTo(map);
      map.setView(DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM);
      map.on("click", (event: import("leaflet").LeafletMouseEvent) => {
        onChangeRef.current({ lat: event.latlng.lat, lng: event.latlng.lng });
      });
      mapRef.current = map;
      setReady(true);
      requestAnimationFrame(() => map.invalidateSize());
      later = window.setTimeout(() => map.invalidateSize(), 200);
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(later);
      markerRef.current?.remove();
      markerRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
      leafletRef.current = null;
    };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !ready) return;
    const map = mapRef.current;
    if (!map) return;

    const measure = () => map.invalidateSize();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) measure();
      },
      { threshold: 0.2 },
    );
    io.observe(host);
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ready]);

  useEffect(() => {
    const map = mapRef.current;
    const L = leafletRef.current;
    if (!map || !L || !value) return;
    const forest = tokenColor("--color-forest", "#3b5d3a");
    const cream = tokenColor("--color-cream", "#f1ede3");
    if (!markerRef.current) {
      markerRef.current = L.circleMarker([value.lat, value.lng], {
        radius: 8,
        color: cream,
        weight: 2,
        fillColor: forest,
        fillOpacity: 1,
      }).addTo(map);
    } else {
      markerRef.current.setLatLng([value.lat, value.lng]);
      markerRef.current.setStyle({ color: cream, fillColor: forest });
    }
    const zoom = Math.max(map.getZoom(), 3);
    map.setView([value.lat, value.lng], zoom, { animate: false });
  }, [value, ready]);

  return (
    <div className="relative overflow-hidden rounded-lg bg-panel shadow-border">
      <div ref={hostRef} className="atlas-map ecomap-map" />
      {!ready ? (
        <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-muted">
          Loading map
        </p>
      ) : null}
    </div>
  );
}
