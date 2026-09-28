import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { PersonNameButton } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { castRoomVote, createRoomPoll, listRoomPolls, type RoomPoll } from "@/lib/room-collab";
import { startLivePoll } from "@/lib/live-poll";

function when(iso: string): string {
 const date = new Date(iso);
 if (Number.isNaN(date.getTime())) return "";
 return date.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function GroupVotes({
 roomId,
 meId,
 onOpenPerson,
 openHall = false,
}: {
 roomId: string;
 meId: string;
 onOpenPerson: (userId: string) => void;
 openHall?: boolean;
}) {
 const [polls, setPolls] = useState<RoomPoll[] | null>(null);
 const [error, setError] = useState<string | null>(null);
 const [busy, setBusy] = useState(false);
 const [composing, setComposing] = useState(false);
 const [question, setQuestion] = useState("");
 const [options, setOptions] = useState(["Yes", "No"]);
 const [firstThreeOnly, setFirstThreeOnly] = useState(false);

 useEffect(() => {
 let cancelled = false;
 const apply = (next: RoomPoll[]) => {
 if (cancelled) return;
 setPolls((prev) => {
 const stamp = (rows: RoomPoll[]) =>
 rows.map((p) => `${p.id}:${p.options.map((o) => o.votes.length).join(",")}:${p.question}`).join("|");
 return prev && stamp(prev) === stamp(next) ? prev : next;
 });
 };
 listRoomPolls({ data: roomId })
.then(apply)
.catch((err) => {
 if (!cancelled) setError(err instanceof Error ? err.message: "Could not load votes.");
 });
 const stop = startLivePoll(() => {
 listRoomPolls({ data: roomId })
.then(apply)
.catch(() => {
 /* keep last */
 });
 }, 10000);
 return () => {
 cancelled = true;
 stop();
 };
 }, [roomId]);

 async function onCreate(event: FormEvent) {
 event.preventDefault();
 setBusy(true);
 setError(null);
 try {
 setPolls(await createRoomPoll({
 data: {
 roomId,
 question,
 options,
 electorate: firstThreeOnly && !openHall ? "first-three": "all",
 },
 }),);
 setQuestion("");
 setOptions(["Yes", "No"]);
 setFirstThreeOnly(false);
 setComposing(false);
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not open that vote.");
 } finally {
 setBusy(false);
 }
 }

 async function onVote(pollId: number, optionId: number) {
 setBusy(true);
 setError(null);
 try {
 setPolls(await castRoomVote({ data: { pollId, optionId } }));
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not record your vote.");
 } finally {
 setBusy(false);
 }
 }

 return (<div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
 <div className="flex flex-wrap items-start justify-between gap-2">
 <p className="max-w-prose text-sm text-muted">
 {openHall
 ? "Anyone with an account can put a question for the village square. Every vote is public and stays on the record."
 : "Any member can put a question. Votes stay on the public record. You can limit a vote to the first three members."}
 </p>
 {!composing && meId ? (<Button type="button" size="sm" onClick={() => setComposing(true)}>
 New vote
 </Button>): null}
 </div>
 {!meId ? (<p className="mt-3 text-sm text-muted">
 <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
 Sign in
 </Link>
          {" "}
 to open a vote or to cast one.
 </p>): null}

 {composing ? (<form onSubmit={onCreate} className="mt-4 space-y-3 rounded-md border border-border bg-bg p-3">
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Question</span>
 <input
 value={question}
 onChange={(e) => setQuestion(e.target.value)}
 maxLength={280}
 placeholder="Shall we buy the north pasture?"
 className="h-11 rounded-md border border-border bg-surface px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <fieldset>
 <legend className="text-sm font-medium text-fg">Options</legend>
 <ul className="mt-2 space-y-2">
 {options.map((option, index) => (<li key={index}>
 <input
 value={option}
 aria-label={`Option ${index + 1}`}
 onChange={(e) =>
 setOptions((list) => list.map((item, i) => (i === index ? e.target.value: item)))
 }
 maxLength={80}
 className="h-11 w-full rounded-md border border-border bg-surface px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </li>))}
 </ul>
 {options.length < 6 ? (<button
 type="button"
 className="mt-2 min-h-11 text-sm font-medium text-forest hover:underline"
 onClick={() => setOptions((list) => [...list, ""])}
 >
 Add an option
 </button>): null}
 </fieldset>
 {openHall ? null : (<label className="flex min-h-11 items-start gap-3 text-sm">
 <input
 type="checkbox"
 checked={firstThreeOnly}
 onChange={(e) => setFirstThreeOnly(e.target.checked)}
 className="mt-1 size-5 shrink-0 accent-forest"
 />
 <span>
 <span className="block font-medium text-fg">Only the first three members</span>
 <span className="block text-xs text-muted">
 The two who started this group and the next person in. Later members can see the
 record, not vote.
 </span>
 </span>
 </label>)}
 <div className="flex flex-wrap gap-2">
 <Button type="submit" disabled={busy || question.trim().length < 4}>
 Open vote
 </Button>
 <Button type="button" variant="ghost" onClick={() => setComposing(false)}>
 Cancel
 </Button>
 </div>
 </form>): null}

 {!polls ? (<div className="mt-4 h-24 animate-pulse rounded-md bg-panel" />): polls.length === 0 && !composing ? (<p className="mt-6 text-sm text-muted">{openHall ? (meId ? "None yet. Put a question to the village square." : "None yet.") : "None yet. Put a question to the group."}</p>): (<ul className="mt-5 space-y-5">
 {polls.map((poll) => (<li key={poll.id} className="rounded-md border border-border bg-bg p-3">
 <h4 className="font-display text-lg text-fg">{poll.question}</h4>
 <p className="mt-1 text-xs text-muted">
 {poll.authorName}
 {poll.createdBy === meId ? " (you)": ""} · {when(poll.createdAt)}
 {poll.electorate === "first-three" ? " · first three members": ""}
 </p>
 {poll.electorate === "first-three" && poll.eligible.length > 0 ? (<p className="mt-1 text-xs text-muted">
 Voters: {poll.eligible.map((p) => (p.userId === meId ? `${p.name} (you)`: p.name)).join(", ")}
 </p>): null}
 {!poll.canVote ? (<p className="mt-2 text-xs text-muted">You can see this record. You cannot vote.</p>): null}
 <ul className="mt-3 space-y-2">
 {poll.options.map((option) => {
 const mine = poll.myOptionId === option.id;
 const box = (
 <>
 <span className="text-sm font-medium text-fg">{option.label}</span>
 <span className="tabular-nums text-sm text-muted">{option.votes.length}</span>
 </>
 );
 const boxClass = `flex min-h-11 w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left ${
 mine ? "border-forest bg-panel": "border-border bg-surface"
 }`;
 return (<li key={option.id}>
 {poll.canVote ? (
 <button
 type="button"
 disabled={busy}
 onClick={() => void onVote(poll.id, option.id)}
 className={`${boxClass} hover:border-forest/40`}
 >
 {box}
 </button>
 ) : (
 <div className={boxClass}>{box}</div>
 )}
 {option.votes.length > 0 ? (<ul className="mt-1 space-y-0.5 pl-3">
 {option.votes.map((vote) => (<li key={vote.userId} className="text-xs text-muted">
 <PersonNameButton
 userId={vote.userId}
 onOpen={onOpenPerson}
 className="font-medium text-forest hover:underline"
 >
 {vote.userId === meId ? `${vote.name} (you)`: vote.name}
 </PersonNameButton>
 {` · ${when(vote.at)}`}
 </li>))}
 </ul>): null}
 </li>);
 })}
 </ul>
 </li>))}
 </ul>)}
 {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p>: null}
 </div>);
}
