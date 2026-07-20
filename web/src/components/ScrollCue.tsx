"use client";

export function ScrollCue() {
  return (
    <a
      href="#story"
      aria-label="Scroll to explore"
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-4"
    >
      <span className="text-[0.68rem] font-medium tracking-[0.28em] text-[#dedcb6] uppercase">
        Scroll to explore
      </span>
      <span className="scroll-cue-arrows flex flex-col items-center -space-y-1.5" aria-hidden>
        <svg
          width="28"
          height="16"
          viewBox="0 0 14 8"
          fill="none"
          className="text-[#5a5848]"
        >
          <path
            d="M1 1.5L7 6.5L13 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="28"
          height="16"
          viewBox="0 0 14 8"
          fill="none"
          className="text-[#dedcb6]"
        >
          <path
            d="M1 1.5L7 6.5L13 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
