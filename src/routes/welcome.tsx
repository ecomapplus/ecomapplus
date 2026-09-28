import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
 contributions,
 founderSkills,
 type ContributionId,
} from "@/data/founder-skills";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import {
 getFounderProfile,
 saveFounderProfile,
 skipFounderOnboarding,
 type FounderProfile,
} from "@/lib/founders";
import { compressUpload, uploadErrorMessage } from "@/lib/compress-image";
import { cacheProfile } from "@/lib/profile-cache";
import { isUnauthorized } from "@/lib/social";
import { useMounted } from "@/lib/use-mounted";

type WelcomeSearch = { redirect?: string; help?: string; edit?: string };

function safeRedirect(value: unknown): string {
 if (typeof value !== "string") return "/";
 if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/login") || value.startsWith("/welcome")) {
 return "/";
 }
 return value;
}

export const Route = createFileRoute("/welcome")({
 component: Welcome,
 validateSearch: (search: Record<string, unknown>): WelcomeSearch => ({
 redirect: typeof search.redirect === "string" ? search.redirect: undefined,
 help: typeof search.help === "string" ? search.help: undefined,
 edit: typeof search.edit === "string" ? search.edit: undefined,
 }),
 head: () => ({
 meta: [{ title: "Start a village · ecocommunitymap.com" }],
 }),
});

type Step = "intent" | "skills" | "money" | "land" | "done";

