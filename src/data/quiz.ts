import { communities, type Community } from "./communities";
import { hasPublicArrival } from "./public-flags";
import { farmFor } from "./farms";
import { fundingFor, inferKind } from "./funding";
import { governanceFor, type GovernanceModel } from "./governance";
import { landFor } from "./land-ownership";
import { legalFormsFor } from "./legal-entities";
import { easeLabels, visitJoinFor } from "./visit-join";
import { hasVolunteerProgram } from "./volunteer-programs";

export type Importance = 1 | 2 | 3 | 4 | 5;

export const IMPORTANCE_VALUES: Importance[] = [1, 2, 3, 4, 5];

export const importanceLabels: Record<Importance, string> = {
  1: "Unimportant",
  2: "Slightly important",
  3: "Neutral",
  4: "Important",
  5: "Very important",
};

export const DEFAULT_IMPORTANCE: Importance = 3;

export const MAX_ANSWER_LENGTH = 500;

export type QuizQuestionId =
  | "place"
  | "visit"
  | "join"
  | "volunteer"
  | "shared"
  | "spiritual"
  | "land"
  | "small"
  | "commons"
  | "livelihood"
  | "farm"
  | "sharedTitle";

export type QuizRanks = Record<QuizQuestionId, Importance>;
export type QuizAnswers = Record<QuizQuestionId, string>;

export type QuizQuestion = {
  id: QuizQuestionId;
  prompt: string;
  hint: string;
  placeholder: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "place",
    prompt: "Where do you want to live?",
    hint: "A country, a region, a city, a climate, whatever place-words you actually mean.",
    placeholder: "California, Portugal, a warm coast…",
  },
  {
    id: "visit",
    prompt: "How do you want to visit?",
    hint: "A public tour, a guesthouse you can book, or a private community you would not drop in on.",
    placeholder: "A guesthouse I can book, or a public tour",
  },
  {
    id: "join",
    prompt: "Do you want a path from visitor to resident?",
    hint: "A published join process, a trial stay, or buying a house, versus visiting only.",
    placeholder: "Yes, a trial stay, then membership",
  },
  {
    id: "volunteer",
    prompt: "Do you want a volunteer, internship, or work-exchange program?",
    hint: "Villages with a dedicated signup page on their own site score highest here.",
    placeholder: "A WWOOF or internship I can apply to",
  },
  {
    id: "shared",
    prompt: "How should residents make decisions?",
    hint: "Consensus, sociocracy, a village assembly, a co-op vote, or a board, a founder, an HOA.",
    placeholder: "Consensus or sociocracy",
  },
  {
    id: "spiritual",
    prompt: "Spiritual or secular?",
    hint: "A religious society, ashram, or faith-based order, or a community with no religious life.",
    placeholder: "Secular, no religious order",
  },
  {
    id: "land",
    prompt: "How much land, or what kind of landscape?",
    hint: "Acres, a farm, a forest, or an urban block. Write a number if you have one.",
    placeholder: "A farm, at least 40 acres",
  },
  {
    id: "small",
    prompt: "How many people should live there?",
    hint: "A handful, a few dozen, a few hundred. Member counts as published.",
    placeholder: "Around 30 people",
  },
  {
    id: "commons",
    prompt: "What legal form do you want?",
    hint: "A housing co-op, land trust, kibbutz, charitable trust, or an HOA and a private deed.",
    placeholder: "A housing co-op or land trust",
  },
  {
    id: "livelihood",
    prompt: "What work or livelihood do you want on site?",
    hint: "Farms, workshops, guesthouses, courses, or none, if you are not looking to work there.",
    placeholder: "A farm, a guesthouse, or workshops that pay the bills",
  },
  {
    id: "farm",
    prompt: "What types of plants and animals do you want on site?",
    hint: "Crops, a food forest, dairy cows, chickens, goats, or no farm if you do not want livestock or gardens.",
    placeholder: "A vegetable garden, fruit trees, and goats",
  },
  {
    id: "sharedTitle",
    prompt: "Shared title, or private house lots?",
    hint: "One nonprofit, trust, or co-op holding the land, versus split freehold and body-corporate sites.",
    placeholder: "One shared title, not private house lots",
  },
];

export function defaultRanks(): QuizRanks {
  return {
    place: DEFAULT_IMPORTANCE,
    visit: DEFAULT_IMPORTANCE,
    join: DEFAULT_IMPORTANCE,
    volunteer: DEFAULT_IMPORTANCE,
    shared: DEFAULT_IMPORTANCE,
    spiritual: DEFAULT_IMPORTANCE,
    land: DEFAULT_IMPORTANCE,
    small: DEFAULT_IMPORTANCE,
    commons: DEFAULT_IMPORTANCE,
    livelihood: DEFAULT_IMPORTANCE,
    farm: DEFAULT_IMPORTANCE,
    sharedTitle: DEFAULT_IMPORTANCE,
  };
}

export function defaultAnswers(): QuizAnswers {
  return {
    place: "",
    visit: "",
    join: "",
    volunteer: "",
    shared: "",
    spiritual: "",
    land: "",
    small: "",
    commons: "",
    livelihood: "",
    farm: "",
    sharedTitle: "",
  };
}

export function isImportance(value: unknown): value is Importance {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
}

export function parseRanks(raw: unknown): QuizRanks | null {
  if (!raw || typeof raw !== "object") return null;
  const source = raw as Record<string, unknown>;
  const next = defaultRanks();
  let any = false;
  for (const question of quizQuestions) {
    const value = source[question.id];
    if (isImportance(value)) {
      next[question.id] = value;
      any = true;
    }
  }
  return any ? next : null;
}

