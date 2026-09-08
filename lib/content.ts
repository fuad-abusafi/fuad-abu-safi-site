/**
 * Single source of truth for every piece of copy and data on the site.
 * Change text here, not in the components.
 */

// ── Change this to your real domain once you own it ────────────────────
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://fuadabusafi.com";

export const PROFILE = {
  name: "Fuad Abu Safi",
  nameAr: "فؤاد أبو صافي",
  email: "fuad.athlete@gmail.com",
  phone: "+962799076684",
  phoneDisplay: "+962 79 907 6684",
  city: "Amman",
  country: "Jordan",
  countryCode: "JO",
  lat: 31.9539,
  lon: 35.9106,
  strava: "https://strava.app.link/bFOKg5Hqg2b",
  instagram: "https://www.instagram.com/fuad.abusafi",
  instagramHandle: "@fuad.abusafi",
  utmb: "https://utmb.world/runner/6990554.fuad.abusafi",
  itra: "https://itra.run/RunnerSpace/abusafi.fuad.6164941",
  podcast: "https://open.spotify.com/episode/3gk6ShP32Rd9Ybn0VfkmSO",
};

// ── Career totals (computed from the race log below) ───────────────────
export const STATS = {
  races: 24,
  km: "400.2",
  climb: "4,425",
  countries: 4,
  topFive: 9,
  agPodiums: 9,
  wins: 1,
};

export type Race = {
  n: string; nA: string;
  o: string; oA: string;
  d: string; dA: string;
  t: "Road" | "Trail";
  k: string;
  g: string | null;
  e: number | null;
  oa: number | null;
  ag: number | null;
};

