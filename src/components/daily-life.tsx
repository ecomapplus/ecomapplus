import { dailyLifeFor } from "@/data/daily-life";

export function DailyLifeSection({ slug }: { slug: string }) {
  const row = dailyLifeFor(slug);
  return (
    <section className="mt-12 scroll-mt-40" id="day-here">
      <h2 className="font-display text-2xl text-fg">A day here</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {row.typical.map((item, i) => (
          <li key={item.title} className="rounded-md bg-surface p-4 shadow-border">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Typical {i + 1}</p>
            <h3 className="mt-2 font-display text-xl leading-snug text-fg">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
          </li>
        ))}
      </ol>
      <article className="mt-5 rounded-lg bg-forest-deep p-6 text-cream shadow-border sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/70">Known for</p>
        <h3 className="mt-3 font-display text-3xl leading-[1.15] text-cream sm:text-4xl">
          {row.unique.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/90">{row.unique.detail}</p>
      </article>
    </section>
  );
}

export function DailyLifeStats({ slug }: { slug: string }) {
  const row = dailyLifeFor(slug);
  return (
    <p className="mt-3 border-t border-border pt-3 text-xs leading-snug text-muted">
      <span className="uppercase tracking-wide text-subtle">Known for</span>
      <span className="mt-1 block font-medium text-fg">{row.unique.title}</span>
    </p>
  );
}
