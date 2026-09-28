import { Locate, MapPin, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  DEFAULT_RADIUS,
  geocodePlaces,
  localPlaceHits,
  mergePlaceHits,
  radiusPresets,
  reverseGeocode,
  type DistanceUnit,
  type NearFilter,
  type PlaceHit,
} from "@/data/geo";

export function RadiusSearch({
  value,
  onChange,
  idPrefix,
  compact = false,
  hint,
}: {
  value: NearFilter | null;
  onChange: (next: NearFilter | null) => void;
  idPrefix: string;
  compact?: boolean;
  hint?: string;
}) {
  const listId = useId();
  const [draft, setDraft] = useState("");
  const [radius, setRadius] = useState(value?.radius ?? DEFAULT_RADIUS);
  const [unit, setUnit] = useState<DistanceUnit>(value?.unit ?? "mi");
  const [remote, setRemote] = useState<PlaceHit[]>([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "geocoding" | "locating" | "error">("idle");
  const [message, setMessage] = useState("");
  const abortRef = useRef<AbortController | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value) return;
    setRadius(value.radius);
    setUnit(value.unit);
  }, [value?.radius, value?.unit, value?.label]);

  const local = useMemo(() => localPlaceHits(draft, 8), [draft]);
  const suggestions = useMemo(() => mergePlaceHits(local, remote, 8), [local, remote]);

  useEffect(() => {
    abortRef.current?.abort();
    const q = draft.trim();
    if (q.length < 3) {
      setRemote([]);
      setStatus((s) => (s === "geocoding" ? "idle" : s));
      return;
    }
    const handle = window.setTimeout(() => {
      const ac = new AbortController();
      abortRef.current = ac;
      setStatus("geocoding");
      geocodePlaces(q, ac.signal)
        .then((hits) => {
          if (ac.signal.aborted) return;
          setRemote(hits);
          setStatus("idle");
        })
        .catch(() => {
          if (ac.signal.aborted) return;
          setRemote([]);
          setStatus("idle");
        });
    }, 320);
    return () => window.clearTimeout(handle);
  }, [draft]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function applyPlace(hit: PlaceHit, nextRadius = radius, nextUnit = unit) {
    const n = clampRadius(nextRadius);
    onChange({
      label: hit.label,
      lat: hit.lat,
      lng: hit.lng,
      radius: n,
      unit: nextUnit,
    });
    setDraft("");
    setRemote([]);
    setOpen(false);
    setStatus("idle");
    setMessage("");
  }

  function commitTyped() {
    const q = draft.trim();
    if (!q) return;
    if (suggestions[0]) {
      applyPlace(suggestions[0]);
      return;
    }
    setStatus("geocoding");
    geocodePlaces(q)
      .then((hits) => {
        if (hits[0]) applyPlace(hits[0]);
        else {
          setStatus("error");
          setMessage("No match for that place. Try a city, or a village in the atlas.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Could not look that place up. Try a village name from the atlas.");
      });
  }

  function patchRadius(next: number) {
    const n = clampRadius(next);
    setRadius(n);
    if (value) onChange({ ...value, radius: n });
  }

  function patchUnit(next: DistanceUnit) {
    setUnit(next);
    if (value) onChange({ ...value, unit: next });
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setStatus("error");
      setMessage("This browser will not share a location.");
      return;
    }
    setStatus("locating");
    setMessage("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        reverseGeocode(lat, lng)
          .then((label) => {
            applyPlace({
              label: label ?? "Your location",
              lat,
              lng,
              kind: "geocode",
            });
          })
          .catch(() => {
            applyPlace({ label: "Your location", lat, lng, kind: "geocode" });
          });
      },
      () => {
        setStatus("error");
        setMessage("Location was blocked or unavailable. Type a city instead.");
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 },
    );
  }

  const showList = open && suggestions.length > 0 && draft.trim().length > 0;

  return (
    <div ref={wrapRef}>
      {!compact ? (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-medium text-fg">Near</h2>
            <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs text-muted">any place, any radius</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            {hint ??
              "Type a city, a village in the atlas, or use your location. You can also tap the map above."}
          </p>
        </>
      ) : (
        <>
          <p className="text-xs font-medium text-fg">Near</p>
          {hint ? <p className="mt-1 text-xs text-subtle">{hint}</p> : null}
        </>
      )}

      {value ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex min-h-9 items-center gap-1 rounded-full bg-forest/10 px-3 text-sm text-forest-deep">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {value.label}
            <button
              type="button"
              onClick={() => {
                onChange(null);
                setDraft("");
                setMessage("");
              }}
              className="inline-flex size-7 items-center justify-center rounded-full hover:bg-forest/20"
              aria-label="Clear place"
            >
              <X className="size-3.5" aria-hidden />
            </button>
          </span>
        </div>
      ) : null}

      <div className="relative mt-3">
        <label htmlFor={`${idPrefix}-near-place`} className="sr-only">
          Place
        </label>
        <input
          id={`${idPrefix}-near-place`}
          value={draft}
          autoComplete="off"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          placeholder={value ? "Another city or village" : "Santa Barbara, Findhorn, Auroville…"}
          onChange={(e) => {
            setDraft(e.target.value);
            setOpen(true);
            setMessage("");
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commitTyped();
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
        {showList ? (
          <ul
            id={listId}
            role="listbox"
            className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-md border border-border bg-surface py-1 shadow-border"
          >
            {suggestions.map((hit) => (
              <li key={`${hit.kind}-${hit.label}-${hit.lat}`}>
                <button
                  type="button"
                  role="option"
                  onClick={() => applyPlace(hit)}
                  className="flex min-h-11 w-full items-start gap-2 px-3 py-2 text-left text-sm hover:bg-panel"
                >
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-moss" aria-hidden />
                  <span>
                    <span className="block text-fg">{hit.label}</span>
                    <span className="block text-xs text-subtle">{kindLabel(hit.kind)}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-2">
        <label htmlFor={`${idPrefix}-near-radius`} className="flex min-w-[7rem] flex-col gap-1.5 text-sm">
          <span className="font-medium text-fg">Radius</span>
          <input
            id={`${idPrefix}-near-radius`}
            type="number"
            min={1}
            max={12500}
            step={1}
            value={Number.isFinite(radius) ? radius : ""}
            onChange={(e) => patchRadius(Number(e.target.value))}
            className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
        <div className="flex h-11 items-center gap-1 rounded-md border border-border bg-bg p-1">
          <UnitChip active={unit === "mi"} onClick={() => patchUnit("mi")}>
            Miles
          </UnitChip>
          <UnitChip active={unit === "km"} onClick={() => patchUnit("km")}>
            Km
          </UnitChip>
        </div>
        <button
          type="button"
          onClick={useMyLocation}
          className="inline-flex h-11 items-center gap-1.5 rounded-md bg-panel px-3 text-sm text-fg hover:bg-border"
        >
          <Locate className="size-4" aria-hidden />
          {status === "locating" ? "Finding…" : "Use my location"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {radiusPresets.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => patchRadius(n)}
            className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
              radius === n ? "bg-forest text-cream" : "bg-panel text-fg hover:bg-border"
            }`}
          >
            {n} {unit}
          </button>
        ))}
      </div>

      {status === "geocoding" && !value ? (
        <p className="mt-2 text-xs text-subtle">Looking up places…</p>
      ) : null}
      {message ? <p className="mt-2 text-sm text-muted">{message}</p> : null}
    </div>
  );
}

function clampRadius(n: number) {
  if (!Number.isFinite(n)) return DEFAULT_RADIUS;
  return Math.min(12500, Math.max(1, Math.round(n)));
}

function kindLabel(kind: PlaceHit["kind"]) {
  switch (kind) {
    case "village":
      return "Village in the atlas";
    case "town":
      return "Town from the atlas";
    case "country":
      return "Country in the atlas";
    default:
      return "Place";
  }
}

function UnitChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-9 min-w-11 items-center justify-center rounded-sm px-3 text-sm ${
        active ? "bg-forest text-cream" : "text-muted hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}
