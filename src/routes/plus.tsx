import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FeatureInfo } from "@/components/feature-info";
import { ShareCodeCard } from "@/components/share-code-card";
import {
  ensurePlusShareCode,
  plusCheckoutStatus,
  previewPlusReferral,
  startPlusCheckout,
} from "@/lib/plus-checkout";
import {
  PLUS_FEATURES,
  PLUS_PRICE_LABEL,
  grantPlusMembership,
  isPlusAdminEmail,
  plusHasBonusYear,
  plusUntilLabel,
  readPlusNext,
  rememberPlusAdmin,
  usePlusAccess,
} from "@/lib/plus-membership";
import { goAfterPlusCheckout, useConfirmPlusSession } from "@/lib/plus-session";
import {
  PIONEER_CODE,
  PLUS_PIONEER_PRICE_LABEL,
  captureReferralFromUrl,
  readLead,
  readReferralCode,
  rememberReferralCode,
  rememberShareCode,
} from "@/lib/referral";

type PlusSearch = {
  session_id?: string;
  canceled?: boolean;
  ref?: string;
};

export const Route = createFileRoute("/plus")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>): PlusSearch => ({
    session_id:
      typeof search.session_id === "string" && search.session_id.startsWith("cs_")
        ? search.session_id
        : undefined,
    canceled: search.canceled === "1" || search.canceled === true ? true : undefined,
    ref: typeof search.ref === "string" ? search.ref : undefined,
  }),
  component: PlusPage,
  head: () => ({
    meta: [
      { title: `EcoMapPlus · ${PLUS_PRICE_LABEL}` },
      {
        name: "description",
        content: `Full village pages — land, legal form, daily life, and sources. EcoMapPlus, ${PLUS_PRICE_LABEL}. Share a code and earn $12.`,
      },
    ],
  }),
});

function errorMessage(err: unknown, fallback: string) {
  if (err instanceof Error && err.message) return err.message;
  if (typeof err === "object" && err && "message" in err && typeof err.message === "string") return err.message;
  return fallback;
}

function goToCheckout(url: string) {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return;
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return;
  if (parsed.hostname !== "checkout.stripe.com") return;
  try {
    if (window.top && window.top !== window) {
      window.top.location.assign(parsed.href);
      return;
    }
  } catch {
    window.open(parsed.href, "_top");
    return;
  }
  window.location.assign(parsed.href);
}

function PlusPage() {
  const member = usePlusAccess();
  const search = Route.useSearch();
  const [continueHref, setContinueHref] = useState("/");
  const { confirming, error: confirmError } = useConfirmPlusSession(search.session_id, goAfterPlusCheckout);

  useEffect(() => {
    setContinueHref(readPlusNext());
    if (search.ref) captureReferralFromUrl(window.location.search);
  }, [search.ref]);

  return (
    <main className="relative isolate flex-1">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="ecomap-wash absolute inset-0" />
        <div className="ecomap-seeds absolute inset-0" />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16">
        <section className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">EcoMapPlus</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-fg sm:text-5xl">
            The villages, with the paper trail
          </h1>
          <p className="mt-4 font-display text-2xl text-forest">{PLUS_PRICE_LABEL}</p>
        </section>

        <ul className="grid gap-3 sm:grid-cols-2">
          {PLUS_FEATURES.map((row) => (
            <li key={row.title} className="flex items-start justify-between gap-3 rounded-lg bg-surface p-5 shadow-border">
              <Link to={row.to} className="font-display text-xl text-fg hover:underline">
                {row.title}
              </Link>
              <FeatureInfo text={row.body} />
            </li>
          ))}
        </ul>

        <section className="mx-auto w-full max-w-md rounded-lg bg-surface p-5 shadow-border sm:p-6">
          {member ? (
            <MemberDone href={continueHref} />
          ) : confirming ? (
            <ConfirmingPayment />
          ) : (
            <CheckoutForm
              next={continueHref}
              confirmError={confirmError}
              canceled={Boolean(search.canceled)}
              initialCode={search.ref}
            />
          )}
        </section>
      </div>
    </main>
  );
}

function ConfirmingPayment() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Stripe</p>
      <h2 className="mt-2 font-display text-2xl text-fg">Confirming your year</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">Stay on this page until the village pages open.</p>
    </div>
  );
}

function MemberDone({ href }: { href: string }) {
  const until = plusUntilLabel();
  const bonus = plusHasBonusYear();
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Member</p>
      <h2 className="mt-2 font-display text-2xl text-fg">{bonus ? "You’re in for two years" : "You’re in for the year"}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Village pages, photos, land, legal form, and sources are open{until ? ` until ${until}` : ""}.
      </p>
      <ShareCodeCard />
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <a
          href={href}
          className="inline-flex h-12 items-center justify-center rounded-md bg-forest px-5 text-base font-medium text-cream hover:bg-forest-deep"
        >
          Continue
        </a>
        <a
          href="/bot"
          className="inline-flex h-12 items-center justify-center rounded-md px-5 text-base font-medium text-forest shadow-border hover:bg-panel"
        >
          Open the bot
        </a>
      </div>
    </div>
  );
}

function initialEmail() {
  if (typeof window === "undefined") return "";
  return readLead()?.email ?? "";
}

function initialReferral() {
  if (typeof window === "undefined") return "";
  captureReferralFromUrl();
  return readReferralCode() || readLead()?.referralCode || "";
}

