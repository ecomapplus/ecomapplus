import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { PersonNameButton } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { compressUpload } from "@/lib/compress-image";
import { addRoomTask, listRoomTasks, updateRoomTask, type RoomTask, type TaskBoard } from "@/lib/room-collab";
import { startLivePoll } from "@/lib/live-poll";

function formatHours(n: number): string {
 const rounded = Math.round(n * 10) / 10;
 return Number.isInteger(rounded) ? `${rounded} h`: `${rounded.toFixed(1)} h`;
}

function formatWhen(iso: string | null): string {
 if (!iso) return "";
 const date = new Date(iso);
 if (Number.isNaN(date.getTime())) return "";
 return date.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

async function fileAsProof(file: File): Promise<{ data: string; name: string }> {
 if (file.size > 900_000) throw new Error("Keep the file under about 1 MB");
 if (file.type.startsWith("image/")) {
 const data = await compressUpload(file);
 return { data, name: file.name };
 }
 const data = await new Promise<string>((resolve, reject) => {
 const reader = new FileReader();
 reader.onload = () => {
 if (typeof reader.result === "string") resolve(reader.result);
 else reject(new Error("Could not read that file"));
 };
 reader.onerror = () => reject(new Error("Could not read that file"));
 reader.readAsDataURL(file);
 });
 if (data.length > 1_800_000) throw new Error("Keep the file under about 1 MB");
 return { data, name: file.name };
}

export function GroupTasks({
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
 const [board, setBoard] = useState<TaskBoard | null>(null);
 const [error, setError] = useState<string | null>(null);
 const [title, setTitle] = useState("");
 const [busy, setBusy] = useState(false);
 const [hourDrafts, setHourDrafts] = useState<Record<number, string>>({});
 const [completingId, setCompletingId] = useState<number | null>(null);
 const [proofNote, setProofNote] = useState("");
 const [proofFile, setProofFile] = useState<{ data: string; name: string } | null>(null);

 useEffect(() => {
 let cancelled = false;
 const apply = (next: TaskBoard) => {
 if (cancelled) return;
 setBoard((prev) => {
 const stamp = (b: TaskBoard) =>
 b.tasks.map((t) => `${t.id}:${t.done ? 1 : 0}:${t.hours ?? ""}:${t.proofNote ?? ""}`).join("|");
 return prev && stamp(prev) === stamp(next) ? prev : next;
 });
 };
 listRoomTasks({ data: roomId })
.then(apply)
.catch((err) => {
 if (!cancelled) setError(err instanceof Error ? err.message: "Could not load tasks.");
 });
 const stop = startLivePoll(() => {
 listRoomTasks({ data: roomId })
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

 async function onAdd(event: FormEvent) {
 event.preventDefault();
 setBusy(true);
 setError(null);
 try {
 setBoard(await addRoomTask({ data: { roomId, title } }));
 setTitle("");
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not add that task.");
 } finally {
 setBusy(false);
 }
 }

 async function onToggle(id: number, done: boolean) {
 if (openHall && done) {
 setCompletingId(id);
 setProofNote("");
 setProofFile(null);
 return;
 }
 setBoard((prev) =>
 prev
 ? { ...prev, tasks: prev.tasks.map((task) => (task.id === id ? { ...task, done }: task)) }
: prev,);
 setError(null);
 try {
 setBoard(await updateRoomTask({ data: { id, done } }));
 if (!done) setCompletingId(null);
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not update that task.");
 setBoard(await listRoomTasks({ data: roomId }).catch(() => board));
 }
 }

 async function onComplete(event: FormEvent, id: number) {
 event.preventDefault();
 if (!proofFile) {
 setError("Attach a file as proof.");
 return;
 }
 setBusy(true);
 setError(null);
 try {
 setBoard(await updateRoomTask({
 data: { id, done: true, proofNote, proofFile },
 }));
 setCompletingId(null);
 setProofNote("");
 setProofFile(null);
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not mark that complete.");
 } finally {
 setBusy(false);
 }
 }

 async function onPickFile(event: ChangeEvent<HTMLInputElement>) {
 const file = event.target.files?.[0];
 event.target.value = "";
 if (!file) return;
 setError(null);
 try {
 setProofFile(await fileAsProof(file));
 } catch (err) {
 setProofFile(null);
 setError(err instanceof Error ? err.message: "Could not read that file.");
 }
 }

 async function onHours(id: number) {
 const raw = hourDrafts[id];
 if (raw == null) return;
 setError(null);
 try {
 setBoard(await updateRoomTask({ data: { id, hours: raw.trim() === "" ? 0: raw } }));
 setHourDrafts((prev) => {
 const next = { ...prev };
 delete next[id];
 return next;
 });
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not save hours.");
 }
 }

 const mine = board?.tasks.filter((t) => t.mine) ?? [];
 const others = board?.tasks.filter((t) => !t.mine) ?? [];

 return (<div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
 <p className="text-sm text-muted">
 {openHall
 ? "Anyone with an account can add a task. Anyone can mark one complete, with a file and a note as proof."
 : "Add your own work and check it off. Everyone can see the list; only you can change yours."}
 </p>
 {!meId ? (<p className="mt-3 text-sm text-muted">
 <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
 Sign in
 </Link>
          {" "}
 to add a task or to mark one complete.
 </p>): null}

 {board && board.hoursByPerson.length > 0 && !openHall ? (<section className="mt-5">
 <h4 className="font-display text-lg text-fg">Hours worked</h4>
 <ul className="mt-2 divide-y divide-border">
 {board.hoursByPerson.map((row) => (<li key={row.userId} className="flex min-h-11 items-center justify-between gap-3 py-1">
 <PersonNameButton
 userId={row.userId}
 onOpen={onOpenPerson}
 className="text-sm font-medium text-forest hover:underline"
 >
 {row.userId === meId ? `${row.name} (you)`: row.name}
 </PersonNameButton>
 <span className="tabular-nums text-sm text-fg">{formatHours(row.hours)}</span>
 </li>))}
 </ul>
 </section>): null}

 {meId ? (<form onSubmit={onAdd} className="mt-5 flex flex-wrap items-end gap-2">
 <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">New task</span>
 <input
 value={title}
 onChange={(e) => setTitle(e.target.value)}
 maxLength={200}
 placeholder={openHall ? "Fix the square notice board": "Dig the beds"}
 className="h-11 min-w-0 rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <Button type="submit" disabled={busy || !title.trim()}>
 Add
 </Button>
 </form>): null}

 {openHall ? (<section className="mt-6">
 <h4 className="font-display text-lg text-fg">Village square tasks</h4>
 {!board ? (<div className="mt-2 h-20 animate-pulse rounded-md bg-panel" />): board.tasks.length === 0 ? (<p className="mt-2 text-sm text-muted">{meId ? "None yet. Add the first one." : "None yet."}</p>): (<ul className="mt-2 space-y-2">
 {board.tasks.map((task) => (<HallTaskRow
 key={task.id}
 task={task}
 meId={meId}
 completing={completingId === task.id}
 proofNote={proofNote}
 proofFile={proofFile}
 busy={busy}
 onOpenPerson={onOpenPerson}
 onToggle={onToggle}
 onComplete={onComplete}
 onPickFile={onPickFile}
 onNote={setProofNote}
 onCancel={() => {
 setCompletingId(null);
 setProofNote("");
 setProofFile(null);
 }}
 />))}
 </ul>)}
 </section>): (<>
 <section className="mt-6">
 <h4 className="font-display text-lg text-fg">Yours</h4>
 {!board ? (<div className="mt-2 h-20 animate-pulse rounded-md bg-panel" />): mine.length === 0 ? (<p className="mt-2 text-sm text-muted">Nothing of yours yet.</p>): (<ul className="mt-2 space-y-2">
 {mine.map((task) => (<li key={task.id} className="rounded-md border border-border bg-bg px-3 py-3">
 <label className="flex min-h-11 items-start gap-3">
 <input
 type="checkbox"
 checked={task.done}
 onChange={(e) => void onToggle(task.id, e.target.checked)}
 className="mt-1 size-5 shrink-0 accent-forest"
 />
 <span className={`text-sm ${task.done ? "text-muted line-through": "text-fg"}`}>{task.title}</span>
 </label>
 <label className="mt-2 flex items-center gap-2 pl-8 text-sm">
 <span className="text-muted">Hours</span>
 <input
 value={hourDrafts[task.id] ?? (task.hours != null ? String(task.hours): "")}
 onChange={(e) => setHourDrafts((prev) => ({ ...prev, [task.id]: e.target.value }))}
 onBlur={() => void onHours(task.id)}
 inputMode="decimal"
 placeholder="0"
 aria-label={`Hours for ${task.title}`}
 className="h-11 w-24 rounded-md border border-border bg-bg px-3 tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 </li>))}
 </ul>)}
 </section>

 <section className="mt-6">
 <h4 className="font-display text-lg text-fg">Everyone else</h4>
 {!board ? null: others.length === 0 ? (<p className="mt-2 text-sm text-muted">No one else has added a task.</p>): (<ul className="mt-2 space-y-2">
 {others.map((task) => (<li key={task.id} className="rounded-md border border-border bg-bg px-3 py-3">
 <p className={`text-sm ${task.done ? "text-muted line-through": "text-fg"}`}>{task.title}</p>
 <p className="mt-1 text-xs text-muted">
 <PersonNameButton
 userId={task.userId}
 onOpen={onOpenPerson}
 className="font-medium text-forest hover:underline"
 >
 {task.authorName}
 </PersonNameButton>
 {task.done ? " · done": " · open"}
 {task.hours != null ? ` · ${formatHours(task.hours)}`: ""}
 </p>
 </li>))}
 </ul>)}
 </section>
 </>)}
 {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p>: null}
 </div>);
}

function HallTaskRow({
 task,
 meId,
 completing,
 proofNote,
 proofFile,
 busy,
 onOpenPerson,
 onToggle,
 onComplete,
 onPickFile,
 onNote,
 onCancel,
}: {
 task: RoomTask;
 meId: string;
 completing: boolean;
 proofNote: string;
 proofFile: { data: string; name: string } | null;
 busy: boolean;
 onOpenPerson: (userId: string) => void;
 onToggle: (id: number, done: boolean) => void;
 onComplete: (event: FormEvent, id: number) => void;
 onPickFile: (event: ChangeEvent<HTMLInputElement>) => void;
 onNote: (value: string) => void;
 onCancel: () => void;
}) {
 return (<li className="rounded-md border border-border bg-bg px-3 py-3">
 {meId ? (
 <label className="flex min-h-11 items-start gap-3">
 <input
 type="checkbox"
 checked={task.done}
 disabled={busy}
 onChange={(e) => void onToggle(task.id, e.target.checked)}
 className="mt-1 size-5 shrink-0 accent-forest"
 />
 <span className="min-w-0 flex-1">
 <span className={`block text-sm ${task.done ? "text-muted line-through": "text-fg"}`}>{task.title}</span>
 <span className="mt-1 block text-xs text-muted">
 Added by{" "}
 <PersonNameButton
 userId={task.userId}
 onOpen={onOpenPerson}
 className="font-medium text-forest hover:underline"
 >
 {task.userId === meId ? `${task.authorName} (you)`: task.authorName}
 </PersonNameButton>
 {task.done ? " · done": " · open"}
 </span>
 </span>
 </label>
 ) : (
 <div className="min-w-0">
 <p className={`text-sm ${task.done ? "text-muted line-through": "text-fg"}`}>{task.title}</p>
 <p className="mt-1 text-xs text-muted">
 Added by{" "}
 <PersonNameButton
 userId={task.userId}
 onOpen={onOpenPerson}
 className="font-medium text-forest hover:underline"
 >
 {task.authorName}
 </PersonNameButton>
 {task.done ? " · done": " · open"}
 </p>
 </div>
 )}

 {completing && !task.done ? (<form onSubmit={(e) => onComplete(e, task.id)} className="mt-3 space-y-3 border-t border-border pt-3">
 <p className="text-xs text-muted">Mark it complete with a note and a file as proof.</p>
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Note</span>
 <textarea
 required
 value={proofNote}
 onChange={(e) => onNote(e.target.value)}
 maxLength={1000}
 rows={3}
 placeholder="What got done, and where to look."
 className="rounded-md border border-border bg-surface px-3 py-2 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Proof file</span>
 <input
 required
 type="file"
 accept="image/*,.pdf,.txt,.md,application/pdf,text/plain"
 onChange={onPickFile}
 className="text-sm text-fg file:mr-3 file:h-11 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:text-sm file:font-medium file:text-fg"
 />
 {proofFile ? <span className="text-xs text-muted">{proofFile.name}</span>: null}
 </label>
 <div className="flex flex-wrap gap-2">
 <Button type="submit" disabled={busy || proofNote.trim().length < 4 || !proofFile}>
 Mark complete
 </Button>
 <Button type="button" variant="ghost" onClick={onCancel}>
 Cancel
 </Button>
 </div>
 </form>): null}

 {task.done && (task.proofNote || task.proofFile) ? (<div className="mt-3 border-t border-border pt-3">
 <p className="text-xs text-muted">
 Finished by{" "}
 {task.completedBy ? (<PersonNameButton
 userId={task.completedBy}
 onOpen={onOpenPerson}
 className="font-medium text-forest hover:underline"
 >
 {task.completedBy === meId ? `${task.completedByName ?? "you"} (you)`: task.completedByName ?? "someone"}
 </PersonNameButton>): (task.completedByName ?? "someone")}
 {task.completedAt ? ` · ${formatWhen(task.completedAt)}`: ""}
 </p>
 {task.proofNote ? <p className="mt-2 text-sm text-fg">{task.proofNote}</p>: null}
 {task.proofFile ? task.proofFile.startsWith("data:image/") ? (<img
 src={task.proofFile}
 alt={task.proofName ?? "Proof"}
 className="mt-2 max-h-48 rounded-md border border-border object-contain"
 />): (<a
 href={task.proofFile}
 download={task.proofName ?? "proof"}
 className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
 >
 {task.proofName ?? "Proof file"}
 </a>): null}
 </div>): null}
 </li>);
}