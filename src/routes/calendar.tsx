import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { LockedDetailsCopy } from "@/components/locked-details";
import { getCommunity } from "@/data/communities";
import { formatEventWhen, upcomingEvents, type DatedEvent } from "@/data/events";
import { openStays, type OpenStayType } from "@/data/open-stays";
import { stayClass } from "@/data/stay-class";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { readHallCalendar, saveHallCalendar, type HallCalendarView } from "@/lib/hall-calendar";
import { startLivePoll } from "@/lib/live-poll";
import { usePlusAccess, isPlusAdminEmail } from "@/lib/plus-membership";
import { compareCountries, useCountryScope } from "@/lib/country-scope";

export const Route = createFileRoute("/calendar")({
  component: CalendarPage,
  head: () => ({
    meta: [
      { title: "Calendar · EcoMapPlus" },
      {
        name: "description",
        content: "Events, work-trade, and residencies on one calendar. Filter by country and type.",
      },
    ],
  }),
});

type OppType = "event" | "work-trade" | "residency";

type DatedOpp = {
  id: string;
  type: OppType;
  title: string;
  start: string;
  end: string;
  slug: string;
  name: string;
  country: string;
  place: string;
  url: string;
  blurb?: string;
  unannounced?: boolean;
};

const TYPE_LABEL: Record<OppType, string> = {
  event: "Event",
  "work-trade": "Work-trade",
  residency: "Residency",
};

const TYPE_CHIP: Record<OppType, string> = {
  event: "bg-danger text-cream",
  "work-trade": "bg-gold text-ink",
  residency: "bg-residency text-cream",
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function todayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftMonth(yyyyMm: string, delta: number): string {
  const [y, m] = yyyyMm.split("-").map(Number);
  const next = new Date(y, m - 1 + delta, 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(yyyyMm: string): string {
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
    new Date(`${yyyyMm}-01T12:00:00`),
  );
}

function shortMonth(yyyyMm: string): string {
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "2-digit" }).format(
    new Date(`${yyyyMm}-01T12:00:00`),
  );
}

function dayLabel(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(
    new Date(`${iso}T12:00:00`),
  );
}

