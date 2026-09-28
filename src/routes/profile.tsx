import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { contributions, founderSkills, type ContributionId } from "@/data/founder-skills";
import { authClient } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { compressPortrait, compressUpload, uploadErrorMessage } from "@/lib/compress-image";
import { getMyProfile, saveProfile, type EditableProfile } from "@/lib/profile";
import { cacheProfile } from "@/lib/profile-cache";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

export const Route = createFileRoute("/profile")({
 component: ProfilePage,
 head: () => ({
 meta: [{ title: "Your profile · ecocommunitymap.com" }],
 }),
});

function ProfilePage() {
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 const [loaded, setLoaded] = useState<EditableProfile | null | undefined>(undefined);
 const [name, setName] = useState("");
 const [bio, setBio] = useState("");
 const [image, setImage] = useState<string | null>(null);
 const [thumb, setThumb] = useState<string | null>(null);
 const [imageDirty, setImageDirty] = useState(false);
 const [wantsToFound, setWantsToFound] = useState(false);
 const [skills, setSkills] = useState<string[]>([]);
 const [contribution, setContribution] = useState<ContributionId | "">("");
 const [hours, setHours] = useState("");
 const [hasLand, setHasLand] = useState<boolean | null>(null);
 const [location, setLocation] = useState("");
 const [acres, setAcres] = useState("");
 const [photos, setPhotos] = useState<string[]>([]);
 const [busy, setBusy] = useState(false);
 const [saved, setSaved] = useState(false);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 if (isPending || !user) return;
 let cancelled = false;
 getMyProfile()
.then((row) => {
 if (cancelled) return;
 setLoaded(row);
 setName(row.name);
 setBio(row.bio);
 setImage(row.image);
 setWantsToFound(Boolean(row.founder?.wantsToFound));
 if (row.founder) {
 setSkills(row.founder.skills);
 setContribution(row.founder.contribution ?? "");
 setHours(row.founder.hoursPerWeek != null ? String(row.founder.hoursPerWeek): "");
 setHasLand(row.founder.hasLand);
 setLocation(row.founder.landLocation ?? "");
 setAcres(row.founder.landAcres != null ? String(row.founder.landAcres): "");
 setPhotos(row.founder.photos.map((p) => p.src));
 }
 })
.catch((err) => {
 if (cancelled) return;
 if (isUnauthorized(err)) setLoaded(null);
 else {
 setLoaded(null);
 setError("Could not load your profile.");
 }
 });
 return () => {
 cancelled = true;
 };
 }, [isPending, user?.id]);

 if (!mounted || isPending || loaded === undefined) {
 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
 <div className="h-10 w-48 animate-pulse rounded-md bg-panel" />
 <div className="mt-6 h-64 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (!user) return <Navigate to="/login" search={{ redirect: "/profile" }} />;

 async function onPortrait(event: ChangeEvent<HTMLInputElement>) {
 const file = event.target.files?.[0];
 event.target.value = "";
 if (!file) return;
 setError(null);
 try {
 const src = await compressPortrait(file);
 setImage(src.portrait);
 setThumb(src.thumb);
 setImageDirty(true);
 } catch (err) {
 setError(uploadErrorMessage(err));
 }
 }

 async function onLandPhotos(event: ChangeEvent<HTMLInputElement>) {
 const files = [...(event.target.files ?? [])];
 event.target.value = "";
 if (!files.length) return;
 setError(null);
 try {
 const next = [...photos];
 for (const file of files) {
 if (next.length >= 5) break;
 next.push(await compressUpload(file));
 }
 setPhotos(next);
 } catch (err) {
 setError(uploadErrorMessage(err));
 }
 }

 async function onSubmit(event: FormEvent) {
 event.preventDefault();
 setBusy(true);
 setError(null);
 setSaved(false);
 try {
 const next = await saveProfile({
 data: {
 name,
 bio,
 image: imageDirty ? image: undefined,
 thumb: imageDirty ? thumb: undefined,
 wantsToFound,
 skills,
 contribution,
 hoursPerWeek: hours === "" ? null: Number(hours),
 hasLand,
 landLocation: location,
 landAcres: acres === "" ? null: Number(acres),
 photos,
 },
 });
 setLoaded(next);
 setName(next.name);
 setBio(next.bio);
 setImage(next.image);
 setImageDirty(false);
 setWantsToFound(Boolean(next.founder?.wantsToFound));
 setSkills(next.founder?.skills ?? []);
 setContribution(next.founder?.contribution ?? "");
 setHours(next.founder?.hoursPerWeek != null ? String(next.founder.hoursPerWeek) : "");
 setHasLand(next.founder?.hasLand ?? null);
 setLocation(next.founder?.landLocation ?? "");
 setAcres(next.founder?.landAcres != null ? String(next.founder.landAcres) : "");
 setPhotos(next.founder?.photos.map((p) => p.src) ?? []);
 setSaved(true);
 cacheProfile(next.email, {
 name: next.name,
 image: next.image,
 bio: next.bio,
 wantsToFound: Boolean(next.founder?.wantsToFound),
 skills: next.founder?.skills ?? [],
 contribution: next.founder?.contribution ?? null,
 hoursPerWeek: next.founder?.hoursPerWeek ?? null,
 hasLand: next.founder?.hasLand ?? null,
 landLocation: next.founder?.landLocation ?? null,
 landAcres: next.founder?.landAcres ?? null,
 photos: next.founder?.photos.map((p) => p.src) ?? [],
 });
 try {
 await authClient.updateUser({ name: next.name });
 await authClient.getSession();
 } catch {
 /* the account already has the new details */
 }
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not save that.");
 } finally {
 setBusy(false);
 }
 }

 const landReady = !wantsToFound || hasLand === false || (hasLand === true && location.trim().length >= 2 && Number(acres) > 0);
 const founderReady = !wantsToFound || (skills.length > 0 && Boolean(contribution) && landReady);

 return (<main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">You</p>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">Your profile</h1>
 <p className="mt-3 max-w-xl text-lg text-muted">
 Portrait, a short bio, and the same questions as signup. The village square shows this to everyone. Villages you save are public on your profile too.
 </p>

 <form onSubmit={(e) => void onSubmit(e)} className="mt-8 space-y-10">
 <section className="rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <h2 className="font-display text-2xl text-fg">How you look here</h2>
 <div className="mt-4 flex flex-wrap items-center gap-4">
 <Avatar name={name || "You"} image={image} size="lg" />
 <div>
 <label className="inline-flex min-h-11 cursor-pointer items-center rounded-md border border-border bg-bg px-3 text-sm font-medium text-fg">
 {image ? "Change photo": "Add a photo"}
 <input type="file" accept="image/*" className="sr-only" onChange={(e) => void onPortrait(e)} />
 </label>
 {image ? (<button
 type="button"
 className="ml-3 text-sm text-forest hover:underline"
 onClick={() => {
 setImage(null);
 setImageDirty(true);
 }}
 >
 Remove
 </button>): null}
 </div>
 </div>
 <label className="mt-5 flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Name</span>
 <input
 required
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="mt-4 flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Bio</span>
 <textarea
 value={bio}
 onChange={(e) => setBio(e.target.value)}
 maxLength={800}
 rows={5}
 placeholder="Where you are, what you want from a village, what you actually do with your days."
 className="rounded-md border border-border bg-bg px-3 py-2 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 <span className="text-xs text-subtle">{bio.trim().length}/800</span>
 </label>
 </section>

 <section id="founder" className="rounded-lg border border-border bg-surface p-4 shadow-border sm:p-5">
 <label className="flex items-start gap-3">
 <input
 type="checkbox"
 checked={wantsToFound}
 onChange={(e) => setWantsToFound(e.target.checked)}
 className="mt-1 size-4 accent-forest"
 />
 <span>
 <span className="block font-display text-2xl text-fg">I want to help create a new eco-community</span>
 <span className="mt-1 block text-sm text-muted">
 What you can put in, and land if you have it. Skills stay on your account either way.
 </span>
 </span>
 </label>

 <fieldset className="mt-8">
 <legend className="font-medium text-fg">What skills do you have?</legend>
 <p className="mt-1 text-sm text-muted">Select all that apply. These counts go up in the village square and in every group you join.</p>
 <ul className="mt-3 grid gap-2 sm:grid-cols-2">
 {founderSkills.map((skill) => {
 const on = skills.includes(skill.id);
 return (<li key={skill.id}>
 <button
 type="button"
 aria-pressed={on}
 onClick={() =>
 setSkills((list) =>
 list.includes(skill.id) ? list.filter((id) => id !== skill.id): [...list, skill.id],)
 }
 className={`flex min-h-14 w-full flex-col rounded-md border px-3 py-2.5 text-left ${
 on ? "border-forest bg-panel": "border-border bg-bg hover:border-forest/40"
 }`}
 >
 <span className="text-sm font-medium text-fg">{skill.label}</span>
 <span className="text-xs text-muted">{skill.detail}</span>
 </button>
 </li>);
 })}
 </ul>
 </fieldset>

 {wantsToFound ? (<div className="mt-8 space-y-8">
 <fieldset>
 <legend className="font-medium text-fg">How much can you contribute?</legend>
 <ul className="mt-3 grid gap-2">
 {contributions.map((row) => {
 const on = contribution === row.id;
 return (<li key={row.id}>
 <button
 type="button"
 aria-pressed={on}
 onClick={() => setContribution(row.id)}
 className={`flex min-h-12 w-full items-center rounded-md border px-3 py-2 text-left text-sm ${
 on ? "border-forest bg-panel": "border-border bg-bg hover:border-forest/40"
 }`}
 >
 {row.label}
 </button>
 </li>);
 })}
 </ul>
 <label className="mt-4 flex max-w-xs flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Hours a week (optional)</span>
 <input
 type="number"
 min={0}
 max={80}
 value={hours}
 onChange={(e) => setHours(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 </fieldset>

 <fieldset>
 <legend className="font-medium text-fg">Do you have land for an eco-community?</legend>
 <div className="mt-3 grid gap-2 sm:grid-cols-2">
 <button
 type="button"
 aria-pressed={hasLand === true}
 onClick={() => setHasLand(true)}
 className={`min-h-12 rounded-md border px-3 py-2 text-sm ${
 hasLand === true ? "border-forest bg-panel": "border-border bg-bg hover:border-forest/40"
 }`}
 >
 Yes, I have land
 </button>
 <button
 type="button"
 aria-pressed={hasLand === false}
 onClick={() => setHasLand(false)}
 className={`min-h-12 rounded-md border px-3 py-2 text-sm ${
 hasLand === false ? "border-forest bg-panel": "border-border bg-bg hover:border-forest/40"
 }`}
 >
 Not yet
 </button>
 </div>
 {hasLand ? (<div className="mt-4 space-y-3">
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Location</span>
 <input
 value={location}
 onChange={(e) => setLocation(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="flex max-w-xs flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Acres</span>
 <input
 type="number"
 min={0.1}
 step="0.1"
 value={acres}
 onChange={(e) => setAcres(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="block text-sm">
 <span className="font-medium text-fg">Photos of the land</span>
 <input
 type="file"
 accept="image/*"
 multiple
 onChange={(e) => void onLandPhotos(e)}
 className="mt-2 block w-full text-sm text-muted file:mr-3 file:h-11 file:rounded-md file:border file:border-border file:bg-panel file:px-3 file:text-sm file:font-medium file:text-fg"
 />
 </label>
 {photos.length > 0 ? (<ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
 {photos.map((src) => (<li key={src.slice(0, 40)} className="relative overflow-hidden rounded-md bg-panel">
 <img src={src} alt="" className="aspect-video w-full object-cover" />
 <button
 type="button"
 onClick={() => setPhotos((list) => list.filter((p) => p !== src))}
 className="absolute right-1.5 top-1.5 rounded bg-bg/90 px-2 py-1 text-xs font-medium text-fg"
 >
 Remove
 </button>
 </li>))}
 </ul>): null}
 </div>): null}
 </fieldset>
 </div>): null}
 </section>

 {error ? <p className="text-sm text-forest-deep">{error}</p>: null}
 {saved ? <p className="text-sm text-moss">Saved. Anyone in the village square can see it.</p>: null}

 <div className="flex flex-wrap gap-3">
 <Button type="submit" disabled={busy || !founderReady}>
 {busy ? "Saving…": "Save profile"}
 </Button>
 <Button asChild type="button" variant="outline">
 <Link to="/people/$userId" params={{ userId: user.id }}>
 View as others see you
 </Link>
 </Button>
 </div>
 </form>
 </main>);
}
