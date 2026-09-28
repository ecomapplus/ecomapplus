import { ExternalLink } from "lucide-react";
import { sourceKindLabels, sourcesFor } from "@/data/sources";

export function SourcesSection({
  slug,
  website,
  name,
}: {
  slug: string;
  website: string;
  name: string;
}) {
  const sources = sourcesFor(slug, website, name);
  if (sources.length === 0) return null;

  return (
    <section className="mt-12 scroll-mt-40" id="sources">
      <h2 className="font-display text-2xl text-fg">Sources</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        Published pages this profile was checked against. Member counts, acres, and dates
        drift. Confirm with the community before you travel. This is a reference, not legal
        advice.
      </p>
      <ul className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-start justify-between gap-3 px-4 py-3 hover:bg-panel"
            >
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-[0.16em] text-moss">
                  {sourceKindLabels[source.kind]}
                </span>
                <span className="mt-0.5 block font-medium leading-snug text-fg">{source.title}</span>
                {source.note ? (
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{source.note}</span>
                ) : null}
              </span>
              <ExternalLink className="mt-1 size-4 shrink-0 text-subtle" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
