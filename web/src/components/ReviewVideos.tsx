"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  title: string;
  src: string;
  poster: string;
};

const reviews: Review[] = [
  {
    name: "Mohamed Shaheem Ali Saeed",
    title: "Minister of Islamic Affairs, Republic of Maldives",
    src: "/videos/review-mohamed-shaheem.mp4",
    poster: "/images/review-mohamed-shaheem-poster.jpg",
  },
  {
    name: "Shady Al Suleiman",
    title: "President of United Muslims of Australia",
    src: "/videos/review-shady-al-suleiman.mp4",
    poster: "/images/review-shady-al-suleiman-poster.jpg",
  },
  {
    name: "Syekh Mohamed El Duwaini",
    title: "Undersecretary of Al-Azhar Al-Sharif",
    src: "/videos/review-syekh-mohamed-el-duwaini.mp4",
    poster: "/images/review-syekh-mohamed-el-duwaini-poster.jpg",
  },
];

function MuteIcon({ muted }: { muted: boolean }) {
  if (muted) {
    return (
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
    );
  }

  return (
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
  );
}

function ReviewCard({
  review,
  muted,
  onToggleMute,
}: {
  review: Review;
  muted: boolean;
  onToggleMute: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            video.muted = true;
            void video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted]);

  return (
    <figure className="flex min-w-0 flex-col">
      <div
        ref={rootRef}
        className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={review.src}
          poster={review.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={`Review by ${review.name}`}
        />
        <button
          type="button"
          onClick={onToggleMute}
          className="absolute right-3 bottom-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-night/45 text-white/90 backdrop-blur-sm transition-colors hover:bg-night/65 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-pressed={!muted}
          aria-label={muted ? `Unmute ${review.name}` : `Mute ${review.name}`}
        >
          <MuteIcon muted={muted} />
        </button>
      </div>
      <figcaption className="mt-5 text-center md:mt-6">
        <p className="font-display text-[1.15rem] leading-snug tracking-wide text-ink md:text-[1.25rem]">
          {review.name}
        </p>
        <p className="mt-2 text-[0.65rem] leading-relaxed tracking-[0.14em] text-muted uppercase md:text-[0.7rem]">
          {review.title}
        </p>
      </figcaption>
    </figure>
  );
}

export function ReviewVideos() {
  const [unmutedIndex, setUnmutedIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 md:gap-7 lg:gap-9">
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.src}
            review={review}
            muted={unmutedIndex !== index}
            onToggleMute={() =>
              setUnmutedIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
}
