import { createServerFn } from "@tanstack/react-start";
import { getCommunity, searchVillages } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";
import { dailyLifeFor } from "@/data/daily-life";
import {
  compactTour,
  eventTourCatalog,
  isEventKind,
  planEventTour,
  type EventTour,
  type EventTourRequest,
} from "@/data/event-tour";
import { eventKindLabel } from "@/data/events";
import { kmBetween, kmToMiles } from "@/data/geo";
import { visitJoinFor } from "@/data/visit-join";
import { visitDoorLabel, visitDoorsFor } from "@/data/visit-types";

export type EcoBotMessage = {
  role: "user" | "assistant";
  content: string;
};

export type EcoBotHints = {
  originLabel?: string;
  originLat?: number;
  originLng?: number;
  maxDays?: number;
  country?: string;
};

export type EcoBotResult = {
  ok: boolean;
  text: string;
  tour: EventTour | null;
  error?: string;
};

const MAX_MESSAGE = 1200;
const MAX_HISTORY = 8;
const MAX_ROUNDS = 4;

type GrokToolCall = {
  id: string;
  type: "function";
  function: { name: string; arguments: string };
};

type GrokMessage = {
  role: "system" | "user" | "assistant" | "tool";
  content?: string | null;
  tool_calls?: GrokToolCall[];
  tool_call_id?: string;
};

const TOOLS = [
  {
    type: "function",
    function: {
      name: "plan_event_tour",
      description:
        "Build a trip that visits as many dated eco-community events as possible in a short window while travelling the fewest miles. Call this whenever the member wants an itinerary, hop, or low-mileage event tour.",
      parameters: {
        type: "object",
        properties: {
          origin_query: { type: "string", description: "City or place they start from." },
          origin_lat: { type: "number" },
          origin_lng: { type: "number" },
          origin_label: { type: "string" },
          after: { type: "string", description: "YYYY-MM-DD" },
          before: { type: "string", description: "YYYY-MM-DD" },
          max_days: { type: "number", description: "Trip length in days, 3–28." },
          max_stops: { type: "number" },
          country: { type: "string" },
          region: { type: "string" },
          kinds: {
            type: "array",
            items: {
              type: "string",
              enum: ["workshop", "course", "retreat", "tour", "festival", "open-day", "volunteer"],
            },
          },
        },
      },
    },
  },
  {
    type: "function",
    function: {
      name: "search_communities",
      description: "Search eco-communities on the atlas by name, place, or country.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string" },
          limit: { type: "number" },
        },
        required: ["query"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_community",
      description:
        "Get atlas facts for one eco-community: place, size, legal form, what it is known for, how a stranger visits, and upcoming events.",
      parameters: {
        type: "object",
        properties: { slug: { type: "string" } },
        required: ["slug"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "list_events",
      description: "List dated public events from official village calendars, optionally filtered.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string" },
          country: { type: "string" },
          kind: {
            type: "string",
            enum: ["workshop", "course", "retreat", "tour", "festival", "open-day", "volunteer"],
          },
          after: { type: "string" },
          before: { type: "string" },
          limit: { type: "number" },
        },
      },
    },
  },
] as const;

function clip(value: string, n: number) {
  const t = value.replace(/\s+/g, " ").trim();
  return t.length <= n ? t : `${t.slice(0, n - 1)}…`;
}

function parseHints(raw: unknown): EcoBotHints {
  if (!raw || typeof raw !== "object") return {};
  const row = raw as Record<string, unknown>;
  const originLat = typeof row.originLat === "number" ? row.originLat : Number(row.originLat);
  const originLng = typeof row.originLng === "number" ? row.originLng : Number(row.originLng);
  const maxDays = typeof row.maxDays === "number" ? row.maxDays : Number(row.maxDays);
  return {
    originLabel: typeof row.originLabel === "string" ? row.originLabel.trim().slice(0, 80) : undefined,
    originLat: Number.isFinite(originLat) && originLat >= -90 && originLat <= 90 ? originLat : undefined,
    originLng: Number.isFinite(originLng) && originLng >= -180 && originLng <= 180 ? originLng : undefined,
    maxDays: Number.isFinite(maxDays) ? Math.min(28, Math.max(3, Math.round(maxDays))) : undefined,
    country: typeof row.country === "string" ? row.country.trim().slice(0, 60) : undefined,
  };
}

