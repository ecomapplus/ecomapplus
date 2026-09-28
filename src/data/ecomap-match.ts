import { hasBookableStay } from "./booking-stays";
import { communities, type Community } from "./communities";
import { coordsFor } from "./coordinates";
import { farmFor, type FarmProfile } from "./farms";
import { kmBetween } from "./geo";
import { governanceFor, type GovernanceModel } from "./governance";
import { informalFor } from "./informal-agreements";
import { landFor } from "./land-ownership";
import { legalFormsFor } from "./legal-entities";
import { hasPublicArrival } from "./public-flags";
import { compareCountries } from "@/lib/country-scope";
import { visitDoorsFor, type VisitDoor } from "./visit-types";

export const RESULT_COUNT = 5;
export const NARROW_POOL = 12;

export type StayKind = "day-visit" | "few-nights" | "work-stay" | "buy-build";
export type FarmKind = "none" | "plants" | "plants-animals";
export type TogetherKind = "private" | "shared" | "together";
export type PhilosophyKind = "secular" | "spiritual" | "religious";
export type GovernanceKind = "strict" | "relaxed";
export type MembersKind = "under-20" | "20-60" | "60-150" | "150-plus";

export type EcoPoint = { lat: number; lng: number };

export type EcoAnswers = {
  location: EcoPoint | null;
  stay: StayKind | null;
  farm: FarmKind | null;
  together: TogetherKind | null;
  philosophy: PhilosophyKind | null;
  governance: GovernanceKind | null;
  members: MembersKind | null;
};

export type EcoWeights = {
  location: number;
  stay: number;
  farm: number;
  together: number;
  philosophy: number;
  governance: number;
  members: number;
};

export type EcoQuestionKey = keyof EcoWeights;

export type ChoiceOption<T extends string> = {
  id: T;
  label: string;
  hint?: string;
};

export const STAY_OPTIONS: ChoiceOption<StayKind>[] = [
  { id: "day-visit", label: "Day visit", hint: "A tour, course, or open day." },
  { id: "few-nights", label: "A few nights", hint: "A guest bed you can actually book." },
  { id: "work-stay", label: "Work-stay", hint: "Volunteer, intern, or work-exchange." },
  { id: "buy-build", label: "Buy/build a home", hint: "A lot, a house, or a path to title." },
];

export const FARM_OPTIONS: ChoiceOption<FarmKind>[] = [
  { id: "none", label: "No farm" },
  { id: "plants", label: "Only plants" },
  { id: "plants-animals", label: "Plants & animals" },
];

export const TOGETHER_OPTIONS: ChoiceOption<TogetherKind>[] = [
  { id: "private", label: "Mostly private days" },
  { id: "shared", label: "Shared meals and meetings" },
  { id: "together", label: "Most of the week together" },
];

export const PHILOSOPHY_OPTIONS: ChoiceOption<PhilosophyKind>[] = [
  { id: "secular", label: "Secular", hint: "No shared faith." },
  { id: "spiritual", label: "Spiritual", hint: "Practice and inner life, not a church." },
  { id: "religious", label: "Religious", hint: "A named faith, order, or worship." },
];

export const GOVERNANCE_OPTIONS: ChoiceOption<GovernanceKind>[] = [
  { id: "strict", label: "Strict" },
  { id: "relaxed", label: "Relaxed" },
];

export const MEMBER_OPTIONS: ChoiceOption<MembersKind>[] = [
  { id: "under-20", label: "Under 20", hint: "A household or a very small village." },
  { id: "20-60", label: "20–60", hint: "Small enough that you know everyone." },
  { id: "60-150", label: "60–150", hint: "A village with several households and a shared core." },
  { id: "150-plus", label: "150 or more", hint: "A large settlement or a cluster of neighbourhoods." },
];

export type GeneratedFilter =
  | { type: "climate"; value: "tropical" | "temperate" }
  | { type: "size"; value: "small" | "large" }
  | { type: "band"; value: WorldBand }
  | { type: "tenure"; value: "own" | "join" }
  | { type: "country"; value: string }
  | { type: "toward"; slug: string; other: string };

