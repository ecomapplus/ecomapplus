import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { pageNumbers } from "@/data/communities";

export function Pager({
 page,
 pages,
 from,
 to,
 total,
 onPage,
 noun = "communities",
}: {
 page: number;
 pages: number;
 from: number;
 to: number;
 total: number;
 onPage: (page: number) => void;
 noun?: string;
}) {
 if (total === 0 || pages <= 1) return null;

 const numbers = pageNumbers(page, pages);

 return (<nav
 aria-label="Community pages"
 className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
 >
 <p className="text-sm text-muted">
 <span className="tabular-nums font-medium text-fg">
 {from}–{to}
 </span>{" "}
 of <span className="tabular-nums">{total}</span> {noun}
 <span className="text-subtle">
 {" "}
 · page <span className="tabular-nums">{page}</span> of{" "}
 <span className="tabular-nums">{pages}</span>
 </span>
 </p>
 <div className="flex flex-wrap items-center gap-1">
 <PageBtn label="Previous page" disabled={page <= 1} onClick={() => onPage(page - 1)}>
 <ChevronLeft className="size-4" aria-hidden />
 <span className="hidden sm:inline">Prev</span>
 </PageBtn>
 {numbers.map((item, i) =>
 item === "gap" ? (<span key={`gap-${i}`} className="px-1 text-subtle" aria-hidden>
 …
 </span>): (<PageBtn
 key={item}
 label={`Page ${item}`}
 current={item === page}
 onClick={() => onPage(item)}
 >
 {item}
 </PageBtn>),)}
 <PageBtn label="Next page" disabled={page >= pages} onClick={() => onPage(page + 1)}>
 <span className="hidden sm:inline">Next</span>
 <ChevronRight className="size-4" aria-hidden />
 </PageBtn>
 </div>
 </nav>);
}

function PageBtn({
 label,
 current,
 disabled,
 onClick,
 children,
}: {
 label: string;
 current?: boolean;
 disabled?: boolean;
 onClick: () => void;
 children: ReactNode;
}) {
 return (<button
 type="button"
 aria-label={label}
 aria-current={current ? "page": undefined}
 disabled={disabled}
 onClick={onClick}
 className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-md px-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 disabled:pointer-events-none disabled:opacity-40 ${
 current ? "bg-forest text-cream": "bg-surface text-fg shadow-border hover:shadow-border-hover"
 }`}
 >
 {children}
 </button>);
}