function monthCells(yyyyMm: string): (string | null)[] {
  const [y, m] = yyyyMm.split("-").map(Number);
  const first = new Date(y, m - 1, 1);
  const count = new Date(y, m, 0).getDate();
  const cells: (string | null)[] = [];
  for (let i = 0; i < first.getDay(); i++) cells.push(null);
  for (let day = 1; day <= count; day++) {
    cells.push(`${yyyyMm}-${String(day).padStart(2, "0")}`);
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function asType(row: DatedEvent): OppType {
  const klass = stayClass(row);
  if (klass === "work-stay") return "work-trade";
  if (klass === "residency") return "residency";
  return "event";
}

function datedOpps(): DatedOpp[] {
  return upcomingEvents().flatMap((row) => {
    const community = getCommunity(row.slug);
    if (!community) return [];
    return [
      {
        id: `${row.slug}|${row.start}|${row.title}`,
        type: asType(row),
        title: row.title,
        start: row.start,
        end: row.end && row.end > row.start ? row.end : row.start,
        slug: community.slug,
        name: community.name,
        country: community.country,
        place: community.location,
        url: row.url,
        blurb: row.blurb,
        unannounced: row.unannounced,
      },
    ];
  });
}

function covers(row: DatedOpp, iso: string): boolean {
  return row.start === iso;
}

function listedOn(row: DatedOpp, iso: string): boolean {
  if (row.type === "work-trade" || row.type === "residency") return row.start === iso;
  return covers(row, iso);
}

function compactDate(iso: string): string {
  return iso.replace(/-/g, "");
}

function addDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const next = new Date(y, m - 1, d + 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
}

function icsEscape(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function foldIcs(line: string): string {
  const parts: string[] = [];
  let rest = line;
  while (rest.length > 73) {
    parts.push(rest.slice(0, 73));
    rest = ` ${rest.slice(73)}`;
  }
  parts.push(rest);
  return parts.join("\r\n");
}

function eventDetails(row: DatedOpp): string {
  const lines = [
    `${TYPE_LABEL[row.type]} at ${row.name}, ${row.place}.`,
    row.blurb,
    row.unannounced ? "Not officially announced. The date is a projection of a yearly programme." : "",
    row.url,
  ].filter(Boolean);
  return lines.join("\n");
}

function googleCalendarUrl(row: DatedOpp): string {
  const end = row.end > row.start ? row.end : row.start;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${row.title} · ${row.name}`,
    dates: `${compactDate(row.start)}/${compactDate(addDay(end))}`,
    details: eventDetails(row),
    location: `${row.name}, ${row.place}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function vevent(row: DatedOpp, stamp: string): string[] {
  const end = row.end > row.start ? row.end : row.start;
  const uid = `ecomap-${row.id.replace(/[^a-z0-9]+/gi, "-")}@ecomapplus.com`;
  return [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${compactDate(row.start)}`,
    `DTEND;VALUE=DATE:${compactDate(addDay(end))}`,
    `SUMMARY:${icsEscape(`${row.title} · ${row.name}`)}`,
    `LOCATION:${icsEscape(`${row.name}, ${row.place}`)}`,
    `DESCRIPTION:${icsEscape(eventDetails(row))}`,
    `URL:${row.url}`,
    "END:VEVENT",
  ];
}

function wrapCalendar(events: string[]): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//EcoMapPlus//Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...events,
    "END:VCALENDAR",
  ];
  return `${lines.map(foldIcs).join("\r\n")}\r\n`;
}

function icsStamp(): string {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function eventIcs(row: DatedOpp): string {
  return wrapCalendar(vevent(row, icsStamp()));
}

function downloadIcsFile(filename: string, body: string) {
  const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadIcs(row: DatedOpp) {
  downloadIcsFile(`${row.slug}-${row.start}.ics`, eventIcs(row));
}

function downloadFilteredIcs(rows: DatedOpp[]) {
  const stamp = icsStamp();
  downloadIcsFile("ecomap-openings.ics", wrapCalendar(rows.flatMap((row) => vevent(row, stamp))));
}

function AddToCalendar({ row }: { row: DatedOpp }) {
  return (
    <div className="mt-1 flex flex-wrap gap-x-4">
      <button
        type="button"
        onClick={() => downloadIcs(row)}
        className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
      >
        Add to your calendar
      </button>
      <a
        href={googleCalendarUrl(row)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
      >
        Google Calendar
      </a>
    </div>
  );
}

function CalendarPage() {
  const plus = usePlusAccess();
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Calendar</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">What’s open</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Events, work-trade, and residencies that have a date. A yearly programme projected into 2027 is tagged Not officially announced. Filter by country or by type. Residencies and work-trade with no fixed date are on{" "}
          <Link to="/ongoing" className="font-medium text-forest hover:underline">
            Ongoing residencies and work-trade
          </Link>
          .
        </p>
      </div>
      {plus ? (
        <OpportunityCalendar />
      ) : (
        <div className="mt-8">
          <LockedDetailsCopy next="/calendar" />
        </div>
      )}
    </main>
  );
}

export function OpportunityCalendar({
  embedded = false,
  shared = false,
  routeSlugs = null,
}: {
  embedded?: boolean;
  shared?: boolean;
  /** Villages on the submitted village-square travel plan. Null means no plan is active. */
  routeSlugs?: string[] | null;
}) {
  const scope = useCountryScope();
  const plus = usePlusAccess();
  const { user } = useCurrentUserState();
  const driver = shared && isPlusAdminEmail(user?.primaryEmail);
  const watching = shared && !plus;
  const datedAll = useMemo(() => datedOpps(), []);
  const routeSet = useMemo(() => (routeSlugs ? new Set(routeSlugs) : null), [routeSlugs]);
  const dated = useMemo(
    () =>
      datedAll.filter((row) => {
        if (routeSet && !routeSet.has(row.slug)) return false;
        if (scope && row.country !== scope) return false;
        return true;
      }),
    [datedAll, scope, routeSet],
  );
  const today = useMemo(() => todayIso(), []);
  const [month, setMonth] = useState(() => today.slice(0, 7));
  const [day, setDay] = useState(today);
  const [country, setCountry] = useState("all");
  const [type, setType] = useState<OppType | "all">("all");
  const [ongoing, setOngoing] = useState(false);
  const [stayCountry, setStayCountry] = useState("all");
  const [stayType, setStayType] = useState<OpenStayType | "all">("all");
  const countryId = embedded ? "cal-country-square" : "cal-country";
  const typeId = embedded ? "cal-type-square" : "cal-type";
  const dirty = useRef(false);

  function applyView(view: HallCalendarView) {
    setMonth(view.month);
    setDay(view.day);
    setCountry(view.country);
    setType(view.type);
  }

  useEffect(() => {
    if (!shared) return;
    let cancel = false;
    readHallCalendar()
      .then((view) => {
        if (!cancel && view && !dirty.current) applyView(view);
      })
      .catch(() => undefined);
    if (!watching) return () => { cancel = true; };
    const stop = startLivePoll(() => {
      readHallCalendar()
        .then((view) => {
          if (view) applyView(view);
        })
        .catch(() => undefined);
    }, 1500);
    return () => {
      cancel = true;
      stop();
    };
  }, [shared, watching]);

  useEffect(() => {
    if (!driver || !dirty.current) return;
    const handle = window.setTimeout(() => {
      void saveHallCalendar({ data: { month, day, country, type } }).catch(() => undefined);
    }, 200);
    return () => window.clearTimeout(handle);
  }, [driver, month, day, country, type]);

  const countries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of dated) {
      if (type !== "all" && row.type !== type) continue;
      counts.set(row.country, (counts.get(row.country) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => compareCountries(a[0], b[0]));
  }, [dated, type]);
  const countryActive = countries.some(([name]) => name === country) ? country : "all";

  function keep(row: { country: string; type: OppType }): boolean {
    if (countryActive !== "all" && row.country !== countryActive) return false;
    if (type !== "all" && row.type !== type) return false;
    return true;
  }

  const cells = useMemo(() => monthCells(month), [month]);
  const visibleDated = useMemo(() => dated.filter(keep), [dated, countryActive, type]);
  const monthBuckets = useMemo(() => {
    const map = new Map<string, Record<OppType, number>>();
    for (const row of visibleDated) {
      const key = row.start.slice(0, 7);
      const bucket = map.get(key) ?? { event: 0, "work-trade": 0, residency: 0 };
      bucket[row.type] += 1;
      map.set(key, bucket);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [visibleDated]);
  const dayItems = visibleDated.filter((row) => listedOn(row, day) && day.startsWith(month));
  const monthCount = visibleDated.filter((row) => row.start.startsWith(month)).length;
  const stays = useMemo(
    () =>
      openStays().filter((row) => {
        if (routeSet && !routeSet.has(row.slug)) return false;
        if (scope && row.country !== scope) return false;
        return true;
      }),
    [scope, routeSet],
  );
  const stayCountries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of stays) {
      if (stayType !== "all" && row.type !== stayType) continue;
      counts.set(row.country, (counts.get(row.country) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => compareCountries(a[0], b[0]));
  }, [stays, stayType]);
  const stayCountryActive = stayCountries.some(([name]) => name === stayCountry) ? stayCountry : "all";
  const visibleStays = useMemo(
    () =>
      stays.filter((row) => {
        if (stayCountryActive !== "all" && row.country !== stayCountryActive) return false;
        if (stayType !== "all" && row.type !== stayType) return false;
        return true;
      }),
    [stays, stayCountryActive, stayType],
  );
  const stayCountryId = embedded ? "stay-country-square" : "stay-country";
  const stayTypeId = embedded ? "stay-type-square" : "stay-type";

  function go(delta: number) {
    if (watching) return;
    dirty.current = true;
    const next = shiftMonth(month, delta);
    setMonth(next);
    setDay(next === today.slice(0, 7) ? today : `${next}-01`);
  }

  function pickCountry(value: string) {
    if (watching) return;
    dirty.current = true;
    setCountry(value);
  }

  function pickType(value: OppType | "all") {
    if (watching) return;
    dirty.current = true;
    setType(value);
  }

  function pickDay(iso: string) {
    if (watching) return;
    dirty.current = true;
    setDay(iso);
  }

  function jumpMonth(next: string) {
    if (watching) return;
    dirty.current = true;
    setOngoing(false);
    setMonth(next);
    setDay(next === today.slice(0, 7) ? today : `${next}-01`);
  }

  return (
    <div className={embedded ? "mt-8" : "mt-8"} data-square-calendar={embedded ? "yes" : "no"}>
      {embedded ? (
        <div className="max-w-2xl">
          <h2 className="font-display text-xl text-fg">Calendar</h2>
          <p className="mt-1 text-sm text-muted">
            {routeSlugs
              ? "Only events, work-trade, and residencies at the villages on this travel plan."
              : watching
              ? "You’re watching. Only the moderator can change the month, the day, or the filters."
              : "Events, work-trade, and residencies. Filter by country or by type."}
          </p>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap items-end gap-3">
            <label htmlFor={countryId} className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs sm:flex-none">
              <span className="font-medium text-fg">Country</span>
              <select
                id={countryId}
                value={countryActive}
                disabled={watching}
                onChange={(event) => pickCountry(event.target.value)}
                className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              >
                <option value="all">All countries</option>
                {countries.map(([name, count]) => (
                  <option key={name} value={name}>
                    {name} ({count})
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor={typeId} className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs sm:flex-none">
              <span className="font-medium text-fg">Type</span>
              <select
                id={typeId}
                value={type}
                disabled={watching}
                onChange={(event) => pickType(event.target.value as OppType | "all")}
                className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              >
                <option value="all">All types</option>
                <option value="event">Event</option>
                <option value="work-trade">Work-trade</option>
                <option value="residency">Residency</option>
              </select>
            </label>
            {plus && !watching ? (
              <button
                type="button"
                disabled={visibleDated.length === 0}
                onClick={() => downloadFilteredIcs(visibleDated)}
                className="inline-flex min-h-11 items-center rounded-md bg-forest px-4 text-sm font-medium text-cream disabled:opacity-50"
              >
                Add {visibleDated.length === 1 ? "this opening" : `these ${visibleDated.length} openings`} to your calendar
              </button>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-sm" aria-hidden>
            {(Object.keys(TYPE_LABEL) as OppType[]).map((key) => (
              <span key={key} className="inline-flex items-center gap-2 text-muted">
                <span className={`size-2.5 rounded-full ${TYPE_CHIP[key]}`} />
                {TYPE_LABEL[key]}
              </span>
            ))}
          </div>

          <section className="mt-6 rounded-lg border border-border bg-surface p-3 shadow-border sm:p-4" aria-label={ongoing ? "Ongoing work-stays and residencies" : "Month"}>
            {ongoing ? (
              <>
                <div className="flex flex-wrap items-end gap-3">
                  <label htmlFor={stayCountryId} className="flex min-w-[10rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs">
                    <span className="font-medium text-fg">Country</span>
                    <select
                      id={stayCountryId}
                      value={stayCountryActive}
                      onChange={(event) => setStayCountry(event.target.value)}
                      className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                    >
                      <option value="all">All countries</option>
                      {stayCountries.map(([name, count]) => (
                        <option key={name} value={name}>
                          {name} ({count})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor={stayTypeId} className="flex min-w-[10rem] flex-1 flex-col gap-1.5 text-sm sm:max-w-xs">
                    <span className="font-medium text-fg">Type</span>
                    <select
                      id={stayTypeId}
                      value={stayType}
                      onChange={(event) => setStayType(event.target.value as OpenStayType | "all")}
                      className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                    >
                      <option value="all">All types</option>
                      <option value="work-trade">Work-trade</option>
                      <option value="residency">Residency</option>
                    </select>
                  </label>
                </div>
                <p className="mt-2 text-sm text-muted">
                  <span className="tabular-nums font-medium text-fg">{visibleStays.length}</span>
                  {visibleStays.length === 1 ? " ongoing stay" : " ongoing stays"} with no fixed date.
                </p>
                {visibleStays.length === 0 ? (
                  <p className="mt-3 text-sm text-muted">None match those filters.</p>
                ) : (
                  <ul className="mt-3 max-h-80 divide-y divide-border overflow-y-auto border-t border-border">
                    {visibleStays.map((row) => (
                      <li key={row.id} className="py-3 pr-1">
                        <p>
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_CHIP[row.type]}`}>
                            {TYPE_LABEL[row.type]}
                          </span>
                        </p>
                        <h3 className="mt-1 font-display text-lg text-fg">
                          <Link to="/communities/$slug" params={{ slug: row.slug }} className="hover:underline">
                            {row.name}
                          </Link>
                        </h3>
                        <p className="mt-0.5 text-sm text-muted">
                          {row.place}, {row.country}
                        </p>
                        <p className="mt-1 text-sm text-muted">{row.note}</p>
                        {row.url ? (
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest hover:underline"
                          >
                            Their page
                            <ExternalLink className="size-3.5" aria-hidden />
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={watching}
                onClick={() => go(-1)}
                className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
              >
                Previous
              </button>
              <h2 className="font-display text-2xl text-fg">{monthLabel(month)}</h2>
              <button
                type="button"
                disabled={watching}
                onClick={() => go(1)}
                className="inline-flex min-h-11 items-center rounded-md bg-bg px-3 text-sm font-medium text-fg shadow-border"
              >
                Next
              </button>
            </div>
            <p className="mt-2 text-sm text-muted">
              <span className="tabular-nums font-medium text-fg">{monthCount}</span>
              {monthCount === 1 ? " dated opportunity" : " dated opportunities"} this month.
            </p>
            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-medium uppercase tracking-wide text-subtle">
              {WEEKDAYS.map((name) => (
                <div key={name} className="py-1">
                  {name}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {cells.map((iso, index) => {
                if (!iso) return <div key={`empty-${index}`} />;
                const hits = visibleDated.filter((row) => covers(row, iso));
                const types = [...new Set(hits.map((row) => row.type))];
                const selected = iso === day;
                const isToday = iso === today;
                return (
                  <button
                    key={iso}
                    type="button"
                    aria-pressed={selected}
                    aria-label={`${dayLabel(iso)}, ${hits.length} ${hits.length === 1 ? "opportunity" : "opportunities"}`}
                    disabled={watching}
                    onClick={() => pickDay(iso)}
                    className={`flex min-h-14 flex-col items-center justify-center rounded-md px-0.5 py-1 text-sm tabular-nums ${
                      selected ? "bg-forest text-cream" : "bg-bg text-fg"
                    }`}
                  >
                    <span className={isToday && !selected ? "font-medium underline" : undefined}>{Number(iso.slice(8))}</span>
                    <span className="mt-1 flex h-2 gap-0.5">
                      {types.map((key) => (
                        <span
                          key={key}
                          className={`size-1.5 rounded-full ${selected ? "bg-cream" : TYPE_CHIP[key]}`}
                        />
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>
                </div>
                {monthBuckets.length > 0 ? (
                  <nav aria-label="Jump to a month" className="w-28 shrink-0">
                    <ul className="max-h-[28rem] space-y-1 overflow-y-auto">
                      {monthBuckets.map(([key, counts]) => {
                        const active = key === month;
                        return (
                          <li key={key}>
                            <button
                              type="button"
                              disabled={watching}
                              aria-current={active ? "true" : undefined}
                              aria-label={`${monthLabel(key)}. ${counts.event} events, ${counts["work-trade"]} work-trade, ${counts.residency} residencies`}
                              onClick={() => jumpMonth(key)}
                              className={`flex min-h-11 w-full flex-col items-start gap-1 rounded-md px-2 py-1.5 text-left ${
                                active ? "bg-forest text-cream" : "bg-bg text-fg"
                              }`}
                            >
                              <span className="text-sm font-medium">{shortMonth(key)}</span>
                              <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                {(Object.keys(TYPE_LABEL) as OppType[]).map((kind) =>
                                  counts[kind] > 0 ? (
                                    <span key={kind} className="inline-flex items-center gap-1" title={TYPE_LABEL[kind]}>
                                      <span className={`size-2.5 rounded-full ${TYPE_CHIP[kind]}`} aria-hidden />
                                      <span className="tabular-nums text-xs">{counts[kind]}</span>
                                    </span>
                                  ) : null,
                                )}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                ) : null}
              </div>
            )}
          </section>

          <button
            type="button"
            onClick={() => setOngoing((on) => !on)}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
          >
            {ongoing ? "Switch to the calendar" : "Switch to ongoing work-stays and residencies"}
          </button>

          {ongoing ? null : (
          <section className="mt-8" aria-label={day.startsWith(month) ? dayLabel(day) : "Selected day"}>
            <h2 className="font-display text-2xl text-fg">{day.startsWith(month) ? dayLabel(day) : monthLabel(month)}</h2>
            {dayItems.length === 0 ? (
              <p className="mt-3 text-muted">Nothing dated on this day.</p>
            ) : (
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {dayItems.map((row) => (
                  <li key={row.id} className="py-4">
                    <p className="text-sm font-medium text-moss">
                      <span className={`mr-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_CHIP[row.type]}`}>
                        {TYPE_LABEL[row.type]}
                      </span>
                      {formatEventWhen(row.start, row.end === row.start ? undefined : row.end)}
                      {row.unannounced ? (
                        <span className="ml-2 inline-flex rounded-full bg-bg px-2 py-0.5 font-sans text-xs font-medium text-muted shadow-border">
                          Not officially announced
                        </span>
                      ) : null}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-fg">{row.title}</h3>
                    {row.type !== "event" && row.start !== day ? null : (
                      <>
                        <p className="mt-1 text-sm text-muted">
                          {watching ? (
                            <span className="font-medium text-fg">{row.name}</span>
                          ) : (
                            <Link to="/communities/$slug" params={{ slug: row.slug }} className="font-medium text-forest hover:underline">
                              {row.name}
                            </Link>
                          )}
                          {` · ${row.place}`}
                        </p>
                        {row.blurb ? <p className="mt-2 text-muted">{row.blurb}</p> : null}
                        {watching ? null : (
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest hover:underline"
                          >
                            Details
                            <ExternalLink className="size-3.5" aria-hidden />
                          </a>
                        )}
                        {watching ? null : <AddToCalendar row={row} />}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
          )}
    </div>
  );
}
