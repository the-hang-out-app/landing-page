/**
 * FAQ content (PRD §5.6) — single source of truth for the visible
 * accordion AND the FAQPage JSON-LD, so the structured data always
 * matches what's on the page (a Google requirement).
 *
 * Answers are plain text; an optional `link` is appended in the UI
 * (and folded into the JSON-LD text as plain words).
 */
export type FaqItem = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Can my friends see my calendar events?",
    a: "No. Friends only ever see free or busy. Your events are reduced to plain time ranges on your own device — names, notes and details never leave your phone.",
  },
  {
    q: "What does hang:out cost?",
    a: "Nothing. hang:out is free.",
  },
  {
    q: "Where is hang:out available?",
    a: "On Android — it's in a closed test right now, with a Google Play launch next. Leave your email in the form below and we'll tell you the moment you can get in.",
  },
  {
    q: "Is there an iPhone version?",
    a: "Planned — after Android. We'd rather ship one platform well than two badly.",
  },
  {
    q: "What happens when I delete my account?",
    a: "Everything is removed server-side, immediately: your profile, your availability, your plans — every trace.",
    link: { href: "/delete-account", label: "How deletion works" },
  },
  {
    q: "Do you sell my data?",
    a: "No. There's nothing to sell — we don't have your events, only free/busy ranges you chose to share with friends.",
    link: { href: "/privacy", label: "Read the privacy policy" },
  },
];
