# PRD — hang:out landing site (`the.hang-out.app`)

You are building the **marketing + informational website** for **hang:out**,
an Android-first mobile app. This document is self-contained: everything you
need — brand tokens, copy, structure, technical requirements — is in here.
Where a real file is needed (logos, screenshots), ask the human; never
fabricate an asset, statistic, testimonial, or press mention.

---

## 1. The product you are marketing

**hang:out is an availability radar for friends with mismatched schedules.**
Nurses on rotations, developers on sprints, students, shift workers — people
who *want* to see each other but can never find the night that works. The app
reads each person's calendar **on their own device**, reduces it to plain
free/busy time ranges, and shows the group the one thing group chats can't:
**when you're all free** — then turns that window into a plan with one tap
(RSVP, live responses, a confirmed hang).

**The one invariant (this is the soul of the brand — the site must lead with
it, verbatim where possible):**

> Friends only ever see **free or busy** — never your event names, notes, or
> details. Raw calendar events never leave your phone.

Status at time of writing: v1 is code-complete, entering a closed test on
Google Play (12 testers / 14 days) before public release. **There is no
public download yet** — the primary CTA is a waitlist (§6), swapped for a
Play Store badge at launch (build both states now, toggled by one flag).

- Tagline (canonical): **"Find the overlap."**
- Long tagline: **"Find the night you're all free."**
- Subline: "Different jobs, different hours. See the time you're all free —
  at a glance."
- Platform: Android first (Google Play). iOS: "later" — say so honestly.
- Price: free.

## 2. Purpose & audience of the site

1. **Explain** the product in one scroll to a person who just got a
   hang:out invite link from a friend.
2. **Reassure** on privacy — the calendar permission is scary; the honest
   architecture is the answer and the differentiator.
3. **Capture intent**: waitlist signups + a contact form (via Resend, §6).
4. **Host the policy pages** Google Play requires (§7) — these are load-
   bearing for the app's store listing, not an afterthought.

Audience: 20s–30s friends-of-users on phones (assume ≥70% mobile traffic),
plus Play reviewers and the app's academic assessors. Tone: warm, plain,
a little playful, never corporate. Short sentences. No growth-hack clichés,
no fake urgency, no invented numbers.

## 3. Domain & deployment

- Site lives at **`https://the.hang-out.app`** (the subdomain reads as
  "the hang-out app"). The human owns `hang-out.app` (purchased 2026-07-18)
  and will add the DNS record (CNAME) at the registrar.
- Recommend Vercel for hosting (native Next.js, free tier is fine); any
  static-capable host with one serverless route works.
- The bare apex `hang-out.app` should redirect to `the.hang-out.app`
  (configure at host/registrar level; document what the human must click).
- HTTPS everywhere; no www variant.

## 4. Brand system (use EXACTLY these tokens)

hang:out has a strict visual language called **the availability language**:
cell colour encodes state — **busy recedes** (Light Lavender), **free is
negative space** (Cream shows through), **a match is the reward** (Coral).
Rows are friends, columns are days. The site's hero recreates this grid.

### 4.1 Palette (light — the default and canonical look)

| Token | Hex | Role on the site |
|---|---|---|
| Cream | `#FAF9F6` | Page background — free time is negative space |
| Light Lavender | `#F3E8FF` | Cards, busy cells, section surfaces |
| Soft Lavender | `#C4B5FD` | Accents, avatar circles, borders |
| Royal Purple | `#6D28D9` | **ALL buttons/CTAs and links**; logo; white text on it |
| Coral | `#FF7F7F` | **Reward ONLY** — the matched column, the "everyone's free" moment. NEVER a button, never large fills, text on it is always Dark Slate |
| Coral wash | `rgba(255,127,127,0.16)` | Soft background for reward cards |
| Dark Slate | `#1F2937` | All body text; the only text colour on Coral |
| White | `#FFFFFF` | Text on Royal Purple only |
| Error | `#B3261E` | Form validation only (never Coral for errors) |

**Contrast contract (non-negotiable, WCAG AA):** white-on-Royal-Purple ✓
(~7:1). **White-on-Coral ✗ (~2.4:1) — forbidden.** Text on Coral = Dark
Slate. Coral must never read as a button or an error.

### 4.2 Dark mode (optional, nice-to-have)

The brand has a specified dark palette the mobile app hasn't shipped yet —
the site MAY implement `prefers-color-scheme: dark` using exactly:
Deep Midnight `#0D0B14` (bg) · Twilight Gray `#1A1625` (surfaces) ·
Luminous Purple `#A855F7` (CTAs) · Coral Glow `#FF8A8A` (reward) ·
Starlight White `#F3F0F8` (text). If you can't keep the same AA discipline
in dark, ship light-only.

