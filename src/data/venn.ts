import { communities, getCommunity, type VillageRef } from "./communities";
import { bookingStayTag, hasBookableStay } from "./booking-stays";
import { farmFor } from "./farms";
import {
  encodeQuery,
  emptyQuery,
  searchFields,
  slugsMatching,
  type SearchOp,
  type SearchQuery,
} from "./advanced-search";
import { uniqueGovernanceTag } from "./governance";

export type VennRule = {
  field: string;
  op: SearchOp;
  value: string;
  value2?: string;
};

export type VennAttribute = {
  id: string;
  label: string;
  section: string;
  hint?: string;
  slugs: string[];
  count: number;
  pct: number;
  rule: VennRule | null;
};

export type VennStats = {
  total: number;
  aCount: number;
  bCount: number;
  cCount: number;
  bothCount: number;
  abcCount: number;
  abCount: number;
  acCount: number;
  bcCount: number;
  onlyA: number;
  onlyB: number;
  onlyC: number;
  onlyAB: number;
  onlyAC: number;
  onlyBC: number;
  pctA: number;
  pctB: number;
  pctC: number;
  pctBoth: number;
  pctAbc: number;
  shareOfA: number;
  shareOfB: number;
  shareOfC: number;
  bothVillages: VillageRef[];
  allVillages: VillageRef[];
};

const MIN_COUNT = 6;
const TOTAL = communities.length;

function pct(count: number) {
  return TOTAL === 0 ? 0 : (100 * count) / TOTAL;
}

function unique(slugs: string[]) {
  return Array.from(new Set(slugs));
}

function villages(slugs: string[]): VillageRef[] {
  return slugs
    .map((slug) => getCommunity(slug))
    .filter((row): row is NonNullable<typeof row> => Boolean(row))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((row) => ({ slug: row.slug, name: row.name, location: row.location }));
}

function fromRule(id: string, label: string, section: string, rule: VennRule, hint?: string, pinned = false): VennAttribute | null {
  const slugs = unique(slugsMatching(rule.field, rule.op, rule.value, rule.value2 ?? ""));
  if (slugs.length < MIN_COUNT && !pinned) return null;
  return { id, label, section, hint, slugs, count: slugs.length, pct: pct(slugs.length), rule };
}

function fromSlugs(
  id: string,
  label: string,
  section: string,
  slugs: string[],
  hint?: string,
  pinned = false,
): VennAttribute | null {
  const list = unique(slugs);
  if (list.length < MIN_COUNT && !pinned) return null;
  return { id, label, section, hint, slugs: list, count: list.length, pct: pct(list.length), rule: null };
}