function parseHistory(raw: unknown): EcoBotMessage[] {
  if (!Array.isArray(raw)) return [];
  const out: EcoBotMessage[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    if (row.role !== "user" && row.role !== "assistant") continue;
    if (typeof row.content !== "string") continue;
    const content = clip(row.content, MAX_MESSAGE);
    if (!content) continue;
    out.push({ role: row.role, content });
    if (out.length >= MAX_HISTORY) break;
  }
  return out;
}

function communityCard(slug: string) {
  const community = getCommunity(slug);
  if (!community) return { error: "Unknown eco-community" };
  const point = coordsFor(community.slug);
  let visit = "";
  try {
    visit = visitJoinFor(community.slug).visitProcess;
  } catch {
    visit = "";
  }
  let known = "";
  try {
    known = dailyLifeFor(community.slug).unique.title;
  } catch {
    known = "";
  }
  const events = eventTourCatalog()
    .filter((row) => row.slug === community.slug)
    .slice(0, 8)
    .map((row) => ({
      title: row.title,
      when: `${row.start}${row.end !== row.start ? `–${row.end}` : ""}`,
      kind: eventKindLabel[row.kind],
    }));
  return {
    slug: community.slug,
    name: community.name,
    location: community.location,
    region: community.region,
    country: community.country,
    founded: community.foundedLabel,
    members: community.membersLabel,
    acres: community.acresLabel,
    legal: community.legalCategory,
    stillActive: community.stillActive,
    knownFor: known,
    doors: visitDoorsFor(community.slug).map((door) => visitDoorLabel[door]),
    visit: clip(visit, 420),
    summary: clip(community.summary, 700),
    website: community.website,
    lat: point?.lat,
    lng: point?.lng,
    upcoming: events,
  };
}

function searchCards(query: string, limit: number) {
  const n = Math.min(12, Math.max(1, limit || 8));
  return searchVillages(query, n).map((row) => {
    const community = getCommunity(row.slug);
    const point = coordsFor(row.slug);
    return {
      slug: row.slug,
      name: row.name,
      location: row.location,
      country: community?.country,
      region: community?.region,
      members: community?.membersLabel,
      legal: community?.legalCategory,
      stillActive: community?.stillActive,
      lat: point?.lat,
      lng: point?.lng,
    };
  });
}

function listEventCards(args: Record<string, unknown>) {
  const query = typeof args.query === "string" ? args.query.trim().toLowerCase() : "";
  const country = typeof args.country === "string" ? args.country.trim().toLowerCase() : "";
  const kind = isEventKind(args.kind) ? args.kind : null;
  const after = typeof args.after === "string" ? args.after : "";
  const before = typeof args.before === "string" ? args.before : "";
  const limit = Math.min(24, Math.max(1, Number(args.limit) || 14));
  return eventTourCatalog()
    .filter((row) => {
      if (country && row.country.toLowerCase() !== country && !row.country.toLowerCase().includes(country)) {
        return false;
      }
      if (kind && row.kind !== kind) return false;
      if (after && row.start < after) return false;
      if (before && row.start > before) return false;
      if (!query) return true;
      const hay = `${row.title} ${row.name} ${row.place} ${row.country} ${row.blurb ?? ""}`.toLowerCase();
      return hay.includes(query);
    })
    .slice(0, limit)
    .map((row) => ({
      slug: row.slug,
      village: row.name,
      place: row.place,
      country: row.country,
      title: row.title,
      start: row.start,
      end: row.end,
      kind: eventKindLabel[row.kind],
      milesFromHint: null as number | null,
    }));
}

