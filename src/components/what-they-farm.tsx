import { PawPrint, Sprout } from "lucide-react";
import { farmFor } from "@/data/farms";

export function FarmChip({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const farm = farmFor(slug);
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${
        farm.hasFarm ? "bg-forest/10 text-forest-deep" : "bg-panel text-muted"
      } ${compact ? "min-h-9 px-2.5 py-1 text-xs" : "min-h-9 px-3 py-1 text-xs sm:text-sm"}`}
    >
      {farm.hasFarm ? "Farm" : "No farm"}
    </span>
  );
}

function Pills({ items, empty }: { items: string[]; empty: string }) {
  if (items.length === 0) {
    return <p className="mt-3 text-sm text-muted">{empty}</p>;
  }
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-panel px-2.5 py-0.5 text-sm font-medium text-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WhatTheyFarmSection({ slug }: { slug: string }) {
  const farm = farmFor(slug);
  return (
    <section className="mt-12 scroll-mt-40" id="farm">
      <h2 className="font-display text-2xl text-fg">What they farm</h2>
      {!farm.hasFarm ? (
        <article className="mt-6 rounded-md bg-surface p-5 shadow-border">
          <h3 className="font-display text-2xl leading-snug text-fg">No farm</h3>
        </article>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <article className="rounded-md bg-surface p-5 shadow-border">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
              <Sprout className="size-3.5" aria-hidden />
              They grow
            </p>
            <Pills items={farm.grows} empty="None recorded" />
          </article>
          <article className="rounded-md bg-surface p-5 shadow-border">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
              <PawPrint className="size-3.5" aria-hidden />
              Animals
            </p>
            <Pills items={farm.animals} empty="None recorded" />
          </article>
        </div>
      )}
    </section>
  );
}
