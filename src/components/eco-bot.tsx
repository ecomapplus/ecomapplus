import { Link } from "@tanstack/react-router";
import { Bot, MapPin, Send } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { LockedDetailsLink } from "@/components/locked-details";
import { Button } from "@/components/ui/button";
import {
  EVENT_TOUR_COUNTRIES,
  planEventTour,
  suggestPlaces,
  type EventTour,
  type TourOrigin,
} from "@/data/event-tour";
import { geocodePlaces, type PlaceHit } from "@/data/geo";
import { askEcoBot, type EcoBotHints, type EcoBotMessage } from "@/lib/eco-bot";
import { rememberPlusNext, usePlusAccess } from "@/lib/plus-membership";
import { cn } from "@/lib/utils";

type ThreadItem = {
  id: string;
  role: "user" | "assistant";
  content: string;
  tour?: EventTour | null;
};

const STARTERS = [
  "Plan a 10-day trip with as many events as possible and the fewest miles.",
  "What’s on in Europe in October?",
  "Compare Findhorn and Tamera for a first visit.",
];

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function hintsFrom(
  origin: TourOrigin | null,
  originQuery: string,
  maxDays: number,
  country: string,
): EcoBotHints {
  return {
    originLabel: origin?.label || originQuery.trim() || undefined,
    originLat: origin?.lat,
    originLng: origin?.lng,
    maxDays,
    country: country !== "all" ? country : undefined,
  };
}

export function EcoBotPanel() {
  const plus = usePlusAccess();
  if (!plus) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Eco-community bot</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-fg">
          Ask the atlas. Pack the events.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Plus members get a bot that reads every village page and dated event on the site, then
          builds a short tour that hits many gatherings while travelling the fewest miles.
        </p>
        <LockedDetailsLink next="/bot" compact={false} className="mt-8" />
      </main>
    );
  }
  return <EcoBotLive />;
}

