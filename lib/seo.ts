import type { Metadata } from "next";
import { SITE_URL, PROFILE, STATS, RACES, type Lang } from "./content";

const OG = `${SITE_URL}/photos/hero-1200.jpg`;

const COPY = {
  en: {
    title: "Fuad Abu Safi — Endurance Athlete | Marathon & Trail Runner, Amman Jordan",
    short: "Fuad Abu Safi — Endurance Athlete",
    desc: "Fuad Abu Safi is an endurance runner from Amman, Jordan. 2:50:57 marathon, 1:19:15 half marathon, winner of the 12th Rum International Marathon at Wadi Rum and third overall at AlUla Ultra Trail. Full race record, photography and sponsorship packages.",
    keywords: [
      "Fuad Abu Safi", "Jordanian marathon runner", "endurance athlete Jordan",
      "trail runner Amman", "Jordan ultra trail runner", "sub 3 hour marathon Jordan",
      "Wadi Rum marathon winner", "AlUla Ultra Trail", "athlete sponsorship Jordan",
      "Middle East endurance athlete", "Amman running", "Petra Desert Marathon",
    ],
  },
  ar: {
    title: "فؤاد أبو صافي — عدّاء مسافات طويلة | ماراثون وسباقات جبلية، عمّان الأردن",
    short: "فؤاد أبو صافي — عدّاء مسافات طويلة",
    desc: "فؤاد أبو صافي عدّاء مسافات طويلة من عمّان، الأردن. ماراثون في 2:50:57 ونصف ماراثون في 1:19:15، بطل ماراثون وادي رم الدولي الثاني عشر والثالث عموماً في سباق العلا الجبلي. السجل الكامل للسباقات وباقات الرعاية.",
    keywords: [
      "فؤاد أبو صافي", "عداء أردني", "ماراثون الأردن", "سباقات جبلية الأردن",
      "عداء مسافات طويلة", "ماراثون وادي رم", "سباق العلا الجبلي",
      "رعاية رياضية الأردن", "ركض عمّان", "ماراثون البتراء",
    ],
  },
};

export function buildMetadata(lang: Lang): Metadata {
  const c = COPY[lang];
  const path = lang === "ar" ? "/ar/" : "/";
  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.desc,
    keywords: c.keywords,
    authors: [{ name: PROFILE.name, url: SITE_URL }],
    creator: PROFILE.name,
    publisher: PROFILE.name,
    applicationName: c.short,
    category: "sports",
    alternates: {
      canonical: path,
      languages: {
        // hreflang tells Google these are the same page in two languages,
        // so neither version competes with the other in search results.
        "en": "/",
        "ar": "/ar/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      firstName: "Fuad",
      lastName: "Abu Safi",
      username: "fuad.abusafi",
      title: c.title,
      description: c.desc,
      url: path,
      siteName: c.short,
      locale: lang === "ar" ? "ar_JO" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_JO",
      images: [{ url: OG, width: 1200, height: 1500, alt: `${PROFILE.name} finishing the Valencia Marathon` }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.short,
      description: c.desc,
      images: [OG],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
    // Paste the token from Google Search Console here after you verify.
    verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
      : undefined,
  };
}

/**
 * Schema.org JSON-LD. This is what lets Google show a knowledge panel and
 * rich results for the name "Fuad Abu Safi" rather than a plain blue link.
 */
export function buildJsonLd(lang: Lang) {
  const isAr = lang === "ar";
  const url = isAr ? `${SITE_URL}/ar/` : `${SITE_URL}/`;

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: isAr ? PROFILE.nameAr : PROFILE.name,
    alternateName: isAr ? PROFILE.name : PROFILE.nameAr,
    jobTitle: isAr ? "عدّاء مسافات طويلة" : "Endurance Athlete",
    description: COPY[lang].desc,
    url: SITE_URL,
    image: OG,
    email: `mailto:${PROFILE.email}`,
    telephone: PROFILE.phone,
    nationality: { "@type": "Country", name: "Jordan" },
    homeLocation: {
      "@type": "Place",
      name: `${PROFILE.city}, ${PROFILE.country}`,
      geo: { "@type": "GeoCoordinates", latitude: PROFILE.lat, longitude: PROFILE.lon },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: PROFILE.city,
      addressCountry: PROFILE.countryCode,
    },
    knowsLanguage: ["ar", "en"],
    sameAs: [PROFILE.strava, PROFILE.instagram, PROFILE.utmb, PROFILE.itra],
    knowsAbout: [
      "Marathon running", "Trail running", "Ultra-trail running",
      "Endurance training", "Software performance engineering",
    ],
    award: [
      "1st overall — 12th Rum International Marathon, Wadi Rum (2025)",
      "3rd overall — AlUla Ultra Trail, Elephant Rock, Saudi Arabia (2025)",
      "Sub-3 marathon debut — Valencia Marathon 2:50:57 (2025)",
      "Half marathon personal best 1:19:15 — Ayla Red Sea (2024)",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COPY[lang].short,
    description: COPY[lang].desc,
    inLanguage: isAr ? "ar-JO" : "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: COPY[lang].title,
    description: COPY[lang].desc,
    inLanguage: isAr ? "ar-JO" : "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    primaryImageOfPage: OG,
  };

  const nextRace = {
    "@type": "SportsEvent",
    name: "TCS Amsterdam Marathon 2026",
    startDate: "2026-10-18",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    sport: "Marathon",
    location: {
      "@type": "Place",
      name: "Amsterdam, Netherlands",
      address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
    },
    attendee: { "@id": `${SITE_URL}/#person` },
  };

  // The full race log as a structured list — gives Google real substance
  // to index beyond the prose.
  const results = {
    "@type": "ItemList",
    name: isAr ? "سجل سباقات فؤاد أبو صافي" : "Fuad Abu Safi race results",
    numberOfItems: STATS.races,
    itemListElement: RACES.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SportsEvent",
        name: isAr ? r.nA : r.n,
        sport: r.t === "Trail" ? "Trail running" : "Road running",
        startDate: r.d,
        organizer: { "@type": "Organization", name: isAr ? r.oA : r.o },
        attendee: { "@id": `${SITE_URL}/#person` },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, webpage, nextRace, results],
  };
}
