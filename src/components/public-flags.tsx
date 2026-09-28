import { publicChipsFor, type PublicFlag } from "@/data/public-flags";
import { cn } from "@/lib/utils";

const tone: Record<PublicFlag, string> = {
  "work-stay": "bg-gold/20 text-ink",
  residency: "bg-residency/15 text-residency-deep",
  event: "bg-danger/10 text-danger-deep",
  overnight: "bg-stay/15 text-stay-deep",
};

export function PublicFlagChips({ slug }: { slug: string }) {
  const chips = publicChipsFor(slug);
  if (chips.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {chips.map((chip) => (
        <li
          key={chip.id}
          className={cn("inline-flex min-h-8 items-center rounded-full px-2.5 text-xs font-medium", tone[chip.flag])}
        >
          {chip.label}
        </li>
      ))}
    </ul>
  );
}
