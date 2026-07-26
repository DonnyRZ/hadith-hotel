"use client";

import { useEffect, useRef, useState } from "react";

const SOUND_UNLOCKED_KEY = "hadith-promo-sound-unlocked";

export function PromoVideo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const soundUnlockedRef = useRef(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    try {
      soundUnlockedRef.current =
        sessionStorage.getItem(SOUND_UNLOCKED_KEY) === "true";
    } catch {
      // Storage can be unavailable in strict privacy modes.
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const shouldMute = !soundUnlockedRef.current;
          video.muted = shouldMute;
          setMuted(shouldMute);

          void video.play().catch(() => {
            // A stored preference cannot bypass a browser's autoplay policy
            // after a reload, so fall back to honest muted autoplay.
            video.muted = true;
            setMuted(true);
            void video.play().catch(() => {});
          });
        } else {
          video.pause();
          video.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.muted) {
      video.muted = true;
      setMuted(true);
      return;
    }

    video.muted = false;
    try {
      await video.play();
      soundUnlockedRef.current = true;
      setMuted(false);
      try {
        sessionStorage.setItem(SOUND_UNLOCKED_KEY, "true");
      } catch {
        // Sound still works for this component instance without storage.
      }
    } catch {
      video.muted = true;
      setMuted(true);
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:ml-auto lg:mr-0 lg:max-w-[400px]"
    >
      {/* Width-driven 9:16 — avoids w-auto height frames collapsing to 0 width */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain object-center"
          src="/videos/video-promosi-v2.mp4"
          poster="/images/video-promosi-poster-v2.jpg"
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="auto"
          aria-label="HADITH Hotel promotional film"
        />
        <button
          type="button"
          onClick={toggleMute}
          className="absolute right-3 bottom-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-night/45 text-white/90 backdrop-blur-sm transition-colors hover:bg-night/65 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-pressed={!muted}
          aria-label={muted ? "Unmute film" : "Mute film"}
        >
          {muted ? (
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
              <path d="M11 5 6.5 8.5H3v7h3.5L11 19V5Z" />
              <path d="m16 9 5 5M21 9l-5 5" />
            </svg>
          ) : (
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
              <path d="M11 5 6.5 8.5H3v7h3.5L11 19V5Z" />
              <path d="M15 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
