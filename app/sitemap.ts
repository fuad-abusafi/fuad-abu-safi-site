import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${SITE_URL}/`, ar: `${SITE_URL}/ar/` } },
    },
    {
      url: `${SITE_URL}/ar/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${SITE_URL}/`, ar: `${SITE_URL}/ar/` } },
    },
  ];
}
