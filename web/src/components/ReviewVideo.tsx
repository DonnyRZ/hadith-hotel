"use client";

import { useRef, useState } from "react";

export function ReviewVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:ml-auto lg:mr-0 lg:max-w-[400px]">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain object-center"
          src="/videos/reviews.mp4"
          poster="/images/reviews-poster.jpg"
          controls={playing}
          playsInline
          preload="none"
          aria-label="Guest reviews at HADITH Hotel"
          onPlay={() => setPlaying(true)}
          onEnded={() => setPlaying(false)}
        />

        {!playing && (
          <button
            type="button"
            onClick={startPlayback}
            className="absolute inset-0 z-10 flex items-center justify-center bg-night/20 transition-colors hover:bg-night/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Play guest reviews"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-full border border-white/30 bg-night/50 text-white backdrop-blur-sm transition-colors hover:bg-night/70 sm:size-16">
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 size-6 sm:size-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8.5 6.5v11l9-5.5-9-5.5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
