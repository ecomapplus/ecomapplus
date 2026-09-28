import { X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Avatar } from "@/components/avatar";
import { PresenceMark } from "@/components/presence-mark";
import { Button } from "@/components/ui/button";
import { VillageChip } from "@/components/village-chip";
import { contributions, founderSkills } from "@/data/founder-skills";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { amIAdmin, deleteAccount } from "@/lib/admin";
import { startPrivateChat } from "@/lib/chat";
import { getPerson, type PersonProfile } from "@/lib/people";
import { isUnauthorized } from "@/lib/social";

const FOCUSABLE = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function PersonNameButton({
 userId,
 onOpen,
 children,
 className,
}: {
 userId: string;
 onOpen: (userId: string) => void;
 children: ReactNode;
 className?: string;
}) {
 return (<button type="button" aria-haspopup="dialog" className={className} onClick={() => { if (userId) onOpen(userId); }}>
 {children}
 </button>);
}

export function PersonPreview({
 userId,
 onClose,
 onMessage,
 onDeleted,
}: {
 userId: string;
 onClose: () => void;
 onMessage: (roomId: string) => void;
 onDeleted?: () => void;
}) {
 const titleId = useId();
 const panelRef = useRef<HTMLDivElement>(null);
 const closeRef = useRef<HTMLButtonElement>(null);
 const [person, setPerson] = useState<PersonProfile | null | undefined>(undefined);
 const [error, setError] = useState<string | null>(null);
 const [busy, setBusy] = useState(false);
 const [isAdmin, setIsAdmin] = useState(false);
 const [confirmDelete, setConfirmDelete] = useState(false);
 const { user } = useCurrentUserState();

 useEffect(() => {
 let cancelled = false;
 setPerson(undefined);
 setError(null);
 getPerson({ data: userId })
.then((row) => {
 if (!cancelled) setPerson(row);
 })
.catch((err) => {
 if (cancelled) return;
 setPerson(null);
 setError(isUnauthorized(err)
 ? "Sign in to see this profile."
: err instanceof Error
 ? err.message
: "Could not load this person.",);
 });
 return () => {
 cancelled = true;
 };
 }, [userId]);

 useEffect(() => {
 setConfirmDelete(false);
 if (!user) {
 setIsAdmin(false);
 return;
 }
 let cancelled = false;
 amIAdmin()
 .then((row) => {
 if (!cancelled) setIsAdmin(Boolean(row.admin));
 })
 .catch(() => {
 if (!cancelled) setIsAdmin(false);
 });
 return () => {
 cancelled = true;
 };
 }, [user, userId]);

 useEffect(() => {
 const previous = document.activeElement as HTMLElement | null;
 const overflow = document.body.style.overflow;
 document.body.style.overflow = "hidden";
 closeRef.current?.focus();
 const onKey = (event: KeyboardEvent) => {
 if (event.key === "Escape") {
 event.preventDefault();
 onClose();
 return;
 }
 if (event.key !== "Tab") return;
 const root = panelRef.current;
 if (!root) return;
 const nodes = [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,);
 if (nodes.length === 0) return;
 const first = nodes[0];
 const last = nodes[nodes.length - 1];
 if (event.shiftKey && document.activeElement === first) {
 event.preventDefault();
 last.focus();
 } else if (!event.shiftKey && document.activeElement === last) {
 event.preventDefault();
 first.focus();
 }
 };
 document.addEventListener("keydown", onKey);
 return () => {
 document.body.style.overflow = overflow;
 document.removeEventListener("keydown", onKey);
 previous?.focus();
 };
 }, [onClose, userId]);

 async function sendMessage() {
 setBusy(true);
 setError(null);
 try {
 const room = await startPrivateChat({ data: userId });
 onMessage(room.id);
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not open a chat.");
 setBusy(false);
 }
 }

 async function onDeleteAccount() {
 setBusy(true);
 setError(null);
 try {
 await deleteAccount({ data: userId });
 onDeleted?.();
 onClose();
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not delete that account.");
 setBusy(false);
 setConfirmDelete(false);
 }
 }

 return (<div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
 <button
 type="button"
 aria-label="Close profile"
 className="absolute inset-0 bg-ink/40"
 onClick={onClose}
 />
 <div
 ref={panelRef}
 role="dialog"
 aria-modal="true"
 aria-labelledby={titleId}
 className="relative z-10 flex max-h-[85dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-lg border border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-border-hover sm:rounded-lg"
 >
 <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
 <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Profile</p>
 <button
 ref={closeRef}
 type="button"
 onClick={onClose}
 className="inline-flex size-11 items-center justify-center rounded-full text-fg hover:bg-panel"
 aria-label="Close"
 >
 <X className="size-4" aria-hidden />
 </button>
 </div>
 <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
 {person === undefined ? (<div className="space-y-3">
 <div className="h-16 w-16 animate-pulse rounded-full bg-panel" />
 <div className="h-8 w-48 animate-pulse rounded-md bg-panel" />
 <div className="h-24 animate-pulse rounded-md bg-panel" />
 </div>): person ? (<PersonProfileBody person={person} titleId={titleId} compact />): (<p className="text-muted">{error ?? "They may have left."}</p>)}
 </div>
 {person ? (<div className="flex flex-col gap-2 border-t border-border px-4 py-3">
 {error ? <p className="text-sm text-forest-deep">{error}</p>: null}
 {confirmDelete ? (
 <div role="alertdialog" aria-labelledby={`${titleId}-sure`} className="rounded-md border border-border bg-panel p-3">
 <p id={`${titleId}-sure`} className="font-medium text-fg">Are you sure?</p>
 <p className="mt-1 text-sm text-muted">
 This removes {person.name} from the village square and deletes their account. It cannot be undone.
 </p>
 <div className="mt-3 flex flex-wrap gap-2">
 <Button type="button" disabled={busy} onClick={() => void onDeleteAccount()}>
 {busy ? "Deleting…": "Yes, delete"}
 </Button>
 <Button type="button" variant="ghost" disabled={busy} onClick={() => setConfirmDelete(false)}>
 Cancel
 </Button>
 </div>
 </div>
 ): (
 <>
 {person.isMe ? (<Button asChild>
 <a href="/profile">Edit profile</a>
 </Button>): user ? (<Button type="button" disabled={busy} onClick={() => void sendMessage()}>
 {busy ? "Opening…": "Send a personal message"}
 </Button>): (<Button asChild>
 <Link to="/login" search={{ redirect: "/hall" }}>
 Sign in to send a message
 </Link>
 </Button>)}
 {isAdmin && !person.isMe ? (
 <Button type="button" variant="outline" disabled={busy} onClick={() => setConfirmDelete(true)}>
 Delete account
 </Button>
 ): null}
 </>
 )}
 </div>): null}
 </div>
 </div>);
}

