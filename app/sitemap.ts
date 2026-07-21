import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

// lastModified is stamped at build time — each deploy refreshes it.
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1, lastModified: LAST_MODIFIED },
    { url: `${SITE_URL}/privacy`, priority: 0.5, lastModified: LAST_MODIFIED },
    { url: `${SITE_URL}/terms`, priority: 0.5, lastModified: LAST_MODIFIED },
    {
      url: `${SITE_URL}/delete-account`,
      priority: 0.5,
      lastModified: LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/acceptable-use`,
      priority: 0.5,
      lastModified: LAST_MODIFIED,
    },
  ];
}
