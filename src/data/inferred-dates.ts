import type { DatedEvent, EventKind } from "./events";

/**
 * 2027 dates projected from a yearly pattern already on file.
 * Official 2027 listings stay in datedEvents and are not tagged.
 */

function iso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parse(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00`);
}

function addDays(isoDate: string, days: number): string {
  const date = parse(isoDate);
  date.setDate(date.getDate() + days);
  return iso(date);
}

/** 2026 → 2027 keeps the weekday. There is no leap day between these dates. */
function sameWeekdayNextYear(isoDate: string): string {
  const date = parse(isoDate);
  date.setFullYear(date.getFullYear() + 1);
  date.setDate(date.getDate() - 1);
  return iso(date);
}

function nthWeekday(year: number, month: number, weekday: number, n: number): string {
  const first = new Date(year, month - 1, 1);
  const day = 1 + ((weekday - first.getDay() + 7) % 7) + (n - 1) * 7;
  return iso(new Date(year, month - 1, day));
}

function lastWeekday(year: number, month: number, weekday: number): string {
  const last = new Date(year, month, 0);
  const day = last.getDate() - ((last.getDay() - weekday + 7) % 7);
  return iso(new Date(year, month - 1, day));
}

const NOTE = "Projected from the same time in 2026. Confirm with the village before you travel.";

function row(
  slug: string,
  title: string,
  start: string,
  url: string,
  kind: EventKind,
  extra?: { end?: string; blurb?: string },
): DatedEvent {
  return {
    slug,
    title,
    start,
    end: extra?.end,
    url,
    kind,
    blurb: extra?.blurb ?? NOTE,
    unannounced: true,
  };
}

function shift(start: string, end?: string): { start: string; end?: string } {
  return {
    start: sameWeekdayNextYear(start),
    end: end ? sameWeekdayNextYear(end) : undefined,
  };
}

export function inferredYear(year = 2027): DatedEvent[] {
  const out: DatedEvent[] = [];

  for (let month = 1; month <= 12; month++) {
    out.push(
      row(
        "cloughjordan",
        "Monthly guided tour",
        nthWeekday(year, month, 0, 1),
        "https://www.thevillage.ie/",
        "tour",
        { blurb: "First Sunday of the month, 3pm from Sheelagh na Gig. Projected for 2027." },
      ),
      row(
        "aardehuis",
        "Open tour",
        nthWeekday(year, month, 0, 1),
        "https://www.aardehuis.nl/",
        "tour",
        { blurb: "First Sunday of the month, 2pm. No signup. Projected for 2027." },
      ),
      row(
        "moora-moora",
        "Visitor day",
        nthWeekday(year, month, 0, 1),
        "https://mooramoora.org.au/index.php/get-involved/visitors-day/",
        "tour",
        { blurb: "First Sunday of the month, 2–4pm. Not on total fire ban days. Projected for 2027." },
      ),
      row(
        "los-portales",
        "Open Saturday",
        nthWeekday(year, month, 6, 2),
        "https://losportales.net/visitas.html",
        "open-day",
        { blurb: "Second Saturday, 10:30–17:00. €15 including lunch. Projected for 2027." },
      ),
    );
    if (month !== 1) {
      out.push(
        row(
          "crystal-waters",
          "Village Market",
          nthWeekday(year, month, 6, 1),
          "https://crystalwaters.org.au/",
          "open-day",
          { blurb: "First Saturday of the month, 8am–1pm. Not held in January. Projected for 2027." },
        ),
      );
    }
    if (month >= 3 && month <= 10) {
      out.push(
        row(
          "oaec",
          "Public Tour — 3rd Saturday",
          nthWeekday(year, month, 6, 3),
          "https://oaec.org/events/",
          "tour",
          { blurb: "Seasonal walk of the demonstration site, 1pm. Projected for 2027." },
        ),
      );
    }
    if (month >= 5 && month <= 10) {
      out.push(
        row(
          "dancing-rabbit",
          "Monthly village tour",
          nthWeekday(year, month, 6, 2),
          "https://www.dancingrabbit.org/visit/",
          "tour",
          { blurb: "Second Saturday, May–October. Reservation required. Projected for 2027." },
        ),
      );
    }
    if (month <= 10) {
      out.push(
        row(
          "ecovillage-ithaca",
          "Free public tour",
          lastWeekday(year, month, 6),
          "https://www.thriveithaca.org/requestatour",
          "tour",
          { blurb: "Last Saturday of the month, 3–5pm. Not in November or December. Projected for 2027." },
        ),
      );
    }
    if (month >= 3 && month <= 11) {
      const start = nthWeekday(year, month, 1, 1);
      out.push(
        row(
          "east-wind",
          "Three-week visitor period",
          start,
          "https://www.eastwind.org/visiting-eastwind",
          "retreat",
          {
            end: addDays(start, 20),
            blurb: "First Monday of the month, three weeks. No December–February period. Letter of introduction. Projected for 2027.",
          },
        ),
      );
    }
  }

  const twinOaks = [
    ["2026-05-22", "2026-06-11"],
    ["2026-06-19", "2026-07-09"],
    ["2026-07-17", "2026-08-06"],
    ["2026-08-14", "2026-09-03"],
    ["2026-09-18", "2026-10-08"],
    ["2026-10-16", "2026-11-05"],
    ["2026-11-13", "2026-12-03"],
  ];
  for (const [start, end] of twinOaks) {
    const when = shift(start, end);
    out.push(
      row(
        "twin-oaks",
        "Three-week visitor program",
        when.start,
        "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program",
        "retreat",
        {
          end: when.end,
          blurb: "Same weeks as the 2026 groups, no December period. Letter of introduction. Not a drop-in.",
        },
      ),
    );
  }

  const experienceWeeks = [
    ["2026-06-07", "2026-06-12"],
    ["2026-07-19", "2026-07-24"],
    ["2026-09-13", "2026-09-18"],
    ["2026-12-13", "2026-12-18"],
  ];
  for (const [start, end] of experienceWeeks) {
    const when = shift(start, end);
    out.push(
      row(
        "findhorn",
        "Experience Week: From I to We",
        when.start,
        "https://www.findhorn.org/workshops",
        "retreat",
        { end: when.end, blurb: "Same week as 2026. February, March, and April 2027 are already posted; this one is not." },
      ),
    );
  }

  const threshold = shift("2026-12-28", "2027-01-03");
  out.push(
    row(
      "findhorn",
      "Crossing the Threshold",
      threshold.start,
      "https://www.findhorn.org/workshops",
      "retreat",
      { end: threshold.end, blurb: "Year-turn retreat, same days as the 2026–27 programme. Not posted for 2027–28." },
    ),
  );

  const rains = { start: "2027-10-13", end: "2028-01-13" };
  out.push(
    row(
      "plum-village",
      "90-Day Rains Retreat",
      rains.start,
      "https://plumvillage.org/",
      "retreat",
      { end: rains.end, blurb: "The rains retreat runs mid-October to mid-January. Projected from the 2026–27 dates." },
    ),
  );
  out.push(
    row(
      "plum-village",
      "Christmas Holiday Retreat",
      "2027-12-21",
      "https://plumvillage.org/",
      "retreat",
      { end: "2027-12-28", blurb: "Christmas week, same dates as 2026. Not posted yet." },
    ),
    row(
      "plum-village",
      "New Year’s Retreat",
      "2027-12-28",
      "https://plumvillage.org/",
      "retreat",
      { end: "2028-01-04", blurb: "New Year week, same dates as the 2026–27 retreat. Not posted yet." },
    ),
  );

  const newYear = { start: "2027-12-28", end: "2028-01-01" };
  out.push(
    row(
      "mount-madonna",
      "49th Annual New Year’s Yoga Retreat",
      newYear.start,
      "https://mountmadonna.org/",
      "retreat",
      { end: newYear.end, blurb: "The 48th ran 28 December 2026–1 January 2027. The 49th is not posted." },
    ),
  );

  const aradhana = shift("2026-09-26");
  out.push(
    row(
      "mount-madonna",
      "Sacred Series: 9th Annual Aradhana",
      aradhana.start,
      "https://mountmadonna.org/calendar/",
      "open-day",
      { blurb: "The 8th was 26 September 2026. Projected onto the same weekday in 2027." },
    ),
  );

  const chautauqua = shift("2026-09-11", "2026-09-19");
  out.push(
    row(
      "oaec",
      "24th Annual Chautauqua Revue",
      chautauqua.start,
      "https://oaec.org/events/",
      "festival",
      { end: chautauqua.end, blurb: "The 23rd ran across two September weekends in 2026. The 24th is not posted." },
    ),
  );

  const apple = shift("2026-09-19");
  out.push(
    row(
      "cloughjordan",
      "Féile na nÚll — Community Apple Festival",
      apple.start,
      "https://www.thevillage.ie/",
      "festival",
      { blurb: "The tenth anniversary was the Saturday of 19 September 2026. Projected onto the Saturday of 2027." },
    ),
  );

  out.push(
    row(
      "earthaven",
      "Juncture: Fall Equinox Gathering",
      "2027-09-17",
      "https://www.earthaven.org/classes-and-events/",
      "workshop",
      { blurb: "Equinox gathering. Held 17 September 2026, the same date relative to the equinox. Donation." },
    ),
    row(
      "damanhur",
      "Autumn Equinox Great Ritual",
      "2027-09-20",
      "https://damanhur.travel/annual-celebrations-rituals/",
      "open-day",
      { blurb: "Yearly equinox ritual. Held 20 September 2026." },
    ),
    row(
      "damanhur",
      "Commemoration of the Dead",
      "2027-11-01",
      "https://damanhur.travel/annual-celebrations-rituals/",
      "open-day",
      { blurb: "Held on 1 November." },
    ),
    row(
      "damanhur",
      "Winter Solstice Great Ritual",
      "2027-12-20",
      "https://damanhur.travel/annual-celebrations-rituals/",
      "open-day",
      { blurb: "Yearly solstice ritual. Held 20 December 2026, the day before the solstice." },
    ),
  );

  const solstice = "2027-12-18";
  out.push(
    row(
      "sunburst-sanctuary",
      "Winter Solstice Gathering",
      solstice,
      "https://sunburst.org/upcoming/",
      "open-day",
      { blurb: "2026 gathering was the Saturday before the solstice. 2027’s Saturday is 18 December." },
    ),
  );

  out.push(
    row(
      "zegg",
      "Saisonier month",
      "2027-09-01",
      "https://www.zegg.de/en/events/",
      "volunteer",
      { end: "2027-10-01", blurb: "September living-in month, as in 2026. From about €855 if you work four days a week." },
    ),
  );

  const workWeeks: Array<[string, string, string, string]> = [
    ["Mitarbeitswoche: Ökodorfgelände gestalten", "2026-09-20", "2026-09-25", "https://lernort.siebenlinden.org/"],
    ["Garten-Mitarbeitswoche", "2026-10-19", "2026-10-24", "https://lernort.siebenlinden.org/"],
    ["Info-Woche und Urlaub", "2026-10-25", "2026-10-30", "https://lernort.siebenlinden.org/"],
    ["Waldmitarbeitswoche", "2026-11-23", "2026-11-28", "https://lernort.siebenlinden.org/"],
    ["Info-Wochenende", "2026-11-27", "2026-11-29", "https://lernort.siebenlinden.org/"],
  ];
  for (const [title, start, end, url] of workWeeks) {
    const when = shift(start, end);
    const kind: EventKind = title.startsWith("Info-") ? "open-day" : "volunteer";
    out.push(row("sieben-linden", title, when.start, url, kind, { end: when.end }));
  }

  const harvest = shift("2026-09-26");
  out.push(
    row(
      "glarisegg",
      "Erntedankfest im Permakulturgarten",
      harvest.start,
      "https://schloss-glarisegg.ch/kalender/",
      "festival",
      { blurb: "Harvest thanksgiving. 2026 was 26 September. Projected onto the same weekday." },
    ),
  );

  const gala = shift("2026-09-29");
  out.push(
    row(
      "sunrise-ranch",
      "Dance & Drums for Africa Annual Gala",
      gala.start,
      "https://sunriseranch.org/events/",
      "festival",
      { blurb: "Annual gala. 2026 was 29 September. Projected onto the same weekday." },
    ),
  );

  const workday = shift("2026-10-24");
  out.push(
    row(
      "sabbathday-lake",
      "Fall Volunteer Work Day",
      workday.start,
      "https://maineshakers.com/special-events/",
      "volunteer",
      { blurb: "Fall farm and museum work day, 9am–3pm. 2026 was 24 October." },
    ),
    row(
      "white-oak-pastures",
      "Fall Festival",
      workday.start,
      "https://whiteoakpastures.com/pages/wop-education-events",
      "festival",
      { blurb: "The 2026 fall festival was 24 October. The anniversary party that year is not assumed for 2027." },
    ),
  );

  const svi = shift("2026-09-23", "2026-09-26");
  out.push(
    row(
      "hollyhock",
      "Social Venture Institute",
      svi.start,
      "https://hollyhock.ca/events/",
      "workshop",
      { end: svi.end, blurb: "September institute on Cortes Island. 2026 was 23–26 September." },
    ),
  );

  const apprentice = shift("2026-10-05", "2026-10-24");
  out.push(
    row(
      "las-canadas",
      "Agroecology apprentice immersion",
      apprentice.start,
      "https://bosquedeniebla.com.mx/cursos-y-aprendices/",
      "course",
      { end: apprentice.end, blurb: "October living-and-working immersion. 2026 ran 5–24 October." },
    ),
  );

  return out.filter((item) => item.start.startsWith(String(year)) || (item.end ?? "").startsWith(String(year)));
}
