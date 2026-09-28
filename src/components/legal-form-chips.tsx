import * as Popover from "@radix-ui/react-popover";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { kindByForm } from "@/data/charter";
import { guideForForm } from "@/data/legal-form-guides";
import { legalFormsFor } from "@/data/legal-entities";

export function LegalFormChips({
 slug,
 forms,
 compact = false,
}: {
 slug?: string;
 forms?: string[];
 compact?: boolean;
}) {
 const list = forms ?? (slug ? legalFormsFor(slug): []);
 if (list.length === 0) return null;
 return (<ul className={`flex flex-wrap ${compact ? "gap-1": "gap-1.5"}`}>
 {list.map((form) => (<li key={form}>
 <LegalFormChip form={form} compact={compact} />
 </li>))}
 </ul>);
}

export function LegalFormChip({ form, compact = false }: { form: string; compact?: boolean }) {
 const guide = guideForForm(form);
 const kind = kindByForm(form);
 return (<Popover.Root>
 <Popover.Trigger asChild>
 <button
 type="button"
 onClick={(event) => event.stopPropagation()}
 aria-label={`${form}: what this legal form means`}
 className={`rounded-full bg-panel text-left text-fg transition-colors duration-150 hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 ${
 compact ? "min-h-9 px-2.5 py-1 text-xs": "min-h-9 px-3 py-1 text-xs sm:text-sm"
 }`}
 >
 {form}
 </button>
 </Popover.Trigger>
 <Popover.Portal>
 <Popover.Content
 align="start"
 side="bottom"
 sideOffset={8}
 collisionPadding={16}
 onClick={(event) => event.stopPropagation()}
 className="legal-form-popover z-50 w-[min(20.5rem,calc(100vw-2rem))] rounded-md bg-surface p-4 shadow-border-hover outline-none"
 >
 <div className="flex items-start justify-between gap-3">
 <div>
 <p className="text-xs font-medium uppercase tracking-wide text-moss">{guide.family}</p>
 <h3 className="mt-1 font-display text-xl leading-snug text-fg">{guide.name}</h3>
 </div>
 <Popover.Close
 className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-panel hover:text-fg"
 aria-label="Close"
 >
 <X className="size-4" aria-hidden />
 </Popover.Close>
 </div>
 <p className="mt-3 text-sm leading-relaxed text-muted">{guide.purpose}</p>
 <p className="mt-2 text-sm leading-relaxed text-fg">{guide.meaning}</p>
 {kind ? (<Link
 to="/charter/$formId"
 params={{ formId: kind.slug }}
 onClick={(event) => event.stopPropagation()}
 className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
 >
 Draft a {form} document
 </Link>): (<p className="mt-3 text-xs text-subtle">A reference, not legal advice.</p>)}
 </Popover.Content>
 </Popover.Portal>
 </Popover.Root>);
}