export function parseAnswers(raw: unknown): QuizAnswers | null {
  if (!raw || typeof raw !== "object") return null;
  const source = raw as Record<string, unknown>;
  const next = defaultAnswers();
  let any = false;
  for (const question of quizQuestions) {
    const value = source[question.id];
    if (typeof value === "string") {
      next[question.id] = value.slice(0, MAX_ANSWER_LENGTH);
      if (value.trim()) any = true;
    }
  }
  return any || Object.keys(source).length > 0 ? next : null;
}

export function hasWrittenAnswers(answers: QuizAnswers): boolean {
  return quizQuestions.some((question) => usableAnswer(answers[question.id]));
}

const SHARED_MODELS = new Set<GovernanceModel>([
  "consensus",
  "sociocracy",
  "assembly",
  "cooperative",
  "indigenous-assembly",
  "common-purse",
]);

const COMMONS_FORMS = new Set([
  "Housing cooperative",
  "Community land trust",
  "Community Benefit Society",
  "Charitable trust",
  "Income-sharing",
  "501(d) corporation",
  "Kibbutz",
]);

const HOA_FORMS = new Set(["Body corporate", "Homeowners association", "Strata title"]);

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "and",
  "or",
  "but",
  "if",
  "i",
  "im",
  "id",
  "we",
  "my",
  "our",
  "me",
  "it",
  "its",
  "is",
  "be",
  "as",
  "so",
  "do",
  "no",
  "yes",
  "not",
  "with",
  "that",
  "this",
  "from",
  "into",
  "want",
  "wanna",
  "need",
  "like",
  "would",
  "could",
  "should",
  "prefer",
  "please",
  "really",
  "very",
  "just",
  "about",
  "around",
  "some",
  "any",
  "more",
  "than",
  "then",
  "live",
  "living",
  "life",
  "place",
  "somewhere",
  "community",
  "village",
  "ecovillage",
  "people",
  "person",
  "there",
  "here",
  "have",
  "has",
  "also",
  "too",
  "can",
  "able",
]);

