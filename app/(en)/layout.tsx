import type { Metadata, Viewport } from "next";
import { buildMetadata } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../fonts";

export const metadata: Metadata = buildMetadata("en");
export const viewport: Viewport = { themeColor: "#EDE7DC", width: "device-width", initialScale: 1 };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
