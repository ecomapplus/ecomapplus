import { Link } from "@tanstack/react-router";
import { LegalFormChips } from "@/components/legal-form-chips";
import { PublicFlagChips } from "@/components/public-flags";
import { PlaceImagesLink } from "@/components/place-images-link";
import { type Community } from "@/data/communities";
import { entityCount } from "@/data/legal-entities";
import { easeLabels, visitJoinFor } from "@/data/visit-join";
import { understoodFor, understoodLabels } from "@/data/understood";
import { fundingFor } from "@/data/funding";
import { complexityLabels, landFor } from "@/data/land-ownership";
import { volunteerFor } from "@/data/volunteer-programs";
import { UniqueGovernanceChip } from "@/components/governance";
import { UniqueFoundingChip } from "@/components/unique-founding";
import { BookingStayChip } from "@/components/booking-stay-preview";
import { StatusBadge } from "@/components/inactive-badge";
import { governanceFor } from "@/data/governance";
import { hasUniqueFounding } from "@/data/unique-founding";
import { hasBookableStay } from "@/data/booking-stays";
import { rememberPlusNext, usePlusAccess } from "@/lib/plus-membership";

export function CommunityTable({ communities }: { communities: Community[] }) {
 const plus = usePlusAccess();
 if (!plus) return <LockedCommunityTable communities={communities} />;
 return <OpenCommunityTable communities={communities} />;
}

function LockedCommunityTable({ communities }: { communities: Community[] }) {
 return (
  <div className="overflow-x-auto rounded-lg border border-border bg-surface shadow-border">
   <table className="w-full min-w-[36rem] text-left text-sm">
    <thead className="bg-panel text-xs uppercase tracking-wide text-subtle">
     <tr>
      <th className="px-4 py-3 font-medium">Community</th>
      <th className="px-4 py-3 font-medium">Location</th>
      <th className="px-4 py-3 font-medium">Open doors</th>
      <th className="px-4 py-3 font-medium">Details</th>
     </tr>
    </thead>
    <tbody>
     {communities.map((c) => (
      <tr key={c.slug} className="border-t border-border hover:bg-panel/70">
       <td className="px-4 py-3">
        <Link
         to="/communities/$slug"
         params={{ slug: c.slug }}
         className="font-medium text-fg hover:text-forest hover:underline"
        >
         {c.name}
        </Link>
       </td>
       <td className="px-4 py-3 text-muted">{c.location}</td>
       <td className="px-4 py-3">
        <PublicFlagChips slug={c.slug} />
       </td>
       <td className="px-4 py-3">
        <Link
         to="/plus"
         onClick={() => rememberPlusNext(`/communities/${c.slug}`)}
         className="font-medium text-forest hover:underline"
        >
         Village details
        </Link>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}

function OpenCommunityTable({ communities }: { communities: Community[] }) {
 return (<div className="overflow-x-auto rounded-lg border border-border bg-surface shadow-border">
 <table className="w-full min-w-[96rem] text-left text-sm">
 <thead className="bg-panel text-xs uppercase tracking-wide text-subtle">
 <tr>
 <th className="px-4 py-3 font-medium">Community</th>
 <th className="px-4 py-3 font-medium">Location</th>
 <th className="px-4 py-3 font-medium">Legal structures</th>
 <th className="px-4 py-3 font-medium text-right">Entities</th>
 <th className="px-4 py-3 font-medium text-right">Members</th>
 <th className="px-4 py-3 font-medium">Land</th>
 <th className="px-4 py-3 font-medium">Who owns it</th>
 <th className="px-4 py-3 font-medium">Visit</th>
 <th className="px-4 py-3 font-medium">Join</th>
 <th className="px-4 py-3 font-medium">Understood</th>
 <th className="px-4 py-3 font-medium">Volunteer</th>
 <th className="px-4 py-3 font-medium">Gov. money</th>
 <th className="px-4 py-3 font-medium">Private money</th>
 <th className="px-4 py-3 font-medium">Status</th>
 </tr>
 </thead>
 <tbody>
 {communities.map((c) => {
 const access = visitJoinFor(c.slug);
 const money = fundingFor(c.slug);
 const land = landFor(c.slug);
 const gov = governanceFor(c.slug);
 return (<tr key={c.slug} className="border-t border-border hover:bg-panel/70">
 <td className="px-4 py-3">
 <Link
 to="/communities/$slug"
 params={{ slug: c.slug }}
 className="flex items-center gap-3 font-medium text-fg hover:text-forest hover:underline"
 >
 <span>
 {c.name}
 <span className="block text-xs font-normal text-subtle">{c.foundedYear}</span>
 {gov.unique ? null : (
 <span className="mt-0.5 block text-xs font-normal text-muted">{gov.modelLabel}</span>
 )}
 </span>
 </Link>
 <PlaceImagesLink name={c.name} location={c.location} />
 {gov.unique || hasUniqueFounding(c.slug) || hasBookableStay(c.slug) ? (
 <div className="mt-1.5 flex flex-wrap gap-1">
 <BookingStayChip slug={c.slug} compact />
 <UniqueGovernanceChip slug={c.slug} compact />
 <UniqueFoundingChip slug={c.slug} compact />
 </div>
 ) : null}
 </td>
 <td className="px-4 py-3 text-muted">{c.region}</td>
 <td className="px-4 py-3">
 <LegalFormChips slug={c.slug} compact />
 </td>
 <td className="px-4 py-3 text-right tabular-nums font-medium text-fg">
 {entityCount(c.slug)}
 </td>
 <td className="px-4 py-3 text-right tabular-nums font-medium text-fg">{c.members}</td>
 <td className="px-4 py-3 text-muted">
 {c.acres ? `${c.acres.toLocaleString()} ac`: "Urban"}
 </td>
 <td className="px-4 py-3">
 <span className="block font-medium text-fg">{complexityLabels[land.complexity]}</span>
 <span className="block text-xs text-muted">{land.tenure}</span>
 </td>
 <td className="px-4 py-3 text-fg">{easeLabels[access.visit]}</td>
 <td className="px-4 py-3 text-fg">{easeLabels[access.join]}</td>
 <td className="px-4 py-3 text-fg">{understoodLabels[understoodFor(c.slug)]}</td>
 <td className="px-4 py-3">
 {(() => {
 const program = volunteerFor(c.slug);
 return program ? (<a
 href={program.url}
 target="_blank"
 rel="noreferrer"
 className="font-medium text-forest hover:underline"
 >
 Sign up
 </a>): (<span className="text-subtle">n/a</span>);
 })()}
 </td>
 <td className="px-4 py-3 text-muted">{money.grantsHeadline}</td>
 <td className="px-4 py-3 text-muted">{money.privateHeadline}</td>
 <td className="px-4 py-3">
 <StatusBadge active={c.stillActive} size="card" />
 </td>
 </tr>);
 })}
 </tbody>
 </table>
 </div>);
}
