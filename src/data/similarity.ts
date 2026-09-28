import { getCommunity } from "./communities";
import { coordsFor } from "./coordinates";
import { dailyLifeFor } from "./daily-life";
import { ecoFor } from "./ecological-initiatives";
import { fundingFor, inferKind } from "./funding";
import { kmBetween } from "./geo";
import { governanceFor } from "./governance";
import { landFor } from "./land-ownership";
import { guideForForm } from "./legal-form-guides";
import { legalFormsFor } from "./legal-entities";
import { visitJoinFor } from "./visit-join";
import { hasVolunteerProgram } from "./volunteer-programs";

export type SimilarityHit = {
  score: number;
  percent: number;
  reasons: string[];
};

type Profile = {
  slug: string;
  country: string;
  region: string;
  forms: Set<string>;
  families: Set<string>;
  gov: string;
  govLabel: string;
  uniqueGov: boolean;
  landComplexity: string;
  tenure: Set<string>;
  volunteer: boolean;
  visit: number;
  join: number;
  members: number;
  acres: number | null;
  founded: number;
  active: boolean;
  eco: Set<string>;
  funding: Set<string>;
  life: Set<string>;
  lat: number | null;
  lng: number | null;
};

const STOP = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "are",
  "was",
  "were",
  "its",
  "into",
  "over",
  "onto",
  "than",
  "then",
  "them",
  "they",
  "have",
  "has",
  "had",
  "not",
  "but",
  "also",
  "village",
  "community",
  "ecovillage",
]);

const WEIGHTS = {
  country: 12,
  region: 8,
  forms: 16,
  families: 8,
  gov: 10,
  uniqueGov: 3,
  land: 5,
  tenure: 4,
  volunteer: 3,
  visit: 6,
  join: 6,
  members: 8,
  acres: 6,
  founded: 5,
  active: 3,
  eco: 10,
  funding: 5,
  life: 4,
  distance: 8,
};

const MAX_SCORE = Object.values(WEIGHTS).reduce((sum, n) => sum + n, 0);

const profileBySlug = new Map<string, Profile>();
const pairCache = new Map<string, SimilarityHit>();

