import { useSyncExternalStore } from "react";
import { communities } from "@/data/communities";
import { useMounted } from "@/lib/use-mounted";

const KEY = "ecomap-country-scope";
const EVENT = "ecomap-country-scope";
const USA = "United States";

/** IANA zones that are the United States, including territories. */
const USA_TIME_ZONES = new Set([
  "America/New_York",
  "America/Detroit",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Chicago",
  "America/Indiana/Tell_City",
  "America/Indiana/Knox",
  "America/Menominee",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/North_Dakota/Beulah",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Pacific/Honolulu",
  "America/Puerto_Rico",
  "America/St_Thomas",
  "America/St_John",
  "Pacific/Guam",
  "Pacific/Saipan",
  "Pacific/Pago_Pago",
  "US/Eastern",
  "US/Central",
  "US/Mountain",
  "US/Pacific",
  "US/Alaska",
  "US/Hawaii",
  "US/Arizona",
  "US/Aleutian",
  "US/Samoa",
]);

function signedUpInUsa(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return USA_TIME_ZONES.has(zone);
  } catch {
    return false;
  }
}

/** New accounts opened in the US start filtered to the United States, unless this device already chose. */
export function applyUsaSignupDefault(): void {
  if (typeof window === "undefined" || !signedUpInUsa()) return;
  try {
    if (window.localStorage.getItem(KEY) !== null) return;
  } catch {
    return;
  }
  setCountryScope(USA);
}

function read(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(KEY)?.trim() ?? "";
  } catch {
    return "";
  }
}

function subscribe(onStoreChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY || event.key === null) onStoreChange();
  };
  window.addEventListener(EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Empty string means every country. Stored on this device, not on the account, so sign-out leaves it. */
export function useCountryScope(): string {
  const mounted = useMounted();
  const country = useSyncExternalStore(subscribe, read, () => "");
  return mounted ? country : "";
}

export function setCountryScope(country: string): void {
  if (typeof window === "undefined") return;
  const next = country.trim();
  try {
    if (!next) window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, next);
  } catch {
    /* keep the in-memory listeners anyway */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function countryInScope(country: string, scope = read()): boolean {
  return !scope || country === scope;
}

/** United States first, then A–Z. */
export function compareCountries(a: string, b: string): number {
  if (a === b) return 0;
  if (a === USA) return -1;
  if (b === USA) return 1;
  return a.localeCompare(b);
}

let names: string[] | null = null;

export function countryNames(): string[] {
  if (!names) {
    names = [...new Set(communities.map((row) => row.country))].sort(compareCountries);
  }
  return names;
}
