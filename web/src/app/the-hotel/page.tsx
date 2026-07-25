import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Hotel",
  description:
    "Discover HADITH Hotel within the Complex of Imam Al Bukhari in Samarkand — where Silk Road heritage meets Indonesian hospitality.",
};

export default function TheHotelPage() {
  return (
    <>
      {/* —— Hero: editorial / light — distinct from Home cinematic —— */}
      <section className="texture-paper pt-[4.5rem]">
        <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-16 md:px-10 md:pb-14 md:pt-20 lg:px-14">
          <p className="text-[0.65rem] font-medium tracking-[0.35em] text-brass uppercase">
            Our Story
          </p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display max-w-3xl text-[clamp(3.5rem,10vw,7rem)] leading-[0.92] font-medium tracking-[0.02em] text-ink">
              The Hotel
            </h1>
            <p className="max-w-sm text-base leading-7 text-ink-soft lg:pb-3 lg:text-right">
              A contemporary sanctuary within the prestigious Complex of Imam
              Al Bukhari — Samarkand, Uzbekistan.
            </p>
          </div>
          <div className="mt-10 h-px w-full bg-limestone" />
        </div>

        <div className="relative mx-auto aspect-[16/9] max-h-[72vh] w-full max-w-[1600px] overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/hotel-story-hero.png"
            alt="HADITH Hotel at the Complex of Imam Al Bukhari, Samarkand"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
      </section>

      {/* —— Welcome from the Owner —— */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              A warm welcome
            </p>
            <blockquote className="font-display mt-8 text-2xl leading-[1.35] text-ink md:text-3xl md:leading-[1.4] lg:text-[2.15rem]">
              “Inspired by one of the Islamic world&apos;s most revered
              scholars, HADITH Hotel was created to honor a legacy that
              transcends generations while offering a contemporary standard of
              comfort, elegance, and service.”
            </blockquote>
            <div className="mx-auto mt-10 h-px w-16 bg-brass/50" />
            <p className="mt-8 text-sm tracking-[0.12em] text-ink">
              Erslan Ibrahim
            </p>
            <p className="mt-1 text-[0.7rem] tracking-[0.22em] text-muted uppercase">
              Chairman &amp; CEO
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Heritage —— */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <Reveal className="relative min-h-[420px] lg:min-h-full">
            <Image
              src="/images/lobby-atrium-v2.jpeg"
              alt="Grand lobby of HADITH Hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 lg:px-16 lg:py-28">
            <Reveal delayMs={80}>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                Heritage
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl">
                Where Samarkand&apos;s heritage meets Indonesian hospitality.
              </h2>
              <p className="mt-8 text-[1.05rem] leading-8 text-limestone/80">
                Born within the Imam Al Bukhari Complex — a cultural and
                spiritual landmark blending Silk Road heritage with refined
                modern development — HADITH Hotel is a contemporary tribute to
                the great hadith scholar.
              </p>
              <p className="mt-5 text-[1.05rem] leading-8 text-limestone/80">
                Here, Uzbek grandeur is complemented by the warmth and
                attentive service of Indonesian hospitality, so every stay
                becomes part of a meaningful journey.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— The Complex —— */}
      <section className="texture-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
          <Reveal className="max-w-2xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              The Complex
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
              The spiritual heart of Samarkand.
            </h2>
            <p className="mt-7 text-[1.05rem] leading-8 text-ink-soft">
              One of the Islamic world&apos;s most revered pilgrimage sites,
              attracting visitors from across the globe and reinforcing
              Samarkand&apos;s role as a center of faith, culture, and
              heritage. The resting place of Imam Al-Bukhari — compiler of
              Sahih Al-Bukhari — welcomes millions of pilgrims and guests.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px bg-limestone sm:grid-cols-2 lg:grid-cols-3">
            {[
              { value: "33,000", label: "Visitors / Day" },
              { value: "65,000", label: "Maximum Capacity" },
              { value: "1956", label: "Soekarno’s Visit" },
            ].map((item, i) => (
              <Reveal
                key={item.label}
                delayMs={i * 80}
                className="bg-paper px-8 py-12"
              >
                <p className="font-display text-4xl text-ink md:text-5xl">
                  {item.value}
                </p>
                <p className="mt-3 text-[0.7rem] tracking-[0.24em] text-muted uppercase">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 max-w-2xl border-l border-brass/40 pl-8">
            <h3 className="font-display text-2xl text-ink md:text-3xl">
              A shared heritage between two nations.
            </h3>
            <p className="mt-5 text-base leading-8 text-ink-soft">
              At the heart of the courtyard stands the Monument of Soekarno —
              the first president of Indonesia and a celebrated friend of the
              Uzbek people, who in 1956 helped revive global recognition of
              Imam Al Bukhari&apos;s resting place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Arrival —— */}
      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-28 lg:px-14">
          <Reveal className="mb-14 max-w-xl">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Arrival
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
              A welcome framed by an Uzbek arch.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/reception.jpeg"
                  alt="Reception hall at HADITH Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                Reception · Multilingual concierge, 24 hours
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wall-of-fame.jpeg"
                  alt="Wall of Fame gallery at HADITH Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                Wall of Fame · Distinguished visitors honoured
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-12 max-w-xl">
            <p className="text-[1.05rem] leading-8 text-ink-soft">
              Marble desks. A hand-painted miniature of old Samarkand fills
              the niche behind — an everyday reminder that arrival is also an
              entry into a thousand-year story. Private check-in available on
              request.
            </p>
          </Reveal>

          <Reveal className="mt-14 border-t border-ink/10 pt-8">
            <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase">
              Guest amenity
            </p>
            <p className="mt-3 text-[0.7rem] tracking-[0.18em] text-ink uppercase">
              Prayer room
            </p>
            <p className="mt-2 text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              Available for guests during their stay
            </p>
          </Reveal>
        </div>
      </section>

      {/* —— Location + Google Maps —— */}
      <section className="bg-night text-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
            <Reveal>
              <p className="text-[0.65rem] font-medium tracking-[0.32em] text-brass-light uppercase">
                Location
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl">
                Find us in Samarkand.
              </h2>
              <p className="mt-7 text-base leading-8 text-limestone/80">
                HADITH Hotel stands within the Memorial Complex of Imam Al
                Bukhari — a spiritual landmark in the Samarkand region of
                Uzbekistan.
              </p>
              <address className="mt-10 space-y-2 text-sm not-italic leading-7 text-paper/90">
                <p className="font-medium tracking-[0.08em]">HADITH Hotel</p>
                <p className="text-limestone/75">
                  Complex of Imam Al Bukhari
                  <br />
                  Samarkand, Uzbekistan
                </p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=39.8149986,66.9444850"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 items-center border border-white/35 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-white uppercase transition-colors hover:bg-white hover:text-ink"
              >
                Open in Google Maps
              </a>
            </Reveal>

            <Reveal delayMs={100} className="w-full">
              <div className="overflow-hidden border border-white/10 bg-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <iframe
                  title="HADITH Hotel — Complex of Imam Al Bukhari on Google Maps"
                  src="https://maps.google.com/maps?q=39.8149986,66.9444850&z=15&hl=en&output=embed"
                  className="aspect-[4/3] w-full border-0 grayscale-[20%] contrast-[1.05] md:aspect-[16/11] lg:min-h-[480px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-[0.7rem] tracking-[0.16em] text-limestone/50 uppercase">
                Memorial Complex of Imam Al-Bukhari · Samarkand Region
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* —— Closing —— */}
      <section className="texture-paper">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-5 py-24 md:flex-row md:items-end md:px-10 md:py-28 lg:px-14">
          <Reveal>
            <h2 className="font-display max-w-xl text-4xl leading-[1.1] text-ink md:text-5xl">
              Continue your journey through the hotel.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rooms"
              className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[0.7rem] font-medium tracking-[0.22em] text-paper uppercase transition-colors hover:bg-lapis-deep"
            >
              Rooms &amp; Suites
            </Link>
            <Link
              href="/dining"
              className="inline-flex h-12 items-center justify-center border border-ink/25 px-8 text-[0.7rem] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:border-ink"
            >
              Dining
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
