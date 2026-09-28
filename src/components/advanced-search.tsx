import { Link, useNavigate } from "@tanstack/react-router";
import { Copy, LayoutGrid, List, Map as MapIcon, Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AtlasMap } from "@/components/atlas-map";
import { CommunityCard } from "@/components/community-card";
import { CommunityTable } from "@/components/community-table";
import { Pager } from "@/components/pager";
import { RadiusSearch } from "@/components/radius-search";
import { VillagePicker } from "@/components/village-picker";
import { Button } from "@/components/ui/button";
import {
 decodeQuery,
 emptyQuery,
 encodeQuery,
 hasExclusions,
 isDefaultQuery,
 loadSavedSearches,
 newRule,
 normalizeKeywords,
 opsFor,
 opLabels,
 quickAdds,
 runSearch,
 searchField,
 searchFields,
 searchPresets,
 searchSections,
 splitKeywordInput,
 storeSavedSearches,
 type SavedSearch,
 type SearchOp,
 type SearchQuery,
 type SearchRule,
} from "@/data/advanced-search";
import { paginate, parsePageParam, getCommunity, sortCommunities, sortOptions, type SortKey, type ViewMode } from "@/data/communities";
import { coordsFor } from "@/data/coordinates";
import { isNearFilter, kmBetween, radiusKm, reverseGeocode, type NearFilter } from "@/data/geo";
import { similarToSlug, similarityTo } from "@/data/similarity";
import { usePlusAccess } from "@/lib/plus-membership";
import { useCountryScope } from "@/lib/country-scope";

