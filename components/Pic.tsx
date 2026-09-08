import manifest from "@/lib-image-manifest.json";

type Entry = { w: number; h: number; ar: number; jpg: number[]; webp: number[] };
const M = manifest as Record<string, Entry>;

/**
 * Static export can't use next/image, so this serves pre-built WebP with a
 * JPEG fallback plus a proper srcset. width/height are always set to reserve
 * space, which keeps Cumulative Layout Shift at zero — a Core Web Vital.
 */
export default function Pic({
  name, alt, sizes, className, priority = false, fetchPriority,
}: {
  name: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
}) {
  const e = M[name];
  if (!e) return null;
  const webp = e.webp.map((w) => `/photos/${name}-${w}.webp ${w}w`).join(", ");
  const jpg = e.jpg.map((w) => `/photos/${name}-${w}.jpg ${w}w`).join(", ");
  const largest = e.jpg[e.jpg.length - 1] ?? e.w;

  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={`/photos/${name}-${largest}.jpg`}
        srcSet={jpg}
        sizes={sizes}
        alt={alt}
        width={e.w}
        height={e.h}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      />
    </picture>
  );
}
