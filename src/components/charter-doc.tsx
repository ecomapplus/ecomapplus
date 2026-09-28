import type { CharterDoc } from "@/data/charter";

export function CharterDocumentView({ doc }: { doc: CharterDoc }) {
 return (<article className="charter-sheet rounded-lg bg-surface p-6 shadow-border sm:p-10">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">{doc.form}</p>
 <h1 className="mt-2 font-display text-3xl leading-tight text-fg">{doc.title}</h1>
 <p className="mt-2 text-sm text-muted">{doc.subtitle}</p>
 <p className="mt-1 text-xs tabular-nums text-subtle">{doc.country}</p>
 {doc.languageNote ? <p className="mt-4 text-sm leading-relaxed text-forest">{doc.languageNote}</p>: null}
 <div className="mt-8 space-y-8">
 {doc.sections.map((section) => (<section key={section.heading}>
 <h2 className="font-display text-xl text-fg">{section.heading}</h2>
 <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted">{section.body}</p>
 </section>))}
 </div>
 </article>);
}
