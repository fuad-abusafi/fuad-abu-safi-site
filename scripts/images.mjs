// Regenerates responsive WebP + JPEG variants and the image manifest.
// Usage:  npm i -D sharp   &&   node scripts/images.mjs
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/photos";
const WIDTHS = [480, 800, 1200, 1600];

const files = (await readdir(DIR)).filter(
  (f) => f.endsWith(".jpg") && !/-\d+\.jpg$/.test(f)
);

const manifest = {};
for (const f of files) {
  const name = path.basename(f, ".jpg");
  const src = path.join(DIR, f);
  const { width: w, height: h } = await sharp(src).metadata();
  const entry = { w, h, ar: +(w / h).toFixed(4), jpg: [], webp: [] };
  for (const tw of WIDTHS) {
    if (tw > w) continue;
    await sharp(src).resize(tw).jpeg({ quality: 80, progressive: true })
      .toFile(path.join(DIR, `${name}-${tw}.jpg`));
    await sharp(src).resize(tw).webp({ quality: 78 })
      .toFile(path.join(DIR, `${name}-${tw}.webp`));
    entry.jpg.push(tw); entry.webp.push(tw);
  }
  manifest[name] = entry;
  console.log(`${name}: ${entry.jpg.join(", ")}`);
}
await writeFile("lib-image-manifest.json", JSON.stringify(manifest, null, 1));
console.log(`\nmanifest written for ${Object.keys(manifest).length} images`);
