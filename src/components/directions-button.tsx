import { Navigation } from "lucide-react";
import { getCommunity } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";

export function directionsUrl(slug: string): string | null {
  const community = getCommunity(slug);
  if (!community) return null;
  const point = coordsFor(slug);
  const destination = point ? `${point.lat},${point.lng}` : `${community.name}, ${community.location}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function DirectionsButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const href = directionsUrl(slug);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        compact
          ? "inline-flex h-9 items-center gap-1 rounded-full bg-forest px-2.5 text-xs font-medium text-cream hover:bg-forest-deep"
          : "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-forest px-3 text-sm font-medium text-cream hover:bg-forest-deep"
      }
    >
      <Navigation className="size-3.5" aria-hidden />
      Directions
    </a>
  );
}
