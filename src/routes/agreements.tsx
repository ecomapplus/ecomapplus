import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { OriginVillages } from "@/components/origin-villages";
import {
 agreementFamilyOrder,
 allAgreements,
 type AgreementRow,
 type AgreementSide,
} from "@/data/agreements-catalog";

export const Route = createFileRoute("/agreements")({
 component: AgreementsCatalog,
 head: () => ({
 meta: [
 { title: "Agreements · ecocommunitymap.com" },
 {
 name: "description",
 content:
 "Every formal charter and informal compact in the atlas, each linked to the villages it comes from, each one a working draft you can generate.",
 },
 ],
 }),
});

type SideFilter = "all" | AgreementSide;
type SortKey = "villages" | "name" | "family";

const sortOptions: { value: SortKey; label: string }[] = [
 { value: "villages", label: "Most villages" },
 { value: "name", label: "Name (A–Z)" },
 { value: "family", label: "Family" },
];

function familyRank(family: string) {
 const i = agreementFamilyOrder.indexOf(family);
 return i === -1 ? 99: i;
}

function sortRows(rows: AgreementRow[], sort: SortKey): AgreementRow[] {
 const copy = [...rows];
 copy.sort((a, b) => {
 switch (sort) {
 case "villages":
 return (b.communities.length - a.communities.length ||
 familyRank(a.family) - familyRank(b.family) ||
 a.title.localeCompare(b.title));
 case "name":
 return a.title.localeCompare(b.title);
 case "family":
 return (familyRank(a.family) - familyRank(b.family) ||
 b.communities.length - a.communities.length ||
 a.title.localeCompare(b.title));
 default:
 return 0;
 }
 });
 return copy;
}

function AgreementsCatalog() {
 const all = useMemo(() => allAgreements(), []);
 const [side, setSide] = useState<SideFilter>("all");
 const [family, setFamily] = useState("all");
 const [sort, setSort] = useState<SortKey>("villages");
 const [query, setQuery] = useState("");

 const familyOptions = useMemo(() => {
 const pool = side === "all" ? all: all.filter((row) => row.side === side);
 return Array.from(new Set(pool.map((row) => row.family))).sort((a, b) => familyRank(a) - familyRank(b) || a.localeCompare(b),);
 }, [all, side]);

 const familyFilter = familyOptions.includes(family) ? family: "all";

 const visible = useMemo(() => {
 const q = query.trim().toLowerCase();
 const filtered = all.filter((row) => {
 if (side !== "all" && row.side !== side) return false;
 if (familyFilter !== "all" && row.family !== familyFilter) return false;
 if (q) {
 const hay = [
 row.title,
 row.documentName,
 row.family,
 row.summary,
 row.side,
...row.communities.map((c) => `${c.name} ${c.country}`),
 ]
.join(" ")
.toLowerCase();
 if (!hay.includes(q)) return false;
 }
 return true;
 });
 return sortRows(filtered, sort);
 }, [all, side, familyFilter, query, sort]);

 const groups = useMemo(() => {
 if (sort !== "family") return [{ label: null as string | null, rows: visible }];
 const labels: string[] = [];
 for (const row of visible) {
 if (!labels.includes(row.family)) labels.push(row.family);
 }
 return labels.map((label) => ({
 label,
 rows: visible.filter((row) => row.family === label),
 }));
 }, [visible, sort]);

 const formalN = visible.filter((r) => r.side === "formal").length;
 const informalN = visible.length - formalN;
 const originN = useMemo(() => {
 const slugs = new Set<string>();
 for (const row of visible) {
 for (const c of row.communities) slugs.add(c.slug);
 }
 return slugs.size;
 }, [visible]);
 const filtersOn = side !== "all" || familyFilter !== "all" || query.trim() !== "";

 return (<main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Catalog</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
 Agreements
 </h1>
 <p className="mt-4 text-lg leading-relaxed text-muted">
 Formal charters cover land and legal structure. Informal compacts cover how people
 actually live together. Every template is here, linked back to the villages it comes
 from. You can generate a working draft. It is not a filing, and it is not legal advice.
 </p>
 </div>

 <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
 <HeroStat label="Agreements shown" value={String(visible.length)} />
 <HeroStat label="Formal" value={String(formalN)} />
 <HeroStat label="Informal" value={String(informalN)} />
 <HeroStat label="Originating villages" value={String(originN)} />
 </dl>

 <fieldset className="mt-8">
 <legend className="text-sm font-medium text-fg">Kind of agreement</legend>
 <div className="mt-3 flex flex-wrap gap-2">
 <SideChip label="All" active={side === "all"} onClick={() => setSide("all")} />
 <SideChip
 label="Formal charters"
 active={side === "formal"}
 onClick={() => setSide("formal")}
 />
 <SideChip
 label="Informal compacts"
 active={side === "informal"}
 onClick={() => setSide("informal")}
 />
 </div>
 </fieldset>

 <div className="mt-6 rounded-lg border border-border bg-surface p-4 shadow-border">
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
 <SelectField
 id="agreements-sort"
 label="Sort by"
 value={sort}
 onChange={(v) => setSort(v as SortKey)}
 >
 {sortOptions.map((opt) => (<option key={opt.value} value={opt.value}>
 {opt.label}
 </option>))}
 </SelectField>
 <SelectField
 id="agreements-family"
 label="Family"
 value={familyFilter}
 onChange={setFamily}
 >
 <option value="all">All families</option>
 {familyOptions.map((f) => (<option key={f} value={f}>
 {f}
 </option>))}
 </SelectField>
 <label htmlFor="agreements-search" className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Search</span>
 <input
 id="agreements-search"
 type="search"
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 placeholder="Agreement, village, or country"
 className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 </div>
 <p className="mt-3 text-sm text-muted">
 <span className="tabular-nums font-medium text-fg">{visible.length}</span> of{" "}
 <span className="tabular-nums">{all.length}</span> agreements
 {filtersOn ? (<>
 {" "}
 ·{" "}
 <button
 type="button"
 onClick={() => {
 setSide("all");
 setFamily("all");
 setQuery("");
 }}
 className="min-h-11 font-medium text-forest hover:underline"
 >
 Clear filters
 </button>
 </>): (<span className="text-subtle">
 {" "}
 · generate a working draft from any of them
 </span>)}
 </p>
 </div>

 {visible.length === 0 ? (<div className="mt-10 rounded-lg border border-dashed border-border bg-surface px-6 py-16 text-center">
 <p className="font-display text-xl text-fg">No agreements match that filter</p>
 <p className="mt-2 text-muted">Try another kind or family, or clear filters.</p>
 </div>): (<div className="mt-10 space-y-10">
 {groups.map((group) => (<section key={group.label ?? "all"}>
 {group.label ? (<h2 className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
 {group.label}
 </h2>): null}
 <ul className={group.label ? "mt-3 grid gap-3": "grid gap-3"}>
 {group.rows.map((row) => (<AgreementCard key={`${row.side}-${row.id}`} row={row} />))}
 </ul>
 </section>))}
 </div>)}
 </main>);
}