### 4.3 Type & shape

- Font: a clean neutral sans. System stack or Inter (self-hosted via
  `next/font`, no external CDN at runtime). The app uses system Roboto —
  don't introduce a decorative face.
- Wordmark: always lowercase **hang:out** with the colon; the colon may be
  Coral against slate/purple contexts (see wordmark assets). Never
  "HangOut", "Hangout", or "hang-out" in display copy.
- Scale (mobile-app reference, adapt up for web): display 34/700,
  title 24/700, heading 18/600, body 16/400, label 14/600, caption 12/400.
  Web hero can go larger (~clamp 40–64px) but keep weights.
- Radii: 6 / 10 / 16 / pill. Spacing rhythm: 4/8/12/16/24/32.
- Tap/click targets ≥ 48px.

### 4.4 Assets (ask the human to copy these from the app repo)

From `assets/branding/`: `wordmark-purple.png`, `wordmark-slate.png`,
`wordmark-white.png`, `playstore-icon-512.png`, `playstore-icon-1024.png`,
`images/og-image-1200x630.png` (ready-made OG image),
`images/social-square-1024.png`. Real app screenshots: the human provides
emulator/device captures — **never mock up fake screenshots**.

## 5. Page structure & copy

One long scrolling home page + three standalone routes (§7). Section order:

1. **Hero** — wordmark, H1 **"Find the overlap."**, sub "Different jobs,
   different hours. See the night you're all free — at a glance.", primary
   CTA (waitlist → scrolls to form; post-launch: Play badge). The visual:
   an **animated availability grid** — 4 friend rows (avatar initials on
   Soft Lavender) × 7 day columns; cells stagger in as Light Lavender
   (busy) or Cream outline (free); then one column where everyone is free
   fills **Coral with a gentle pulse** and a label chip: "Everyone's free
   Saturday ✓". Build it in HTML/CSS + framer-motion (no video, no canvas).
   Under `prefers-reduced-motion`: render the final state statically, no
   pulse (this is a hard brand rule, same as the app).
2. **The problem** — three short beats, no jargon: "Seven texts. Two
   maybes. No plan." → group scheduling dies in the chat. Keep it to ~40
   words with three Phosphor icons (e.g. `ChatsCircle`, `CalendarX`,
   `HourglassMedium`).
3. **How it works** — three steps, each a card:
   1. *Bring your rhythm* — connect your calendar (read on-device) or add
      shifts by hand. Nights, rotations, 9-to-5s — all welcome.
   2. *See the overlap* — the radar shows each day's free count and lights
      up the windows when the whole circle lines up.
   3. *Make it a plan* — pick a time, friends RSVP, it's on. If plans
      change, the radar just updates.
4. **Privacy (the centrepiece — give it room)** — dark-slate or lavender
   section, lock icon, the invariant verbatim: "Friends only ever see
   **free or busy** — never your event names or details." Three proof
   points: *Titles never leave your phone* (events are reduced to busy
   ranges on-device) · *Friends-only, enforced in the database* (row-level
   security — a stranger sees zero rows) · *Delete means delete* (one tap
   removes your account and every trace). Link → `/privacy`.
