import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AtlasMap } from "@/components/atlas-map";
import { EcomapQuiz } from "@/components/ecomap-quiz";
import { SquareCountdown } from "@/components/square-countdown";
import { communities, getCommunity } from "@/data/communities";
import { landingPhotos } from "@/data/landing-photos";
import { hasPublicArrival } from "@/data/public-flags";

const PHOTO_MS = 8500;
const RING = [-2, -1, 0, 1, 2] as const;

type Slide = { src: string; name: string; place: string };

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => window.dispatchEvent(new Event("resize")), reduce ? 40 : 700);
}

export function EcomapLanding() {
  const slides = useMemo(
    () =>
      landingPhotos.flatMap((row) => {
        const community = getCommunity(row.slug);
        if (!community) return [];
        return [
          {
            src: row.src,
            name: community.name,
            place: `${community.region}, ${community.country}`,
          },
        ];
      }),
    [],
  );

  return (
    <main data-home="quiz" className="relative isolate flex-1 overflow-x-hidden">
      <GroveField />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-12 sm:px-6 sm:py-12">
        <section id="ecomap-home" className="mx-auto max-w-3xl scroll-mt-24 text-center">
          <p className="ecomap-enter text-sm font-medium uppercase tracking-[0.16em] text-moss">
            EcoMapPlus
          </p>
          <h1 className="ecomap-enter ecomap-enter-2 mt-4 font-display text-4xl leading-tight tracking-tight text-fg sm:mt-5 sm:text-5xl md:text-6xl">
            Answer 7 questions, find your most aligned eco-community
          </h1>
          <div className="ecomap-enter ecomap-enter-4 mt-6 flex justify-center sm:mt-8">
            <a
              href="#ecomap-quiz"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("ecomap-quiz");
              }}
              className="inline-flex min-h-12 items-center rounded-md bg-forest px-8 text-base font-medium text-cream transition-[transform,background-color] duration-150 ease-out hover:bg-forest-deep active:scale-[0.96]"
            >
              Start 7 questions
            </a>
          </div>
          <SquareCountdown />
        </section>

        <section id="grove-photos" className="ecomap-enter ecomap-enter-5 scroll-mt-24">
          <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-moss">
            From the villages
          </p>
          <PhotoGrove slides={slides} />
        </section>

        <GroveAtlas />

        <EcomapQuiz onExit={() => scrollToSection("ecomap-home")} />
      </div>
    </main>
  );
}

/** World map of villages with open doors — mounted immediately so Leaflet has a real box. */
function GroveAtlas() {
  return (
    <section id="grove-map" className="relative z-10 scroll-mt-24">
      <AtlasMap communities={communities.filter((c) => hasPublicArrival(c.slug))} lockView doorsOnly />
    </section>
  );
}

function GroveField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="ecomap-wash absolute inset-0" />
      <div className="ecomap-rings absolute -bottom-1/4 left-1/2 -translate-x-1/2" />
      <div className="ecomap-seeds absolute inset-0" />
      <svg className="ecomap-motif ecomap-motif-nw size-24 text-forest/15 sm:size-32" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.2" />
        <path d="M32 14 V50 M14 32 H50" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg className="ecomap-motif ecomap-motif-slow ecomap-motif-se size-20 text-moss/20 sm:size-28" viewBox="0 0 64 64" fill="none">
        <path d="M32 8 L52 40 H12 Z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="32" cy="44" r="8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function wrapIndex(n: number, len: number) {
  return ((n % len) + len) % len;
}

function PhotoGrove({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce || paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % slides.length);
    }, PHOTO_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused, slides.length]);

  const current = slides[index];
  if (!current || slides.length === 0) return null;

  const go = (delta: number) => setIndex((n) => wrapIndex(n + delta, slides.length));

  return (
    <figure
      className="relative mt-6 sm:mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grove-stage">
        {RING.map((slot) => {
          const slide = slides[wrapIndex(index + slot, slides.length)];
          if (!slide) return null;
          const isCenter = slot === 0;
          return (
            <button
              key={slide.src}
              type="button"
              data-slot={slot}
              className="grove-card"
              onClick={() => {
                if (!isCenter) go(slot);
              }}
              aria-label={
                isCenter
                  ? `${slide.name}, ${slide.place}`
                  : `Show ${slide.name}`
              }
              tabIndex={isCenter ? -1 : 0}
            >
              <div className="grove-print">
                <div className="grove-well">
                  <img
                    src={slide.src}
                    alt=""
                    draggable={false}
                    className={isCenter && !reduce ? "ecomap-ken is-on" : undefined}
                  />
                </div>
                <p className="grove-print-name">{slide.name}</p>
              </div>
            </button>
          );
        })}

        <button
          type="button"
          className="grove-nav grove-nav-prev"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          className="grove-nav grove-nav-next"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>

      <figcaption className="mt-5 px-1 sm:mt-6">
        <p className="font-display text-xl leading-tight text-fg sm:text-2xl">{current.name}</p>
        <p className="mt-1 text-sm text-muted">{current.place}</p>
      </figcaption>

      <div
        className="grove-film mt-6"
        style={{ ["--grove-i" as string]: String(index) }}
        role="list"
        aria-label="All community photos"
      >
        <div className="grove-film-track">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="listitem"
              className={`grove-thumb ${i === index ? "is-on" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`${slide.name} (${i + 1} of ${slides.length})`}
              aria-current={i === index ? "true" : undefined}
            >
              <img src={slide.src} alt="" loading="lazy" draggable={false} />
            </button>
          ))}
        </div>
      </div>
    </figure>
  );
}