export function CheckoutForm({
  next,
  confirmError,
  canceled,
  initialCode = "",
}: {
  next: string;
  confirmError?: string;
  canceled: boolean;
  initialCode?: string;
}) {
  const [email, setEmail] = useState(initialEmail);
  const [referralCode, setReferralCode] = useState(() => initialCode || initialReferral());
  const [error, setError] = useState(confirmError);
  const [busy, setBusy] = useState(false);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [kind, setKind] = useState("none");
  const [pioneerStatus, setPioneerStatus] = useState("none");
  const [codeError, setCodeError] = useState("");

  useEffect(() => {
    setError(confirmError);
  }, [confirmError]);

  useEffect(() => {
    const lead = readLead();
    const storedCode = captureReferralFromUrl() || readReferralCode() || lead?.referralCode || "";
    if (lead?.email) setEmail(lead.email);
    if (storedCode) setReferralCode(storedCode);
  }, []);

  useEffect(() => {
    let cancelled = false;
    plusCheckoutStatus()
      .then((status) => {
        if (!cancelled) setConfigured(status.configured);
      })
      .catch(() => {
        if (!cancelled) setConfigured(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const code = referralCode.trim();
    const mail = email.trim();
    if (!code && !mail) {
      setKind("none");
      setPioneerStatus("none");
      setCodeError("");
      return;
    }
    let cancelled = false;
    const timer = window.setTimeout(() => {
      previewPlusReferral({ data: { email: mail, referralCode: code } })
        .then((result) => {
          if (cancelled) return;
          setKind(result.kind);
          setPioneerStatus(result.status);
          setCodeError(result.error ?? "");
        })
        .catch(() => {
          if (!cancelled) {
            setKind("none");
            setPioneerStatus("none");
            setCodeError(code ? "Could not check that code." : "");
          }
        });
    }, 280);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [email, referralCode]);

  async function pay() {
    setError("");
    if (isPlusAdminEmail(email)) {
      rememberPlusAdmin(email);
      const row = grantPlusMembership(undefined, undefined, { admin: true });
      ensurePlusShareCode({ data: { email } }).then((result) => {
        if (result.code) {
          rememberShareCode(result.code);
          grantPlusMembership(row.until, row.paidAt, { shareCode: result.code });
        }
      });
      return;
    }
    if (configured === false) {
      setError("Checkout isn’t live yet. The year opens after a real Stripe payment.");
      return;
    }
    rememberReferralCode(referralCode);
    rememberPlusNext(next);
    setBusy(true);
    try {
      const result = await startPlusCheckout({
        data: { origin: window.location.origin, email, next, referralCode },
      });
      if (result.error || typeof result.url !== "string") {
        setError(result.error || "Stripe didn’t return a checkout page.");
        setBusy(false);
        return;
      }
      goToCheckout(result.url);
    } catch (err) {
      setError(errorMessage(err, "Stripe couldn’t start checkout. Try again in a moment."));
      setBusy(false);
    }
  }

  const admin = isPlusAdminEmail(email);
  const pioneer = kind === "pioneer" && (pioneerStatus === "none" || pioneerStatus === "already" || pioneerStatus === "claimed");
  const memberCode = kind === "member";
  const priceLabel = pioneer ? PLUS_PIONEER_PRICE_LABEL : PLUS_PRICE_LABEL;
  const payLabel = pioneer
    ? `Pay ${PLUS_PIONEER_PRICE_LABEL} with Stripe`
    : memberCode
      ? "Pay $24 for two years with Stripe"
      : "Pay $24 a year with Stripe";

  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">{admin ? "Admin" : "Join"}</p>
      <h2 className="mt-2 font-display text-2xl text-fg">{admin ? "Complimentary year" : `Pay ${priceLabel}`}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {admin
          ? "This address holds EcoMapPlus without a card. Village pages open on this browser for a year."
          : pioneer
            ? `${PIONEER_CODE} is on this year. 90% off — ${PLUS_PIONEER_PRICE_LABEL}, billed through Stripe.`
            : memberCode
              ? `This code adds a bonus year. You pay ${PLUS_PRICE_LABEL} now; village pages stay open for two years. They earn $12.`
              : "One year of EcoMapPlus, billed through Stripe. Then the village pages open. A member’s share code adds a second year."}
      </p>
      {canceled ? <p className="mt-4 text-sm text-muted">Checkout was canceled. Nothing was charged.</p> : null}
      <label className="mt-6 block" htmlFor="plus-email">
        <span className="text-sm font-medium text-fg">Email</span>
        {admin ? null : (
          <span className="ml-2 text-xs text-subtle">{referralCode.trim() ? "needed for a code" : "optional"}</span>
        )}
        <input
          id="plus-email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              void pay();
            }
          }}
          className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </label>
      <label className="mt-4 block" htmlFor="plus-referral-code">
        <span className="text-sm font-medium text-fg">Share code</span>
        <span className="ml-2 text-xs text-subtle">optional</span>
        <input
          id="plus-referral-code"
          type="text"
          name="referral-code"
          autoComplete="off"
          spellCheck={false}
          value={referralCode}
          onChange={(event) => setReferralCode(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              void pay();
            }
          }}
          className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </label>
      {codeError ? <p className="mt-2 text-sm text-danger">{codeError}</p> : null}
      {configured === false && !admin ? (
        <p className="mt-4 text-sm text-muted">Checkout isn’t connected yet. The year opens after a real Stripe payment.</p>
      ) : null}
      {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
      <Button
        type="button"
        size="lg"
        className="mt-6 w-full"
        disabled={busy}
        data-plus-pay=""
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void pay();
        }}
      >
        {busy ? "Opening Stripe…" : admin ? "Open EcoMapPlus" : payLabel}
      </Button>
      <p className="mt-3 text-xs text-subtle">
        {admin
          ? "No charge. Access stays on this browser."
          : "Card details stay with Stripe. Access stays on this browser. After you join, you get your own share code."}
      </p>
    </div>
  );
}
