import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `hang:out — ${TAGLINE}`,
  description: DESCRIPTION,
  openGraph: {
    title: `hang:out — ${TAGLINE}`,
    description:
      "The availability radar for friends who work different hours. Find the night you're all free.",
    url: SITE_URL,
    siteName: "hang:out",
    images: ["/branding/og-image-1200x630.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `hang:out — ${TAGLINE}`,
    description: "The availability radar for friends who work different hours.",
    images: ["/branding/og-image-1200x630.png"],
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
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
