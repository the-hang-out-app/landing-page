/**
 * FX — the app design-system tokens, ported from
 * hang-out-designs/flex-ui.jsx so the landing's phone mockups stay
 * pixel-consistent with the design boards.
 */
export const FX = {
  lavender: "#C4B5FD",
  plum: "#6D28D9",
  plumDeep: "#5B21B6",
  coral: "#FF7F7F",
  coralDeep: "#C2453E",
  coralWash: "#FFEAEA",
  // legacy "sage" keys map onto the coral reward language (kept for fidelity)
  sage: "#FF7F7F",
  sageDeep: "#C2453E",
  sageWash: "#FFEAEA",
  cream: "#FAF9F6",
  surface: "#F3E8FF",
  mist: "#EAEAEA",
  charcoal: "#1F2937",
  sub: "#6B7280",
  /* AA contrast on white (was #9CA3AF ≈ 2.5:1 — flagged by Lighthouse) */
  faint: "#6B7280",
  line: "rgba(31,41,55,0.10)",
  lineSoft: "rgba(31,41,55,0.05)",
  lavWash: "#F3E8FF",
  lavWash2: "#E9D5FF",
  err: "#C0544C",
  errWash: "#F8EAE8",
  white: "#FFFFFF",
  font: 'var(--font-roboto), "Helvetica Neue", system-ui, Arial, sans-serif',
} as const;
