"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-to-top button — fixed bottom-right, appears after ~one viewport
 * of scrolling. White chevron on Royal Purple per the brand button rules.
 * The click omits `behavior` so the CSS `scroll-behavior` decides — smooth
 * normally, instant under prefers-reduced-motion.
 */
export function ScrollTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`scrolltop${shown ? " shown" : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 14.5l6-6 6 6" />
      </svg>
    </button>
  );
}
