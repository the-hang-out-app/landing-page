import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SITE_URL, TAGLINE } from "@/lib/config";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const DESCRIPTION =
  "hang:out lines up your friends' shifts, classes and 9-to-5s so you can find the time you're all free. Friends only ever see free or busy — never your event details.";

/*
 * Social preview image — kept deliberately small: WhatsApp silently drops
 * preview images over ~300KB, which is why the original 740KB export
 * rendered a text-only card. It's now a 173KB dithered 256-colour PNG
 * (alpha flattened onto the brand purple — the card is fully opaque, so
 * nothing is lost). The pristine export lives beside it as
 * `og-image-source.png`; re-optimise from that if the artwork changes.
 * Explicit width/height/type let scrapers lay out the large card without
 * downloading the file first.
 */
const OG_IMAGE = {
  url: "/branding/og-image-1200x630.png",
  width: 1200,
  height: 630,
  alt: "hang:out — Find the night you're all free.",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `hang:out — ${TAGLINE}`,
  description: DESCRIPTION,
  applicationName: "hang:out",
  alternates: { canonical: "/" },
  openGraph: {
    title: `hang:out — ${TAGLINE}`,
    description:
      "The availability radar for friends who work different hours. Find the night you're all free.",
    url: SITE_URL,
    siteName: "hang:out",
    images: [OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `hang:out — ${TAGLINE}`,
    description: "The availability radar for friends who work different hours.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#6D28D9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds .js pre-hydration
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: extensions (e.g. ColorZilla) inject attributes on <body> */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* FOUC guard: .reveal elements are only hidden once html.js is set */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ScrollTop />
        {/* Vercel Web Analytics — cookieless, so no consent banner needed
            (PRD: no tracking cookies). No-op outside Vercel deployments. */}
        <Analytics />
      </body>
    </html>
  );
}
