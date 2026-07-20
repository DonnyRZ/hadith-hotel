import Link from "next/link";

const footerNav = [
  { href: "/the-hotel", label: "The Hotel" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/wellness", label: "Wellness" },
  { href: "/experiences", label: "Experiences" },
];

export function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.18em] md:text-4xl">
              HADITH
            </p>
            <p className="mt-2 text-[0.7rem] tracking-[0.35em] uppercase text-limestone/80">
              Hotel · Complex of Imam Al Bukhari
            </p>
            <p className="mt-8 max-w-md text-sm leading-7 text-limestone/75">
              A contemporary sanctuary honouring the great hadith scholar —
              where Silk Road heritage meets the warmth of Indonesian
              hospitality.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-brass-light">
              Explore
            </p>
            <ul className="mt-6 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/85 transition-colors hover:text-brass-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-brass-light">
              Contact
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic leading-7 text-paper/85">
              <p>
                HADITH Hotel
                <br />
                Complex of Imam Al Bukhari
                <br />
                Samarkand, Uzbekistan
              </p>
              <p>
                <a
                  href="mailto:egi.egiholding@gmail.com"
                  className="transition-colors hover:text-brass-light"
                >
                  egi.egiholding@gmail.com
                </a>
                <br />
                <a
                  href="tel:+123456789"
                  className="transition-colors hover:text-brass-light"
                >
                  (+1) 23456789
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.7rem] tracking-[0.12em] text-limestone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HADITH Hotel. All rights reserved.</p>
          <p className="uppercase">Samarkand · Uzbekistan</p>
        </div>
      </div>
    </footer>
  );
}