function AgreementCard({ row }: { row: AgreementRow }) {
 const n = row.communities.length;
 const generate =
 row.side === "formal" ? (<Link
 to="/charter/$formId"
 params={{ formId: row.generateParam }}
 className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-forest hover:underline"
 >
 Generate this charter
 <ArrowRight className="size-4" aria-hidden />
 </Link>): (<Link
 to="/compacts/$kindId"
 params={{ kindId: row.generateParam }}
 className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-forest hover:underline"
 >
 Generate this compact
 <ArrowRight className="size-4" aria-hidden />
 </Link>);

 return (<li className="flex flex-col rounded-lg bg-surface p-4 shadow-border sm:p-5">
 <div className="flex flex-wrap items-center gap-2">
 <SideBadge side={row.side} />
 <span className="text-xs uppercase tracking-[0.14em] text-subtle">{row.family}</span>
 </div>
 <h2 className="mt-3 font-display text-2xl leading-snug text-fg">{row.title}</h2>
 <p className="mt-1 text-sm text-forest">{row.documentName}</p>
 <p className="mt-3 text-sm leading-relaxed text-muted">{row.summary}</p>
 <div className="mt-4">
 <OriginVillages
 communities={row.communities}
 lead={
 n === 0
 ? undefined
: row.side === "formal"
 ? n === 1
 ? "Used at 1 village"
: `Used at ${n} villages`
: n === 1
 ? "Likely at 1 village"
: `Likely at ${n} villages`
 }
 emptyLabel="Not yet used in the atlas. You can still generate a draft."
 />
 </div>
 {generate}
 </li>);
}

function SideBadge({ side }: { side: AgreementSide }) {
 return (<span
 className={`rounded-full px-2 py-0.5 text-xs font-medium ${
 side === "formal" ? "bg-forest/10 text-forest-deep": "bg-panel text-muted"
 }`}
 >
 {side === "formal" ? "Formal": "Informal"}
 </span>);
}

function SideChip({
 label,
 active,
 onClick,
}: {
 label: string;
 active: boolean;
 onClick: () => void;
}) {
 return (<button
 type="button"
 onClick={onClick}
 aria-pressed={active}
 className={`min-h-11 whitespace-nowrap rounded-full px-3.5 text-sm ${
 active ? "bg-forest text-cream": "bg-surface text-fg shadow-border hover:shadow-border-hover"
 }`}
 >
 {label}
 </button>);
}

function HeroStat({ label, value }: { label: string; value: string }) {
 return (<div className="bg-surface px-4 py-4">
 <dt className="text-xs uppercase tracking-wide text-subtle">{label}</dt>
 <dd className="mt-1 font-display text-2xl text-fg">{value}</dd>
 </div>);
}

function SelectField({
 id,
 label,
 value,
 onChange,
 children,
}: {
 id: string;
 label: string;
 value: string;
 onChange: (value: string) => void;
 children: ReactNode;
}) {
 return (<label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">{label}</span>
 <select
 id={id}
 value={value}
 onChange={(e) => onChange(e.target.value)}
 className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 >
 {children}
 </select>
 </label>);
}