function tokens(value: string): Set<string> {
  const out = new Set<string>();
  for (const raw of value.toLowerCase().split(/[^a-z0-9]+/)) {
    if (raw.length < 3 || STOP.has(raw)) continue;
    out.add(raw);
  }
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  for (const item of a) if (b.has(item)) inter += 1;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

function sharedList(a: Set<string>, b: Set<string>): string[] {
  const out: string[] = [];
  for (const item of a) if (b.has(item)) out.push(item);
  return out.sort((x, y) => x.localeCompare(y));
}

function closeness(a: number, b: number, span: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
  return Math.max(0, 1 - Math.abs(a - b) / span);
}

function logCloseness(a: number, b: number): number {
  const la = Math.log(Math.max(1, a));
  const lb = Math.log(Math.max(1, b));
  return Math.max(0, 1 - Math.abs(la - lb) / 3.2);
}

function profile(slug: string): Profile | null {
  const hit = profileBySlug.get(slug);
  if (hit) return hit;
  const community = getCommunity(slug);
  if (!community) return null;
  const forms = legalFormsFor(slug);
  const families = forms.map((form) => guideForForm(form).family);
  const gov = governanceFor(slug);
  const land = landFor(slug);
  const visit = visitJoinFor(slug);
  const eco = ecoFor(slug);
  const money = fundingFor(slug);
  const life = dailyLifeFor(slug);
  const point = coordsFor(slug);
  const funding = new Set<string>();
  for (const item of money.grants) funding.add(inferKind(item, "grants"));
  for (const item of money.private) funding.add(inferKind(item, "private"));
  const row: Profile = {
    slug,
    country: community.country,
    region: community.region,
    forms: new Set(forms),
    families: new Set(families),
    gov: gov.model,
    govLabel: gov.modelLabel,
    uniqueGov: gov.unique,
    landComplexity: land.complexity,
    tenure: tokens(land.tenure),
    volunteer: hasVolunteerProgram(slug),
    visit: visit.visit,
    join: visit.join,
    members: community.members,
    acres: community.acres,
    founded: community.foundedYear,
    active: community.stillActive,
    eco: new Set(eco.items.map((item) => item.theme)),
    funding,
    life: tokens(`${life.unique.title} ${life.typical.map((row) => row.title).join(" ")}`),
    lat: point?.lat ?? null,
    lng: point?.lng ?? null,
  };
  profileBySlug.set(slug, row);
  return row;
}

function pairKey(a: string, b: string) {
  return a < b ? `${a}\t${b}` : `${b}\t${a}`;
}

export function similarityTo(seedSlug: string, otherSlug: string): SimilarityHit {
  if (seedSlug === otherSlug) {
    return { score: MAX_SCORE, percent: 100, reasons: ["The village you picked"] };
  }
  const key = pairKey(seedSlug, otherSlug);
  const cached = pairCache.get(key);
  if (cached) return cached;

  const a = profile(seedSlug);
  const b = profile(otherSlug);
  if (!a || !b) {
    const empty = { score: 0, percent: 0, reasons: [] as string[] };
    pairCache.set(key, empty);
    return empty;
  }

  let score = 0;
  const reasons: string[] = [];

  if (a.country === b.country) {
    score += WEIGHTS.country;
    reasons.push(`Same country (${a.country})`);
  }
  if (a.region === b.region) {
    score += WEIGHTS.region;
    reasons.push(`Same region (${a.region})`);
  }

  const formScore = jaccard(a.forms, b.forms);
  score += WEIGHTS.forms * formScore;
  const sharedForms = sharedList(a.forms, b.forms);
  if (sharedForms.length === 1) reasons.push(`Shares ${sharedForms[0]}`);
  else if (sharedForms.length > 1) reasons.push(`Shares ${sharedForms.slice(0, 2).join("·")}`);

  const familyScore = jaccard(a.families, b.families);
  score += WEIGHTS.families * familyScore;
  if (familyScore === 1 && a.families.size > 0 && sharedForms.length === 0) {
    reasons.push(`Same legal family (${[...a.families][0]})`);
  }

  if (a.gov === b.gov) {
    score += WEIGHTS.gov;
    reasons.push(`Same governance (${a.govLabel})`);
  }
  if (a.uniqueGov && b.uniqueGov) {
    score += WEIGHTS.uniqueGov;
    reasons.push("Both have unusual inner government");
  }

  if (a.landComplexity === b.landComplexity) {
    score += WEIGHTS.land;
    if (a.landComplexity === "split") reasons.push("Title is divided in both");
  }
  const tenureScore = jaccard(a.tenure, b.tenure);
  score += WEIGHTS.tenure * tenureScore;

  if (a.volunteer === b.volunteer) {
    score += WEIGHTS.volunteer;
    if (a.volunteer) reasons.push("Both have a volunteer program");
  }

  const visitScore = closeness(a.visit, b.visit, 4);
  score += WEIGHTS.visit * visitScore;
  if (a.visit === b.visit) reasons.push("Same ease of visit");
  const joinScore = closeness(a.join, b.join, 4);
  score += WEIGHTS.join * joinScore;
  if (a.join === b.join) reasons.push("Same ease of joining");

  const memberScore = logCloseness(a.members, b.members);
  score += WEIGHTS.members * memberScore;
  if (memberScore > 0.82) reasons.push("Similar membership");

  if (a.acres == null && b.acres == null) {
    score += WEIGHTS.acres;
    reasons.push("Both urban / no acreage");
  } else if (a.acres != null && b.acres != null) {
    const acreScore = logCloseness(a.acres, b.acres);
    score += WEIGHTS.acres * acreScore;
    if (acreScore > 0.82) reasons.push("Similar land size");
  }

  const yearScore = closeness(a.founded, b.founded, 90);
  score += WEIGHTS.founded * yearScore;
  if (yearScore > 0.85) reasons.push("Founded in the same era");

  if (a.active === b.active) {
    score += WEIGHTS.active;
    if (!a.active) reasons.push("Both inactive");
  }

  const ecoScore = jaccard(a.eco, b.eco);
  score += WEIGHTS.eco * ecoScore;
  const sharedEco = sharedList(a.eco, b.eco);
  if (sharedEco.length >= 2) reasons.push(`Same eco work (${sharedEco.slice(0, 2).join(", ")})`);
  else if (ecoScore === 1 && sharedEco.length === 1) reasons.push(`Same eco work (${sharedEco[0]})`);

  const fundScore = jaccard(a.funding, b.funding);
  score += WEIGHTS.funding * fundScore;

  const lifeScore = jaccard(a.life, b.life);
  score += WEIGHTS.life * lifeScore;

  if (a.lat != null && a.lng != null && b.lat != null && b.lng != null) {
    const km = kmBetween({ lat: a.lat, lng: a.lng }, { lat: b.lat, lng: b.lng });
    const distScore = Math.exp(-km / 2200);
    score += WEIGHTS.distance * distScore;
    if (km < 250) reasons.push("Nearby");
    else if (km < 900) reasons.push("Same part of the world");
  }

  const percent = Math.max(0, Math.min(100, Math.round((100 * score) / MAX_SCORE)));
  const ranked = reasons.slice(0, 4);
  const result: SimilarityHit = { score, percent, reasons: ranked };
  pairCache.set(key, result);
  return result;
}

export function similarToSlug(value: string | null | undefined): string | null {
  if (!value) return null;
  const community = getCommunity(value);
  return community?.slug ?? null;
}
