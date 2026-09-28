import { ExternalLink } from "lucide-react";
import { volunteerFor } from "@/data/volunteer-programs";

export function VolunteerProgramChip({
 slug,
 compact = false,
}: {
 slug: string;
 compact?: boolean;
}) {
 const program = volunteerFor(slug);
 if (!program) return null;
 return (<a
 href={program.url}
 target="_blank"
 rel="noreferrer"
 onClick={(event) => event.stopPropagation()}
 className={`inline-flex items-center gap-1 rounded-full bg-forest/10 font-medium text-forest-deep hover:bg-forest/20 ${
 compact ? "min-h-9 px-2.5 py-1 text-xs": "min-h-9 px-3 py-1 text-xs sm:text-sm"
 }`}
 >
 Volunteer signup
 <ExternalLink className="size-3.5" aria-hidden />
 </a>);
}

/** Clear external link for map / card previews. Tap target at least 44px. */
export function VolunteerProgramPreviewLink({ slug }: { slug: string }) {
 const program = volunteerFor(slug);
 if (!program) return null;
 return (<a
 href={program.url}
 target="_blank"
 rel="noreferrer"
 onClick={(event) => event.stopPropagation()}
 className="inline-flex min-h-11 items-center gap-2 rounded-md bg-forest/10 px-3 text-sm font-medium text-forest-deep hover:bg-forest/20"
 >
 Volunteer signup on their site
 <ExternalLink className="size-4" aria-hidden />
 </a>);
}

export function VolunteerProgramSection({ slug }: { slug: string }) {
 const program = volunteerFor(slug);
 if (!program) return null;
 return (<section className="mt-12 scroll-mt-40" id="volunteer">
 <h2 className="font-display text-2xl text-fg">Volunteer program</h2>
 <p className="mt-2 max-w-2xl text-sm text-muted">
 This village publishes a dedicated volunteer, internship, or work-exchange page on its own
 website. Confirm dates and requirements with them before you apply.
 </p>
 <article className="mt-6 rounded-lg border border-border bg-surface p-5 shadow-border">
 <p className="leading-relaxed text-muted">{program.note}</p>
 <a
 href={program.url}
 target="_blank"
 rel="noreferrer"
 className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
 >
 Sign up on their site
 <ExternalLink className="size-4" aria-hidden />
 </a>
 </article>
 </section>);
}

export function VolunteerProgramStats({ slug }: { slug: string }) {
 const program = volunteerFor(slug);
 if (!program) return null;
 return (<div className="mt-3 border-t border-border pt-3">
 <p className="text-xs uppercase tracking-wide text-subtle">Volunteer program</p>
 <a
 href={program.url}
 target="_blank"
 rel="noreferrer"
 onClick={(event) => event.stopPropagation()}
 className="mt-1 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
 >
 Sign up on their site
 <ExternalLink className="ml-1 size-3.5" aria-hidden />
 </a>
 </div>);
}
