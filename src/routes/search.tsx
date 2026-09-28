import { createFileRoute } from "@tanstack/react-router";
import { AdvancedSearchPanel } from "@/components/advanced-search";
import { parsePageParam } from "@/data/communities";

type SearchParams = { q?: string; page?: number };

export const Route = createFileRoute("/search")({
 component: AdvancedSearchPage,
 validateSearch: (search: Record<string, unknown>): SearchParams => ({
 q: typeof search.q === "string" ? search.q: undefined,
 page: parsePageParam(search.page),
 }),
 head: () => ({
 meta: [
 { title: "Advanced search · ecocommunitymap.com" },
 {
 name: "description",
 content:
 "Search villages by keywords, filters, and distance. Match all criteria, or any. Search within any radius of any place. Rank by villages most similar to one you pick. Each village still appears only once.",
 },
 ],
 }),
});

function AdvancedSearchPage() {
 const { q, page } = Route.useSearch();
 return (<main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <AdvancedSearchPanel mode="page" encodedQuery={q} page={page} />
 </main>);
}
