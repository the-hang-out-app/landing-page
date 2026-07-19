# hang:out — landing site

Marketing + informational site for **hang:out**, an availability radar for
friends with mismatched schedules. Lives at
[the.hang-out.app](https://the.hang-out.app). The full product spec lives in
`prd.md`, kept locally and git-ignored — internal planning, not repo content.

## Stack

Next.js (App Router, TypeScript, static generation) · Tailwind CSS v4 for
the standalone routes + the ported design system CSS in `app/globals.css` ·
Resend for waitlist + contact. The home page implements the approved design
in `hang-out-designs/` (`hangout-landing.html` + `landing.css` +
`landing.js`); the phone mockups are ports of its `flex-*` React screens
(`components/phone/`). Animations are CSS + IntersectionObserver, gated on
`prefers-reduced-motion` and readable without JS.

## Develop

```bash
pnpm install
cp .env.example .env.local   # fill in Resend keys (see below)
pnpm dev
```

Without `RESEND_API_KEY`, form submissions are simulated locally so the UI
can be developed offline.

## Environment

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Separate key named `hangout-landing` (server-only) |
| `RESEND_AUDIENCE_ID` | Resend Audience the waitlist writes into |
| `CONTACT_TO` | Where "Say hello" messages go (`hello@hang-out.app`) |
| `NEXT_PUBLIC_LAUNCHED` | `"true"` swaps the waitlist CTA for the Play badge |

## Structure

- `app/page.tsx` — the one-scroll home, composed of section components:
  hero → trust strip → how it works → the availability grid → four feature
  rows (manual shifts · calendar sync · make a plan · live RSVP) → features
  strip → privacy → waitlist/contact
- `components/` — the section components plus shared bits (nav, footer,
  wordmark/lens mark, scroll-reveal observer, animated week grid, signup form)
- `components/phone/` — the in-frame app mockups (Samsung device shell +
  primitives + five app screens: home, shifts, calendar sync, make-a-plan,
  RSVP), ported from the `hang-out-designs/flex-*` sources
- `app/privacy`, `app/delete-account` — Play-required policy routes.
  **URLs must stay stable once submitted to the Play console.**
- `app/api/contact` — Resend route handler (Node runtime): zod validation,
  honeypot, per-IP rate limit
- `lib/config.ts` — site constants + `IS_LAUNCHED` flag
- `public/branding/` — brand assets (see its README for the list)
- `hang-out-designs/` — the approved design + app-screen sources the home
  page is built from (reference only; excluded from lint)

## Deploy (Vercel)

1. Import the repo in Vercel; set the three Resend env vars (Production).
2. Add domain `the.hang-out.app` in the Vercel project → it shows a CNAME
   record → add that CNAME at the registrar for host `the`.
3. Add the apex `hang-out.app` to the same project and mark it
   **Redirect to `the.hang-out.app`** (Vercel handles the 308); at the
   registrar, point the apex A/ALIAS record at Vercel as instructed.
4. HTTPS is automatic; no www variant.

## Before handoff (PRD §9)

- [x] Brand assets copied into `public/branding/` + favicon swapped
      (`app/icon.png` from the Play Store icon)
- [x] `prefers-reduced-motion` verified — static final states, no pulse
- [x] Responsive 360px → 1440px — hero grid + phone mockups don't overflow
- [ ] Privacy policy text approved by the human
- [ ] Form tested with a real Resend test key (happy path, validation,
      rate limit)
- [ ] Lighthouse mobile ≥ 95 across Performance / Accessibility / SEO
