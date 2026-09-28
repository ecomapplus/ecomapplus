import { useEffect, useState, type FormEvent } from "react";
import { FundingThermometer, formatUsd } from "@/components/funding-meter";
import { PersonNameButton } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import {
  getRoomFunding,
  setFundingGoal,
  setFundingPledge,
  type RoomFunding,
} from "@/lib/room-funding";

export function GroupFunding({
  roomId,
  meId,
  isFounder,
  onOpenPerson,
}: {
  roomId: string;
  meId: string;
  isFounder: boolean;
  onOpenPerson: (userId: string) => void;
}) {
  const [data, setData] = useState<RoomFunding | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [goalDraft, setGoalDraft] = useState("");
  const [pledgeDraft, setPledgeDraft] = useState("");
  const [editingGoal, setEditingGoal] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setError(null);
    setEditingGoal(false);
    getRoomFunding({ data: roomId })
      .then((next) => {
        if (cancelled) return;
        setData(next);
        setGoalDraft(next.goalUsd != null ? String(next.goalUsd) : "");
        setPledgeDraft(next.myPledgeUsd != null ? String(next.myPledgeUsd) : "");
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load funding.");
      });
    const timer = window.setInterval(() => {
      getRoomFunding({ data: roomId })
        .then((next) => {
          if (cancelled) return;
          setData(next);
        })
        .catch(() => {
          /* keep last */
        });
    }, 4000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [roomId]);

  async function onGoal(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const next = await setFundingGoal({ data: { roomId, amount: goalDraft } });
      setData(next);
      setGoalDraft(String(next.goalUsd ?? ""));
      setEditingGoal(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save the goal.");
    } finally {
      setBusy(false);
    }
  }

  async function onPledge(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const next = await setFundingPledge({ data: { roomId, amount: pledgeDraft } });
      setData(next);
      setPledgeDraft(next.myPledgeUsd != null ? String(next.myPledgeUsd) : "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save your pledge.");
    } finally {
      setBusy(false);
    }
  }

  async function clearPledge() {
    setBusy(true);
    setError(null);
    try {
      const next = await setFundingPledge({ data: { roomId, amount: 0 } });
      setData(next);
      setPledgeDraft("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not clear your pledge.");
    } finally {
      setBusy(false);
    }
  }

  if (!data && !error) {
    return (
      <div className="flex min-h-0 flex-1 flex-col px-4 py-4">
        <div className="h-52 animate-pulse rounded-md bg-panel" />
      </div>
    );
  }

  if (!data) {
    return <p className="px-4 py-6 text-sm text-forest-deep">{error ?? "Could not load funding."}</p>;
  }

  const showGoalForm = isFounder && (editingGoal || data.goalUsd == null);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
      <p className="text-sm text-muted">
        A dollar goal for this group. Pledges are a promise here, not a payment. The pledged amount and
        the goal go public only after all three founders agree on the mission, the goal, and the thumbnail.
      </p>

      <div className="mt-6 grid items-start gap-8 sm:grid-cols-[auto_minmax(0,1fr)]">
        <FundingThermometer pledgedUsd={data.pledgedUsd} goalUsd={data.goalUsd} />

        <div className="min-w-0 space-y-6">
          <section>
            <h3 className="font-display text-xl text-fg">Goal</h3>
            {showGoalForm ? (
              <form onSubmit={onGoal} className="mt-3 flex flex-wrap items-end gap-2">
                <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-sm">
                  <span className="font-medium text-fg">Whole dollars</span>
                  <input
                    value={goalDraft}
                    onChange={(e) => setGoalDraft(e.target.value)}
                    inputMode="numeric"
                    placeholder="250000"
                    aria-label="Funding goal in whole dollars"
                    className="h-11 min-w-0 rounded-md border border-border bg-bg px-3 tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                  />
                </label>
                <Button type="submit" disabled={busy || !goalDraft.trim()}>
                  {data.goalUsd == null ? "Set goal" : "Save goal"}
                </Button>
                {data.goalUsd != null ? (
                  <Button type="button" variant="ghost" disabled={busy} onClick={() => setEditingGoal(false)}>
                    Cancel
                  </Button>
                ) : null}
              </form>
            ) : (
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p className="text-muted">
                  {data.goalUsd != null ? formatUsd(data.goalUsd) : "The founders have not set a goal yet."}
                </p>
                {isFounder ? (
                  <Button type="button" size="sm" variant="outline" onClick={() => setEditingGoal(true)}>
                    Edit goal
                  </Button>
                ) : null}
              </div>
            )}
          </section>

          <section>
            <h3 className="font-display text-xl text-fg">Your pledge</h3>
            <form onSubmit={onPledge} className="mt-3 flex flex-wrap items-end gap-2">
              <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-sm">
                <span className="font-medium text-fg">Whole dollars</span>
                <input
                  value={pledgeDraft}
                  onChange={(e) => setPledgeDraft(e.target.value)}
                  inputMode="numeric"
                  placeholder="5000"
                  aria-label="Your pledge in whole dollars"
                  className="h-11 min-w-0 rounded-md border border-border bg-bg px-3 tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                />
              </label>
              <Button type="submit" disabled={busy || !pledgeDraft.trim()}>
                {data.myPledgeUsd == null ? "Pledge" : "Update pledge"}
              </Button>
              {data.myPledgeUsd != null ? (
                <Button type="button" variant="ghost" disabled={busy} onClick={() => void clearPledge()}>
                  Clear
                </Button>
              ) : null}
            </form>
          </section>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="font-display text-xl text-fg">Pledges</h3>
        {data.pledges.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No pledges yet.</p>
        ) : (
          <ul className="mt-3 divide-y divide-border">
            {data.pledges.map((row) => (
              <li key={row.userId} className="flex min-h-11 items-center justify-between gap-3 py-2">
                <PersonNameButton
                  userId={row.userId}
                  onOpen={onOpenPerson}
                  className="text-left text-sm font-medium text-forest hover:underline"
                >
                  {row.userId === meId ? `${row.name} (you)` : row.name}
                </PersonNameButton>
                <span className="text-sm tabular-nums text-fg">{formatUsd(row.amountUsd)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      {error ? <p className="mt-4 text-sm text-forest-deep">{error}</p> : null}
    </div>
  );
}
