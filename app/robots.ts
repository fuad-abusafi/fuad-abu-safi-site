import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome the big crawlers, including AI answer engines —
      // increasingly how people discover athletes.
      { userAgent: ["Googlebot", "Googlebot-Image", "Bingbot"], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
