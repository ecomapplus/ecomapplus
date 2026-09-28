import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SaveVillageButton } from "@/components/save-village-button";
import { VillageChip } from "@/components/village-chip";
import { villageRef } from "@/data/communities";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { BOOKMARKS_CHANGED, isUnauthorized, listMyBookmarks } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

export function SavedVillagesSection() {
  const mounted = useMounted();
  const { user, isPending } = useCurrentUserState();
  const [slugs, setSlugs] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isPending || !user) {
      setSlugs(null);
      return;
    }
    let cancelled = false;
    function load() {
      listMyBookmarks()
        .then((rows) => {
          if (!cancelled) setSlugs(rows.map((row) => row.community_slug));
        })
        .catch((err) => {
          if (cancelled) return;
          if (isUnauthorized(err)) setSlugs([]);
          else setError("Could not load saved villages.");
        });
    }
    load();
    function onChange() {
      load();
    }
    window.addEventListener(BOOKMARKS_CHANGED, onChange);
    return () => {
      cancelled = true;
      window.removeEventListener(BOOKMARKS_CHANGED, onChange);
    };
  }, [isPending, user]);

  const villages = (slugs ?? []).map((slug) => villageRef(slug)).filter((row) => Boolean(row));

  return (
    <section id="saved" className="mt-10 scroll-mt-28">
      <h2 className="font-display text-2xl text-fg">Saved villages</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Bookmarks from the atlas. Anyone who opens your profile can see them.
      </p>
      {!mounted || isPending ? (
        <ul className="mt-4 space-y-2">
          <li className="h-16 animate-pulse rounded-md bg-panel" />
          <li className="h-16 animate-pulse rounded-md bg-panel" />
        </ul>
      ) : !user ? (
        <p className="mt-4 text-sm text-muted">
          <Link to="/login" search={{ redirect: "/leaders" }} className="font-medium text-forest hover:underline">
            Sign in
          </Link>{" "}
          to see villages you have bookmarked.
        </p>
      ) : error ? (
        <p className="mt-4 text-sm text-forest-deep">{error}</p>
      ) : villages.length === 0 ? (
        <p className="mt-4 text-sm text-muted">
          Nothing saved yet. Open a village and tap Save.
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {villages.map((village) =>
            village ? (
              <li key={village.slug} className="flex items-center gap-2">
                <div className="min-w-0 flex-1">
                  <VillageChip village={village} compact wide />
                </div>
                <SaveVillageButton slug={village.slug} variant="compact" />
              </li>
            ) : null,
          )}
        </ul>
      )}
    </section>
  );
}