5. **Features strip** — short grid, six items max: per-day free counts ·
   truthful local times across timezones · manual shifts & repeat rules ·
   one-tap plans with live RSVP · rare-overlap alerts ("hang:out only
   pings you when it's worth it") · works with the calendar you already
   have. Phosphor icons throughout, one weight family (duotone or regular
   — pick one and stick to it).
6. **FAQ** (accordion, `<details>`-based for a11y): Can my friends see my
   events? (No — free/busy only, on-device reduction) · What does it cost?
   (Free) · Where is it available? (Android closed test now, Play launch
   next; leave email to get in) · iPhone? (Planned after Android) · What
   happens when I delete my account? (Everything cascades server-side;
   also see `/delete-account`) · Do you sell data? (No. There's nothing to
   sell — we don't have your events.)
7. **Waitlist / contact** (§6) + footer: wordmark, "Find the overlap.",
   links to `/privacy`, `/delete-account`, contact email, GitHub org
   (`the-hang-out-app`) optional. No social icons for accounts that don't
   exist.

Copy rules: sentence case everywhere; "hang:out" never starts a sentence
capitalised differently; avoid "sync" promises (availability updates when
the app is opened — don't claim real-time background magic); never show
Coral for anything except the everyone-free moment.

## 6. Waitlist & contact form (Resend)

- One form, two intents via a select or tabs: **"Get launch updates"**
  (email only) and **"Say hello"** (email + message).
- Implementation: a single **Next.js route handler** `POST /api/contact`
  (Node runtime, not edge, for the Resend SDK) using the official `resend`
  npm package.
  - Waitlist entries: `resend.contacts.create` into a Resend **Audience**
    (id via env) — this gives the human a real list to email at launch.
  - Messages: `resend.emails.send` to `hello@hang-out.app`, with
    `reply_to` set to the submitter.
  - Sender: `no-reply@hang-out.app` (domain is being verified in Resend by
    the human — the SAME Resend account also sends the app's auth emails;
    ask them to create a **separate API key** named `hangout-landing` so
    keys can be revoked independently).
- Env vars (server-only, never `NEXT_PUBLIC_`): `RESEND_API_KEY`,
  `RESEND_AUDIENCE_ID`, `CONTACT_TO=hello@hang-out.app`. Provide
  `.env.example` with empty values; `.env*` git-ignored.
- Validation with `zod` (shared schema client+server), a honeypot field,
  and basic per-IP rate limiting (in-memory LRU is fine at this scale).
  Errors render in the Error red, inline, with the field. Success state:
  "You're on the list — we'll only email you when it matters." (match the
  app's only-when-it's-worth-it notification voice).
- Never expose the API key client-side; never log submitted emails.

## 7. Standalone routes (required — Google Play depends on them)

| Route | Purpose |
|---|---|
| `/privacy` | Privacy policy. The human supplies/approves final legal text; draft it from the architecture: on-device calendar reduction, free/busy ranges only, Supabase (EU region) stores account basics (email, display name, avatar) + busy ranges, row-level security, no sale/sharing of data, contact email, deletion rights. Plain language first, headings, updated-date. |
| `/delete-account` | Account-deletion page for the Play Data safety form: explains the in-app path (**You tab → Delete account**, immediate, cascades everything server-side) and an email fallback (`hello@hang-out.app`) for users who can't access the app. |
| `/api/contact` | The Resend handler (§6). |

These URLs, once submitted to Play, must stay stable. The Play console will
reference them as `hang-out.app/...` or `the.hang-out.app/...` — implement
them here; the apex redirect (§3) covers the shorter form.

## 8. Tech stack & implementation requirements

- **Next.js** (current stable, App Router, TypeScript, static generation
  for every page; only `/api/contact` is dynamic).
- **Tailwind CSS v4** — CSS-first config: define the §4 palette as
  `@theme` tokens (`--color-cream`, `--color-royal-purple`, …) in
  `globals.css`; no `tailwind.config.js` unless genuinely needed.
- **Phosphor icons** (`@phosphor-icons/react`) — one weight family
  site-wide; import icons individually.
- **framer-motion** — scroll-reveal (subtle, ≤300ms, small distances),
  the hero grid stagger + Coral pulse. EVERY animation gated on
  `useReducedMotion()`; the site must be fully readable with JS disabled
  (motion is enhancement, content is server-rendered).
- `next/font` for self-hosted type; `next/image` for all imagery.
- No external runtime CDNs, no cookie banners needed (no tracking
  cookies); if analytics are wanted later, PostHog EU env-gated — skip in
  v1.
- Repo: its own project (e.g. `landing/` in the org — the human decides);
  ESLint + Prettier; conventional commits.

## 9. Quality bar (definition of done)

- Lighthouse (mobile): Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95.
- WCAG AA: the §4 contrast contract holds everywhere; keyboard-navigable
  accordion and form; visible focus states (Royal Purple ring); alt text
  on all imagery; `prefers-reduced-motion` honoured (verify by toggling).
- Responsive 360px → 1440px; the hero grid must not overflow at 360px.
- Complete `<head>`: title "hang:out — Find the overlap.", meta
  description, OG/Twitter cards using `og-image-1200x630.png`, favicon
  from the icon asset, `sitemap.xml` + `robots.txt`.
- Form: happy path + validation + rate-limit path all tested locally with
  a real Resend test key before handoff.
- Zero fabricated content: no testimonials, no user counts, no press
  logos, no store badge until the listing is live.

## 10. Out of scope (v1 of the site)

Blog/CMS · localisation · app deep-link handling (`hangout://` stays
app-side) · analytics dashboards · A/B testing · newsletter beyond the
Resend audience · iOS badges.
