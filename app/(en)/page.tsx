import type { Metadata } from "next";
import Site from "@/components/Site";
import { buildMetadata, buildJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en");

export default function Home() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd("en")) }} />
      <Site lang="en" />
    </>
  );
}
