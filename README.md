<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/branding/wordmark-white.png">
    <img src="public/branding/wordmark-purple.png" alt="hang:out" width="320">
  </picture>
</p>

<p align="center">
  <strong>Find the overlap.</strong><br>
  The marketing site for hang:out — an availability radar for friends with mismatched schedules.
</p>

<p align="center">
  <a href="https://github.com/the-hang-out-app/landing-page/actions/workflows/ci.yaml">
    <img src="https://github.com/the-hang-out-app/landing-page/actions/workflows/ci.yaml/badge.svg" alt="CI">
  </a>
</p>

---

Lives at [the.hang-out.app](https://the.hang-out.app) 🌍 — one scrolling page that explains the app, reassures on privacy, collects a launch waitlist, and hosts the policy pages Google Play depends on. The full product spec (`prd.md`) and release runbook (`RELEASE.md`) are kept locally and git-ignored — internal planning, not repo content.

## ✨ What's on the page

- 🗓️ **The availability grid** — busy recedes, free is negative space, the match glows Coral
- 📱 **Real app screens** — shift entry, calendar sync, make-a-plan, and live RSVP, rendered in-frame
- 🔒 **Privacy centrepiece** — friends only ever see *free or busy*, never event details
- 🔔 **Features strip** — rare-overlap alerts, per-day free counts, truthful timezones & more
- ❓ **FAQ** — native `<details>` accordion, mirrored in FAQPage JSON-LD
- 💌 **Waitlist + say-hello form** — one form, two intents, wired to Resend

## 🛠️ Stack

Next.js (App Router, TypeScript, static generation) · Tailwind CSS v4 (brand tokens as `@theme` in `app/globals.css`) · CSS + IntersectionObserver animations (reduced-motion gated, readable without JS) · Resend for waitlist + contact · Phosphor icons.

## 🚀 Develop

```bash
pnpm install
cp .env.example .env.local   # fill in Resend keys (see below)
pnpm dev
```

Without `RESEND_API_KEY`, form submissions are simulated locally so the UI can be developed offline. ✉️

## 🔐 Environment

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Separate key named `hangout-landing` (server-only) |
| `RESEND_AUDIENCE_ID` | Resend Audience the waitlist writes into |
| `CONTACT_TO` | Where "Say hello" messages go |
| `RESEND_FROM` | Optional sender override (sandbox testing only) |
| `NEXT_PUBLIC_LAUNCHED` | `"true"` swaps the waitlist CTA for the Play badge |

## 🗂️ Structure

- `app/page.tsx` — the one-scroll home: hero → trust strip → how it works → the grid → feature rows (shifts · calendar · plans · RSVP) → features strip → privacy → FAQ → waitlist
- `components/` — section components + shared bits (nav, footer, reveal observer, week grid, signup form)
- `components/phone/` — the in-frame app mockups (device shell + five app screens)
- `app/privacy` · `app/terms` · `app/delete-account` · `app/acceptable-use` — legal routes; **URLs must stay stable once submitted to the Play console** ⚠️
- `app/api/contact` — Resend route handler: zod validation, honeypot, per-IP rate limit, branded email template
- `lib/config.ts` — site constants + `IS_LAUNCHED` flag
- `public/branding/` — brand assets · `public/llms.txt` — AI-crawler summary

## ☁️ Deploy (Vercel)

1. Import the repo in Vercel; add the Resend env vars (Production).
2. Add `the.hang-out.app` under the project's Domains — the domain is registered through Vercel, so DNS configures itself.
3. Add the apex `hang-out.app` → **Redirect to `the.hang-out.app`** (308).
4. HTTPS is automatic; no `www` variant. ✅

## ✅ Before handoff (PRD §9)

- [x] Brand assets in `public/branding/` + favicon from the Play icon
- [x] `prefers-reduced-motion` verified — static final states, no pulse
- [x] Responsive 360px → 1440px — no horizontal overflow
- [x] Form tested against real Resend — waitlist, say-hello, honeypot & rate-limit paths
- [x] CI: lint + typecheck + build on every push
- [ ] Privacy/Terms/AUP text approved by a human 📝
- [ ] Resend domain verified → production sender + `hello@` receiving
- [ ] Lighthouse mobile ≥ 95 across Performance / Accessibility / SEO 🎯
