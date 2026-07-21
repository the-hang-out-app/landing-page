import { CONTACT_EMAIL, SITE_URL } from "@/lib/config";
import { FAQ_ITEMS } from "@/lib/faq";

/**
 * JSON-LD for search engines and AI crawlers. Facts only — no ratings,
 * counts or reviews (zero-fabrication rule). FAQPage mirrors lib/faq.ts,
 * so it always matches the visible accordion.
 */
const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: "hang:out",
  url: SITE_URL,
  logo: `${SITE_URL}/branding/playstore-icon-512.png`,
  email: CONTACT_EMAIL,
};

const app = {
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "hang:out",
  operatingSystem: "Android",
  applicationCategory: "SocialNetworkingApplication",
  description:
    "An availability radar for friends with mismatched schedules: see the night you're all free — friends only ever see free or busy, never event details.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@id": `${SITE_URL}/#org` },
  url: SITE_URL,
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.link
        ? `${item.a} See ${SITE_URL}${item.link.href}`
        : item.a,
    },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, app, faqPage],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