export function AdvancedSearchPanel({
 mode = "page",
 encodedQuery,
 page: pageFromUrl,
}: {
 mode?: "page" | "embedded";
 encodedQuery?: string;
 page?: number;
}) {
 const embedded = mode === "embedded";
 const idPrefix = embedded ? "home": "search";
 const resultsId = embedded ? "home-search-results": "search-results";
 const navigate = useNavigate();
 const plus = usePlusAccess();
 const skipSoloOpen = useRef(true);
 const [query, setQuery] = useState<SearchQuery>(() => decodeQuery(encodedQuery) ?? emptyQuery());
 const [sort, setSort] = useState<SortKey | "distance" | "similar">(() => {
  const initial = decodeQuery(encodedQuery);
  if (similarToSlug(initial?.similarTo)) return "similar";
  return isNearFilter(initial?.near) ? "distance" : "random";
 });
 const [randomKey, setRandomKey] = useState(1);
 const [view, setView] = useState<ViewMode>("cards");
 const [saved, setSaved] = useState<SavedSearch[]>([]);
 const [saveName, setSaveName] = useState("");
 const [copied, setCopied] = useState(false);
 const [page, setPage] = useState(pageFromUrl ?? 1);
 const queryKey = encodeQuery(query);
 const prevQueryKey = useRef(queryKey);
 const pinnedScroll = useRef<number | null>(null);

 function pinScroll() {
 if (typeof window === "undefined") return;
 pinnedScroll.current = window.scrollY;
 }

 function restorePinnedScroll() {
 const y = pinnedScroll.current;
 if (y == null || typeof window === "undefined") return;
 if (window.scrollY !== y) window.scrollTo(0, y);
 }

 function updateQuery(updater: SearchQuery | ((prev: SearchQuery) => SearchQuery)) {
 pinScroll();
 setQuery(updater);
 setPage(1);
 }

 useLayoutEffect(() => {
 restorePinnedScroll();
 });

 useEffect(() => {
 setSaved(loadSavedSearches());
 }, []);

 useEffect(() => {
 try {
  const raw = sessionStorage.getItem("vc-search-random");
  const n = raw ? Number(raw) : NaN;
  if (Number.isFinite(n)) {
   setRandomKey(n);
   return;
  }
 } catch {
  /* ignore */
 }
 const n = Math.random();
 try {
  sessionStorage.setItem("vc-search-random", String(n));
 } catch {
  /* ignore */
 }
 setRandomKey(n);
 }, []);

 useEffect(() => {
 if (embedded) return;
 function onPop() {
 const params = new URLSearchParams(window.location.search);
 setQuery(decodeQuery(params.get("q") ?? undefined) ?? emptyQuery());
 setPage(parsePageParam(params.get("page")) ?? 1);
 }
 window.addEventListener("popstate", onPop);
 return () => window.removeEventListener("popstate", onPop);
 }, [embedded]);

 useEffect(() => {
 if (embedded) return;
 const incoming = encodedQuery ?? "";
 if (incoming === encodeQuery(query)) return;
 if (!incoming && isDefaultQuery(query)) return;
 const next = decodeQuery(encodedQuery) ?? emptyQuery();
 setQuery(next);
 if (similarToSlug(next.similarTo)) setSort("similar");
 else if (isNearFilter(next.near)) setSort("distance");
 setPage(pageFromUrl ?? 1);
 }, [encodedQuery, embedded]);

 useEffect(() => {
 if (typeof window === "undefined") return;
 const previous = window.history.scrollRestoration;
 window.history.scrollRestoration = "manual";
 return () => {
 window.history.scrollRestoration = previous;
 };
 }, []);

 useEffect(() => {
 if (embedded) return;
 const handle = window.setTimeout(() => {
 writeSearchUrlQuietly(query, page);
 restorePinnedScroll();
 requestAnimationFrame(restorePinnedScroll);
 }, 200);
 return () => window.clearTimeout(handle);
 }, [query, page, embedded]);

 useEffect(() => {
 if (pinnedScroll.current == null) return;
 const restore = () => restorePinnedScroll();
 restore();
 const t0 = window.setTimeout(restore, 0);
 const t1 = window.setTimeout(restore, 80);
 const t2 = window.setTimeout(() => {
 restore();
 pinnedScroll.current = null;
 }, 600);
 return () => {
 window.clearTimeout(t0);
 window.clearTimeout(t1);
 window.clearTimeout(t2);
 };
 }, [queryKey]);

 useEffect(() => {
 if (prevQueryKey.current === queryKey) return;
 prevQueryKey.current = queryKey;
 setPage(1);
 }, [queryKey]);

 const hits = useMemo(() => runSearch(query), [query]);
 const scope = useCountryScope();
 const dropped = useMemo(() => {
  if (!hasExclusions(query)) return 0;
  return runSearch({ ...query, excludeKeywords: [], excludeRules: [] }).length - hits.length;
 }, [query, hits]);
 const visible = useMemo(() => {
  const rowsIn = scope ? hits.filter((hit) => hit.community.country === scope) : hits;
  const similarTo = similarToSlug(query.similarTo);
  if (sort === "similar" && similarTo) {
   return [...rowsIn]
    .map((hit) => ({
     community: hit.community,
     rank: hit.community.slug === similarTo ? Number.POSITIVE_INFINITY : similarityTo(similarTo, hit.community.slug).score,
    }))
    .sort((a, b) => b.rank - a.rank || a.community.name.localeCompare(b.community.name))
    .map((row) => row.community);
  }
  const near = isNearFilter(query.near) ? query.near : null;
  if (sort === "distance" && near) {
   return [...rowsIn]
    .map((hit) => {
     const point = coordsFor(hit.community.slug);
     return { community: hit.community, km: point ? kmBetween(point, near) : Number.POSITIVE_INFINITY };
    })
    .sort((a, b) => a.km - b.km || a.community.name.localeCompare(b.community.name))
    .map((row) => row.community);
  }
  const key = sort === "distance" || sort === "similar" ? "random" : sort;
  const rows = sortCommunities(rowsIn.map((hit) => hit.community), key, randomKey);
  return rows;
 }, [hits, sort, randomKey, query.near, query.similarTo, scope]);
 const paged = paginate(visible, page);
 const soloSlug = visible.length === 1 ? visible[0].slug : null;

 useEffect(() => {
  if (embedded) return;
  if (!soloSlug) {
   skipSoloOpen.current = false;
   return;
  }
  if (skipSoloOpen.current) {
   skipSoloOpen.current = false;
   return;
  }
  const handle = window.setTimeout(() => {
   void navigate({ to: "/communities/$slug", params: { slug: soloSlug } });
  }, 400);
  return () => window.clearTimeout(handle);
 }, [soloSlug, embedded, navigate]);
 const mapNear = useMemo(() => {
  if (!isNearFilter(query.near)) return null;
  return {
   lat: query.near.lat,
   lng: query.near.lng,
   radiusKm: radiusKm(query.near),
   label: query.near.label,
  };
 }, [query.near]);
 const reasonBySlug = useMemo(() => {
 const map = new Map<string, string[]>();
 for (const hit of hits) map.set(hit.community.slug, hit.reasons);
 return map;
 }, [hits]);

 useEffect(() => {
 if (page !== paged.page) setPage(paged.page);
 }, [page, paged.page]);

 function goPage(n: number) {
 setPage(n);
 if (!embedded) writeSearchUrlQuietly(query, n);
 const el = document.getElementById(resultsId);
 if (!el) return;
 const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 el.scrollIntoView({ behavior: reduce ? "auto": "smooth", block: "start" });
 }

 const filtersOn = !isDefaultQuery(query);
 const showResults = !embedded || filtersOn;

 function setRules(rules: SearchRule[]) {
 updateQuery((prev) => ({ ...prev, rules: rules.length ? rules: [newRule()] }));
 }

 function patchRule(id: string, patch: Partial<SearchRule>) {
 updateQuery((prev) => ({
          ...prev,
 rules: prev.rules.map((rule) => (rule.id === id ? { ...rule, ...patch }: rule)),
 }));
 }

 function changeField(id: string, fieldId: string) {
 const field = searchField(fieldId);
 if (!field) return;
 patchRule(id, {
 field: field.id,
 op: opsFor(field.kind)[0],
 value: field.kind === "bool" ? "true": "",
 value2: "",
 });
 }

 function addRule(fieldId?: string) {
 const rule = fieldId ? newRule({ field: fieldId }): newRule();
 updateQuery((prev) => {
 if (isDefaultQuery(prev) && fieldId) return { ...prev, rules: [rule] };
 return { ...prev, rules: [...prev.rules, rule] };
 });
 }

 function removeRule(id: string) {
 setRules(query.rules.filter((rule) => rule.id !== id));
 }

 function applyPreset(id: string) {
 const preset = searchPresets.find((row) => row.id === id);
 if (preset) updateQuery(preset.query());
 }

 function saveCurrent() {
 const name = saveName.trim();
 if (!name || !filtersOn) return;
 const row: SavedSearch = {
 id: Math.random().toString(36).slice(2, 10),
 name,
 encoded: encodeQuery(query),
 at: Date.now(),
 };
 const next = [row, ...saved.filter((s) => s.encoded !== row.encoded)].slice(0, 20);
 setSaved(next);
 storeSavedSearches(next);
 setSaveName("");
 }

 function loadSaved(row: SavedSearch) {
 updateQuery(decodeQuery(row.encoded) ?? emptyQuery());
 }

 function deleteSaved(id: string) {
 const next = saved.filter((row) => row.id !== id);
 setSaved(next);
 storeSavedSearches(next);
 }

 function changeExcludeField(id: string, fieldId: string) {
  const field = searchField(fieldId);
  if (!field) return;
  patchExcludeRule(id, {
   field: field.id,
   op: opsFor(field.kind)[0],
   value: field.kind === "bool" ? "true" : "",
   value2: "",
  });
 }

 function patchExcludeRule(id: string, patch: Partial<SearchRule>) {
  updateQuery((prev) => ({
   ...prev,
   excludeRules: (prev.excludeRules ?? []).map((rule) => (rule.id === id ? { ...rule, ...patch } : rule)),
  }));
 }

 function addExcludeRule(fieldId?: string) {
  const rule = fieldId ? newRule({ field: fieldId }) : newRule();
  updateQuery((prev) => ({ ...prev, excludeRules: [...(prev.excludeRules ?? []), rule] }));
 }

 function removeExcludeRule(id: string) {
  updateQuery((prev) => ({
   ...prev,
   excludeRules: (prev.excludeRules ?? []).filter((rule) => rule.id !== id),
  }));
 }

 function setNear(near: NearFilter | null) {
  updateQuery((prev) => ({ ...prev, near }));
  if (near) setSort("distance");
  else if (sort === "distance") setSort(similarToSlug(query.similarTo) ? "similar" : "random");
 }

 function setSimilarTo(slug: string | null) {
  updateQuery((prev) => ({ ...prev, similarTo: similarToSlug(slug) }));
  if (slug) setSort("similar");
  else if (sort === "similar") setSort(isNearFilter(query.near) ? "distance" : "random");
 }

 async function pickMapCenter(lat: number, lng: number) {
  const label = (await reverseGeocode(lat, lng)) ?? "Map pin";
  setNear({
   label,
   lat,
   lng,
   radius: query.near?.radius ?? 100,
   unit: query.near?.unit ?? "mi",
  });
 }

 async function copyLink() {
 const encoded = encodeQuery(query);
 const url = new URL(window.location.origin + "/search");
 if (encoded) url.searchParams.set("q", encoded);
 await navigator.clipboard.writeText(url.toString());
 if (!embedded) writeSearchUrlQuietly(query, page);
 setCopied(true);
 window.setTimeout(() => setCopied(false), 1600);
 }

 return (<div id={embedded ? "advanced-search": undefined} className={embedded ? "mt-10 scroll-mt-20": undefined}>
 {embedded ? (<div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Advanced search</p>
 <h2 className="mt-2 font-display text-2xl text-fg sm:text-3xl">Search from this page</h2>
 <p className="mt-3 text-muted">
 Type keywords and add filters. Match all of them, or any. Search near any place, at any radius.
        Rank by villages most similar to one you pick. Routes live on the{" "}
        <Link to="/travel-plan" className="font-medium text-forest hover:underline">
          travel plan
        </Link>{" "}
        page.
 </p>
 </div>): (<div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Search</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
 Advanced search
 </h1>
 <p className="mt-3 text-muted">
 Type keywords and add filters. Match all of them, or any. Search near any place, at any radius.
 Rank by villages most similar to one you pick. Routes live on the{" "}
 <Link to="/travel-plan" className="font-medium text-forest hover:underline">
 travel plan
 </Link>{" "}
 page.
 </p>
 </div>)}

 {showResults && dropped > 0 ? (
  <p className="mt-3 text-sm text-muted">
   <span className="tabular-nums font-medium text-fg">{dropped}</span> dropped by Remove
  </p>
 ) : null}

 <SearchDock
  map={
   embedded ? null : (
    <AtlasMap
     communities={visible}
     lockView
     docked
     startMinimized
     near={mapNear}
     onPickCenter={pickMapCenter}
    />
   )
  }
 >

 <section className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <div className="flex flex-wrap items-center gap-2">
 <h2 className="text-sm font-medium text-fg">Keywords</h2>
 <JunctionChip
 label="All (and)"
 active={query.keywordMatch === "all"}
 onClick={() => updateQuery({ ...query, keywordMatch: "all" })}
 />
 <JunctionChip
 label="Any (or)"
 active={query.keywordMatch === "any"}
 onClick={() => updateQuery({ ...query, keywordMatch: "any" })}
 />
 </div>
 <p className="mt-2 text-sm text-muted">
 The entire village page. Add as many as you want, comma or Enter. A village is listed
 once even if a word hits twice.
 </p>
 <KeywordBox
 keywords={query.keywords}
 onChange={(keywords) => updateQuery((prev) => ({ ...prev, keywords }))}
 />
 </section>

 {embedded && showResults ? (
  <AtlasMap
   communities={visible}
   lockView
   startMinimized
   near={mapNear}
   onPickCenter={pickMapCenter}
  />
 ) : null}

 <section className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <RadiusSearch
 value={isNearFilter(query.near) ? query.near : null}
 onChange={setNear}
 idPrefix={idPrefix}
 />
 </section>

 <section id="similar-to" className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
  <SimilarToSearch value={similarToSlug(query.similarTo)} onChange={setSimilarTo} />
 </section>

 <section className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <div className="flex flex-wrap items-center gap-2">
 <p className="text-sm font-medium text-fg">Match</p>
 <JunctionChip label="All (and)" active={query.match === "all"} onClick={() => updateQuery({ ...query, match: "all" })} />
 <JunctionChip label="Any (or)" active={query.match === "any"} onClick={() => updateQuery({ ...query, match: "any" })} />
 {filtersOn ? (<button
 type="button"
 onClick={() => {
  updateQuery(emptyQuery());
  if (sort === "distance" || sort === "similar") setSort("random");
 }}
 className="ml-auto inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
 >
 Clear all
 </button>): null}
 </div>

 <div
 className="mt-5 space-y-3"
 onPointerDownCapture={pinScroll}
 onFocusCapture={pinScroll}
 >
 {query.rules.map((rule, index) => (<div key={rule.id}>
 {index > 0 ? (<p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-moss">
 {query.match === "all" ? "and": "or"}
 </p>): null}
 <CriterionRow
 rule={rule}
 index={index}
 idPrefix={idPrefix}
 onField={(fieldId) => changeField(rule.id, fieldId)}
 onOp={(op) => patchRule(rule.id, { op })}
 onValue={(value) => patchRule(rule.id, { value })}
 onValue2={(value2) => patchRule(rule.id, { value2 })}
 onNegate={() => patchRule(rule.id, { negate: !rule.negate })}
 onRemove={() => removeRule(rule.id)}
 canRemove={query.rules.length > 1}
 />
 </div>))}
 </div>

 <div className="mt-4 flex flex-wrap gap-2">
 <Button type="button" variant="outline" onClick={() => addRule()}>
 <Plus className="size-4" aria-hidden />
 Add criterion
 </Button>
 </div>
 <div className="mt-3">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Quick add</p>
 <div className="mt-2 flex flex-wrap gap-2">
 {quickAdds.map((item) => (<button
 key={item.field}
 type="button"
 onClick={() => addRule(item.field)}
 className="inline-flex min-h-11 items-center rounded-full bg-panel px-3 text-sm text-fg hover:bg-border"
 >
 + {item.label}
 </button>))}
 </div>
 </div>
 </section>

 <section className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <div className="flex flex-wrap items-center gap-2">
 <h2 className="text-sm font-medium text-fg">Remove</h2>
 <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs text-muted">any of these</span>
 </div>
 <p className="mt-2 text-sm text-muted">
 Drop every village that matches any of these. Same fields as the filters above.
 </p>
 <KeywordBox
 keywords={query.excludeKeywords ?? []}
 onChange={(excludeKeywords) => updateQuery((prev) => ({ ...prev, excludeKeywords }))}
 placeholder="ashram, closed…"
 ariaLabel="Add a word that drops matching villages"
 />
 {(query.excludeRules ?? []).length > 0 ? (
 <div
 className="mt-5 space-y-3"
 onPointerDownCapture={pinScroll}
 onFocusCapture={pinScroll}
 >
 {(query.excludeRules ?? []).map((rule, index) => (<div key={rule.id}>
 {index > 0 ? (<p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-moss">
 or
 </p>): null}
 <CriterionRow
 rule={rule}
 index={index}
 idPrefix={`${idPrefix}-drop`}
 label="Exclusion"
 onField={(fieldId) => changeExcludeField(rule.id, fieldId)}
 onOp={(op) => patchExcludeRule(rule.id, { op })}
 onValue={(value) => patchExcludeRule(rule.id, { value })}
 onValue2={(value2) => patchExcludeRule(rule.id, { value2 })}
 onNegate={() => patchExcludeRule(rule.id, { negate: !rule.negate })}
 onRemove={() => removeExcludeRule(rule.id)}
 canRemove
 />
 </div>))}
 </div>
 ) : null}
 <div className="mt-4 flex flex-wrap gap-2">
 <Button type="button" variant="outline" onClick={() => addExcludeRule()}>
 <Minus className="size-4" aria-hidden />
 Add exclusion
 </Button>
 </div>
 <div className="mt-3">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Drop by</p>
 <div className="mt-2 flex flex-wrap gap-2">
 {quickAdds.map((item) => (<button
 key={item.field}
 type="button"
 onClick={() => addExcludeRule(item.field)}
 className="inline-flex min-h-11 items-center rounded-full bg-panel px-3 text-sm text-fg hover:bg-border"
 >
 − {item.label}
 </button>))}
 </div>
 </div>
 </section>

 <section className="mt-6">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Start from a preset</p>
 <ul className="mt-3 flex flex-wrap gap-2">
 {searchPresets.map((preset) => (<li key={preset.id}>
 <button
 type="button"
 title={preset.blurb}
 onClick={() => applyPreset(preset.id)}
 className="inline-flex min-h-11 items-center rounded-full bg-surface px-3.5 text-sm text-fg shadow-border hover:shadow-border-hover"
 >
 {preset.title}
 </button>
 </li>))}
 </ul>
 </section>

 <section className="mt-6 rounded-lg border border-border bg-surface p-4 shadow-border">
 <p className="text-sm font-medium text-fg">Save or share</p>
 <p className="mt-1 text-sm text-muted">
 Saved searches stay on this device. Copy link puts the criteria in the URL.
 </p>
 <div className="mt-3 flex flex-col gap-3 sm:flex-row">
 <label htmlFor={`${idPrefix}-save-name`} className="flex min-w-0 flex-1 flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Name this search</span>
 <input
 id={`${idPrefix}-save-name`}
 value={saveName}
 onChange={(e) => setSaveName(e.target.value)}
 placeholder="Easy visits in Europe"
 className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <div className="flex flex-wrap items-end gap-2">
 <Button type="button" onClick={saveCurrent} disabled={!saveName.trim() || !filtersOn}>
 Save
 </Button>
 <Button type="button" variant="outline" onClick={() => void copyLink()}>
 <Copy className="size-4" aria-hidden />
 {copied ? "Copied": "Copy link"}
 </Button>
 </div>
 </div>
 {saved.length > 0 ? (<ul className="mt-4 divide-y divide-border rounded-md border border-border">
 {saved.map((row) => (<li key={row.id} className="flex items-center gap-2 px-3 py-2">
 <button
 type="button"
 onClick={() => loadSaved(row)}
 className="min-h-11 flex-1 text-left text-sm font-medium text-fg hover:text-forest hover:underline"
 >
 {row.name}
 </button>
 <button
 type="button"
 onClick={() => deleteSaved(row.id)}
 className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted hover:text-fg"
 aria-label={`Delete ${row.name}`}
 >
 <Trash2 className="size-4" aria-hidden />
 </button>
 </li>))}
 </ul>): null}
 </section>

 {showResults ? (<>
 <div className="mt-8 rounded-lg border border-border bg-surface p-4 shadow-border">
 <div className="grid gap-3 sm:grid-cols-2">
 <SelectField
 id={`${idPrefix}-search-sort`}
 label="Sort by"
 value={sort}
 onChange={(v) => {
 const next = v as SortKey | "distance" | "similar";
 if (next === "random") setRandomKey(Math.random());
 setSort(next);
 goPage(1);
 }}
 >
 {similarToSlug(query.similarTo) ? <option value="similar">Most similar first</option> : null}
 {isNearFilter(query.near) ? <option value="distance">Nearest first</option> : null}
 {sortOptions.map((opt) => (<option key={opt.value} value={opt.value}>
 {opt.label}
 </option>))}
 </SelectField>
 <div className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">View</span>
 <div className="flex h-11 items-center gap-1 rounded-md border border-border bg-bg p-1">
 <ViewButton active={view === "cards"} onClick={() => setView("cards")} label="Cards">
 <LayoutGrid className="size-4" aria-hidden />
 </ViewButton>
 <ViewButton active={view === "table"} onClick={() => setView("table")} label="Table">
 <List className="size-4" aria-hidden />
 </ViewButton>
 <p className="ml-2 text-sm text-muted">
 <span className="tabular-nums font-medium text-fg">
 {paged.from}–{paged.to}
 </span>{" "}
 of <span className="tabular-nums">{paged.total}</span>
 {paged.pages > 1 ? <span className="text-subtle"> · {paged.pages} pages</span>: null}
 </p>
 </div>
 </div>
 </div>
 </div>

 {visible.length === 0 ? (<div className="mt-10 rounded-lg border border-dashed border-border bg-surface px-6 py-16 text-center">
 <p className="font-display text-xl text-fg">No communities match</p>
 <p className="mt-2 text-muted">
 Try Match any, loosen a number, invert a Not, or drop an exclusion. Clear all to see the whole atlas.
 </p>
 </div>): (<div id={resultsId} className="scroll-mt-20">
 <div className="mt-8">
 <Pager
 page={paged.page}
 pages={paged.pages}
 from={paged.from}
 to={paged.to}
 total={paged.total}
 onPage={goPage}
 />
 </div>
 {view === "table" ? (<div className="mt-6">
 <CommunityTable communities={paged.items} />
 </div>): (<ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
 {paged.items.map((community, i) => {
 const reasons = reasonBySlug.get(community.slug) ?? [];
 return (<li key={community.slug} className="flex h-full flex-col">
 <CommunityCard community={community} priority={i === 0} openings />
 {plus && reasons.length > 0 ? (<ul className="mt-2 flex flex-wrap gap-1.5">
 {reasons.map((reason) => (<li
 key={reason}
 className="rounded-full bg-forest/10 px-2.5 py-1 text-xs text-forest-deep"
 >
 {reason}
 </li>))}
 </ul>): null}
 </li>);
 })}
 </ul>)}
 <div className="mt-8">
 <Pager
 page={paged.page}
 pages={paged.pages}
 from={paged.from}
 to={paged.to}
 total={paged.total}
 onPage={goPage}
 />
 </div>
 </div>)}
 </>): (<p className="mt-6 text-sm text-muted">
 Add a keyword, a criterion, an exclusion, or a preset and the matching villages will list here.
 </p>)}
 </SearchDock>
 {embedded ? <ScrollToMapButton /> : null}
 </div>);
}

