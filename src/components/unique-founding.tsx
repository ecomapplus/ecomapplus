import { Link } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { getCommunity } from "@/data/communities";
import {
  uniqueFoundingFor,
  uniqueFoundingTag,
  type UniqueFounding,
} from "@/data/unique-founding";

export function UniqueFoundingChip({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const dive = uniqueFoundingFor(slug);
  const [open, setOpen] = useState(false);
  if (!dive) return null;
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
        aria-label={`${uniqueFoundingTag}: preview`}
        className={`inline-flex items-center rounded-full bg-forest/10 font-medium text-forest-deep hover:bg-forest/20 ${
          compact ? "min-h-9 px-2.5 py-1 text-xs" : "min-h-9 px-3 py-1 text-xs sm:text-sm"
        }`}
      >
        {uniqueFoundingTag}
      </button>
      {open ? (
        <UniqueFoundingPreview slug={slug} dive={dive} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

function UniqueFoundingPreview({
  slug,
  dive,
  onClose,
}: {
  slug: string;
  dive: UniqueFounding;
  onClose: () => void;
}) {
  const community = getCommunity(slug);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

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
        aria-label="Dismiss founding preview"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-founding-preview
        className="relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-lg border border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-border-hover sm:rounded-lg"
      >
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">
            <Landmark className="size-3.5" aria-hidden />
            {uniqueFoundingTag}
          </p>
          {community ? (
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-subtle">{community.name}</p>
          ) : null}
          <h3 id={titleId} className="mt-1 font-display text-2xl leading-snug text-fg">
            {dive.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{dive.lead}</p>
          <ol className="mt-4 grid gap-2">
            {dive.scenes.map((scene, i) => (
              <li key={scene.name} className="rounded-md bg-panel p-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Scene {i + 1}</p>
                <p className="mt-1 font-display text-lg leading-snug text-fg">{scene.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{scene.what}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-fg">{dive.aftermath}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{dive.tension}</p>
          <Link
            to="/communities/$slug"
            params={{ slug }}
            hash="founding"
            onClick={onClose}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
          >
            Read the founding on the village page
          </Link>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex size-11 items-center justify-center rounded-md bg-danger text-cream hover:bg-danger-deep"
          aria-label="Close founding preview"
        >
          <span className="text-lg font-medium leading-none" aria-hidden>
            ×
          </span>
        </button>
      </div>
    </div>
  );
}

export function UniqueFoundingSection({
  slug,
  fallback,
}: {
  slug: string;
  fallback: string;
}) {
  const dive = uniqueFoundingFor(slug);
  if (!dive) {
    return (
      <article>
        <h2 className="font-display text-2xl text-fg">How it was founded</h2>
        <p className="mt-3 leading-relaxed text-muted">{fallback}</p>
      </article>
    );
  }

  return (
    <section className="mt-12 scroll-mt-40 lg:col-span-2" id="founding">
      <h2 className="font-display text-2xl text-fg">How it was founded</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        This origin is unusual enough to walk scene by scene. The tag means the founding
        is not “a group bought land.” It is a caravan, a siege, a volcano, a fence, a
        prison farm — something that still explains the place.
      </p>

      <article className="mt-6 rounded-lg bg-forest-deep p-6 text-cream shadow-border sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
            <Landmark className="size-3.5" aria-hidden />
            {uniqueFoundingTag}
          </p>
        </div>
        <h3 className="mt-3 font-display text-3xl leading-[1.15] text-cream sm:text-4xl">
          {dive.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/90">{dive.lead}</p>
      </article>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {dive.scenes.map((scene, i) => (
          <li key={scene.name} className="rounded-md border border-forest/20 bg-surface p-4 shadow-border">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
              Scene {i + 1}
            </p>
            <h4 className="mt-2 font-display text-xl leading-snug text-fg">{scene.name}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{scene.what}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-md bg-surface p-4 shadow-border">
          <h4 className="font-display text-lg leading-snug text-fg">What it became</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">{dive.aftermath}</p>
        </article>
        <article className="rounded-md bg-surface p-4 shadow-border">
          <h4 className="font-display text-lg leading-snug text-fg">What the story still costs</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">{dive.tension}</p>
        </article>
      </div>
    </section>
  );
}

export function UniqueFoundingStats({ slug }: { slug: string }) {
  const dive = uniqueFoundingFor(slug);
  if (!dive) return null;
  return (
    <p className="mt-3 border-t border-border pt-3 text-xs leading-snug text-muted">
      <span className="uppercase tracking-wide text-subtle">Founding</span>
      <span className="mt-1 block font-medium text-forest-deep">{uniqueFoundingTag}</span>
      <span className="mt-0.5 block text-fg">{dive.title}</span>
    </p>
  );
}
