import { OPEN_SQUARE_LABEL, pacificClock, squareSeriesEnd, squareSeriesStart } from "@/lib/square-hours";

const DETAILS =
  "The village square is open to everyone for fifteen minutes. Mondays 4:30–4:45pm Pacific. EcoMapPlus members can enter the rest of the week.";

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

function hallUrl(): string {
  if (typeof window === "undefined") return "https://ecomapplus.com/hall";
  return `${window.location.origin}/hall`;
}

function squareIcs(): string {
  const start = squareSeriesStart();
  const end = squareSeriesEnd(start);
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//EcoMapPlus//Village Square//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    "TZID:America/Los_Angeles",
    "X-LIC-LOCATION:America/Los_Angeles",
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:-0800",
    "TZOFFSETTO:-0700",
    "TZNAME:PDT",
    "DTSTART:19700308T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:-0700",
    "TZOFFSETTO:-0800",
    "TZNAME:PST",
    "DTSTART:19701101T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    "UID:village-square-open@ecomapplus.com",
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=America/Los_Angeles:${pacificClock(start)}`,
    `DTEND;TZID=America/Los_Angeles:${pacificClock(end)}`,
    "RRULE:FREQ=WEEKLY;BYDAY=MO",
    "SUMMARY:Village square opens",
    `DESCRIPTION:${icsEscape(`${DETAILS}\n${hallUrl()}`)}`,
    `LOCATION:${icsEscape("EcoMapPlus village square")}`,
    `URL:${hallUrl()}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `${lines.map(foldIcs).join("\r\n")}\r\n`;
}

function downloadSquareIcs() {
  const blob = new Blob([squareIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "village-square-opens.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function googleSquareUrl(): string {
  const start = squareSeriesStart();
  const end = squareSeriesEnd(start);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Village square opens",
    dates: `${pacificClock(start)}/${pacificClock(end)}`,
    ctz: "America/Los_Angeles",
    recur: "RRULE:FREQ=WEEKLY;BYDAY=MO",
    details: `${DETAILS} ${hallUrl()}`,
    location: "EcoMapPlus village square",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function AddSquareOpening({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 ${className}`}>
      <button
        type="button"
        onClick={downloadSquareIcs}
        className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
      >
        Add to your calendar
      </button>
      <a
        href={googleSquareUrl()}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
      >
        Google Calendar
      </a>
      <span className="sr-only">{OPEN_SQUARE_LABEL}. Repeats every Monday.</span>
    </div>
  );
}