function SearchDock({
 map,
 children,
}: {
 map: ReactNode;
 children: ReactNode;
}) {
 if (!map) return <>{children}</>;
 return (
  <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(20rem,28rem)_minmax(0,1fr)] lg:items-start">
   <div className="sticky top-28 z-10 order-1 lg:order-2">{map}</div>
   <div className="order-2 min-w-0 lg:order-1">{children}</div>
  </div>
 );
}

function ScrollToMapButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById("atlas-map");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById("atlas-map");
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }}
      className="fixed bottom-[max(4.75rem,calc(env(safe-area-inset-bottom)+3.75rem))] right-4 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-4 text-sm font-medium text-cream shadow-border-hover hover:bg-forest-deep"
    >
      <MapIcon className="size-4" aria-hidden />
      Scroll to map
    </button>
  );
}

function KeywordBox({
 keywords,
 onChange,
 placeholder = "hammock, land trust, solar…",
 ariaLabel = "Add a keyword",
}: {
 keywords: string[];
 onChange: (next: string[]) => void;
 placeholder?: string;
 ariaLabel?: string;
}) {
 const [draft, setDraft] = useState("");

 function commit(raw: string) {
 const added = splitKeywordInput(raw);
 if (added.length === 0) return;
 onChange(normalizeKeywords([...keywords, ...added]));
 setDraft("");
 }

 function remove(word: string) {
 onChange(keywords.filter((item) => item.toLowerCase() !== word.toLowerCase()));
 }

 return (<div className="mt-3 rounded-md border border-border bg-bg px-2 py-2">
 <ul className="flex flex-wrap gap-1.5">
 {keywords.map((word) => (<li key={word.toLowerCase()}>
 <button
 type="button"
 onClick={() => remove(word)}
 className="inline-flex min-h-9 items-center gap-1 rounded-full bg-forest/10 px-3 text-sm text-forest-deep hover:bg-forest/20"
 aria-label={`Remove ${word}`}
 >
 {word}
 <X className="size-3.5" aria-hidden />
 </button>
 </li>))}
 <li className="min-w-[12rem] flex-1">
 <input
 value={draft}
 onChange={(e) => {
 const value = e.target.value;
 if (value.includes(",")) {
 const [ready, rest] = [value.slice(0, value.lastIndexOf(",")), value.slice(value.lastIndexOf(",") + 1)];
 commit(ready);
 setDraft(rest);
 return;
 }
 setDraft(value);
 }}
 onKeyDown={(e) => {
 if (e.key === "Enter" || e.key === "Tab") {
 if (draft.trim()) {
 e.preventDefault();
 commit(draft);
 }
 } else if (e.key === "Backspace" && !draft && keywords.length) {
 remove(keywords[keywords.length - 1]);
 }
 }}
 onBlur={() => {
 if (draft.trim()) commit(draft);
 }}
 placeholder={keywords.length ? "Another word": placeholder}
 aria-label={ariaLabel}
 className="h-11 w-full bg-transparent px-2 text-fg placeholder:text-subtle focus-visible:outline-none"
 />
 </li>
 </ul>
 </div>);
}