export type NarrowingOption = {
  id: string;
  label: string;
  hint?: string;
  filter: GeneratedFilter;
};

export type NarrowingQuestion = {
  prompt: string;
  hint: string;
  options: NarrowingOption[];
};

export type RankedMatch = {
  community: Community;
  score: number;
};

const BUY_FORMS = new Set([
  "Freehold title",
  "Homeowners association",
  "Body corporate",
  "Strata title",
]);

const STRICT_MODELS = new Set<GovernanceModel>([
  "founder",
  "hoa",
  "board",
  "planner-manager",
  "spiritual",
]);

const RELAXED_MODELS = new Set<GovernanceModel>([
  "consensus",
  "sociocracy",
  "assembly",
  "hybrid",
  "cooperative",
  "indigenous-assembly",
  "common-purse",
]);

const TOGETHER_KINDS = new Set([
  "kitchen-table",
  "labour-roster",
  "common-purse",
  "care-household",
]);

type WorldBand = "americas" | "europe-africa" | "asia-pacific";

type Profile = {
  community: Community;
  coords?: EcoPoint;
  farm: FarmProfile;
  doors: Set<VisitDoor>;
  kinds: Set<string>;
  model: GovernanceModel | null;
  forms: string[];
  buyable: boolean;
  faith: PhilosophyKind;
  together: number;
  strict: boolean | null;
  tropical: boolean | null;
  band: WorldBand | null;
};

const emptyAnswers = (): EcoAnswers => ({
  location: null,
  stay: null,
  farm: null,
  together: null,
  philosophy: null,
  governance: null,
  members: null,
});

const emptyWeights = (): EcoWeights => ({
  location: 50,
  stay: 50,
  farm: 50,
  together: 50,
  philosophy: 50,
  governance: 50,
  members: 50,
});

export function defaultEcoAnswers(): EcoAnswers {
  return emptyAnswers();
}

export function defaultEcoWeights(): EcoWeights {
  return emptyWeights();
}

export const ECO_QUIZ_KEY = "ecomap-free-quiz";

export function ecoQuizComplete(answers: EcoAnswers): boolean {
  return Boolean(
    answers.location &&
      answers.stay &&
      answers.farm &&
      answers.together &&
      answers.philosophy &&
      answers.governance &&
      answers.members,
  );
}

const stayIds = new Set(STAY_OPTIONS.map((row) => row.id));
const farmIds = new Set(FARM_OPTIONS.map((row) => row.id));
const togetherIds = new Set(TOGETHER_OPTIONS.map((row) => row.id));
const philosophyIds = new Set(PHILOSOPHY_OPTIONS.map((row) => row.id));
const governanceIds = new Set(GOVERNANCE_OPTIONS.map((row) => row.id));
const memberIds = new Set(MEMBER_OPTIONS.map((row) => row.id));

function pickId<T extends string>(value: unknown, ids: Set<T>): T | null {
  return typeof value === "string" && ids.has(value as T) ? (value as T) : null;
}

function pickWeight(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 50;
}

export function storeEcoQuiz(answers: EcoAnswers, weights: EcoWeights) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      ECO_QUIZ_KEY,
      JSON.stringify({ answers, weights, at: new Date().toISOString() }),
    );
  } catch {
    /* ignore */
  }
}