export const RACES: Race[] = [
  { n:"Valencia Marathon Trinidad Alfonso", nA:"ماراثون فالنسيا", o:"SD Correcaminos", oA:"SD Correcaminos", d:"Dec 2025", dA:"12/2025", t:"Road", k:"42.195", g:"2:50:57", e:68, oa:3124, ag:1325 },
  { n:"12th Rum International Marathon", nA:"ماراثون وادي رم الدولي 12", o:"Unlimited Distances", oA:"مسافات بلا حدود", d:"Nov 2025", dA:"11/2025", t:"Trail", k:"21.1", g:"1:33:08", e:136, oa:1, ag:1 },
  { n:"Bromine Amman Marathon 2025", nA:"ماراثون عمّان 2025", o:"Run Jordan", oA:"رَن جوردان", d:"Oct 2025", dA:"10/2025", t:"Road", k:"21.1", g:"1:20:48", e:104, oa:5, ag:null },
  { n:"Cross Country — IEC Alumni", nA:"اختراق ضاحية — خريجي العلمية الإسلامية", o:"IEC Alumni College", oA:"خريجو الكلية العلمية الإسلامية", d:"Sep 2025", dA:"9/2025", t:"Road", k:"4", g:"16:15", e:126, oa:null, ag:null },
  { n:"Petra Desert Half Marathon 2025", nA:"نصف ماراثون البتراء الصحراوي 2025", o:"Albatros Adventure Marathons", oA:"ألباتروس", d:"Sep 2025", dA:"9/2025", t:"Trail", k:"25", g:"2:02:59", e:790, oa:4, ag:2 },
  { n:"Umm El Jimmal 2nd International Race", nA:"سباق أم الجمال الدولي الثاني", o:"—", oA:"—", d:"Jul 2025", dA:"7/2025", t:"Road", k:"9.34", g:null, e:10, oa:null, ag:null },
  { n:"4th Jordan Eco Trail — Wasfi Al-Tall Forest", nA:"الدرب البيئي الأردني الرابع — حرش وصفي التل", o:"Unlimited Distances", oA:"مسافات بلا حدود", d:"Jun 2025", dA:"6/2025", t:"Trail", k:"20", g:"1:28:56", e:483, oa:null, ag:3 },
  { n:"One Run International Race", nA:"سباق ون رن الدولي", o:"Run Through Jordan", oA:"رَن ثرو جوردان", d:"May 2025", dA:"5/2025", t:"Road", k:"21.1", g:"1:24:55", e:167, oa:4, ag:null },
  { n:"Tall Al-Rumman Running Challenge", nA:"تحدي تل الرمان للركض", o:"Amman Road Runners", oA:"عدّاءو عمّان", d:"May 2025", dA:"5/2025", t:"Road", k:"6.6", g:null, e:252, oa:3, ag:2 },
  { n:"Dead Sea Duathlon 2025", nA:"ثنائي البحر الميت 2025", o:"Jordan Triathlon", oA:"الاتحاد الأردني للترايثلون", d:"Apr 2025", dA:"4/2025", t:"Road", k:"10", g:null, e:null, oa:null, ag:null },
  { n:"Dead Sea Half Marathon 2025", nA:"نصف ماراثون البحر الميت 2025", o:"Run Jordan", oA:"رَن جوردان", d:"Apr 2025", dA:"4/2025", t:"Road", k:"21.1", g:"1:21:09", e:158, oa:7, ag:null },
  { n:"AlUla Ultra Trail — Elephant Rock", nA:"سباق العلا الجبلي — صخرة الفيل", o:"Race Arabia", oA:"ريس أرابيا", d:"Jan 2025", dA:"1/2025", t:"Trail", k:"23", g:"1:47:36", e:243, oa:3, ag:2 },
  { n:"Cross Country Race 2025", nA:"سباق اختراق الضاحية 2025", o:"Jordan Athletics Federation", oA:"الاتحاد الأردني لألعاب القوى", d:"2025", dA:"2025", t:"Road", k:"10", g:null, e:68, oa:null, ag:null },
  { n:"6th Marakez Pyramids Half Marathon", nA:"نصف ماراثون الأهرامات السادس", o:"TriFactory · Egypt", oA:"تراي فاكتوري · مصر", d:"Dec 2024", dA:"12/2024", t:"Road", k:"21.1", g:"1:21:27", e:200, oa:16, ag:4 },
  { n:"Ayla Red Sea Half Marathon 2024", nA:"نصف ماراثون أيلة البحر الأحمر 2024", o:"Run Jordan", oA:"رَن جوردان", d:"Dec 2024", dA:"12/2024", t:"Road", k:"21.1", g:"1:19:15", e:50, oa:12, ag:null },
  { n:"6th Ayla Triathlon — relay duathlon", nA:"ثلاثي أيلة السادس — تتابع", o:"Jordan Triathlon", oA:"الاتحاد الأردني للترايثلون", d:"Nov 2024", dA:"11/2024", t:"Road", k:"5", g:"18:47", e:null, oa:6, ag:null },
  { n:"11th Rum International Marathon", nA:"ماراثون وادي رم الدولي 11", o:"Unlimited Distances", oA:"مسافات بلا حدود", d:"Oct 2024", dA:"10/2024", t:"Trail", k:"22", g:"1:42:06", e:103, oa:5, ag:2 },
  { n:"Bromine Amman Marathon 2024", nA:"ماراثون عمّان 2024", o:"Run Jordan", oA:"رَن جوردان", d:"Oct 2024", dA:"10/2024", t:"Road", k:"21.1", g:"1:24:52", e:114, oa:5, ag:null },
  { n:"Sport City 2nd Annual Triathlon — relay", nA:"ثلاثي المدينة الرياضية الثاني — تتابع", o:"Jordan Triathlon", oA:"الاتحاد الأردني للترايثلون", d:"Sep 2024", dA:"9/2024", t:"Road", k:"5", g:"19:06", e:78, oa:7, ag:null },
  { n:"Petra Desert Half Marathon 2024", nA:"نصف ماراثون البتراء الصحراوي 2024", o:"Albatros Adventure Marathons", oA:"ألباتروس", d:"Sep 2024", dA:"9/2024", t:"Trail", k:"22.7", g:"2:04:07", e:722, oa:7, ag:3 },
  { n:"3rd Jordan Eco Trail — Wasfi Al-Tall Forest", nA:"الدرب البيئي الأردني الثالث — حرش وصفي التل", o:"Unlimited Distances", oA:"مسافات بلا حدود", d:"Jun 2024", dA:"6/2024", t:"Trail", k:"20", g:"1:46:59", e:553, oa:7, ag:2 },
  { n:"6th Cross Country Race — IEC", nA:"اختراق الضاحية السادس — العلمية الإسلامية", o:"IEC Alumni", oA:"خريجو الكلية العلمية الإسلامية", d:"May 2024", dA:"5/2024", t:"Road", k:"1.6", g:"6:05", e:null, oa:3, ag:3 },
  { n:"3rd Cross Country — Intl Jordanian Athletes", nA:"اختراق الضاحية الثالث — رابطة اللاعبين الدوليين", o:"IJAA", oA:"رابطة اللاعبين الأردنيين الدوليين", d:"May 2024", dA:"5/2024", t:"Road", k:"5", g:"15:57", e:null, oa:null, ag:null },
  { n:"Dead Sea Ultra Marathon 2024", nA:"ماراثون البحر الميت 2024", o:"Run Jordan", oA:"رَن جوردان", d:"Apr 2024", dA:"4/2024", t:"Road", k:"21.1", g:"1:27:20", e:null, oa:9, ag:4 },
];

