import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { compressUpload, uploadErrorMessage } from "@/lib/compress-image";
import {
  addHallSlide,
  moveHallSlide,
  readHallDeck,
  readHallSlideShow,
  removeHallSlide,
  setHallSlideShow,
  type HallSlide,
  type HallSlideFrame,
} from "@/lib/hall-slides";
import { startLivePoll } from "@/lib/live-poll";
import { isPlusAdminEmail } from "@/lib/plus-membership";

const EMPTY: HallSlideFrame = { id: null, index: 0, total: 0, image: null };

export function HallSlideshow({ manageOnly = false }: { manageOnly?: boolean }) {
  const { user } = useCurrentUserState();
  const host = isPlusAdminEmail(user?.primaryEmail);
  const [frame, setFrame] = useState<HallSlideFrame>(EMPTY);
  const known = useRef<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (manageOnly) return;
    let cancel = false;
    const pull = () => {
      void readHallSlideShow({ data: { knownId: known.current } })
        .then((row) => {
          if (cancel) return;
          known.current = row.id;
          setFrame((prev) => ({
            id: row.id,
            index: row.index,
            total: row.total,
            image: row.image ?? (row.id && row.id === prev.id ? prev.image : null),
          }));
        })
        .catch(() => undefined);
    };
    pull();
    const stop = startLivePoll(pull, 1500);
    return () => {
      cancel = true;
      stop();
    };
  }, [manageOnly, tick]);

  function refresh() {
    known.current = null;
    setTick((n) => n + 1);
  }

  if (manageOnly && !host) return null;
  if (!host && !frame.image) return null;

  return (
    <div className="mt-6" data-hall-slideshow={frame.id ? "live" : "off"}>
      {!manageOnly && frame.image ? (
        <figure className="overflow-hidden rounded-lg border border-border bg-ink shadow-border">
          <img src={frame.image} alt="" className="mx-auto max-h-[70vh] w-full object-contain" />
          <figcaption className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm text-cream">
            <span>
              Slide {frame.index + 1} of {frame.total}
            </span>
            {host ? (
              <span className="flex gap-2">
                <SlideControl disabled={frame.index <= 0} onClick={() => void present(frame.index - 1).then(refresh)}>
                  Previous
                </SlideControl>
                <SlideControl disabled={frame.index >= frame.total - 1} onClick={() => void present(frame.index + 1).then(refresh)}>
                  Next
                </SlideControl>
                <SlideControl onClick={() => void present(null).then(refresh)}>Stop</SlideControl>
              </span>
            ) : null}
          </figcaption>
        </figure>
      ) : null}
      {host ? <DeckEditor live={Boolean(frame.id)} total={manageOnly ? null : frame.total} onChanged={refresh} /> : null}
    </div>
  );
}

async function present(index: number | null) {
  await setHallSlideShow({ data: { index } });
}

function SlideControl({
  children,
  disabled,
  onClick,
}: {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex min-h-11 items-center rounded-md bg-cream px-3 text-sm font-medium text-ink disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function DeckEditor({
  live,
  total,
  onChanged,
}: {
  live: boolean;
  total: number | null;
  onChanged: () => void;
}) {
  const [slides, setSlides] = useState<HallSlide[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputId = "hall-slide-upload";

  function load() {
    setError(null);
    void readHallDeck()
      .then(setSlides)
      .catch(() => setError("Could not load the slides."));
  }

  async function onFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setBusy(true);
    setError(null);
    try {
      for (const file of files) {
        const image = await compressUpload(file);
        await addHallSlide({ data: { image } });
      }
      load();
      onChanged();
    } catch (err) {
      setError(err instanceof Error && err.message && !err.message.startsWith("too-") ? err.message : uploadErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    setBusy(true);
    setError(null);
    try {
      await removeHallSlide({ data: { id } });
      load();
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not remove that slide.");
    } finally {
      setBusy(false);
    }
  }

  async function move(id: string, dir: -1 | 1) {
    setBusy(true);
    try {
      await moveHallSlide({ data: { id, dir } });
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not move that slide.");
    } finally {
      setBusy(false);
    }
  }

  const count = slides?.length ?? total ?? 0;

  return (
    <details className="mt-3 rounded-md border border-border bg-surface" onToggle={(event) => {
      if ((event.currentTarget as HTMLDetailsElement).open && !slides) load();
    }}>
      <summary className="cursor-pointer px-3 py-3 text-sm font-medium text-fg">
        Slideshow{count > 0 ? ` · ${count} ${count === 1 ? "slide" : "slides"}` : ""}
        {live ? " · presenting" : ""}
      </summary>
      <div className="border-t border-border px-3 py-3">
        <p className="text-sm text-muted">
          Upload pictures ahead of time. Present sends the current slide to everyone in the square. On an iPhone, pick screenshots from your photos.
        </p>
        <label htmlFor={inputId} className="mt-3 inline-flex min-h-11 cursor-pointer items-center rounded-md bg-forest px-4 text-sm font-medium text-cream">
          {busy ? "Saving…" : "Add slides"}
          <input
            id={inputId}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            disabled={busy}
            onChange={(event) => {
              const files = event.target.files;
              event.target.value = "";
              void onFiles(files);
            }}
          />
        </label>
        {!live && count > 0 ? (
          <Button type="button" className="ml-2" disabled={busy} onClick={() => void present(0).then(onChanged)}>
            Present
          </Button>
        ) : null}
        {error ? <p className="mt-2 text-sm text-forest-deep">{error}</p> : null}
        {slides && slides.length > 0 ? (
          <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {slides.map((slide, index) => (
              <li key={slide.id} className="w-24 shrink-0">
                <img src={slide.image} alt="" className="h-16 w-full rounded-sm bg-ink object-contain" />
                <span className="mt-1 flex gap-1">
                  <button type="button" className="min-h-11 flex-1 text-xs text-muted" disabled={busy || index === 0} onClick={() => void move(slide.id, -1)}>
                    Left
                  </button>
                  <button type="button" className="min-h-11 flex-1 text-xs text-muted" disabled={busy || index === slides.length - 1} onClick={() => void move(slide.id, 1)}>
                    Right
                  </button>
                  <button type="button" className="min-h-11 text-xs text-forest-deep" disabled={busy} onClick={() => void remove(slide.id)}>
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
}
