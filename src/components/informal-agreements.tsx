import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { compactKindBySlug } from "@/data/compact-kinds";
import { informalFor } from "@/data/informal-agreements";
import { hasUniqueGovernance } from "@/data/governance";

export function InformalAgreementsSection({ slug }: { slug: string }) {
 const rows = informalFor(slug);
 const unique = hasUniqueGovernance(slug);
 return (<section className="mt-12 scroll-mt-40" id="agreements">
 <h2 className="font-display text-2xl text-fg">Likely informal agreements</h2>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
 {unique
  ? "These drafts follow this village’s actual inner constitution — labour credits, a ministry, a land trust, a pod — not a generic guest-house form. They are still drafts, not their real bylaws, and this is not legal advice."
  : "Most villages run on more than a filing. These are the unwritten or lightly written rules this place likely uses. Fill in a few fields and you get a working draft. These are not their real bylaws, and this is not legal advice."}
 </p>
 <ul className="mt-6 grid gap-3 sm:grid-cols-2">
 {rows.map((row) => {
 const kind = compactKindBySlug(row.kind);
 if (!kind) return null;
 return (<li
 key={row.kind}
 className="flex flex-col rounded-md bg-surface p-4 shadow-border"
 >
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
 {kind.family}
 </p>
 <h3 className="mt-2 font-display text-xl leading-snug text-fg">{kind.title}</h3>
 <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{row.why}</p>
 <Link
 to="/compacts/$kindId"
 params={{ kindId: kind.slug }}
 search={{ community: slug }}
 className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-forest hover:underline"
 >
 Draft this compact
 <ArrowRight className="size-4" aria-hidden />
 </Link>
 </li>);
 })}
 </ul>
 <p className="mt-4 text-sm text-muted">
 <Link to="/agreements" className="font-medium text-forest hover:underline">
 All agreements
 </Link>
. Formal charters and informal compacts, each linked to the villages they come from.
 </p>
 </section>);
}
