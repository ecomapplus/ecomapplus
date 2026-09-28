import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
 allFundingRows,
 fundingKindLabels,
 type Certainty,
 type FundingKind,
 type FundingRow,
} from "@/data/funding";
import { communityCount } from "@/data/communities";
import { compareCountries } from "@/lib/country-scope";

export const Route = createFileRoute("/funding")({
 component: FundingLedger,
 head: () => ({
 meta: [
 { title: "Funding · ecocommunitymap.com" },
 {
 name: "description",
 content:
 `A sortable ledger of government grants, easements, member shares, revolving loans, and other money behind ${communityCount} eco-communities.`,
 },
 ],
 }),
});

type SideFilter = "all" | "public" | "private";
type SortKey = "year-desc" | "year-asc" | "documented" | "community" | "source" | "kind";

const sortOptions: { value: SortKey; label: string }[] = [
 { value: "year-desc", label: "Year (newest first)" },
 { value: "year-asc", label: "Year (oldest first)" },
 { value: "documented", label: "Documented first" },
 { value: "community", label: "Community (A–Z)" },
 { value: "source", label: "Source (A–Z)" },
 { value: "kind", label: "Kind of money" },
];

const kindOrder = Object.keys(fundingKindLabels) as FundingKind[];

function sortRows(rows: FundingRow[], sort: SortKey): FundingRow[] {
 const copy = [...rows];
 copy.sort((a, b) => {
 switch (sort) {
 case "year-desc":
 return b.yearSort - a.yearSort || a.community.localeCompare(b.community);
 case "year-asc": {
 const aY = a.yearSort || 9999;
 const bY = b.yearSort || 9999;
 return aY - bY || a.community.localeCompare(b.community);
 }
 case "documented":
 return (Number(b.certainty === "documented") - Number(a.certainty === "documented") ||
 b.yearSort - a.yearSort ||
 a.community.localeCompare(b.community));
 case "community":
 return a.community.localeCompare(b.community) || a.source.localeCompare(b.source);
 case "source":
 return a.source.localeCompare(b.source);
 case "kind":
 return (kindOrder.indexOf(a.kind) - kindOrder.indexOf(b.kind) ||
 a.community.localeCompare(b.community));
 default:
 return 0;
 }
 });
 return copy;
}

