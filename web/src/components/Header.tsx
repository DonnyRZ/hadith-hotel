"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/the-hotel", label: "The Hotel" },
  { href: "/rooms", label: "Rooms" },
  { href: "/dining", label: "Dining" },
  { href: "/wellness", label: "Wellness" },
  { href: "/experiences", label: "Experiences" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-paper/90 backdrop-blur-md text-ink shadow-[0_1px_0_rgba(26,23,20,0.06)]"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1600px] items-center justify-between px-5 md:px-10 lg:px-14">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`block h-px w-full origin-center bg-current transition-transform duration-400 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full origin-center bg-current transition-transform duration-400 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <Link
            href="/"
            className="absolute left-1/2 z-[60] -translate-x-1/2 text-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-display block text-[1.35rem] font-medium tracking-[0.22em] md:text-[1.5rem]">
              HADITH
            </span>
            <span className="mt-0.5 block text-[0.58rem] font-medium tracking-[0.42em] uppercase opacity-80">
              Hotel
            </span>
          </Link>

          <Link
            href="/the-hotel"
            className={`relative z-[60] hidden text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-70 sm:block ${
              open ? "pointer-events-none opacity-0" : ""
            }`}
          >
            Explore
          </Link>
          <span className="w-10 sm:hidden" aria-hidden />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-paper" />
        <nav className="relative flex h-full flex-col justify-between px-8 pb-12 pt-28 md:px-16 lg:px-24">
          <ul className="flex flex-col gap-3 md:gap-4">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-display group inline-flex items-baseline gap-4 text-4xl transition-colors hover:text-lapis md:text-6xl lg:text-7xl ${
                    pathname === item.href ? "text-lapis" : "text-ink"
                  }`}
                >
                  <span className="text-xs tracking-[0.2em] text-muted">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p
            className={`max-w-sm text-sm leading-relaxed text-muted transition-opacity duration-700 ${
              open ? "opacity-100 delay-500" : "opacity-0"
            }`}
          >
            Complex of Imam Al Bukhari
            <br />
            Samarkand · Uzbekistan
          </p>
        </nav>
      </div>
    </>
  );
}
