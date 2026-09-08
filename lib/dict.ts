import type { Lang } from "./content";

export const dict = {
  en: {
    dir: "ltr" as const,
    htmlLang: "en",
    otherHref: "/ar/",
    otherLabel: "العربية",
    otherAria: "Switch to Arabic",

    nav: { profile: "Profile", results: "Results", log: "Race log", media: "Media", partner: "Partner", cta: "Work with me" },
    coord: "AMMAN · 31.95°N 35.93°E",

    hero: {
      eyebrow: "Road & trail · Amman, Jordan",
      badge: "UTMB Index · ITRA ranked",
      name1: "Fuad", name2: "Abu Safi",
      role: "Endurance athlete",
      ledeA: "marathon.", ledeB: "half.",
      lede: "Winner of the 12th Rum International Marathon, third overall at AlUla Ultra Trail. 400 km of racing across four countries — every kilometre logged in public.",
      btn1: "Sponsorship", btn2: "See the results",
      cap: "Valencia · 2:50:57",
      alt: "Fuad Abu Safi running into the finish at the Valencia Marathon",
    },

    ridge: {
      head: "Terrain raced · 2024–2025",
      stats: "4,425 m climbed · 24 races · 400.2 km",
      low: "DEAD SEA −430 M · LOWEST RACE ON EARTH",
      high: "PETRA +790 M CLIMB · HIGHEST GAIN",
      petra: "PETRA 790 M", sea: "SEA LEVEL",
      aria: "Elevation gain profile across 24 races, from the Dead Sea at 430 metres below sea level to 790 metres of climbing at Petra",
    },

    marks: [
      { v: "2:50:57", k: "Marathon", s: "Valencia 2025 · debut, sub-3" },
      { v: "1:19:15", k: "Half marathon", s: "Ayla Red Sea · 3:45 /km" },
      { v: "15:57", k: "5 km", s: "Cross country · 3:11 /km" },
      { v: "1st", k: "Wadi Rum", s: "12th Rum International Marathon" },
    ],

    band: {
      t: "Wadi Rum, first across the line",
      m: "12th Rum International Marathon · 1:33:08 · Nov 2025",
      alt: "Fuad Abu Safi running across the desert floor at Wadi Rum with camels grazing in the distance",
    },

    about: {
      tag: "Profile",
      title1: "Built on repetition,", title2: "not on hype",
      p1: "I am an endurance athlete based in Amman. I race road and trail — half marathons on tarmac, ultra-trail on sandstone — and I work as a software performance engineering consultant. The two jobs are the same job: find the limit, measure it, move it.",
      p2: "My marathon debut was Valencia, December 2025. I went through halfway on schedule and finished in 2:50:57. Eleven months earlier I had run AlUla Ultra Trail in Saudi Arabia and come third overall. In November 2025 I won the 12th Rum International Marathon outright, first across the line and first in my age group.",
      pull: "Every session I have run since 2024 is public on Strava. If a sponsor wants to audit the training behind a result, it is already there.",
      p3: "I write about the sport and I have spoken about it on the Sunday Runday Podcast. I run in English and in Arabic, which means the story travels in both directions — out of Jordan, and back into it.",
      p4: "Next on the calendar is the TCS Amsterdam Marathon, 18 October 2026 — a World Athletics Platinum Label race and the next step toward the Majors.",
      cap: "AlUla · 3rd overall",
      alt: "Fuad Abu Safi crossing the finish line at the AlUla Ultra Trail in Saudi Arabia",
      facts: [
        ["Base", "Amman, Jordan"],
        ["Disciplines", "Road · Trail · Ultra-trail · Cross country"],
        ["Raced in", "Jordan · Saudi Arabia · Egypt · Spain"],
        ["Volume", "12–20 h per week, structured blocks"],
        ["Languages", "Arabic · English"],
        ["Profession", "Software performance engineering consultant"],
        ["Next race", "TCS Amsterdam Marathon · 18 Oct 2026"],
      ] as [string, string][],
    },

    results: {
      tag: "Selected results",
      title: "The ones that count",
      sub: "Nine top-five finishes and nine age-group podiums across two seasons. These are the six that define the range — from a sub-3 road marathon to a desert ultra.",
      cards: [
        { rank: "1st overall · 1st age group", tone: "win", time: "1:33:08", name: "12th Rum International Marathon", meta1: "Wadi Rum, Jordan · Nov 2025", meta2: "21.1 km trail · 136 m gain" },
        { rank: "Sub-3 marathon debut", tone: "pr", time: "2:50:57", name: "Valencia Marathon Trinidad Alfonso", meta1: "Valencia, Spain · Dec 2025", meta2: "42.195 km road · 4:00 /km" },
        { rank: "3rd overall · 2nd age group", tone: "pod", time: "1:47:36", name: "AlUla Ultra Trail — Elephant Rock", meta1: "AlUla, Saudi Arabia · Jan 2025", meta2: "23 km trail · 243 m gain" },
        { rank: "Half marathon PR", tone: "pr", time: "1:19:15", name: "Ayla Red Sea Half Marathon", meta1: "Aqaba, Jordan · Dec 2024", meta2: "21.1 km road · 3:45 /km" },
        { rank: "4th age group · Egypt", tone: "", time: "1:21:27", name: "6th Marakez Pyramids Half Marathon", meta1: "Cairo, Egypt · Dec 2024", meta2: "21.1 km road · 3:51 /km" },
        { rank: "4th overall · 2nd age group", tone: "pod", time: "2:02:59", name: "Petra Desert Half Marathon", meta1: "Petra, Jordan · Sep 2025", meta2: "25 km trail · 790 m gain" },
      ],
    },

    log: {
      tag: "Full race log",
      title1: "Twenty-four races,", title2: "two seasons",
      sub: "The complete record — nothing filtered out. Sponsors can verify any line of it against public results and Strava.",
      filters: { all: "All · 24", road: "Road", trail: "Trail", pod: "Podiums" },
      th: ["Race", "Date", "Type", "Dist", "Time", "Gain", "O/A", "AG"],
      swipe: "Swipe the table to see times, gain and placings",
      note: "O/A = overall placing · AG = age-group placing · Gain = elevation gain. Cross-country and relay legs included for completeness.",
      km: "km", m: "m", road: "Road", trail: "Trail",
    },

    gallery: {
      tag: "Race gallery",
      title1: "Two seasons,", title2: "four countries",
      sub: "Wadi Rum, Giza, AlUla, Petra, Valencia. Real race photography from the start lines that built this record — and the kind of backdrop a brand gets to stand in front of.",
    },

    media: {
      tag: "Voice & reach",
      title: "The story travels",
      sub: "Around 2,200 followers across Instagram and Facebook, a public Strava log, a podcast appearance and a running newsletter — in two languages.",
      cards: [
        { k: "Podcast", t: "Sunday Runday Podcast", d: "A long-form conversation on building an international racing career out of Amman.", go: "Listen on Spotify →", href: "podcast" },
        { k: "Training log", t: "Strava", d: "Every run since 2024, open to the public. Pace, heart rate, elevation, mileage.", go: "Follow the training →", href: "strava" },
        { k: "Social", t: "Instagram", d: "Race-day coverage, training notes and gear in use — Arabic and English.", go: "@fuad.abusafi →", href: "instagram" },
        { k: "Verified index", t: "UTMB World", d: "Official trail running index — results verified by the UTMB World Series.", go: "View runner profile →", href: "utmb" },
        { k: "Verified index", t: "ITRA", d: "International Trail Running Association performance index and race record.", go: "View ITRA profile →", href: "itra" },
      ],
    },

    partner: {
      tag: "Sponsorship",
      title1: "Put your brand", title2: "on the start line",
      sub: "I am looking for partners for the 2026–2027 season, starting with the TCS Amsterdam Marathon on 18 October 2026. Packages are in Jordanian dinar and can be split between sponsors or taken in kind.",
      tiers: [
        {
          n: "Gold", p: "1,000–1,500", u: "JOD · per season", cls: "tier-1",
          items: [
            "Primary logo on race kit and training apparel",
            "6–8 dedicated posts, 12–15 stories per race",
            "Named training series through the block",
            "Post-race video testimonial",
            "Named partner on this site",
            "Priority placement across every race",
          ],
        },
        {
          n: "Silver", p: "500–750", u: "JOD · per season", cls: "tier-2",
          items: [
            "Logo on training apparel",
            "3–4 dedicated posts, 6–8 stories per race",
            "Product features and honest reviews",
            "Mentions across training updates",
            "Listed partner on this site",
          ],
        },
        {
          n: "Bronze & in-kind", p: "200–300", u: "JOD · or product equivalent", cls: "tier-3",
          items: [
            "Race-day thank-you posts",
            "1–2 dedicated feature posts",
            "Listed partner on this site",
            "In-kind welcome: shoes, nutrition, recovery, travel",
          ],
        },
      ],
      note: "Race numbers are issued and branded by race organisers, so sponsor logos cannot be placed on them. Everything above is within my control to deliver.",
      dv: [
        ["Verifiable audience", "Real numbers, not inflated ones. ~2,200 followers, public Strava, and a post-race report with reach and engagement."],
        ["Two languages", "Arabic and English content, reaching the Jordanian running community and the international circuit."],
        ["A full season", "Sponsorship runs across the whole block — 16–20 weeks of build plus race week — not a single post."],
        ["Open books", "A costed breakdown of what the money covers: entry, flights, visa, accommodation, nutrition, physio."],
      ] as [string, string][],
    },

    contact: {
      tag: "Get in touch",
      title1: "Let's talk", title2: "partnership",
      sub: "Marketing, brand and CSR teams welcome. Send a note and I will reply with the full proposal, the costed breakdown and the complete race history.",
      rows: [
        ["Email", "fuad.athlete@gmail.com"],
        ["Phone", "+962 79 907 6684"],
        ["Instagram", "@fuad.abusafi"],
        ["Strava", "Training log — open to the public"],
        ["UTMB", "UTMB World runner index"],
        ["ITRA", "Trail runner profile"],
      ] as [string, string][],
    },

    foot: "FUAD ABU SAFI · ENDURANCE ATHLETE · AMMAN, JORDAN",
    footCoord: "31.95°N 35.93°E",
    skip: "Skip to content",
  },

  ar: {
    dir: "rtl" as const,
    htmlLang: "ar",
    otherHref: "/",
    otherLabel: "English",
    otherAria: "التبديل إلى الإنجليزية",

    nav: { profile: "نبذة", results: "الإنجازات", log: "سجل السباقات", media: "الإعلام", partner: "الرعاية", cta: "لنعمل معاً" },
    coord: "عمّان · 31.95°ش 35.93°ق",

    hero: {
      eyebrow: "طرق وجبال · عمّان، الأردن",
      badge: "مصنّف في UTMB و ITRA",
      name1: "فؤاد", name2: "أبو صافي",
      role: "عدّاء مسافات طويلة",
      ledeA: "ماراثون.", ledeB: "نصف ماراثون.",
      lede: "بطل ماراثون وادي رم الدولي الثاني عشر، والثالث عموماً في سباق العلا الجبلي. أكثر من 400 كم من السباقات في أربع دول — وكل كيلومتر منها موثّق للعامة.",
      btn1: "الرعاية", btn2: "شاهد النتائج",
      cap: "فالنسيا · 2:50:57",
      alt: "فؤاد أبو صافي يقترب من خط النهاية في ماراثون فالنسيا",
    },

    ridge: {
      head: "التضاريس · 2024–2025",
      stats: "4,425 م تسلّق · 24 سباقاً · 400.2 كم",
      low: "البحر الميت −430 م · أخفض سباق على الأرض",
      high: "البتراء +790 م · أعلى تسلّق",
      petra: "البتراء 790 م", sea: "مستوى سطح البحر",
      aria: "منحنى الارتفاع عبر 24 سباقاً، من البحر الميت على عمق 430 متراً تحت سطح البحر إلى 790 متراً من التسلّق في البتراء",
    },

    marks: [
      { v: "2:50:57", k: "ماراثون", s: "فالنسيا 2025 · أول ماراثون، تحت 3 ساعات" },
      { v: "1:19:15", k: "نصف ماراثون", s: "أيلة البحر الأحمر · 3:45 لكل كم" },
      { v: "15:57", k: "5 كم", s: "اختراق ضاحية · 3:11 لكل كم" },
      { v: "الأول", k: "وادي رم", s: "ماراثون وادي رم الدولي الثاني عشر" },
    ],

    band: {
      t: "وادي رم، الأول على خط النهاية",
      m: "ماراثون وادي رم الدولي الثاني عشر · 1:33:08 · تشرين الثاني 2025",
      alt: "فؤاد أبو صافي يركض على أرض الصحراء في وادي رم وخلفه قطيع من الجمال",
    },

    about: {
      tag: "نبذة",
      title1: "بُني على التكرار،", title2: "لا على الضجيج",
      p1: "أنا عدّاء مسافات طويلة مقيم في عمّان. أسابق على الطرق وفي الجبال — أنصاف ماراثون على الإسفلت وسباقات جبلية طويلة على الصخر الرملي — وأعمل مستشاراً في هندسة أداء البرمجيات. المهنتان في جوهرهما واحدة: أن تجد الحد، وتقيسه، ثم تزحزحه.",
      p2: "كان أول ماراثون لي في فالنسيا، كانون الأول 2025. مررت بمنتصف السباق وفق الخطة وأنهيته في 2:50:57. وقبل ذلك بأحد عشر شهراً خضت سباق العلا الجبلي في السعودية وحللت ثالثاً على العموم. وفي تشرين الثاني 2025 فزت بماراثون وادي رم الدولي الثاني عشر، الأول على خط النهاية والأول في فئتي العمرية.",
      pull: "كل تمرين ركضته منذ 2024 منشور على سترافا. إن أراد راعٍ أن يدقق في التدريب الذي صنع النتيجة، فهو أمامه.",
      p3: "أكتب عن الرياضة، وتحدثت عنها في بودكاست Sunday Runday. أتواصل بالعربية والإنجليزية، ما يعني أن القصة تنتقل في الاتجاهين — من الأردن إلى العالم، ومن العالم إلى الأردن.",
      p4: "المحطة القادمة هي ماراثون أمستردام TCS في 18 تشرين الأول 2026 — سباق بتصنيف البلاتين من الاتحاد الدولي لألعاب القوى، والخطوة التالية نحو ماراثونات العالم الكبرى.",
      cap: "العلا · الثالث عموماً",
      alt: "فؤاد أبو صافي يعبر خط النهاية في سباق العلا الجبلي بالسعودية",
      facts: [
        ["المقر", "عمّان، الأردن"],
        ["التخصصات", "طرق · جبال · جبلي طويل · اختراق ضاحية"],
        ["سابق في", "الأردن · السعودية · مصر · إسبانيا"],
        ["حجم التدريب", "12–20 ساعة أسبوعياً ضمن برنامج مُهيكل"],
        ["اللغات", "العربية · الإنجليزية"],
        ["المهنة", "مستشار هندسة أداء البرمجيات"],
        ["السباق القادم", "ماراثون أمستردام TCS · 18 تشرين الأول 2026"],
      ] as [string, string][],
    },

    results: {
      tag: "نتائج مختارة",
      title: "السباقات التي تُحتسب",
      sub: "تسعة مراكز ضمن الخمسة الأوائل وتسع منصات في الفئة العمرية خلال موسمين. وهذه ستة سباقات تختصر المدى — من ماراثون طريق تحت الثلاث ساعات إلى سباق صحراوي طويل.",
      cards: [
        { rank: "الأول عموماً · الأول في الفئة", tone: "win", time: "1:33:08", name: "ماراثون وادي رم الدولي الثاني عشر", meta1: "وادي رم، الأردن · تشرين الثاني 2025", meta2: "21.1 كم جبلي · 136 م تسلّق" },
        { rank: "أول ماراثون تحت 3 ساعات", tone: "pr", time: "2:50:57", name: "ماراثون فالنسيا", meta1: "فالنسيا، إسبانيا · كانون الأول 2025", meta2: "42.195 كم طريق · 4:00 لكل كم" },
        { rank: "الثالث عموماً · الثاني في الفئة", tone: "pod", time: "1:47:36", name: "سباق العلا الجبلي — صخرة الفيل", meta1: "العلا، السعودية · كانون الثاني 2025", meta2: "23 كم جبلي · 243 م تسلّق" },
        { rank: "أفضل زمن في نصف الماراثون", tone: "pr", time: "1:19:15", name: "نصف ماراثون أيلة البحر الأحمر", meta1: "العقبة، الأردن · كانون الأول 2024", meta2: "21.1 كم طريق · 3:45 لكل كم" },
        { rank: "الرابع في الفئة · مصر", tone: "", time: "1:21:27", name: "نصف ماراثون الأهرامات السادس", meta1: "القاهرة، مصر · كانون الأول 2024", meta2: "21.1 كم طريق · 3:51 لكل كم" },
        { rank: "الرابع عموماً · الثاني في الفئة", tone: "pod", time: "2:02:59", name: "نصف ماراثون البتراء الصحراوي", meta1: "البتراء، الأردن · أيلول 2025", meta2: "25 كم جبلي · 790 م تسلّق" },
      ],
    },

    log: {
      tag: "السجل الكامل",
      title1: "أربعة وعشرون سباقاً،", title2: "موسمان",
      sub: "السجل كاملاً دون انتقاء. يمكن لأي راعٍ التحقق من كل سطر فيه عبر النتائج الرسمية وسترافا.",
      filters: { all: "الكل · 24", road: "طرق", trail: "جبال", pod: "منصات" },
      th: ["السباق", "التاريخ", "النوع", "المسافة", "الزمن", "التسلّق", "الترتيب", "الفئة"],
      swipe: "اسحب الجدول لعرض الأزمنة والتسلّق والترتيب",
      note: "الترتيب = الترتيب العام · الفئة = الترتيب في الفئة العمرية · التسلّق = مجموع الارتفاع. تشمل القائمة سباقات اختراق الضاحية ومراحل التتابع.",
      km: "كم", m: "م", road: "طرق", trail: "جبال",
    },

    gallery: {
      tag: "معرض السباقات",
      title1: "موسمان،", title2: "أربع دول",
      sub: "وادي رم، الجيزة، العلا، البتراء، فالنسيا. صور حقيقية من خطوط الانطلاق التي بنت هذا السجل — وخلفية يقف أمامها اسم أي راعٍ.",
    },

    media: {
      tag: "الصوت والانتشار",
      title: "القصة تنتقل",
      sub: "نحو 2,200 متابع على إنستغرام وفيسبوك، وسجل تدريب مفتوح على سترافا، وظهور في بودكاست، ونشرة عن الركض — بلغتين.",
      cards: [
        { k: "بودكاست", t: "بودكاست Sunday Runday", d: "حوار مطوّل عن بناء مسيرة سباقات دولية انطلاقاً من عمّان.", go: "استمع على Spotify →", href: "podcast" },
        { k: "سجل التدريب", t: "سترافا", d: "كل ركضة منذ 2024، مفتوحة للجميع: الوتيرة ونبض القلب والارتفاع والمسافة.", go: "تابع التدريب →", href: "strava" },
        { k: "التواصل", t: "إنستغرام", d: "تغطية يوم السباق وملاحظات التدريب والمعدات المستخدمة — بالعربية والإنجليزية.", go: "@fuad.abusafi →", href: "instagram" },
        { k: "تصنيف موثّق", t: "UTMB World", d: "المؤشر الرسمي للركض الجبلي — نتائج موثّقة من UTMB World Series.", go: "اعرض ملف العدّاء →", href: "utmb" },
        { k: "تصنيف موثّق", t: "ITRA", d: "مؤشر الأداء وسجل السباقات في الاتحاد الدولي للركض الجبلي.", go: "اعرض ملف ITRA →", href: "itra" },
      ],
    },

    partner: {
      tag: "الرعاية",
      title1: "ضع علامتك", title2: "على خط الانطلاق",
      sub: "أبحث عن شركاء لموسم 2026–2027، بدءاً من ماراثون أمستردام TCS في 18 تشرين الأول 2026. الباقات بالدينار الأردني ويمكن تقاسمها بين أكثر من راعٍ أو تقديمها عيناً.",
      tiers: [
        {
          n: "ذهبي", p: "1,000–1,500", u: "دينار · للموسم", cls: "tier-1",
          items: [
            "الشعار الرئيسي على زي السباق وملابس التدريب",
            "6–8 منشورات و12–15 ستوري لكل سباق",
            "سلسلة تدريب باسم الراعي طوال فترة الإعداد",
            "فيديو شهادة بعد السباق",
            "شريك رئيسي على هذا الموقع",
            "أولوية الظهور في كل سباق",
          ],
        },
        {
          n: "فضي", p: "500–750", u: "دينار · للموسم", cls: "tier-2",
          items: [
            "الشعار على ملابس التدريب",
            "3–4 منشورات و6–8 ستوري لكل سباق",
            "عرض المنتجات ومراجعات صادقة",
            "ذكر ضمن تحديثات التدريب",
            "شريك مُدرج على هذا الموقع",
          ],
        },
        {
          n: "برونزي وعيني", p: "200–300", u: "دينار · أو ما يعادلها منتجات", cls: "tier-3",
          items: [
            "منشورات شكر يوم السباق",
            "1–2 منشور تعريفي",
            "شريك مُدرج على هذا الموقع",
            "الرعاية العينية مرحّب بها: أحذية، تغذية، استشفاء، سفر",
          ],
        },
      ],
      note: "أرقام السباق تصدرها الجهات المنظّمة وتحمل شعاراتها، لذا لا يمكن وضع شعار الراعي عليها. كل ما ورد أعلاه ضمن ما أستطيع تنفيذه فعلياً.",
      dv: [
        ["جمهور قابل للتحقق", "أرقام حقيقية لا مضخّمة. نحو 2,200 متابع، وسترافا مفتوح، وتقرير بعد كل سباق يوضح الوصول والتفاعل."],
        ["بلغتين", "محتوى بالعربية والإنجليزية يصل إلى مجتمع الركض الأردني وإلى الساحة الدولية."],
        ["موسم كامل", "الرعاية تمتد على فترة الإعداد كاملة — 16–20 أسبوعاً إضافة إلى أسبوع السباق — لا منشور واحد."],
        ["حسابات مفتوحة", "تفصيل واضح لما يغطيه المبلغ: رسوم التسجيل، الطيران، التأشيرة، الإقامة، التغذية، العلاج الطبيعي."],
      ] as [string, string][],
    },

    contact: {
      tag: "تواصل معي",
      title1: "لنتحدّث", title2: "عن الشراكة",
      sub: "أهلاً بفرق التسويق والعلامة التجارية والمسؤولية المجتمعية. أرسل رسالة وسأعود إليك بالعرض الكامل وتفصيل التكاليف وسجل السباقات كاملاً.",
      rows: [
        ["البريد الإلكتروني", "fuad.athlete@gmail.com"],
        ["الهاتف", "+962 79 907 6684"],
        ["إنستغرام", "@fuad.abusafi"],
        ["سترافا", "سجل التدريب — مفتوح للجميع"],
        ["UTMB", "مؤشر UTMB العالمي للعدّائين"],
        ["ITRA", "ملف العدّاء الجبلي"],
      ] as [string, string][],
    },

    foot: "فؤاد أبو صافي · عدّاء مسافات طويلة · عمّان، الأردن",
    footCoord: "31.95°ش 35.93°ق",
    skip: "تخطَّ إلى المحتوى",
  },
};

export type Dict = typeof dict.en;
export const getDict = (l: Lang): Dict => dict[l] as Dict;
