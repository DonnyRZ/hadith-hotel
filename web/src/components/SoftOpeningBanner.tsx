"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "hadith-soft-opening-dismissed";
const MESSAGE = "Soft Opening September 5th 2026";
/** Enough copies so each half fills ≥ viewport on ultrawide */
const COPIES_PER_GROUP = 8;

export function SoftOpeningBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      /* private mode */
    }
    setReady(true);
  }, []);

  if (ready && dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
  };

  const renderGroup = (key: string) => (
    <div key={key} className="soft-opening-banner__group">
      {Array.from({ length: COPIES_PER_GROUP }, (_, i) => (
        <span key={i} className="soft-opening-banner__segment">
          <span className="soft-opening-banner__rule" aria-hidden="true" />
          <span className="soft-opening-banner__text font-display">{MESSAGE}</span>
        </span>
      ))}
    </div>
  );

  return (
    <aside className="soft-opening-banner" aria-label="Soft opening announcement" role="status">
      <div className="soft-opening-banner__viewport">
        <p className="soft-opening-banner__static font-display">{MESSAGE}</p>
        <div className="soft-opening-banner__marquee" aria-hidden="true">
          <div className="soft-opening-banner__track">
            {renderGroup("a")}
            {renderGroup("b")}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="soft-opening-banner__dismiss"
        onClick={dismiss}
        aria-label="Dismiss soft opening announcement"
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}
