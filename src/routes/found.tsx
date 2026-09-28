import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { contributions, founderSkills } from "@/data/founder-skills";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getFounderProfile, type FounderProfile } from "@/lib/founders";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

export const Route = createFileRoute("/found")({
 component: FoundPage,
 head: () => ({
 meta: [{ title: "Your founder notes · ecocommunitymap.com" }],
 }),
});

function FoundPage() {
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 const [profile, setProfile] = useState<FounderProfile | null | undefined>(undefined);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 if (isPending || !user) return;
 let cancelled = false;
 getFounderProfile()
.then((row) => {
 if (!cancelled) setProfile(row);
 })
.catch((err) => {
 if (cancelled) return;
 if (isUnauthorized(err)) setProfile(null);
 else setError("Could not load your notes.");
 });
 return () => {
 cancelled = true;
 };
 }, [isPending, user]);

 if (!mounted || isPending) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
 <div className="h-10 w-56 animate-pulse rounded-md bg-panel" />
 <div className="mt-6 h-40 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (!user) return <Navigate to="/login" search={{ redirect: "/found" }} />;

 if (profile === undefined) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
 <div className="h-10 w-56 animate-pulse rounded-md bg-panel" />
 <div className="mt-6 h-40 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (!profile?.wantsToFound) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Founders</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Help create a village</h1>
 <p className="mt-3 max-w-xl text-lg text-muted">
 Skills, what you can put in, and land if you have it. This is not a membership. It is a
 working note so the right people can find each other later.
 </p>
 {error ? <p className="mt-4 text-sm text-forest-deep">{error}</p>: null}
 <Button asChild className="mt-8">
 <Link to="/welcome" search={{ help: "1" }}>
 I want to help create a new eco-community
 </Link>
 </Button>
 </main>);
 }

 const money = contributions.find((c) => c.id === profile.contribution);
 const skillLabels = founderSkills.filter((s) => profile.skills.includes(s.id));

 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Founders</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Your founder notes</h1>
 <p className="mt-3 max-w-xl text-lg text-muted">
 Shown on your village square profile as {user.displayName ?? "you"}. Change them any time.
 </p>

 <section className="mt-10">
 <h2 className="font-display text-2xl text-fg">Skills</h2>
 <ul className="mt-3 flex flex-wrap gap-2">
 {skillLabels.map((skill) => (<li key={skill.id} className="rounded-full bg-panel px-3 py-1.5 text-sm text-fg">
 {skill.label}
 </li>))}
 </ul>
 </section>

 <section className="mt-8">
 <h2 className="font-display text-2xl text-fg">What you can put in</h2>
 <p className="mt-2 text-muted">{money?.label ?? "Not stated"}</p>
 {profile.hoursPerWeek != null ? (<p className="mt-1 text-sm text-muted">{profile.hoursPerWeek} hours a week</p>): null}
 </section>

 <section className="mt-8">
 <h2 className="font-display text-2xl text-fg">Land</h2>
 {profile.hasLand ? (<>
 <p className="mt-2 text-muted">
 {profile.landAcres ?? "n/a"} acres · {profile.landLocation}
 </p>
 {profile.photos.length > 0 ? (<ul className="mt-4 grid gap-3 sm:grid-cols-2">
 {profile.photos.map((photo) => (<li key={photo.id} className="overflow-hidden rounded-md bg-panel">
 <img src={photo.src} alt="Land you offered" className="aspect-video w-full object-cover" />
 </li>))}
 </ul>): (<p className="mt-2 text-sm text-subtle">No photos yet.</p>)}
 </>): (<p className="mt-2 text-muted">No land yet.</p>)}
 </section>

 <Button asChild className="mt-10" variant="outline">
 <Link to="/profile">
 Edit profile
 </Link>
 </Button>
 </main>);
}
