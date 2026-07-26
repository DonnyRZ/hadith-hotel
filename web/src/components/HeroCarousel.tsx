"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  srcMobile: string;
  alt: string;
  altMobile?: string;
};

const SLIDES: Slide[] = [
  {
    src: "/images/hero-exterior.jpg",
    srcMobile: "/images/lobby-atrium-v2.jpeg",
    alt: "HADITH Hotel façade at golden hour, Complex of Imam Al Bukhari, Samarkand",
    altMobile:
      "HADITH Hotel illuminated at night with fountain, Complex of Imam Al Bukhari",
  },
  {
    src: "/images/grand-lobby.jpeg",
    srcMobile: "/images/grand-lobby-portrait.jpeg",
    alt: "Grand lobby atrium of HADITH Hotel with chandelier, staircase and marble floors",
  },
  {
    src: "/images/reception.jpeg",
    srcMobile: "/images/hero-mobile-reception.jpeg",
    alt: "Reception desk at HADITH Hotel",
  },
  {
    src: "/images/restaurant.jpeg",
    srcMobile: "/images/hero-mobile-restaurant.jpeg",
    alt: "Restaurant dining room at HADITH Hotel",
  },
  {
    src: "/images/pool.jpeg",
    srcMobile: "/images/hero-mobile-pool.jpeg",
    alt: "Indoor swimming pool at HADITH Hotel",
  },
  {
    src: "/images/junior-suite.jpeg",
    srcMobile: "/images/hero-mobile-suite.jpeg",
    alt: "Junior suite accommodation at HADITH Hotel",
  },
  {
    src: "/images/bar-lounge.png",
    srcMobile: "/images/exterior-entrance.jpeg",
    alt: "Bar and lounge at HADITH Hotel",
    altMobile:
      "Daytime entrance of HADITH Hotel at the Complex of Imam Al Bukhari",
  },
  {
    src: "/images/padel.png",
    srcMobile: "/images/hero-mobile-padel.jpeg",
    alt: "Padel court experience at HADITH Hotel",
  },
];

const AUTOPLAY_MS = 6500;

const controlBtnClass =
  "pointer-events-auto inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-night/45 text-white/90 backdrop-blur-sm transition-colors hover:bg-night/65 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:size-11";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback((delta: number) => {
    setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance; restart the interval whenever the slide changes (arrow/dot).
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, reduceMotion]);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    };

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [go]);

  return (
    <>
      <div className="absolute inset-0 z-0">
        <div aria-live="polite" aria-atomic="true">
          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 ${
                  reduceMotion
                    ? ""
                    : "transition-opacity duration-1000 ease-in-out"
                } ${active ? "opacity-100" : "opacity-0"}`}
                aria-hidden={!active}
              >
                {/* Desktop / tablet landscape */}
                <Image
                  src={slide.src}
                  alt={active ? slide.alt : ""}
                  fill
                  priority={i === 0}
                  className="hidden object-cover object-center md:block"
                  sizes="100vw"
                />
                {/* Mobile portrait art direction */}
                <Image
                  src={slide.srcMobile}
                  alt={
                    active ? (slide.altMobile ?? slide.alt) : ""
                  }
                  fill
                  priority={i === 0}
                  className="object-cover object-center md:hidden"
                  sizes="100vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={regionRef}
        className="pointer-events-none absolute inset-0 z-20 outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="HADITH Hotel highlights"
        tabIndex={0}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          className={`${controlBtnClass} absolute top-1/2 left-3 -translate-y-1/2 md:left-5`}
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6 9 12l6 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          className={`${controlBtnClass} absolute top-1/2 right-3 -translate-y-1/2 md:right-5`}
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>

        <div
          className="pointer-events-auto absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-28"
          role="group"
          aria-label="Slide indicators"
        >
          {SLIDES.map((slide, i) => {
            const active = i === index;
            return (
              <button
                key={slide.src}
                type="button"
                aria-current={active ? "true" : undefined}
                aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "w-6 bg-brass-light/90"
                    : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            );
          })}
        </div>

        <span className="sr-only">
          Slide {index + 1} of {SLIDES.length}
        </span>
      </div>
    </>
  );
}