// Elevation gain per race, used to draw the signature ridgeline.
export const ELEV = [0, 553, 722, 103, 50, 200, 243, 158, 252, 167, 483, 790, 136, 68, 0];

export type Lang = "en" | "ar";

export const GALLERY = [
  { src: "g-rum-podium",       span: "g3", t: "12th Rum International Marathon", tA: "ماراثون وادي رم الدولي الثاني عشر", m: "1st overall · Wadi Rum · Nov 2025", mA: "الأول عموماً · وادي رم · تشرين الثاني 2025", tone: "win", alt: "Fuad Abu Safi on the podium at the 12th Rum International Marathon in Wadi Rum, Jordan", altA: "فؤاد أبو صافي على منصة ماراثون وادي رم الدولي الثاني عشر" },
  { src: "g-alula-podium",     span: "g3", t: "AlUla Ultra Trail — Elephant Rock", tA: "سباق العلا الجبلي — صخرة الفيل", m: "3rd overall · Saudi Arabia · Jan 2025", mA: "الثالث عموماً · السعودية · كانون الثاني 2025", tone: "pod", alt: "Podium ceremony at the AlUla Ultra Trail, Elephant Rock, Saudi Arabia", altA: "منصة التتويج في سباق العلا الجبلي، صخرة الفيل، السعودية" },
  { src: "g-pyramids-race",    span: "g2", t: "Marakez Pyramids Half Marathon", tA: "نصف ماراثون الأهرامات", m: "Giza, Egypt · 1:21:27", mA: "الجيزة، مصر · 1:21:27", tone: "", alt: "Fuad Abu Safi running past the Pyramids of Giza during the Marakez Pyramids Half Marathon", altA: "فؤاد أبو صافي يركض أمام أهرامات الجيزة" },
  { src: "g-valencia-race",    span: "g2", t: "Valencia Marathon", tA: "ماراثون فالنسيا", m: "Bib 4320 · 42.195 km at 4:00 /km", mA: "رقم 4320 · 42.195 كم بوتيرة 4:00 لكل كم", tone: "", alt: "Fuad Abu Safi racing in the pack at the Valencia Marathon in Spain", altA: "فؤاد أبو صافي ضمن المجموعة في ماراثون فالنسيا" },
  { src: "g-petra-finish",     span: "g2", t: "Petra Desert Marathon", tA: "ماراثون البتراء الصحراوي", m: "2nd age group · 790 m of climbing", mA: "الثاني في الفئة · 790 م تسلّق", tone: "pod", alt: "Fuad Abu Safi at the Petra Desert Marathon finish arch in Jordan", altA: "فؤاد أبو صافي عند خط نهاية ماراثون البتراء الصحراوي" },
  { src: "g-ecotrail-finish",  span: "g4", t: "4th Jordan EcoTrail Run", tA: "الدرب البيئي الأردني الرابع", m: "3rd age group · Wasfi Al-Tall Forest · 483 m", mA: "الثالث في الفئة · حرش وصفي التل · 483 م", tone: "pod", alt: "Fuad Abu Safi crossing the finish line at the Jordan EcoTrail Run", altA: "فؤاد أبو صافي يعبر خط النهاية في الدرب البيئي الأردني" },
  { src: "g-valencia-finisher",span: "g2", t: "Sub-3 in the debut", tA: "تحت 3 ساعات في أول ماراثون", m: "2:50:57 · Valencia · Dec 2025", mA: "2:50:57 · فالنسيا · كانون الأول 2025", tone: "win", alt: "Fuad Abu Safi with his finisher medal at the Valencia Marathon", altA: "فؤاد أبو صافي مع ميدالية إنهاء ماراثون فالنسيا" },
  { src: "g-pyramids-road",    span: "g2", t: "Race through history", tA: "سباق عبر التاريخ", m: "Giza, Egypt · Dec 2024", mA: "الجيزة، مصر · كانون الأول 2024", tone: "", alt: "Fuad Abu Safi racing on the desert road at the Pyramids Half Marathon", altA: "فؤاد أبو صافي على طريق الصحراء في نصف ماراثون الأهرامات" },
  { src: "g-amman-medal",      span: "g2", t: "Bromine Amman Half Marathon", tA: "نصف ماراثون عمّان", m: "5th overall · 1:20:48 · home race", mA: "الخامس عموماً · 1:20:48 · سباق البيت", tone: "", alt: "Fuad Abu Safi with his medal at the Bromine Amman Half Marathon", altA: "فؤاد أبو صافي مع ميداليته في نصف ماراثون عمّان" },
  { src: "g-pyramids-turn",    span: "g2", t: "Holding the pace", tA: "الثبات على الوتيرة", m: "3:51 /km · Pyramids Half", mA: "3:51 لكل كم · نصف الأهرامات", tone: "", alt: "Fuad Abu Safi holding pace at the 21 km turn of the Pyramids Half Marathon", altA: "فؤاد أبو صافي عند نقطة الالتفاف في نصف ماراثون الأهرامات" },
  { src: "g-ecotrail-podium",  span: "g3", t: "Jordan EcoTrail — podium", tA: "الدرب البيئي الأردني — المنصة", m: "Organised by Unlimited Distances · Jun 2025", mA: "تنظيم مسافات بلا حدود · حزيران 2025", tone: "", alt: "Podium ceremony at the 4th Jordan EcoTrail Run", altA: "منصة التتويج في الدرب البيئي الأردني الرابع" },
  { src: "g-pyramids-podium",  span: "g3", t: "Pyramids Half Marathon — podium", tA: "نصف ماراثون الأهرامات — المنصة", m: "4th age group · Giza, Egypt", mA: "الرابع في الفئة · الجيزة، مصر", tone: "pod", alt: "Fuad Abu Safi on the podium at the Pyramids Half Marathon in Giza", altA: "فؤاد أبو صافي على منصة نصف ماراثون الأهرامات" },
  { src: "g-valencia-flags",   span: "sq g2", t: "Representing Jordan", tA: "تمثيل الأردن", m: "Valencia Marathon international ambassadors", mA: "سفراء ماراثون فالنسيا الدوليون", tone: "", alt: "International runners representing their countries at the Valencia Marathon", altA: "عدّاؤون دوليون يمثلون بلدانهم في ماراثون فالنسيا" },
  { src: "g-valencia-expo",    span: "sq g2", t: "Race week", tA: "أسبوع السباق", m: "Valencia expo · bib collection", mA: "معرض فالنسيا · استلام الرقم", tone: "", alt: "Fuad Abu Safi collecting his race number at the Valencia Marathon expo", altA: "فؤاد أبو صافي يستلم رقم السباق في معرض فالنسيا" },
];
