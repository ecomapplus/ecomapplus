import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PersonNameButton } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { allAgreements, type AgreementRow } from "@/data/agreements-catalog";
import { draftFromTemplate } from "@/data/agreement-draft";
import {
 getRoomAgreement,
 listRoomAgreements,
 proposeAgreement,
 signAgreement,
 type AgreementDetail,
 type AgreementSummary,
} from "@/lib/room-agreements";

function formatWhen(iso: string): string {
 const date = new Date(iso);
 if (Number.isNaN(date.getTime())) return "";
 return date.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function GroupAgreements({
 roomId,
 roomName,
 members,
 meId,
 onOpenPerson,
 openHall = false,
}: {
 roomId: string;
 roomName: string;
 members: { id: string; name: string }[];
 meId: string;
 onOpenPerson: (userId: string) => void;
 openHall?: boolean;
}) {
 const [list, setList] = useState<AgreementSummary[] | null>(null);
 const [error, setError] = useState<string | null>(null);
 const [mode, setMode] = useState<"list" | "pick" | "edit" | "view">("list");
 const [filter, setFilter] = useState("");
 const [side, setSide] = useState<"all" | "formal" | "informal">("all");
 const [draftTitle, setDraftTitle] = useState("");
 const [draftBody, setDraftBody] = useState("");
 const [templateId, setTemplateId] = useState("");
 const [templateTitle, setTemplateTitle] = useState("");
 const [detail, setDetail] = useState<AgreementDetail | null>(null);
 const [busy, setBusy] = useState(false);

 async function refresh() {
 const rows = await listRoomAgreements({ data: roomId });
 setList(rows);
 }

 useEffect(() => {
 let cancelled = false;
 listRoomAgreements({ data: roomId })
.then((rows) => {
 if (!cancelled) setList(rows);
 })
.catch((err) => {
 if (!cancelled) setError(err instanceof Error ? err.message: "Could not load agreements.");
 });
 return () => {
 cancelled = true;
 };
 }, [roomId]);

 const templates = useMemo(() => {
 const q = filter.trim().toLowerCase();
 return allAgreements().filter((row) => {
 if (side !== "all" && row.side !== side) return false;
 if (!q) return true;
 return (row.title.toLowerCase().includes(q) ||
 row.documentName.toLowerCase().includes(q) ||
 row.family.toLowerCase().includes(q) ||
 row.summary.toLowerCase().includes(q));
 });
 }, [filter, side]);

 function pick(row: AgreementRow) {
 const draft = draftFromTemplate(row.id, { roomName, memberNames: members.map((m) => m.name) });
 if (!draft) {
 setError("Could not open that template.");
 return;
 }
 setTemplateId(draft.templateId);
 setTemplateTitle(draft.templateTitle);
 setDraftTitle(draft.title);
 setDraftBody(draft.body);
 setMode("edit");
 setError(null);
 }

 async function submit() {
 setBusy(true);
 setError(null);
 try {
 const saved = await proposeAgreement({
 data: { roomId, templateId, title: draftTitle, body: draftBody },
 });
 await refresh();
 setDetail(saved);
 setMode("view");
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not submit that.");
 } finally {
 setBusy(false);
 }
 }

 async function open(id: number) {
 setBusy(true);
 setError(null);
 try {
 setDetail(await getRoomAgreement({ data: id }));
 setMode("view");
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not open that.");
 } finally {
 setBusy(false);
 }
 }

 async function onSign() {
 if (!detail) return;
 setBusy(true);
 setError(null);
 try {
 const next = await signAgreement({ data: detail.id });
 setDetail(next);
 await refresh();
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not sign that.");
 } finally {
 setBusy(false);
 }
 }

 return (<div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
 {mode === "list" ? (<>
 <div className="flex flex-wrap items-center justify-between gap-2">
 <p className="text-sm text-muted">
 {openHall
 ? "Anyone with an account can send an open agreement to the village square. Signatures are public. Everyone who signs is put in a group together. The first three members agree on the thumbnail, funding goal, and mission to open it as a project."
 : "Any member can propose. Signatures are public in this group and stay on the record."}
 </p>
 {meId ? (<Button type="button" size="sm" onClick={() => setMode("pick")}>
 {openHall ? "Send an agreement": "Propose an agreement"}
 </Button>): null}
 </div>
 {!meId ? (<p className="mt-3 text-sm text-muted">
 <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
 Sign in
 </Link>
          {" "}
 to send an agreement or to sign one.
 </p>): null}
 {!list ? (<div className="mt-4 h-24 animate-pulse rounded-md bg-panel" />): list.length === 0 ? (<p className="mt-6 text-sm text-muted">None yet. Start from a charter or a compact.</p>): (<ul className="mt-4 space-y-2">
 {list.map((row) => (<li key={row.id}>
 <button
 type="button"
 onClick={() => void open(row.id)}
 className="flex min-h-14 w-full flex-col rounded-md border border-border bg-bg px-3 py-2.5 text-left hover:border-forest/40"
 >
 <span className="text-sm font-medium text-fg">{row.title}</span>
 <span className="text-xs text-muted">
 {row.templateTitle} · {row.proposerName} · {row.signatureCount}{" "}
 {row.signatureCount === 1 ? "signature": "signatures"}
 {row.signed ? " · you signed": ""}
 {openHall && row.groupRoomId
 ? row.signed
 ? " · you're in the group"
 : " · group forming"
 : ""}
 </span>
 </button>
 </li>))}
 </ul>)}
 </>): null}

 {mode === "pick" ? (<>
 <div className="flex items-center justify-between gap-2">
 <h3 className="font-display text-xl text-fg">Pick a template</h3>
 <Button type="button" size="sm" variant="ghost" onClick={() => setMode("list")}>
 Back
 </Button>
 </div>
 <p className="mt-1 text-sm text-muted">Every formal charter and informal compact in the atlas.</p>
 <input
 value={filter}
 onChange={(e) => setFilter(e.target.value)}
 placeholder="Search templates"
 className="mt-3 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 <div className="mt-2 flex flex-wrap gap-2">
 {(["all", "informal", "formal"] as const).map((value) => (<button
 key={value}
 type="button"
 onClick={() => setSide(value)}
 className={`h-9 rounded-full px-3 text-sm ${
 side === value ? "bg-forest text-cream": "bg-panel text-fg"
 }`}
 >
 {value === "all" ? "All": value === "informal" ? "Compacts": "Charters"}
 </button>))}
 </div>
 <ul className="mt-3 max-h-80 space-y-2 overflow-y-auto">
 {templates.map((row) => (<li key={`${row.side}-${row.id}`}>
 <button
 type="button"
 onClick={() => pick(row)}
 className="w-full rounded-md border border-border bg-bg px-3 py-2.5 text-left hover:border-forest/40"
 >
 <span className="block text-sm font-medium text-fg">{row.title}</span>
 <span className="block text-xs text-muted">
 {row.side === "formal" ? "Charter": "Compact"} · {row.family}
 </span>
 <span className="mt-1 block text-xs leading-relaxed text-subtle">{row.summary}</span>
 </button>
 </li>))}
 </ul>
 </>): null}

 {mode === "edit" ? (<form
 className="flex flex-col gap-3"
 onSubmit={(event) => {
 event.preventDefault();
 void submit();
 }}
 >
 <div className="flex items-center justify-between gap-2">
 <h3 className="font-display text-xl text-fg">Edit before you submit</h3>
 <Button type="button" size="sm" variant="ghost" onClick={() => setMode("pick")}>
 Templates
 </Button>
 </div>
 <p className="text-sm text-muted">
 Based on {templateTitle}. Change anything. Submitting freezes this wording for signatures.
 </p>
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Title</span>
 <input
 required
 value={draftTitle}
 onChange={(e) => setDraftTitle(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Agreement</span>
 <textarea
 required
 value={draftBody}
 onChange={(e) => setDraftBody(e.target.value)}
 rows={16}
 className="rounded-md border border-border bg-bg px-3 py-2 font-sans text-sm leading-relaxed text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <Button type="submit" disabled={busy}>
 {busy ? "Submitting…": openHall ? "Submit to the village square": "Submit to the group"}
 </Button>
 </form>): null}

 {mode === "view" && detail ? (<div>
 <div className="flex items-center justify-between gap-2">
 <h3 className="font-display text-xl text-fg">{detail.title}</h3>
 <Button type="button" size="sm" variant="ghost" onClick={() => setMode("list")}>
 All
 </Button>
 </div>
 <p className="mt-1 text-xs text-muted">
 {detail.templateTitle} · proposed by {detail.proposerName}
 </p>
 <pre className="mt-4 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-md border border-border bg-bg px-3 py-3 text-sm leading-relaxed text-fg">
 {detail.body}
 </pre>
 <h4 className="mt-5 font-display text-lg text-fg">Public record</h4>
 <p className="mt-1 text-xs text-muted">
 {openHall ? "Every signature is visible in the village square and kept. Signing puts you in the group.": "Every signature is visible to the group and kept."}
 </p>
 {openHall ? (detail.signatures.length === 0 ? (<p className="mt-2 text-sm text-muted">No signatures yet.</p>): (<ul className="mt-2 divide-y divide-border">
 {detail.signatures.map((sig) => (<li key={sig.userId} className="flex min-h-11 items-center justify-between gap-3 py-1.5">
 <PersonNameButton
 userId={sig.userId}
 onOpen={onOpenPerson}
 className="text-sm font-medium text-forest hover:underline"
 >
 {sig.userId === meId ? `${sig.name} (you)`: sig.name}
 </PersonNameButton>
 <span className="text-xs tabular-nums text-muted">
 {`Signed${sig.createdAt ? ` · ${formatWhen(sig.createdAt)}`: ""}`}
 </span>
 </li>))}
 </ul>)) : (<ul className="mt-2 divide-y divide-border">
 {members.map((member) => {
 const sig = detail.signatures.find((s) => s.userId === member.id);
 return (<li key={member.id} className="flex min-h-11 items-center justify-between gap-3 py-1.5">
 <PersonNameButton
 userId={member.id}
 onOpen={onOpenPerson}
 className="text-sm font-medium text-forest hover:underline"
 >
 {member.id === meId ? `${member.name} (you)`: member.name}
 </PersonNameButton>
 <span className="text-xs tabular-nums text-muted">
 {sig
 ? `Signed${sig.createdAt ? ` · ${formatWhen(sig.createdAt)}`: ""}`
: "Not yet"}
 </span>
 </li>);
 })}
 </ul>)}
 {meId ? (detail.signed ? (<p className="mt-4 text-sm text-muted">
 {openHall && detail.groupRoomId
 ? "You have signed this. You are in the group. The first three members agree on the thumbnail, funding goal, and mission to open it as a project."
 : "You have signed this. It is on the public record."}
 </p>): (<Button type="button" className="mt-4" disabled={busy} onClick={() => void onSign()}>
 {busy ? "Signing…": openHall ? "Sign and join the group": "Sign this agreement"}
 </Button>)) : (<p className="mt-4 text-sm text-muted">
 <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
 Sign in
 </Link>
          {" "}
 to sign.
 </p>)}
 {openHall && detail.groupRoomId && detail.signed ? (
 <Link
 to="/hall"
 search={{ room: detail.groupRoomId }}
 className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-forest hover:underline"
 >
 Open the group
 </Link>
 ) : null}
 </div>): null}

 {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p>: null}
 </div>);
}