function FundingLedger() {
 const all = useMemo(() => allFundingRows(), []);
 const [sort, setSort] = useState<SortKey>("year-desc");
 const [side, setSide] = useState<SideFilter>("all");
 const [kind, setKind] = useState<"all" | FundingKind>("all");
 const [certainty, setCertainty] = useState<"all" | Certainty>("all");
 const [country, setCountry] = useState("all");
 const [query, setQuery] = useState("");

 const countries = useMemo(() => Array.from(new Set(all.map((r) => r.country))).sort(compareCountries),
 [all],);
 const kindsUsed = useMemo(() => kindOrder.filter((k) => all.some((r) => r.kind === k)),
 [all],);

 const visible = useMemo(() => {
 const q = query.trim().toLowerCase();
 const filtered = all.filter((row) => {
 if (side !== "all" && row.side !== side) return false;
 if (kind !== "all" && row.kind !== kind) return false;
 if (certainty !== "all" && row.certainty !== certainty) return false;
 if (country !== "all" && row.country !== country) return false;
 if (q) {
 const hay = `${row.community} ${row.source} ${row.amount} ${row.note}`.toLowerCase();
 if (!hay.includes(q)) return false;
 }
 return true;
 });
 return sortRows(filtered, sort);
 }, [all, sort, side, kind, certainty, country, query]);

 const documented = visible.filter((r) => r.certainty === "documented").length;
 const publicN = visible.filter((r) => r.side === "public").length;
 const privateN = visible.length - publicN;
 const filtersOn =
 side !== "all" || kind !== "all" || certainty !== "all" || country !== "all" || query.trim() !== "";

 return (<main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Ledger</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
 How the villages were paid for
 </h1>
 <p className="mt-4 text-lg leading-relaxed text-muted">
 Grants, easements, member shares, loans, and businesses, in one list. Documented
 means a published number. Estimated means a reasoned range. This is not an audit
 and not investment advice.
 </p>
 </div>

 <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
 <HeroStat label="Sources shown" value={String(visible.length)} />
 <HeroStat label="Documented" value={String(documented)} />
 <HeroStat label="Public" value={String(publicN)} />
 <HeroStat label="Private" value={String(privateN)} />
 </dl>

 <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
 <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
 <SelectField
 id="fund-sort"
 label="Sort by"
 value={sort}
 onChange={(v) => setSort(v as SortKey)}
 >
 {sortOptions.map((opt) => (<option key={opt.value} value={opt.value}>
 {opt.label}
 </option>))}
 </SelectField>
 <SelectField
 id="fund-side"
 label="Public or private"
 value={side}
 onChange={(v) => setSide(v as SideFilter)}
 >
 <option value="all">All money</option>
 <option value="public">Public grants and contracts</option>
 <option value="private">Private-citizen money</option>
 </SelectField>
 <SelectField
 id="fund-kind"
 label="Kind"
 value={kind}
 onChange={(v) => setKind(v as "all" | FundingKind)}
 >
 <option value="all">All kinds</option>
 {kindsUsed.map((k) => (<option key={k} value={k}>
 {fundingKindLabels[k]}
 </option>))}
 </SelectField>
 <SelectField
 id="fund-country"
 label="Country"
 value={country}
 onChange={setCountry}
 >
 <option value="all">All countries</option>
 {countries.map((c) => (<option key={c} value={c}>
 {c}
 </option>))}
 </SelectField>
 </div>
 <div className="mt-3 grid gap-3 sm:grid-cols-2">
 <SelectField
 id="fund-certainty"
 label="Certainty"
 value={certainty}
 onChange={(v) => setCertainty(v as "all" | Certainty)}
 >
 <option value="all">Documented and estimated</option>
 <option value="documented">Documented only</option>
 <option value="estimated">Estimated only</option>
 </SelectField>
 <label htmlFor="fund-search" className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Search</span>
 <input
 id="fund-search"
 type="search"
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 placeholder="Community, source, or note"
 className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 </div>
 <p className="mt-3 text-sm text-muted">
 <span className="tabular-nums font-medium text-fg">{visible.length}</span> of{" "}
 <span className="tabular-nums">{all.length}</span> sources
 {filtersOn ? (<>
 {" "}
 ·{" "}
 <button
 type="button"
 onClick={() => {
 setSide("all");
 setKind("all");
 setCertainty("all");
 setCountry("all");
 setQuery("");
 }}
 className="min-h-11 font-medium text-forest hover:underline"
 >
 Clear filters
 </button>
 </>): (<span className="text-subtle"> · amounts are mixed currencies and are not summed</span>)}
 </p>
 </div>

 {visible.length === 0 ? (<div className="mt-10 rounded-lg border border-dashed border-border bg-surface px-6 py-16 text-center">
 <p className="font-display text-xl text-fg">No sources match that filter</p>
 <p className="mt-2 text-muted">Try another country or kind, or clear filters.</p>
 </div>): (<>
 <ul className="mt-8 space-y-3 md:hidden">
 {visible.map((row) => (<li key={row.id}>
 <FundingCard row={row} />
 </li>))}
 </ul>
 <div className="mt-8 hidden overflow-x-auto rounded-lg border border-border bg-surface shadow-border md:block">
 <table className="w-full min-w-[64rem] text-left text-sm">
 <thead className="bg-panel text-xs uppercase tracking-wide text-subtle">
 <tr>
 <th className="px-4 py-3 font-medium">Community</th>
 <th className="px-4 py-3 font-medium">Side</th>
 <th className="px-4 py-3 font-medium">Kind</th>
 <th className="px-4 py-3 font-medium">Source</th>
 <th className="px-4 py-3 font-medium">Amount</th>
 <th className="px-4 py-3 font-medium">Year</th>
 <th className="px-4 py-3 font-medium">Certainty</th>
 </tr>
 </thead>
 <tbody>
 {visible.map((row) => (<tr key={row.id} className="border-t border-border align-top hover:bg-panel/70">
 <td className="px-4 py-3">
 <Link
 to="/communities/$slug"
 params={{ slug: row.slug }}
 className="font-medium text-fg hover:text-forest hover:underline"
 >
 {row.community}
 </Link>
 <span className="mt-0.5 block text-xs text-subtle">{row.country}</span>
 </td>
 <td className="px-4 py-3">
 <SidePill side={row.side} />
 </td>
 <td className="px-4 py-3 text-muted">{fundingKindLabels[row.kind]}</td>
 <td className="px-4 py-3">
 <p className="font-medium leading-snug text-fg">{row.source}</p>
 <p className="mt-1 max-w-md text-xs leading-relaxed text-muted">{row.note}</p>
 </td>
 <td className="px-4 py-3 font-medium text-forest">{row.amount}</td>
 <td className="px-4 py-3 tabular-nums text-muted">{row.year ?? "n/a"}</td>
 <td className="px-4 py-3">
 <CertaintyPill value={row.certainty} />
 </td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </>)}

 <p className="mt-10 text-sm text-muted">
 Figures come from annual reports, 990s, community sites, and news. Open a village for the
 full write-up, or{" "}
 <Link to="/" className="font-medium text-forest hover:underline">
 return to the atlas
 </Link>
.
 </p>
 </main>);
}

function FundingCard({ row }: { row: FundingRow }) {
 return (<article className="rounded-lg bg-surface p-4 shadow-border">
 <div className="flex flex-wrap items-center gap-2">
 <SidePill side={row.side} />
 <CertaintyPill value={row.certainty} />
 <span className="text-xs text-subtle">{fundingKindLabels[row.kind]}</span>
 </div>
 <h2 className="mt-3 font-medium leading-snug text-fg">{row.source}</h2>
 <p className="mt-2 font-display text-xl leading-snug text-forest">{row.amount}</p>
 {row.year ? <p className="mt-1 text-xs tabular-nums text-subtle">{row.year}</p>: null}
 <p className="mt-3 text-sm leading-relaxed text-muted">{row.note}</p>
 <p className="mt-3 text-sm">
 <Link
 to="/communities/$slug"
 params={{ slug: row.slug }}
 className="font-medium text-forest hover:underline"
 >
 {row.community}
 </Link>
 <span className="text-subtle"> · {row.country}</span>
 </p>
 </article>);
}

function SidePill({ side }: { side: "public" | "private" }) {
 return (<span
 className={`rounded-full px-2 py-0.5 text-xs font-medium ${
 side === "public" ? "bg-forest/10 text-forest-deep": "bg-panel text-muted"
 }`}
 >
 {side === "public" ? "Public": "Private"}
 </span>);
}

function CertaintyPill({ value }: { value: Certainty }) {
 return (<span
 className={`rounded-full px-2 py-0.5 text-xs font-medium ${
 value === "documented" ? "bg-forest/10 text-forest-deep": "bg-panel text-muted"
 }`}
 >
 {value === "documented" ? "Documented": "Estimated"}
 </span>);
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
