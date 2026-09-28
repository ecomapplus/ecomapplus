import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { amIAdmin } from "@/lib/admin";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useMounted } from "@/lib/use-mounted";
import {
  addComment,
  deleteComment,
  loadVillageSocial,
  type VillageComment,
} from "@/lib/social";

export function CommunitySocial({ slug, name }: { slug: string; name: string }) {
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const sessionReady = mounted && !isPending;
  const [comments, setComments] = useState<VillageComment[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [body, setBody] = useState("");
  const [busyComment, setBusyComment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const loginSearch = { redirect: `/communities/${slug}` };

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    loadVillageSocial({ data: slug })
      .then((data) => {
        if (cancelled) return;
        setComments(data.comments);
        setLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
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
  }, [user, user?.id]);

  async function onComment(event: FormEvent) {
    event.preventDefault();
    if (!user) return;
    setBusyComment(true);
    setError(null);
    try {
      const comment = await addComment({ data: { slug, body } });
      setComments((list) => [comment, ...list]);
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not post that.");
    } finally {
      setBusyComment(false);
    }
  }

  async function onDelete(id: number) {
    setError(null);
    try {
      await deleteComment({ data: id });
      setComments((list) => list.filter((row) => row.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not remove that.");
    }
  }

  return (
    <section id="notes" className="mt-12 scroll-mt-40">
      <div className="rounded-lg border border-border bg-surface p-5 shadow-border">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-moss">Comments</p>
        <h2 className="mt-2 font-display text-2xl text-fg">Notes on {name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {slug === "sabbathday-lake" || slug === "findhorn" || slug === "twin-oaks" || slug === "the-farm" || slug === "willow-witt" || slug === "embercombe" || slug === "polyface" || slug === "juneberry-ridge" || slug === "riverside-oasis" || slug === "serenbe" || slug === "belterra" || slug === "shelburne-farms" || slug === "hawkwood" || slug === "yogaville" || slug === "rio-oro" || slug === "carate-base-camp" || slug === "earthaven" || slug === "monkton-wyld" || slug === "lost-valley"
            ? "Sign in and leave a note for the next reader."
            : "Sign in and leave a note for the next reader. This is not a review site."}
        </p>

        {!sessionReady ? (
          <div className="mt-4 h-24 animate-pulse rounded-md bg-panel" />
        ) : user ? (
          <form onSubmit={onComment} className="mt-4 space-y-3">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-fg">Your note</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                maxLength={1000}
                rows={4}
                required
                placeholder="Something you noticed, visited, or want to remember."
                className="rounded-md border border-border bg-bg px-3 py-2 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              />
              <span className="text-xs tabular-nums text-subtle">{body.length}/1000</span>
            </label>
            <Button type="submit" disabled={busyComment || body.trim().length < 2}>
              {busyComment ? "Posting…" : "Post comment"}
            </Button>
          </form>
        ) : (
          <p className="mt-4 text-sm text-muted">
            <Link to="/login" search={loginSearch} className="font-medium text-forest hover:underline">
              Sign in
            </Link>{" "}
            to leave a comment.
          </p>
        )}

        {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p> : null}

        <ul className="mt-6 space-y-4">
          {!loaded ? (
            <li className="h-16 animate-pulse rounded-md bg-panel" />
          ) : comments.length === 0 ? (
            <li className="text-sm text-subtle">No comments yet.</li>
          ) : (
            comments.map((comment) => (
              <li key={comment.id} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                <p className="text-sm font-medium text-fg">{comment.authorName}</p>
                <p className="mt-0.5 text-xs text-subtle">{formatWhen(comment.createdAt)}</p>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted">{comment.body}</p>
                {sessionReady && user && (isAdmin || user.id === comment.userId) ? (
                  <button
                    type="button"
                    onClick={() => onDelete(comment.id)}
                    className="mt-2 text-xs font-medium text-forest hover:underline"
                  >
                    Remove
                  </button>
                ) : null}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
