import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "114 rooms and suites at HADITH Hotel — from refined guest rooms to Junior Suites with butler service, inspired by the surahs of the Holy Qur’an.",
};

export default function RoomsPage() {
  return (
    <>
      {/* —— Hero: split panel — distinct from Home & The Hotel —— */}
      <section className="grid min-h-[100svh] pt-[4.5rem] lg:grid-cols-2 lg:pt-0">
        <div className="relative min-h-[52vh] lg:min-h-[100svh]">
          <Image
            src="/images/guest-room.jpeg"
            alt="Guest room at HADITH Hotel with arched headboard"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center bg-ink px-5 py-16 text-paper md:px-12 lg:px-16 lg:py-24">
          <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass-light uppercase">
            Accommodation
          </p>
          <h1 className="font-display mt-6 text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] font-medium tracking-[0.02em]">
            Rooms
            <span className="mt-1 block text-[0.55em] tracking-[0.12em] font-normal text-limestone/85">
              &amp; Suites
            </span>
          </h1>
          <div className="mt-8 h-px w-20 bg-brass-light/70" />
          <p className="mt-8 max-w-md text-base leading-8 text-limestone/80 md:text-[1.05rem]">
            One hundred and fourteen rooms reflecting the surahs of the Holy
            Qur&apos;an — a refined and meaningful stay within the Complex of
            Imam Al Bukhari.
          </p>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[0.7rem] tracking-[0.22em] text-brass-light uppercase">
            <span>114 Rooms</span>
            <span>5★ Class</span>
            <span>Butler on Suites</span>
          </div>
        </div>
      </section>

      {/* —— Intro —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-28">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              A meaningful stay
            </p>
            <h2 className="font-display mt-6 text-3xl leading-[1.2] text-ink md:text-4xl lg:text-[2.75rem]">
              Every room is a quiet dialogue between Uzbek craft and
              contemporary comfort.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-ink-soft">
              From the geometry of an arch above the bed to hand-carved Bukhara
              doors and rugs woven in the Fergana Valley — accommodation at
              HADITH Hotel is designed to honour place, faith, and rest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Standard Room —— */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/guest-room-alt.jpeg"
                  alt="Standard guest room at HADITH Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
                Guest Room
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.08] text-ink md:text-5xl">
                Rest beneath the geometry of an arch.
              </h2>
              <p className="mt-7 text-[1.05rem] leading-8 text-ink-soft">
                A serene sanctuary with a queen-size bed, refined finishes, and
                the quiet presence of Islamic architectural form — crafted for
                restorative nights after a day among Samarkand&apos;s sacred
                sites.
              </p>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-limestone pt-8">
                {[
                  { label: "Bed", value: "Queen" },
                  { label: "Rooms", value: "62" },
                  { label: "Area", value: "35 m²" },
                ].map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                      {spec.label}
                    </dt>
                    <dd className="font-display mt-2 text-2xl text-ink md:text-3xl">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Junior Suite —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                Junior Suite
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.08] md:text-5xl">
                A residence, simply called a suite.
              </h2>
              <p className="mt-7 text-[1.05rem] leading-8 text-limestone/80">
                Generous open-plan living, marble dining for four, and a
                separate bedroom behind a hand-carved Bukhara door. The
                chesterfield was tufted in Tashkent; the rug woven on a single
                loom in the Fergana Valley.
              </p>
              <p className="mt-5 text-[1.05rem] leading-8 text-limestone/80">
                Attended by a private butler, available around the clock — for
                guests who prefer their stay to feel like a home of quiet
                grandeur.
              </p>

              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
                {[
                  { label: "Area", value: "71 m²" },
                  { label: "Rooms", value: "9" },
                  { label: "Butler", value: "24h" },
                ].map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[0.65rem] tracking-[0.22em] text-limestone/55 uppercase">
                      {spec.label}
                    </dt>
                    <dd className="font-display mt-2 text-2xl md:text-3xl">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delayMs={100} className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/junior-suite.jpeg"
                  alt="Junior Suite lounge at HADITH Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Bathroom —— */}
      <section className="texture-paper">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/bathroom.jpeg"
                alt="Guest bathroom at HADITH Hotel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              In-room comfort
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
              Finishes of stone, quiet, and light.
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-8 text-ink-soft">
              Marble and warm neutrals frame a private bath experience designed
              for calm — rainfall shower, refined fixtures, and the same
              attention to detail found throughout the hotel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— At a glance —— */}
      <section className="bg-lapis-deep text-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-20 lg:px-14">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
              At a glance
            </p>
            <h2 className="font-display mt-4 text-3xl md:text-4xl">
              Accommodation, in numbers.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "114", label: "Total rooms" },
              { value: "62", label: "Guest rooms" },
              { value: "9", label: "Junior suites" },
              { value: "24h", label: "Suite butler" },
            ].map((item, i) => (
              <Reveal key={item.label} delayMs={i * 70}>
                <p className="font-display text-4xl md:text-5xl">{item.value}</p>
                <p className="mt-3 text-[0.7rem] tracking-[0.24em] text-limestone/65 uppercase">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* —— Closing —— */}
      <section className="bg-paper">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-5 py-24 md:flex-row md:items-end md:px-10 md:py-28 lg:px-14">
          <Reveal>
            <h2 className="font-display max-w-xl text-4xl leading-[1.1] text-ink md:text-5xl">
              From rest to table, pool, and beyond.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dining"
              className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[0.7rem] font-medium tracking-[0.22em] text-paper uppercase transition-colors hover:bg-lapis-deep"
            >
              Dining
            </Link>
            <Link
              href="/wellness"
              className="inline-flex h-12 items-center justify-center border border-ink/25 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:border-ink"
            >
              Wellness
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
