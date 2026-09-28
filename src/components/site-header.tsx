import { Link } from "@tanstack/react-router";
import { Shield, Sprout } from "lucide-react";
import { useEffect } from "react";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { PLUS_PRICE_LABEL, applyAdminPlus, usePlusAccess } from "@/lib/plus-membership";
import { countryNames, setCountryScope, useCountryScope } from "@/lib/country-scope";
import { useRestorePaidPlus } from "@/lib/plus-session";
import { captureReferralFromUrl } from "@/lib/referral";
import { useMounted } from "@/lib/use-mounted";
import { HallMicButton } from "@/components/hall-mic-button";

export function SiteHeader() {
 useEffect(() => {
  captureReferralFromUrl();
 }, []);
 useRestorePaidPlus();
 return (<header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm">
 <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
 <Link to="/" aria-label="EcoMapPlus" title="EcoMapPlus" className="flex min-h-11 shrink-0 items-center gap-2.5">
 <EcoMark />
 <span className="font-display text-lg tracking-tight text-fg">
 EcoMapPlus
 </span>
 </Link>
 <nav className="flex min-w-0 items-center gap-0 text-sm font-medium">
 <PlusNav />
 <PlusOnlyLinks />
 <AuthSlot />
 </nav>
 </div>
 <CountryScopeBar />
 </header>);
}

function CountryScopeBar() {
  const plus = usePlusAccess();
  const country = useCountryScope();
  if (!plus && !country) return null;
  return (
    <div className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
        {plus ? (
          <label htmlFor="site-country" className="flex min-w-0 flex-1 items-center gap-2 text-sm sm:max-w-xs sm:flex-none">
            <span className="shrink-0 font-medium text-fg">Country</span>
            <select
              id="site-country"
              value={country}
              onChange={(event) => setCountryScope(event.target.value)}
              className="h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-fg"
            >
              <option value="">All countries</option>
              {countryNames().map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <>
            <p className="min-w-0 flex-1 truncate text-sm text-muted">
              Country: <span className="font-medium text-fg">{country}</span>
            </p>
            <button
              type="button"
              onClick={() => setCountryScope("")}
              className="inline-flex h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium text-fg shadow-border"
            >
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function EcoMark() {
 return (
  <svg viewBox="0 0 32 32" className="size-8 shrink-0 text-forest" aria-hidden>
   <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
   <path d="M9 21 L16 11 L23 21 V24 H9 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
 );
}

function PlusNav() {
 const plus = usePlusAccess();
 if (!plus) {
  return (
   <>
    <Link to="/hall" className="flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 text-muted hover:text-fg sm:px-3">
     Village square
    </Link>
    <Link to="/plus" className="flex min-h-11 shrink-0 items-center px-2 text-forest hover:underline sm:px-3">
     Plus
    </Link>
   </>
  );
 }
 return (
  <Link to="/member" className="flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 text-moss sm:px-3">
   Member features
  </Link>
 );
}

function AuthSlot() {
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 useEffect(() => {
  applyAdminPlus(user?.primaryEmail);
 }, [user?.primaryEmail]);
 if (!mounted || isPending) {
 return <div className="ml-1 size-8 shrink-0 animate-pulse rounded-full bg-panel" />;
 }
 if (!user || user.isDevFallback) {
 return (<Link
 to="/login"
 className="ml-1 flex min-h-11 shrink-0 items-center px-2 font-medium text-forest hover:underline sm:px-3"
 >
 Sign in
 </Link>);
 }
 return (<div className="ml-1 flex items-center gap-1">
 <PresenceBeat />
 <HallMicButton compact />
 <Link
 to="/found"
 className="flex min-h-11 shrink-0 items-center px-2 text-muted hover:text-fg sm:px-3"
 aria-label="Start a village"
 >
 <Sprout className="size-4" aria-hidden />
 <span className="ml-1.5 hidden lg:inline">Start</span>
 </Link>
 <div className="max-sm:[&_span.text-sm.font-medium]:hidden">
 <UserButton />
 </div>
 </div>);
}

function PresenceBeat() {
  useEffect(() => {
    let cancelled = false;
    async function beat() {
      if (document.visibilityState === "hidden") return;
      try {
        await (await import("@/lib/presence")).beatPresence();
      } catch {
        /* keep last */
      }
    }
    void beat();
    const id = window.setInterval(() => {
      if (!cancelled) void beat();
    }, 20000);
    const onVis = () => {
      if (document.visibilityState === "visible") void beat();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelled = true;
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return null;
}

function PlusOnlyLinks() {
 const plus = usePlusAccess();
 if (!plus) return null;
 return (
  <>
   <Link
    to="/quiz"
    className="flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 text-muted hover:text-fg data-[status=active]:text-fg sm:px-3"
   >
    Most aligned
   </Link>
   <Link to="/bot" className="hidden min-h-11 shrink-0 items-center px-2 text-muted hover:text-fg sm:flex sm:px-3">
    Bot
   </Link>
   <Link to="/newsletters" className="hidden min-h-11 shrink-0 items-center px-2 text-muted hover:text-fg sm:flex sm:px-3">
    Letters
   </Link>
   <Link to="/hall" className="hidden min-h-11 shrink-0 items-center px-2 text-muted hover:text-fg sm:flex sm:px-3">
    Square
   </Link>
   <AdminLink />
   <Link to="/about" className="hidden min-h-11 shrink-0 items-center px-2 text-muted hover:text-fg md:flex md:px-3">
    About
   </Link>
  </>
 );
}

function AdminLink() {
  return (
    <Link
      to="/admin"
      className="relative flex min-h-11 items-center px-2 text-muted hover:text-fg sm:px-3"
      aria-label="Weekly list"
    >
      <Shield className="size-4" aria-hidden />
      <span className="ml-1.5 hidden lg:inline">Admin</span>
    </Link>
  );
}

export function SiteFooter() {
 return (<footer className="mt-auto border-t border-border bg-panel">
 <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
 <div>
 <p className="font-display text-base text-fg">EcoMapPlus</p>
 <p className="mt-1 max-w-xl text-sm text-muted">
 Answer 7 questions, find your most aligned eco-community.
 </p>
 </div>
 <div className="flex flex-col gap-2 sm:items-end">
 <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
 <Link to="/plus" className="text-forest hover:underline">
 Plus · {PLUS_PRICE_LABEL}
 </Link>
 <Link to="/about" className="text-forest hover:underline">
 About
 </Link>
 </div>
 <p className="text-xs text-subtle">
 Name, place, and the open doors stay free. Village details, {PLUS_PRICE_LABEL}.
 </p>
 </div>
 </div>
 </footer>);
}
