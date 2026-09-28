import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PublicFlagChips } from "@/components/public-flags";
import { type Community } from "@/data/communities";
import { formatEventWhen, upcomingEventsFor } from "@/data/events";
import { leadersBySlug } from "@/data/leaders";
import { publicFlagsFor } from "@/data/public-flags";
import {
  PLUS_PRICE_YEAR,
  rememberPlusNext,
  usePlusAccess,
} from "@/lib/plus-membership";
import { cn } from "@/lib/utils";

export function LockedDetailsLink({
  next,
  className,
  children,
  compact = true,
}: {
  next?: string;
  className?: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg bg-panel text-left shadow-border", className)}>
      {children}
      <LockedDetailsCopy next={next} compact={compact} />
    </div>
  );
}

export function LockedDetailsCopy({
  compact = false,
  next,
}: {
  compact?: boolean;
  next?: string;
}) {
  return (
    <div className={cn("relative z-10", compact ? "px-4 py-4" : "px-5 py-6 sm:px-6 sm:py-8")}>
      <p className={cn("font-display leading-snug text-fg", compact ? "text-lg" : "text-2xl")}>
        Want more info?
      </p>
      <Button asChild size="lg" className="mt-4 w-full whitespace-normal">
        <Link to="/plus" onClick={() => rememberPlusNext(next)}>
          Join EcoMapPlus for ${PLUS_PRICE_YEAR}/year
        </Link>
      </Button>
    </div>
  );
}

export function LockedBlurPhoto({ className }: { src?: string; className?: string }) {
  return <div className={cn("ecomap-lock-stage relative overflow-hidden bg-panel", className)} />;
}

/** Name and the four public doors — locked facts and EcoMapPlus sit below. */
export function DoorsVillagePanel({
  community,
  className,
}: {
  community: Community;
  className?: string;
}) {
  const plus = usePlusAccess();
  const flags = publicFlagsFor(community.slug);
  const next = `/communities/${community.slug}`;
  return (
    <div className={className}>
      <div className="p-4">
        <div className="pr-14">
          <p className="text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
          <p className="mt-1 font-display text-xl leading-snug text-fg">{community.name}</p>
          <p className="mt-1 text-sm text-muted">{community.location}</p>
          {flags.length > 0 ? (
            <div className="mt-3">
              <PublicFlagChips slug={community.slug} />
            </div>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-muted">
              No work-stay, overnight, residency, or event listed.
            </p>
          )}
        </div>
      </div>
      <div className="px-4 pb-4">
        {plus ? (
          <>
            <PaywallFacts community={community} locked={false} />
            <Link
              to="/communities/$slug"
              params={{ slug: community.slug }}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
            >
              Open the village page
            </Link>
          </>
        ) : (
          <PlusPitchCard next={next} />
        )}
      </div>
    </div>
  );
}

function websiteLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

function contactForVillage(slug: string): string | null {
  const row = leadersBySlug[slug];
  const office = row?.office;
  if (office) {
    const line = [office.email, office.phone].filter(Boolean).join(" · ");
    if (line) return line;
    if (office.address) return office.address;
  }
  const person = row?.people.find((p) => p.email || p.phone);
  if (!person) return null;
  return [person.email, person.phone].filter(Boolean).join(" · ");
}

function PaywallFacts({ community, locked }: { community: Community; locked: boolean }) {
  const events = upcomingEventsFor(community.slug);
  const dates = events.length
    ? events.slice(0, 2).map((row) => formatEventWhen(row.start, row.end)).join(" · ")
    : "No dated event listed";
  const contact = contactForVillage(community.slug) ?? "Village office";
  const rows = [
    { label: "Event dates", value: dates },
    { label: "Website", value: community.website ? websiteLabel(community.website) : "Not listed" },
    { label: "Contact", value: contact },
    { label: "Acres", value: community.acresLabel },
    { label: "Members", value: community.membersLabel },
  ];
  return (
    <div data-locked-facts={locked ? "true" : "false"} className="mt-4 border-t border-border pt-4">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
        {locked ? "Locked with EcoMapPlus" : "Village details"}
      </p>
      <dl className="mt-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 border-t border-border py-2 first:border-t-0">
            <dt className="shrink-0 text-sm text-muted">{row.label}</dt>
            <dd className="min-w-0 text-right text-sm font-medium leading-snug text-fg">
              {locked ? (
                <span className="inline-block h-3 w-24 rounded-sm bg-panel" aria-hidden />
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function PlusPitchCard({ next }: { next: string }) {
  return (
    <div data-plus-pitch className="mt-4 rounded-md bg-panel shadow-border">
      <LockedDetailsCopy compact next={next} />
    </div>
  );
}

/** Name, place, and the four public doors — then a lock that opens Plus. */
export function LockedVillagePanel({
  community,
  className,
}: {
  community: Community;
  className?: string;
}) {
  const next = `/communities/${community.slug}`;
  return (
    <div className={cn("p-4", className)}>
      <p className="text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
      <p className="mt-1 font-display text-xl leading-snug text-fg">{community.name}</p>
      <p className="mt-1 text-sm text-muted">{community.location}</p>
      <div className="mt-3">
        <PublicFlagChips slug={community.slug} />
      </div>
      <div className="mt-4">
        <LockedBlurPhoto className="h-28 rounded-md" />
        <PlusPitchCard next={next} />
      </div>
    </div>
  );
}

export function LockedDirectoryRow({
  community,
  extra,
}: {
  community: Community;
  extra?: ReactNode;
}) {
  const next = `/communities/${community.slug}`;
  return (
    <article className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <Link
          to="/communities/$slug"
          params={{ slug: community.slug }}
          className="font-display text-xl leading-snug text-fg hover:underline"
        >
          {community.name}
        </Link>
        <p className="mt-1 text-sm text-muted">{community.location}</p>
        <div className="mt-2">
          <PublicFlagChips slug={community.slug} />
        </div>
        {extra}
      </div>
      <Link
        to="/plus"
        onClick={() => rememberPlusNext(next)}
        className="inline-flex min-h-11 shrink-0 items-center font-medium text-forest hover:underline"
      >
        Village details
      </Link>
    </article>
  );
}
