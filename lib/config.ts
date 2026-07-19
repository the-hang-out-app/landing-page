/**
 * Site-wide configuration (PRD §1, §3).
 *
 * IS_LAUNCHED toggles the primary CTA between the two built states:
 *   false → waitlist (scrolls to the form)
 *   true  → Google Play badge (only once the store listing is live)
 * Flip via NEXT_PUBLIC_LAUNCHED=true at build time.
 */
export const IS_LAUNCHED = process.env.NEXT_PUBLIC_LAUNCHED === "true";

export const SITE_URL = "https://the.hang-out.app";
export const SITE_NAME = "hang:out";
export const TAGLINE = "Find the overlap.";
export const CONTACT_EMAIL = "hello@hang-out.app";
export const GITHUB_ORG_URL = "https://github.com/the-hang-out-app";

/** Set to the real Play Store listing URL at launch. */
export const PLAY_STORE_URL = "";