function CriterionRow({
 rule,
 index,
 idPrefix,
 label = "Criterion",
 onField,
 onOp,
 onValue,
 onValue2,
 onNegate,
 onRemove,
 canRemove,
}: {
 rule: SearchRule;
 index: number;
 idPrefix: string;
 label?: string;
 onField: (fieldId: string) => void;
 onOp: (op: SearchOp) => void;
 onValue: (value: string) => void;
 onValue2: (value: string) => void;
 onNegate: () => void;
 onRemove: () => void;
 canRemove: boolean;
}) {
 const field = searchField(rule.field) ?? searchFields[0];
 const ops = opsFor(field.kind);
 const needsValue = rule.op !== "empty" && rule.op !== "not-empty";
 const between = rule.op === "between";
 const title = `${label} ${index + 1}`;

 return (<div className="rounded-md border border-border bg-bg p-3">
 <p className="text-xs tabular-nums text-subtle">{title}</p>
 <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)_minmax(0,1.4fr)_auto]">
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Field</span>
 <select
 value={field.id}
 onChange={(e) => onField(e.target.value)}
 aria-label={`Field for ${title.toLowerCase()}`}
 className="h-11 w-full rounded-md border border-border bg-surface px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 >
 {searchSections.map((section) => (<optgroup key={section} label={section}>
 {searchFields
.filter((row) => row.section === section)
.map((row) => (<option key={row.id} value={row.id}>
 {row.label}
 </option>))}
 </optgroup>))}
 </select>
 </label>
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Operator</span>
 <select
 value={rule.op}
 onChange={(e) => onOp(e.target.value as SearchOp)}
 aria-label={`Operator for ${title.toLowerCase()}`}
 className="h-11 w-full rounded-md border border-border bg-surface px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 >
 {ops.map((op) => (<option key={op} value={op}>
 {opLabels[op]}
 </option>))}
 </select>
 </label>
 {needsValue ? (<div className={between ? "grid grid-cols-2 gap-2": ""}>
 <ValueInput
 fieldId={field.id}
 value={rule.value}
 onChange={onValue}
 label={between ? "From": "Value"}
 index={index}
 idPrefix={idPrefix}
 />
 {between ? (<ValueInput
 fieldId={field.id}
 value={rule.value2}
 onChange={onValue2}
 label="To"
 index={index}
 idPrefix={idPrefix}
 />): null}
 </div>): (<p className="self-end pb-2.5 text-sm text-subtle">{field.hint ?? "No value needed"}</p>)}
 <div className="flex items-end gap-2">
 <button
 type="button"
 aria-pressed={rule.negate}
 onClick={onNegate}
 className={`inline-flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm font-medium ${
 rule.negate ? "bg-forest text-cream": "bg-panel text-fg hover:bg-border"
 }`}
 >
 Not
 </button>
 <button
 type="button"
 onClick={onRemove}
 disabled={!canRemove}
 aria-label={`Remove ${title.toLowerCase()}`}
 className="inline-flex h-11 min-w-11 items-center justify-center rounded-md bg-panel text-muted hover:text-fg disabled:opacity-40"
 >
 <Trash2 className="size-4" aria-hidden />
 </button>
 </div>
 </div>
 {field.hint && needsValue ? <p className="mt-2 text-xs text-subtle">{field.hint}</p>: null}
 </div>);
}

