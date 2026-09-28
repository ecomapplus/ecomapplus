import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { VennPanel } from "@/components/venn-panel";
import { vennTotal } from "@/data/venn";

type SearchParams = { a?: string; b?: string; c?: string };

function parseAttr(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

export const Route = createFileRoute("/venn")({
  component: VennPage,
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    a: parseAttr(search.a),
    b: parseAttr(search.b),
    c: parseAttr(search.c),
  }),
  head: () => ({
    meta: [
      { title: "Attribute overlap · ecocommunitymap.com" },
      {
        name: "description",
        content: `Two or three attributes from this atlas of ${vennTotal} eco-communities. Each circle is the share that have that attribute. Overlaps are the share that have both, or all three.`,
      },
    ],
  }),
});

function VennPage() {
  const { a, b, c } = Route.useSearch();
  const navigate = useNavigate({ from: "/venn" });

  function onChange(next: { a?: string; b?: string; c?: string }) {
    const search: SearchParams = {};
    if (next.a) search.a = next.a;
    if (next.b) search.b = next.b;
    if (next.c) search.c = next.c;
    void navigate({ search, replace: true, resetScroll: false });
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <VennPanel aId={a} bId={b} cId={c} onChange={onChange} />
    </main>
  );
}
