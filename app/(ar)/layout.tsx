import type { Metadata, Viewport } from "next";
import { buildMetadata } from "@/lib/seo";
import "../fonts";

export const metadata: Metadata = buildMetadata("ar");
export const viewport: Viewport = { themeColor: "#EDE7DC", width: "device-width", initialScale: 1 };

// A separate root layout so the Arabic page ships lang="ar" dir="rtl" on the
// <html> element itself — Google uses that to decide which language queries
// this page should answer.
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
