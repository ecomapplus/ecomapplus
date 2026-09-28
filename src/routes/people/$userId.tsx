import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PersonProfileBody } from "@/components/person-preview";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { startPrivateChat } from "@/lib/chat";
import { getPerson, type PersonProfile } from "@/lib/people";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

export const Route = createFileRoute("/people/$userId")({
 component: PersonPage,
 head: ({ params }) => ({
 meta: [{ title: `Member · ecocommunitymap.com` }, { name: "description", content: params.userId }],
 }),
});

function PersonPage() {
 const { userId } = Route.useParams();
 const navigate = useNavigate();
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 const [person, setPerson] = useState<PersonProfile | null | undefined>(undefined);
 const [error, setError] = useState<string | null>(null);
 const [busy, setBusy] = useState(false);

 useEffect(() => {
 if (isPending) return;
 let cancelled = false;
 setPerson(undefined);
 getPerson({ data: userId })
.then((row) => {
 if (!cancelled) setPerson(row);
 })
.catch((err) => {
 if (cancelled) return;
 if (isUnauthorized(err)) setPerson(null);
 else {
 setPerson(null);
 setError(err instanceof Error ? err.message: "Could not load this person.");
 }
 });
 return () => {
 cancelled = true;
 };
 }, [userId, isPending, user?.id]);

 if (!mounted || isPending || person === undefined) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
 <div className="h-10 w-48 animate-pulse rounded-md bg-panel" />
 <div className="mt-6 h-40 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (!person) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
 <h1 className="font-display text-3xl text-fg">No one by that name</h1>
 <p className="mt-3 text-muted">{error ?? "They may have left."}</p>
 <Link to="/hall" className="mt-6 inline-flex min-h-11 items-center font-medium text-forest hover:underline">
 Back to the village square
 </Link>
 </main>);
 }

 async function onChat() {
 setBusy(true);
 setError(null);
 try {
 const room = await startPrivateChat({ data: userId });
 await navigate({ to: "/hall", search: { room: room.id } });
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not open a chat.");
 setBusy(false);
 }
 }

 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Member</p>
 <div className="mt-4">
 <PersonProfileBody person={person} />
 </div>

 <div className="mt-8 flex flex-wrap gap-3">
 {person.isMe ? (<Button asChild>
 <Link to="/profile">Edit profile</Link>
 </Button>): user ? (<Button type="button" disabled={busy} onClick={() => void onChat()}>
 {busy ? "Opening…": "Start a private chat"}
 </Button>): (<Button asChild>
 <Link to="/login" search={{ redirect: `/people/${userId}` }}>
 Sign in to send a message
 </Link>
 </Button>)}
 <Button asChild variant="outline">
 <Link to="/hall">The village square</Link>
 </Button>
 </div>
 {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p>: null}
 </main>);
}
