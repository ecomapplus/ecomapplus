import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { EntityCountStat, LegalEntitiesSection } from "@/components/legal-entities";
import { LegalFormChips } from "@/components/legal-form-chips";
import { NotFound } from "@/components/not-found";
import { RandomVillageButton } from "@/components/random-village-button";
import { VisitJoinSection, RankMeter, EaseMeter } from "@/components/visit-join";
import { AccommodationsSection } from "@/components/accommodations";
import { VolunteerProgramChip } from "@/components/volunteer-program";
import { FundingSection } from "@/components/funding-section";
import { DailyLifeSection } from "@/components/daily-life";
import { EcologicalInitiativesSection } from "@/components/ecological-initiatives";
import { FarmChip, WhatTheyFarmSection } from "@/components/what-they-farm";
import { InformalAgreementsSection } from "@/components/informal-agreements";
import { LandOwnershipSection } from "@/components/land-ownership";
import { GovernanceSection, UniqueGovernanceChip } from "@/components/governance";
import { CommunitySocial } from "@/components/community-social";
import { SaveVillageButton } from "@/components/save-village-button";
import { VillageLeaders, VillageLeadersChip, VillageLeadersStrip } from "@/components/village-leaders";
import { VillagePageMap, type PageMapItem } from "@/components/village-page-map";
import { VillageSiteMap, CreateTravelPlanButton } from "@/components/village-site-map";
import { CommunityFilmSection } from "@/components/community-film";
import { VillageSocialLinks } from "@/components/village-social-links";
import { UniqueFoundingChip, UniqueFoundingSection } from "@/components/unique-founding";
import { hasUniqueFounding } from "@/data/unique-founding";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { StatusBadge } from "@/components/inactive-badge";
import { filmFor } from "@/data/films";
import { SourcesSection } from "@/components/sources";
import { PlaceImagesLink } from "@/components/place-images-link";
import { kindByForm } from "@/data/charter";
import { getCommunity, neighbors, relatedByLegal, type Community } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";
import { entitiesFor, legalFormsFor } from "@/data/legal-entities";
import { easeLabels, visitJoinFor } from "@/data/visit-join";
import { understoodFor, understoodLabels } from "@/data/understood";
import { volunteerFor } from "@/data/volunteer-programs";
import { isDirectoryUrl } from "@/data/sources";
import { trialStayUrl } from "@/data/residencies";
import { DirectionsButton } from "@/components/directions-button";
import { VillageDoorsPanel } from "@/components/village-doors";
import { upcomingEventsFor } from "@/data/events";
import { visitDoorsFor } from "@/data/visit-types";
import { LockedDetailsLink } from "@/components/locked-details";
import { PublicFlagChips } from "@/components/public-flags";
import { usePlusAccess } from "@/lib/plus-membership";

export const Route = createFileRoute("/communities/$slug")({
 component: CommunityPage,
 notFoundComponent: NotFound,
 beforeLoad: ({ params }) => {
  const community = getCommunity(params.slug);
  if (community && community.slug !== params.slug) {
   throw redirect({ to: "/communities/$slug", params: { slug: community.slug } });
  }
 },
 head: ({ params }) => {
 const community = getCommunity(params.slug);
 return {
 meta: [
 {
 title: community ? `${community.name} · EcoMapPlus`: "EcoMapPlus",
 },
 community
 ? { name: "description", content: `${community.name} in ${community.location}.` }
: { name: "description", content: "Community not found." },
 ],
 };
 },
});

