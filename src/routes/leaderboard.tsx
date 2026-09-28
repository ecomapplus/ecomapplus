import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getCommunity } from "@/data/communities";
import { listBookmarkLeaderboard, type LeaderboardRow } from "@/lib/social";

export const Route = createFileRoute("/leaderboard")({
 component: LeaderboardPage,
 head: () => ({
 meta: [
 { title: "Most saved · ecocommunitymap.com" },
 {
 name: "description",
 content: "Eco-communities in the atlas ranked by how many people have bookmarked them.",
 },
 ],
 }),
});

function LeaderboardPage() {
 const [rows, setRows] = useState<LeaderboardRow[] | null>(null);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 let cancelled = false;
 listBookmarkLeaderboard()
.then((list) => {
 if (!cancelled) setRows(list);
 })
.catch(() => {
 if (!cancelled) setError("Could not load the board.");
 });
 return () => {
 cancelled = true;
 };
 }, []);

 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Atlas</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Most saved</h1>
 <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
 Villages people have actually kept. One save per person. Rank is by how many times, not by
 how loud the page is.
 </p>

 {error ? <p className="mt-6 text-sm text-forest-deep">{error}</p>: null}

 {!rows ? (<ol className="mt-10 space-y-3">
 <li className="h-20 animate-pulse rounded-lg bg-panel" />
 <li className="h-20 animate-pulse rounded-lg bg-panel" />
 <li className="h-20 animate-pulse rounded-lg bg-panel" />
 </ol>): rows.length === 0 ? (<p className="mt-10 text-muted">
 No one has saved a village yet.{" "}
 <Link to="/" className="font-medium text-forest hover:underline">
 Open the atlas
 </Link>{" "}
 and keep one.
 </p>): (<ol className="mt-10 space-y-2">
 {rows.map((row, index) => {
 const community = getCommunity(row.slug);
 if (!community) return null;
 const rank = rankAt(rows, index);
 return (<li key={row.slug}>
 <Link
 to="/communities/$slug"
 params={{ slug: community.slug }}
 className="flex min-h-20 items-center gap-3 rounded-lg border border-border bg-surface px-3 py-3 shadow-border hover:border-forest/40 sm:gap-4 sm:px-4"
 >
 <span className="w-8 shrink-0 text-center font-display text-2xl tabular-nums text-moss">
 {rank}
 </span>
 <span className="min-w-0 flex-1">
 <span className="block font-display text-xl leading-snug text-fg">{community.name}</span>
 <span className="mt-0.5 block truncate text-sm text-muted">
 {community.location} · {community.country}
 </span>
 </span>
 <span className="shrink-0 text-right">
 <span className="block font-display text-2xl tabular-nums text-fg">{row.count}</span>
 <span className="text-xs text-muted">{row.count === 1 ? "save": "saves"}</span>
 </span>
 </Link>
 </li>);
 })}
 </ol>)}
 </main>);
}

function rankAt(rows: LeaderboardRow[], index: number) {
 if (index === 0) return 1;
 if (rows[index].count === rows[index - 1].count) {
 let i = index - 1;
 while (i > 0 && rows[i].count === rows[i - 1].count) i -= 1;
 return i + 1;
 }
 return index + 1;
}
