import { Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { isUnauthorized, myBookmark, toggleBookmark, emitBookmarksChanged } from "@/lib/social";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/use-mounted";

const iconClass =
 "inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-ink/70 text-cream hover:bg-ink disabled:opacity-60";

export function SaveVillageButton({
 slug,
 variant = "button",
 redirectTo,
 className,
}: {
 slug: string;
 variant?: "button" | "icon" | "compact";
 redirectTo?: string;
 className?: string;
}) {
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 const ready = mounted && !isPending;
 const [bookmarked, setBookmarked] = useState(false);
 const [busy, setBusy] = useState(false);

 useEffect(() => {
 if (!ready || !user) {
 setBookmarked(false);
 return;
 }
 let cancelled = false;
 myBookmark({ data: slug })
.then((row) => {
 if (!cancelled) setBookmarked(row.bookmarked);
 })
.catch(() => {
 if (!cancelled) setBookmarked(false);
 });
 return () => {
 cancelled = true;
 };
 }, [slug, ready, user?.id]);

 const redirect = redirectTo ?? `/communities/${slug}`;
 const iconTone = cn(iconClass, className);
 const compactTone = cn(
  "inline-flex h-9 shrink-0 items-center gap-1 rounded-full bg-panel px-2.5 text-xs font-medium text-fg hover:bg-border disabled:opacity-60",
  className,
 );

 function halt(event: MouseEvent) {
 event.preventDefault();
 event.stopPropagation();
 }

 function stopBubble(event: MouseEvent) {
 event.stopPropagation();
 }

 async function onToggle(event: MouseEvent) {
 halt(event);
 if (!user || busy) return;
 setBusy(true);
 try {
 const next = await toggleBookmark({ data: slug });
 setBookmarked(next.bookmarked);
 emitBookmarksChanged(slug, next.bookmarked);
 } catch (err) {
 if (isUnauthorized(err)) setBookmarked(false);
 } finally {
 setBusy(false);
 }
 }

 if (!ready || !user) {
 if (variant === "icon") {
 return (<Link
 to="/login"
 search={{ redirect, reason: "save" }}
 onClick={stopBubble}
 onPointerDown={stopBubble}
 onMouseDown={stopBubble}
 aria-label="Create an account to save this village"
 title="Create an account to save this village"
 className={iconTone}
 >
 <Bookmark className="size-4" aria-hidden />
 </Link>);
 }
 if (variant === "compact") {
 return (<Link
 to="/login"
 search={{ redirect, reason: "save" }}
 onClick={stopBubble}
 onPointerDown={stopBubble}
 onMouseDown={stopBubble}
 title="Create an account to save this village"
 className={compactTone}
 >
 <Bookmark className="size-3.5" aria-hidden />
 Save
 </Link>);
 }
 return (<Button asChild>
 <Link to="/login" search={{ redirect, reason: "save" }}>
 <Bookmark className="size-4" aria-hidden />
 Create an account to save
 </Link>
 </Button>);
 }

 if (variant === "icon") {
 return (<button
 type="button"
 disabled={busy}
 onClick={(e) => void onToggle(e)}
 onPointerDown={halt}
 onMouseDown={halt}
 aria-pressed={bookmarked}
 aria-label={bookmarked ? "Saved. Tap to remove": "Save this village"}
 className={iconTone}
 >
 {bookmarked ? (<BookmarkCheck className="size-4" aria-hidden />): (<Bookmark className="size-4" aria-hidden />)}
 </button>);
 }

 if (variant === "compact") {
 return (<button
 type="button"
 disabled={busy}
 onClick={(e) => void onToggle(e)}
 onPointerDown={halt}
 onMouseDown={halt}
 aria-pressed={bookmarked}
 title={bookmarked ? "Saved. Tap to remove": "Save this village"}
 className={compactTone}
 >
 {bookmarked ? <BookmarkCheck className="size-3.5" aria-hidden /> : <Bookmark className="size-3.5" aria-hidden />}
 {bookmarked ? "Saved" : "Save"}
 </button>);
 }

 return (<Button
 type="button"
 variant={bookmarked ? "outline": "default"}
 disabled={busy}
 onClick={(e) => void onToggle(e)}
 onPointerDown={halt}
 onMouseDown={halt}
 >
 {bookmarked ? <BookmarkCheck className="size-4" aria-hidden />: <Bookmark className="size-4" aria-hidden />}
 {bookmarked ? "Saved": "Save this village"}
 </Button>);
}