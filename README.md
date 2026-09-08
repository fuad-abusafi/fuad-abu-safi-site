# Fuad Abu Safi — Athlete Site (Next.js)

Bilingual static site. English at `/`, Arabic at `/ar/`.
Next.js 16 · App Router · TypeScript · static export.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes the static site to ./out
```

`npm run build` produces a plain `out/` folder — no Node server needed.

---

## 1. Set your domain BEFORE you deploy

Canonical URLs, the sitemap and the structured data all read one constant.
Open `lib/content.ts` and set:

```ts
export const SITE_URL = "https://fuadabusafi.com";
```

Or set `NEXT_PUBLIC_SITE_URL` in your host's environment variables.
**If this is wrong, Google indexes the wrong URLs.** Do this first.

---

## 2. Deploy

### Vercel (recommended — built by the Next.js team)
1. Push this folder to a GitHub repo
2. vercel.com -> New Project -> import the repo
3. It detects Next.js automatically. Deploy.
4. Add your custom domain in Project Settings -> Domains

### Netlify
netlify.com -> Import from GitHub. Build command `npm run build`,
publish directory `out`.

### Cloudflare Pages
Framework preset: Next.js (Static HTML Export). Output directory `out`.

### Any plain host
Run `npm run build` and upload the contents of `out/`.

---

## 3. Getting found in Google — what actually works

Be realistic about what a website can and cannot do.

**Achievable: rank #1 for "Fuad Abu Safi".** Almost nobody competes for your
name. With the steps below you should own it within a few weeks.

**Achievable with effort: "Jordanian marathon runner", "Jordan trail runner",
"عداء أردني".** Low-competition long-tail terms.

**Not achievable: "marathon runner", "running".** Those belong to Nike,
Strava and Wikipedia. No personal site wins them. Anyone promising this is
selling something.

### Already built in
- Unique title + meta description per language
- Canonical URLs and `hreflang` (en / ar / x-default) so the two versions
  don't compete with each other
- `sitemap.xml` and `robots.txt` generated at build
- Schema.org JSON-LD: `Person`, `WebSite`, `WebPage`, `SportsEvent` for
  Amsterdam, and an `ItemList` of all 24 race results
- Open Graph + Twitter cards so shared links show the Valencia photo
- Correct `<html lang>` and `dir` per language (separate root layouts)
- Semantic HTML: one `<h1>` per page, ordered headings, `figure`,
  `blockquote`, `dl`, table `caption`
- Descriptive alt text on all 17 images, in both languages
- Self-hosted fonts, WebP with srcsets, explicit width/height
  (fast LCP, zero layout shift — both ranking inputs)

### What YOU must do — this is the part that decides ranking

1. **Google Search Console** (search.google.com/search-console)
   Add the domain, verify, submit `https://yourdomain.com/sitemap.xml`.
   Very little gets indexed quickly without this.
   Paste the verification token into `NEXT_PUBLIC_GOOGLE_VERIFICATION`.

2. **Bing Webmaster Tools** — same thing, five minutes. Also feeds AI search.

3. **Backlinks are the single biggest factor.** Put your URL in:
   Instagram bio · Strava profile · UTMB profile · ITRA profile ·
   race registration profiles · any race-result page or local press ·
   LinkedIn.
   Ask organisers (Unlimited Distances, Run Jordan) to link you from their
   results pages. A few relevant links beat a hundred irrelevant ones.

4. **Google Knowledge Panel** — the JSON-LD `Person` block makes it possible,
   but Google needs corroboration elsewhere. The more sites that describe you
   consistently as "Fuad Abu Safi, endurance athlete, Amman", the sooner it
   appears.

5. **Keep adding races.** Freshness is a ranking signal. Every new result in
   `lib/content.ts` is a reason to re-crawl.

Realistic timeline: indexed in days, ranking for your name in 2-6 weeks,
competitive long-tail terms in 3-6 months.

---

## 4. Editing

| What | Where |
|---|---|
| All English + Arabic copy | `lib/dict.ts` |
| Race results, profile, links | `lib/content.ts` |
| SEO titles, descriptions, keywords, JSON-LD | `lib/seo.ts` |
| Colours, layout, RTL rules | `app/globals.css` |
| Page structure | `components/Site.tsx` |

### Adding a race
Add an entry to `RACES` in `lib/content.ts` (newest first) with both English
and Arabic fields. Then update `STATS` and the `All · 24` filter label in
`lib/dict.ts`.

### Adding a photo
1. Put the JPEG in `public/photos/`
2. Run `node scripts/images.mjs` to generate the sized WebP/JPEG variants
   and refresh `lib-image-manifest.json`
3. Reference it with `<Pic name="your-name" ... />`

### Arabic typography — important
Arabic letters join. **Letter-spacing must stay 0 in Arabic.** The rule
`[dir="rtl"] body *{letter-spacing:0}` handles it. If you add a more
specific selector, restate `letter-spacing:0` for RTL or the letterforms
will visibly break apart.

The elevation chart deliberately does not mirror in Arabic — it is a chart,
not text.

---

## 5. Still outstanding

- Four races show a dash for finish time (Umm El Jimmal, Tall Al-Rumman,
  Dead Sea Duathlon 2025, Cross Country 2025) — the source values were
  unreadable and were left blank rather than published wrong.
- Bromine Amman Marathon 2025 was dated `17/10/2024` in the spreadsheet,
  almost certainly a typo. The site shows Oct 2025.
- The sponsorship DOCX files still say Valencia 2026; it was 2025.