export function loadEcoQuiz(): { answers: EcoAnswers; weights: EcoWeights } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ECO_QUIZ_KEY);
    if (!raw) return null;
    const row = JSON.parse(raw) as { answers?: Partial<EcoAnswers>; weights?: Partial<EcoWeights> };
    const loc = row.answers?.location;
    const answers: EcoAnswers = {
      location:
        loc && typeof loc.lat === "number" && typeof loc.lng === "number" ? { lat: loc.lat, lng: loc.lng } : null,
      stay: pickId(row.answers?.stay, stayIds),
      farm: pickId(row.answers?.farm, farmIds),
      together: pickId(row.answers?.together, togetherIds),
      philosophy: pickId(row.answers?.philosophy, philosophyIds),
      governance: pickId(row.answers?.governance, governanceIds),
      members: pickId(row.answers?.members, memberIds),
    };
    if (!ecoQuizComplete(answers)) return null;
    const weights = row.weights ?? {};
    return {
      answers,
      weights: {
        location: pickWeight(weights.location),
        stay: pickWeight(weights.stay),
        farm: pickWeight(weights.farm),
        together: pickWeight(weights.together),
        philosophy: pickWeight(weights.philosophy),
        governance: pickWeight(weights.governance),
        members: pickWeight(weights.members),
      },
    };
  } catch {
    return null;
  }
}

export function clamp01(value: number): number {
  if (value <= 0) return 0;
  if (value >= 1) return 1;
  return value;
}

function safeInformal(slug: string) {
  try {
    return informalFor(slug);
  } catch {
    return [];
  }
}

function safeGov(slug: string) {
  try {
    return governanceFor(slug);
  } catch {
    return null;
  }
}

function safeLand(slug: string) {
  try {
    return landFor(slug);
  } catch {
    return null;
  }
}

function isBuyable(slug: string, forms: string[]): boolean {
  if (forms.some((form) => BUY_FORMS.has(form))) return true;
  const land = safeLand(slug);
  if (!land) return false;
  return /homeowners|\bhoa\b|freehold|strata|body corporate|house lots|private lots|lot sales/.test(
    `${land.tenure} ${land.howHeld}`.toLowerCase(),
  );
}

function isReligious(community: Community, forms: string[]): boolean {
  if (forms.includes("Religious society")) return true;
  return /\b(religio|church|temple|monaster|convent|synagogue|mosque|parish|shaker|ashram|faith|christian|catholic|protestant|quaker|buddhist|hindu|jewish|islam|muslim|krishna|sikh|zen|ananda)\b/.test(
    community.legalCategory.toLowerCase(),
  );
}

function isSpiritual(
  community: Community,
  kinds: Set<string>,
  model: GovernanceModel | null,
  forms: string[],
): boolean {
  if (isReligious(community, forms)) return false;
  if (model === "spiritual") return true;
  if (kinds.has("quiet-practice")) return true;
  return /\bspiritual\b/.test(community.legalCategory.toLowerCase());
}

function faithOf(
  community: Community,
  kinds: Set<string>,
  model: GovernanceModel | null,
  forms: string[],
): PhilosophyKind {
  if (isReligious(community, forms)) return "religious";
  if (isSpiritual(community, kinds, model, forms)) return "spiritual";
  return "secular";
}

function togetherLevel(kinds: Set<string>, model: GovernanceModel | null): number {
  let n = 0;
  for (const kind of TOGETHER_KINDS) {
    if (kinds.has(kind)) n += kind === "common-purse" ? 1.2 : 1;
  }
  if (model === "hoa") n -= 0.8;
  if (model === "common-purse") n += 0.6;
  return clamp01(n / 3);
}

function worldBand(lng: number): WorldBand {
  if (lng < -25) return "americas";
  if (lng < 60) return "europe-africa";
  return "asia-pacific";
}

const profileCache = new Map<string, Profile>();

function profileFor(community: Community): Profile {
  const hit = profileCache.get(community.slug);
  if (hit) return hit;
  const slug = community.slug;
  const kinds = new Set(safeInformal(slug).map((row) => row.kind));
  const gov = safeGov(slug);
  const model = gov?.model ?? null;
  const forms = legalFormsFor(slug);
  const coords = coordsFor(slug);
  const tropical = coords ? Math.abs(coords.lat) < 23.5 : null;
  const profile: Profile = {
    community,
    coords,
    farm: farmFor(slug),
    doors: new Set(visitDoorsFor(slug)),
    kinds,
    model,
    forms,
    buyable: isBuyable(slug, forms),
    faith: faithOf(community, kinds, model, forms),
    together: togetherLevel(kinds, model),
    strict: model ? (STRICT_MODELS.has(model) ? true : RELAXED_MODELS.has(model) ? false : null) : null,
    tropical,
    band: coords ? worldBand(coords.lng) : null,
  };
  profileCache.set(slug, profile);
  return profile;
}

