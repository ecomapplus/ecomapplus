import { Landmark } from "lucide-react";
import { complexityLabels, landFor } from "@/data/land-ownership";

export function LandOwnershipSection({ slug }: { slug: string }) {
 const row = landFor(slug);
 const split = row.complexity === "split";

 return (<section className="mt-12 scroll-mt-40" id="land">
 <h2 className="font-display text-2xl text-fg">Who owns the land?</h2>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
 {slug === "sabbathday-lake" || slug === "findhorn" || slug === "twin-oaks" || slug === "the-farm" || slug === "willow-witt" || slug === "embercombe" || slug === "polyface" || slug === "juneberry-ridge" || slug === "riverside-oasis" || slug === "serenbe" || slug === "belterra" || slug === "shelburne-farms" || slug === "hawkwood" || slug === "yogaville" || slug === "rio-oro" || slug === "carate-base-camp" || slug === "earthaven" || slug === "monkton-wyld" || slug === "lost-valley"
 ? "Who holds title, from public records and the village’s own account."
 : "Who holds title, from public records and the village’s own account. This is not a title search, and it is not legal advice."}
 </p>

 <article
 className={`mt-6 rounded-md p-5 shadow-border ${
 split ? "border border-forest/25 bg-forest/5": "bg-surface"
 }`}
 >
 <div className="flex flex-wrap items-start justify-between gap-3">
 <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
 <Landmark className="size-3.5" aria-hidden />
 Title sits with
 </p>
 <div className="flex flex-wrap gap-2">
 <span
 className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
 split ? "bg-forest text-cream": "bg-panel text-muted"
 }`}
 >
 {complexityLabels[row.complexity]}
 </span>
 <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs font-medium text-fg">
 {row.tenure}
 </span>
 </div>
 </div>
 <h3 className="mt-3 font-display text-2xl leading-snug text-fg">{row.owner}</h3>
 <p className="mt-3 max-w-3xl leading-relaxed text-muted">{row.howHeld}</p>
 </article>

 {split && row.divided.length > 0 ? (<div className="mt-6">
 <h3 className="font-display text-xl text-fg">How the land is divided</h3>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
 Each piece below is a different holder, a different kind of right, or both. Read them
 together. No single line is the whole title.
 </p>
 <ol className="mt-4 grid gap-3 lg:grid-cols-2">
 {row.divided.map((parcel, i) => (<li key={parcel.label} className="rounded-md bg-surface p-4 shadow-border">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
 Part {i + 1}
 </p>
 <h4 className="mt-2 font-display text-xl leading-snug text-fg">{parcel.label}</h4>
 <p className="mt-2 text-sm font-medium text-forest">{parcel.holder}</p>
 <p className="mt-1 text-sm text-muted">{parcel.share}</p>
 <p className="mt-3 text-sm leading-relaxed text-muted">{parcel.what}</p>
 </li>))}
 </ol>
 </div>): null}

 <p className="mt-6 max-w-3xl leading-relaxed text-muted">{row.narrative}</p>
 </section>);
}

export function LandOwnershipStats({ slug }: { slug: string }) {
 const row = landFor(slug);
 return (<p className="mt-3 border-t border-border pt-3 text-xs leading-snug text-muted">
 <span className="uppercase tracking-wide text-subtle">Who owns the land</span>
 <span className="mt-1 block font-medium text-fg">{row.owner}</span>
 <span className="mt-0.5 block text-subtle">
 {complexityLabels[row.complexity]} · {row.tenure}
 </span>
 </p>);
}
