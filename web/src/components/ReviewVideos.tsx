"use client";

import { useRef } from "react";

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

export function ReviewVideos() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Only one review plays at a time so the voices never overlap.
  const pauseOthers = (current: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== current && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5 md:gap-7 lg:gap-9">
        {reviews.map((review, index) => (
          <figure key={review.src} className="flex min-w-0 flex-col">
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink/5">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={review.src}
                poster={review.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={`Review by ${review.name}`}
                onPlay={() => pauseOthers(index)}
              />
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
        ))}
      </div>
    </div>
  );
}
