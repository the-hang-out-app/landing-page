import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/privacy`, priority: 0.5 },
    { url: `${SITE_URL}/delete-account`, priority: 0.5 },
  ];
}
