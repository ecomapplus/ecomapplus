import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { filmFor, filmKindLabels, type CommunityFilm as Film } from "@/data/films";

export function CommunityFilmSection({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const film = filmFor(slug);
  if (!film) return null;

  if (compact) {
    return (
      <section id="film" className="scroll-mt-40">
        <FilmPlayer film={film} compact />
      </section>
    );
  }

  return (
    <section id="film" className="mt-10 scroll-mt-40">
      <h2 className="font-display text-2xl text-fg">On film</h2>
      <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">
        A tour, documentary, or explanation of this place. The player stays small; use
        fullscreen if you want it larger.
      </p>
      <FilmPlayer film={film} />
    </section>
  );
}

type YtPlayer = {
  playVideo: () => void;
  unMute: () => void;
  setVolume: (n: number) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: string | HTMLElement,
        opts: { events?: { onReady?: (e: { target: YtPlayer }) => void } },
      ) => YtPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYtApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector("script[data-yt-iframe-api]")) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.dataset.ytIframeApi = "true";
      document.head.appendChild(script);
    }
  });
}

function FilmPlayer({ film, compact = false }: { film: Film; compact?: boolean }) {
  const watch = `https://www.youtube.com/watch?v=${film.youtubeId}`;
  const frameRef = useRef<HTMLIFrameElement>(null);
  const embed = `https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1&enablejsapi=1`;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    let player: YtPlayer | null = null;
    let cancelled = false;

    function start(target: YtPlayer) {
      target.unMute();
      target.setVolume(100);
      target.playVideo();
    }

    void loadYtApi().then(() => {
      if (cancelled || !window.YT?.Player || !frame) return;
      player = new window.YT.Player(frame, {
        events: {
          onReady: (event) => start(event.target),
        },
      });
    });

    function onGesture() {
      if (player) start(player);
    }
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      try {
        player?.destroy();
      } catch {
        /* player may already be gone */
      }
    };
  }, [film.youtubeId]);

  return (
    <figure className={compact ? "w-full max-w-72 shrink-0" : "w-full max-w-xs"}>
      <div className="relative aspect-video overflow-hidden rounded-md bg-ink shadow-border">
        <iframe
          ref={frameRef}
          src={embed}
          title={film.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <figcaption className={compact ? "mt-1" : "mt-2"}>
        {compact ? (
          <p className="truncate text-xs text-subtle">
            <span className="font-medium text-fg">{film.title}</span>
          </p>
        ) : (
          <>
            <p className="text-sm font-medium leading-snug text-fg">{film.title}</p>
            <p className="mt-0.5 text-xs text-subtle">
              {film.credit} · {filmKindLabels[film.kind]}
            </p>
            <a
              href={watch}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-forest hover:underline"
            >
              Watch on YouTube
              <ExternalLink className="size-3" aria-hidden />
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