function slugPart(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

function buildAttributes(): VennAttribute[] {
  const out: VennAttribute[] = [];
  function push(row: VennAttribute | null) {
    if (row) out.push(row);
  }

  push(
    fromRule("still-active", "Still active", "Size & time", { field: "stillActive", op: "is", value: "true" }, undefined, true),
  );
  push(
    fromRule("inactive", "Inactive", "Size & time", { field: "stillActive", op: "is", value: "false" }),
  );
  push(
    fromRule("founded-before-1970", "Founded before 1970", "Size & time", {
      field: "foundedYear",
      op: "lte",
      value: "1969",
    }),
  );
  push(
    fromRule("founded-1970-1999", "Founded 1970–1999", "Size & time", {
      field: "foundedYear",
      op: "between",
      value: "1970",
      value2: "1999",
    }),
  );
  push(
    fromRule("founded-2000", "Founded 2000 or later", "Size & time", {
      field: "foundedYear",
      op: "gte",
      value: "2000",
    }),
  );
  push(
    fromRule("members-small", "Under 50 members", "Size & time", { field: "members", op: "lte", value: "49" }),
  );
  push(
    fromRule("members-mid", "50–150 members", "Size & time", {
      field: "members",
      op: "between",
      value: "50",
      value2: "150",
    }),
  );
  push(
    fromRule("members-large", "More than 150 members", "Size & time", { field: "members", op: "gte", value: "151" }),
  );
  push(
    fromRule("acres-small", "Under 50 acres", "Size & time", { field: "acres", op: "lte", value: "49" }),
  );
  push(
    fromRule("acres-mid", "50–400 acres", "Size & time", {
      field: "acres",
      op: "between",
      value: "50",
      value2: "400",
    }),
  );
  push(
    fromRule("acres-large", "More than 400 acres", "Size & time", { field: "acres", op: "gte", value: "401" }),
  );

  push(
    fromRule(
      "volunteer",
      "Volunteer program",
      "Visit & join",
      { field: "hasVolunteerProgram", op: "is", value: "true" },
      "A dedicated signup page on their own site.",
      true,
    ),
  );
  push(
    fromSlugs(
      "overnight",
      bookingStayTag,
      "Visit & join",
      communities.filter((row) => hasBookableStay(row.slug)).map((row) => row.slug),
      "A stranger can book a bed from their own page.",
      true,
    ),
  );
  push(
    fromRule("visit-easy", "Easy to visit (4–5)", "Visit & join", { field: "visitEase", op: "gte", value: "4" }),
  );
  push(
    fromRule("join-easy", "Easy to join (4–5)", "Visit & join", { field: "joinEase", op: "gte", value: "4" }),
  );
  push(
    fromRule("understood", "Well understood (4–5)", "Visit & join", { field: "understood", op: "gte", value: "4" }),
  );

  push(
    fromRule(
      "unique-gov",
      uniqueGovernanceTag,
      "Governance",
      { field: "uniqueGovernance", op: "is", value: "true" },
      undefined,
      true,
    ),
  );

  push(
    fromSlugs(
      "farm",
      "Working farm",
      "Daily life",
      communities.filter((row) => farmFor(row.slug).hasFarm).map((row) => row.slug),
      "Grows food or keeps animals on site.",
      true,
    ),
  );

  for (const field of searchFields) {
    if (!field.options?.length) continue;
    if (field.kind !== "enum" && field.kind !== "list" && field.kind !== "bool") continue;
    if (field.id === "stillActive" || field.id === "hasVolunteerProgram" || field.id === "uniqueGovernance") continue;
    const op: SearchOp = field.kind === "list" ? "includes" : "is";
    const min = field.id === "country" || field.id === "region" ? 8 : MIN_COUNT;
    for (const option of field.options) {
      if (field.kind === "bool" && option.value === "false") continue;
      const slugs = unique(slugsMatching(field.id, op, option.value));
      if (slugs.length < min) continue;
      const id = `${field.id}--${slugPart(option.value)}`;
      out.push({
        id,
        label: option.label,
        section: field.section,
        hint: field.label === option.label ? field.hint : field.label,
        slugs,
        count: slugs.length,
        pct: pct(slugs.length),
        rule: { field: field.id, op, value: option.value },
      });
    }
  }

  const seen = new Set<string>();
  return out.filter((row) => {
    if (seen.has(row.id)) return false;
    seen.add(row.id);
    return true;
  });
}

export const vennAttributes: VennAttribute[] = buildAttributes();

const byId = new Map(vennAttributes.map((row) => [row.id, row]));

export const vennSections = Array.from(new Set(vennAttributes.map((row) => row.section)));

export const vennTotal = TOTAL;

export function vennAttribute(id: string | undefined | null): VennAttribute | undefined {
  if (!id) return undefined;
  return byId.get(id);
}

export function formatVennPct(value: number) {
  if (value === 0) return "0%";
  if (value < 1) return "<1%";
  if (value >= 10) return `${Math.round(value)}%`;
  return `${value.toFixed(1).replace(/\.0$/, "")}%`;
}

export function vennStats(
  aId: string | undefined,
  bId: string | undefined,
  cId?: string | undefined,
): VennStats | null {
  const a = vennAttribute(aId);
  const b = vennAttribute(bId);
  const c = vennAttribute(cId);
  if (!a && !b && !c) return null;
  const aSet = new Set(a?.slugs ?? []);
  const bSet = new Set(b?.slugs ?? []);
  const cSet = new Set(c?.slugs ?? []);
  const aCount = a?.count ?? 0;
  const bCount = b?.count ?? 0;
  const cCount = c?.count ?? 0;
  const inA = (slug: string) => aSet.has(slug);
  const inB = (slug: string) => bSet.has(slug);
  const inC = (slug: string) => cSet.has(slug);
  const abSlugs = a && b ? a.slugs.filter(inB) : [];
  const acSlugs = a && c ? a.slugs.filter(inC) : [];
  const bcSlugs = b && c ? b.slugs.filter(inC) : [];
  const abcSlugs = a && b && c ? abSlugs.filter(inC) : [];
  const abCount = abSlugs.length;
  const acCount = acSlugs.length;
  const bcCount = bcSlugs.length;
  const abcCount = abcSlugs.length;
  const onlyA = a ? a.slugs.filter((slug) => !inB(slug) && !inC(slug)).length : 0;
  const onlyB = b ? b.slugs.filter((slug) => !inA(slug) && !inC(slug)).length : 0;
  const onlyC = c ? c.slugs.filter((slug) => !inA(slug) && !inB(slug)).length : 0;
  const onlyAB = a && b ? abSlugs.filter((slug) => !inC(slug)).length : 0;
  const onlyAC = a && c ? acSlugs.filter((slug) => !inB(slug)).length : 0;
  const onlyBC = b && c ? bcSlugs.filter((slug) => !inA(slug)).length : 0;
  const triple = Boolean(a && b && c);
  const overlapSlugs = triple
    ? abcSlugs
    : a && b
      ? abSlugs
      : a && c
        ? acSlugs
        : b && c
          ? bcSlugs
          : [];
  const overlapCount = overlapSlugs.length;
  return {
    total: TOTAL,
    aCount,
    bCount,
    cCount,
    bothCount: abCount,
    abcCount,
    abCount,
    acCount,
    bcCount,
    onlyA,
    onlyB,
    onlyC,
    onlyAB,
    onlyAC,
    onlyBC,
    pctA: pct(aCount),
    pctB: pct(bCount),
    pctC: pct(cCount),
    pctBoth: pct(overlapCount),
    pctAbc: pct(abcCount),
    shareOfA: aCount ? (100 * overlapCount) / aCount : 0,
    shareOfB: bCount ? (100 * overlapCount) / bCount : 0,
    shareOfC: cCount ? (100 * abcCount) / cCount : 0,
    bothVillages: villages(overlapSlugs),
    allVillages: villages(abcSlugs),
  };
}

export function vennSearchQuery(aId?: string, bId?: string, cId?: string): string | null {
  const rules = [vennAttribute(aId)?.rule, vennAttribute(bId)?.rule, vennAttribute(cId)?.rule].filter(
    (row): row is VennRule => Boolean(row),
  );
  if (!rules.length) return null;
  const query: SearchQuery = {
    ...emptyQuery(),
    match: "all",
    rules: rules.map((rule, i) => ({
      id: `v${i}`,
      field: rule.field,
      op: rule.op,
      value: rule.value,
      value2: rule.value2 ?? "",
      negate: false,
    })),
  };
  return encodeQuery(query) || null;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

function circleIntersectionArea(r: number, R: number, d: number) {
  if (d >= r + R) return 0;
  if (d <= Math.abs(R - r)) return Math.PI * Math.min(r, R) ** 2;
  const r2 = r * r;
  const R2 = R * R;
  const alpha = Math.acos(clamp((d * d + r2 - R2) / (2 * d * r), -1, 1));
  const beta = Math.acos(clamp((d * d + R2 - r2) / (2 * d * R), -1, 1));
  return r2 * alpha + R2 * beta - 0.5 * Math.sqrt((-d + r + R) * (d + r - R) * (d - r + R) * (d + r + R));
}

function distanceForIntersection(r: number, R: number, area: number) {
  const maxOverlap = Math.PI * Math.min(r, R) ** 2;
  const target = clamp(area, 0, maxOverlap);
  if (target <= 0.5) return r + R + 10;
  if (target >= maxOverlap - 0.5) return Math.abs(R - r);
  let lo = Math.abs(R - r);
  let hi = r + R;
  for (let i = 0; i < 42; i++) {
    const mid = (lo + hi) / 2;
    if (circleIntersectionArea(r, R, mid) > target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export type VennCircle = { cx: number; cy: number; r: number };
export type VennPoint = { x: number; y: number };

export type VennLayout = {
  viewW: number;
  viewH: number;
  a: VennCircle;
  b: VennCircle | null;
  c: VennCircle | null;
  aLabel: VennPoint;
  bLabel: VennPoint | null;
  cLabel: VennPoint | null;
  bothLabel: VennPoint | null;
  abcLabel: VennPoint | null;
  abLabel: VennPoint | null;
  acLabel: VennPoint | null;
  bcLabel: VennPoint | null;
};

function thirdCircleOffset(dAB: number, dAC: number, dBC: number) {
  let ab = Math.max(dAB, 1e-3);
  let ac = Math.max(dAC, 1e-3);
  let bc = Math.max(dBC, 1e-3);
  if (ac + bc <= ab) {
    const pad = (ab - ac - bc) / 2 + 1;
    ac += pad;
    bc += pad;
  }
  if (ab + bc <= ac) {
    const pad = (ac - ab - bc) / 2 + 1;
    ab += pad;
    bc += pad;
  }
  if (ab + ac <= bc) {
    const pad = (bc - ab - ac) / 2 + 1;
    ab += pad;
    ac += pad;
  }
  const x = (ac * ac - bc * bc + ab * ab) / (2 * ab);
  const y = Math.sqrt(Math.max(0, ac * ac - x * x));
  return { x, y, ab };
}

function awayFrom(circle: VennCircle, others: VennCircle[], frac = 0.42): VennPoint {
  const mx = others.reduce((sum, row) => sum + row.cx, 0) / Math.max(others.length, 1);
  const my = others.reduce((sum, row) => sum + row.cy, 0) / Math.max(others.length, 1);
  const dx = circle.cx - mx;
  const dy = circle.cy - my;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: circle.cx + (dx / len) * circle.r * frac,
    y: circle.cy + (dy / len) * circle.r * frac,
  };
}

function pointInCircle(point: VennPoint, circle: VennCircle, inset = 10) {
  return Math.hypot(point.x - circle.cx, point.y - circle.cy) <= Math.max(circle.r - inset, 0);
}

function chordCenter(p: VennCircle, q: VennCircle): VennPoint {
  const dx = q.cx - p.cx;
  const dy = q.cy - p.cy;
  const d = Math.hypot(dx, dy) || 1;
  const t = (d * d + p.r * p.r - q.r * q.r) / (2 * d);
  return { x: p.cx + (t / d) * dx, y: p.cy + (t / d) * dy };
}

function offsetAwayFrom(point: VennPoint, other: VennCircle, dist: number): VennPoint {
  const dx = point.x - other.cx;
  const dy = point.y - other.cy;
  const len = Math.hypot(dx, dy) || 1;
  return { x: point.x + (dx / len) * dist, y: point.y + (dy / len) * dist };
}

function emptyPairLabels() {
  return { abLabel: null, acLabel: null, bcLabel: null } as const;
}

function layoutThree(
  aCount: number,
  bCount: number,
  cCount: number,
  abCount: number,
  acCount: number,
  bcCount: number,
): VennLayout {
  const viewW = 720;
  const viewH = 520;
  const maxR = 128;
  const peak = Math.max(aCount, bCount, cCount, 1);
  const rA = Math.max(48, maxR * Math.sqrt(aCount / peak));
  const rB = Math.max(48, maxR * Math.sqrt(bCount / peak));
  const rC = Math.max(48, maxR * Math.sqrt(cCount / peak));
  const areaScale = (Math.PI * rA * rA) / Math.max(aCount, 1);
  const rawAB = distanceForIntersection(rA, rB, abCount * areaScale);
  const rawAC = distanceForIntersection(rA, rC, acCount * areaScale);
  const rawBC = distanceForIntersection(rB, rC, bcCount * areaScale);
  const placed = thirdCircleOffset(rawAB, rawAC, rawBC);
  const raw = [
    { x: 0, y: 0, r: rA },
    { x: placed.ab, y: 0, r: rB },
    { x: placed.x, y: placed.y, r: rC },
  ];
  const minX = Math.min(...raw.map((row) => row.x - row.r));
  const maxX = Math.max(...raw.map((row) => row.x + row.r));
  const minY = Math.min(...raw.map((row) => row.y - row.r));
  const maxY = Math.max(...raw.map((row) => row.y + row.r));
  const pad = 36;
  const scale = Math.min(1, (viewW - pad * 2) / Math.max(maxX - minX, 1), (viewH - pad * 2) / Math.max(maxY - minY, 1));
  const ox = (viewW - (maxX - minX) * scale) / 2 - minX * scale;
  const oy = (viewH - (maxY - minY) * scale) / 2 - minY * scale;
  const a = { cx: raw[0].x * scale + ox, cy: raw[0].y * scale + oy, r: raw[0].r * scale };
  const b = { cx: raw[1].x * scale + ox, cy: raw[1].y * scale + oy, r: raw[1].r * scale };
  const c = { cx: raw[2].x * scale + ox, cy: raw[2].y * scale + oy, r: raw[2].r * scale };
  const centroid = { x: (a.cx + b.cx + c.cx) / 3, y: (a.cy + b.cy + c.cy) / 3 };
  const abcInside = pointInCircle(centroid, a) && pointInCircle(centroid, b) && pointInCircle(centroid, c);
  return {
    viewW,
    viewH,
    a,
    b,
    c,
    aLabel: awayFrom(a, [b, c], 0.46),
    bLabel: awayFrom(b, [a, c], 0.46),
    cLabel: awayFrom(c, [a, b], 0.46),
    bothLabel: null,
    abcLabel: abcInside ? centroid : null,
    abLabel: offsetAwayFrom(chordCenter(a, b), c, 18),
    acLabel: offsetAwayFrom(chordCenter(a, c), b, 18),
    bcLabel: offsetAwayFrom(chordCenter(b, c), a, 18),
  };
}

export function vennLayout(
  aCount: number,
  bCount: number,
  bothCount: number,
  third?: { cCount: number; acCount: number; bcCount: number },
): VennLayout {
  if (third && third.cCount > 0 && bCount > 0) {
    return layoutThree(aCount, bCount, third.cCount, bothCount, third.acCount, third.bcCount);
  }
  const viewW = 720;
  const viewH = 380;
  const cy = viewH / 2;
  const maxR = 148;

  if (bCount <= 0) {
    const r = Math.max(64, maxR * Math.sqrt(Math.max(aCount, 1) / Math.max(aCount, 40)));
    const cx = viewW / 2;
    return {
      viewW,
      viewH,
      a: { cx, cy, r },
      b: null,
      c: null,
      aLabel: { x: cx, y: cy },
      bLabel: null,
      cLabel: null,
      bothLabel: null,
      abcLabel: null,
      ...emptyPairLabels(),
    };
  }

  const peak = Math.max(aCount, bCount, 1);
  const rA = Math.max(44, maxR * Math.sqrt(aCount / peak));
  const rB = Math.max(44, maxR * Math.sqrt(bCount / peak));
  const areaScale = (Math.PI * rA * rA) / Math.max(aCount, 1);
  const d = distanceForIntersection(rA, rB, bothCount * areaScale);
  const totalW = rA + d + rB;
  const pad = 28;
  const scale = Math.min(1, (viewW - pad * 2) / totalW, (viewH - pad * 2) / (2 * Math.max(rA, rB)));
  const sA = rA * scale;
  const sB = rB * scale;
  const sD = d * scale;
  const left = (viewW - (sA + sD + sB)) / 2 + sA;
  const a = { cx: left, cy, r: sA };
  const b = { cx: left + sD, cy, r: sB };
  const aOnlyX = a.cx - sA * 0.38;
  const bOnlyX = b.cx + sB * 0.38;
  let bothX: number | null = null;
  if (bothCount > 0 && sD < sA + sB - 1) {
    bothX = a.cx + (sD * sD + sA * sA - sB * sB) / (2 * Math.max(sD, 1));
  }
  return {
    viewW,
    viewH,
    a,
    b,
    c: null,
    aLabel: { x: bothCount > 0 ? aOnlyX : a.cx, y: cy },
    bLabel: { x: bothCount > 0 ? bOnlyX : b.cx, y: cy },
    cLabel: null,
    bothLabel: bothX == null ? null : { x: bothX, y: cy },
    abcLabel: null,
    ...emptyPairLabels(),
  };
}
