import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ensurePlusShareCode, plusShareStats, referralPayoutStatus, startReferralConnect, withdrawReferral } from "@/lib/plus-checkout";
import { PLUS_CHANGED, PLUS_PRICE_LABEL } from "@/lib/plus-membership";
import { readLead, readShareCode, rememberShareCode, shareLinkFor } from "@/lib/referral";

function dollars(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export function ShareCodeCard() {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState("");
  const [referredCount, setReferredCount] = useState(0);
  const [earnedCents, setEarnedCents] = useState(0);
  const [creditedCents, setCreditedCents] = useState(0);
  const [lookupEmail, setLookupEmail] = useState(() => readLead()?.email ?? "");
  const [lookupError, setLookupError] = useState("");
  const [lookupBusy, setLookupBusy] = useState(false);
  const [payoutReady, setPayoutReady] = useState(false);
  const [connectBusy, setConnectBusy] = useState(false);
  const [payoutError, setPayoutError] = useState("");
  const [paidNote, setPaidNote] = useState("");

  useEffect(() => {
    const sync = () => {
      const stored = readShareCode();
      if (stored) setCode(stored);
    };
    sync();
    window.addEventListener(PLUS_CHANGED, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PLUS_CHANGED, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    plusShareStats({ data: { code } })
      .then((result) => {
        if (cancelled) return;
        setReferredCount(result.referredCount);
        setEarnedCents(result.earnedCents);
        setCreditedCents(result.creditedCents);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [code]);

  useEffect(() => {
    const email = lookupEmail.trim();
    if (!email.includes("@")) return;
    let cancelled = false;
    referralPayoutStatus({ data: { email } })
      .then((result) => {
        if (cancelled || result.error) return;
        setPayoutReady(result.payoutsReady);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [lookupEmail, code]);

  async function copy(kind: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      window.setTimeout(() => setCopied(""), 1600);
    } catch {
      setCopied("");
    }
  }

  async function loadCode() {
    setLookupError("");
    setLookupBusy(true);
    try {
      const result = await ensurePlusShareCode({ data: { email: lookupEmail } });
      if (result.error || !result.code) {
        setLookupError(result.error || "A share code appears after a paid year.");
        return;
      }
      rememberShareCode(result.code);
      setCode(result.code);
      setReferredCount(result.referredCount);
      setEarnedCents(result.earnedCents);
      setCreditedCents(result.creditedCents);
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : "Could not load that share code.");
    } finally {
      setLookupBusy(false);
    }
  }

  async function connectStripe() {
    setPayoutError("");
    setConnectBusy(true);
    try {
      const result = await startReferralConnect({
        data: { email: lookupEmail, origin: window.location.origin },
      });
      if (result.error || !result.url) {
        setPayoutError(result.error || "Could not open Stripe Connect.");
        return;
      }
      window.location.assign(result.url);
    } catch (err) {
      setPayoutError(err instanceof Error ? err.message : "Could not open Stripe Connect.");
    } finally {
      setConnectBusy(false);
    }
  }

  async function withdraw() {
    setPayoutError("");
    setPaidNote("");
    setConnectBusy(true);
    try {
      const result = await withdrawReferral({ data: { email: lookupEmail } });
      if (result.error) {
        setPayoutError(result.error);
        return;
      }
      setPaidNote(`${dollars(result.cents)} is on the way to the bank account in Stripe.`);
      const stats = code ? await plusShareStats({ data: { code } }) : null;
      if (stats && !stats.error) {
        setReferredCount(stats.referredCount);
        setEarnedCents(stats.earnedCents);
        setCreditedCents(stats.creditedCents);
      }
    } catch (err) {
      setPayoutError(err instanceof Error ? err.message : "Could not withdraw.");
    } finally {
      setConnectBusy(false);
    }
  }

  const link = code ? shareLinkFor(code) : "";
  const availableCents = Math.max(0, earnedCents - creditedCents);

  if (!code) {
    return (
      <div className="mt-6">
        <p className="text-sm leading-relaxed text-muted">
          Every member gets a share code. Enter the email from checkout to load yours.
        </p>
        <label className="mt-3 block" htmlFor="plus-share-email">
          <span className="text-sm font-medium text-fg">Email</span>
          <input
            id="plus-share-email"
            type="email"
            autoComplete="email"
            value={lookupEmail}
            onChange={(event) => setLookupEmail(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                void loadCode();
              }
            }}
            className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
        {lookupError ? <p className="mt-2 text-sm text-danger">{lookupError}</p> : null}
        <Button type="button" variant="outline" className="mt-3 w-full" disabled={lookupBusy} onClick={() => void loadCode()}>
          {lookupBusy ? "Looking up…" : "Load share code"}
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-md bg-bg p-4 shadow-border">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Your share code</p>
      <p className="mt-2 font-display text-2xl tracking-wide text-fg">{code}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Anyone who joins with this code pays {PLUS_PRICE_LABEL} and gets two years. You earn $12 — half of each $24.
      </p>
      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide text-subtle">Joined</dt>
          <dd className="mt-0.5 font-medium text-fg">{referredCount}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-subtle">Earned</dt>
          <dd className="mt-0.5 font-medium text-fg">{dollars(earnedCents)}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-subtle">Ready to withdraw</dt>
          <dd className="mt-0.5 font-medium text-fg">{dollars(availableCents)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Connect Stripe, add a bank account, then withdraw. Stripe sends it to that bank.
      </p>
      {lookupEmail.includes("@") ? null : (
        <label className="mt-3 block" htmlFor="plus-payout-email">
          <span className="text-sm font-medium text-fg">Email from checkout</span>
          <input
            id="plus-payout-email"
            type="email"
            autoComplete="email"
            value={lookupEmail}
            onChange={(event) => setLookupEmail(event.target.value)}
            className="mt-2 h-11 w-full rounded-md bg-surface px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
      )}
      {payoutError ? <p className="mt-2 text-sm text-danger">{payoutError}</p> : null}
      {paidNote ? <p className="mt-2 text-sm text-moss">{paidNote}</p> : null}
      <div className="mt-4 flex flex-col gap-2">
        <Button type="button" variant="outline" disabled={connectBusy || !lookupEmail.includes("@")} onClick={() => void connectStripe()}>
          {connectBusy ? "Opening Stripe…" : payoutReady ? "Update Stripe account" : "Connect Stripe"}
        </Button>
        <Button type="button" disabled={connectBusy || !payoutReady || availableCents <= 0} onClick={() => void withdraw()}>
          Withdraw {dollars(availableCents)}
        </Button>
        <Button type="button" variant="outline" onClick={() => void copy("code", code)}>
          {copied === "code" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
          {copied === "code" ? "Copied" : "Copy code"}
        </Button>
        {link ? (
          <Button type="button" variant="outline" onClick={() => void copy("link", link)}>
            {copied === "link" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
            {copied === "link" ? "Copied" : "Copy share link"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