async function runPlan(args: Record<string, unknown>, hints: EcoBotHints): Promise<{ payload: unknown; tour: EventTour | null }> {
  const kinds = Array.isArray(args.kinds) ? args.kinds.filter(isEventKind) : undefined;
  const originLat = Number(args.origin_lat ?? hints.originLat);
  const originLng = Number(args.origin_lng ?? hints.originLng);
  const originLabel =
    (typeof args.origin_label === "string" && args.origin_label.trim()) ||
    hints.originLabel ||
    (typeof args.origin_query === "string" ? args.origin_query : undefined);
  const req: EventTourRequest = {
    originQuery: typeof args.origin_query === "string" ? args.origin_query : originLabel,
    origin:
      Number.isFinite(originLat) && Number.isFinite(originLng) && originLabel
        ? { label: originLabel, lat: originLat, lng: originLng }
        : null,
    after: typeof args.after === "string" ? args.after : undefined,
    before: typeof args.before === "string" ? args.before : undefined,
    maxDays: Number(args.max_days ?? hints.maxDays) || hints.maxDays,
    maxStops: Number(args.max_stops) || undefined,
    country: typeof args.country === "string" ? args.country : hints.country,
    region: typeof args.region === "string" ? args.region : undefined,
    kinds,
  };
  const tour = await planEventTour(req);
  if (!tour) {
    return {
      payload: { error: "No dated events fit that window. Widen the dates or drop a country filter." },
      tour: null,
    };
  }
  return { payload: compactTour(tour), tour };
}

async function runTool(
  name: string,
  rawArgs: string,
  hints: EcoBotHints,
): Promise<{ payload: unknown; tour: EventTour | null }> {
  let args: Record<string, unknown> = {};
  try {
    args = rawArgs ? (JSON.parse(rawArgs) as Record<string, unknown>) : {};
  } catch {
    args = {};
  }
  if (name === "plan_event_tour") return runPlan(args, hints);
  if (name === "search_communities") {
    const query = typeof args.query === "string" ? args.query : "";
    return { payload: { results: searchCards(query, Number(args.limit) || 8) }, tour: null };
  }
  if (name === "get_community") {
    const slug = typeof args.slug === "string" ? args.slug.trim() : "";
    return { payload: communityCard(slug), tour: null };
  }
  if (name === "list_events") {
    let rows = listEventCards(args);
    if (hints.originLat != null && hints.originLng != null) {
      const origin = { lat: hints.originLat, lng: hints.originLng };
      rows = rows.map((row) => {
        const point = coordsFor(row.slug);
        return {
          ...row,
          milesFromHint: point ? Math.round(kmToMiles(kmBetween(origin, point))) : null,
        };
      });
    }
    return { payload: { events: rows }, tour: null };
  }
  return { payload: { error: "Unknown tool" }, tour: null };
}

