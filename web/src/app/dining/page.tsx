import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Dining at HADITH Hotel — Uzbek classics, Indonesian specialty coffee, and continental favourites. Restaurant, Bar & Lounge, and Outdoor Café. Halal.",
};

export default function DiningPage() {
  return (
    <>
      {/* —— Hero: restaurant photo — distinct layout from Home —— */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-night pt-[4.5rem]">
        <Image
          src="/images/restaurant-v2.jpeg"
          alt="The Restaurant at HADITH Hotel"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-night/25" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-24 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
          <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass-light uppercase">
            Culinary
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-[clamp(3.5rem,9vw,6.5rem)] leading-[0.92] font-medium tracking-[0.02em] text-white">
            Dining
          </h1>
          <div className="mt-8 h-px w-20 bg-brass-light/80" />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-base leading-8 text-white/85 md:text-[1.05rem]">
              Plov, pomegranate &amp; candlelight — Uzbek, Indonesian, and
              Continental flavours, always served with care. Halal.
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.7rem] tracking-[0.22em] text-brass-light uppercase">
              <li>Restaurant</li>
              <li>Bar &amp; Lounge</li>
              <li>Outdoor Café</li>
            </ul>
          </div>
        </div>
      </section>

      {/* —— Cuisine note —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-24">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Two nations, one table
            </p>
            <h2 className="font-display mt-6 text-3xl leading-[1.2] text-ink md:text-4xl">
              Silk Road abundance meets the archipelago&apos;s coffee culture.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-ink-soft">
              From ceremonial plov to Kopi Luwak poured after dusk — every
              venue at HADITH Hotel is a quiet celebration of shared heritage
              between Uzbekistan and Indonesia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— The Restaurant —— */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/restaurant-detail-2-v2.jpeg"
                alt="Formal dining setup at HADITH Hotel Restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              The Restaurant
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.08] text-ink md:text-5xl">
              Plov, pomegranate &amp; candlelight.
            </h2>
            <p className="mt-7 text-[1.05rem] leading-8 text-ink-soft">
              An elegant dining room for unhurried evenings — tables set with
              care, warm light, and a menu that honours Uzbek classics alongside
              Indonesian and Continental favourites.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-limestone pt-8 sm:grid-cols-3">
              {[
                { label: "Cuisine", value: "Uzbek · Indonesian · Continental" },
                { label: "Seating", value: "120" },
                { label: "Service", value: "Halal" },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className={
                    spec.label === "Cuisine" ? "col-span-2 sm:col-span-1" : ""
                  }
                >
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    {spec.label}
                  </dt>
                  <dd className="font-display mt-2 text-xl text-ink md:text-2xl">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* —— Bar & Lounge —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] lg:min-h-[720px]">
            <Image
              src="/images/bar-lounge.png"
              alt="Bar and coffee lounge at HADITH Hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-16 lg:py-28">
            <Reveal delayMs={80}>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                Bar &amp; Lounge
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl">
                A taste of Indonesia, crafted for the lounge.
              </h2>
              <p className="mt-8 text-[1.05rem] leading-8 text-limestone/80">
                By day, enjoy curated Indonesian pastries with specialty coffees
                from across the archipelago, featuring the rich signature of
                Kopi Luwak. By night, the lounge becomes a warm social space
                with live music and crafted beverages celebrating
                Indonesia&apos;s coffee culture.
              </p>
              <ul className="mt-10 space-y-3 text-[0.75rem] tracking-[0.18em] text-brass-light uppercase">
                <li>Open 07:00 — 01:00</li>
                <li>Live music nightly</li>
                <li>Indonesian specialty coffee</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Outdoor Café —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <Reveal>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
                Outdoor Café
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
                A quiet moment, perfectly brewed.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-[1.05rem] leading-8 text-ink-soft">
                The sheltered terrace sits beneath carved ganch arches, with
                glazed stoneware tables and terracotta planters. A calm,
                timeless setting — now complemented by Indonesian specialty
                coffee &amp; pastry, including Kopi Luwak.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 border border-limestone bg-paper px-8 py-12 md:px-14 md:py-16">
            <p className="font-display text-center text-2xl leading-[1.4] text-ink md:text-3xl">
              “Coffee from the archipelago, served under the arches of
              Samarkand.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Closing —— */}
      <section className="bg-paper-deep">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-5 py-24 md:flex-row md:items-end md:px-10 md:py-28 lg:px-14">
          <Reveal>
            <h2 className="font-display max-w-xl text-4xl leading-[1.1] text-ink md:text-5xl">
              After the table, restore — or explore further.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/wellness"
              className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[0.7rem] font-medium tracking-[0.22em] text-paper uppercase transition-colors hover:bg-lapis-deep"
            >
              Wellness
            </Link>
            <Link
              href="/experiences"
              className="inline-flex h-12 items-center justify-center border border-ink/25 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:border-ink"
            >
              Experiences
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
