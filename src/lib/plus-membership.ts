import { useSyncExternalStore } from "react";
import { readLoginEmail } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { IDENTITY_CHANGED, readLocalIdentity } from "@/lib/local-identity";
import { rememberShareCode } from "@/lib/referral";
import { useMounted } from "@/lib/use-mounted";

export const PLUS_PRICE_YEAR = 24;
export const PLUS_PRICE_LABEL = "$24 a year";
export const PLUS_STORAGE_KEY = "ecomap-plus-member";
export const PLUS_CHANGED = "ecomap-plus-changed";
export const PLUS_ADMIN_EMAILS = ["benbloch99@gmail.com"] as const;
export const PLUS_ADMIN_KEY = "ecomap-plus-admin-email";
const PLUS_NEXT_KEY = "ecomap-plus-next";

export const PLUS_FEATURES = [
  {
    title: "Weekly case study",
    body: "On the ground reporting and exclusive details about a specific eco-community.",
    to: "/case-study",
  },
  {
    title: "Travel planner",
    body: "Plot a route between villages, save plans, and walk the miles on the map.",
    to: "/travel-plan",
  },
  {
    title: "Eco-community bot",
    body: "Ask the atlas. It builds short tours so you can go to many events in a short window while travelling the fewest miles.",
    to: "/bot",
  },
  {
    title: "Village square",
    body: "Meet others, join caravans, and put agreements in the open hall. Mondays 4:30–4:45pm PST, the door is open without EcoMapPlus.",
    to: "/hall",
  },
  {
    title: "Directory",
    body: "The full village directory — land, legal form, daily life, photos, and sources.",
    to: "/atlas",
  },
  {
    title: "Most aligned",
    body: "The same seven questions as the free quiz. If you already took it, your matches are here. Otherwise take it and see every village, sorted.",
    to: "/quiz",
  },
  {
    title: "Advanced search and filters",
    body: "Search the atlas and filter by land, legal form, size, governance, and more.",
    to: "/search",
  },
  {
    title: "Dates and process",
    body: "When events, residencies, and bookable nights actually open, and how you apply or reserve.",
    to: "/doors",
  },
  {
    title: "Work-stay",
    body: "Every village with a work-stay, volunteer, internship, or work-exchange door.",
    to: "/work-stay",
  },
  {
    title: "Visitor programs",
    body: "Every dated overnight visitor program, with the length and the published price. Day tours are left off. Filter by country, or open the map for North America and the USA. Sort by date, length, or price.",
    to: "/visits",
  },
  {
    title: "Events",
    body: "Upcoming courses, festivals, tours, and open days from the villages that publish a calendar.",
    to: "/events",
  },
  {
    title: "Calendar",
    body: "Events, work-trade, and residencies on one calendar. Filter by country and by type of opportunity.",
    to: "/calendar",
  },
  {
    title: "Ongoing residencies and work-trade",
    body: "Residencies and work-trade with no fixed date. Filter them, see them on the map, and open the page where the village explains the stay.",
    to: "/ongoing",
  },
  {
    title: "Agreements",
    body: "Every charter and compact, tied to the villages that use them.",
    to: "/agreements",
  },
  {
    title: "How they were paid for",
    body: "Grants, easements, shares, and loans.",
    to: "/funding",
  },
  {
    title: "Attribute overlap",
    body: "Two or three attributes. Circles sized by how common each is. The lens is the overlap.",
    to: "/venn",
  },
  {
    title: "Member locations",
    body: "Share your location. Other EcoMapPlus members can see it on the map.",
    to: "/members",
  },
  {
    title: "Newsletters",
    body: "Every eco-community’s public newsletter, in one list.",
    to: "/newsletters",
  },
  {
    title: "Door letters",
    body: "For each open door, the best contact and a message you can revise.",
    to: "/letters",
  },
  {
    title: "Directions",
    body: "On any village, Directions opens Google Maps to that eco-community.",
    to: "/atlas",
  },
  {
    title: "Referral bonus",
    body: "Every member gets a code. You earn $12 for each person who joins with it. They get a bonus year. Withdraw the $12 through Stripe.",
    to: "/refer",
  },
  {
    title: "Country",
    body: "Limit the map, the directory, and the lists to one country. The choice stays on this device after you sign out.",
    to: "/atlas",
  },
  {
    title: "Meet in the middle",
    body: "Two members sharing a location can find the eco-community closest to the point halfway between them, and require a work-stay, event, overnight, or residency door.",
    to: "/meet",
  },
] as const;

type PlusRecord = {
  until: string;
  paidAt: string;
  shareCode?: string;
  bonusYear?: boolean;
  admin?: boolean;
};

