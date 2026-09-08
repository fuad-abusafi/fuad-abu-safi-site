import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces a plain /out folder hostable free on Netlify,
  // GitHub Pages, Cloudflare Pages or Vercel with no Node server.
  output: "export",

  // Static export can't run the built-in image optimiser, so images are
  // pre-optimised at build time (WebP + JPEG fallback, sized srcsets).
  images: { unoptimized: true },

  // Each route gets its own folder + index.html — required by plain static
  // hosts and keeps canonical URLs consistent.
  trailingSlash: true,

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
