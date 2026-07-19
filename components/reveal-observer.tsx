"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal driver, ported from hang-out-designs/landing.js.
 * Adds `.in` to `.reveal` elements as they enter the viewport, lights the
 * week grid's matched column, and reveals the match callout. CSS handles
 * `prefers-reduced-motion` (transitions off) and the no-JS fallback.
 */
export function RevealObserver() {
  useEffect(() => {
    const all = (sel: string, root: ParentNode = document) =>
      Array.from(root.querySelectorAll<HTMLElement>(sel));

    const reveal = (el: HTMLElement) => {
      el.classList.add("in");
      if (el.classList.contains("wg")) {
        all(".col.match", el).forEach((c) => c.classList.add("lit"));
      }
      const cal = el.querySelector(".matchcallout");
      if (cal) cal.classList.add("in");
    };

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < (window.innerHeight || 0) * 0.92 && r.bottom > 0;
    };

    const targets = all(".reveal").concat(all(".wg")).concat(all(".matchcallout"));
    // immediate pass so above-the-fold content never waits on the observer
    targets.forEach((el) => {
      if (inView(el)) reveal(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    // safety net: nothing stays invisible if the observer never fires
    const t = setTimeout(() => {
      targets.forEach((el) => {
        if (!el.classList.contains("in")) reveal(el);
      });
    }, 2600);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
