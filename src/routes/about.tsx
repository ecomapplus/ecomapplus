import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalFormChip } from "@/components/legal-form-chips";
import { communities, legalCategories } from "@/data/communities";
import { legalFormsFor } from "@/data/legal-entities";

export const Route = createFileRoute("/about")({
 component: About,
 head: () => ({
 meta: [{ title: "About · EcoMapPlus" }],
 }),
});

function About() {
 const living = communities.filter((c) => c.stillActive).length;
 const closed = communities.filter((c) => !c.stillActive).length;
 return (<main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">EcoMapPlus</p>
 <h1 className="mt-2 font-display text-4xl text-fg">The legal form for your eco-community</h1>
 <div className="mt-6 space-y-4 leading-relaxed text-muted">
 <p>
 This atlas is {communities.length} communities with a legal paper trail: who owns the land, who votes,
 how money moves. {living} still active of {communities.length} — the same count as the map. {closed} closed.
 Churches, co-ops, land trusts, lot sales, and plenty of hybrids. Closed villages stay in the atlas for the
 record. They do not appear on the map or in travel plans.
 </p>
 <p>
 There is no one right form. A nonprofit can run the school while an LLC holds the
 houses. The same dirt can sit under a co-op and a homeowners association.
 </p>
 <p>
 Name, location, and whether a work-stay, overnight, residency, or event is coming up stay
 public. The rest of each village page — land, legal form, daily life, photos,
 sources — is EcoMapPlus, $24 a year.
 </p>
 <p>
 Each village is tagged with every legal structure that actually shows up. Filter the
 atlas by any of them.
 </p>
 <p>
 Member counts, acres, and dates come from community sites, encyclopedias, and published
 reporting. They drift. Each village page lists those sources with links. Money figures
 are labelled documented or estimated. This is a reference, not legal or investment advice.
 </p>
 <p>
 On Agreements you can generate a working draft for a given structure and country. It
 is a starting document for a lawyer, not a filing. Informal drafts are inferred from
 how people live. They are not the villages’ real bylaws.
 </p>
 
 </div>

 <h2 className="mt-10 font-display text-2xl text-fg">Forms in this atlas</h2>
 <p className="mt-2 text-sm text-muted">
 {legalCategories.length} structures, counted across every associated legal entity. Tap a
 name for what it means.
 </p>
 <ul className="mt-4 divide-y divide-border rounded-lg border border-border bg-surface">
 {legalCategories.map((form) => {
 const n = communities.filter((c) => legalFormsFor(c.slug).includes(form)).length;
 return (<li key={form} className="flex items-center justify-between gap-4 px-4 py-2.5">
 <LegalFormChip form={form} />
 <span className="shrink-0 text-xs tabular-nums text-subtle">
 {n} {n === 1 ? "place": "places"}
 </span>
 </li>);
 })}
 </ul>

 <p className="mt-8">
 <Link to="/" className="inline-flex min-h-11 items-center font-medium text-forest hover:underline">
 Back home
 </Link>
 </p>
 </main>);
}