function miss(): number {
  return 0.12;
}

function scoreLocation(profile: Profile, point: EcoPoint): number {
  if (!profile.coords) return 0.35;
  const km = kmBetween(point, profile.coords);
  return clamp01(Math.exp(-km / 3500));
}

function scoreStay(profile: Profile, stay: StayKind): number {
  switch (stay) {
    case "day-visit":
      if (profile.doors.has("event") || profile.kinds.has("course-host")) return 1;
      if (profile.kinds.has("guest-stay")) return 0.42;
      return miss();
    case "few-nights":
      if (hasBookableStay(profile.community.slug)) return 1;
      if (profile.kinds.has("guest-stay")) return 0.86;
      if (profile.doors.has("event")) return 0.34;
      return miss();
    case "work-stay":
      if (profile.doors.has("work-stay") || profile.kinds.has("volunteer-intern")) return 1;
      return miss();
    case "buy-build":
      if (profile.buyable) return 1;
      if (profile.kinds.has("membership-trial")) return 0.52;
      return miss();
  }
}

function scoreFarm(profile: Profile, farm: FarmKind): number {
  const has = profile.farm.hasFarm;
  const animals = profile.farm.animals.length > 0;
  switch (farm) {
    case "none":
      return has ? 0.12 : 1;
    case "plants":
      if (has && !animals) return 1;
      if (has && animals) return 0.4;
      return 0.14;
    case "plants-animals":
      if (has && animals) return 1;
      if (has) return 0.36;
      return 0.1;
  }
}

function scoreTogether(profile: Profile, together: TogetherKind): number {
  const level = profile.together;
  if (together === "private") return clamp01(1 - level);
  if (together === "together") return level;
  return clamp01(1 - Math.abs(level - 0.45) / 0.55);
}

function scorePhilosophy(profile: Profile, philosophy: PhilosophyKind): number {
  if (philosophy === profile.faith) return 1;
  if (philosophy !== "secular" && profile.faith !== "secular") return 0.38;
  return miss();
}

function scoreGovernance(profile: Profile, governance: GovernanceKind): number {
  if (profile.strict === null) return 0.5;
  if (governance === "strict") return profile.strict ? 1 : 0.14;
  return profile.strict ? 0.14 : 1;
}

const MEMBER_BANDS: MembersKind[] = ["under-20", "20-60", "60-150", "150-plus"];

function membersBand(count: number): MembersKind {
  if (count < 20) return "under-20";
  if (count < 60) return "20-60";
  if (count < 150) return "60-150";
  return "150-plus";
}

function scoreMembers(profile: Profile, want: MembersKind): number {
  const count = profile.community.members;
  if (count <= 0) return 0.5;
  const distance = Math.abs(MEMBER_BANDS.indexOf(membersBand(count)) - MEMBER_BANDS.indexOf(want));
  if (distance === 0) return 1;
  if (distance === 1) return 0.42;
  return miss();
}

function scoreToward(profile: Profile, chosen: string, other: string): number {
  const here = profile.coords;
  const a = coordsFor(chosen);
  const b = coordsFor(other);
  if (!here || !a || !b) return profile.community.slug === chosen ? 1 : miss();
  const toChosen = kmBetween(here, a);
  const toOther = kmBetween(here, b);
  const sum = toChosen + toOther;
  if (sum <= 0) return 0.5;
  return clamp01(toOther / sum);
}

function scoreGenerated(profile: Profile, filter: GeneratedFilter): number {
  switch (filter.type) {
    case "climate":
      if (profile.tropical === null) return 0.5;
      return (filter.value === "tropical") === profile.tropical ? 1 : miss();
    case "size": {
      const members = profile.community.members;
      if (members <= 0) return 0.5;
      const small = members < 40;
      return (filter.value === "small") === small ? 1 : miss();
    }
    case "band":
      if (!profile.band) return 0.5;
      return profile.band === filter.value ? 1 : miss();
    case "tenure":
      return (filter.value === "own") === profile.buyable ? 1 : miss();
    case "country":
      return profile.community.country === filter.value ? 1 : miss();
    case "toward":
      return scoreToward(profile, filter.slug, filter.other);
  }
}