function Welcome() {
 const { redirect, help, edit } = Route.useSearch();
 const dest = safeRedirect(redirect);
 const mounted = useMounted();
 const { user, isPending } = useCurrentUserState();
 const [profile, setProfile] = useState<FounderProfile | null | undefined>(undefined);
 const [step, setStep] = useState<Step>(help === "1" || edit === "1" ? "skills": "intent");
 const [skills, setSkills] = useState<string[]>([]);
 const [contribution, setContribution] = useState<ContributionId | "">("");
 const [hours, setHours] = useState("");
 const [hasLand, setHasLand] = useState<boolean | null>(null);
 const [location, setLocation] = useState("");
 const [acres, setAcres] = useState("");
 const [photos, setPhotos] = useState<string[]>([]);
 const [busy, setBusy] = useState(false);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
 if (help === "1" || edit === "1") return;
 try {
 if (sessionStorage.getItem("vc-founder-help") === "1") {
 sessionStorage.removeItem("vc-founder-help");
 setStep("skills");
 }
 } catch {
 /* ignore */
 }
 }, [help, edit]);

 useEffect(() => {
 if (isPending || !user) return;
 let cancelled = false;
 getFounderProfile()
.then((row) => {
 if (cancelled) return;
 setProfile(row);
 if (row?.wantsToFound) {
 setSkills(row.skills);
 setContribution(row.contribution ?? "");
 setHours(row.hoursPerWeek != null ? String(row.hoursPerWeek): "");
 setHasLand(row.hasLand);
 setLocation(row.landLocation ?? "");
 setAcres(row.landAcres != null ? String(row.landAcres): "");
 setPhotos(row.photos.map((p) => p.src));
 }
 })
.catch((err) => {
 if (cancelled) return;
 if (isUnauthorized(err)) setProfile(null);
 else {
 setProfile(null);
 setError(err instanceof Error ? err.message: "Could not load your notes.");
 }
 });
 return () => {
 cancelled = true;
 };
 }, [isPending, user]);

 if (!mounted || isPending) {
 return (<main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
 <div className="h-10 w-64 animate-pulse rounded-md bg-panel" />
 <div className="mt-4 h-40 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (!user) return <Navigate to="/login" search={{ redirect: "/welcome" }} />;

 if (profile === undefined) {
 return (<main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
 <div className="h-10 w-64 animate-pulse rounded-md bg-panel" />
 <div className="mt-4 h-40 animate-pulse rounded-lg bg-panel" />
 </main>);
 }

 if (profile?.complete && profile.wantsToFound && edit !== "1") {
 return <Navigate to="/found" />;
 }
 if (profile?.complete && !profile.wantsToFound && help !== "1" && edit !== "1") {
 return <Navigate to={dest} />;
 }

 async function skip() {
 setBusy(true);
 setError(null);
 try {
 await skipFounderOnboarding();
 window.location.href = dest;
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not skip that.");
 setBusy(false);
 }
 }

 async function submit(event: FormEvent) {
 event.preventDefault();
 if (hasLand === null || !contribution) return;
 setBusy(true);
 setError(null);
 try {
 await saveFounderProfile({
 data: {
 skills,
 contribution,
 hoursPerWeek: hours === "" ? null: Number(hours),
 hasLand,
 landLocation: location,
 landAcres: acres === "" ? null: Number(acres),
 photos,
 },
 });
 if (user?.primaryEmail) {
 cacheProfile(user.primaryEmail, {
 name: user.displayName,
 image: user.profileImageUrl,
 wantsToFound: true,
 skills,
 contribution,
 hoursPerWeek: hours === "" ? null: Number(hours),
 hasLand,
 landLocation: location,
 landAcres: acres === "" ? null: Number(acres),
 photos,
 });
 }
 window.location.href = "/found";
 } catch (err) {
 setError(err instanceof Error ? err.message: "Could not save that.");
 } finally {
 setBusy(false);
 }
 }

 async function onPhotos(event: ChangeEvent<HTMLInputElement>) {
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

 return (<main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
 <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Founders</p>
 {step === "intent" ? (<>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">
 What brings you here, {firstName(user.displayName)}?
 </h1>
 <p className="mt-3 text-lg text-muted">
 The atlas is a reference. If you want to help start a place, say so. We’ll ask what
 you can actually bring.
 </p>
 <div className="mt-8 grid gap-3">
 <button
 type="button"
 onClick={() => setStep("skills")}
 className="rounded-lg border border-forest/40 bg-surface px-5 py-5 text-left shadow-border hover:border-forest"
 >
 <span className="flex items-center gap-2 font-display text-2xl text-fg">
 <Sprout className="size-5 text-forest" aria-hidden />
 I want to help create a new eco-community
 </span>
 <span className="mt-2 block text-sm leading-relaxed text-muted">
 Skills, what you can put in, and whether you have land.
 </span>
 </button>
 <button
 type="button"
 onClick={() => void skip()}
 disabled={busy}
 className="rounded-lg border border-border bg-surface px-5 py-5 text-left hover:border-forest/40"
 >
 <span className="font-display text-2xl text-fg">Just the atlas, for now</span>
 <span className="mt-2 block text-sm leading-relaxed text-muted">
 Save villages and leave notes. You can come back to this later.
 </span>
 </button>
 </div>
 </>): null}

 {step === "skills" ? (<SkillsStep
 skills={skills}
 onToggle={(id) =>
 setSkills((list) => (list.includes(id) ? list.filter((s) => s !== id): [...list, id]))
 }
 onBack={() => setStep("intent")}
 onNext={() => {
 if (skills.length < 1) {
 setError("Select every skill you actually have.");
 return;
 }
 setError(null);
 setStep("money");
 }}
 error={error}
 />): null}

 {step === "money" ? (<MoneyStep
 contribution={contribution}
 hours={hours}
 onContribution={setContribution}
 onHours={setHours}
 onBack={() => setStep("skills")}
 onNext={() => {
 if (!contribution) {
 setError("Say how much you can put in.");
 return;
 }
 setError(null);
 setStep("land");
 }}
 error={error}
 />): null}

 {step === "land" ? (<form onSubmit={submit}>
 <LandStep
 hasLand={hasLand}
 location={location}
 acres={acres}
 photos={photos}
 onHasLand={setHasLand}
 onLocation={setLocation}
 onAcres={setAcres}
 onPhotos={onPhotos}
 onRemovePhoto={(src) => setPhotos((list) => list.filter((p) => p !== src))}
 onBack={() => setStep("money")}
 busy={busy}
 error={error}
 />
 </form>): null}

 {step === "done" ? (<div>
 <h1 className="mt-2 font-display text-4xl leading-tight text-fg">You’re on the list</h1>
 <p className="mt-3 text-lg text-muted">
 {skills.length} {skills.length === 1 ? "skill": "skills"}
 {hasLand ? ` · ${acres || "some"} acres in ${location || "an unnamed place"} listed in the village square`: " · no land yet"}.
 </p>
 <div className="mt-8 flex flex-wrap gap-3">
 <Button asChild>
 <Link to="/found">Your founder notes</Link>
 </Button>
 <Button asChild variant="outline">
 <a href={dest}>Back to the atlas</a>
 </Button>
 </div>
 </div>): null}
 </main>);
}

function SkillsStep({
 skills,
 onToggle,
 onBack,
 onNext,
 error,
}: {
 skills: string[];
 onToggle: (id: string) => void;
 onBack: () => void;
 onNext: () => void;
 error: string | null;
}) {
 return (<>
 <p className="mt-2 text-xs tabular-nums text-subtle">1 of 3</p>
 <h1 className="mt-1 font-display text-4xl leading-tight text-fg">What skills do you have?</h1>
 <p className="mt-3 text-lg text-muted">Select all that apply. These are the trades a new village actually runs on.</p>
 <ul className="mt-6 grid gap-2 sm:grid-cols-2">
 {founderSkills.map((skill) => {
 const on = skills.includes(skill.id);
 return (<li key={skill.id}>
 <button
 type="button"
 aria-pressed={on}
 onClick={() => onToggle(skill.id)}
 className={`flex min-h-14 w-full flex-col items-start rounded-md border px-3.5 py-2.5 text-left ${
 on ? "border-forest bg-panel text-fg": "border-border bg-surface text-fg hover:border-forest/40"
 }`}
 >
 <span className="text-sm font-medium">{skill.label}</span>
 <span className="text-xs text-muted">{skill.detail}</span>
 </button>
 </li>);
 })}
 </ul>
 <p className="mt-3 text-sm text-muted">
 <span className="tabular-nums font-medium text-fg">{skills.length}</span> selected
 </p>
 {error ? <p className="mt-2 text-sm text-forest-deep">{error}</p>: null}
 <div className="mt-6 flex flex-wrap gap-3">
 <Button type="button" variant="outline" onClick={onBack}>
 Back
 </Button>
 <Button type="button" onClick={onNext} disabled={skills.length < 1}>
 Continue
 </Button>
 </div>
 </>);
}

function MoneyStep({
 contribution,
 hours,
 onContribution,
 onHours,
 onBack,
 onNext,
 error,
}: {
 contribution: ContributionId | "";
 hours: string;
 onContribution: (id: ContributionId) => void;
 onHours: (value: string) => void;
 onBack: () => void;
 onNext: () => void;
 error: string | null;
}) {
 return (<>
 <p className="mt-2 text-xs tabular-nums text-subtle">2 of 3</p>
 <h1 className="mt-1 font-display text-4xl leading-tight text-fg">
 How much can you contribute to create an eco-community?
 </h1>
 <p className="mt-3 text-lg text-muted">
 Cash, land later, or years of labor. Pick the band that is honest, not hopeful.
 </p>
 <ul className="mt-6 grid gap-2">
 {contributions.map((row) => {
 const on = contribution === row.id;
 return (<li key={row.id}>
 <button
 type="button"
 aria-pressed={on}
 onClick={() => onContribution(row.id)}
 className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-md border px-3.5 py-2.5 text-left ${
 on ? "border-forest bg-panel": "border-border bg-surface hover:border-forest/40"
 }`}
 >
 <span>
 <span className="block text-sm font-medium text-fg">{row.label}</span>
 <span className="text-xs text-muted">{row.hint}</span>
 </span>
 </button>
 </li>);
 })}
 </ul>
 <label className="mt-6 flex max-w-xs flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Hours a week you could give (optional)</span>
 <input
 type="number"
 min={0}
 max={80}
 inputMode="numeric"
 value={hours}
 onChange={(e) => onHours(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 {error ? <p className="mt-2 text-sm text-forest-deep">{error}</p>: null}
 <div className="mt-6 flex flex-wrap gap-3">
 <Button type="button" variant="outline" onClick={onBack}>
 Back
 </Button>
 <Button type="button" onClick={onNext} disabled={!contribution}>
 Continue
 </Button>
 </div>
 </>);
}

function LandStep({
 hasLand,
 location,
 acres,
 photos,
 onHasLand,
 onLocation,
 onAcres,
 onPhotos,
 onRemovePhoto,
 onBack,
 busy,
 error,
}: {
 hasLand: boolean | null;
 location: string;
 acres: string;
 photos: string[];
 onHasLand: (value: boolean) => void;
 onLocation: (value: string) => void;
 onAcres: (value: string) => void;
 onPhotos: (event: ChangeEvent<HTMLInputElement>) => void;
 onRemovePhoto: (src: string) => void;
 onBack: () => void;
 busy: boolean;
 error: string | null;
}) {
 const landReady = hasLand === false || (hasLand === true && location.trim().length >= 2 && Number(acres) > 0);
 return (<>
 <p className="mt-2 text-xs tabular-nums text-subtle">3 of 3</p>
 <h1 className="mt-1 font-display text-4xl leading-tight text-fg">Do you have land for an eco-community?</h1>
 <p className="mt-3 text-lg text-muted">
 Title, a family parcel, an option. If the dirt is real, say so. Private until you choose otherwise.
 </p>
 <div className="mt-6 grid gap-2 sm:grid-cols-2">
 <button
 type="button"
 aria-pressed={hasLand === true}
 onClick={() => onHasLand(true)}
 className={`min-h-14 rounded-md border px-4 py-3 text-left ${
 hasLand === true ? "border-forest bg-panel": "border-border bg-surface hover:border-forest/40"
 }`}
 >
 <span className="block text-sm font-medium text-fg">Yes, I have land</span>
 <span className="text-xs text-muted">We’ll ask where, how much, and for photos</span>
 </button>
 <button
 type="button"
 aria-pressed={hasLand === false}
 onClick={() => onHasLand(false)}
 className={`min-h-14 rounded-md border px-4 py-3 text-left ${
 hasLand === false ? "border-forest bg-panel": "border-border bg-surface hover:border-forest/40"
 }`}
 >
 <span className="block text-sm font-medium text-fg">Not yet</span>
 <span className="text-xs text-muted">Skills and money still count</span>
 </button>
 </div>

 {hasLand ? (<div className="mt-6 space-y-4 rounded-lg border border-border bg-surface p-4 shadow-border">
 <label className="flex flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Location</span>
 <input
 required
 value={location}
 onChange={(e) => onLocation(e.target.value)}
 placeholder="Town, county, state or country"
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <label className="flex max-w-xs flex-col gap-1.5 text-sm">
 <span className="font-medium text-fg">Number of acres</span>
 <input
 required
 type="number"
 min={0.1}
 step="0.1"
 value={acres}
 onChange={(e) => onAcres(e.target.value)}
 className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
 />
 </label>
 <fieldset>
 <legend className="text-sm font-medium text-fg">Photos of the land</legend>
 <p className="mt-1 text-xs text-muted">Up to five. Roads, water, buildings, the lie of the ground.</p>
 <input
 type="file"
 accept="image/*"
 multiple
 onChange={onPhotos}
 className="mt-3 block w-full text-sm text-muted file:mr-3 file:h-11 file:rounded-md file:border file:border-border file:bg-panel file:px-3 file:text-sm file:font-medium file:text-fg"
 />
 {photos.length > 0 ? (<ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
 {photos.map((src) => (<li key={src.slice(0, 48)} className="relative overflow-hidden rounded-md bg-panel">
 <img src={src} alt="Land you uploaded" className="aspect-video w-full object-cover" />
 <button
 type="button"
 onClick={() => onRemovePhoto(src)}
 className="absolute right-1.5 top-1.5 rounded bg-bg/90 px-2 py-1 text-xs font-medium text-fg"
 >
 Remove
 </button>
 </li>))}
 </ul>): null}
 </fieldset>
 </div>): null}

 {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p>: null}
 <div className="mt-6 flex flex-wrap gap-3">
 <Button type="button" variant="outline" onClick={onBack}>
 Back
 </Button>
 <Button type="submit" disabled={busy || !landReady}>
 {busy ? "Saving…": "Save and finish"}
 </Button>
 </div>
 </>);
}

function firstName(name: string | null) {
 if (!name) return "friend";
 return name.split(/\s+/)[0] ?? "friend";
}