function clamp01(value: number): number {
  if (value <= 0) return 0;
  if (value >= 1) return 1;
  return value;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function usableAnswer(text: string | undefined): boolean {
  const n = normalize(text ?? "");
  if (n.length < 2) return false;
  if (
    /^(n a|na|none|nothing|skip|idk|dunno|whatever|unsure|not sure|no preference|doesnt matter|does not matter|dont care|do not care|either|any|anywhere|n\/a)$/.test(
      n,
    )
  ) {
    return false;
  }
  return true;
}

type Polarity = "yes" | "no" | "skip";

function polarity(text: string): Polarity {
  const n = normalize(text);
  if (!usableAnswer(n)) return "skip";
  if (
    /\b(doesnt matter|does not matter|dont care|do not care|no preference|either one|either|whatever|not sure|no opinion)\b/.test(
      n,
    )
  ) {
    return "skip";
  }
  const no =
    /\b(no|not|never|avoid|without|hate|none|nope|dont|do not|isnt|is not|wont|will not)\b/.test(n);
  const yes =
    /\b(yes|yeah|yep|sure|definitely|absolutely|must|need|want|please|ideally|preferably)\b/.test(n);
  if (no && !yes) return "no";
  if (/\b(dont want|do not want|not want|no thanks|rather not)\b/.test(n)) return "no";
  if (yes && !no) return "yes";
  if (no && yes) return "no";
  return "yes";
}

function directed(fit: number, pole: Polarity): number {
  if (pole === "skip") return 0.5;
  if (pole === "no") return 1 - fit;
  return fit;
}

function extractNumber(text: string): number | null {
  const ha = text.match(/(\d[\d,]*)(?:\.\d+)?\s*(ha|hectares?)\b/i);
  if (ha) {
    const n = Number(ha[1]!.replace(/,/g, ""));
    if (Number.isFinite(n) && n > 0) return Math.round(n * 2.47);
  }
  const match = text.match(/(\d[\d,]*)(?:\.\d+)?\s*(k|thousand)?/i);
  if (!match) return null;
  const n = Number(match[1]!.replace(/,/g, ""));
  if (!Number.isFinite(n) || n <= 0) return null;
  if (match[2]) return n * 1000;
  return n;
}

function closeness(actual: number, wanted: number): number {
  if (wanted <= 0) return 0.5;
  const ratio = actual / wanted;
  if (ratio >= 0.7 && ratio <= 1.4) return 1;
  if (ratio >= 0.5 && ratio <= 2) return 0.75;
  if (ratio >= 0.33 && ratio <= 3) return 0.45;
  if (ratio >= 0.2 && ratio <= 5) return 0.22;
  return 0.08;
}

function tokens(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((tok) => tok.length >= 3 && !STOPWORDS.has(tok));
}

function overlap(answer: string, hay: string): number {
  const toks = tokens(answer);
  if (toks.length === 0) return 0;
  const h = ` ${hay} `;
  let hits = 0;
  for (const tok of toks) {
    if (h.includes(` ${tok} `)) hits += 1;
  }
  return hits / toks.length;
}

function visitFit(community: Community): number {
  return visitJoinFor(community.slug).visit / 5;
}

function joinFit(community: Community): number {
  return visitJoinFor(community.slug).join / 5;
}

function volunteerFit(community: Community): number {
  return hasVolunteerProgram(community.slug) ? 1 : 0.12;
}

function sharedFit(community: Community): number {
  const model = governanceFor(community.slug).model;
  if (SHARED_MODELS.has(model)) return 1;
  if (model === "hybrid") return 0.55;
  if (model === "federation") return 0.5;
  if (model === "planner-manager") return 0.4;
  if (model === "spiritual") return 0.25;
  if (model === "board") return 0.2;
  if (model === "founder") return 0.15;
  if (model === "hoa") return 0.08;
  return 0.3;
}

function spiritualFit(community: Community): number {
  const governance = governanceFor(community.slug);
  if (governance.model === "spiritual") return 1;
  const forms = legalFormsFor(community.slug);
  if (forms.includes("Religious society") || forms.includes("501(d) corporation")) return 0.9;
  const tenure = landFor(community.slug).tenure.toLowerCase();
  if (/religious|church|ashram|faith/.test(tenure)) return 0.75;
  return 0.08;
}

function landFit(community: Community): number {
  const acres = community.acres;
  if (acres == null || acres <= 0) return 0;
  if (acres >= 2000) return 1;
  if (acres >= 500) return 0.9;
  if (acres >= 150) return 0.75;
  if (acres >= 40) return 0.55;
  if (acres >= 10) return 0.3;
  return 0.12;
}

function smallFit(community: Community): number {
  const n = community.members;
  if (n <= 20) return 1;
  if (n <= 40) return 0.9;
  if (n <= 80) return 0.55;
  if (n <= 150) return 0.28;
  if (n <= 300) return 0.12;
  return 0.04;
}

function commonsFit(community: Community): number {
  const forms = legalFormsFor(community.slug);
  if (forms.some((form) => COMMONS_FORMS.has(form))) return 1;
  const tenure = landFor(community.slug).tenure.toLowerCase();
  if (/cooperative|land trust|charitable trust|common title|commons/.test(tenure)) return 0.85;
  return 0.12;
}

function livelihoodFit(community: Community): number {
  const funding = fundingFor(community.slug);
  const kinds = new Set<string>();
  for (const item of funding.grants) kinds.add(inferKind(item, "grants"));
  for (const item of funding.private) kinds.add(inferKind(item, "private"));
  if (kinds.has("business") || kinds.has("courses") || kinds.has("currency")) return 1;
  if (kinds.has("member-equity")) return 0.35;
  const text = community.businessModel.toLowerCase();
  if (
    /farm|workshop|guesthouse|café|cafe|craft|bakery|hammock|course|internship|dairy|greenhouse/.test(
      text,
    )
  ) {
    return 0.65;
  }
  return 0.15;
}

function sharedTitleFit(community: Community): number {
  const land = landFor(community.slug);
  if (land.complexity === "simple") {
    if (/freehold|private farm|body corporate|homeowners/.test(land.tenure.toLowerCase())) return 0.2;
    return 1;
  }
  return 0.22;
}

type PlaceKind = "name" | "locality" | "region" | "country" | "group" | "climate";

type PlaceEntry = {
  key: string;
  kind: PlaceKind;
  label: string;
  slugs: Set<string>;
};

const EUROPE = new Set([
  "Croatia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Netherlands",
  "Norway",
  "Portugal",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "Turkey",
]);
const ASIA = new Set([
  "China",
  "India",
  "Indonesia",
  "Israel",
  "Japan",
  "Philippines",
  "South Korea",
  "Sri Lanka",
  "Taiwan",
  "Thailand",
  "Turkey",
]);
const AFRICA = new Set([
  "Benin",
  "Burkina Faso",
  "Cameroon",
  "Egypt",
  "Eswatini",
  "Ethiopia",
  "Ghana",
  "Kenya",
  "Madagascar",
  "Namibia",
  "Senegal",
  "South Africa",
  "Uganda",
  "Zambia",
  "Zimbabwe",
]);
const NORTH_AMERICA = new Set(["United States", "Canada", "Mexico"]);
const CENTRAL_AMERICA = new Set([
  "Belize",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Nicaragua",
]);
const SOUTH_AMERICA = new Set([
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Peru",
  "Uruguay",
]);
const OCEANIA = new Set(["Australia", "New Zealand"]);
const SCANDINAVIA = new Set(["Denmark", "Sweden", "Norway", "Finland", "Iceland"]);
const TROPICAL = new Set([
  "Belize",
  "Benin",
  "Brazil",
  "Burkina Faso",
  "Cameroon",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "Ethiopia",
  "Ghana",
  "Guatemala",
  "India",
  "Indonesia",
  "Kenya",
  "Madagascar",
  "Mexico",
  "Nicaragua",
  "Peru",
  "Philippines",
  "Senegal",
  "Sri Lanka",
  "Thailand",
  "Uganda",
  "Zambia",
  "Zimbabwe",
]);
const MEDITERRANEAN = new Set(["Spain", "Italy", "Portugal", "Turkey", "Israel", "Croatia"]);
const DESERT = new Set(["Egypt", "Namibia"]);
const COLD = new Set(["Iceland", "Norway", "Finland", "Sweden", "Estonia", "Russia", "Canada"]);

function slugsIn(countries: Set<string>, extra?: (c: Community) => boolean): Set<string> {
  const slugs = new Set<string>();
  for (const community of communities) {
    if (countries.has(community.country) || extra?.(community)) slugs.add(community.slug);
  }
  return slugs;
}

const placeEntries: PlaceEntry[] = [];
const placeByKey = new Map<string, PlaceEntry[]>();

function addPlace(key: string, kind: PlaceKind, label: string, slugs: Iterable<string>) {
  const k = normalize(key);
  if (k.length < 2) return;
  const set = slugs instanceof Set ? slugs : new Set(slugs);
  if (set.size === 0) return;
  const entry: PlaceEntry = { key: k, kind, label, slugs: set };
  placeEntries.push(entry);
  const list = placeByKey.get(k);
  if (list) list.push(entry);
  else placeByKey.set(k, [entry]);
}

function buildPlaceIndex() {
  const byCountry = new Map<string, string[]>();
  const byRegion = new Map<string, string[]>();
  for (const community of communities) {
    const countryList = byCountry.get(community.country) ?? [];
    countryList.push(community.slug);
    byCountry.set(community.country, countryList);
    const regionList = byRegion.get(community.region) ?? [];
    regionList.push(community.slug);
    byRegion.set(community.region, regionList);
    addPlace(community.name, "name", community.name, [community.slug]);
    const city = community.location.split(",")[0]?.trim();
    if (city && city.length > 2) addPlace(city, "locality", city, [community.slug]);
  }
  for (const [country, slugs] of byCountry) {
    addPlace(country, "country", country, slugs);
  }
  for (const [region, slugs] of byRegion) {
    addPlace(region, "region", region, slugs);
    const head = region.split(",")[0]?.trim();
    if (head && normalize(head) !== normalize(region)) addPlace(head, "region", region, slugs);
  }

  addPlace("usa", "country", "United States", byCountry.get("United States") ?? []);
  addPlace("us", "country", "United States", byCountry.get("United States") ?? []);
  addPlace("america", "country", "United States", byCountry.get("United States") ?? []);
  addPlace("united states", "country", "United States", byCountry.get("United States") ?? []);
  addPlace("the states", "country", "United States", byCountry.get("United States") ?? []);
  addPlace("uk", "country", "United Kingdom", byCountry.get("United Kingdom") ?? []);
  addPlace("britain", "country", "United Kingdom", byCountry.get("United Kingdom") ?? []);
  addPlace("great britain", "country", "United Kingdom", byCountry.get("United Kingdom") ?? []);
  addPlace("england", "country", "United Kingdom", byCountry.get("United Kingdom") ?? []);
  addPlace("scotland", "region", "Scotland, UK", byRegion.get("Scotland, UK") ?? []);
  addPlace("wales", "region", "Pembrokeshire, Wales", byRegion.get("Pembrokeshire, Wales") ?? []);
  addPlace("holland", "country", "Netherlands", byCountry.get("Netherlands") ?? []);
  addPlace("nz", "country", "New Zealand", byCountry.get("New Zealand") ?? []);
  addPlace("aotearoa", "country", "New Zealand", byCountry.get("New Zealand") ?? []);
  addPlace("korea", "country", "South Korea", byCountry.get("South Korea") ?? []);

  addPlace("europe", "group", "Europe", slugsIn(EUROPE));
  addPlace("european", "group", "Europe", slugsIn(EUROPE));
  addPlace("asia", "group", "Asia", slugsIn(ASIA));
  addPlace("asian", "group", "Asia", slugsIn(ASIA));
  addPlace("africa", "group", "Africa", slugsIn(AFRICA));
  addPlace("african", "group", "Africa", slugsIn(AFRICA));
  addPlace("north america", "group", "North America", slugsIn(NORTH_AMERICA));
  addPlace("central america", "group", "Central America", slugsIn(CENTRAL_AMERICA));
  addPlace("south america", "group", "South America", slugsIn(SOUTH_AMERICA));
  addPlace("latin america", "group", "Latin America", slugsIn(new Set(["Mexico", ...CENTRAL_AMERICA, ...SOUTH_AMERICA])));
  addPlace("oceania", "group", "Oceania", slugsIn(OCEANIA));
  addPlace("australasia", "group", "Oceania", slugsIn(OCEANIA));
  addPlace("scandinavia", "group", "Scandinavia", slugsIn(SCANDINAVIA));
  addPlace("nordic", "group", "Scandinavia", slugsIn(SCANDINAVIA));
  addPlace("baja", "region", "Baja California", [
    ...(byRegion.get("Baja California, Mexico") ?? []),
    ...(byRegion.get("Baja California Sur, Mexico") ?? []),
  ]);
  addPlace("west coast", "group", "US West Coast", slugsIn(new Set(), (c) => /California|Oregon|Washington, USA/.test(c.region)));
  addPlace("pacific northwest", "group", "Pacific Northwest", slugsIn(new Set(), (c) => /Oregon|Washington, USA|British Columbia/.test(c.region)));
  addPlace("new england", "group", "New England", slugsIn(new Set(), (c) => /Maine|Massachusetts/.test(c.region)));

  addPlace("tropical", "climate", "tropical", slugsIn(TROPICAL));
  addPlace("jungle", "climate", "tropical", slugsIn(TROPICAL));
  addPlace("rainforest", "climate", "tropical", slugsIn(TROPICAL));
  addPlace("mediterranean", "climate", "Mediterranean", slugsIn(MEDITERRANEAN, (c) => /California/.test(c.region)));
  addPlace("desert", "climate", "desert", slugsIn(DESERT, (c) => /Arizona|Sonora|Hardap|Sharqia|Sharqiya/.test(c.region)));
  addPlace("arid", "climate", "desert", slugsIn(DESERT, (c) => /Arizona|Sonora|Hardap/.test(c.region)));
  addPlace("cold", "climate", "cold", slugsIn(COLD));
  addPlace("snow", "climate", "cold", slugsIn(COLD));
  addPlace("arctic", "climate", "cold", slugsIn(COLD));
  addPlace(
    "warm",
    "climate",
    "warm",
    slugsIn(new Set([...TROPICAL, ...MEDITERRANEAN, ...DESERT]), (c) => /California|Baja|Florida|Hawaii|Sonora|Jalisco|Yucat/.test(c.region)),
  );
  addPlace(
    "hot",
    "climate",
    "warm",
    slugsIn(new Set([...TROPICAL, ...MEDITERRANEAN, ...DESERT]), (c) => /California|Baja|Florida|Sonora|Jalisco|Yucat/.test(c.region)),
  );
}

buildPlaceIndex();

const KIND_RANK: Record<PlaceKind, number> = {
  name: 4,
  locality: 3,
  region: 3,
  country: 3,
  group: 2,
  climate: 1,
};

const placeKeysLongest = [...placeByKey.keys()].sort((a, b) => b.length - a.length);
const placeHitCache = new Map<string, PlaceEntry[]>();

function findPlaceHits(answer: string): PlaceEntry[] {
  const n = normalize(answer);
  if (!n) return [];
  const cached = placeHitCache.get(n);
  if (cached) return cached;
  let remaining = ` ${n} `;
  const hits: PlaceEntry[] = [];
  for (const key of placeKeysLongest) {
    const needle = ` ${key} `;
    if (!remaining.includes(needle)) continue;
    remaining = remaining.split(needle).join(" ");
    const entries = placeByKey.get(key);
    if (entries) hits.push(...entries);
  }
  placeHitCache.set(n, hits);
  return hits;
}

function placeFit(community: Community, answer: string): { fit: number; label: string | null } {
  const hits = findPlaceHits(answer);
  if (hits.length === 0) {
    const hay = normalize(
      `${community.name} ${community.location} ${community.region} ${community.country}`,
    );
    const o = overlap(answer, hay);
    if (o >= 0.5) return { fit: 0.7 + 0.3 * o, label: community.location };
    return { fit: 0.5, label: null };
  }
  const precise = hits.filter((h) => KIND_RANK[h.kind] >= 3);
  const groups = hits.filter((h) => h.kind === "group");
  const climates = hits.filter((h) => h.kind === "climate");
  const pool = precise.length > 0 ? precise : groups.length > 0 ? groups : climates;
  const matched = pool.filter((h) => h.slugs.has(community.slug));
  if (precise.length === 0 && groups.length > 0 && climates.length > 0) {
    const inGroup = groups.some((h) => h.slugs.has(community.slug));
    const inClimate = climates.some((h) => h.slugs.has(community.slug));
    if (inGroup && inClimate) {
      return { fit: 1, label: community.country };
    }
    return { fit: 0.08, label: null };
  }
  if (matched.length > 0) {
    const best = matched.sort((a, b) => KIND_RANK[b.kind] - KIND_RANK[a.kind])[0]!;
    const strength = best.kind === "climate" || best.kind === "group" ? 0.86 : 1;
    return { fit: strength, label: community.location };
  }
  return { fit: 0.06, label: null };
}

const GOVERNANCE_ALIASES: { pattern: RegExp; model: GovernanceModel; label: string }[] = [
  { pattern: /\bsociocrac|\bcircles?\b/, model: "sociocracy", label: "Sociocracy" },
  { pattern: /\bconsensus\b|\bconsent\b/, model: "consensus", label: "Consensus" },
  { pattern: /\bassembly\b|\bvillage meeting\b/, model: "assembly", label: "Village assembly" },
  { pattern: /\bcommon purse\b|\bincome shar/, model: "common-purse", label: "Common purse" },
  { pattern: /\bindigenous\b|\btribal\b/, model: "indigenous-assembly", label: "Indigenous assembly" },
  { pattern: /\bfederation\b|\bfederated\b/, model: "federation", label: "Federation" },
  { pattern: /\bplanner[- ]?manager\b/, model: "planner-manager", label: "Planner-manager" },
  { pattern: /\bhoa\b|\bhomeowners\b|\bbody corporate\b|\bstrata\b/, model: "hoa", label: "HOA" },
  { pattern: /\bfounder\b|\bguru\b/, model: "founder", label: "Founder-stewarded" },
  { pattern: /\bboard\b|\btrustees\b/, model: "board", label: "Board and staff" },
  { pattern: /\bco-?op(erative)? democracy\b|\bco-?operative\b/, model: "cooperative", label: "Cooperative democracy" },
  { pattern: /\bspiritual order\b|\belder/, model: "spiritual", label: "Spiritual order" },
];

function governanceAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const gov = governanceFor(community.slug);
  const mentioned: { model: GovernanceModel; label: string }[] = [];
  for (const alias of GOVERNANCE_ALIASES) {
    if (alias.pattern.test(n)) mentioned.push({ model: alias.model, label: alias.label });
  }
  if (mentioned.length > 0) {
    const hit = mentioned.find((row) => row.model === gov.model);
    if (hit) return { fit: 1, label: gov.modelLabel };
    if (mentioned.some((row) => SHARED_MODELS.has(row.model)) && SHARED_MODELS.has(gov.model)) {
      return { fit: 0.72, label: gov.modelLabel };
    }
    return { fit: 0.1, label: null };
  }
  const pole = polarity(answer);
  if (/\bshared\b|\bresidents decide\b|\beveryone votes\b|\bhorizontal\b/.test(n)) {
    return { fit: directed(sharedFit(community), pole === "skip" ? "yes" : pole), label: gov.modelLabel };
  }
  return { fit: directed(sharedFit(community), pole), label: pole === "no" ? null : gov.modelLabel };
}

