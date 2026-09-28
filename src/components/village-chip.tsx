import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { type VillageRef } from "@/data/communities";
import { cn } from "@/lib/utils";

export function VillageChip({
  village,
  onRemove,
  compact = false,
  mine = false,
  wide = false,
}: {
  village: VillageRef;
  onRemove?: () => void;
  compact?: boolean;
  mine?: boolean;
  wide?: boolean;
}) {
  const inner = (
    <>
      <span className="min-w-0 flex-1">
        <span className={`block truncate font-medium ${mine && !compact ? "text-cream" : "text-fg"}`}>
          {village.name}
        </span>
        <span className={`mt-0.5 block truncate text-xs ${mine && !compact ? "text-cream/80" : "text-muted"}`}>
          {village.location}
        </span>
        {compact ? null : (
          <span className={`mt-0.5 block text-xs font-medium ${mine ? "text-cream" : "text-forest"}`}>
            Open village page
          </span>
        )}
      </span>
    </>
  );

  if (onRemove) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-border bg-panel px-2 py-2">
        {inner}
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-fg"
          aria-label="Remove village"
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <Link
      to="/communities/$slug"
      params={{ slug: village.slug }}
      className={cn(
        "inline-flex min-w-0 items-center gap-2 overflow-hidden rounded-md border px-2 py-2 text-left",
        wide ? "w-full max-w-full" : "mt-1 max-w-[90%]",
        mine ? "border-cream/20 bg-forest-deep" : "border-border bg-surface",
      )}
    >
      {inner}
    </Link>
  );
}
