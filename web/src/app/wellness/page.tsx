import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wellness",
  description:
    "Wellness at HADITH Hotel — heated pool, Balinese spa rituals, sauna, Turkish hammam, and fitness. Restore balance in Samarkand.",
};

const rituals = [
  {
    name: "Spa",
    title: "Restore with tranquility.",
    body: "A serene spa sanctuary inspired by the richness of Nusantara traditions. Featuring signature Balinese Massage, traditional healing rituals, and a tranquil atmosphere designed to restore balance, relaxation, and inner harmony.",
  },
  {
    name: "Sauna",
    title: "A sanctuary of warmth and relaxation.",
    body: "Experience the restorative power of traditional sauna therapy. Surrounded by warm natural wood and soothing ambient lighting, this tranquil retreat promotes deep relaxation, improved circulation, and complete physical and mental rejuvenation.",
  },
  {
    name: "Turkish Hammam",
    title: "A timeless ritual of renewal.",
    body: "A tranquil hammam experience inspired by centuries-old Turkish bathing traditions. Featuring steam rituals, cleansing treatments, and a serene atmosphere designed to restore harmony, relaxation, and inner balance.",
  },
  {
    name: "Fitness",
    title: "Move with intention.",
    body: "A thoughtfully equipped fitness centre for guests who prefer their practice quiet, focused, and uninterrupted — strength and stillness in equal measure.",
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* —— Hero: light panel + pool — mirror opposite of Rooms —— */}
      <section className="grid min-h-[100svh] pt-[4.5rem] lg:grid-cols-2 lg:pt-0">
        <div className="order-2 flex flex-col justify-center bg-paper px-5 py-16 md:px-12 lg:order-1 lg:px-16 lg:py-24">
          <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass uppercase">
            Restore
          </p>
          <h1 className="font-display mt-6 text-[clamp(3.2rem,7vw,5.75rem)] leading-[0.94] font-medium tracking-[0.02em] text-ink">
            Wellness
          </h1>
          <div className="mt-8 h-px w-20 bg-brass/70" />
          <p className="mt-8 max-w-md text-base leading-8 text-ink-soft md:text-[1.05rem]">
            Swim beneath a coffered indigo sky — then continue into spa
            rituals, sauna warmth, Turkish hammam, and mindful movement.
          </p>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] tracking-[0.2em] text-brass uppercase">
            <li>Pool</li>
            <li>Spa</li>
            <li>Sauna</li>
            <li>Hammam</li>
            <li>Fitness</li>
          </ul>
        </div>

        <div className="relative order-1 min-h-[52vh] lg:order-2 lg:min-h-[100svh]">
          <Image
            src="/images/pool.jpeg"
            alt="Indoor heated pool at HADITH Hotel"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* —— Intro —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-28">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
              Body &amp; stillness
            </p>
            <h2 className="font-display mt-6 text-3xl leading-[1.2] md:text-4xl lg:text-[2.75rem]">
              Spaces designed for balance, renewal, and quiet strength.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-limestone/75">
              From heated waters under an indigo coffered ceiling to Balinese
              healing rituals and the steam of a Turkish hammam — wellness at
              HADITH Hotel draws from many traditions, one intention.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— The Pool —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
                The Pool
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.08] text-ink md:text-5xl lg:text-[3.4rem]">
                Swim beneath a coffered indigo sky.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-[1.05rem] leading-8 text-ink-soft">
                A heated pool with a lane for laps — luminous water, lounge
                seating, and architecture that turns a swim into a moment of
                calm. Open from morning light to evening quiet.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-limestone sm:grid-cols-3">
            {[
              { value: "Heated", label: "Pool" },
              { value: "Lap lane", label: "For focused swim" },
              { value: "06:00 — 22:00", label: "Daily hours" },
            ].map((item, i) => (
              <Reveal
                key={item.label}
                delayMs={i * 80}
                className="bg-paper px-8 py-12"
              >
                <p className="font-display text-3xl text-ink md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-[0.7rem] tracking-[0.24em] text-muted uppercase">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— Rituals —— */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-28 lg:px-14">
          <Reveal className="max-w-xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Rituals
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
              From Nusantara hands to Turkish steam.
            </h2>
          </Reveal>

          <div className="mt-16 divide-y divide-limestone border-y border-limestone">
            {rituals.map((item, i) => (
              <Reveal key={item.name} delayMs={i * 60}>
                <article className="grid gap-6 py-12 md:grid-cols-[140px_1fr] md:gap-12 lg:grid-cols-[180px_1fr_1.2fr] lg:gap-16 lg:py-14">
                  <p className="text-[0.7rem] tracking-[0.22em] text-brass uppercase">
                    0{i + 1}
                    <span className="mt-2 block text-muted">{item.name}</span>
                  </p>
                  <h3 className="font-display text-2xl leading-[1.2] text-ink md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-8 text-ink-soft md:col-span-2 lg:col-span-1">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— Closing band —— */}
      <section className="relative overflow-hidden bg-lapis-deep text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 80% 50%, rgba(184,154,98,0.2), transparent 55%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-5 py-24 md:flex-row md:items-end md:px-10 md:py-28 lg:px-14">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
              Continue
            </p>
            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.1] md:text-5xl">
              After stillness — play, gather, and explore.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experiences"
              className="inline-flex h-12 items-center justify-center bg-white px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:bg-paper"
            >
              Experiences
            </Link>
            <Link
              href="/dining"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:bg-white/10"
            >
              Dining
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
