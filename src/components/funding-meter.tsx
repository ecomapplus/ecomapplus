export function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export function fundingPercent(pledgedUsd: number, goalUsd: number | null): number {
  if (!goalUsd || goalUsd <= 0) return 0;
  return Math.min(100, Math.round((pledgedUsd / goalUsd) * 100));
}

export function FundingThermometer({
  pledgedUsd,
  goalUsd,
}: {
  pledgedUsd: number;
  goalUsd: number | null;
}) {
  const pct = fundingPercent(pledgedUsd, goalUsd);
  const over = goalUsd != null && pledgedUsd > goalUsd;
  const filled = pledgedUsd > 0;

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs tabular-nums text-muted">{goalUsd != null ? formatUsd(goalUsd) : "No goal yet"}</p>
      <div className="mt-2 flex flex-col items-center">
        <div
          role="meter"
          aria-label="Amount pledged toward the goal"
          aria-valuemin={0}
          aria-valuemax={goalUsd ?? 0}
          aria-valuenow={pledgedUsd}
          className="relative h-52 w-4 overflow-hidden rounded-t-full bg-panel shadow-border"
        >
          <div
            className="absolute inset-x-0 bottom-0 bg-forest transition-[height] duration-200 ease-out"
            style={{ height: `${pct}%` }}
          />
        </div>
        <div className={`-mt-1.5 size-10 rounded-full shadow-border ${filled ? "bg-forest" : "bg-panel"}`} aria-hidden />
      </div>
      <p className="mt-3 font-display text-2xl tabular-nums leading-none text-fg">{formatUsd(pledgedUsd)}</p>
      <p className="mt-1 text-xs text-muted">
        {goalUsd == null ? "Pledged, waiting on a goal" : over ? `${pct}% · over the goal` : `${pct}% pledged`}
      </p>
    </div>
  );
}

export function FundingBar({
  pledgedUsd,
  goalUsd,
}: {
  pledgedUsd: number;
  goalUsd: number | null;
}) {
  const pct = fundingPercent(pledgedUsd, goalUsd);
  const over = goalUsd != null && pledgedUsd > goalUsd;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 text-xs tabular-nums">
        <span className="font-medium text-fg">{formatUsd(pledgedUsd)} pledged</span>
        <span className="text-muted">{goalUsd != null ? formatUsd(goalUsd) : "No goal yet"}</span>
      </div>
      <div
        role="meter"
        aria-label="Amount pledged toward the goal"
        aria-valuemin={0}
        aria-valuemax={goalUsd ?? 0}
        aria-valuenow={pledgedUsd}
        className="mt-1.5 h-2 overflow-hidden rounded-full bg-panel"
      >
        <div
          className="h-full rounded-full bg-forest transition-[width] duration-200 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      {goalUsd != null ? (
        <p className="mt-1 text-xs text-muted">{over ? `${pct}% · over the goal` : `${pct}% of the goal`}</p>
      ) : null}
    </div>
  );
}
