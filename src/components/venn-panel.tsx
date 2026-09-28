import { Link } from "@tanstack/react-router";
import { ArrowLeftRight, Circle, Plus, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { VillageChip } from "@/components/village-chip";
import { Button } from "@/components/ui/button";
import {
  formatVennPct,
  vennAttribute,
  vennAttributes,
  vennLayout,
  vennSearchQuery,
  vennSections,
  vennStats,
  vennTotal,
  type VennAttribute,
  type VennLayout,
} from "@/data/venn";
import { cn } from "@/lib/utils";

const SUGGESTIONS: { a: string; b: string; c?: string }[] = [
  { a: "still-active", b: "volunteer" },
  { a: "farm", b: "overnight" },
  { a: "unique-gov", b: "visit-easy" },
  { a: "unique-gov", b: "visit-easy", c: "volunteer" },
];

const OVERLAP_CHIPS = 8;

type Slot = "a" | "b" | "c";
type Accent = "forest" | "stay" | "gold";

const ACCENT = {
  forest: {
    dot: "bg-forest",
    ring: "focus-visible:ring-forest/40",
    shape: "venn-a",
    fill: "fill-forest-deep",
  },
  stay: {
    dot: "bg-stay",
    ring: "focus-visible:ring-stay/40",
    shape: "venn-b",
    fill: "fill-stay-deep",
  },
  gold: {
    dot: "bg-gold",
    ring: "focus-visible:ring-gold/40",
    shape: "venn-c",
    fill: "fill-gold-deep",
  },
} as const;

const SLOT_ACCENT: Record<Slot, Accent> = { a: "forest", b: "stay", c: "gold" };

export function VennPanel({
  aId,
  bId,
  cId,
  onChange,
}: {
  aId?: string;
  bId?: string;
  cId?: string;
  onChange: (next: { a?: string; b?: string; c?: string }) => void;
}) {
  const a = vennAttribute(aId);
  const b = vennAttribute(bId);
  const c = vennAttribute(cId);
  const stats = useMemo(() => vennStats(a?.id, b?.id, c?.id), [a?.id, b?.id, c?.id]);
  const three = Boolean(a && b && c);
  const selectedCount = [a, b, c].filter(Boolean).length;
  const showThird = Boolean(c) || Boolean(a && b);
  const layout = useMemo(() => {
    if (!stats) return null;
    if (a && b && c) {
      return vennLayout(stats.aCount, stats.bCount, stats.abCount, {
        cCount: stats.cCount,
        acCount: stats.acCount,
        bcCount: stats.bcCount,
      });
    }
    if (a && b) return vennLayout(stats.aCount, stats.bCount, stats.abCount);
    if (a && c) return vennLayout(stats.aCount, stats.cCount, stats.acCount);
    if (b && c) return vennLayout(stats.bCount, stats.cCount, stats.bcCount);
    if (a) return vennLayout(stats.aCount, 0, 0);
    if (b) return vennLayout(stats.bCount, 0, 0);
    if (c) return vennLayout(stats.cCount, 0, 0);
    return null;
  }, [a, b, c, stats]);

  const searchQ = a && b && c
    ? vennSearchQuery(a.id, b.id, c.id)
    : a && b
      ? vennSearchQuery(a.id, b.id)
      : a && c
        ? vennSearchQuery(a.id, undefined, c.id)
        : b && c
          ? vennSearchQuery(undefined, b.id, c.id)
          : a
            ? vennSearchQuery(a.id)
            : b
              ? vennSearchQuery(b.id)
              : c
                ? vennSearchQuery(c.id)
                : null;
  const selectedAttrs = [a, b, c].filter((row): row is VennAttribute => Boolean(row));
  const canSearch = Boolean(searchQ) && selectedAttrs.length > 0 && selectedAttrs.every((row) => Boolean(row.rule));

  const overlapCount = three
    ? (stats?.abcCount ?? 0)
    : a && b
      ? (stats?.abCount ?? 0)
      : a && c
        ? (stats?.acCount ?? 0)
        : b && c
          ? (stats?.bcCount ?? 0)
          : 0;
  const overlapPct = stats && stats.total ? (100 * overlapCount) / stats.total : 0;
  const overlapVillages = stats?.bothVillages.slice(0, OVERLAP_CHIPS) ?? [];
  const overlapMore = Math.max(0, overlapCount - overlapVillages.length);

  function setSlot(slot: Slot, id: string | undefined) {
    onChange({
      a: slot === "a" ? id : a?.id,
      b: slot === "b" ? id : b?.id,
      c: slot === "c" ? id : c?.id,
    });
  }

  function swap() {
    if (!a && !b) return;
    onChange({ a: b?.id, b: a?.id, c: c?.id });
  }

  function clearAll() {
    onChange({});
  }

  const suggestions = SUGGESTIONS.filter((pair) => {
    if (!vennAttribute(pair.a) || !vennAttribute(pair.b)) return false;
    if (pair.c && !vennAttribute(pair.c)) return false;
    return true;
  });

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Venn</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Attribute overlap</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Each circle is the share of villages in this atlas with that attribute. Two circles overlap by
          how many have both. A third circle is the three-way overlap. {vennTotal} communities.
        </p>
      </div>

      <div className={cn("mt-8 grid gap-3", showThird ? "md:grid-cols-3" : "sm:grid-cols-2")}>
        <AttributePicker
          slot="a"
          label="First attribute"
          accent="forest"
          selected={a}
          onPick={(id) => setSlot("a", id)}
        />
        <AttributePicker
          slot="b"
          label="Second attribute"
          accent="stay"
          selected={b}
          onPick={(id) => setSlot("b", id)}
        />
        {showThird ? (
          <AttributePicker
            slot="c"
            label="Third circle"
            hint="Add an attribute"
            accent="gold"
            selected={c}
            invite={!c}
            onPick={(id) => setSlot("c", id)}
          />
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        {a || b || c ? (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex min-h-11 items-center text-sm font-medium text-muted hover:text-fg"
          >
            Clear
          </button>
        ) : null}
        {a && b ? (
          <button
            type="button"
            onClick={swap}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted hover:text-fg"
          >
            <ArrowLeftRight className="size-4" aria-hidden />
            Swap
          </button>
        ) : null}
      </div>

      <div
        className="mt-6 overflow-hidden rounded-lg border border-border bg-surface shadow-border"
        data-venn-diagram
      >
        {!stats || !layout ? (
          <EmptyDiagram suggestions={suggestions} onPick={(pair) => onChange(pair)} />
        ) : (
          <VennSvg a={a} b={b} c={c} stats={stats} layout={layout} />
        )}
      </div>

      {stats && selectedCount > 0 ? (
        <Legend a={a} b={b} c={c} stats={stats} canSearch={canSearch} searchQ={searchQ} />
      ) : null}

      {selectedCount >= 2 && stats ? (
        <section className="mt-8" aria-labelledby="venn-overlap-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="venn-overlap-heading" className="font-display text-2xl text-fg">
                {three ? "Villages with all three" : "Villages with both"}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {overlapCount === 0
                  ? three
                    ? "None of the villages in this atlas have all three."
                    : "None of the villages in this atlas have both."
                  : three
                    ? `${overlapCount} of ${vennTotal} · ${formatVennPct(overlapPct)} of the atlas.`
                    : a && b && a.id === b.id
                      ? `${overlapCount} of ${vennTotal} · you picked the same attribute twice.`
                      : `${overlapCount} of ${vennTotal} · ${formatVennPct(overlapPct)} of the atlas.`}
              </p>
            </div>
            {canSearch && searchQ ? (
              <Button asChild variant="outline">
                <Link to="/search" search={{ q: searchQ }}>
                  Open in search
                </Link>
              </Button>
            ) : null}
          </div>
          {overlapVillages.length > 0 ? (
            <ul className="mt-4 grid min-w-0 gap-2 sm:grid-cols-2">
              {overlapVillages.map((village) => (
                <li key={village.slug} className="min-w-0">
                  <VillageChip village={village} compact wide />
                </li>
              ))}
            </ul>
          ) : null}
          {overlapMore > 0 && canSearch && searchQ ? (
            <p className="mt-3 text-sm text-muted">
              {overlapMore} more.{" "}
              <Link to="/search" search={{ q: searchQ }} className="font-medium text-forest hover:underline">
                Open the rest in search
              </Link>
              .
            </p>
          ) : overlapMore > 0 ? (
            <p className="mt-3 text-sm text-muted">{overlapMore} more in this overlap.</p>
          ) : null}
        </section>
      ) : selectedCount === 1 ? (
        <p className="mt-6 text-sm text-muted">Pick a second attribute to see the overlap.</p>
      ) : null}
    </div>
  );
}

function EmptyDiagram({
  suggestions,
  onPick,
}: {
  suggestions: { a: string; b: string; c?: string }[];
  onPick: (pair: { a: string; b: string; c?: string }) => void;
}) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center px-4 py-10 text-center sm:min-h-80">
      <Circle className="size-10 text-moss" aria-hidden />
      <p className="mt-3 max-w-md text-muted">
        Pick an attribute. The circle is that share of the atlas. A second circle overlaps by how
        many villages have both. A third circle is the three-way overlap.
      </p>
      {suggestions.length > 0 ? (
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {suggestions.map((pair) => {
            const left = vennAttribute(pair.a);
            const right = vennAttribute(pair.b);
            const third = pair.c ? vennAttribute(pair.c) : undefined;
            if (!left || !right) return null;
            if (pair.c && !third) return null;
            return (
              <li key={`${pair.a}-${pair.b}-${pair.c ?? ""}`}>
                <button
                  type="button"
                  data-venn-suggest={`${pair.a},${pair.b}${pair.c ? `,${pair.c}` : ""}`}
                  onClick={() => onPick({ a: pair.a, b: pair.b, c: pair.c })}
                  className="inline-flex min-h-11 items-center rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg hover:bg-panel"
                >
                  {left.label}
                  <span className="mx-1.5 text-subtle">∩</span>
                  {right.label}
                  {third ? (
                    <>
                      <span className="mx-1.5 text-subtle">∩</span>
                      {third.label}
                    </>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function Legend({
  a,
  b,
  c,
  stats,
  canSearch,
  searchQ,
}: {
  a?: VennAttribute;
  b?: VennAttribute;
  c?: VennAttribute;
  stats: NonNullable<ReturnType<typeof vennStats>>;
  canSearch: boolean;
  searchQ: string | null;
}) {
  const three = Boolean(a && b && c);
  const pairCount = [a, b, c].filter(Boolean).length;
  return (
    <div className="mt-4 rounded-md border border-border bg-panel px-4 py-3" data-venn-legend>
      <ul className="space-y-2 text-sm">
        {a ? (
          <StatRow slot="a" accent="forest" label={a.label} count={stats.aCount} pct={stats.pctA} />
        ) : null}
        {b ? (
          <StatRow slot="b" accent="stay" label={b.label} count={stats.bCount} pct={stats.pctB} />
        ) : null}
        {c ? (
          <StatRow slot="c" accent="gold" label={c.label} count={stats.cCount} pct={stats.pctC} />
        ) : null}
        {a && b && (!three || stats.abCount !== stats.abcCount) ? (
          <StatRow
            slot="ab"
            stacked={["forest", "stay"]}
            label={three ? `${a.label} ∩ ${b.label}` : "Both"}
            count={stats.abCount}
            pct={(100 * stats.abCount) / stats.total}
            overlap={!three}
          />
        ) : null}
        {three && a && c && stats.acCount !== stats.abcCount ? (
          <StatRow
            slot="ac"
            stacked={["forest", "gold"]}
            label={`${a.label} ∩ ${c.label}`}
            count={stats.acCount}
            pct={(100 * stats.acCount) / stats.total}
          />
        ) : null}
        {three && b && c && stats.bcCount !== stats.abcCount ? (
          <StatRow
            slot="bc"
            stacked={["stay", "gold"]}
            label={`${b.label} ∩ ${c.label}`}
            count={stats.bcCount}
            pct={(100 * stats.bcCount) / stats.total}
          />
        ) : null}
        {a && c && !b ? (
          <StatRow
            slot="ac"
            stacked={["forest", "gold"]}
            label="Both"
            count={stats.acCount}
            pct={(100 * stats.acCount) / stats.total}
            overlap
          />
        ) : null}
        {b && c && !a ? (
          <StatRow
            slot="bc"
            stacked={["stay", "gold"]}
            label="Both"
            count={stats.bcCount}
            pct={(100 * stats.bcCount) / stats.total}
            overlap
          />
        ) : null}
        {three ? (
          <StatRow
            slot="abc"
            stacked={["forest", "stay", "gold"]}
            label="All three"
            count={stats.abcCount}
            pct={stats.pctAbc}
            overlap
          />
        ) : null}
      </ul>
      {a && b && !three && stats.abCount > 0 && a.id !== b.id ? (
        <p className="mt-2 text-xs text-subtle">
          {formatVennPct(stats.shareOfA)} of {a.label.toLowerCase()} also have {b.label.toLowerCase()}.{" "}
          {formatVennPct(stats.shareOfB)} of {b.label.toLowerCase()} also have {a.label.toLowerCase()}.
        </p>
      ) : null}
      {a && b && c && stats.abcCount > 0 ? (
        <p className="mt-2 text-xs text-subtle">
          {formatVennPct(stats.shareOfA)} of {a.label.toLowerCase()}, {formatVennPct(stats.shareOfB)} of{" "}
          {b.label.toLowerCase()}, and {formatVennPct(stats.shareOfC)} of {c.label.toLowerCase()} have all
          three.
        </p>
      ) : null}
      {canSearch && searchQ && pairCount < 2 ? (
        <p className="mt-2 text-sm">
          <Link to="/search" search={{ q: searchQ }} className="font-medium text-forest hover:underline">
            Open in search
          </Link>
        </p>
      ) : null}
    </div>
  );
}

function StatRow({
  slot,
  accent,
  stacked,
  label,
  count,
  pct,
  overlap,
}: {
  slot: string;
  accent?: Accent;
  stacked?: Accent[];
  label: string;
  count: number;
  pct: number;
  overlap?: boolean;
}) {
  const dots = stacked ?? (accent ? [accent] : []);
  return (
    <li className="flex items-baseline justify-between gap-3" data-venn-stat={slot}>
      <span className="flex min-w-0 items-center gap-2">
        <span
          className={cn("relative inline-block shrink-0", dots.length > 2 ? "h-3 w-5" : dots.length > 1 ? "h-3 w-4" : "size-2.5")}
          aria-hidden
        >
          {dots.length <= 1 ? (
            <span className={cn("block size-2.5 rounded-full", accent ? ACCENT[accent].dot : "bg-fg")} />
          ) : (
            dots.map((tone, i) => (
              <span
                key={tone}
                className={cn(
                  "absolute top-0 size-2.5 rounded-full",
                  ACCENT[tone].dot,
                  i === 0 ? "left-0" : i === dots.length - 1 ? "right-0" : "left-1.5",
                )}
              />
            ))
          )}
        </span>
        <span className="truncate font-medium text-fg">{label}</span>
      </span>
      <span className="shrink-0 tabular-nums text-muted" data-venn-overlap={overlap ? true : undefined}>
        {count} of {vennTotal} · {formatVennPct(pct)}
      </span>
    </li>
  );
}

type Painted = {
  slot: Slot;
  attr: VennAttribute;
  circle: VennLayout["a"];
  label: { x: number; y: number };
  pct: number;
  shape: string;
  fill: string;
};

function paintedCircles(
  a: VennAttribute | undefined,
  b: VennAttribute | undefined,
  c: VennAttribute | undefined,
  stats: NonNullable<ReturnType<typeof vennStats>>,
  layout: VennLayout,
): Painted[] {
  const make = (slot: Slot, attr: VennAttribute, circle: VennLayout["a"], label: { x: number; y: number }, pct: number): Painted => ({
    slot,
    attr,
    circle,
    label,
    pct,
    shape: ACCENT[SLOT_ACCENT[slot]].shape,
    fill: ACCENT[SLOT_ACCENT[slot]].fill,
  });
  if (a && b && c && layout.b && layout.c && layout.bLabel && layout.cLabel) {
    return [
      make("a", a, layout.a, layout.aLabel, stats.pctA),
      make("b", b, layout.b, layout.bLabel, stats.pctB),
      make("c", c, layout.c, layout.cLabel, stats.pctC),
    ];
  }
  const selected: Array<{ slot: Slot; attr: VennAttribute; pct: number }> = [];
  if (a) selected.push({ slot: "a", attr: a, pct: stats.pctA });
  if (b) selected.push({ slot: "b", attr: b, pct: stats.pctB });
  if (c) selected.push({ slot: "c", attr: c, pct: stats.pctC });
  if (selected.length === 0) return [];
  if (selected.length === 1 || !layout.b || !layout.bLabel) {
    return [make(selected[0].slot, selected[0].attr, layout.a, layout.aLabel, selected[0].pct)];
  }
  return [
    make(selected[0].slot, selected[0].attr, layout.a, layout.aLabel, selected[0].pct),
    make(selected[1].slot, selected[1].attr, layout.b, layout.bLabel, selected[1].pct),
  ];
}

function VennSvg({
  a,
  b,
  c,
  stats,
  layout,
}: {
  a?: VennAttribute;
  b?: VennAttribute;
  c?: VennAttribute;
  stats: NonNullable<ReturnType<typeof vennStats>>;
  layout: VennLayout;
}) {
  const paints = paintedCircles(a, b, c, stats, layout);
  const three = paints.length === 3;
  const two = paints.length === 2;
  const pairBoth = two
    ? a && b
      ? stats.abCount
      : a && c
        ? stats.acCount
        : stats.bcCount
    : 0;
  const pairPct = two && stats.total ? (100 * pairBoth) / stats.total : 0;
  const leftOnly = two
    ? a && b
      ? stats.onlyA
      : a && c
        ? stats.onlyA
        : stats.onlyB
    : 0;
  const rightOnly = two
    ? a && b
      ? stats.onlyB
      : a && c
        ? stats.onlyC
        : stats.onlyC
    : 0;
  const showBoth = two && leftOnly > 0 && rightOnly > 0 && pairBoth > 0 && layout.bothLabel;
  const smallest = three ? Math.min(stats.aCount, stats.bCount, stats.cCount) : 0;
  const nestedTriple = three && stats.abcCount > 0 && stats.abcCount === smallest;
  const showAbc = three && stats.abcCount > 0 && layout.abcLabel && !nestedTriple;

  const caption = three
    ? `${a?.label} is ${formatVennPct(stats.pctA)} of the atlas. ${b?.label} is ${formatVennPct(stats.pctB)}. ${c?.label} is ${formatVennPct(stats.pctC)}. All three: ${formatVennPct(stats.pctAbc)}.`
    : two
      ? `${paints[0].attr.label} is ${formatVennPct(paints[0].pct)} of the atlas. ${paints[1].attr.label} is ${formatVennPct(paints[1].pct)}. Both: ${formatVennPct(pairPct)}.`
      : paints[0]
        ? `${paints[0].attr.label} is ${formatVennPct(paints[0].pct)} of the atlas.`
        : "Attribute overlap";

  return (
    <svg
      viewBox={`0 0 ${layout.viewW} ${layout.viewH}`}
      className="h-auto w-full"
      role="img"
      aria-label={caption}
      data-venn-svg
      data-venn-triple={three ? true : undefined}
    >
      <title>{caption}</title>
      {paints.map((row) => (
        <circle
          key={row.slot}
          className={cn("venn-shape", row.shape)}
          cx={row.circle.cx}
          cy={row.circle.cy}
          r={row.circle.r}
          data-venn-circle={row.slot}
        />
      ))}
      {paints.map((row) => {
        const font = Math.max(14, Math.min(three ? 24 : 34, row.circle.r * 0.36));
        return (
          <text
            key={`${row.slot}-label`}
            className={cn("venn-label font-display tabular-nums", row.fill)}
            x={row.label.x}
            y={row.label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={font}
            data-venn-label={row.slot}
          >
            {formatVennPct(row.pct)}
          </text>
        );
      })}
      {showBoth && layout.bothLabel ? (
        <text
          className="venn-label fill-fg font-display tabular-nums"
          x={layout.bothLabel.x}
          y={layout.bothLabel.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={Math.max(14, Math.min(28, Math.min(paints[0].circle.r, paints[1].circle.r) * 0.28))}
          data-venn-label="both"
        >
          {formatVennPct(pairPct)}
        </text>
      ) : null}
      {showAbc && layout.abcLabel ? (
        <text
          className="venn-label fill-fg font-display tabular-nums"
          x={layout.abcLabel.x}
          y={layout.abcLabel.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={Math.max(13, Math.min(22, Math.min(...paints.map((row) => row.circle.r)) * 0.24))}
          data-venn-label="abc"
        >
          {formatVennPct(stats.pctAbc)}
        </text>
      ) : null}
    </svg>
  );
}

function AttributePicker({
  slot,
  label,
  hint,
  accent,
  selected,
  invite,
  onPick,
}: {
  slot: Slot;
  label: string;
  hint?: string;
  accent: Accent;
  selected?: VennAttribute;
  invite?: boolean;
  onPick: (id: string | undefined) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = `venn-options-${slot}`;
  const tone = ACCENT[accent];

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    function onDoc(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const groups = useMemo(() => groupedAttributes(query), [query]);

  return (
    <div ref={rootRef} className="relative" data-venn-picker={slot}>
      <div
        className={cn(
          "flex items-stretch gap-1 rounded-md border bg-surface shadow-border",
          invite ? "border-dashed border-gold/60" : "border-border",
        )}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          aria-haspopup="listbox"
          data-venn-slot={slot}
          data-venn-add-third={invite ? true : undefined}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-md px-3 py-2 text-left hover:bg-panel focus-visible:outline-none focus-visible:ring-2",
            tone.ring,
          )}
        >
          {invite ? (
            <Plus className="size-4 shrink-0 text-gold-deep" aria-hidden />
          ) : (
            <span className={cn("size-3 shrink-0 rounded-full", tone.dot)} aria-hidden />
          )}
          <span className="min-w-0 flex-1">
            {selected ? (
              <>
                <span className="block truncate font-medium text-fg">{selected.label}</span>
                <span className="mt-0.5 block text-xs tabular-nums text-muted">
                  {selected.count} of {vennTotal} · {formatVennPct(selected.pct)}
                </span>
              </>
            ) : (
              <>
                <span className="block font-medium text-fg">{label}</span>
                <span className="mt-0.5 block text-xs text-muted">{hint ?? "Pick from the atlas"}</span>
              </>
            )}
          </span>
        </button>
        {selected ? (
          <button
            type="button"
            aria-label={`Clear ${label.toLowerCase()}`}
            data-venn-clear={slot}
            onClick={() => {
              onPick(undefined);
              setOpen(false);
            }}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-panel hover:text-fg"
          >
            <X className="size-4" aria-hidden />
          </button>
        ) : null}
      </div>

      {open ? (
        <div
          id={listId}
          className="venn-picker-panel absolute z-20 mt-1 w-full overflow-hidden rounded-md border border-border bg-surface shadow-border-hover"
        >
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search className="size-4 shrink-0 text-subtle" aria-hidden />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter attributes"
              className="h-11 w-full bg-transparent text-sm text-fg placeholder:text-subtle focus-visible:outline-none"
            />
          </div>
          <ul role="listbox" aria-label={label} className="max-h-72 overflow-y-auto py-1">
            {groups.length === 0 ? (
              <li className="px-3 py-3 text-sm text-muted">No attribute matches that.</li>
            ) : (
              groups.map((group) => (
                <li key={group.section}>
                  <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase tracking-[0.16em] text-moss">
                    {group.section}
                  </p>
                  <ul>
                    {group.items.map((row) => {
                      const active = selected?.id === row.id;
                      return (
                        <li key={row.id}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={active}
                            data-venn-option={row.id}
                            onClick={() => {
                              onPick(row.id);
                              setOpen(false);
                            }}
                            className={cn(
                              "flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left hover:bg-panel",
                              active && "bg-panel",
                            )}
                          >
                            <span className="min-w-0">
                              <span className="block truncate font-medium text-fg">{row.label}</span>
                              {row.hint ? (
                                <span className="mt-0.5 block truncate text-xs text-subtle">{row.hint}</span>
                              ) : null}
                            </span>
                            <span className="shrink-0 tabular-nums text-xs text-muted">
                              {formatVennPct(row.pct)}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function groupedAttributes(filter: string) {
  const q = filter.trim().toLowerCase();
  const rows = q
    ? vennAttributes.filter((row) =>
        [row.label, row.section, row.hint ?? ""].join(" ").toLowerCase().includes(q),
      )
    : vennAttributes;
  return vennSections
    .map((section) => ({
      section,
      items: rows.filter((row) => row.section === section),
    }))
    .filter((group) => group.items.length > 0);
}
