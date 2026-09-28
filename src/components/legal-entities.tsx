import { LegalFormChips } from "@/components/legal-form-chips";
import {
 entityCount,
 entitiesFor,
 formsForEntity,
 groupEntities,
 legalFormsFor,
 statusLabels,
 type EntityStatus,
} from "@/data/legal-entities";

const statusClass: Record<EntityStatus, string> = {
 current: "bg-forest/10 text-forest-deep",
 historical: "bg-panel text-muted",
 associated: "bg-moss/15 text-forest",
};

export function LegalEntitiesSection({ slug, legalNarrative }: { slug: string; legalNarrative: string }) {
 const entities = entitiesFor(slug);
 if (entities.length === 0) return null;

 const groups = groupEntities(entities);
 const current = entities.filter((e) => e.status === "current").length;
 const historical = entities.filter((e) => e.status === "historical").length;
 const associated = entities.filter((e) => e.status === "associated").length;

 return (<section className="mt-12 scroll-mt-40" id="legal">
 <div className="flex flex-wrap items-end justify-between gap-3">
 <div>
 <h2 className="font-display text-2xl text-fg">Legal entities</h2>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
 Named bodies that hold land, run the membership, teach, trade, or sit alongside this
 place. {entities.length} in all
 {current ? ` · ${current} current`: ""}
 {historical ? ` · ${historical} historical`: ""}
 {associated ? ` · ${associated} associated`: ""}. This place uses{" "}
 {legalFormsFor(slug).length} legal structures.
 </p>
 <div className="mt-3">
 <LegalFormChips slug={slug} />
 </div>
 <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{legalNarrative}</p>
 </div>
 </div>

 <div className="mt-6 space-y-8">
 {groups.map((group) => (<div key={group.layer}>
 <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-moss">{group.label}</h3>
 <ul className="mt-3 grid gap-3 lg:grid-cols-2">
 {group.items.map((entity) => (<li
 key={entity.name}
 className="rounded-md bg-surface p-4 shadow-border"
 >
 <div className="flex flex-wrap items-start justify-between gap-2">
 <p className="font-medium leading-snug text-fg">{entity.name}</p>
 <span
 className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[entity.status]}`}
 >
 {statusLabels[entity.status]}
 </span>
 </div>
 <p className="mt-1 text-sm text-forest">{entity.kind}</p>
 {formsForEntity(entity).length > 0 ? (<div className="mt-2">
 <LegalFormChips forms={formsForEntity(entity)} compact />
 </div>): null}
 {entity.year || entity.identifier ? (<p className="mt-1 text-xs tabular-nums text-subtle">
 {[entity.year, entity.identifier].filter(Boolean).join(" · ")}
 </p>): null}
 <p className="mt-3 text-sm leading-relaxed text-muted">{entity.role}</p>
 {entity.notes ? (<p className="mt-2 text-sm leading-relaxed text-muted">{entity.notes}</p>): null}
 </li>))}
 </ul>
 </div>))}
 </div>
 </section>);
}

export function EntityCountStat({ slug }: { slug: string }) {
 const n = entityCount(slug);
 return (<div className="bg-surface px-4 py-4">
 <dt className="text-xs uppercase tracking-wide text-subtle">Named entities</dt>
 <dd className="mt-1 text-sm font-medium leading-snug text-fg">
 {n} legal {n === 1 ? "body": "bodies"}
 </dd>
 </div>);
}
