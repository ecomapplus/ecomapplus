import { useEffect, useRef, useState } from "react";
import { searchVillages, type VillageRef } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";

export function VillagePicker({
  onPick,
  onClose,
  heading = "Link a village",
  excludeSlugs,
  placeholder = "Search by name or place",
  requireCoords = false,
}: {
  onPick: (village: VillageRef) => void;
  onClose: () => void;
  heading?: string;
  excludeSlugs?: Iterable<string>;
  placeholder?: string;
  requireCoords?: boolean;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const skip = new Set(excludeSlugs);
  const results = searchVillages(query, 24)
    .filter((village) => !skip.has(village.slug) && (!requireCoords || Boolean(coordsFor(village.slug))))
    .slice(0, 8);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="border-t border-border bg-panel px-3 py-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">{heading}</p>
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 px-2 text-sm font-medium text-muted hover:text-fg"
        >
          Close
        </button>
      </div>
      <input
        ref={inputRef}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
      />
      <ul className="mt-2 max-h-56 overflow-y-auto">
        {results.length === 0 ? (
          <li className="px-1 py-3 text-sm text-muted">
            {skip.size > 0 && !query.trim()
              ? "Every match is already on the route. Type another name."
              : "No village matches that."}
          </li>
        ) : (
          results.map((village) => (
            <li key={village.slug}>
              <button
                type="button"
                onClick={() => onPick(village)}
                className="flex min-h-11 w-full flex-col items-start justify-center rounded-md px-2 py-2 text-left hover:bg-surface"
              >
                <span className="font-medium text-fg">{village.name}</span>
                <span className="text-xs text-muted">{village.location}</span>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