function weightOf(value: number): number {
  return clamp01(value / 100);
}

export function rankMatches(answers: EcoAnswers, weights: EcoWeights): RankedMatch[] {
  const living = communities.filter((row) => row.stillActive && hasPublicArrival(row.slug));
  const out: RankedMatch[] = [];

  for (const community of living) {
    const profile = profileFor(community);
    let total = 0;
    let mass = 0;

    const add = (raw: number, importance: number) => {
      const w = weightOf(importance);
      if (w <= 0) return;
      total += raw * w;
      mass += w;
    };

    if (answers.location) add(scoreLocation(profile, answers.location), weights.location);
    if (answers.stay) add(scoreStay(profile, answers.stay), weights.stay);
    if (answers.farm) add(scoreFarm(profile, answers.farm), weights.farm);
    if (answers.together) add(scoreTogether(profile, answers.together), weights.together);
    if (answers.philosophy) add(scorePhilosophy(profile, answers.philosophy), weights.philosophy);
    if (answers.governance) add(scoreGovernance(profile, answers.governance), weights.governance);
    if (answers.members) add(scoreMembers(profile, answers.members), weights.members);

    out.push({ community, score: mass > 0 ? total / mass : 0.5 });
  }

  return out.sort((a, b) => b.score - a.score || a.community.name.localeCompare(b.community.name));
}

const BAND_LABEL: Record<WorldBand, string> = {
  americas: "The Americas",
  "europe-africa": "Europe & Africa",
  "asia-pacific": "Asia & the Pacific",
};

function splitScore(counts: number[], poolSize: number): number {
  const usable = counts.filter((n) => n >= 2);
  if (usable.length < 2) return 0;
  const covered = usable.reduce((sum, n) => sum + n, 0);
  const even = Math.min(...usable) / Math.max(...usable);
  return even * (covered / poolSize) * (1 + 0.06 * usable.length);
}

function furthestPair(pool: Community[]): [Community, Community] | null {
  let best: { a: Community; b: Community; km: number } | null = null;
  for (let i = 0; i < pool.length; i += 1) {
    const a = pool[i];
    const pa = coordsFor(a.slug);
    if (!pa) continue;
    for (let j = i + 1; j < pool.length; j += 1) {
      const b = pool[j];
      const pb = coordsFor(b.slug);
      if (!pb) continue;
      const km = kmBetween(pa, pb);
      if (!best || km > best.km) best = { a, b, km };
    }
  }
  return best ? [best.a, best.b] : null;
}

function namedFallback(pool: Community[]): NarrowingQuestion | null {
  const pair = furthestPair(pool) ?? (pool.length >= 2 ? [pool[0], pool[1]] : null);
  if (!pair) return null;
  const [a, b] = pair;
  return {
    prompt: "Two of the closest fits still pull in different directions. Which feels more like home?",
    hint: "This last question is built from the villages still near the top.",
    options: [
      {
        id: `toward:${a.slug}`,
        label: a.name,
        hint: `${a.region}, ${a.country}`,
        filter: { type: "toward", slug: a.slug, other: b.slug },
      },
      {
        id: `toward:${b.slug}`,
        label: b.name,
        hint: `${b.region}, ${b.country}`,
        filter: { type: "toward", slug: b.slug, other: a.slug },
      },
    ],
  };
}

type Candidate = NarrowingQuestion & { score: number };

const SIZE_FALLBACK: NarrowingQuestion = {
  prompt: "Would you rather join a small household-scale village, or a larger one?",
  hint: "This last question is built from the villages still near the top.",
  options: [
    { id: "size:small", label: "Under 40 people", filter: { type: "size", value: "small" } },
    { id: "size:large", label: "40 people or more", filter: { type: "size", value: "large" } },
  ],
};

