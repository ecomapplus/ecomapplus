import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { formUsageByGroup, type Community } from "@/data/communities";
import { guideForForm } from "@/data/legal-form-guides";

export function LegalStructurePicker({
 value,
 onChange,
 countsFrom,
 total,
}: {
 value: string;
 onChange: (value: string) => void;
 countsFrom: Community[];
 total: number;
}) {
 const [open, setOpen] = useState(false);
 const groups = formUsageByGroup(countsFrom);
 const selected = value !== "all" ? guideForForm(value): null;

 return (<div className="border-t border-border pt-4">
 <div className="flex items-center gap-2">
 <button
 type="button"
 id="legal-structure-label"
 aria-expanded={open}
 aria-controls="legal-structure-panel"
 onClick={() => setOpen((current) => !current)}
 className="flex min-h-11 min-w-0 flex-1 items-center justify-between gap-3 rounded-md px-1 text-left transition-colors duration-150 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 >
 <span className="min-w-0">
 <span className="block font-medium text-fg">Legal structure</span>
 <span className="mt-0.5 block truncate text-sm text-muted">
 {selected ? selected.name: open ? "Choose a form": "Tap to choose a form"}
 </span>
 </span>
 <ChevronDown
 className={`size-4 shrink-0 text-subtle transition-transform duration-200 ${
 open ? "rotate-180": ""
 }`}
 aria-hidden
 />
 </button>
 {selected ? (<button
 type="button"
 onClick={() => onChange("all")}
 className="shrink-0 text-sm font-medium text-forest hover:underline"
 >
 Clear
 </button>): null}
 </div>

 {open ? (<div id="legal-structure-panel" className="pt-3">
 <p className="text-sm text-muted">
 A village can carry several forms at once. Tap one to show only communities that use
 it.
 </p>

 <div role="radiogroup" aria-labelledby="legal-structure-label" className="mt-3">
 <div className="flex flex-wrap gap-1.5">
 <StructureChip
 label="All forms"
 count={total}
 selected={value === "all"}
 disabled={false}
 onSelect={() => onChange("all")}
 />
 </div>

 <div className="mt-3 grid gap-4 sm:grid-cols-2">
 {groups.map((group) => (<div key={group.label}>
 <p className="text-xs font-medium uppercase tracking-wide text-moss">
 {group.label}
 </p>
 <div className="mt-1.5 flex flex-wrap gap-1.5">
 {group.forms.map((row) => (<StructureChip
 key={row.form}
 label={row.form}
 count={row.count}
 selected={value === row.form}
 disabled={row.count === 0 && value !== row.form}
 onSelect={() => onChange(value === row.form ? "all": row.form)}
 />))}
 </div>
 </div>))}
 </div>
 </div>

 {selected ? (<div className="mt-3 rounded-md bg-panel px-3 py-2.5">
 <p className="text-sm font-medium text-fg">{selected.name}</p>
 <p className="mt-1 text-sm leading-relaxed text-muted">{selected.purpose}</p>
 </div>): null}
 </div>): null}
 </div>);
}

function StructureChip({
 label,
 count,
 selected,
 disabled,
 onSelect,
}: {
 label: string;
 count: number;
 selected: boolean;
 disabled: boolean;
 onSelect: () => void;
}) {
 return (<button
 type="button"
 role="radio"
 aria-checked={selected}
 aria-label={`${label}, ${count} ${count === 1 ? "community": "communities"}`}
 disabled={disabled}
 onClick={onSelect}
 className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-left text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 disabled:cursor-not-allowed disabled:opacity-40 ${
 selected ? "bg-forest text-cream": "bg-panel text-fg hover:bg-border"
 }`}
 >
 <span>{label}</span>
 <span className={`tabular-nums ${selected ? "text-cream/80": "text-subtle"}`}>{count}</span>
 </button>);
}
