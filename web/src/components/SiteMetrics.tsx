"use client";

import { useEffect, useId, useState } from "react";
import {
  fetchDownloadMetrics,
  fetchVisitorMetrics,
  type DownloadMetrics,
  type VisitorMetrics,
} from "@/lib/siteMetrics";

const numberFormat = new Intl.NumberFormat("en");

function formatMetric(value: number | null | undefined, loaded: boolean) {
  if (!loaded || value == null) return "—";
  return numberFormat.format(value);
}

export function SiteMetrics() {
  const titleId = useId();
  const [visitors, setVisitors] = useState<VisitorMetrics | null>(null);
  const [downloads, setDownloads] = useState<DownloadMetrics | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let active = true;

    Promise.all([fetchVisitorMetrics(), fetchDownloadMetrics()])
      .then(([visitorMetrics, downloadMetrics]) => {
        if (!active) return;
        setVisitors(visitorMetrics);
        setDownloads(downloadMetrics);
        setLoaded(true);
      })
      .catch(() => {
        if (active) setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const visitorData = visitors ?? {
    count: 0,
    activeVisitors: 0,
    cities: 0,
    topCities: [],
  };
  const highestCityCount = Math.max(
    ...visitorData.topCities.map((city) => city.count),
    1,
  );

  return (
    <section aria-label="Site metrics" className="border-t border-ink/10 bg-paper-deep">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-5 py-10 text-left transition-colors hover:bg-ink/[0.02] md:flex-row md:items-stretch md:gap-0 md:px-10 md:py-12 lg:px-14"
      >
        <span className="flex flex-1 flex-col justify-center md:pr-10">
          <span className="font-display text-4xl tracking-wide text-ink md:text-5xl">
            {formatMetric(visitors?.count, loaded)}
          </span>
          <span className="mt-3 text-[0.65rem] font-medium tracking-[0.32em] text-muted uppercase">
            Website Visitors
          </span>
        </span>

        <span
          className="hidden w-px bg-ink/10 md:block"
          aria-hidden="true"
        />

        <span className="flex flex-1 flex-col justify-center border-t border-ink/10 pt-8 md:border-t-0 md:pt-0 md:pl-10">
          <span className="font-display text-4xl tracking-wide text-ink md:text-5xl">
            {formatMetric(downloads?.totalDownloads, loaded)}
          </span>
          <span className="mt-3 text-[0.65rem] font-medium tracking-[0.32em] text-muted uppercase">
            Profile Downloads
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/55 px-5 py-10"
          onMouseDown={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="texture-paper relative max-h-[min(88vh,720px)] w-full max-w-xl overflow-y-auto bg-paper p-8 shadow-xl md:p-10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 text-[0.65rem] font-medium tracking-[0.28em] text-muted uppercase transition-colors hover:text-ink"
            >
              Close
            </button>

            <p
              id={titleId}
              className="text-[0.65rem] font-medium tracking-[0.32em] text-brass uppercase"
            >
              Site metrics
            </p>

            <div className="mt-8">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Website visitors
              </h2>
              <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    Since launch
                  </dt>
                  <dd className="font-display mt-2 text-3xl text-ink">
                    {formatMetric(visitors?.count, loaded)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    Active this week
                  </dt>
                  <dd className="font-display mt-2 text-3xl text-ink">
                    {formatMetric(visitors?.activeVisitors, loaded)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    Cities reached
                  </dt>
                  <dd className="font-display mt-2 text-3xl text-ink">
                    {formatMetric(visitors?.cities, loaded)}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-[0.65rem] font-medium tracking-[0.28em] text-brass uppercase">
                Top cities
              </p>
              {visitorData.topCities.length > 0 ? (
                <ol className="mt-4 space-y-4">
                  {visitorData.topCities.map((city, index) => (
                    <li
                      key={`${city.city}-${city.region ?? ""}`}
                      className="grid grid-cols-[2rem_1fr_auto] items-center gap-3"
                    >
                      <span className="text-[0.7rem] tracking-[0.12em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-ink">{city.city}</span>
                        {city.region && (
                          <span className="mt-0.5 block text-[0.7rem] text-ink-soft">
                            {city.region}
                          </span>
                        )}
                        <span className="mt-2 block h-px w-full bg-ink/10">
                          <span
                            className="block h-px bg-brass"
                            style={{
                              width: `${Math.max(6, (city.count / highestCityCount) * 100)}%`,
                            }}
                          />
                        </span>
                      </span>
                      <strong className="font-display text-lg font-normal text-ink">
                        {numberFormat.format(city.count)}
                      </strong>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-4 text-sm text-ink-soft">
                  City data will appear as guests visit from major cities.
                </p>
              )}
            </div>

            <div className="mt-10 border-t border-ink/10 pt-8">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Profile downloads
              </h2>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    Total downloads
                  </dt>
                  <dd className="font-display mt-2 text-3xl text-ink">
                    {formatMetric(downloads?.totalDownloads, loaded)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                    Unique downloaders
                  </dt>
                  <dd className="font-display mt-2 text-3xl text-ink">
                    {formatMetric(downloads?.uniqueDownloaders, loaded)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
