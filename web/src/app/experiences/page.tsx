import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Experiences at HADITH Hotel — padel & tennis, boutique craftsmanship, kids playground, and a 350 m² ballroom for gatherings of up to 250 guests.",
};

export default function ExperiencesPage() {
  return (
    <>
      {/* —— Hero: centered title over sport — distinct from other pages —— */}
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-night pt-[4.5rem]">
        <Image
          src="/images/padel.png"
          alt="Padel court at HADITH Hotel"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass-light uppercase">
            Beyond the stay
          </p>
          <h1 className="font-display mt-6 text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] font-medium tracking-[0.02em] text-white">
            Experiences
          </h1>
          <div className="mx-auto mt-8 h-px w-20 bg-brass-light/80" />
          <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/85 md:text-lg">
            Play, browse, gather, and celebrate — from the padel court to the
            boutique, the playground to the ballroom.
          </p>
        </div>
      </section>

      {/* —— Intro —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-24">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              On the grounds
            </p>
            <h2 className="font-display mt-6 text-3xl leading-[1.2] text-ink md:text-4xl">
              A hotel that invites you outdoors, indoors, and into culture.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-ink-soft">
              Whether you come for a match under glass, a keepsake from the Silk
              Road, a family afternoon, or an evening of two hundred and fifty —
              HADITH Hotel makes space for it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Sport —— */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <Reveal className="max-w-2xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Recreation
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.08] text-ink md:text-5xl">
              Play padel &amp; tennis.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink-soft">
              Courts on the hotel grounds — for fair-weather mornings and
              floodlit evenings against the south wing&apos;s blue tilework.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-limestone pt-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <h3 className="font-display text-2xl text-ink md:text-3xl">
                Padel court
              </h3>
              <p className="mt-4 text-base leading-8 text-ink-soft">
                A boutique padel court — the racket sport of the moment — with
                rental rackets, a coach on call, and a viewing terrace finished
                in travertine.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h3 className="font-display text-2xl text-ink md:text-3xl">
                Tennis court
              </h3>
              <p className="mt-4 text-base leading-8 text-ink-soft">
                A regulation hard court enclosed in glass — for fair-weather
                and floodlit evening sets, set against the hotel&apos;s tiled
                architecture.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Boutique —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-16 lg:py-28">
            <Reveal>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                The Boutique
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl">
                The Silk Road, still on offer.
              </h2>
              <p className="mt-8 text-[1.05rem] leading-8 text-limestone/80">
                Discover a curated collection of Uzbek and Indonesian
                craftsmanship alongside selected luxury brands. Each item
                reflects a story of heritage, quality, and timeless elegance —
                available for purchase and international delivery upon request.
              </p>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] tracking-[0.2em] text-brass-light uppercase">
                <li>Craftsmanship</li>
                <li>Cosmetics</li>
                <li>Jewellery</li>
              </ul>
            </Reveal>
          </div>
          <Reveal delayMs={100} className="relative min-h-[420px] lg:min-h-[640px]">
            <Image
              src="/images/boutique.jpeg"
              alt="Boutique at HADITH Hotel with Uzbek crafts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* —— Family & Events —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
          <Reveal className="max-w-2xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Gather
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
              For the youngest guests — and the grandest evenings.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-limestone pt-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-[0.65rem] tracking-[0.28em] text-brass uppercase">
                Kids Playground
              </p>
              <h3 className="font-display mt-5 text-3xl text-ink">
                Their own small kingdom, in fountains and forts.
              </h3>
              <p className="mt-6 text-base leading-8 text-ink-soft">
                A dedicated playground on the grounds — so younger travellers
                have a world of their own while the hotel&apos;s calm continues
                around them.
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <p className="text-[0.65rem] tracking-[0.28em] text-brass uppercase">
                Convention Room
              </p>
              <h3 className="font-display mt-5 text-3xl text-ink">
                A room that can hold a conference, or a wedding.
              </h3>
              <p className="mt-6 text-base leading-8 text-ink-soft">
                A versatile 350 m² ballroom designed for corporate meetings,
                conferences, weddings, and social events — accommodating up to
                250 guests, with modern facilities and flexible setups.
              </p>
              <dl className="mt-8 flex gap-10 border-t border-limestone pt-8">
                <div>
                  <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                    Area
                  </dt>
                  <dd className="font-display mt-1 text-2xl text-ink">350 m²</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                    Guests
                  </dt>
                  <dd className="font-display mt-1 text-2xl text-ink">250</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Grounds amenity —— */}
      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-14">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/bike-parking.png"
                alt="Bicycle parking at HADITH Hotel grounds"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              On the grounds
            </p>
            <h2 className="font-display mt-5 text-3xl leading-[1.15] text-ink md:text-4xl">
              Arrive by bike. Explore at your pace.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-soft">
              Covered bicycle parking on the landscaped grounds — a quiet
              invitation to move gently between the hotel and the spiritual
              heart of the Complex.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Closing —— */}
      <section className="bg-night text-paper">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-5 py-24 md:flex-row md:items-end md:px-10 md:py-28 lg:px-14">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
              Until we welcome you
            </p>
            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.1] md:text-5xl">
              Every stay becomes part of a meaningful journey.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/the-hotel"
              className="inline-flex h-12 items-center justify-center bg-white px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:bg-paper"
            >
              The Hotel
            </Link>
            <Link
              href="/rooms"
              className="inline-flex h-12 items-center justify-center border border-white/35 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:bg-white/10"
            >
              Rooms &amp; Suites
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
