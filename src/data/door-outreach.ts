import { accommodationsFor } from "@/data/accommodations";
import { bookingFor } from "@/data/booking-stays";
import { getCommunity } from "@/data/communities";
import { eventCalendarBySlug, upcomingEventsFor } from "@/data/events";
import { leadersFor } from "@/data/leaders";
import { publicFlagLabel, type PublicFlag } from "@/data/public-flags";
import { residencyFor, upcomingResidenciesFor } from "@/data/residencies";
import { visitJoinFor } from "@/data/visit-join";
import { volunteerFor } from "@/data/volunteer-programs";
import { workStayFor } from "@/data/work-stay";

export type DoorContact = {
  email: string | null;
  url: string | null;
  who: string;
  why: string;
};

const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

const DOOR_WORDS: Record<PublicFlag, RegExp> = {
  "work-stay": /volunteer|intern|work[- ]?stay|work[- ]?exchange|coworker/i,
  event: /event|workshop|course|calendar|festival|retreat|program/i,
  overnight: /stay|book|hostel|guest|accommodat|night|bed/i,
  residency: /residen|member|admission|trial|join|visitor program|info-woche/i,
};

function emailsIn(text: string): string[] {
  return Array.from(new Set((text.match(EMAIL_RE) ?? []).map((email) => email.toLowerCase())));
}

function safe<T>(read: () => T, fallback: T): T {
  try {
    return read();
  } catch {
    return fallback;
  }
}

export function bestDoorContact(slug: string, door: PublicFlag): DoorContact {
  const community = getCommunity(slug);
  const website = community?.website || null;
  const leaders = leadersFor(slug);
  const scored: { email: string; score: number; why: string }[] = [];

  function add(text: string | undefined, why: string, boost: number) {
    if (!text) return;
    const hit = DOOR_WORDS[door].test(text);
    for (const email of emailsIn(text)) {
      scored.push({ email, score: boost + (hit ? 4 : 0), why });
    }
  }

  const work = workStayFor(slug);
  const stay = bookingFor(slug);
  const residency = residencyFor(slug);
  const volunteer = volunteerFor(slug);
  const events = safe(() => upcomingEventsFor(slug), []);
  const beds = safe(() => accommodationsFor(slug).visitor.overview, "");
  const join = safe(() => visitJoinFor(slug), null);

  if (door === "work-stay") {
    add(volunteer?.note, "Published on their work-stay page.", 6);
    add(work?.note, "Named in the work-stay note.", 5);
  }
  if (door === "overnight") {
    add(stay?.note, "Named on the booking note.", 6);
    add(beds, "Named with the visitor beds.", 4);
  }
  if (door === "residency") {
    add(residency?.note, "Named on the residency path.", 6);
    add(join?.joinProcess, "Named in how you join.", 3);
  }
  if (door === "event") {
    for (const row of events) add(`${row.title} ${row.blurb ?? ""} ${row.url}`, "Named on a dated event.", 5);
    add(join?.visitProcess, "Named in how you visit.", 2);
  }

  for (const person of leaders?.people ?? []) {
    if (!person.email) continue;
    const blob = `${person.role} ${person.note ?? ""}`;
    const hit = DOOR_WORDS[door].test(blob);
    scored.push({
      email: person.email.toLowerCase(),
      score: hit ? 7 : 1,
      why: hit
        ? `${person.name}, ${person.role}, is the public contact that matches this door.`
        : `${person.name} is a published contact.`,
    });
  }
  if (leaders?.office?.email) {
    scored.push({
      email: leaders.office.email.toLowerCase(),
      score: 2,
      why: "This is the village office address on file.",
    });
  }

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];

  const url =
    door === "work-stay"
      ? volunteer?.url || website
      : door === "overnight"
        ? stay?.url || website
        : door === "event"
          ? eventCalendarBySlug[slug] || events[0]?.url || website
          : residency?.applyUrl || website;

  if (best) {
    return { email: best.email, url, who: best.email, why: best.why };
  }
  if (url) {
    return {
      email: null,
      url,
      who: "Their page",
      why: `No public email is on file for this ${publicFlagLabel[door].toLowerCase()} door. Use the page they publish.`,
    };
  }
  return {
    email: null,
    url: null,
    who: "No public contact",
    why: "No email or page is on file for this door.",
  };
}

function shortWhen(start: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(new Date(`${start}T12:00:00`));
}

function namedDate(title: string, start: string) {
  return `${title} on ${shortWhen(start)}`;
}

/** The actual programme this door is about, if one is on file. */
function doorSubject(slug: string, door: PublicFlag): string | null {
  if (door === "event") {
    const next = upcomingEventsFor(slug)[0];
    return next ? namedDate(next.title, next.start) : null;
  }
  if (door === "residency") {
    const next = upcomingResidenciesFor(slug)[0];
    return next ? namedDate(next.title, next.start) : null;
  }
  if (door === "work-stay") {
    return volunteerFor(slug) ? "your work-stay" : null;
  }
  if (door === "overnight") {
    return bookingFor(slug) ? "a night" : null;
  }
  return null;
}

