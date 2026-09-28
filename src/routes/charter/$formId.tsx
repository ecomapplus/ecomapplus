import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Copy, Download, Printer } from "lucide-react";
import { useMemo, useState } from "react";
import { CharterDocumentView } from "@/components/charter-doc";
import { OriginVillages } from "@/components/origin-villages";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/components/not-found";
import {
 communitiesUsing,
 emptyCharterValues,
 fieldsFor,
 kindBySlug,
 valuesFromCommunity,
 type CharterValues,
} from "@/data/charter";
import { documentToText, generateCharter } from "@/data/charter-document";
import { allCountries, statuteFor } from "@/data/charter-regions";
import { guideForForm } from "@/data/legal-form-guides";

type CharterSearch = { country?: string };

export const Route = createFileRoute("/charter/$formId")({
 component: CharterFormPage,
 notFoundComponent: NotFound,
 validateSearch: (search: Record<string, unknown>): CharterSearch => ({
 country: typeof search.country === "string" ? search.country: undefined,
 }),
 head: ({ params }) => {
 const kind = kindBySlug(params.formId);
 return {
 meta: [{ title: kind ? `${kind.form} charter · ecocommunitymap.com`: "ecocommunitymap.com" }],
 };
 },
});

function CharterFormPage() {
 const { formId } = Route.useParams();
 const { country: countryFromSearch } = Route.useSearch();
 const kind = kindBySlug(formId);
 if (!kind) throw notFound();

 const examples = communitiesUsing(kind.form);
 const fields = fieldsFor(kind);
 const guide = guideForForm(kind.form);
 const defaultCountry = countryFromSearch || examples[0]?.country || "United States";

 const [values, setValues] = useState<CharterValues>(() => {
 const base = emptyCharterValues();
 base.country = defaultCountry;
 return base;
 });
 const [copied, setCopied] = useState(false);

 const doc = useMemo(() => generateCharter(kind, values), [kind, values]);
 const statute = statuteFor(kind.form, values.country || defaultCountry, values.state);

 function set<K extends keyof CharterValues>(id: K, value: string) {
 setValues((prev) => ({ ...prev, [id]: value }));
 }

 function prefill(slug: string) {
 const next = { ...emptyCharterValues(), ...valuesFromCommunity(slug) };
 setValues(next);
 }

 async function copyText() {
 await navigator.clipboard.writeText(documentToText(doc));
 setCopied(true);
 window.setTimeout(() => setCopied(false), 1600);
 }

 function downloadText() {
 const blob = new Blob([documentToText(doc)], { type: "text/plain;charset=utf-8" });
 const url = URL.createObjectURL(blob);
 const a = document.createElement("a");
 a.href = url;
 a.download = `${formId}-charter.txt`;
 a.click();
 URL.revokeObjectURL(url);
 }

 return (<main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
 <Link
 to="/agreements"
 className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
 >
 <ArrowLeft className="size-4" aria-hidden />
 All agreements
 </Link>

 <div className="mt-6 max-w-3xl">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">{guide.family}</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">{kind.form}</h1>
 <p className="mt-2 text-lg text-forest">{kind.documentName}</p>
 <p className="mt-4 leading-relaxed text-muted">{guide.purpose}</p>
 <p className="mt-2 leading-relaxed text-muted">{guide.meaning}</p>
 <p className="mt-3 text-sm text-subtle">{statute}</p>
 <div className="mt-5">
 <OriginVillages
 communities={examples.map((c) => ({
 slug: c.slug,
 name: c.name,
 country: c.country,
 }))}
 lead={
 examples.length === 1
 ? "Used at 1 village"
: `Used at ${examples.length} villages`
 }
 emptyLabel="Not yet used in the atlas. You can still generate a draft."
 />
 </div>
 </div>

 <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
 <form
 className="charter-intake rounded-lg border border-border bg-surface p-4 shadow-border print:hidden"
 onSubmit={(e) => e.preventDefault()}
 >
 <h2 className="font-display text-xl text-fg">Your details</h2>
 <p className="mt-1 text-sm text-muted">
 A few fields. The draft fills in around them for the country you pick.
 </p>

 <label className="mt-4 block text-sm">
 <span className="text-subtle">Country / jurisdiction</span>
 <select
 className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-fg"
 value={values.country}
 onChange={(e) => set("country", e.target.value)}
 >
 {allCountries.map((c) => (<option key={c} value={c}>
 {c}
 </option>))}
 </select>
 </label>

 {examples.length > 0 ? (<label className="mt-3 block text-sm">
 <span className="text-subtle">Prefill from an atlas community</span>
 <select
 className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-fg"
 defaultValue=""
 onChange={(e) => {
 if (e.target.value) prefill(e.target.value);
 }}
 >
 <option value="">Start blank…</option>
 {examples.map((c) => (<option key={c.slug} value={c.slug}>
 {c.name} ({c.country})
 </option>))}
 </select>
 </label>): null}

 <div className="mt-4 space-y-3">
 {fields.map((field) => (<label key={field.id} className="block text-sm">
 <span className="text-subtle">{field.label}</span>
 {field.type === "textarea" ? (<textarea
 className="mt-1 min-h-24 w-full rounded-md border border-border bg-bg px-3 py-2 text-fg"
 value={values[field.id]}
 placeholder={field.placeholder}
 onChange={(e) => set(field.id, e.target.value)}
 />): (<input
 type={field.type ?? "text"}
 className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-fg"
 value={values[field.id]}
 placeholder={field.placeholder}
 onChange={(e) => set(field.id, e.target.value)}
 />)}
 {field.hint ? <span className="mt-1 block text-xs text-subtle">{field.hint}</span>: null}
 </label>))}
 </div>

 <div className="mt-5 flex flex-wrap gap-2">
 <Button type="button" onClick={() => window.print()}>
 <Printer className="size-4" aria-hidden />
 Print / PDF
 </Button>
 <Button type="button" variant="outline" onClick={copyText}>
 <Copy className="size-4" aria-hidden />
 {copied ? "Copied": "Copy text"}
 </Button>
 <Button type="button" variant="outline" onClick={downloadText}>
 <Download className="size-4" aria-hidden />
 Download.txt
 </Button>
 </div>
 </form>

 <CharterDocumentView doc={doc} />
 </div>
 </main>);
}
