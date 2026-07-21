"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { LensMark } from "@/components/landing-bits";
import { IS_LAUNCHED, PLAY_STORE_URL } from "@/lib/config";

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

export function SiteNav() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 12,
    () => false,
  );

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap row">
        <Link
          href="/"
          className="wm"
          style={{
            fontSize: 26,
            display: "inline-flex",
            alignItems: "center",
            gap: 11,
          }}
        >
          <LensMark id="nav" />
          hang<span className="c">:</span>out
        </Link>
        <nav className="links">
          <Link href="/#how">How it works</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#plans">Plans</Link>
          <Link href="/#privacy">Privacy</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        {IS_LAUNCHED ? (
          <a href={PLAY_STORE_URL} className="nav-cta">
            Get the app
          </a>
        ) : (
          <Link href="/#get" className="nav-cta">
            Join waitlist
          </Link>
        )}
      </div>
    </header>
  );
}
