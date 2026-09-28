import { communities, legalCategories, regions, type Community } from "./communities";
import { compareCountries } from "@/lib/country-scope";
import { compactKinds, compactKindBySlug } from "./compact-kinds";
import { coordsFor } from "./coordinates";
import { dailyLifeFor } from "./daily-life";
import { fundingFor, fundingKindLabels, inferKind, yearSortValue, type FundingKind } from "./funding";
import { informalFor } from "./informal-agreements";
import {
  formatDistance,
  isNearFilter,
  kmBetween,
  withinRadius,
  type NearFilter,
} from "./geo";
import {
 entitiesFor,
 layerLabels,
 layerOrder,
 legalFormsFor,
 statusLabels,
 type EntityStatus,
} from "./legal-entities";
import { browseGroupForForm, formBrowseGroupOrder, guideForForm } from "./legal-form-guides";
import { easeLabels, visitJoinFor, type Ease } from "./visit-join";
import { understoodFor, understoodLabels } from "./understood";
import { complexityLabels, landFor, landTenures, type LandComplexity } from "./land-ownership";
import { volunteerFor, volunteerProgramCount } from "./volunteer-programs";
import {
 governanceFor,
 governanceModels,
 modelLabels,
 uniqueGovernanceCount,
 uniqueGovernanceTag,
 type GovernanceModel,
} from "./governance";
import { similarToSlug, similarityTo } from "./similarity";

export type Junction = "all" | "any";

export type SearchOp =
 | "contains"
 | "not-contains"
 | "equals"
 | "starts"
 | "gte"
 | "lte"
 | "eq"
 | "between"
 | "empty"
 | "not-empty"
 | "is"
 | "is-not"
 | "includes"
 | "excludes";

export type FieldKind = "text" | "number" | "enum" | "list" | "bool";

export type FieldOption = { value: string; label: string };

export type SearchField = {
 id: string;
 label: string;
 section: string;
 kind: FieldKind;
 options?: FieldOption[];
 hint?: string;
};

export type SearchRule = {
 id: string;
 field: string;
 op: SearchOp;
 value: string;
 value2: string;
 negate: boolean;
};

export type SearchQuery = {
 match: Junction;
 keywordMatch: Junction;
 keywords: string[];
 rules: SearchRule[];
 excludeKeywords: string[];
 excludeRules: SearchRule[];
 near: NearFilter | null;
 similarTo: string | null;
};

export type SearchHit = {
 community: Community;
 reasons: string[];
};

type SearchDoc = {
 community: Community;
 text: Record<string, string>;
 numbers: Record<string, number | null>;
 numberLists: Record<string, number[]>;
 enums: Record<string, string>;
 lists: Record<string, string[]>;
 bools: Record<string, boolean>;
};

const countries = Array.from(new Set(communities.map((c) => c.country))).sort(compareCountries);

const legalFamilies = Array.from(new Set(legalCategories.map((form) => guideForForm(form).family))).sort((a, b) => a.localeCompare(b),);

const easeOptions: FieldOption[] = ([1, 2, 3, 4, 5] as Ease[]).map((n) => ({
 value: String(n),
 label: `${n} · ${easeLabels[n]}`,
}));

const understoodOptions: FieldOption[] = ([1, 2, 3, 4, 5] as Ease[]).map((n) => ({
 value: String(n),
 label: `${n} · ${understoodLabels[n]}`,
}));

const legalFormOptions: FieldOption[] = legalCategories.map((form) => ({ value: form, label: form }));

const compactOptions: FieldOption[] = compactKinds.map((kind) => ({
 value: kind.slug,
 label: kind.title,
}));

const fundingKindOptions: FieldOption[] = (Object.keys(fundingKindLabels) as FundingKind[]).map((kind) => ({ value: kind, label: fundingKindLabels[kind] }),);

export const searchSections = [
 "Anywhere",
 "Place",
 "Size & time",
 "Legal",
 "Land",
 "Governance",
 "Visit & join",
 "Funding",
 "Daily life",
 "Informal agreements",
 "Story",
] as const;

