"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "hadith-soft-opening-dismissed";
const MESSAGE = "Soft Opening September 5th 2026";
const BODY_CLASS = "has-soft-opening";

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

  useEffect(() => {
    if (!ready) return;
    const root = document.body;
    if (dismissed) {
      root.classList.remove(BODY_CLASS);
    } else {
      root.classList.add(BODY_CLASS);
    }
    return () => {
      root.classList.remove(BODY_CLASS);
    };
  }, [ready, dismissed]);

  if (ready && dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
  };

  const segment = (
    <span className="soft-opening-banner__segment">
      <span className="soft-opening-banner__rule" aria-hidden="true" />
      <span className="soft-opening-banner__text font-display">{MESSAGE}</span>
    </span>
  );

  return (
    <aside className="soft-opening-banner" aria-label="Soft opening announcement" role="status">
      <div className="soft-opening-banner__viewport">
        <p className="soft-opening-banner__static font-display">{MESSAGE}</p>
        <div className="soft-opening-banner__marquee" aria-hidden="true">
          <div className="soft-opening-banner__track">
            {segment}
            {segment}
            {segment}
            {segment}
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