const FORM_ALIASES: { pattern: RegExp; forms: string[]; label: string; commons: boolean | null }[] = [
  { pattern: /\bland trust\b|\bclt\b/, forms: ["Community land trust"], label: "Community land trust", commons: true },
  { pattern: /\bhousing co-?op|\bco-?operative\b|\bcoop\b/, forms: ["Housing cooperative"], label: "Housing cooperative", commons: true },
  { pattern: /\bkibbutz\b/, forms: ["Kibbutz"], label: "Kibbutz", commons: true },
  { pattern: /\bcommunity benefit\b|\bcbs\b/, forms: ["Community Benefit Society"], label: "Community Benefit Society", commons: true },
  { pattern: /\bcharitable trust\b/, forms: ["Charitable trust"], label: "Charitable trust", commons: true },
  { pattern: /\bcommon purse\b|\b501\s*\(?d\)?|\bincome shar/, forms: ["501(d) corporation", "Income-sharing"], label: "Income-sharing", commons: true },
  { pattern: /\bhoa\b|\bhomeowners\b|\bbody corporate\b|\bstrata\b|\bcondo\b/, forms: ["Body corporate"], label: "HOA / body corporate", commons: false },
  { pattern: /\breligious society\b|\bchurch\b|\bashram\b/, forms: ["Religious society"], label: "Religious society", commons: null },
  { pattern: /\b501\s*\(?c\)?\s*\(?3\)?|\bcharity\b|\bnonprofit\b/, forms: ["501(c)(3)"], label: "Nonprofit / charity", commons: null },
];

function commonsAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const have = legalFormsFor(community.slug);
  const mentioned = FORM_ALIASES.filter((row) => row.pattern.test(n));
  if (mentioned.length > 0) {
    const hit = mentioned.find((row) => row.forms.some((form) => have.includes(form)) || (row.commons === false && have.some((f) => HOA_FORMS.has(f) || /homeowners|body corporate|strata/i.test(community.legalCategory + " " + landFor(community.slug).tenure))));
    if (hit) return { fit: 1, label: hit.label };
    const wantsCommons = mentioned.some((row) => row.commons === true);
    const wantsHoa = mentioned.some((row) => row.commons === false);
    if (wantsCommons && !wantsHoa) return { fit: commonsFit(community), label: have.find((f) => COMMONS_FORMS.has(f)) ?? null };
    if (wantsHoa && !wantsCommons) {
      const hoa = have.some((f) => HOA_FORMS.has(f)) || /hoa|homeowners|body corporate|strata/i.test(`${community.legalCategory} ${landFor(community.slug).tenure}`);
      return { fit: hoa ? 1 : 0.1, label: hoa ? "HOA / body corporate" : null };
    }
  }
  const pole = polarity(answer);
  const fit = directed(commonsFit(community), pole);
  const hit = have.find((form) => COMMONS_FORMS.has(form));
  return { fit, label: pole === "no" ? null : hit ?? null };
}

function sizeAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const label = `${community.members} members`;
  let wanted = extractNumber(answer);
  if (wanted != null && /acre|hectare|\bha\b/.test(n) && !/people|person|member|resident/.test(n)) {
    wanted = null;
  }
  if (wanted == null) {
    if (/\b(handful|tiny|very small|under 20|less than 20|a dozen)\b/.test(n)) wanted = 12;
    else if (/\b(few dozen|small|intimate)\b/.test(n)) wanted = 30;
    else if (/\b(medium|village sized|moderate size)\b/.test(n)) wanted = 80;
    else if (/\b(large|hundreds|a few hundred|town)\b/.test(n)) wanted = 250;
    else if (/\b(thousand|huge|very large)\b/.test(n)) wanted = 800;
  }
  if (wanted != null) return { fit: closeness(community.members, wanted), label };
  if (/\bsmall\b|\bintimate\b|\bfew\b/.test(n)) return { fit: smallFit(community), label };
  if (/\blarge\b|\bbig\b|\bhuge\b|\bmany people\b/.test(n)) return { fit: 1 - smallFit(community), label };
  return { fit: 0.5, label: null };
}

function landAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const acres = community.acres;
  const label = acres ? `${acres.toLocaleString()} acres` : null;
  let wanted = extractNumber(answer);
  if (wanted != null && /people|person|member|resident/.test(n) && !/acre|hectare|\bha\b/.test(n)) {
    wanted = null;
  }
  if (wanted != null) {
    if (acres == null || acres <= 0) return { fit: 0.05, label: null };
    return { fit: closeness(acres, wanted), label };
  }
  if (/\burban\b|\bcity\b|\btownhouse\b|\bblock\b|\bapartment\b|\bsmall lot\b/.test(n)) {
    return { fit: acres == null || acres < 10 ? 1 : acres < 40 ? 0.45 : 0.08, label };
  }
  if (/\bfarm\b|\brural\b|\bcountryside\b|\bforest\b|\blots of land\b|\bplenty of land\b|\bwilderness\b|\blandscape\b/.test(n)) {
    return { fit: landFit(community), label };
  }
  const pole = polarity(answer);
  if (pole === "no") return { fit: 1 - landFit(community), label };
  return { fit: landFit(community), label };
}

function livelihoodAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  if (/\b(none|no work|retired|not looking to work|dont need work|do not need work)\b/.test(n)) {
    return { fit: 1 - livelihoodFit(community), label: null };
  }
  const hay = normalize(`${community.businessModel} ${community.summary} ${community.name}`);
  const o = overlap(answer, hay);
  const base = livelihoodFit(community);
  if (o >= 0.34) return { fit: clamp01(0.55 * base + 0.45 * (0.4 + 0.6 * o)), label: "On-site livelihood" };
  return { fit: directed(base, polarity(answer)), label: base >= 0.55 ? "On-site livelihood" : null };
}

function spiritualAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const gov = governanceFor(community.slug);
  const faithWord =
    /\b(christian|catholic|protestant|quaker|shaker|jewish|buddhist|hindu|muslim|islam|sufi|ashram|faith|church|temple|monastery|spiritual|religious|yoga)\b/.test(
      n,
    );
  const secularWord = /\b(secular|atheist|no religion|non religious|not spiritual|not religious)\b/.test(n);
  let pole: Polarity = polarity(answer);
  if (secularWord && !faithWord) pole = "no";
  else if (faithWord && !secularWord) pole = "yes";
  const fit = directed(spiritualFit(community), pole);
  const label =
    gov.model === "spiritual" ? "Spiritual order" : legalFormsFor(community.slug).includes("Religious society") ? "Faith-based form" : null;
  return { fit, label: pole === "no" ? (fit >= 0.55 ? "Secular" : null) : label };
}

function visitAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const pole = polarity(answer);
  const privateVisit = /\b(private|invitation|invite only|already know|dont need to visit|do not need to visit|not visiting)\b/.test(n);
  const easyVisit = /\b(tour|guesthouse|guest house|book|public|stranger|museum|drop in|stay a week|hostel|airbnb)\b/.test(n);
  const used = privateVisit && !easyVisit ? "no" : easyVisit && !privateVisit ? "yes" : pole;
  const fit = directed(visitFit(community), used === "skip" ? "yes" : used);
  return {
    fit,
    label: fit >= 0.55 ? `Visit: ${easeLabels[visitJoinFor(community.slug).visit]}` : null,
  };
}

function joinAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  const pole = polarity(answer);
  const visitingOnly = /\b(just visit|only visit|not looking to join|tourist|not a resident|dont want to join|do not want to join)\b/.test(n);
  const joining = /\b(move in|become a member|live there|resident|join|membership|buy a house|trial stay)\b/.test(n);
  const used = visitingOnly && !joining ? "no" : joining && !visitingOnly ? "yes" : pole;
  const fit = directed(joinFit(community), used === "skip" ? "yes" : used);
  return {
    fit,
    label: fit >= 0.55 ? `Join: ${easeLabels[visitJoinFor(community.slug).join]}` : null,
  };
}

function volunteerAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  let pole = polarity(answer);
  if (/\b(wwoof|workaway|work exchange|internship|intern|help on the farm)\b/.test(n)) pole = "yes";
  if (/\b(no volunteer|not looking to volunteer|dont want to volunteer)\b/.test(n)) pole = "no";
  const fit = directed(volunteerFit(community), pole === "skip" ? "yes" : pole);
  return { fit, label: fit >= 0.55 && pole !== "no" ? "Volunteer signup" : null };
}

function farmAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const farm = farmFor(community.slug);
  const n = normalize(answer);
  const noFarm =
    /\bno farm\b|\bnot a farm\b|\bno livestock\b|\bno animals\b|\bno crops\b|\bno garden\b|\bno gardens\b|\bwithout a farm\b|\bwithout animals\b|\bdo not want a farm\b|\bdont want a farm\b/.test(
      n,
    ) && !/\bwant (a )?farm\b|\bstill want\b|\bexcept\b/.test(n);
  if (noFarm) {
    return { fit: farm.hasFarm ? 0.06 : 1, label: farm.hasFarm ? null : "No farm" };
  }
  if (!farm.hasFarm) {
    return { fit: 0.06, label: null };
  }
  const have = new Set([...farm.grows, ...farm.animals]);
  const requested = FARM_GROUPS.filter((group) => overlap(answer, group.hay) > 0);
  const hits = requested.filter((group) => group.labels.some((label) => have.has(label)));
  if (requested.length > 0) {
    const fit = hits.length === 0 ? 0.1 : clamp01(0.18 + 0.82 * (hits.length / requested.length));
    return { fit, label: hits.length ? hits.slice(0, 3).map((group) => group.title).join(", ") : null };
  }
  if (/\bfarm\b|\bgardens?\b|\blivestock\b|\banimals?\b|\bplants?\b|\bcrops?\b|\borchard\b|\bpasture\b/.test(n)) {
    return { fit: 0.72, label: "Working farm" };
  }
  return { fit: 0.28, label: null };
}

type FarmGroup = { title: string; labels: string[]; hay: string };

