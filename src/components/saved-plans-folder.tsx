import { Link } from "@tanstack/react-router";
import { ChevronDown, Folder, FolderOpen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { formatHours, formatPlanDistance, type TravelPlan } from "@/data/travel-plan";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
  emitSavedPlansChanged,
  SAVED_PLANS_CHANGED,
  type SavedPlanCard,
} from "@/lib/saved-plans";
import {
  deleteSavedTravelPlan,
  getSavedTravelPlan,
  listSavedTravelPlans,
} from "@/lib/saved-plans-api";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

const OPEN_KEY = "vc-saved-plans-open";

function readOpenMemory() {
  try {
    return window.sessionStorage.getItem(OPEN_KEY) === "1";
  } catch {
    return false;
  }
}

function writeOpenMemory(value: boolean) {
  try {
    window.sessionStorage.setItem(OPEN_KEY, value ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function SavedPlansFolder({
  onOpen,
}: {
  onOpen: (plan: TravelPlan, title: string) => void;
}) {
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState<SavedPlanCard[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [highlightId, setHighlightId] = useState<number | null>(null);

  useEffect(() => {
    if (readOpenMemory()) setOpen(true);
  }, []);

  function setFolderOpen(value: boolean) {
    setOpen(value);
    writeOpenMemory(value);
  }

  useEffect(() => {
    if (!mounted || isPending || !user) {
      setPlans(null);
      return;
    }
    function load() {
      listSavedTravelPlans()
        .then((rows) => {
          setPlans(rows);
          setError(null);
        })
        .catch((err) => {
          if (isUnauthorized(err)) setPlans([]);
          else setError("Could not load saved plans.");
        });
    }
    function onChange(event: Event) {
      const detail = (event as CustomEvent<{ id?: number; action?: "save" | "delete" }>).detail;
      if (detail?.action === "save") {
        setFolderOpen(true);
        if (detail.id) setHighlightId(detail.id);
        document.getElementById("saved-plans")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      load();
    }
    window.addEventListener(SAVED_PLANS_CHANGED, onChange);
    if (open) load();
    return () => window.removeEventListener(SAVED_PLANS_CHANGED, onChange);
  }, [mounted, isPending, user?.id, open]);

  async function openPlan(id: number) {
    if (busyId != null) return;
    setBusyId(id);
    setError(null);
    try {
      const row = await getSavedTravelPlan({ data: id });
      onOpen(row.plan, row.title);
      setFolderOpen(false);
    } catch (err) {
      if (isUnauthorized(err)) setError("Sign in to open saved plans.");
      else setError(err instanceof Error ? err.message : "Could not open that plan.");
    } finally {
      setBusyId(null);
    }
  }

  async function removePlan(id: number) {
    if (busyId != null) return;
    setBusyId(id);
    setError(null);
    try {
      await deleteSavedTravelPlan({ data: id });
      setPlans((rows) => (rows ?? []).filter((row) => row.id !== id));
      emitSavedPlansChanged({ id, action: "delete" });
    } catch (err) {
      if (isUnauthorized(err)) setError("Sign in to change saved plans.");
      else setError(err instanceof Error ? err.message : "Could not remove that plan.");
    } finally {
      setBusyId(null);
    }
  }

  const count = plans?.length ?? 0;
  const ready = mounted && !isPending;

  return (
    <section
      id="saved-plans"
      data-saved-plans-folder
      data-open={open ? "true" : "false"}
      data-saved-count={plans == null ? "" : String(plans.length)}
      className="scroll-mt-28 rounded-lg border border-border bg-surface shadow-border"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="saved-plans-list"
        onClick={() => setFolderOpen(!open)}
        className="flex min-h-11 w-full items-center gap-2.5 px-3 py-2 text-left"
      >
        {open ? (
          <FolderOpen className="size-4 shrink-0 text-forest" aria-hidden />
        ) : (
          <Folder className="size-4 shrink-0 text-forest" aria-hidden />
        )}
        <span className="min-w-0 flex-1 font-display text-lg leading-tight text-fg">Saved plans</span>
        {ready && user && plans != null ? (
          <span className="shrink-0 rounded-full bg-panel px-2 py-0.5 text-xs font-medium tabular-nums text-muted">
            {count}
          </span>
        ) : null}
        <ChevronDown
          className={`size-4 shrink-0 text-muted transition-transform duration-150 ease-out ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div id="saved-plans-list" className="saved-plans-panel border-t border-border px-2 py-2">
          {!ready ? (
            <div className="space-y-2 px-1 py-1">
              <div className="h-14 animate-pulse rounded-md bg-panel" />
              <div className="h-14 animate-pulse rounded-md bg-panel" />
            </div>
          ) : !user ? (
            <p className="px-2 py-3 text-sm text-muted">
              <Link
                to="/login"
                search={{ redirect: "/travel-plan", reason: "plan" }}
                className="font-medium text-forest hover:underline"
              >
                Sign in
              </Link>{" "}
              to save travel plans. They live in this folder.
            </p>
          ) : error ? (
            <p className="px-2 py-3 text-sm text-forest-deep">{error}</p>
          ) : plans == null ? (
            <div className="space-y-2 px-1 py-1">
              <div className="h-14 animate-pulse rounded-md bg-panel" />
            </div>
          ) : plans.length === 0 ? (
            <p className="px-2 py-3 text-sm text-muted">
              Nothing in this folder yet. Build a route, then tap Save this plan.
            </p>
          ) : (
            <ul className="max-h-72 space-y-1 overflow-auto">
              {plans.map((row) => (
                <li key={row.id}>
                  <SavedPlanRow
                    plan={row}
                    busy={busyId === row.id}
                    highlight={highlightId === row.id}
                    onOpen={() => void openPlan(row.id)}
                    onRemove={() => void removePlan(row.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </section>
  );
}

function SavedPlanRow({
  plan,
  busy,
  highlight,
  onOpen,
  onRemove,
}: {
  plan: SavedPlanCard;
  busy: boolean;
  highlight: boolean;
  onOpen: () => void;
  onRemove: () => void;
}) {
  return (
    <div
      data-saved-plan={plan.id}
      data-saved-plan-title={plan.title}
      className={`flex items-center gap-1 rounded-md ${highlight ? "bg-forest/10" : "hover:bg-panel"}`}
    >
      <button
        type="button"
        disabled={busy}
        onClick={onOpen}
        className="flex min-h-14 min-w-0 flex-1 items-center gap-2.5 px-2 py-1.5 text-left"
      >
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-fg">{plan.title}</span>
          <span className="mt-0.5 block truncate text-xs text-muted">
            {plan.roundTrip ? "Loop · " : null}
            {plan.villageCount} stop{plan.villageCount === 1 ? "" : "s"} · {formatPlanDistance(plan.totalKm)} ·{" "}
            {formatHours(plan.totalHours)}
          </span>
        </span>
      </button>
      <button
        type="button"
        disabled={busy}
        onClick={onRemove}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-fg"
        aria-label={`Remove ${plan.title}`}
      >
        <X className="size-4" aria-hidden />
      </button>
    </div>
  );
}
