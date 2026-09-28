import { useEffect, useId, useRef, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { LegalFormChips } from "@/components/legal-form-chips";
import { LockedDetailsLink } from "@/components/locked-details";
import { PublicFlagChips } from "@/components/public-flags";
import { SaveVillageButton } from "@/components/save-village-button";
import { UniqueGovernanceChip } from "@/components/governance";
import { UniqueFoundingChip } from "@/components/unique-founding";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { VolunteerProgramPreviewLink } from "@/components/volunteer-program";
import { NextUpcomingEventCard } from "@/components/upcoming-events";
import { PlaceImagesLink } from "@/components/place-images-link";
import { getCommunity, type Community } from "@/data/communities";
import { letterFor } from "@/data/newsletters";
import { trialStayUrl } from "@/data/residencies";
import { workStayFor } from "@/data/work-stay";
import { dailyLifeFor } from "@/data/daily-life";
import { fundingFor } from "@/data/funding";
import { governanceFor } from "@/data/governance";
import { StatusBadge } from "@/components/inactive-badge";
import { entityCount } from "@/data/legal-entities";
import { usePlusAccess } from "@/lib/plus-membership";

export function VillageNameButton({
  slug,
  name,
  onPreview,
  className,
}: {
  slug: string;
  name: string;
  onPreview: (slug: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      className={className ?? "font-medium text-left text-fg hover:text-forest hover:underline"}
      onClick={() => onPreview(slug)}
    >
      {name}
    </button>
  );
}

export function VillagePreview({
  slug,
  onClose,
  footer,
}: {
  slug: string;
  onClose: () => void;
  footer?: ReactNode;
}) {
  const community = getCommunity(slug);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, slug]);

  if (!community) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <button type="button" aria-label="Close preview" className="absolute inset-0 bg-ink/40" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[90dvh] w-full max-w-md flex-col overflow-hidden rounded-t-lg border border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-border-hover sm:rounded-lg"
      >
        <div className="min-h-0 flex-1 overflow-y-auto">
          <VillagePreviewBody
            community={community}
            titleId={titleId}
            onOpenPage={() => {
              void navigate({ to: "/communities/$slug", params: { slug: community.slug } });
            }}
            openPageHint="Open the village page"
          />
        </div>
        {footer ? <div className="border-t border-border px-3 py-3">{footer}</div> : null}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
          aria-label="Close preview"
        >
          <span className="text-lg font-medium leading-none" aria-hidden>
            ×
          </span>
        </button>
        <PreviewSave slug={community.slug} />
      </div>
    </div>
  );
}

export function VillagePreviewBody({
  community,
  titleId,
  onOpenPage,
  openPageHint,
  actions,
}: {
  community: Community;
  titleId?: string;
  onOpenPage: () => void;
  openPageHint: string;
  actions?: ReactNode;
}) {
  const plus = usePlusAccess();
  const next = `/communities/${community.slug}`;

  if (!plus) {
    return (
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
        <p id={titleId} className="mt-1 font-display text-xl leading-snug text-fg">
          {community.name}
        </p>
        <p className="mt-1 text-sm text-muted">{community.location}</p>
        <div className="mt-3">
          <PublicFlagChips slug={community.slug} />
        </div>
        <LockedDetailsLink next={next} className="mt-4" />
        <button
          type="button"
          onClick={onOpenPage}
          className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-fg"
        >
          {openPageHint}
        </button>
      </div>
    );
  }

  return (
    <>
      <button type="button" onClick={onOpenPage} className="block w-full text-left">
        <div className="p-3 pb-0">
          <StatusBadge active={community.stillActive} size="card" />
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-moss">{community.region}</p>
          <p id={titleId} className="mt-1 font-display text-xl leading-snug text-fg">
            {community.name}
          </p>
        </div>
      </button>
      <div className="flex flex-col gap-2 px-3 pt-2">
        <PlaceImagesLink name={community.name} location={community.location} />
        <PreviewOutboundLinks community={community} />
        <NextUpcomingEventCard slug={community.slug} compact />
        <PreviewKnownFor slug={community.slug} />
        <PreviewGovernance slug={community.slug} />
        <LegalFormChips slug={community.slug} compact />
        <BookingStayChip slug={community.slug} compact />
        <UniqueFoundingChip slug={community.slug} compact />
        <VolunteerProgramPreviewLink slug={community.slug} />
        {actions}
      </div>
      <button type="button" onClick={onOpenPage} className="block w-full p-3 pt-1 text-left">
        <PreviewFacts community={community} />
        <p className="mt-2 text-sm font-medium text-forest">{openPageHint}</p>
      </button>
    </>
  );
}

export function PreviewOutboundLinks({ community }: { community: Community }) {
  const letter = letterFor(community.slug);
  const stayUrl = workStayFor(community.slug)?.program?.url;
  const trialUrl = trialStayUrl(community.slug);
  const site = community.website.trim();
  if (!site && !letter && !stayUrl && !trialUrl) return null;
  return (
    <div className="flex flex-col gap-2">
      {site ? <PreviewOutLink href={site} label="Official site" /> : null}
      {letter ? <PreviewOutLink href={letter.url} label="Newsletter" /> : null}
      {stayUrl ? <PreviewOutLink href={stayUrl} label="Work-stay" /> : null}
      {trialUrl ? <PreviewOutLink href={trialUrl} label="Trial stay" /> : null}
    </div>
  );
}

function PreviewOutLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => event.stopPropagation()}
      className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest/10 px-3 text-sm font-medium text-forest-deep hover:bg-forest/20"
    >
      {label}
      <ExternalLink className="size-4" aria-hidden />
    </a>
  );
}

function PreviewSave({ slug }: { slug: string }) {
  const plus = usePlusAccess();
  if (!plus) return null;
  return (
    <div className="absolute left-2 top-2 z-10">
      <SaveVillageButton slug={slug} variant="icon" className="bg-gold text-ink hover:bg-gold-deep" />
    </div>
  );
}

export function PreviewKnownFor({ slug }: { slug: string }) {
  const life = dailyLifeFor(slug);
  return (
    <article className="rounded-md border border-forest/20 bg-forest/5 p-3">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Known for</p>
      <h3 className="mt-1 font-display text-lg leading-snug text-fg">{life.unique.title}</h3>
      <p className="mt-1.5 text-sm leading-snug text-muted line-clamp-3 sm:line-clamp-none">{life.unique.detail}</p>
    </article>
  );
}

export function PreviewGovernance({ slug }: { slug: string }) {
  const row = governanceFor(slug);
  return (
    <article className={`rounded-md p-3 ${row.unique ? "border border-forest/25 bg-forest/5" : "bg-panel"}`}>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Internal governance</p>
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

export function PreviewFacts({ community }: { community: Community }) {
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
            <td className={`py-1.5 font-medium leading-snug text-fg ${row.wide ? "text-left" : "text-right tabular-nums"}`}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