export function doorLetter(input: {
  slug: string;
  village: string;
  door: PublicFlag;
  pass: number;
  feedback: string;
  custom: boolean;
}): { subject: string; body: string } {
  const { slug, village, door, pass, custom } = input;
  const feedback = input.feedback.trim();
  const about = doorSubject(slug, door);
  const sign = "____";

  if (!custom) {
    return { subject: defaultSubject(village, door, about), body: defaultBody(village, door, about, sign) };
  }

  const note = feedback
    .replace(/\b(shorter|short|brief|fewer words|concise|regenerate|custom)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  const subject = customSubject(village, door, about, pass);
  const body = customBody(village, door, about, sign, pass, note);
  return { subject, body };
}

function defaultSubject(village: string, door: PublicFlag, about: string | null) {
  if (door === "event" && about) return about;
  if (door === "work-stay") return `Work-stay at ${village}`;
  if (door === "overnight") return `A night at ${village}`;
  if (door === "residency") return about ? about : `Trying a stay at ${village}`;
  return `Visiting ${village}`;
}

function defaultBody(village: string, door: PublicFlag, about: string | null, sign: string) {
  if (door === "work-stay") {
    return [
      "Hi,",
      "",
      `I'm hoping to do a work-stay at ${village}. Which weeks are you taking people, what are the hours, and where would I sleep?`,
      "",
      sign,
    ].join("\n");
  }
  if (door === "event") {
    const ask = about
      ? `I'd like to come to the ${about} at ${village}. Is there still a place, and how do I reserve?`
      : `I'd like to come to something public at ${village}. What's coming up, and can I join if I don't already know anyone there?`;
    return ["Hi,", "", ask, "", sign].join("\n");
  }
  if (door === "overnight") {
    return [
      "Hi,",
      "",
      `I'm looking for a night at ${village}. Do you have a bed, and should I book on your page or write you first?`,
      "",
      sign,
    ].join("\n");
  }
  const ask = about
    ? `I'm interested in the ${about} at ${village} — a real try at living there, not just a tour. What's the first step?`
    : `I'm interested in a trial stay at ${village}, not just a visit. How long is it, and what should I send you first?`;
  return ["Hi,", "", ask, "", sign].join("\n");
}

function customSubject(village: string, door: PublicFlag, about: string | null, pass: number) {
  const options =
    door === "work-stay"
      ? [`Work-stay at ${village}`, `When could I work at ${village}?`]
      : door === "event"
        ? [about ?? `A visit to ${village}`, `Can I still come to ${village}?`]
        : door === "overnight"
          ? [`A night at ${village}`, `Booking a bed at ${village}`]
          : [about ? `${about}` : `A trial at ${village}`, `Staying longer at ${village}`];
  return options[pass % options.length];
}

function customBody(village: string, door: PublicFlag, about: string | null, sign: string, pass: number, note: string) {
  const opener =
    door === "work-stay"
      ? `My name is ${sign}. I want to do a work-stay at ${village}, and I can be clear about which weeks I'm free.`
      : door === "event"
        ? about
          ? `My name is ${sign}. The ${about} at ${village} is the one I want to come to.`
          : `My name is ${sign}. I want to come to a public event at ${village}.`
        : door === "overnight"
          ? `My name is ${sign}. I'd like to stay a night at ${village} if you have room.`
          : about
            ? `My name is ${sign}. The ${about} is the stay I'm asking about at ${village}.`
            : `My name is ${sign}. I want to try living at ${village} for a trial, not just pass through.`;

  const question =
    door === "work-stay"
      ? pass % 2 === 0
        ? "What does a normal day look like, and is there a bed that comes with the work?"
        : "Who should I write if the dates I have don't match your next intake?"
      : door === "event"
        ? pass % 2 === 0
          ? "Is it still open, what does it cost, and do I need to reserve ahead?"
          : "Can I come on my own, and is there a place to sleep if the event runs more than a day?"
        : door === "overnight"
          ? pass % 2 === 0
            ? "Which nights are actually open, and do I book online or wait for a reply?"
            : "What kind of bed is it, and is there a night you would rather I didn't arrive?"
          : pass % 2 === 0
            ? "How long is the trial, what work is part of it, and what do you want in a first letter?"
            : "If it goes well, what is the step after the trial? I don't want to assume I can stay.";

  const lines = ["Hi,", "", opener, "", question];
  if (note) lines.push("", note.endsWith(".") ? note : `${note}.`);
  lines.push("", "Thanks,", sign);
  return lines.join("\n");
}
