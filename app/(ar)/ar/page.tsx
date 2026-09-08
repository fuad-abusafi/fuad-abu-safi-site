import type { Metadata } from "next";
import Site from "@/components/Site";
import { buildMetadata, buildJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("ar");

export default function HomeAr() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("ar")) }} />
      <Site lang="ar" />
    </>
  );
}
