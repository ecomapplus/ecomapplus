import { cn } from "@/lib/utils";

const sizeClass = {
  page: "px-5 py-2.5 font-display text-2xl uppercase tracking-[0.16em] sm:text-3xl",
  card: "px-2.5 py-1 font-display text-sm uppercase tracking-[0.16em]",
  compact: "px-2 py-0.5 font-display text-xs uppercase tracking-[0.16em]",
} as const;

export function StatusBadge({
  active,
  size = "card",
  className = "",
}: {
  active: boolean;
  size?: "page" | "card" | "compact";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-semibold text-cream shadow-border",
        sizeClass[size],
        active ? "bg-active" : "bg-danger",
        className,
      )}
      role="status"
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}

export function InactivePhotoWash({ active }: { active: boolean }) {
  if (active) return null;
  return <div className="pointer-events-none absolute inset-0 z-[5] bg-danger/35" />;
}

export function InactiveBadge({
  size = "card",
  className = "",
}: {
  size?: "page" | "card" | "compact";
  className?: string;
}) {
  return <StatusBadge active={false} size={size} className={className} />;
}
