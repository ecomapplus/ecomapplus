import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { communities } from "@/data/communities";
import { isPlusAdminEmail, PLUS_CHANGED, readPlusAdminEmail, rememberPlusAdmin } from "@/lib/plus-membership";
import { listPlusReferrals, type PlusReferralAdminRow } from "@/lib/plus-checkout";
import { REFERRAL_COMMISSION_LABEL } from "@/lib/referral";
import { listWeeklyLeads, weeklyAnswerLines, type WeeklyLead } from "@/lib/weekly-leads";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Weekly list · EcoMapPlus" }],
  }),
});

function villageName(slug: string): string {
  return communities.find((row) => row.slug === slug)?.name ?? slug;
}

function asLeadRows(result: unknown): WeeklyLead[] | null {
  if (Array.isArray(result)) return result as WeeklyLead[];
  if (!result || typeof result !== "object") return null;
  const row = result as { ok?: unknown; rows?: unknown; error?: unknown };
  if (row.ok === false) return null;
  if (Array.isArray(row.rows)) return row.rows as WeeklyLead[];
  return null;
}

function subscribeAdmin(callback: () => void) {
  window.addEventListener(PLUS_CHANGED, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PLUS_CHANGED, callback);
    window.removeEventListener("storage", callback);
  };
}

function AdminPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Admin</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Weekly list</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Quiz emails and answers for the Monday 4:30pm PST send.
      </p>
      <WeeklyLeadsPanel />
      <ReferralsPanel />
      <p className="mt-10">
        <Link to="/" className="text-sm font-medium text-forest hover:underline">
          Back to the map
        </Link>
      </p>
    </main>
  );
}

function WeeklyLeadsPanel() {
  const storedAdmin = useSyncExternalStore(subscribeAdmin, readPlusAdminEmail, () => null);
  const [email, setEmail] = useState("");
  const [rows, setRows] = useState<WeeklyLead[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const open = Boolean(storedAdmin);

  const load = useCallback(async (adminEmail: string) => {
    setBusy(true);
    setError("");
    try {
      const result = await listWeeklyLeads({ data: { email: adminEmail } });
      const list = asLeadRows(result);
      if (!list) {
        setError("Could not load the weekly list.");
        return;
      }
      setRows(list);
    } catch {
      setError("Could not load the weekly list.");
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => {
    if (!storedAdmin) return;
    setEmail(storedAdmin);
    void load(storedAdmin);
  }, [load, storedAdmin]);

  function unlock() {
    if (!isPlusAdminEmail(email)) {
      setError("Not this address.");
      return;
    }
    rememberPlusAdmin(email);
  }

  const grouped = useMemo(() => {
    const map = new Map<string, WeeklyLead[]>();
    for (const row of rows ?? []) {
      const list = map.get(row.sendOn) ?? [];
      list.push(row);
      map.set(row.sendOn, list);
    }
    return [...map.entries()];
  }, [rows]);

  if (!open) {
    return (
      <div className="mt-10 max-w-md">
        <label className="block" htmlFor="admin-email">
          <span className="text-sm font-medium text-fg">Admin email</span>
          <input
            id="admin-email"
            name="admin-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                unlock();
              }
            }}
            className="mt-2 h-11 w-full rounded-md bg-surface px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </label>
        {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
        <Button type="button" className="mt-4" disabled={busy} onClick={unlock}>
          {busy ? "Opening…" : "Open weekly list"}
        </Button>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <p className="text-sm text-muted">
        {busy && rows === null
          ? "Loading the list…"
          : rows === null
            ? error || "Could not load the weekly list."
            : rows.length === 0
              ? "No emails on the list yet."
              : `${rows.length} on the list.`}
      </p>
      {error && rows !== null ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
      <div className="mt-4 flex flex-col gap-8">
        {grouped.map(([sendOn, list]) => (
          <div key={sendOn}>
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-moss">
              Send {sendOn} · 4:30pm PST
            </h2>
            <ul className="mt-3 flex flex-col gap-3">
              {list.map((row) => {
                const lines = weeklyAnswerLines(row.answers, row.weights);
                return (
                  <li key={row.id} className="rounded-lg bg-surface p-4 shadow-border sm:p-5">
                    <p className="font-medium text-fg">{row.email}</p>
                    {row.referralCode ? (
                      <p className="mt-1 text-xs font-medium text-forest">
                        Code {row.referralCode}
                        {row.referralCode === "pioneer90" ? " · 90% off Plus" : ""}
                      </p>
                    ) : null}
                    <p className="mt-1 text-xs text-subtle">
                      {new Date(row.createdAt).toLocaleString("en-US", {
                        timeZone: "America/Los_Angeles",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}{" "}
                      PT
                    </p>
                    {row.matchSlugs.length > 0 ? (
                      <p className="mt-2 text-sm text-muted">
                        Top fits: {row.matchSlugs.map(villageName).join(" · ")}
                      </p>
                    ) : null}
                    <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                      {lines.map((line) => (
                        <div key={line.label}>
                          <dt className="text-xs uppercase tracking-wide text-subtle">{line.label}</dt>
                          <dd className="text-sm text-fg">
                            {line.value}
                            <span className="ml-2 text-xs text-muted">importance {line.weight}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReferralsPanel() {
  const storedAdmin = useSyncExternalStore(subscribeAdmin, readPlusAdminEmail, () => null);
  const [rows, setRows] = useState<PlusReferralAdminRow[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!storedAdmin) return;
    let cancelled = false;
    setBusy(true);
    listPlusReferrals({ data: { email: storedAdmin } })
      .then((result) => {
        if (cancelled) return;
        if (!result.ok) {
          setError(result.error);
          setRows([]);
          return;
        }
        setRows(result.rows);
        setError("");
      })
      .catch(() => {
        if (!cancelled) {
          setError("Could not load referrals.");
          setRows([]);
        }
      })
      .finally(() => {
        if (!cancelled) setBusy(false);
      });
    return () => {
      cancelled = true;
    };
  }, [storedAdmin]);

  if (!storedAdmin) return null;

  const earned = (rows ?? []).reduce((sum, row) => sum + row.commissionCents, 0);
  const credited = (rows ?? []).reduce((sum, row) => sum + (row.credited ? row.commissionCents : 0), 0);

  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl text-fg">Share codes</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Each paid year mints a code. A join with that code adds a bonus year for the new member and{" "}
        {REFERRAL_COMMISSION_LABEL} credit on the referrer’s next Stripe invoice.
      </p>
      <p className="mt-3 text-sm text-muted">
        {busy && rows === null
          ? "Loading referrals…"
          : rows === null
            ? error || "Could not load referrals."
            : rows.length === 0
              ? "No referred joins yet."
              : `${rows.length} referred · ${dollars(earned)} earned · ${dollars(credited)} credited`}
      </p>
      {error && rows !== null ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
      {rows && rows.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-3">
          {rows.map((row) => (
            <li key={row.id} className="rounded-lg bg-surface p-4 shadow-border sm:p-5">
              <p className="font-medium text-fg">{row.referrerCode}</p>
              <p className="mt-1 text-sm text-muted">
                {dollars(row.commissionCents)}
                {row.credited ? " credited to Stripe balance" : " pending credit"}
                {row.bonusApplied ? " · bonus year applied" : " · bonus year pending"}
              </p>
              <p className="mt-1 text-xs text-subtle">
                {new Date(row.createdAt).toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}{" "}
                PT
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function dollars(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

