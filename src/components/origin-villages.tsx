import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { AgreementOrigin } from "@/data/agreements-catalog";

const PREVIEW = 6;

function VillageChip({ c }: { c: AgreementOrigin }) {
 return (<Link
 to="/communities/$slug"
 params={{ slug: c.slug }}
 title={c.country}
 className="inline-flex min-h-9 items-center rounded-full bg-panel px-3 text-xs text-fg hover:bg-border hover:text-forest sm:text-sm"
 >
 {c.name}
 </Link>);
}

export function OriginVillages({
 communities,
 emptyLabel = "Not yet used in the atlas",
 lead,
 preview = PREVIEW,
}: {
 communities: AgreementOrigin[];
 emptyLabel?: string;
 lead?: string;
 preview?: number;
}) {
 const [open, setOpen] = useState(false);
 if (communities.length === 0) {
 return <p className="text-sm text-subtle">{emptyLabel}</p>;
 }

 const canTruncate = communities.length > preview;
 const shown = open || !canTruncate ? communities: communities.slice(0, preview);
 const hidden = communities.length - shown.length;

 return (<div>
 {lead ? (<p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">{lead}</p>): null}
 <ul
 data-origin-open={open ? "true": "false"}
 className={lead ? "mt-2 flex flex-wrap gap-1.5": "flex flex-wrap gap-1.5"}
 >
 {shown.map((c) => (<li key={c.slug}>
 <VillageChip c={c} />
 </li>))}
 {canTruncate ? (<li>
 <button
 type="button"
 aria-expanded={open}
 onClick={() => setOpen((value) => !value)}
 className="inline-flex min-h-9 items-center rounded-full px-3 text-xs font-medium text-forest hover:underline sm:text-sm"
 >
 {open ? "Show fewer": `+${hidden} more`}
 </button>
 </li>): null}
 </ul>
 </div>);
}