function ValueInput({
 fieldId,
 value,
 onChange,
 label,
 index,
 idPrefix,
}: {
 fieldId: string;
 value: string;
 onChange: (value: string) => void;
 label: string;
 index: number;
 idPrefix: string;
}) {
 const field = searchField(fieldId) ?? searchFields[0];
 const id = `${idPrefix}-crit-${index}-${label.toLowerCase()}`;
 const inputClass =
 "h-11 w-full rounded-md border border-border bg-surface px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40";

 if (field.options && field.kind !== "number") {
 return (<label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">{label}</span>
 <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
 <option value="">Choose…</option>
 {field.options.map((opt) => (<option key={opt.value} value={opt.value}>
 {opt.label}
 </option>))}
 </select>
 </label>);
 }

 if (field.kind === "number" && field.options) {
 return (<label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">{label}</span>
 <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
 <option value="">Choose…</option>
 {field.options.map((opt) => (<option key={opt.value} value={opt.value}>
 {opt.label}
 </option>))}
 </select>
 </label>);
 }

 return (<label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">{label}</span>
 <input
 id={id}
 type={field.kind === "number" ? "number": "text"}
 value={value}
 onChange={(e) => onChange(e.target.value)}
 placeholder={field.kind === "number" ? "0": "Type a word or phrase"}
 className={inputClass}
 />
 </label>);
}

