const NOW = 2026;

function yearPoint(label: string): number {
  if (/present/i.test(label) && !/\d{4}/.test(label)) return NOW;
  const year = label.match(/(\d{4})/);
  if (year) return Number(year[1]);
  const decade = label.match(/(\d{3})0s/i);
  if (decade) return Number(`${decade[1]}0`);
  return NOW;
}

function marks(items: { year: string; event: string }[]) {
  const points = items.map((item) => yearPoint(item.year));
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min;
  return items.map((item, index) => {
    const t = span === 0 ? (index + 0.5) / Math.max(items.length, 1) : (points[index] - min) / span;
    return {
      ...item,
      trueLeft: 4 + t * 92,
      labelLeft: ((index + 0.5) / items.length) * 100,
    };
  });
}

export function VillageTimeline({ items }: { items: { year: string; event: string }[] }) {
  if (items.length === 0) return null;
  const ticks = marks(items);
  const minWidth = Math.max(40, items.length * 12);

  return (
    <section className="mt-8" aria-label="Timeline">
      <h2 className="font-display text-2xl text-fg">Timeline</h2>
      <div className="-mx-4 mt-4 overflow-x-auto px-4">
        <div style={{ minWidth: `${minWidth}rem` }}>
          <ol className="flex">
            {ticks.map((tick) => (
              <li key={tick.year + tick.event} className="min-w-0 flex-1 px-1.5">
                <div className="h-full rounded-md bg-surface p-3 shadow-border">
                  <p className="text-sm font-medium tabular-nums text-moss">{tick.year}</p>
                  <p className="mt-1 text-xs leading-snug text-fg">{tick.event}</p>
                </div>
              </li>
            ))}
          </ol>
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="mt-1 block h-14 w-full text-forest"
            aria-hidden
          >
            {ticks.map((tick) => (
              <line
                key={tick.year + tick.event}
                x1={tick.labelLeft}
                y1="0"
                x2={tick.trueLeft}
                y2="40"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          <div className="relative h-3">
            <span
              className="absolute top-1/2 right-[4%] left-[4%] h-0.5 -translate-y-1/2 bg-forest"
              aria-hidden
            />
            {ticks.map((tick) => (
              <span
                key={tick.year + tick.event}
                className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest ring-2 ring-bg"
                style={{ left: `${tick.trueLeft}%` }}
                title={tick.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