export function generateNarrowingQuestion(
  answers: EcoAnswers,
  weights: EcoWeights,
): NarrowingQuestion {
  try {
    const ranked = rankMatches({ ...answers, members: null }, { ...weights, members: 0 });
    const pool = ranked.slice(0, NARROW_POOL).map((row) => row.community);
    if (pool.length < 2) return SIZE_FALLBACK;

    const profiles = pool.map(profileFor);
    const candidates: Candidate[] = [];

    const tropical = profiles.filter((row) => row.tropical === true).length;
    const temperate = profiles.filter((row) => row.tropical === false).length;
    candidates.push({
      prompt: "Would you rather live nearer the tropics, or with real seasons?",
      hint: "The closest fits still split on climate.",
      options: [
        {
          id: "climate:tropical",
          label: "Warmer, closer to the tropics",
          filter: { type: "climate", value: "tropical" },
        },
        {
          id: "climate:temperate",
          label: "Temperate seasons",
          filter: { type: "climate", value: "temperate" },
        },
      ],
      score: splitScore([tropical, temperate], pool.length),
    });

    const small = pool.filter((row) => row.members > 0 && row.members < 40).length;
    const large = pool.filter((row) => row.members >= 40).length;
    candidates.push({
      prompt: SIZE_FALLBACK.prompt,
      hint: "Size still splits the closest remaining fits.",
      options: SIZE_FALLBACK.options,
      score: splitScore([small, large], pool.length),
    });

    const bandCounts: Record<WorldBand, number> = {
      americas: 0,
      "europe-africa": 0,
      "asia-pacific": 0,
    };
    for (const row of profiles) {
      if (row.band) bandCounts[row.band] += 1;
    }
    const bandKeys = (Object.keys(bandCounts) as WorldBand[]).filter((key) => bandCounts[key] >= 2);
    if (bandKeys.length >= 2) {
      candidates.push({
        prompt: "Which part of the world still feels like the right ground?",
        hint: "Your earlier answers leave more than one region in play.",
        options: bandKeys.map((key) => ({
          id: `band:${key}`,
          label: BAND_LABEL[key],
          filter: { type: "band" as const, value: key },
        })),
        score: splitScore(
          bandKeys.map((key) => bandCounts[key]),
          pool.length,
        ),
      });
    }

    const skipTenure = answers.stay === "buy-build" && weights.stay >= 70;
    if (!skipTenure) {
      const own = profiles.filter((row) => row.buyable).length;
      const join = profiles.length - own;
      candidates.push({
        prompt: "Do you want a path to own a home, or to join as a member?",
        hint: "Title still splits the closest remaining fits.",
        options: [
          { id: "tenure:own", label: "Buy or build a home", filter: { type: "tenure", value: "own" } },
          {
            id: "tenure:join",
            label: "Join as a member, no private lot",
            filter: { type: "tenure", value: "join" },
          },
        ],
        score: splitScore([own, join], pool.length),
      });
    }

    const byCountry = new Map<string, number>();
    for (const row of pool) {
      byCountry.set(row.country, (byCountry.get(row.country) ?? 0) + 1);
    }
    const countries = [...byCountry.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .sort((a, b) => compareCountries(a[0], b[0]));
    if (countries.length >= 2) {
      candidates.push({
        prompt: "Which country still feels like home?",
        hint: "The closest remaining villages sit in more than one country.",
        options: countries.map(([country]) => ({
          id: `country:${country}`,
          label: country,
          filter: { type: "country" as const, value: country },
        })),
        score: splitScore(
          countries.map(([, n]) => n),
          pool.length,
        ),
      });
    }

    candidates.sort((a, b) => b.score - a.score);
    const best = candidates[0];
    if (best && best.score > 0) {
      return { prompt: best.prompt, hint: best.hint, options: best.options };
    }
    return namedFallback(pool) ?? SIZE_FALLBACK;
  } catch {
    return SIZE_FALLBACK;
  }
}

export function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
