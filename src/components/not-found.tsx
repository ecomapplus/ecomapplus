import { Link } from "@tanstack/react-router";

export function NotFound() {
 return (<main className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-16 text-center">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Atlas</p>
 <h1 className="mt-2 font-display text-3xl text-fg">This page is not in the charter</h1>
 <p className="mt-3 text-muted">
 That community isn’t in this atlas, or the link is out of date.
 </p>
 <Link
 to="/"
 className="mt-8 inline-flex min-h-11 items-center rounded-md bg-forest px-4 text-sm font-medium text-cream hover:bg-forest-deep"
 >
 Back to the atlas
 </Link>
 </main>);
}
