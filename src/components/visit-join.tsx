import { Link } from "@tanstack/react-router";
import { easeLabels, visitJoinFor, type Ease } from "@/data/visit-join";
import { understoodFor, understoodLabels } from "@/data/understood";
import { visitDoorsFor } from "@/data/visit-types";

export function RankMeter({
 value,
 label,
 labels,
 compact = false,
}: {
 value: Ease;
 label: string;
 labels: Record<Ease, string>;
 compact?: boolean;
}) {
 return (<div>
 <p className={`uppercase tracking-wide text-subtle ${compact ? "text-xs": "text-xs"}`}>
 {label}
 </p>
 <div
 className={`flex items-center gap-2 ${compact ? "mt-1": "mt-1.5"}`}
 aria-label={`${label}: ${labels[value]}, ${value} out of 5`}
 >
 <ol className="flex gap-1" aria-hidden>
 {([1, 2, 3, 4, 5] as const).map((n) => (<li
 key={n}
 className={`rounded-full ${compact ? "size-1.5": "size-2"} ${
 n <= value ? "bg-forest": "bg-border"
 }`}
 />))}
 </ol>
 <span
 className={`font-medium text-fg ${compact ? "text-xs": "text-sm"}`}
 >
 {labels[value]}
 </span>
 </div>
 </div>);
}

export function EaseMeter({
 value,
 label,
 compact = false,
}: {
 value: Ease;
 label: string;
 compact?: boolean;
}) {
 return <RankMeter value={value} label={label} labels={easeLabels} compact={compact} />;
}

export function VisitJoinRankings({
 slug,
 className,
 includeUnderstood = true,
}: {
 slug: string;
 className?: string;
 includeUnderstood?: boolean;
}) {
 const row = visitJoinFor(slug);
 return (
  <div className={`grid gap-5 ${includeUnderstood ? "sm:grid-cols-3" : "sm:grid-cols-2"} ${className ?? ""}`}>
   <EaseMeter value={row.visit} label="Ease of visiting" />
   <EaseMeter value={row.join} label="Ease of joining" />
   {includeUnderstood ? (
    <RankMeter value={understoodFor(slug)} label="How well understood" labels={understoodLabels} />
   ) : null}
  </div>
 );
}

export function VisitJoinSection({ slug }: { slug: string }) {
 const row = visitJoinFor(slug);
 const known = understoodFor(slug);
 return (<section className="mt-12 scroll-mt-40" id="visit-join">
 <h2 className="font-display text-2xl text-fg">Visit and join</h2>
 <p className="mt-2 max-w-2xl text-sm text-muted">
 Ratings from public tours, guesthouses, and published membership paths. This is not
 an invitation and not legal advice. Always confirm with the community before you go.
 </p>
 <div className="mt-6 grid gap-8 lg:grid-cols-3">
 <article>
 <EaseMeter value={row.visit} label="Ease of visiting" />
 <p className="mt-4 leading-relaxed text-muted">{row.visitProcess}</p>
 </article>
 <article>
 <EaseMeter value={row.join} label="Ease of joining" />
 <p className="mt-4 leading-relaxed text-muted">{row.joinProcess}</p>
 </article>
 <article>
 <RankMeter value={known} label="How well understood" labels={understoodLabels} />
 </article>
 </div>
 {visitDoorsFor(slug).includes("residency") ? (
  <p className="mt-6 text-sm text-muted">
   <Link to="/residencies" className="font-medium text-forest hover:underline">
    See every residency in the atlas
   </Link>
    . This village has a membership-trial door.
  </p>
 ) : null}
 </section>);
}

export function VisitJoinStats({ slug }: { slug: string }) {
 const row = visitJoinFor(slug);
 return (<div className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3">
 <EaseMeter value={row.visit} label="Visit" compact />
 <EaseMeter value={row.join} label="Join" compact />
 <RankMeter value={understoodFor(slug)} label="Known" compact labels={understoodLabels} />
 </div>);
}