export const searchFields: SearchField[] = [
 {
 id: "anywhere",
 label: "Any field",
 section: "Anywhere",
 kind: "text",
 hint: "The whole village page. Prefer the keyword box above when you have several words.",
 },
 { id: "name", label: "Name", section: "Place", kind: "text" },
 { id: "location", label: "Town or place", section: "Place", kind: "text" },
 {
 id: "region",
 label: "Region",
 section: "Place",
 kind: "enum",
 options: regions.map((region) => ({ value: region, label: region })),
 },
 {
 id: "country",
 label: "Country",
 section: "Place",
 kind: "enum",
 options: countries.map((country) => ({ value: country, label: country })),
 },
 { id: "website", label: "Website", section: "Place", kind: "text" },
 { id: "foundedYear", label: "Founded (year)", section: "Size & time", kind: "number" },
 { id: "members", label: "Members", section: "Size & time", kind: "number" },
 {
 id: "acres",
 label: "Land (acres)",
 section: "Size & time",
 kind: "number",
 hint: "Urban sites with no acreage count as empty.",
 },
 {
 id: "stillActive",
 label: "Still active",
 section: "Size & time",
 kind: "bool",
 options: [
 { value: "true", label: "Active" },
 { value: "false", label: "Inactive" },
 ],
 },
 {
 id: "legalForm",
 label: "Legal structure",
 section: "Legal",
 kind: "list",
 options: legalFormOptions,
 },
 {
 id: "legalFamily",
 label: "Legal family",
 section: "Legal",
 kind: "list",
 options: legalFamilies.map((family) => ({ value: family, label: family })),
 },
 {
 id: "legalGroup",
 label: "Legal browse group",
 section: "Legal",
 kind: "list",
 options: formBrowseGroupOrder.map((group) => ({ value: group, label: group })),
 },
 { id: "entityName", label: "Legal entity name", section: "Legal", kind: "text" },
 {
 id: "entityLayer",
 label: "Entity layer",
 section: "Legal",
 kind: "list",
 options: layerOrder.map((layer) => ({ value: layer, label: layerLabels[layer] })),
 },
 {
 id: "entityStatus",
 label: "Entity status",
 section: "Legal",
 kind: "list",
 options: (Object.keys(statusLabels) as EntityStatus[]).map((status) => ({
 value: status,
 label: statusLabels[status],
 })),
 },
 { id: "entityCount", label: "Number of entities", section: "Legal", kind: "number" },
 { id: "landOwner", label: "Who holds title", section: "Land", kind: "text" },
 {
 id: "landTenure",
 label: "Kind of tenure",
 section: "Land",
 kind: "enum",
 options: landTenures.map((tenure) => ({ value: tenure, label: tenure })),
 },
 {
 id: "landComplexity",
 label: "Is title split?",
 section: "Land",
 kind: "enum",
 options: (["simple", "split"] as LandComplexity[]).map((value) => ({
 value,
 label: complexityLabels[value],
 })),
 hint: "Split means dirt, buildings, commons, or the state sit with different holders.",
 },
 {
 id: "landHowHeld",
 label: "How the land is divided",
 section: "Land",
 kind: "text",
 hint: "Narrative of lots vs commons, ground leases, state land, recovered villages.",
 },
 {
 id: "govModel",
 label: "Governance model",
 section: "Governance",
 kind: "enum",
 options: governanceModels.map((model: GovernanceModel) => ({
 value: model,
 label: modelLabels[model],
 })),
 hint: "How the village actually decides: consensus, sociocracy, a board, a federation, and the rest.",
 },
 {
 id: "uniqueGovernance",
 label: uniqueGovernanceTag,
 section: "Governance",
 kind: "bool",
 options: [
 { value: "true", label: uniqueGovernanceTag },
 { value: "false", label: "Typical structure" },
 ],
 hint: `Twenty villages in this atlas (${uniqueGovernanceCount}) whose inner government is unusual enough to tag. Filter here, then read the deeper dive on the village page.`,
 },
 { id: "govWho", label: "Who decides", section: "Governance", kind: "text" },
 { id: "govBodies", label: "Governing bodies", section: "Governance", kind: "text" },
 { id: "govHow", label: "How a decision travels", section: "Governance", kind: "text" },
 {
 id: "visitEase",
 label: "Ease of visiting",
 section: "Visit & join",
 kind: "number",
 options: easeOptions,
 hint: "1 is very hard, 5 is easy.",
 },
 {
 id: "joinEase",
 label: "Ease of joining",
 section: "Visit & join",
 kind: "number",
 options: easeOptions,
 hint: "1 is very hard, 5 is easy.",
 },
 { id: "visitProcess", label: "Visiting process", section: "Visit & join", kind: "text" },
 { id: "joinProcess", label: "Joining process", section: "Visit & join", kind: "text" },
 {
 id: "understood",
 label: "How well understood",
 section: "Visit & join",
 kind: "number",
 options: understoodOptions,
 hint: "1 is mysterious, 5 is well understood. Public record, not how nice they are.",
 },
 {
 id: "hasVolunteerProgram",
 label: "Volunteer program",
 section: "Visit & join",
 kind: "bool",
 options: [
 { value: "true", label: "Has a dedicated volunteer page" },
 { value: "false", label: "No dedicated volunteer page" },
 ],
 hint: `Only villages with a signup page on their own website (${volunteerProgramCount} in this atlas). Internships and work-exchange count. Experience Week, WWOOF-only, and a passing mention of volunteering do not.`,
 },
 {
 id: "volunteerSignup",
 label: "Volunteer signup",
 section: "Visit & join",
 kind: "text",
 hint: "The signup URL and how the program works.",
 },
 { id: "funding", label: "Funding (any text)", section: "Funding", kind: "text" },
 {
 id: "fundingKind",
 label: "Kind of money",
 section: "Funding",
 kind: "list",
 options: fundingKindOptions,
 },
 {
 id: "fundingSide",
 label: "Public or private money",
 section: "Funding",
 kind: "list",
 options: [
 { value: "public", label: "Public grants and contracts" },
 { value: "private", label: "Private-citizen money" },
 ],
 },
 {
 id: "fundingCertainty",
 label: "Funding certainty",
 section: "Funding",
 kind: "list",
 options: [
 { value: "documented", label: "Documented" },
 { value: "estimated", label: "Estimated" },
 ],
 },
 { id: "fundingYear", label: "Funding year", section: "Funding", kind: "number" },
 { id: "dailyTypical", label: "Typical daily activity", section: "Daily life", kind: "text" },
 { id: "dailyUnique", label: "What it's known for", section: "Daily life", kind: "text" },
 {
 id: "compactKind",
 label: "Informal compact",
 section: "Informal agreements",
 kind: "list",
 options: compactOptions,
 },
 { id: "compactWhy", label: "Why that compact is likely", section: "Informal agreements", kind: "text" },
 { id: "summary", label: "Summary", section: "Story", kind: "text" },
 { id: "businessModel", label: "Business model", section: "Story", kind: "text" },
 { id: "foundingProcess", label: "Founding process", section: "Story", kind: "text" },
 { id: "governance", label: "Governance", section: "Story", kind: "text" },
 { id: "timeline", label: "Timeline", section: "Story", kind: "text" },
];

