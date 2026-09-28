import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { usePlusAccess } from "@/lib/plus-membership";
import {
 getCommunity,
 nonSatellitePhotos,
 shuffleWithSeed,
 villageThumbSrc,
} from "@/data/communities";

/** Extra tiles appear as the row gets wider. Same 4 → 12 steps as before. */
export const STRIP_SHOW = [
 "",
 "",
 "",
 "",
 "hidden sm:block",
 "hidden sm:block",
 "hidden md:block",
 "hidden md:block",
 "hidden lg:block",
 "hidden lg:block",
 "hidden xl:block",
 "hidden xl:block",
];

export const STRIP_COUNT = STRIP_SHOW.length;
export const STRIP_ALWAYS = 4;

const POOL = nonSatellitePhotos();
const STORAGE_KEY = "vc-collab-strip";

function readStripSeed() {
 try {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  const n = raw ? Number(raw) : NaN;
  if (Number.isFinite(n)) return n;
 } catch {
  /* ignore */
 }
 const n = Math.random();
 try {
  sessionStorage.setItem(STORAGE_KEY, String(n));
 } catch {
  /* ignore */
 }
 return n;
}

export function villageSlugFromPath(pathname: string): string | null {
 const match = pathname.match(/^\/communities\/([^/]+)\/?$/);
 return match?.[1] ?? null;
}

/** Hide a body photo at the breakpoint where the strip already shows it. */
export function bodyPhotoHideClass(index: number): string | null {
 if (index < STRIP_ALWAYS) return null;
 if (index < 6) return "sm:hidden";
 if (index < 8) return "md:hidden";
 if (index < 10) return "lg:hidden";
 if (index < 12) return "xl:hidden";
 return "";
}

/** Hide the leftover gallery when every leftover tile is already in the strip. */
export function overflowGalleryClass(count: number): string | null {
 if (count <= STRIP_ALWAYS) return null;
 if (count <= 6) return "sm:hidden";
 if (count <= 8) return "md:hidden";
 if (count <= 10) return "lg:hidden";
 if (count <= 12) return "xl:hidden";
 return "";
}

export function CollabStrip() {
  return null;
}

function RandomCollabStrip() {
 const [seed, setSeed] = useState(1);
 useEffect(() => {
  setSeed(readStripSeed());
 }, []);
 const photos = useMemo(() => shuffleWithSeed(POOL, seed).slice(0, STRIP_COUNT), [seed]);

 return (
 <section
 aria-label="People collaborating in the atlas"
 className="grid grid-cols-4 gap-px border-b border-border bg-border sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12"
 >
 {photos.map((row, i) => {
 const community = getCommunity(row.slug);
 const name = community?.name ?? row.slug;
 return (
 <Link
 key={row.src}
 to="/communities/$slug"
 params={{ slug: row.slug }}
 title={name}
 aria-label={name}
 className={cn(
 "group relative min-w-0 overflow-hidden bg-panel focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest/40",
 STRIP_SHOW[i],
 )}
 >
 <img
 src={villageThumbSrc(row.src)}
 alt=""
 width={480}
 height={320}
 loading={i < STRIP_ALWAYS ? "eager" : "lazy"}
 decoding="async"
 fetchPriority={i < STRIP_ALWAYS ? "high" : "low"}
 onError={(event) => {
 event.currentTarget.style.visibility = "hidden";
 }}
 className="aspect-square size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-200 ease-out group-hover:scale-105"
 />
 </Link>
 );
 })}
 </section>
 );
}

function VillagePhotoStrip({ name, images }: { name: string; images: string[] }) {
 const photos = images.slice(0, STRIP_COUNT);
 if (photos.length === 0) return null;

 return (
 <section
 data-village-strip=""
 aria-label={`Photographs of ${name}`}
 className="grid grid-cols-4 gap-px border-b border-border bg-border sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12"
 >
 {photos.map((src, i) => (
 <a
 key={src}
 href={src}
 target="_blank"
 rel="noreferrer"
 title={`${name} photograph ${i + 1}`}
 aria-label={`${name} photograph ${i + 1}`}
 className={cn(
 "group relative min-w-0 overflow-hidden bg-panel focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest/40",
 STRIP_SHOW[i],
 )}
 >
 <img
 src={villageThumbSrc(src)}
 alt=""
 width={480}
 height={320}
 loading={i < STRIP_ALWAYS ? "eager" : "lazy"}
 decoding="async"
 fetchPriority={i < STRIP_ALWAYS ? "high" : "low"}
 onError={(event) => {
 event.currentTarget.style.visibility = "hidden";
 }}
 className="aspect-square size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-200 ease-out group-hover:scale-105"
 />
 </a>
 ))}
 </section>
 );
}