const FARM_GROUPS: FarmGroup[] = [
  { title: "Cows", labels: ["Cows"], hay: "cows cow cattle dairy holstein beef milking" },
  { title: "Sheep", labels: ["Sheep"], hay: "sheep lamb lambs ewe mutton" },
  { title: "Goats", labels: ["Goats"], hay: "goats goat chevre" },
  { title: "Pigs", labels: ["Pigs"], hay: "pigs pig hogs hog swine pork" },
  { title: "Chickens", labels: ["Chickens"], hay: "chickens chicken hens poultry eggs layers" },
  { title: "Ducks", labels: ["Ducks"], hay: "ducks duck" },
  { title: "Geese", labels: ["Geese"], hay: "geese goose" },
  { title: "Turkeys", labels: ["Turkeys"], hay: "turkeys turkey" },
  { title: "Bees", labels: ["Bees"], hay: "bees bee honey apiary hive hives" },
  { title: "Horses", labels: ["Horses"], hay: "horses horse ponies pony" },
  { title: "Donkeys", labels: ["Donkeys"], hay: "donkeys donkey mule mules" },
  { title: "Fish", labels: ["Fish"], hay: "fish aquaculture tilapia" },
  { title: "Rabbits", labels: ["Rabbits"], hay: "rabbits rabbit" },
  { title: "Oxen", labels: ["Oxen"], hay: "oxen" },
  { title: "Livestock", labels: ["Livestock"], hay: "livestock" },
  {
    title: "Vegetables",
    labels: ["Vegetables", "Kitchen gardens", "Biodynamic vegetables", "Greenhouse vegetables", "Farm produce"],
    hay: "vegetables vegetable veg garden gardens kitchen horticulture produce crops polytunnel greenhouse glasshouse",
  },
  { title: "Herbs", labels: ["Herbs"], hay: "herbs herb medicinal culinary" },
  { title: "Flowers", labels: ["Flowers"], hay: "flowers flower" },
  {
    title: "Fruit",
    labels: ["Orchard fruit", "Soft fruit", "Tropical fruit", "Apples", "Pears", "Citrus", "Grapes"],
    hay: "fruit orchard orchards berries berry strawberries apples pears citrus grapes grape vineyard banana mango tropical",
  },
  { title: "Food forest", labels: ["Food forest"], hay: "food forest permaculture" },
  { title: "Nuts", labels: ["Nuts", "Pecans", "Walnuts", "Almonds"], hay: "nuts nut pecans pecan walnuts walnut almonds almond" },
  { title: "Cacao", labels: ["Cacao"], hay: "cacao cocoa chocolate" },
  { title: "Coffee", labels: ["Coffee"], hay: "coffee" },
  { title: "Olives", labels: ["Olives"], hay: "olives olive" },
  { title: "Rice", labels: ["Rice"], hay: "rice paddy" },
  { title: "Grains", labels: ["Wheat", "Corn", "Grains"], hay: "wheat corn maize grains grain oats barley rye millet cereal" },
  { title: "Beans", labels: ["Beans"], hay: "beans bean legumes soy tofu soya" },
  { title: "Mushrooms", labels: ["Mushrooms"], hay: "mushrooms mushroom" },
  { title: "Ginger", labels: ["Ginger"], hay: "ginger" },
  { title: "Turmeric", labels: ["Turmeric"], hay: "turmeric" },
  { title: "Hemp", labels: ["Hemp"], hay: "hemp" },
  { title: "Pasture", labels: ["Pasture", "Hay"], hay: "pasture pastures hay grazing meadow forage" },
  { title: "Seeds", labels: ["Seeds"], hay: "seeds seed sanctuary" },
  { title: "Sugarcane", labels: ["Sugarcane"], hay: "sugarcane sugar cane" },
  { title: "Bamboo", labels: ["Bamboo"], hay: "bamboo" },
];

function sharedTitleAnswerFit(community: Community, answer: string): { fit: number; label: string | null } {
  const n = normalize(answer);
  let pole = polarity(answer);
  if (/\b(own my house|private lot|private lots|deed|freehold|buy a house|i want to own)\b/.test(n)) pole = "no";
  if (/\b(shared title|one title|community owns|commons|land trust holds|not private)\b/.test(n)) pole = "yes";
  const fit = directed(sharedTitleFit(community), pole === "skip" ? "yes" : pole);
  return { fit, label: fit >= 0.55 && pole !== "no" ? "One title holder" : null };
}

type AnswerFit = { fit: number; label: string | null };

function fitAnswer(id: QuizQuestionId, answer: string, community: Community): AnswerFit {
  switch (id) {
    case "place":
      return placeFit(community, answer);
    case "visit":
      return visitAnswerFit(community, answer);
    case "join":
      return joinAnswerFit(community, answer);
    case "volunteer":
      return volunteerAnswerFit(community, answer);
    case "shared":
      return governanceAnswerFit(community, answer);
    case "spiritual":
      return spiritualAnswerFit(community, answer);
    case "land":
      return landAnswerFit(community, answer);
    case "small":
      return sizeAnswerFit(community, answer);
    case "commons":
      return commonsAnswerFit(community, answer);
    case "livelihood":
      return livelihoodAnswerFit(community, answer);
    case "farm":
      return farmAnswerFit(community, answer);
    case "sharedTitle":
      return sharedTitleAnswerFit(community, answer);
  }
}

export type QuizMatch = {
  community: Community;
  score: number;
  percent: number;
  reasons: string[];
};

export function scoreQuiz(answers: QuizAnswers, ranks: QuizRanks): QuizMatch[] {
  const active = quizQuestions.filter((question) => usableAnswer(answers[question.id]));
  const weightSum = active.reduce((sum, question) => sum + ranks[question.id], 0);
  const matches = communities
    .filter((community) => community.stillActive && hasPublicArrival(community.slug))
    .map((community) => {
    let weighted = 0;
    const parts: { contribution: number; reason: string | null }[] = [];
    for (const question of active) {
      const importance = ranks[question.id];
      const { fit, label } = fitAnswer(question.id, answers[question.id], community);
      const clamped = clamp01(fit);
      const contribution = importance * clamped;
      weighted += contribution;
      parts.push({
        contribution,
        reason: clamped >= 0.55 ? label : null,
      });
    }
    const score = weightSum === 0 ? 0 : weighted / weightSum;
    const reasons = parts
      .filter((part) => part.reason)
      .sort((a, b) => b.contribution - a.contribution)
      .slice(0, 3)
      .map((part) => part.reason as string);
    return {
      community,
      score,
      percent: Math.round(score * 100),
      reasons,
    };
  });
  matches.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.community.stillActive !== b.community.stillActive) {
      return a.community.stillActive ? -1 : 1;
    }
    return a.community.name.localeCompare(b.community.name);
  });
  return matches;
}

export const QUIZ_STORAGE_KEY = "vc-quiz";

export type StoredQuiz = {
  ranks: QuizRanks;
  answers: QuizAnswers;
  submitted: boolean;
};

export function loadStoredQuiz(): StoredQuiz | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ranks?: unknown; answers?: unknown; submitted?: unknown };
    const ranks = parseRanks(parsed.ranks) ?? defaultRanks();
    const answers = parseAnswers(parsed.answers) ?? defaultAnswers();
    if (!parseRanks(parsed.ranks) && !hasWrittenAnswers(answers)) return null;
    return { ranks, answers, submitted: parsed.submitted === true };
  } catch {
    return null;
  }
}

export function storeQuiz(state: StoredQuiz): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}
