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
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncProgress = () => {
      if (dragging || !video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", syncProgress);
    video.addEventListener("loadedmetadata", syncProgress);
    return () => {
      video.removeEventListener("timeupdate", syncProgress);
      video.removeEventListener("loadedmetadata", syncProgress);
    };
  }, [dragging]);

  const seekToClientX = (clientX: number) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !video.duration) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
    seekToClientX(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    seekToClientX(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDragging(false);
    seekToClientX(event.clientX);
    void videoRef.current?.play().catch(() => {});
  };

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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-night/70 via-night/25 to-transparent px-3 pb-3 pt-10">
          <div className="pointer-events-auto flex items-center gap-3">
            <div
              ref={progressRef}
              role="slider"
              aria-label={`Seek ${review.name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              tabIndex={0}
              className="group relative h-5 flex-1 cursor-pointer touch-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onKeyDown={(event) => {
                const video = videoRef.current;
                if (!video?.duration) return;
                const step = video.duration * 0.05;
                if (event.key === "ArrowRight") {
                  video.currentTime = Math.min(
                    video.duration,
                    video.currentTime + step,
                  );
                } else if (event.key === "ArrowLeft") {
                  video.currentTime = Math.max(0, video.currentTime - step);
                } else if (event.key === "Home") {
                  video.currentTime = 0;
                } else {
                  return;
                }
                setProgress((video.currentTime / video.duration) * 100);
                event.preventDefault();
              }}
            >
              <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-white/30 transition-[height] group-hover:h-[4px]">
                <div
                  className="h-full rounded-full bg-brass-light"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div
                className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                style={{ left: `${progress}%` }}
                aria-hidden="true"
              />
            </div>

            <button
              type="button"
              onClick={onToggleMute}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-night/45 text-white/90 backdrop-blur-sm transition-colors hover:bg-night/65 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-pressed={!muted}
              aria-label={
                muted ? `Unmute ${review.name}` : `Mute ${review.name}`
              }
            >
              <MuteIcon muted={muted} />
            </button>
          </div>
        </div>
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
