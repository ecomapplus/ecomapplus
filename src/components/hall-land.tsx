import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { compressUpload, uploadErrorMessage } from "@/lib/compress-image";
import { listLand, removeLand, submitLand, type LandListing } from "@/lib/land";
import { cacheLandList } from "@/lib/land-cache";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { isUnauthorized } from "@/lib/social";
import { startLivePoll } from "@/lib/live-poll";

export function HallLand({
  signedIn,
  onOpenPerson,
}: {
  signedIn: boolean;
  onOpenPerson: (userId: string) => void;
}) {
  const [rows, setRows] = useState<LandListing[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [location, setLocation] = useState("");
  const [acres, setAcres] = useState("");
  const [notes, setNotes] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const { user } = useCurrentUserState();
  const myEmail = user?.primaryEmail ?? "";

  useEffect(() => {
    let cancelled = false;
    const apply = (next: LandListing[]) => {
      if (cancelled) return;
      setRows((prev) => {
        const stamp = (list: LandListing[]) =>
          list.map((r) => `${r.id}:${r.location}:${r.acres}:${r.photos.length}:${r.notes}`).join("|");
        if (prev && stamp(prev) === stamp(next)) return prev;
        if (myEmail) cacheLandList(myEmail, next);
        return next;
      });
    };
    listLand()
      .then(apply)
      .catch((err) => {
        if (cancelled) return;
        setRows([]);
        if (!isUnauthorized(err)) setError("Could not load land right now.");
      });
    const stop = startLivePoll(() => {
      listLand()
        .then(apply)
        .catch(() => {
          /* keep last */
        });
    }, 15000);
    return () => {
      cancelled = true;
      stop();
    };
  }, [signedIn, myEmail]);

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

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!location.trim() || Number(acres) <= 0) return;
    setBusy(true);
    setError(null);
    try {
      const next = await submitLand({
        data: {
          location,
          acres: Number(acres),
          notes,
          photos,
        },
      });
      setRows(next);
      if (myEmail) cacheLandList(myEmail, next);
      setLocation("");
      setAcres("");
      setNotes("");
      setPhotos([]);
      setOpenForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit that land.");
    } finally {
      setBusy(false);
    }
  }

  async function onRemove(id: number) {
    setBusy(true);
    setError(null);
    try {
      setRows(await removeLand({ data: id }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not remove that land.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mt-8">
      <h2 className="font-display text-xl text-fg">Land</h2>
      <p className="mt-1 text-sm text-muted">
        Every parcel people put on the signup form, plus any they add later.
      </p>
      {error ? <p className="mt-3 text-sm text-forest-deep">{error}</p> : null}
      {!rows ? (
        <div className="mt-3 h-32 animate-pulse rounded-md bg-panel" />
      ) : rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted">No land has been listed yet.</p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((parcel) => (
            <li key={parcel.id} className="overflow-hidden rounded-lg border border-border bg-surface shadow-border">
              {parcel.photos[0] ? (
                <img src={parcel.photos[0]} alt="" className="aspect-video w-full bg-panel object-cover" />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-panel font-display text-2xl text-moss">
                  {parcel.location.trim()[0]?.toUpperCase() || "L"}
                </div>
              )}
              <div className="p-3">
                <p className="font-medium text-fg">{parcel.location}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {parcel.acres} {parcel.acres === 1 ? "acre" : "acres"}
                  {parcel.source === "signup" ? " · From signup" : ""}
                </p>
                {parcel.notes ? <p className="mt-2 text-sm leading-relaxed text-fg">{parcel.notes}</p> : null}
                {parcel.photos.length > 1 ? (
                  <ul className="mt-2 grid grid-cols-4 gap-1">
                    {parcel.photos.slice(1, 5).map((src) => (
                      <li key={src.slice(0, 48)} className="overflow-hidden rounded-sm bg-panel">
                        <img src={src} alt="" className="aspect-square w-full object-cover" />
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="mt-2 text-xs text-muted">
                  Listed by{" "}
                  <button
                    type="button"
                    onClick={() => onOpenPerson(parcel.userId)}
                    className="font-medium text-forest hover:underline"
                  >
                    {parcel.ownerName}
                  </button>
                </p>
                {parcel.isMine ? (
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void onRemove(parcel.id)}
                    className="mt-2 text-xs font-medium text-muted hover:text-forest-deep"
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}

      {signedIn ? (
        openForm ? (
          <form onSubmit={(e) => void onSubmit(e)} className="mt-4 rounded-lg border border-border bg-surface p-4 shadow-border">
            <h3 className="font-display text-lg text-fg">Submit land</h3>
            <p className="mt-1 text-sm text-muted">Another parcel, on top of anything from signup.</p>
            <label className="mt-4 flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-fg">Location</span>
              <input
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              />
            </label>
            <label className="mt-3 flex max-w-xs flex-col gap-1.5 text-sm">
              <span className="font-medium text-fg">Acres</span>
              <input
                required
                type="number"
                min={0.1}
                step="0.1"
                value={acres}
                onChange={(e) => setAcres(e.target.value)}
                className="h-11 rounded-md border border-border bg-bg px-3 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              />
            </label>
            <label className="mt-3 flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-fg">Note (optional)</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                maxLength={400}
                rows={3}
                className="rounded-md border border-border bg-bg px-3 py-2 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
              />
            </label>
            <label className="mt-3 block text-sm">
              <span className="font-medium text-fg">Photos</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => void onPhotos(e)}
                className="mt-2 block w-full text-sm text-muted file:mr-3 file:h-11 file:rounded-md file:border file:border-border file:bg-panel file:px-3 file:text-sm file:font-medium file:text-fg"
              />
            </label>
            {photos.length > 0 ? (
              <ul className="mt-3 grid grid-cols-3 gap-2">
                {photos.map((src) => (
                  <li key={src.slice(0, 40)} className="relative overflow-hidden rounded-md bg-panel">
                    <img src={src} alt="" className="aspect-video w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPhotos((list) => list.filter((p) => p !== src))}
                      className="absolute right-1.5 top-1.5 rounded bg-bg/90 px-2 py-1 text-xs font-medium text-fg"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button type="submit" disabled={busy || !location.trim() || Number(acres) <= 0}>
                {busy ? "Saving…" : "List this land"}
              </Button>
              <Button type="button" variant="ghost" disabled={busy} onClick={() => setOpenForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <p className="mt-4">
            <Button type="button" variant="outline" onClick={() => setOpenForm(true)}>
              Submit land
            </Button>
          </p>
        )
      ) : (
        <p className="mt-3 text-sm text-muted">
          <Link to="/login" search={{ redirect: "/hall" }} className="font-medium text-forest hover:underline">
            Sign in
          </Link>{" "}
          to list land you have.
        </p>
      )}
    </section>
  );
}