export function normalizePlusEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function isPlusAdminEmail(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const email = normalizePlusEmail(value);
  return (PLUS_ADMIN_EMAILS as readonly string[]).includes(email);
}

function emitPlusChanged() {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new Event(PLUS_CHANGED));
  } catch {
    /* ignore */
  }
}

export function rememberPlusAdmin(email: string) {
  if (typeof window === "undefined" || !isPlusAdminEmail(email)) return;
  try {
    localStorage.setItem(PLUS_ADMIN_KEY, normalizePlusEmail(email));
    emitPlusChanged();
  } catch {
    /* ignore */
  }
}

export function readPlusAdminEmail(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(PLUS_ADMIN_KEY);
    return value && isPlusAdminEmail(value) ? normalizePlusEmail(value) : null;
  } catch {
    return null;
  }
}

function readRecord(): PlusRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PLUS_STORAGE_KEY);
    if (!raw) return null;
    const row = JSON.parse(raw) as PlusRecord;
    if (!row || typeof row.until !== "string" || Number.isNaN(Date.parse(row.until))) {
      localStorage.removeItem(PLUS_STORAGE_KEY);
      return null;
    }
    if (Date.parse(row.until) < Date.now() && !row.admin) {
      localStorage.removeItem(PLUS_STORAGE_KEY);
      return null;
    }
    return row;
  } catch {
    return null;
  }
}

function yearsFromNow(years: number): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString();
}

export function grantPlusMembership(
  until?: string,
  paidAt?: string,
  extra?: { shareCode?: string; bonusYear?: boolean; admin?: boolean },
): PlusRecord {
  const prev = readRecord();
  const bonusYear = extra?.bonusYear ?? prev?.bonusYear ?? false;
  const row: PlusRecord = {
    until: until || yearsFromNow(bonusYear ? 2 : 1),
    paidAt: paidAt || prev?.paidAt || new Date().toISOString(),
    shareCode: extra?.shareCode ?? prev?.shareCode,
    bonusYear,
    admin: extra && "admin" in extra ? extra.admin : prev?.admin,
  };
  if (row.shareCode) rememberShareCode(row.shareCode);
  try {
    localStorage.setItem(PLUS_STORAGE_KEY, JSON.stringify(row));
  } catch {
    /* ignore */
  }
  emitPlusChanged();
  return row;
}

export function applyAdminPlus(email?: string | null) {
  if (!email || !isPlusAdminEmail(email)) return;
  rememberPlusAdmin(email);
  const row = readRecord();
  if (!row?.admin) grantPlusMembership(undefined, undefined, { admin: true });
}

export function dropAdminPlus() {
  if (typeof window === "undefined") return;
  const row = readRecord();
  try {
    localStorage.removeItem(PLUS_ADMIN_KEY);
    if (row?.admin) localStorage.removeItem(PLUS_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  emitPlusChanged();
}

function adminOnThisDevice(): boolean {
  return (
    isPlusAdminEmail(readPlusAdminEmail()) ||
    isPlusAdminEmail(readLoginEmail()) ||
    isPlusAdminEmail(readLocalIdentity()?.primaryEmail)
  );
}

export function hasPlusAccess(): boolean {
  if (adminOnThisDevice()) return true;
  const row = readRecord();
  return Boolean(row && Date.parse(row.until) > Date.now());
}

function subscribePlus(onStoreChange: () => void): () => void {
  const onStorage = () => onStoreChange();
  window.addEventListener(PLUS_CHANGED, onStoreChange);
  window.addEventListener(IDENTITY_CHANGED, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(PLUS_CHANGED, onStoreChange);
    window.removeEventListener(IDENTITY_CHANGED, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function usePlusAccess(): boolean {
  const mounted = useMounted();
  const { user } = useCurrentUserState();
  const stored = useSyncExternalStore(subscribePlus, hasPlusAccess, () => false);
  if (!mounted) return false;
  if (isPlusAdminEmail(user?.primaryEmail)) return true;
  return stored;
}

export function plusUntilLabel(): string {
  const row = readRecord();
  if (!row) return "";
  const date = new Date(row.until);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function plusHasBonusYear(): boolean {
  return Boolean(readRecord()?.bonusYear);
}

export function safePlusNext(next: unknown): string {
  if (typeof next !== "string") return "/";
  if (!next.startsWith("/") || next.startsWith("//") || next.includes("\\")) return "/";
  return next;
}

export function rememberPlusNext(next?: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(PLUS_NEXT_KEY, safePlusNext(next));
  } catch {
    /* ignore */
  }
}

export function readPlusNext(): string {
  if (typeof window === "undefined") return "/";
  try {
    return safePlusNext(sessionStorage.getItem(PLUS_NEXT_KEY) || "/");
  } catch {
    return "/";
  }
}