export function PersonProfileBody({
 person,
 titleId,
 compact = false,
}: {
 person: PersonProfile;
 titleId?: string;
 compact?: boolean;
}) {
 const founder = person.founder;
 const money = founder ? contributions.find((c) => c.id === founder.contribution): null;
 const skillLabels = founder ? founderSkills.filter((s) => founder.skills.includes(s.id)): [];
 const heading = compact ? "text-2xl": "text-4xl";
 const TitleTag = compact ? "h2": "h1";

 return (<div>
 <div className="flex items-start gap-4">
 <Avatar name={person.name} image={person.image} size={compact ? "md": "lg"} online={person.online} />
 <div className="min-w-0">
 <TitleTag id={titleId} className={`font-display leading-tight text-fg ${heading}`}>
 {person.isMe ? `${person.name} (you)`: person.name}
 </TitleTag>
 <p className="mt-1">
 <PresenceMark online={person.online} hasAccount={person.hasAccount} />
 </p>
 <p className="mt-2 text-muted">
 {founder?.wantsToFound
 ? "Wants to help create a new Eco-community."
: skillLabels.length > 0
 ? "On the atlas, with skills on their account."
: "On the atlas. No founder notes yet."}
 </p>
 </div>
 </div>
 {person.bio ? (<p className={`mt-4 max-w-prose leading-relaxed text-fg ${compact ? "": "text-lg"}`}>{person.bio}</p>): null}

 <SavedVillages person={person} compact={compact} />

 {skillLabels.length > 0 ? (<section className={compact ? "mt-6": "mt-10"}>
 <h3 className={`font-display text-fg ${compact ? "text-xl": "text-2xl"}`}>Skills</h3>
 <ul className="mt-2 flex flex-wrap gap-2">
 {skillLabels.map((skill) => (<li key={skill.id} className="rounded-full bg-panel px-3 py-1.5 text-sm text-fg">
 {skill.label}
 </li>))}
 </ul>
 </section>): null}

 {founder?.wantsToFound ? (<>
 <section className={compact ? "mt-6": "mt-8"}>
 <h3 className={`font-display text-fg ${compact ? "text-xl": "text-2xl"}`}>What they can put in</h3>
 <p className="mt-2 text-muted">{money?.label ?? "Not stated"}</p>
 {founder.hoursPerWeek != null ? (<p className="mt-1 text-sm text-muted">{founder.hoursPerWeek} hours a week</p>): null}
 </section>
 <section className={compact ? "mt-6": "mt-8"}>
 <h3 className={`font-display text-fg ${compact ? "text-xl": "text-2xl"}`}>Land</h3>
 {founder.hasLand ? (<>
 <p className="mt-2 text-muted">
 {founder.landAcres ?? "n/a"} acres · {founder.landLocation}
 </p>
 {founder.photos.length > 0 ? (<ul className={`mt-3 grid gap-2 sm:grid-cols-2 ${compact ? "": "mt-4 gap-3"}`}>
 {founder.photos.map((photo) => (<li key={photo.id} className="overflow-hidden rounded-md bg-panel">
 <img
 src={photo.src}
 alt={`Land offered by ${person.name}`}
 className="aspect-video w-full object-cover"
 />
 </li>))}
 </ul>): null}
 </>): (<p className="mt-2 text-muted">No land yet.</p>)}
 </section>
 </>): null}
 </div>);
}