function SimilarToSearch({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (slug: string | null) => void;
}) {
  const [picking, setPicking] = useState(false);
  const village = value ? getCommunity(value) : null;

  return (
    <div>
      <p className="text-sm font-medium text-fg">Most similar to</p>
      <p className="mt-1 text-sm text-muted">
        Pick an Eco-community. Results line up by how much they share: legal form, size, governance,
        land, daily life, eco work, and place.
      </p>
      {village ? (
        <p className="mt-3 text-sm text-fg">
          Ranked against <span className="font-medium">{village.name}</span>
          <span className="text-muted">{` · ${village.location}`}</span>
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">No village selected yet.</p>
      )}
      {picking ? (
        <div className="mt-2 overflow-hidden rounded-md border border-border">
          <VillagePicker
            heading="Compare to"
            placeholder="Search by name or place"
            onPick={(row) => {
              onChange(row.slug);
              setPicking(false);
            }}
            onClose={() => setPicking(false)}
          />
        </div>
      ) : (
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPicking(true)}
            className="inline-flex min-h-11 items-center rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg hover:bg-panel"
          >
            {village ? "Change village" : "Pick a village"}
          </button>
          {village ? (
            <button
              type="button"
              onClick={() => onChange(null)}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm text-muted hover:text-fg"
            >
              <X className="size-4" aria-hidden />
              Clear
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

function writeSearchUrlQuietly(query: SearchQuery, page?: number) {
 if (typeof window === "undefined") return;
 const encoded = encodeQuery(query);
 const url = new URL(window.location.href);
 const next = new URL(window.location.href);
 if (encoded) next.searchParams.set("q", encoded);
 else next.searchParams.delete("q");
 const pageNum = page ?? parsePageParam(url.searchParams.get("page") ?? undefined);
 if (pageNum && pageNum > 1) next.searchParams.set("page", String(pageNum));
 else next.searchParams.delete("page");
 const nextHref = `${next.pathname}${next.search}${next.hash}`;
 const currentHref = `${url.pathname}${url.search}${url.hash}`;
 if (nextHref === currentHref) return;
 History.prototype.replaceState.call(window.history, window.history.state, "", nextHref);
}

function JunctionChip({
 label,
 active,
 onClick,
}: {
 label: string;
 active: boolean;
 onClick: () => void;
}) {
 return (<button
 type="button"
 onClick={onClick}
 aria-pressed={active}
 className={`min-h-11 whitespace-nowrap rounded-full px-3.5 text-sm ${
 active ? "bg-forest text-cream": "bg-panel text-fg hover:bg-border"
 }`}
 >
 {label}
 </button>);
}

function SelectField({
 id,
 label,
 value,
 onChange,
 children,
}: {
 id: string;
 label: string;
 value: string;
 onChange: (value: string) => void;
 children: ReactNode;
}) {
 return (<label htmlFor={id} className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">{label}</span>
 <select
 id={id}
 value={value}
 onChange={(e) => onChange(e.target.value)}
 className="h-11 w-full rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 >
 {children}
 </select>
 </label>);
}

function ViewButton({
 active,
 onClick,
 label,
 children,
}: {
 active: boolean;
 onClick: () => void;
 label: string;
 children: ReactNode;
}) {
 return (<button
 type="button"
 onClick={onClick}
 aria-pressed={active}
 aria-label={label}
 className={`inline-flex min-h-9 min-w-9 items-center justify-center rounded-sm px-2.5 ${
 active ? "bg-forest text-cream": "text-muted hover:text-fg"
 }`}
 >
 {children}
 </button>);
}