function EcoBotLive() {
  const [originQuery, setOriginQuery] = useState("");
  const [origin, setOrigin] = useState<TourOrigin | null>(null);
  const [hits, setHits] = useState<PlaceHit[]>([]);
  const [maxDays, setMaxDays] = useState(10);
  const [country, setCountry] = useState("all");
  const [planning, setPlanning] = useState(false);
  const [planError, setPlanError] = useState("");
  const [tour, setTour] = useState<EventTour | null>(null);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [thread, setThread] = useState<ThreadItem[]>([
    {
      id: "hello",
      role: "assistant",
      content:
        "I read the atlas — villages, visit doors, and dated events. Set a start and a window, then plan a tour, or ask anything about the eco-communities on this site.",
    },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const abortHits = useRef<AbortController | null>(null);

  useEffect(() => {
    rememberPlusNext("/bot");
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [thread, busy]);

  useEffect(() => {
    const q = originQuery.trim();
    if (q.length < 2) {
      setHits([]);
      return;
    }
    if (origin && origin.label === q) {
      setHits([]);
      return;
    }
    setHits(suggestPlaces(q));
    abortHits.current?.abort();
    const ac = new AbortController();
    abortHits.current = ac;
    const t = window.setTimeout(() => {
      geocodePlaces(q, ac.signal)
        .then((rows) => {
          if (ac.signal.aborted) return;
          setHits((prev) => {
            const seen = new Set(prev.map((h) => h.label.toLowerCase()));
            const extra = rows.filter((row) => !seen.has(row.label.toLowerCase()));
            return [...prev, ...extra].slice(0, 6);
          });
        })
        .catch(() => {
          /* keep local hits */
        });
    }, 280);
    return () => {
      window.clearTimeout(t);
      ac.abort();
    };
  }, [originQuery, origin]);

  const hints = useMemo(
    () => hintsFrom(origin, originQuery, maxDays, country),
    [origin, originQuery, maxDays, country],
  );

  async function runPlanner() {
    setPlanError("");
    setPlanning(true);
    try {
      const next = await planEventTour({
        origin,
        originQuery: origin?.label || originQuery,
        maxDays,
        country: country === "all" ? undefined : country,
      });
      if (!next) {
        setPlanError("No dated events fit that window. Try more days, or clear the country filter.");
        setTour(null);
        return;
      }
      setTour(next);
    } catch {
      setPlanError("Could not build that tour.");
    } finally {
      setPlanning(false);
    }
  }

  async function send(text: string) {
    const message = text.replace(/\s+/g, " ").trim();
    if (!message || busy) return;
    setError("");
    setDraft("");
    const userItem: ThreadItem = { id: uid(), role: "user", content: message };
    const history: EcoBotMessage[] = [...thread, userItem]
      .filter((row) => row.id !== "hello")
      .slice(-8)
      .map((row) => ({ role: row.role, content: row.content }));
    setThread((rows) => [...rows, userItem]);
    setBusy(true);
    try {
      const result = await askEcoBot({
        data: { message, history: history.slice(0, -1), hints },
      });
      if (!result.ok && result.error) {
        setError(result.error);
        setThread((rows) => [
          ...rows,
          { id: uid(), role: "assistant", content: result.error || "Could not answer." },
        ]);
        return;
      }
      if (result.tour) setTour(result.tour);
      setThread((rows) => [
        ...rows,
        { id: uid(), role: "assistant", content: result.text, tour: result.tour },
      ]);
    } catch {
      setError("The bot did not answer. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10">
      <header>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Eco-community bot</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-fg sm:text-5xl">
          Many events, fewest miles
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          A Plus bot that reads the atlas. Give it a start and a window; it packs dated gatherings
          into a short, low-mileage tour.
        </p>
      </header>

      <section className="mt-8 rounded-lg bg-surface p-4 shadow-border sm:p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Event tour</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_7rem_10rem]">
          <label className="relative block">
            <span className="text-sm font-medium text-fg">Starting from</span>
            <input
              value={originQuery}
              onChange={(event) => {
                setOriginQuery(event.target.value);
                setOrigin(null);
              }}
              placeholder="City or nearest village"
              className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              autoComplete="off"
            />
            {hits.length > 0 ? (
              <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-md bg-surface shadow-border-hover">
                {hits.map((hit) => (
                  <li key={`${hit.kind}:${hit.label}:${hit.lat}`}>
                    <button
                      type="button"
                      className="flex min-h-11 w-full items-start px-3 py-2 text-left text-sm text-fg hover:bg-panel"
                      onClick={() => {
                        setOrigin({ label: hit.label, lat: hit.lat, lng: hit.lng });
                        setOriginQuery(hit.label);
                        setHits([]);
                      }}
                    >
                      <MapPin className="mt-0.5 size-4 shrink-0 text-moss" aria-hidden />
                      <span className="ml-2">{hit.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </label>
          <label className="block">
            <span className="text-sm font-medium text-fg">Days</span>
            <input
              type="number"
              min={3}
              max={28}
              value={maxDays}
              onChange={(event) => setMaxDays(Math.min(28, Math.max(3, Number(event.target.value) || 10)))}
              className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-fg">Country</span>
            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            >
              <option value="all">Anywhere</option>
              {EVENT_TOUR_COUNTRIES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button type="button" onClick={() => void runPlanner()} disabled={planning} className="sm:min-w-44">
            {planning ? "Packing events…" : "Plan a tour"}
          </Button>
          <p className="self-center text-sm text-muted">
            Most events, then the fewest miles. Confirm dates with each village.
          </p>
        </div>
        {planError ? <p className="mt-3 text-sm text-danger">{planError}</p> : null}
      </section>

      {tour ? (
        <div className="mt-6">
          <TourCard tour={tour} />
        </div>
      ) : null}

      <section className="mt-8 flex min-h-0 flex-1 flex-col">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Ask the atlas</p>
        <div
          ref={scroller}
          className="mt-4 flex max-h-[28rem] flex-col gap-4 overflow-y-auto rounded-lg bg-surface p-4 shadow-border sm:p-5"
        >
          {thread.map((item) => (
            <article key={item.id} className={cn("max-w-prose", item.role === "user" ? "ml-auto" : "")}>
              {item.role === "assistant" ? (
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-moss">
                  <Bot className="size-3.5" aria-hidden />
                  Bot
                </p>
              ) : (
                <p className="text-right text-xs font-medium uppercase tracking-[0.14em] text-subtle">You</p>
              )}
              <div
                className={cn(
                  "mt-1 whitespace-pre-wrap text-sm leading-relaxed",
                  item.role === "user"
                    ? "rounded-md bg-panel px-3 py-2 text-fg"
                    : "text-fg",
                )}
              >
                {item.content}
              </div>
              {item.tour ? (
                <div className="mt-3">
                  <TourCard tour={item.tour} compact />
                </div>
              ) : null}
            </article>
          ))}
          {busy ? (
            <p className="flex items-center gap-2 text-sm text-muted">
              <Bot className="size-4 text-moss" aria-hidden />
              Looking through the atlas…
            </p>
          ) : null}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {STARTERS.map((row) => (
            <button
              key={row}
              type="button"
              className="rounded-full bg-panel px-3 py-2 text-left text-sm text-fg shadow-border hover:bg-surface"
              onClick={() => void send(row)}
              disabled={busy}
            >
              {row}
            </button>
          ))}
        </div>

        <form
          className="mt-4 flex items-end gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            void send(draft);
          }}
        >
          <label className="block min-w-0 flex-1">
            <span className="sr-only">Message</span>
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void send(draft);
                }
              }}
              rows={2}
              placeholder="Ask about a village, or describe the trip you want"
              className="w-full resize-none rounded-md bg-surface px-3 py-2 text-sm text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
          </label>
          <Button type="submit" disabled={busy || !draft.trim()} aria-label="Send" className="h-11 w-11 shrink-0 px-0">
            <Send className="size-4" aria-hidden />
          </Button>
        </form>
        {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
      </section>
    </main>
  );
}

function TourCard({ tour, compact = false }: { tour: EventTour; compact?: boolean }) {
  return (
    <section className="rounded-lg bg-surface p-4 shadow-border sm:p-5">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">
        {tour.cluster}
      </p>
      <h2 className={cn("mt-1 font-display text-fg", compact ? "text-xl" : "text-2xl")}>
        {tour.eventCount} events, {tour.milesLabel}
      </h2>
      <p className="mt-1 text-sm text-muted">
        {tour.villageCount} eco-communities · {tour.days} days
        {tour.origin ? ` · from ${tour.origin.label}` : ""} · {tour.after} to {tour.before}
      </p>
      <ol className="mt-4 flex flex-col gap-3">
        {tour.stops.map((stop, index) => (
          <li key={`${stop.slug}:${stop.arrive}:${index}`} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <Link
                to="/communities/$slug"
                params={{ slug: stop.slug }}
                className="font-medium text-forest hover:underline"
              >
                {stop.name}
              </Link>
              <p className="text-xs text-subtle">
                {index === 0 && tour.origin
                  ? `${stop.milesFromPrev} miles from start`
                  : index === 0
                    ? "Start"
                    : `${stop.milesFromPrev} miles`}
              </p>
            </div>
            <p className="text-sm text-muted">{stop.place}</p>
            <ul className="mt-2 flex flex-col gap-1">
              {stop.events.map((event) => (
                <li key={`${event.title}:${event.start}`} className="text-sm text-fg">
                  <span className="text-moss">{event.when}</span>
                  {" · "}
                  <a href={event.url} target="_blank" rel="noreferrer" className="hover:underline">
                    {event.title}
                  </a>
                  <span className="text-subtle"> · {event.kindLabel}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
