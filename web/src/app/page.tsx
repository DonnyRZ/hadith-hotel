import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScrollCue } from "@/components/ScrollCue";

export default function HomePage() {
  return (
    <>
      {/* —— Hero —— */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-night">
        <Image
          src="/images/hero-exterior.jpg"
          alt="HADITH Hotel façade at golden hour, Complex of Imam Al Bukhari, Samarkand"
          fill
          priority
          className="object-cover object-center animate-kenburns"
          sizes="100vw"
        />
        <div className="hero-gradient absolute inset-0" />

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-28 pt-28 md:px-10 md:pb-32 lg:px-14 lg:pb-36">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="animate-fade-up text-[0.7rem] font-medium tracking-[0.35em] text-brass-light uppercase">
              Complex of Imam Al Bukhari · Samarkand
            </p>

            <h1 className="animate-fade-up delay-1 font-display mt-5 max-w-4xl text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] font-medium tracking-[0.04em] text-white">
              HADITH
              <span className="mt-1 block text-[0.42em] tracking-[0.38em] font-normal opacity-90">
                HOTEL
              </span>
            </h1>

            <div className="animate-line-grow mt-7 h-px w-24 bg-brass-light/80" />

            <p className="animate-fade-up delay-2 mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              A landmark of culture, comfort and conviction — where
              Samarkand&apos;s heritage meets the warmth of Indonesian
              hospitality.
            </p>

            <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/the-hotel"
                className="inline-flex h-12 items-center justify-center bg-white px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:bg-paper"
              >
                Discover the Hotel
              </Link>
              <Link
                href="/rooms"
                className="inline-flex h-12 items-center justify-center border border-white/40 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
              >
                Rooms &amp; Suites
              </Link>
            </div>
          </div>
        </div>

        <ScrollCue />
      </section>

      {/* —— Story —— */}
      <section id="story" className="texture-paper overflow-hidden scroll-mt-20">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-20 lg:px-14">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Our Story
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl lg:text-[3.4rem]">
              Born within a spiritual landmark of the Silk Road.
            </h2>
            <p className="mt-8 max-w-lg text-[1.05rem] leading-8 text-ink-soft">
              Inspired by Imam Al Bukhari&apos;s legacy, HADITH Hotel blends
              Uzbek grandeur with the attentive service of Indonesian
              hospitality — a contemporary sanctuary honouring a scholar whose
              influence transcends generations.
            </p>
            <Link
              href="/the-hotel"
              className="nav-link mt-10 inline-block text-ink"
            >
              The Hotel
            </Link>
          </Reveal>

          <Reveal delayMs={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <Image
                src="/images/lobby-atrium.jpeg"
                alt="Grand lobby atrium of HADITH Hotel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              The Grand Lobby
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Numbers —— */}
      <section className="bg-lapis-deep text-paper">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 md:grid-cols-3 md:gap-8 md:px-10 md:py-20 lg:px-14">
          {[
            { value: "114", label: "Rooms & Suites" },
            { value: "5★", label: "Class Rating" },
            { value: "62K", label: "Sqm of Land" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 100}>
              <p className="font-display text-5xl tracking-wide md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.7rem] tracking-[0.28em] text-limestone/70 uppercase">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* —— Rooms —— */}
      <section className="relative min-h-[85svh] overflow-hidden bg-night">
        <Image
          src="/images/junior-suite.jpeg"
          alt="Accommodation at HADITH Hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/55 to-night/25" />
        <div className="relative z-10 flex min-h-[85svh] items-end px-5 py-20 md:items-center md:px-10 lg:px-14">
          <Reveal className="max-w-xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
              Accommodation
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
              Rest beneath the geometry of an arch.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/80">
              One hundred and fourteen rooms reflecting the surahs of the Holy
              Qur&apos;an — from refined guest rooms to residences with private
              butler service.
            </p>
            <Link
              href="/rooms"
              className="mt-10 inline-flex h-12 items-center border border-white/45 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
            >
              View Rooms &amp; Suites
            </Link>
          </Reveal>
        </div>
      </section>

      {/* —— Dining —— */}
      <section className="texture-paper">
        <div className="mx-auto grid max-w-[1600px] items-stretch lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] lg:min-h-[640px]">
            <Image
              src="/images/restaurant-detail-2.jpeg"
              alt="The Restaurant at HADITH Hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className="flex items-center px-5 py-20 md:px-12 lg:px-16 lg:py-24">
            <Reveal delayMs={100}>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
                Dining
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
                Plov, pomegranate &amp; candlelight.
              </h2>
              <p className="mt-7 max-w-md text-[1.05rem] leading-8 text-ink-soft">
                From Uzbek classics to Indonesian specialty coffee and Kopi
                Luwak in the lounge — culinary journeys that honour both
                nations, always served with care.
              </p>
              <Link
                href="/dining"
                className="nav-link mt-10 inline-block text-ink"
              >
                Explore Dining
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Wellness —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1600px] items-stretch lg:grid-cols-2">
          <div className="order-2 flex items-center px-5 py-20 md:px-12 lg:order-1 lg:px-16 lg:py-24">
            <Reveal>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                Wellness
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl">
                Swim beneath a coffered indigo sky.
              </h2>
              <p className="mt-7 max-w-md text-[1.05rem] leading-8 text-limestone/80">
                A heated pool, Balinese massage rituals, traditional sauna,
                Turkish hammam, and a fitness centre — restorative spaces
                designed for balance and renewal.
              </p>
              <Link
                href="/wellness"
                className="nav-link mt-10 inline-block text-paper"
              >
                Discover Wellness
              </Link>
            </Reveal>
          </div>
          <Reveal
            delayMs={100}
            className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[640px]"
          >
            <Image
              src="/images/pool.jpeg"
              alt="Indoor swimming pool at HADITH Hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* —— Closing —— */}
      <section className="relative min-h-[70svh] overflow-hidden bg-night">
        <Image
          src="/images/exterior-night.jpeg"
          alt="HADITH Hotel illuminated at night"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 flex min-h-[70svh] flex-col items-center justify-center px-5 text-center">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass-light uppercase">
              Until we welcome you
            </p>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Every stay becomes part of a meaningful journey.
            </h2>
            <Link
              href="/experiences"
              className="mt-10 inline-flex h-12 items-center bg-white px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:bg-paper"
            >
              Explore Experiences
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