const COMPACT_SAVED = 6;

function SavedVillages({
 person,
 compact,
}: {
 person: PersonProfile;
 compact: boolean;
}) {
 const all = person.saved ?? [];
 const shown = compact ? all.slice(0, COMPACT_SAVED) : all;
 const hidden = all.length - shown.length;
 const heading = compact ? "text-xl" : "text-2xl";

 return (
  <section className={compact ? "mt-6" : "mt-10"} data-saved-villages data-saved-count={all.length}>
   <h3 className={`font-display text-fg ${heading}`}>Saved villages</h3>
   <p className="mt-1 text-sm text-muted">
    {person.isMe
     ? "Anyone who opens your profile can see these."
     : person.sharedBookmarks > 0
       ? `Villages ${person.name} has saved · ${person.sharedBookmarks} in common with you.`
       : `Villages ${person.name} has saved.`}
   </p>
   {shown.length === 0 ? (
    <p className="mt-3 text-muted">
     {person.isMe
      ? "Nothing saved yet. Bookmark a village from the atlas."
      : "None saved yet."}
    </p>
   ) : (
    <ul className={`mt-3 grid gap-2 ${compact ? "" : "sm:grid-cols-2"}`}>
     {shown.map((village) => (
      <li key={village.slug}>
       <VillageChip village={village} compact={compact} wide />
      </li>
     ))}
    </ul>
   )}
   {hidden > 0 ? (
    <Link
     to="/people/$userId"
     params={{ userId: person.id }}
     className="mt-3 inline-flex min-h-11 items-center font-medium text-forest hover:underline"
    >
     See all {all.length}
    </Link>
   ) : person.isMe ? (
    <Link to="/leaders" hash="saved" className="mt-3 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
     Manage saved villages
    </Link>
   ) : null}
  </section>
 );
}
