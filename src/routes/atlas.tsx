import { createFileRoute } from "@tanstack/react-router";
import { AtlasDirectory, parseAtlasSearch } from "@/components/atlas-directory";

export const Route = createFileRoute("/atlas")({
  component: Atlas,
  validateSearch: parseAtlasSearch,
  head: () => ({
    meta: [{ title: "Atlas · EcoMapPlus" }],
  }),
});

function Atlas() {
  const { page, sort } = Route.useSearch();
  return <AtlasDirectory from="/atlas" page={page} sort={sort} />;
}