function CommunityPage() {
 const plus = usePlusAccess();
 const { slug } = Route.useParams();
 const community = getCommunity(slug);
 if (!community) {
 throw notFound();
 }
 if (!plus) return <LockedVillage community={community} />;

 const { prev, next } = neighbors(community.slug);
 const related = relatedByLegal(community.slug);
 const volunteer = volunteerFor(community.slug);
 const trialUrl = trialStayUrl(community.slug);
 const coming = upcomingEventsFor(community.slug);
 const draftKinds = legalFormsFor(community.slug)
.map((form) => kindByForm(form))
.filter((k): k is NonNullable<typeof k> => Boolean(k));
 const hasFilm = Boolean(filmFor(community.slug));
 const hasLegal = entitiesFor(community.slug).length > 0;
 const hasMap = Boolean(coordsFor(community.slug));
 const hasDoors =
  coming.length > 0 ||
  Boolean(volunteer) ||
  visitDoorsFor(community.slug).some((door) => door !== "private");
 const pageMap: PageMapItem[] = [
  { id: "overview", label: "Overview" },
  ...(hasDoors ? [{ id: "open-doors", label: "Open doors" }] : []),
  ...(hasMap ? [{ id: "map", label: "Map" }] : []),
  { id: "photos", label: "Photos" },
  ...(hasFilm ? [{ id: "film", label: "Film" }] : []),
  { id: "leaders", label: "Leaders" },
  { id: "day-here", label: "A day here" },
  { id: "farm", label: "Farm" },
  { id: "ecological-initiatives", label: "Ecology" },
  { id: "visit-join", label: "Visit & join" },
  { id: "stay", label: "Stay" },
  { id: "land", label: "Land" },
  { id: "governance", label: "Governance" },
  { id: "agreements", label: "Agreements" },
  { id: "funding", label: "Funding" },
  ...(hasLegal ? [{ id: "legal", label: "Legal" }] : []),
  { id: "sources", label: "Sources" },
  ...(draftKinds.length > 0 ? [{ id: "draft", label: "Draft" }] : []),
  ...(hasUniqueFounding(community.slug) ? [{ id: "founding", label: "Founding" }] : []),
  { id: "story", label: "Story" },
  ...(related.length > 0 ? [{ id: "related", label: "Similar" }] : []),
  { id: "notes", label: "Notes" },
 ];

 return (<>
 <div className="sticky top-28 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
 <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1 sm:px-6">
 <Link
 to="/"
 className="inline-flex min-h-9 shrink-0 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
 >
 <ArrowLeft className="size-4" aria-hidden />
 Back to atlas
 </Link>
 <RandomVillageButton exceptSlug={community.slug} className="shrink-0" />
 </div>
 </div>
 <VillagePageMap items={pageMap} />
 <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 sm:px-6 sm:py-5">

 <div id="overview" className="scroll-mt-40">
 <p className="flex min-w-0 items-center gap-1.5 text-xs text-moss">
   <MapPin className="size-3.5 shrink-0" aria-hidden />
   <span className="truncate">{community.location}</span>
 </p>
 <h1 className="mt-1.5 font-display text-3xl leading-tight text-fg sm:text-4xl">{community.name}</h1>
 <VillageDoorsPanel slug={community.slug} />
 <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
  <CreateTravelPlanButton slug={community.slug} stillActive={community.stillActive} compact />
  <DirectionsButton slug={community.slug} compact />
  <LegalFormChips slug={community.slug} compact />
  <BookingStayChip slug={community.slug} compact />
  <VolunteerProgramChip slug={community.slug} compact />
  <FarmChip slug={community.slug} compact />
  <UniqueGovernanceChip slug={community.slug} compact />
  <UniqueFoundingChip slug={community.slug} compact />
  <VillageLeadersChip slug={community.slug} />
  <SaveVillageButton slug={community.slug} variant="compact" />
  {community.website && !isDirectoryUrl(community.website) ? (
  <a
   href={community.website}
   target="_blank"
   rel="noreferrer"
   className="inline-flex h-9 items-center gap-1 rounded-full bg-panel px-2.5 text-xs font-medium text-forest hover:bg-border"
  >
   Official site
   <ExternalLink className="size-3" aria-hidden />
  </a>
  ) : null}
  {trialUrl ? (
  <a
   href={trialUrl}
   target="_blank"
   rel="noreferrer"
   className="inline-flex h-9 items-center gap-1 rounded-full bg-panel px-2.5 text-xs font-medium text-residency-deep hover:bg-border"
  >
   Trial stay
   <ExternalLink className="size-3" aria-hidden />
  </a>
  ) : null}
  <VillageSocialLinks slug={community.slug} />
 </div>
 </div>

 <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
 <div>
 <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
  <div className="min-w-0">
   <StatusBadge active={community.stillActive} size="compact" className="mb-2" />
   <CommunityFilmSection slug={community.slug} compact />
  </div>
  <div className="grid min-w-[11rem] max-w-xs gap-3">
   <RankMeter
    value={understoodFor(community.slug)}
    label="How well understood"
    labels={understoodLabels}
    compact
   />
   <EaseMeter value={visitJoinFor(community.slug).visit} label="Ease of visiting" compact />
   <EaseMeter value={visitJoinFor(community.slug).join} label="Ease of joining" compact />
  </div>
 </div>
 <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">{community.summary}</p>
 </div>

 <div className="flex flex-col gap-6">
 <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
 <Stat label="Founded" value={community.foundedLabel} />
 <Stat label="Members" value={community.membersLabel} />
 <Stat label="Land" value={community.acresLabel} />
 <Stat label="Region" value={community.region} />
 <Stat
 label="Legal structures"
 value={`${legalFormsFor(community.slug).length} forms`}
 />
 <EntityCountStat slug={community.slug} />
 <Stat label="Visit" value={easeLabels[visitJoinFor(community.slug).visit]} />
 <Stat label="Join" value={easeLabels[visitJoinFor(community.slug).join]} />
 <Stat label="Understood" value={understoodLabels[understoodFor(community.slug)]} />
 </dl>
 <VillageSiteMap community={community} />
 </div>
 </div>

 <VillageLeadersStrip slug={community.slug} className="mt-8" />

 <div id="photos" className="mt-8 scroll-mt-40">
  <PlaceImagesLink name={community.name} location={community.location} />
 </div>

 <VillageLeaders slug={community.slug} />

 <DailyLifeSection slug={community.slug} />

 <WhatTheyFarmSection slug={community.slug} />

 <EcologicalInitiativesSection slug={community.slug} />

 <VisitJoinSection slug={community.slug} />

 <AccommodationsSection slug={community.slug} />

 <LandOwnershipSection slug={community.slug} />

 <GovernanceSection slug={community.slug} />

 <InformalAgreementsSection slug={community.slug} />

 <FundingSection slug={community.slug} />

 <LegalEntitiesSection slug={community.slug} legalNarrative={community.legalStructure} />

 <SourcesSection slug={community.slug} website={community.website} name={community.name} />

 {draftKinds.length > 0 ? (<section id="draft" className="mt-12 scroll-mt-40 rounded-lg border border-border bg-surface p-5 shadow-border">
 <h2 className="font-display text-2xl text-fg">Draft a document</h2>
 <p className="mt-2 text-sm leading-relaxed text-muted">
 Templates for the forms this place actually uses, written for {community.country}. Enter
 a few fields; the workshop fills the rest.
 </p>
 <ul className="mt-4 flex flex-wrap gap-2">
 {draftKinds.map((kind) => (<li key={kind.slug}>
 <Link
 to="/charter/$formId"
 params={{ formId: kind.slug }}
 search={{ country: community.country }}
 className="inline-flex min-h-11 items-center rounded-full bg-panel px-3.5 text-sm text-fg hover:bg-border"
 >
 {kind.documentName}
 </Link>
 </li>))}
 </ul>
 </section>): null}

 {hasUniqueFounding(community.slug) ? (
  <UniqueFoundingSection slug={community.slug} fallback={community.foundingProcess} />
 ) : null}

 <section id="story" className={`mt-12 grid scroll-mt-40 gap-10 ${hasUniqueFounding(community.slug) ? "" : "lg:grid-cols-2"}`}>
 <Article title="Business model">{community.businessModel}</Article>
 {hasUniqueFounding(community.slug) ? null : (
  <Article title="How it was founded">{community.foundingProcess}</Article>
 )}
 </section>

 {related.length > 0 ? (<section id="related" className="mt-14 scroll-mt-40">
 <h2 className="font-display text-2xl text-fg">Shares a legal structure</h2>
 <ul className="mt-4 grid gap-3 sm:grid-cols-2">
 {related.map((c) => (<li key={c.slug}>
 <Link
 to="/communities/$slug"
 params={{ slug: c.slug }}
 className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-border bg-surface px-4 py-3 hover:border-forest/40"
 >
 <span>
 <span className="block font-medium text-fg">{c.name}</span>
 <span className="text-sm text-muted">{c.sharedForms.join(" · ")}</span>
 </span>
 <ArrowRight className="size-4 shrink-0 text-subtle" aria-hidden />
 </Link>
 </li>))}
 </ul>
 </section>): null}

 <CommunitySocial slug={community.slug} name={community.name} />

 <VillageLeadersStrip slug={community.slug} className="mt-14" />

 <nav className="mt-6 flex items-stretch justify-between gap-4 border-t border-border pt-6">
 {prev ? (<Link
 to="/communities/$slug"
 params={{ slug: prev.slug }}
 className="group flex min-h-11 w-1/2 flex-col items-start text-sm"
 >
 <span className="text-subtle">Previous</span>
 <span className="mt-1 inline-flex items-center gap-1 font-medium text-fg group-hover:text-forest">
 <ArrowLeft className="size-4" aria-hidden />
 {prev.name}
 </span>
 </Link>): (<span />)}
 {next ? (<Link
 to="/communities/$slug"
 params={{ slug: next.slug }}
 className="group flex min-h-11 w-1/2 flex-col items-end text-right text-sm"
 >
 <span className="text-subtle">Next</span>
 <span className="mt-1 inline-flex items-center gap-1 font-medium text-fg group-hover:text-forest">
 {next.name}
 <ArrowRight className="size-4" aria-hidden />
 </span>
 </Link>): (<span />)}
 </nav>
 </main>
 </>);
}

function LockedVillage({ community }: { community: Community }) {
 const next = `/communities/${community.slug}`;
 return (
  <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
   <Link
    to="/"
    className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
   >
    <ArrowLeft className="size-4" aria-hidden />
    Back home
   </Link>
   <p className="mt-8 flex min-w-0 items-center gap-1.5 text-sm text-moss">
    <MapPin className="size-3.5 shrink-0" aria-hidden />
    <span>{community.location}</span>
   </p>
   <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">{community.name}</h1>
   <div className="mt-4">
    <PublicFlagChips slug={community.slug} />
   </div>
   <LockedDetailsLink next={next} compact={false} className="mt-8" />
  </main>
 );
}

function Stat({ label, value }: { label: string; value: string }) {
 return (<div className="bg-surface px-4 py-4">
 <dt className="text-xs uppercase tracking-wide text-subtle">{label}</dt>
 <dd className="mt-1 text-sm font-medium leading-snug text-fg">{value}</dd>
 </div>);
}

function Article({ title, children }: { title: string; children: string }) {
 return (<article>
 <h2 className="font-display text-2xl text-fg">{title}</h2>
 <p className="mt-3 leading-relaxed text-muted">{children}</p>
 </article>);
}