const fieldById = new Map(searchFields.map((field) => [field.id, field]));

export function searchField(id: string) {
 return fieldById.get(id);
}

export const opLabels: Record<SearchOp, string> = {
 contains: "contains",
 "not-contains": "does not contain",
 equals: "equals",
 starts: "starts with",
 gte: "at least",
 lte: "at most",
 eq: "equals",
 between: "between",
 empty: "is empty",
 "not-empty": "is not empty",
 is: "is",
 "is-not": "is not",
 includes: "includes",
 excludes: "does not include",
};

export function opsFor(kind: FieldKind): SearchOp[] {
 switch (kind) {
 case "text":
 return ["contains", "not-contains", "equals", "starts", "empty", "not-empty"];
 case "number":
 return ["gte", "lte", "eq", "between", "empty", "not-empty"];
 case "enum":
 return ["is", "is-not", "empty", "not-empty"];
 case "list":
 return ["includes", "excludes"];
 case "bool":
 return ["is"];
 }
}

export function defaultOp(kind: FieldKind): SearchOp {
 return opsFor(kind)[0];
}

export function defaultValue(field: SearchField): string {
 if (field.kind === "bool") return "true";
 return "";
}

function uid() {
 return `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function makeRule(partial: Partial<SearchRule>, id: string): SearchRule {
 const field = searchField(partial.field ?? "anywhere") ?? searchFields[0];
 return {
 id,
 field: field.id,
 op: partial.op ?? defaultOp(field.kind),
 value: partial.value ?? defaultValue(field),
 value2: partial.value2 ?? "",
 negate: partial.negate ?? false,
 };
}

export function newRule(partial: Partial<SearchRule> = {}): SearchRule {
 return makeRule(partial, uid());
}

export function emptyQuery(): SearchQuery {
 return {
  match: "all",
  keywordMatch: "all",
  keywords: [],
  rules: [makeRule({}, "seed")],
  excludeKeywords: [],
  excludeRules: [],
  near: null,
  similarTo: null,
 };
}

export function isDefaultQuery(query: SearchQuery) {
 if (query.match !== "all" || query.keywordMatch !== "all" || query.keywords.length > 0 || query.rules.length !== 1) {
 return false;
 }
 if ((query.excludeKeywords ?? []).length > 0) return false;
 if ((query.excludeRules ?? []).some(isActiveRule)) return false;
 if (query.near && isNearFilter(query.near)) return false;
 if (similarToSlug(query.similarTo)) return false;
 const rule = query.rules[0];
 return rule.field === "anywhere" && rule.op === "contains" && rule.value.trim() === "" && !rule.negate;
}

export function queryNearVillage(slug: string, name: string, radius = 500): SearchQuery | null {
 const point = coordsFor(slug);
 if (!point) return null;
 return {
  ...emptyQuery(),
  near: {
   label: name,
   lat: point.lat,
   lng: point.lng,
   radius,
   unit: "mi",
  },
 };
}

const MAX_KEYWORDS = 80;

export function normalizeKeywords(values: string[]): string[] {
 const seen = new Set<string>();
 const out: string[] = [];
 for (const raw of values) {
 const value = raw.replace(/\s+/g, " ").trim();
 if (!value) continue;
 const key = value.toLowerCase();
 if (seen.has(key)) continue;
 seen.add(key);
 out.push(value);
 if (out.length >= MAX_KEYWORDS) break;
 }
 return out;
}

/** Comma splits; spaces stay inside a keyword so “land trust” is one term. */
export function splitKeywordInput(raw: string): string[] {
 return normalizeKeywords(raw.split(","));
}

function joinText(parts: Array<string | undefined | null>) {
 return parts.filter((part): part is string => Boolean(part && part.trim())).join("·");
}

function buildDoc(community: Community): SearchDoc {
 const forms = legalFormsFor(community.slug);
 const entities = entitiesFor(community.slug);
 const access = visitJoinFor(community.slug);
 const known = understoodFor(community.slug);
 const volunteer = volunteerFor(community.slug);
 const land = landFor(community.slug);
 const gov = governanceFor(community.slug);
 const money = fundingFor(community.slug);
 const life = dailyLifeFor(community.slug);
 const informal = informalFor(community.slug);
 const families = Array.from(new Set(forms.map((form) => guideForForm(form).family)));
 const groups = Array.from(new Set(forms.map((form) => browseGroupForForm(form))));
 const publicItems = money.grants.map((item) => ({ item, side: "public" as const }));
 const privateItems = money.private.map((item) => ({ item, side: "private" as const }));
 const fundingItems = [...publicItems, ...privateItems].filter((row) => row.item.source !== "No major public grant found" && row.item.source !== "Not assembled",);
 const fundingYears = fundingItems
.map((row) => yearSortValue(row.item.year))
.filter((year) => year > 0);
 const fundingKinds = Array.from(new Set(fundingItems.map((row) =>
 inferKind(row.item, row.side === "public" ? "grants": "private"),),),);
 const landText = joinText([
 land.owner,
 land.tenure,
 land.howHeld,
 land.narrative,
...land.divided.flatMap((parcel) => [parcel.label, parcel.holder, parcel.share, parcel.what]),
 ]);
 const govBodies = gov.bodies.map((body) => `${body.name}. ${body.role}`).join(" ");
 const govDive = gov.dive
 ? joinText([
 gov.dive.title,
 gov.dive.lead,
...gov.dive.organs.flatMap((organ) => [organ.name, organ.what]),
 gov.dive.path,
 gov.dive.history,
 gov.dive.tension,
 ])
 : "";
 const govText = joinText([
 gov.modelLabel,
 gov.unique ? uniqueGovernanceTag : "",
 gov.summary,
 gov.whoDecides,
 gov.howItRuns,
 govBodies,
 govDive,
 ]);
 const compactTitles = informal.map((row) => compactKindBySlug(row.kind)?.title ?? row.kind);
 const typical = life.typical.map((row) => `${row.title}. ${row.detail}`).join(" ");
 const unique = `${life.unique.title}. ${life.unique.detail}`;
 const entityText = entities
.map((entity) =>
 joinText([
 entity.name,
 entity.kind,
 entity.role,
 entity.year,
 entity.identifier,
 entity.notes,
 layerLabels[entity.layer],
 statusLabels[entity.status],
 ]),)
.join(" ");
 const fundingText = joinText([
 money.overview,
 money.grantsHeadline,
 money.privateHeadline,
...fundingItems.flatMap((row) => [
 row.item.source,
 row.item.amount,
 row.item.year,
 row.item.note,
 fundingKindLabels[inferKind(row.item, row.side === "public" ? "grants": "private")],
 ]),
 ]);
 const compactText = informal
.map((row, i) => `${compactTitles[i] ?? row.kind}. ${row.why}`)
.join(" ");
 const timeline = community.timeline.map((row) => `${row.year} ${row.event}`).join(" ");
 const text: Record<string, string> = {
 name: community.name,
 location: community.location,
 region: community.region,
 country: community.country,
 website: community.website,
 visitProcess: access.visitProcess,
 joinProcess: access.joinProcess,
 volunteerSignup: volunteer ? joinText(["Volunteer program", volunteer.note, volunteer.url]): "",
 funding: fundingText,
 dailyTypical: typical,
 dailyUnique: unique,
 compactWhy: compactText,
 summary: community.summary,
 businessModel: community.businessModel,
 foundingProcess: community.foundingProcess,
 timeline,
 entityName: entityText,
 legalForm: forms.join(" "),
 legalFamily: families.join(" "),
 landOwner: land.owner,
 landHowHeld: landText,
 govWho: gov.whoDecides,
 govBodies: joinText([govBodies, govDive]),
 govHow: joinText([gov.howItRuns, govDive]),
 governance: joinText([community.governance, govText]),
 };
 text.anywhere = [
 community.name,
 community.location,
 community.region,
 community.country,
 community.website,
 community.summary,
 community.businessModel,
 community.foundingProcess,
 community.governance,
 community.legalStructure,
 community.legalCategory,
 community.foundedLabel,
 community.membersLabel,
 community.acresLabel,
 community.stillActive ? "Still active": "Inactive",
 timeline,
 forms.join(" "),
 families.join(" "),
 groups.join(" "),
 entityText,
 landText,
 land.tenure,
 complexityLabels[land.complexity],
 govText,
 gov.modelLabel,
 gov.unique ? uniqueGovernanceTag : "",
 access.visitProcess,
 access.joinProcess,
 easeLabels[access.visit],
 easeLabels[access.join],
 understoodLabels[known],
 volunteer ? `Volunteer program. ${volunteer.note} ${volunteer.url}`: "",
 fundingText,
 typical,
 unique,
 compactText,
 compactTitles.join(" "),
 ].join(" ");

 return {
 community,
 text,
 numbers: {
 foundedYear: community.foundedYear,
 members: community.members,
 acres: community.acres,
 visitEase: access.visit,
 joinEase: access.join,
 understood: known,
 entityCount: entities.length,
 },
 numberLists: {
 fundingYear: fundingYears,
 },
 enums: {
 region: community.region,
 country: community.country,
 landTenure: land.tenure,
 landComplexity: land.complexity,
 govModel: gov.model,
 },
 lists: {
 legalForm: forms,
 legalFamily: families,
 legalGroup: groups,
 entityLayer: Array.from(new Set(entities.map((entity) => entity.layer))),
 entityStatus: Array.from(new Set(entities.map((entity) => entity.status))),
 fundingKind: fundingKinds,
 fundingSide: Array.from(new Set(fundingItems.map((row) => row.side))),
 fundingCertainty: Array.from(new Set(fundingItems.map((row) => row.item.certainty))),
 compactKind: informal.map((row) => row.kind),
 },
 bools: {
 stillActive: community.stillActive,
 hasVolunteerProgram: Boolean(volunteer),
 uniqueGovernance: gov.unique,
 },
 };
}

let docsCache: SearchDoc[] | null = null;

function allDocs() {
 if (!docsCache) docsCache = communities.map(buildDoc);
 return docsCache;
}

function norm(value: string) {
 return value.trim().toLowerCase();
}

function parseNumber(value: string): number | null {
 const n = Number(value);
 return Number.isFinite(n) ? n: null;
}

function needsValue(op: SearchOp) {
 return op !== "empty" && op !== "not-empty";
}

export function isActiveRule(rule: SearchRule) {
 if (!searchField(rule.field)) return false;
 if (!needsValue(rule.op)) return true;
 if (rule.op === "between") return parseNumber(rule.value) !== null && parseNumber(rule.value2) !== null;
 return rule.value.trim() !== "";
}

export function ruleChipLabel(rule: SearchRule): string | null {
 if (!isActiveRule(rule)) return null;
 const field = searchField(rule.field);
 if (!field) return null;
 const not = rule.negate ? "not " : "";
 if (!needsValue(rule.op)) return `${not}${field.label} ${opLabels[rule.op]}`;
 const value = optionLabel(field, rule.value);
 if (rule.op === "between") return `${not}${field.label} between ${rule.value}–${rule.value2}`;
 return `${not}${field.label} ${opLabels[rule.op]} ${value}`;
}

function compareNumber(actual: number, op: SearchOp, a: number, b: number | null) {
 switch (op) {
 case "gte":
 return actual >= a;
 case "lte":
 return actual <= a;
 case "eq":
 return actual === a;
 case "between":
 return b !== null && actual >= Math.min(a, b) && actual <= Math.max(a, b);
 default:
 return false;
 }
}

function optionLabel(field: SearchField, value: string) {
 return field.options?.find((opt) => opt.value === value)?.label ?? value;
}

function describeRule(field: SearchField, rule: SearchRule) {
 const not = rule.negate ? "not": "";
 if (rule.op === "empty") return `${not}${field.label} is empty`;
 if (rule.op === "not-empty") return `${not}${field.label} is not empty`;
 if (rule.op === "between") return `${not}${field.label} between ${rule.value} and ${rule.value2}`;
 const shown = optionLabel(field, rule.value);
 return `${not}${field.label} ${opLabels[rule.op]} ${shown}`;
}

function evaluate(doc: SearchDoc, rule: SearchRule): { ok: boolean; reason: string } {
 const field = searchField(rule.field);
 if (!field) return { ok: false, reason: "" };
 const reason = describeRule(field, rule);
 let hit = false;

 if (field.kind === "text") {
 const hay = doc.text[field.id] ?? "";
 const needle = norm(rule.value);
 if (rule.op === "empty") hit = hay.trim() === "";
 else if (rule.op === "not-empty") hit = hay.trim() !== "";
 else if (rule.op === "contains") hit = norm(hay).includes(needle);
 else if (rule.op === "not-contains") hit = !norm(hay).includes(needle);
 else if (rule.op === "equals") hit = norm(hay) === needle;
 else if (rule.op === "starts") hit = norm(hay).startsWith(needle);
 } else if (field.kind === "number") {
 const list = doc.numberLists[field.id];
 const single = doc.numbers[field.id];
 if (rule.op === "empty") {
 hit = list ? list.length === 0: single === null || single === undefined;
 } else if (rule.op === "not-empty") {
 hit = list ? list.length > 0: single !== null && single !== undefined;
 } else {
 const a = parseNumber(rule.value);
 const b = parseNumber(rule.value2);
 if (a === null) hit = false;
 else if (list) hit = list.some((n) => compareNumber(n, rule.op, a, b));
 else if (single === null || single === undefined) hit = false;
 else hit = compareNumber(single, rule.op, a, b);
 }
 } else if (field.kind === "enum") {
 const actual = doc.enums[field.id] ?? "";
 if (rule.op === "empty") hit = actual.trim() === "";
 else if (rule.op === "not-empty") hit = actual.trim() !== "";
 else if (rule.op === "is") hit = actual === rule.value;
 else if (rule.op === "is-not") hit = actual !== rule.value;
 } else if (field.kind === "list") {
 const actual = doc.lists[field.id] ?? [];
 if (rule.op === "includes") hit = actual.includes(rule.value);
 else if (rule.op === "excludes") hit = !actual.includes(rule.value);
 } else if (field.kind === "bool") {
 const actual = doc.bools[field.id] ?? false;
 hit = actual === (rule.value !== "false");
 }

 if (rule.negate) hit = !hit;
 return { ok: hit, reason };
}

export function slugsMatching(field: string, op: SearchOp, value: string, value2 = ""): string[] {
  const rule: SearchRule = { id: "venn", field, op, value, value2, negate: false };
  if (!isActiveRule(rule)) return [];
  return allDocs()
    .filter((doc) => evaluate(doc, rule).ok)
    .map((doc) => doc.community.slug);
}

export function runSearch(query: SearchQuery): SearchHit[] {
 const docs = allDocs();
 const keywords = normalizeKeywords(query.keywords);
 const active = query.rules.filter(isActiveRule);
 const excludeKeywords = normalizeKeywords(query.excludeKeywords ?? []);
 const excludeActive = (query.excludeRules ?? []).filter(isActiveRule);
 const near = isNearFilter(query.near) ? query.near : null;
 const similarTo = similarToSlug(query.similarTo);
 const filtering =
  keywords.length > 0 ||
  active.length > 0 ||
  excludeKeywords.length > 0 ||
  excludeActive.length > 0 ||
  Boolean(near) ||
  Boolean(similarTo);
 if (!filtering) {
  return docs.map((doc) => ({ community: doc.community, reasons: [] }));
 }
 const hits: SearchHit[] = [];
 for (const doc of docs) {
  const reasons: string[] = [];
  let keywordPass = true;
  if (keywords.length > 0) {
   const hay = norm(doc.text.anywhere ?? "");
   const matched: string[] = [];
   for (const word of keywords) {
    if (hay.includes(norm(word))) matched.push(word);
   }
   keywordPass = query.keywordMatch === "all" ? matched.length === keywords.length : matched.length > 0;
   if (keywordPass) {
    for (const word of matched) reasons.push(`page mentions “${word}”`);
   }
  }
  const flags = active.map((rule) => {
   const result = evaluate(doc, rule);
   if (result.ok) reasons.push(result.reason);
   return result.ok;
  });
  const rulePass = active.length === 0 ? true : query.match === "all" ? flags.every(Boolean) : flags.some(Boolean);
  if (!keywordPass || !rulePass) continue;
  if (excludeKeywords.length > 0) {
   const hay = norm(doc.text.anywhere ?? "");
   if (excludeKeywords.some((word) => hay.includes(norm(word)))) continue;
  }
  if (excludeActive.some((rule) => evaluate(doc, rule).ok)) continue;
  if (near) {
   const point = coordsFor(doc.community.slug);
   if (!withinRadius(point, near)) continue;
   if (point) {
    reasons.push(`${formatDistance(kmBetween(point, near), near.unit)} from ${near.label}`);
   }
  }
  if (similarTo) {
   const sim = similarityTo(similarTo, doc.community.slug);
   if (doc.community.slug === similarTo) {
    reasons.unshift("The village you picked");
   } else {
    reasons.push(`${sim.percent}% similar`, ...sim.reasons);
   }
  }
  hits.push({ community: doc.community, reasons });
 }
 return hits;
}

export function activeRuleCount(query: SearchQuery) {
 return (
  query.rules.filter(isActiveRule).length +
  (query.excludeRules ?? []).filter(isActiveRule).length +
  (isNearFilter(query.near) ? 1 : 0) +
  (similarToSlug(query.similarTo) ? 1 : 0)
 );
}

export function hasExclusions(query: SearchQuery) {
 return (
  normalizeKeywords(query.excludeKeywords ?? []).length > 0 ||
  (query.excludeRules ?? []).some(isActiveRule)
 );
}

export type EncodedQuery = {
 m: Junction;
 km?: Junction;
 k?: string[];
 r: Array<[string, SearchOp, string, string, 0 | 1]>;
 xk?: string[];
 xr?: Array<[string, SearchOp, string, string, 0 | 1]>;
 n?: [string, number, number, number, "mi" | "km"];
 s?: string;
};

export function queryPayload(query: SearchQuery): EncodedQuery | undefined {
 if (isDefaultQuery(query)) return undefined;
 const keywords = normalizeKeywords(query.keywords);
 const excludeKeywords = normalizeKeywords(query.excludeKeywords ?? []);
 const excludeRules = query.excludeRules ?? [];
 const near = isNearFilter(query.near) ? query.near : null;
 const similarTo = similarToSlug(query.similarTo);
 return {
  m: query.match,
  ...(keywords.length ? { k: keywords, km: query.keywordMatch } : {}),
  r: encodeRules(query.rules),
  ...(excludeKeywords.length ? { xk: excludeKeywords } : {}),
  ...(excludeRules.length ? { xr: encodeRules(excludeRules) } : {}),
  ...(near ? { n: [near.label, near.lat, near.lng, near.radius, near.unit] } : {}),
  ...(similarTo ? { s: similarTo } : {}),
 };
}

function encodeRules(rules: SearchRule[]): EncodedQuery["r"] {
 return rules.map((rule) => [rule.field, rule.op, rule.value, rule.value2, rule.negate ? 1 : 0]);
}

function decodeRules(rows: unknown, idPrefix: string): SearchRule[] {
 if (!Array.isArray(rows)) return [];
 return rows
  .map((row, index) => {
   if (!Array.isArray(row) || typeof row[0] !== "string") return null;
   const field = searchField(row[0]);
   if (!field) return null;
   const op = (opsFor(field.kind) as string[]).includes(row[1]) ? (row[1] as SearchOp) : defaultOp(field.kind);
   return makeRule(
    {
     field: field.id,
     op,
     value: typeof row[2] === "string" ? row[2] : "",
     value2: typeof row[3] === "string" ? row[3] : "",
     negate: row[4] === 1,
    },
    `${idPrefix}${index}`,
   );
  })
  .filter((rule): rule is SearchRule => Boolean(rule));
}

function toBase64Url(json: string) {
 const bytes = new TextEncoder().encode(json);
 let bin = "";
 for (const byte of bytes) bin += String.fromCharCode(byte);
 return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(raw: string) {
 const padded = raw.replace(/-/g, "+").replace(/_/g, "/");
 const pad = padded.length % 4 === 0 ? "": "=".repeat(4 - (padded.length % 4));
 const bin = atob(padded + pad);
 const bytes = new Uint8Array(bin.length);
 for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
 return new TextDecoder().decode(bytes);
}

export function encodeQuery(query: SearchQuery): string {
 const payload = queryPayload(query);
 return payload ? toBase64Url(JSON.stringify(payload)): "";
}

export function fromPayload(parsed: EncodedQuery): SearchQuery | null {
 if (parsed.m !== "all" && parsed.m !== "any") return null;
 if (!Array.isArray(parsed.r)) return null;
 const rules = decodeRules(parsed.r, "r");
 const keywords = Array.isArray(parsed.k) ? normalizeKeywords(parsed.k.filter((row) => typeof row === "string")) : [];
 const keywordMatch = parsed.km === "any" ? "any" : "all";
 const excludeKeywords = Array.isArray(parsed.xk)
  ? normalizeKeywords(parsed.xk.filter((row) => typeof row === "string"))
  : [];
 const excludeRules = decodeRules(parsed.xr, "x");
 const near = decodeNear(parsed.n);
 const similarTo = similarToSlug(typeof parsed.s === "string" ? parsed.s : null);
 return {
  match: parsed.m,
  keywordMatch,
  keywords,
  rules: rules.length ? rules : emptyQuery().rules,
  excludeKeywords,
  excludeRules,
  near,
  similarTo,
 };
}

function decodeNear(raw: EncodedQuery["n"] | undefined): NearFilter | null {
 if (!Array.isArray(raw) || raw.length < 5) return null;
 const candidate = {
  label: String(raw[0] ?? ""),
  lat: Number(raw[1]),
  lng: Number(raw[2]),
  radius: Number(raw[3]),
  unit: raw[4] === "km" ? "km" : "mi",
 } as NearFilter;
 return isNearFilter(candidate) ? candidate : null;
}

export function parseEncoded(raw: unknown): EncodedQuery | undefined {
 if (!raw) return undefined;
 if (typeof raw === "object" && raw !== null && "m" in raw && "r" in raw) {
 return raw as EncodedQuery;
 }
 if (typeof raw !== "string") return undefined;
 const text = raw.startsWith('"') && raw.endsWith('"') ? (() => {
 try {
 return JSON.parse(raw) as string;
 } catch {
 return raw;
 }
 })(): raw;
 try {
 if (text.startsWith("{")) {
 const parsed = JSON.parse(text) as EncodedQuery;
 if (parsed && parsed.m && parsed.r) return parsed;
 }
 const json = fromBase64Url(text);
 const parsed = JSON.parse(json) as EncodedQuery;
 if (parsed && parsed.m && parsed.r) return parsed;
 } catch {
 return undefined;
 }
 return undefined;
}

export function decodeQuery(raw: string | undefined): SearchQuery | null {
 const payload = parseEncoded(raw);
 return payload ? fromPayload(payload): null;
}

export type SearchPreset = {
 id: string;
 title: string;
 blurb: string;
 query: () => SearchQuery;
};

function preset(rules: SearchRule[], match: Junction = "all"): SearchQuery {
 return { ...emptyQuery(), match, rules };
}

export const searchPresets: SearchPreset[] = [
 {
 id: "easy-visit",
 title: "Easy to visit",
 blurb: "Fairly easy or easy for a stranger",
 query: () => preset([newRule({ field: "visitEase", op: "gte", value: "4" })]),
 },
 {
 id: "volunteer",
 title: "Volunteer programs",
 blurb: "A dedicated volunteer, internship, or work-exchange page",
 query: () => preset([newRule({ field: "hasVolunteerProgram", op: "is", value: "true" })]),
 },
 {
 id: "hard-join",
 title: "Hard to join",
 blurb: "Hard or very hard to become a member",
 query: () => preset([newRule({ field: "joinEase", op: "lte", value: "2" })]),
 },
 {
 id: "us-co-op",
 title: "U.S. housing co-ops",
 blurb: "Active housing cooperatives in the United States",
 query: () =>
 preset([
 newRule({ field: "country", op: "is", value: "United States" }),
 newRule({ field: "legalForm", op: "includes", value: "Housing cooperative" }),
 newRule({ field: "stillActive", op: "is", value: "true" }),
 ]),
 },
 {
 id: "clt",
 title: "Community land trusts",
 blurb: "Only where a CLT is documented",
 query: () => preset([newRule({ field: "legalForm", op: "includes", value: "Community land trust" })]),
 },
 {
 id: "split-title",
 title: "Split title",
 blurb: "Dirt, buildings, commons, or the state sit with different holders",
 query: () => preset([newRule({ field: "landComplexity", op: "is", value: "split" })]),
 },
 {
 id: "unique-gov",
 title: uniqueGovernanceTag,
 blurb: "Twenty villages whose inner government is unusual enough to tag",
 query: () => preset([newRule({ field: "uniqueGovernance", op: "is", value: "true" })]),
 },
 {
 id: "income-share",
 title: "Income-sharing",
 blurb: "Common purse as a legal structure",
 query: () => preset([newRule({ field: "legalForm", op: "includes", value: "Income-sharing" })]),
 },
 {
 id: "old",
 title: "Founded before 1970",
 blurb: "The long-lived ones",
 query: () => preset([newRule({ field: "foundedYear", op: "lte", value: "1969" })]),
 },
 {
 id: "village-scale",
 title: "20–150 members",
 blurb: "Village scale: not a handful, not a town",
 query: () => preset([newRule({ field: "members", op: "between", value: "20", value2: "150" })]),
 },
 {
 id: "big",
 title: "100+ members",
 blurb: "Larger villages",
 query: () => preset([newRule({ field: "members", op: "gte", value: "100" })]),
 },
 {
 id: "land",
 title: "500+ acres",
 blurb: "Serious land",
 query: () => preset([newRule({ field: "acres", op: "gte", value: "500" })]),
 },
 {
 id: "grants",
 title: "Documented public money",
 blurb: "A published grant or contract",
 query: () =>
 preset([
 newRule({ field: "fundingSide", op: "includes", value: "public" }),
 newRule({ field: "fundingCertainty", op: "includes", value: "documented" }),
 ]),
 },
 {
 id: "labour",
 title: "Labour compact",
 blurb: "Villages likely to run a work roster",
 query: () => preset([newRule({ field: "compactKind", op: "includes", value: "labour-roster" })]),
 },
 {
 id: "europe",
 title: "Europe",
 blurb: "Any European country in the atlas, match any country",
 query: () =>
 preset([
 "Iceland",
 "Ireland",
 "United Kingdom",
 "France",
 "Germany",
 "Spain",
 "Portugal",
 "Italy",
 "Denmark",
 "Sweden",
 "Netherlands",
 "Switzerland",
 "Austria",
 "Hungary",
 "Greece",
 ]
.filter((country) => communities.some((c) => c.country === country))
.map((country) => newRule({ field: "country", op: "is", value: country })),
 "any",),
 },
 {
 id: "hammocks",
 title: "Mentions hammocks or tofu",
 blurb: "Keywords across the whole village page, match any",
 query: () => ({
...emptyQuery(),
 keywordMatch: "any",
 keywords: ["hammock", "tofu"],
 }),
 },
];

export type SavedSearch = {
 id: string;
 name: string;
 encoded: string;
 at: number;
};

const SAVED_KEY = "village-charter-saved-searches";

export function loadSavedSearches(): SavedSearch[] {
 if (typeof window === "undefined") return [];
 try {
 const raw = window.localStorage.getItem(SAVED_KEY);
 if (!raw) return [];
 const parsed = JSON.parse(raw) as SavedSearch[];
 return Array.isArray(parsed) ? parsed.slice(0, 20): [];
 } catch {
 return [];
 }
}

export function storeSavedSearches(rows: SavedSearch[]) {
 if (typeof window === "undefined") return;
 window.localStorage.setItem(SAVED_KEY, JSON.stringify(rows.slice(0, 20)));
}

export const quickAdds: { field: string; label: string }[] = [
 { field: "legalForm", label: "Legal structure" },
 { field: "landComplexity", label: "Split title" },
 { field: "landTenure", label: "Tenure" },
 { field: "country", label: "Country" },
 { field: "members", label: "Members" },
 { field: "foundedYear", label: "Founded" },
 { field: "visitEase", label: "Visit" },
 { field: "joinEase", label: "Join" },
 { field: "hasVolunteerProgram", label: "Volunteer program" },
 { field: "fundingKind", label: "Kind of money" },
 { field: "compactKind", label: "Compact" },
 { field: "stillActive", label: "Active" },
];
