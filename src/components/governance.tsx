import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { getCommunity } from "@/data/communities";
import {
  governanceFor,
  uniqueGovernanceTag,
  type Governance,
} from "@/data/governance";

export function UniqueGovernanceChip({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const row = governanceFor(slug);
  const [open, setOpen] = useState(false);
  if (!row.unique) return null;
  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-label={`${uniqueGovernanceTag}: preview`}
        className={`inline-flex items-center rounded-full bg-forest/10 font-medium text-forest-deep hover:bg-forest/20 ${
          compact ? "min-h-9 px-2.5 py-1 text-xs" : "min-h-9 px-3 py-1 text-xs sm:text-sm"
        }`}
      >
        {uniqueGovernanceTag}
      </button>
      {open ? (
        <UniqueGovernancePreview slug={slug} row={row} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

function UniqueGovernancePreview({
  slug,
  row,
  onClose,
}: {
  slug: string;
  row: Governance;
  onClose: () => void;
}) {
  const community = getCommunity(slug);
  const dive = row.dive;
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const organs = dive?.organs.length
    ? dive.organs.map((organ) => ({ name: organ.name, detail: organ.what }))
    : row.bodies.map((body) => ({ name: body.name, detail: body.role }));

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Dismiss governance preview"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-governance-preview
        className="relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-lg border border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-border-hover sm:rounded-lg"
      >
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
            <Scale className="size-3.5" aria-hidden />
            {uniqueGovernanceTag}
          </p>
          {community ? (
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-subtle">{community.name}</p>
          ) : null}
          <h3 id={titleId} className="mt-1 font-display text-2xl leading-snug text-fg">
            {dive?.title ?? row.modelLabel}
          </h3>
          <p className="mt-2 text-xs font-medium text-forest-deep">{row.modelLabel}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{dive?.lead ?? row.whoDecides}</p>
          {organs.length > 0 ? (
            <ol className="mt-4 grid gap-2">
              {organs.map((organ) => (
                <li key={organ.name} className="rounded-md bg-panel p-3">
                  <p className="font-display text-lg leading-snug text-fg">{organ.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{organ.detail}</p>
                </li>
              ))}
            </ol>
          ) : null}
          {dive ? (
            <div className="mt-4 grid gap-3">
              <article>
                <h4 className="font-display text-lg leading-snug text-fg">How a decision travels</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{dive.path}</p>
              </article>
              <article>
                <h4 className="font-display text-lg leading-snug text-fg">How this structure formed</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{dive.history}</p>
              </article>
              <article>
                <h4 className="font-display text-lg leading-snug text-fg">What strains it</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{dive.tension}</p>
              </article>
            </div>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-muted">{row.howItRuns}</p>
          )}
          <Link
            to="/communities/$slug"
            params={{ slug }}
            hash="governance"
            onClick={onClose}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
          >
            Read the government on the village page
          </Link>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
          aria-label="Close governance preview"
        >
          <span className="text-lg font-medium leading-none" aria-hidden>
            ×
          </span>
        </button>
      </div>
    </div>
  );
}

export function GovernanceSection({ slug }: { slug: string }) {
  const row = governanceFor(slug);
  const unique = row.unique && row.dive;

  return (
    <section className="mt-12 scroll-mt-40" id="governance">
      <h2 className="font-display text-2xl text-fg">Internal governance</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        {unique
          ? "This village does not run on a generic board-plus-meeting diagram. The tag means the inner constitution is unusual enough to walk organ by organ: who actually decides, how a question travels, how the structure formed, and what strains it. The likely informal agreements further down the page follow these organs — labour credits, a ministry, a land trust, a pod — not a guest-house form."
          : "Who actually decides, which bodies sit, and how a typical question travels. This is the inner constitution, not the filing cabinet. See legal entities for the papers."}
      </p>

      <article
        className={`mt-6 rounded-md p-5 shadow-border ${
          unique ? "border border-forest/25 bg-forest/5" : "bg-surface"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
            <Scale className="size-3.5" aria-hidden />
            Who decides
          </p>
          <div className="flex flex-wrap gap-2">
            {row.unique ? <UniqueGovernanceChip slug={slug} compact /> : null}
            <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs font-medium text-fg">
              {row.modelLabel}
            </span>
          </div>
        </div>
        <p className="mt-3 max-w-3xl leading-relaxed text-fg">{row.whoDecides}</p>
        {row.summary.trim() !== row.whoDecides.trim() ? (
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{row.summary}</p>
        ) : null}
        {unique && row.dive ? (
          <p className="mt-4 max-w-3xl leading-relaxed text-fg">{row.dive.lead}</p>
        ) : null}
      </article>

      {row.bodies.length > 0 ? (
        <div className="mt-6">
          <h3 className="font-display text-xl text-fg">Bodies</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            The organs that actually sit. Read them together. No single line is the whole
            government.
          </p>
          <ol
            className={`mt-4 grid gap-3 ${row.bodies.length > 1 ? "lg:grid-cols-2" : ""}`}
          >
            {row.bodies.map((body, i) => (
              <li key={body.name} className="rounded-md bg-surface p-4 shadow-border">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
                  Body {i + 1}
                </p>
                <h4 className="mt-2 font-display text-xl leading-snug text-fg">{body.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body.role}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <p className="mt-6 max-w-3xl leading-relaxed text-muted">{row.howItRuns}</p>

      {unique ? <GovernanceDive row={row} /> : null}
    </section>
  );
}

function GovernanceDive({ row }: { row: Governance }) {
  const dive = row.dive;
  if (!dive) return null;
  return (
    <div className="mt-10">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
        Deeper dive
      </p>
      <h3 className="mt-2 font-display text-2xl leading-snug text-fg">{dive.title}</h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted">{dive.lead}</p>

      {dive.organs.length > 0 ? (
        <ol className="mt-6 grid gap-3 lg:grid-cols-2">
          {dive.organs.map((organ) => (
            <li key={organ.name} className="rounded-md border border-forest/20 bg-surface p-4">
              <h4 className="font-display text-xl leading-snug text-fg">{organ.name}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">{organ.what}</p>
            </li>
          ))}
        </ol>
      ) : null}

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <DiveBlock title="How a decision travels">{dive.path}</DiveBlock>
        <DiveBlock title="How this structure formed">{dive.history}</DiveBlock>
        <DiveBlock title="What strains it">{dive.tension}</DiveBlock>
      </div>
    </div>
  );
}

function DiveBlock({ title, children }: { title: string; children: string }) {
  return (
    <article className="rounded-md bg-surface p-4 shadow-border">
      <h4 className="font-display text-lg leading-snug text-fg">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>
    </article>
  );
}

export function GovernanceStats({ slug }: { slug: string }) {
  const row = governanceFor(slug);
  return (
    <p className="mt-3 border-t border-border pt-3 text-xs leading-snug text-muted">
      <span className="uppercase tracking-wide text-subtle">Governance</span>
      <span className="mt-1 block font-medium text-fg">{row.modelLabel}</span>
      {row.unique ? (
        <span className="mt-0.5 block text-forest-deep">{uniqueGovernanceTag}</span>
      ) : null}
    </p>
  );
}