function systemPrompt(hints: EcoBotHints): string {
  const hintLines = [
    hints.originLabel && hints.originLat != null && hints.originLng != null
      ? `Member start: ${hints.originLabel} (${hints.originLat.toFixed(3)}, ${hints.originLng.toFixed(3)}).`
      : hints.originLabel
        ? `Member start (unresolved): ${hints.originLabel}.`
        : "No start place set in the planner fields.",
    hints.maxDays ? `Preferred trip length: ${hints.maxDays} days.` : "",
    hints.country ? `Preferred country: ${hints.country}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `You are the EcoMapPlus eco-community bot. You only use facts from this site's atlas tools: villages, visit doors, legal form, daily life, and dated public events.

Help the member:
- Answer questions about eco-communities on the atlas.
- Plan trips that hit many dated events in a short window while travelling the fewest miles.

When they want a plan, itinerary, hop, or “as many events as possible”, call plan_event_tour. Prefer that tool over guessing routes. Distances in the tool are miles.

Write in plain, compact English. Name villages, dates, event titles, and miles between stops. Tell them to confirm with the village — programmes move. Do not invent events, coordinates, prices, or openings. If a tool returns nothing, say so.

${hintLines}

Today is ${new Date().toISOString().slice(0, 10)}.`;
}

function fallbackText(tour: EventTour | null): string {
  if (!tour) {
    return "The atlas chat is paused in this environment. Use Plan a tour above — that still packs dated events into the fewest miles.";
  }
  const lines = tour.stops.map((stop, i) => {
    const events = stop.events.map((event) => event.title).join("; ");
    const miles = i === 0 ? (tour.origin ? `${stop.milesFromPrev} miles from ${tour.origin.label}` : "start") : `${stop.milesFromPrev} miles`;
    return `${stop.arrive} · ${stop.name} · ${events} · ${miles}`;
  });
  return `A ${tour.days}-day loop in ${tour.cluster}: ${tour.eventCount} events, ${tour.villageCount} eco-communities, ${tour.milesLabel} of travel.\n\n${lines.join("\n")}\n\nConfirm each date with the village.`;
}

export const askEcoBot = createServerFn({ method: "POST" })
  .validator((input: { message?: unknown; history?: unknown; hints?: unknown }) => ({
    message: typeof input.message === "string" ? clip(input.message, MAX_MESSAGE) : "",
    history: parseHistory(input.history),
    hints: parseHints(input.hints),
  }))
  .handler(async ({ data }): Promise<EcoBotResult> => {
    if (!data.message) return { ok: false, text: "", tour: null, error: "Write a question first." };

    const apiKey = process.env.XAI_API_KEY;
    const wantsPlan = /\b(plan|itinerar|route|miles|tour|events? hop|fewest|shortest)\b/i.test(data.message);

    let tour: EventTour | null = null;
    if (!apiKey) {
      if (wantsPlan) {
        const planned = await planEventTour({
          originQuery: data.hints.originLabel,
          origin:
            data.hints.originLat != null && data.hints.originLng != null && data.hints.originLabel
              ? { label: data.hints.originLabel, lat: data.hints.originLat, lng: data.hints.originLng }
              : null,
          maxDays: data.hints.maxDays,
          country: data.hints.country,
        });
        return { ok: true, text: fallbackText(planned), tour: planned };
      }
      return {
        ok: false,
        text: "",
        tour: null,
        error: "Atlas chat is unavailable here. The event tour planner still works.",
      };
    }

    const messages: GrokMessage[] = [
      { role: "system", content: systemPrompt(data.hints) },
      ...data.history.map((row) => ({ role: row.role, content: row.content })),
      { role: "user", content: data.message },
    ];

    for (let round = 0; round < MAX_ROUNDS; round++) {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "grok-4.5",
          temperature: 0.3,
          max_tokens: 1400,
          tools: TOOLS,
          tool_choice: "auto",
          messages,
        }),
      });
      if (!res.ok) {
        const planned = wantsPlan
          ? (
              await runPlan(
                {
                  origin_query: data.hints.originLabel,
                  origin_lat: data.hints.originLat,
                  origin_lng: data.hints.originLng,
                  origin_label: data.hints.originLabel,
                  max_days: data.hints.maxDays,
                  country: data.hints.country,
                },
                data.hints,
              )
            ).tour
          : null;
        if (planned) return { ok: true, text: fallbackText(planned), tour: planned };
        return { ok: false, text: "", tour: null, error: "The atlas bot could not answer just now." };
      }
      const body = (await res.json()) as {
        choices?: { message?: GrokMessage }[];
      };
      const message = body.choices?.[0]?.message;
      if (!message) return { ok: false, text: "", tour, error: "Empty answer." };

      if (message.tool_calls?.length) {
        messages.push({
          role: "assistant",
          content: message.content ?? "",
          tool_calls: message.tool_calls,
        });
        for (const call of message.tool_calls) {
          const result = await runTool(call.function.name, call.function.arguments, data.hints);
          if (result.tour) tour = result.tour;
          messages.push({
            role: "tool",
            tool_call_id: call.id,
            content: JSON.stringify(result.payload),
          });
        }
        continue;
      }

      const text = (message.content ?? "").trim();
      return {
        ok: Boolean(text) || Boolean(tour),
        text: text || fallbackText(tour),
        tour,
      };
    }

    return { ok: Boolean(tour), text: fallbackText(tour), tour, error: tour ? undefined : "Still working through the atlas — try a shorter question." };
  });
