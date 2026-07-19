# Branding assets (to be copied from the app repo)

Copy these from the app repo's `assets/branding/` into this folder (PRD §4.4):

- [ ] `wordmark-purple.png`
- [ ] `wordmark-slate.png`
- [ ] `wordmark-white.png`
- [ ] `playstore-icon-512.png`
- [ ] `playstore-icon-1024.png`
- [ ] `og-image-1200x630.png` (from `images/`) — referenced by OG/Twitter meta in `app/layout.tsx`
- [ ] `social-square-1024.png` (from `images/`)

Also:

- [ ] Replace `app/favicon.ico` with one generated from the Play Store icon.
- [ ] Real app screenshots (emulator/device captures) for the "How it works"
      section — never mock up fake screenshots.

Until the wordmark PNGs land, the site renders a styled text wordmark
(`components/wordmark.tsx`) — swap it to `next/image` once these exist.
