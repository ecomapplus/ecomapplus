import { Link } from "@tanstack/react-router";
import { fundingFor, type Certainty, type FundingItem } from "@/data/funding";

function CertaintyPill({ value }: { value: Certainty }) {
 return (<span
 className={`rounded-full px-2 py-0.5 text-xs font-medium ${
 value === "documented" ? "bg-forest/10 text-forest-deep": "bg-panel text-muted"
 }`}
 >
 {value === "documented" ? "Documented": "Estimated"}
 </span>);
}

function ItemList({ items }: { items: FundingItem[] }) {
 return (<ul className="mt-4 space-y-4">
 {items.map((item) => (<li key={item.source + item.amount} className="rounded-md bg-surface p-4 shadow-border">
 <div className="flex flex-wrap items-start justify-between gap-2">
 <p className="font-medium leading-snug text-fg">{item.source}</p>
 <CertaintyPill value={item.certainty} />
 </div>
 <p className="mt-2 font-display text-xl leading-snug text-forest">{item.amount}</p>
 {item.year ? <p className="mt-1 text-xs tabular-nums text-subtle">{item.year}</p>: null}
 <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
 </li>))}
 </ul>);
}

export function FundingSection({ slug }: { slug: string }) {
 const row = fundingFor(slug);
 return (<section className="mt-12 scroll-mt-40" id="funding">
 <h2 className="font-display text-2xl text-fg">Grants and private investment</h2>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
 {row.overview} Figures are compiled from annual reports, 990s, community sites, and news.
 Documented means a published number; estimated means a reasoned range where the books are
 not public. This is not an audit.{" "}
 <Link to="/funding" className="font-medium text-forest hover:underline">
 See every source across the atlas
 </Link>
.
 </p>
 <div className="mt-6 grid gap-8 lg:grid-cols-2">
 <div>
 <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
 Government grants and contracts
 </h3>
 <ItemList items={row.grants} />
 </div>
 <div>
 <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
 Private-citizen investment
 </h3>
 <ItemList items={row.private} />
 </div>
 </div>
 </section>);
}

export function FundingStats({ slug }: { slug: string }) {
 const row = fundingFor(slug);
 return (<dl className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 text-xs">
 <div>
 <dt className="uppercase tracking-wide text-subtle">Gov. money</dt>
 <dd className="mt-1 font-medium leading-snug text-fg">{row.grantsHeadline}</dd>
 </div>
 <div>
 <dt className="uppercase tracking-wide text-subtle">Private money</dt>
 <dd className="mt-1 font-medium leading-snug text-fg">{row.privateHeadline}</dd>
 </div>
 </dl>);
}
