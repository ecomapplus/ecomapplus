import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { LegalFormChips } from "@/components/legal-form-chips";
import { LockedDetailsLink } from "@/components/locked-details";
import { PublicFlagChips } from "@/components/public-flags";
import { SaveVillageButton } from "@/components/save-village-button";
import { VisitJoinStats } from "@/components/visit-join";
import { FundingStats } from "@/components/funding-section";
import { DailyLifeStats } from "@/components/daily-life";
import { LandOwnershipStats } from "@/components/land-ownership";
import { GovernanceStats, UniqueGovernanceChip } from "@/components/governance";
import { UniqueFoundingChip, UniqueFoundingStats } from "@/components/unique-founding";
import { VolunteerProgramChip } from "@/components/volunteer-program";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { StatusBadge } from "@/components/inactive-badge";
import { PlaceImagesLink } from "@/components/place-images-link";
import { type Community } from "@/data/communities";
import { formatEventWhen, upcomingEventsFor } from "@/data/events";
import { entityCount, legalFormsFor } from "@/data/legal-entities";
import { residencyFor, trialStayUrl } from "@/data/residencies";
import { isDirectoryUrl } from "@/data/sources";
import { stayClass } from "@/data/stay-class";
import { workStayFor } from "@/data/work-stay";
import { usePlusAccess } from "@/lib/plus-membership";

export function CommunityCard({
 community,
 priority = false,
 openings = false,
}: {
 community: Community;
 priority?: boolean;
 openings?: boolean;
}) {
 const plus = usePlusAccess();
 if (!plus) return <LockedCommunityCard community={community} priority={priority} />;
 return <OpenCommunityCard community={community} openings={openings} />;
}

function LockedCommunityCard({
 community,
}: {
 community: Community;
 priority: boolean;
}) {
 const next = `/communities/${community.slug}`;
 return (
  <article className="relative flex h-full flex-col overflow-hidden rounded-lg bg-surface shadow-border">
   <Link to="/communities/$slug" params={{ slug: community.slug }} className="flex flex-col px-4 pt-4">
    <p className="text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
    <h2 className="mt-2 font-display text-xl leading-snug text-fg">{community.name}</h2>
    <p className="mt-1 text-sm text-muted">{community.location}</p>
    <div className="mt-3">
     <PublicFlagChips slug={community.slug} />
    </div>
   </Link>
   <LockedDetailsLink next={next} className="mx-4 mb-4 mt-4" />
  </article>
 );
}

function OpenCommunityCard({
 community,
 openings = false,
}: {
 community: Community;
 openings?: boolean;
}) {
 const n = entityCount(community.slug);
 const forms = legalFormsFor(community.slug);
 return (<article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-surface shadow-border transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-border-hover">
 <div className="absolute left-2 top-2 z-10">
 <SaveVillageButton slug={community.slug} variant="icon" />
 </div>
 <Link to="/communities/$slug" params={{ slug: community.slug }} className="flex flex-col">
 <div className="relative px-4 pt-3">
 <StatusBadge active={community.stillActive} size="card" />
 <p className="mt-2 text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
 <h2 className="mt-2 font-display text-xl leading-snug text-fg">{community.name}</h2>
 </div>
 </Link>
 <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-2">
 <PlaceImagesLink name={community.name} location={community.location} />
 {openings ? <CardOpenings slug={community.slug} /> : null}
 <LegalFormChips slug={community.slug} compact />
 <BookingStayChip slug={community.slug} compact />
 <VolunteerProgramChip slug={community.slug} compact />
 <UniqueGovernanceChip slug={community.slug} compact />
 <UniqueFoundingChip slug={community.slug} compact />
 <Link to="/communities/$slug" params={{ slug: community.slug }} className="mt-auto block">
 <p className="text-xs text-subtle">
 {n} {n === 1 ? "entity": "entities"}
 {forms.length > 1 ? ` · ${forms.length} legal structures`: ""}
 </p>
 <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 text-xs text-muted">
 <div>
 <dt className="text-subtle">Founded</dt>
 <dd className="font-medium tabular-nums text-fg">{community.foundedYear}</dd>
 </div>
 <div>
 <dt className="text-subtle">Members</dt>
 <dd className="font-medium tabular-nums text-fg">{community.members}</dd>
 </div>
 <div>
 <dt className="text-subtle">Land</dt>
 <dd className="font-medium text-fg">
 {community.acres ? `${community.acres.toLocaleString()} ac`: "Urban"}
 </dd>
 </div>
 </dl>
 <VisitJoinStats slug={community.slug} />
 <FundingStats slug={community.slug} />
 <DailyLifeStats slug={community.slug} />
 <LandOwnershipStats slug={community.slug} />
 <GovernanceStats slug={community.slug} />
 <UniqueFoundingStats slug={community.slug} />
 </Link>
 </div>
 </article>);
}

