import { createFileRoute } from "@tanstack/react-router";
import { AtlasDirectory, parseAtlasSearch } from "@/components/atlas-directory";
import { EcomapLanding } from "@/components/ecomap-landing";
import { usePlusAccess } from "@/lib/plus-membership";
import { useConfirmPlusSession, useRestorePaidPlus } from "@/lib/plus-session";
import { useMounted } from "@/lib/use-mounted";

type HomeSearch = ReturnType<typeof parseAtlasSearch> & { session_id?: string };

export const Route = createFileRoute("/")({
  component: Home,
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    ...parseAtlasSearch(search),
    session_id:
      typeof search.session_id === "string" && search.session_id.startsWith("cs_") ? search.session_id : undefined,
  }),
  head: () => ({
    meta: [{ title: "EcoMapPlus" }],
  }),
});

function Home() {
  const mounted = useMounted();
  const plus = usePlusAccess();
  const restoring = useRestorePaidPlus();
  const { page, sort, session_id: sessionId } = Route.useSearch();
  const { confirming } = useConfirmPlusSession(sessionId, () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("session_id");
    const next = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, "", next);
  });
  if (!mounted || restoring || confirming) {
    return (
      <main data-home="pending" className="flex-1 bg-bg" aria-busy="true">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="h-10 w-64 animate-pulse rounded-md bg-panel" />
          <div className="mt-6 h-40 animate-pulse rounded-md bg-panel" />
        </div>
      </main>
    );
  }
  if (plus) return <AtlasDirectory from="/" page={page} sort={sort} />;
  return <EcomapLanding />;
}
