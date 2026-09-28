import { List, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type PageMapItem = {
  id: string;
  label: string;
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join("|");
  useEffect(() => {
    if (ids.length === 0) return;
    function update() {
      const offset = 168;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 8) current = id;
      }
      setActive(current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, [key]);
  return active;
}

function SectionLink({
  item,
  active,
  onPick,
  className,
}: {
  item: PageMapItem;
  active: boolean;
  onPick?: () => void;
  className: string;
}) {
  return (
    <a
      href={`#${item.id}`}
      aria-current={active ? "location" : undefined}
      onClick={onPick}
      className={className}
    >
      {item.label}
    </a>
  );
}

export function VillagePageMap({ items }: { items: PageMapItem[] }) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (items.length === 0) return null;

  return (
    <>
      <nav
        aria-label="On this page"
        className="pointer-events-none fixed top-36 right-4 z-30 hidden w-48 xl:block"
      >
        <div className="pointer-events-auto max-h-[min(70vh,38rem)] overflow-y-auto rounded-lg border border-border bg-surface/95 p-3 shadow-border-hover backdrop-blur-sm">
          <p className="px-2 text-xs font-medium uppercase tracking-[0.16em] text-moss">On this page</p>
          <ul className="mt-2 space-y-0.5">
            {items.map((item) => (
              <li key={item.id}>
                <SectionLink
                  item={item}
                  active={active === item.id}
                  className={`flex min-h-11 items-center rounded-md px-2.5 text-sm ${
                    active === item.id ? "bg-forest text-cream" : "text-muted hover:bg-panel hover:text-fg"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-30 xl:hidden">
        {open ? (
          <nav
            id="village-page-map"
            aria-label="On this page"
            className="mb-2 max-h-[min(60vh,28rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-lg border border-border bg-surface/95 p-3 shadow-border-hover backdrop-blur-sm"
          >
            <p className="px-1 text-xs font-medium uppercase tracking-[0.16em] text-moss">On this page</p>
            <ul className="mt-2 flex flex-wrap gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <SectionLink
                    item={item}
                    active={active === item.id}
                    onPick={() => setOpen(false)}
                    className={`inline-flex min-h-11 items-center rounded-full px-3.5 text-sm ${
                      active === item.id ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="village-page-map"
          onClick={() => setOpen((next) => !next)}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-4 text-sm font-medium text-cream shadow-border-hover hover:bg-forest-deep"
        >
          {open ? <X className="size-4" aria-hidden /> : <List className="size-4" aria-hidden />}
          {open ? "Close map" : "On this page"}
        </button>
      </div>
    </>
  );
}