type OpeningKind = "work-trade" | "residency" | "event";

type Opening = {
  id: string;
  kind: OpeningKind;
  title: string;
  detail: string;
  href: string;
};

const OPENING_LABEL: Record<OpeningKind, string> = {
  "work-trade": "Work-trade",
  residency: "Residency",
  event: "Event",
};

function pushOpening(rows: Opening[], row: Opening) {
  if (!row.href || rows.some((have) => have.href === row.href && have.title === row.title)) return;
  rows.push(row);
}

function openingsFor(slug: string): Opening[] {
  const work: Opening[] = [];
  const stays: Opening[] = [];
  const events: Opening[] = [];
  for (const row of upcomingEventsFor(slug)) {
    const href = row.url.trim();
    if (!href || isDirectoryUrl(href)) continue;
    const klass = stayClass(row);
    const when = formatEventWhen(row.start, row.end);
    const detail = [when, row.unannounced ? "Not officially announced." : "", row.blurb].filter(Boolean).join(" ");
    const item = { id: `${row.start}|${row.title}`, title: row.title, detail, href };
    if (klass === "work-stay") pushOpening(work, { ...item, kind: "work-trade" });
    else if (klass === "residency") pushOpening(stays, { ...item, kind: "residency" });
    else pushOpening(events, { ...item, kind: "event" });
  }
  const trade = workStayFor(slug);
  const tradeHref = trade?.program?.url.trim();
  if (trade && tradeHref && !isDirectoryUrl(tradeHref) && !work.some((row) => row.href === tradeHref)) {
    pushOpening(work, {
      id: `work|${slug}`,
      kind: "work-trade",
      title: "Work-trade",
      detail: trade.note,
      href: tradeHref,
    });
  }
  const residency = residencyFor(slug);
  const residencyHref = trialStayUrl(slug);
  if (residency && residencyHref && !stays.some((row) => row.href === residencyHref)) {
    pushOpening(stays, {
      id: `residency|${slug}`,
      kind: "residency",
      title: "Residency",
      detail: residency.note,
      href: residencyHref,
    });
  }
  return [...work, ...stays, ...events];
}

function CardOpenings({ slug }: { slug: string }) {
  const rows = openingsFor(slug);
  if (rows.length === 0) return null;
  const shown: Opening[] = [];
  const seen = new Set<OpeningKind>();
  for (const row of rows) {
    if (seen.has(row.kind)) continue;
    seen.add(row.kind);
    shown.push(row);
  }
  const extra = rows.length - shown.length;
  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-2">
        {shown.map((row) => (
          <li key={row.id}>
            <a
              href={row.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-md bg-forest/5 px-3 py-2 hover:bg-forest/10"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-moss">{OPENING_LABEL[row.kind]}</span>
              <span className="mt-0.5 flex items-start justify-between gap-2">
                <span className="text-sm font-medium leading-snug text-fg">{row.title}</span>
                <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-forest" aria-hidden />
              </span>
              {row.detail ? (
                <span className="mt-1 line-clamp-2 block text-xs leading-snug text-muted">{row.detail}</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
      {extra > 0 ? (
        <Link
          to="/communities/$slug/doors"
          params={{ slug }}
          className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
        >
          See all open doors
        </Link>
      ) : null}
    </div>
  );
}
