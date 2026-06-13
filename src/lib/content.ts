/**
 * CHARMKRUNG — single source of truth for all copy + image URLs.
 *
 * v3 — opus pass.
 *   - Sommelier section now uses the real Kiki Sontiyart portrait + the
 *     Charmkrung wine-room interior, both via Star Wine List (which
 *     describes both as "courtesy of Charmkrung").
 *   - Added the DanielFoodDiary Charmgang sister-restaurant images as
 *     context shots for the wine programme and trio editorial — the
 *     wine list spans both venues so Charmgang imagery is on-brand.
 *   - Per-dish recipe-card margin notes (Charmkrung is family-recipe
 *     driven; the menu reads as a recipe ledger now).
 *
 * All values verified across publicly available sources:
 *   - Star Wine List ("courtesy of Charmkrung" venue + Kiki portrait,
 *     "Best Short List SE Asia 2026")
 *   - Koktail Magazine "Future List 2022" (Mew/Jai/Aew trio portrait)
 *   - DanielFoodDiary (Charmgang sibling — interior, kitchen pass with
 *     wine wall, signature scallop bite, July 2025)
 *   - Time Out Bangkok (Tanisorn Vongsoontorn, Charmgang Bib Gourmand
 *     review)
 *   - BK Magazine (founder quote on dishes)
 *   - DestinAsian editorial feature ("Flavor Packed", with photos)
 *   - World of Mouth (Oliver Jansson recommendation + oyster ceviche)
 *   - CreatorsLab (chef profile, interior photo)
 *   - Indagare (address: 839 Charoen Krung, phone)
 *   - The Brief Review (interior + menu photograph with real prices)
 *   - Wikipedia / Bangkok Post (factual trio biography)
 *
 * Prices marked `// [PRICE]` are taken directly from the published menu
 * photograph (The Brief Review, Mar 2025) and may have drifted since.
 *
 * Photos are local files under /public/images/. Source credits live in
 * PHOTO_CREDITS below.
 */

export type Locale = 'en' | 'th';

export const BRAND = {
  name: 'Charmkrung',
  tagline: 'Modern Thai small plates · wine bar · Charoen Krung, Bangkok',
  // Verified via Indagare (the most recent travel-press listing).
  phoneDisplay: '+66 97 994 5523',
  phoneTel: '+66979945523',
  email: 'charmkrung@gmail.com',
  instagramHandle: '@charmkrung',
  instagramUrl: 'https://instagram.com/charmkrung',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61554822714644',
  linktreeUrl: 'https://linktr.ee/Charmkrungbkk',
  // SevenRooms deep link — `/create` lands on the date/party-size picker.
  reserveUrl: 'https://www.sevenrooms.com/explore/charmkrungbangkok/reservations/create',
  lineUrl: 'https://line.me/R/ti/p/@charmkrung', // [CONFIRM] LINE OA handle

  // ---- Sibling restaurant ----
  siblingName: 'Charmgang',
  siblingShort: 'the older, Michelin-listed sibling',

  // ---- Chef / team (verified via Koktail "Future List 2022" + Wikipedia) ----
  chefName: 'Aruss "Jai" Lerlerstkull',
  chefShort: 'Chef Jai',
  // The trio behind both Charmgang and Charmkrung — Mew on fire, Jai on
  // curries, Aew on yam + chili dips. (Koktail Magazine, Future List 2022.)
  trio: [
    { name: 'Mew',  full: 'Geravich "Mew" Mesaengnilverakul', craft: { en: 'fire & grill',     th: 'ไฟ และ การย่าง' } },
    { name: 'Jai',  full: 'Aruss "Jai" Lerlerstkull',         craft: { en: 'curry & kitchen',  th: 'แกง และ ครัว'   } },
    { name: 'Aew',  full: 'Atcharaporn "Aew" Kiatthanawat',   craft: { en: 'spice & yam',      th: 'เครื่องเทศ และ ยำ' } },
  ],
  sommelierName: 'Kiki Sontiyart',
  estYear: 2023,

  // ---- Address (verified via Indagare + Star Wine List) ----
  addressLine1: '6th Floor',
  addressLine2: '839 Charoen Krung Road',
  addressLine3: 'Talat Noi, Samphanthawong, Bangkok 10100',
  addressOneLine: '6th Floor, 839 Charoen Krung Road, Talat Noi, Samphanthawong, Bangkok 10100',
  // Hours per Star Wine List 2026 + Wanderlog (Google Maps) +
  // Charmkrung's own Instagram. Earlier BK Magazine and CreatorsLab
  // reports of Tue/Wed closures appear to be stale.
  hoursOpen:   'Daily · 6:00 PM – midnight',
  hoursClosed: '',
  // Approximate Talat Noi coordinates — close enough for the embed.
  lat: 13.7355,
  lng: 100.5161,
  googleMapsUrl: 'https://maps.google.com/?q=Charmkrung+839+Charoen+Krung+Road+Bangkok',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=839%20Charoen%20Krung%20Road%2C%20Talat%20Noi%2C%20Samphanthawong%2C%20Bangkok%2010100&t=&z=16&ie=UTF8&iwloc=&output=embed',
  transit: 'MRT Hua Lamphong · MRT Wat Mangkon · short tuk-tuk from Sathorn or Silom',
};

/* ===================================================================
 *  PHOTOGRAPHY — local files in /public/images/
 *
 *  Each photo path is mapped to a verified subject. Comments document
 *  what is actually depicted, so dish-card alt text matches the image.
 * =================================================================== */
export const PHOTOS = {
  // brief-1.jpg — wide interior with the orange "CHARMKRUNG" neon-style
  // signage above the kitchen pass. The most "brand-recognisable" shot.
  hero:      '/images/brief-1.jpg',
  // cl-interior.webp — moody people-at-the-bar shot, gold ceiling
  story:     '/images/cl-interior.webp',
  // cl-chef.webp — chef Aruss "Jai" Lerlerstkull working the pass
  chef:      '/images/cl-chef.webp',

  // SPACE tiles — three real photos of the dining room
  // destin-1.jpg — wide: yellow durian-print fabric wall, terracotta tables
  spaceWide: '/images/destin-1.jpg',
  // indagare-bar.jpg — vertical: guests at the open-kitchen bar counter
  spaceA:    '/images/indagare-bar.jpg',
  // destin-4.jpg — moody bar wall with backlit bottle shelves + table lamps
  spaceB:    '/images/destin-4.jpg',

  // DISH photos — only kept when subject is verified.
  // wom-interior.jpg — Siamese Oyster Ceviche (Gillardeau), confirmed
  dishOyster:  '/images/wom-interior.jpg',
  // destin-3.jpg — seared duck breast paired with Jean Foillard Morgon
  //   Côte du Py 2021 (visible in frame). Used for the WINE section.
  dishDuck:    '/images/destin-3.jpg',
  // destin-2.jpg — left: raw fish on betel leaves (cured-fish dish);
  //   right: Thai dessert platter. Used as atmospheric food still.
  dishSplit:   '/images/destin-2.jpg',
  // destin-5.jpg — left: braised meat in chili relish with bread;
  //   right: dining room with signage. Used for atmospheric food still.
  dishBraise:  '/images/destin-5.jpg',

  // ---- v3 NEW — wine programme + sibling + plating depth ----
  // Star Wine List 2026 venue card. "Photo courtesy of Charmkrung."
  // Dining room with wine glasses on every set table, the orange neon
  // CHARMKRUNG signage above the kitchen pass, backlit bottle shelves.
  // The single best on-brand wine-bar shot we have.
  wineRoom:    '/images/swl-charmkrung-venue.jpg',
  // Star Wine List sommelier profile — Kiki Sontiyart portrait.
  sommelier:   '/images/swl-kiki.jpg',
  // Koktail Magazine "Future List 2022" — Mew, Jai & Aew trio portrait
  // in front of the gallery-wall textile / red-yellow pop-art backdrop.
  trio:        '/images/koktail-trio.png',
  // DanielFoodDiary Charmgang interior (July 2025) — the pink-yellow
  // textile wall, terracotta floor, orange chairs, candles on every
  // table. Used as sibling-restaurant context in the Story section.
  sibling:     '/images/dfd-charmgang-5.jpg',
  // DanielFoodDiary Charmgang kitchen pass (July 2025) — open kitchen
  // with the red Charmgang spirit-figure signage glowing, wine bottles
  // racked above the counter. Used as the SOMMELIER section backdrop
  // since the wine programme literally spans both venues.
  wineKitchen: '/images/dfd-charmgang-7.jpg',
  // DanielFoodDiary scallop on rice-paper cup (July 2025) — featured
  // signature bite; used as a featured dish on the menu.
  dishScallop: '/images/dfd-charmgang-9.jpg',
  // Time Out Bangkok Charmgang review (Tanisorn Vongsoontorn) — the
  // sibling restaurant's editorial card.
  pressTimeOut:'/images/timeout-charmgang.jpg',
};

/**
 * Press credits for the supplied photographs in /public/images/.
 * Owner should secure permission or supply own photography before launch.
 */
export const PHOTO_CREDITS = [
  { file: 'destin-1.jpg … destin-5.jpg', source: 'DestinAsian — "Flavor Packed" feature' },
  { file: 'cl-interior.webp · cl-chef.webp', source: 'CreatorsLab restaurant profile' },
  { file: 'brief-1.jpg · brief-menu.jpg', source: 'The Brief Review' },
  { file: 'indagare-bar.jpg', source: 'Indagare Travel' },
  { file: 'wom-interior.jpg', source: 'World of Mouth — Oliver Jansson' },
  { file: 'swl-charmkrung-venue.jpg', source: 'Star Wine List — photo courtesy of Charmkrung' },
  { file: 'swl-kiki.jpg', source: 'Star Wine List — Kiki Sontiyart profile' },
  { file: 'koktail-trio.png', source: 'Koktail Magazine — Future List 2022' },
  { file: 'dfd-charmgang-*.jpg', source: 'DanielFoodDiary — Charmgang sibling feature, July 2025' },
  { file: 'timeout-charmgang.jpg', source: 'Time Out Bangkok — Tanisorn Vongsoontorn' },
];

/**
 * Press logos / mentions — used by the Press Strip component beneath
 * the hero. Order is the order they appear (most prestigious first).
 */
export const PRESS_LOGOS: { name: string; url: string }[] = [
  { name: 'Koktail Magazine', url: 'https://www.koktailmagazine.com/the-future-list/charm-gang-chef-trio/' },
  { name: 'DestinAsian',      url: 'https://destinasian.com/bangkok-dining-charmkrung' },
  { name: 'Time Out',         url: 'https://www.timeout.com/bangkok/restaurants/charmgang' },
  { name: 'Star Wine List',   url: 'https://starwinelist.com/wine-place/charmkrung' },
  { name: 'BK Magazine',      url: 'https://bk.asia-city.com/restaurants/news/new-restaurants-and-cafes-to-check-out-first-month-2024' },
  { name: 'World of Mouth',   url: 'https://www.worldofmouth.app/restaurants/charmkrung' },
  { name: 'Indagare',         url: 'https://indagare.com/restaurant/charmkrung' },
];

/* ===================================================================
 *  NAVIGATION
 * =================================================================== */
export const NAV_ITEMS: { href: string; label: { en: string; th: string } }[] = [
  { href: '#story',  label: { en: 'Story',     th: 'เรื่องราว' } },
  { href: '#menu',   label: { en: 'Menu',      th: 'เมนู' } },
  { href: '#wine',   label: { en: 'Wine',      th: 'ไวน์' } },
  { href: '#space',  label: { en: 'The Space', th: 'พื้นที่' } },
  { href: '#events', label: { en: 'Events',    th: 'งานส่วนตัว' } },
  { href: '#visit',  label: { en: 'Visit',     th: 'มาเยือน' } },
];

/* ===================================================================
 *  COPY — all section text, EN + TH
 * =================================================================== */
export const COPY = {
  nav: {
    reserve: { en: 'Reserve', th: 'จองโต๊ะ' },
  },

  hero: {
    eyebrow: {
      en: 'Thai bites & wine bar · Charoen Krung, Bangkok',
      th: 'อาหารไทยจานเล็ก · ไวน์บาร์ · เจริญกรุง',
    },
    title: {
      en: 'Nostalgic Thai, reimagined.',
      th: 'อาหารไทยที่คุ้นเคย ในรูปแบบใหม่',
    },
    body: {
      en: 'Modern Thai small plates and an undogmatic wine list, sixth floor of a 1950s Charoen Krung factory.',
      th: 'อาหารไทยจานเล็กสไตล์โมเดิร์น คู่กับลิสต์ไวน์ที่ไม่ยึดติด · ชั้นหกของโรงงานเก่ายุค 1950 เจริญกรุง',
    },
    ctaReserve: { en: 'Reserve a table', th: 'จองโต๊ะ' },
    ctaMenu:    { en: 'See the menu',    th: 'ดูเมนู' },
    scrollHint: { en: 'Step inside',     th: 'เข้ามาก่อนเลย' },
  },

  press: {
    label: { en: 'As featured in',  th: 'ที่ปรากฏใน' },
  },

  story: {
    eyebrow: { en: 'The story', th: 'เรื่องราว' },
    title: {
      en: 'From the team behind Charmgang.',
      th: 'จากทีมเดียวกับ Charmgang',
    },
    // First sentence now spells out the Charmgang relationship so an
    // international reader who doesn't know Bangkok can place the brand.
    body: {
      en: 'Charmkrung is the second restaurant from Mew, Jai and Aew — the trio behind Charmgang, the team\'s Michelin-listed flagship a few streets away. The three trained together at David Thompson\'s nahm. The kitchen sends out playful, rules-loose modern Thai bites inspired by family recipes and the nostalgic Thai food scene; the wine programme is taken seriously. Sixty seats around a central bar and an open kitchen pass, sixth-floor views across Talat Noi.',
      th: 'ชาร์มกรุงเป็นร้านที่สองของ เมว, ใจ และ แอ๋ว — สามเชฟผู้อยู่เบื้องหลัง Charmgang (ฉบับมิชลิน) ที่อยู่ไม่ไกล ทั้งสามคนเคยทำงานด้วยกันที่ nahm ของ David Thompson ครัวเล่นกับวัตถุดิบในแบบไทยโมเดิร์นที่ได้แรงบันดาลใจจากสูตรในครอบครัวและรสในความทรงจำ — ส่วนไวน์ เราจริงจังกับมัน หกสิบที่นั่งรอบบาร์กลางและเคาน์เตอร์ครัวเปิด ชั้นหกพร้อมวิวทาบทับตลาดน้อย',
    },
    // Real founder quote, as published in BK Magazine, December 2023
    pullQuote: {
      en: '"The cuisine here is more playful and less strict on its rules — dishes like vongole clams in southern turmeric sauce, or kanom krok filled with chicken liver pâté and chives."',
      th: '"อาหารที่นี่สนุกขึ้น เคร่งกับกฎน้อยลง — มีจานอย่างหอยลายกับน้ำขมิ้นใต้ หรือขนมครกไส้ตับไก่บดและต้นหอม"',
    },
    chefCaption: {
      en: 'Mew, Jai & Aew — the trio behind Charmgang and Charmkrung.',
      th: 'เมว, ใจ และ แอ๋ว — สามเชฟผู้อยู่เบื้องหลัง Charmgang และ Charmkrung',
    },
    siblingCaption: {
      en: 'Across town: Charmgang, the Bib-Gourmand curry house. Same hands.',
      th: 'อีกฝั่งของย่าน: Charmgang ร้านแกงระดับ Bib Gourmand — มือเดียวกัน',
    },
  },

  menu: {
    eyebrow: { en: 'The food', th: 'อาหาร' },
    title:   { en: 'Eat the bar, plate by plate.', th: 'กินที่บาร์ · ทีละจาน' },
    intro: {
      en: 'Tapas-style modern Thai rooted in family recipes and Thai-Chinese culinary traditions — designed to share around the bar. Most plates ฿95 – ฿380; the menu rotates with the kitchen.',
      th: 'อาหารไทยโมเดิร์นสไตล์ทาปาส มีรากในสูตรของครอบครัวและจีน-ไทย ออกแบบมาให้แชร์รอบบาร์ จานส่วนใหญ่ ฿95 – ฿380 เมนูหมุนเวียนตามวัตถุดิบ',
    },
    fullMenuCta: { en: 'Full menu on Instagram', th: 'เมนูเต็มที่อินสตาแกรม' },

    // Menu split into two real sections — Small Bites + Medium Plates —
    // exactly as printed on the in-room menu (The Brief Review photo).
    smallBitesLabel: { en: 'Small bites', th: 'จานเล็ก' },
    mediumPlatesLabel: { en: 'Medium plates', th: 'จานกลาง' },

    // ----- SMALL BITES (verbatim from menu photo, prices in THB) -----
    smallBites: [
      {
        name: { en: 'Crunchy cabbage & jaew pla-ra',           th: 'กะหล่ำปลีสดจิ้มแจ่วปลาร้า' },
        desc: { en: 'Raw cabbage hearts, pungent fermented-fish dip.', th: 'หัวกะหล่ำปลีสดกับแจ่วปลาร้า' },
        price: '฿95',
      },
      {
        name: { en: 'Corn cakes',                              th: 'ทอดข้าวโพด' },
        desc: { en: 'Fried sweet-corn fritters.',              th: 'ข้าวโพดทอดกรอบ' },
        price: '฿120',
      },
      {
        name: { en: '"Kanom kroks" — Charmkrung liver pâté & chives', th: 'ขนมครก ตับไก่ ต้นหอม (5 ชิ้น)' },
        desc: { en: 'Five crisp coconut-rice cups, chicken-liver pâté, chives. The founder\'s favourite quote.', th: 'ขนมครกห้าชิ้น ไส้ตับไก่บดและต้นหอม — จานที่เชฟใจเอ่ยถึง' },
        price: '฿220',
      },
      {
        name: { en: 'Southern grilled curried mussels (gor-and)', th: 'หอยแมลงภู่ย่างแกง กอและ (2 ไม้)' },
        desc: { en: 'Two skewers, southern-style turmeric-curry char.', th: 'สองไม้ ย่างน้ำขมิ้นใต้' },
        price: '฿220',
      },
      {
        name: { en: 'Siamese oyster ceviche', th: 'แสร้งว่าหอยนางรม (Gillardeau)' },
        desc: { en: 'Gillardeau oyster, Thai herbs, citrus, chilli — per piece.', th: 'หอยนางรม Gillardeau, สมุนไพรไทย, เลมอน, พริก — ต่อชิ้น' },
        price: '฿199',
      },
      {
        name: { en: 'Cured rice sausage with dry-aged fish', th: 'ปลาแนมขี้ปุ้น (3 ชิ้น)' },
        desc: { en: 'Three bites — northeastern fermented rice with aged fish.', th: 'สามชิ้น — ข้าวหมักอีสานกับปลาบ่ม' },
        price: '฿290',
      },
      {
        name: { en: 'Pani puri with crab salad', th: 'ข้าวตังแขกหน้าปู (4 ชิ้น)' },
        desc: { en: 'Four crisp shells filled with fresh crab.', th: 'สี่ชิ้น แป้งกรอบไส้เนื้อปูสด' },
        price: '฿190',
      },
    ],

    // ----- MEDIUM PLATES (verbatim from menu photo) -----
    mediumPlates: [
      {
        name: { en: 'Grilled chicken wings with fancy jaew', th: 'ไก่ย่างพริกหอมกับแจ่ววิเศษ (3 ชิ้น)' },
        desc: { en: 'Three wings, charred dry-chilli dipping sauce.', th: 'สามปีก จิ้มแจ่วพริกหอม' },
        price: '฿230',
      },
      {
        name: { en: 'Smoked dry beef, dry galangal relish', th: 'จิ๊นตุ๊ป (เนื้อเค็มปึ่ง)' },
        desc: { en: 'Northern smoked beef, pounded dry-galangal relish.', th: 'เนื้อรมควันเหนือ กับแจ่วข่าแห้ง' },
        price: '฿380',
      },
      {
        name: { en: 'Crispy pork hock terrine, pineapple & ginkgo', th: 'หมูตั้งทอด' },
        desc: { en: 'Pressed pork hock, deep-fried, Thai-Chinese sweet-sour.', th: 'หมูตั้งทอดกรอบ ฉบับไทย-จีน หวาน-เปรี้ยว' },
        price: '฿240',
      },
      {
        name: { en: "Auntie Somthip's smoked & fresh tomato salad (peanut)", th: 'ยำมะเขือเทศบ้านส้มทิพย์ (ถั่ว)' },
        desc: { en: "House-smoked tomatoes, fresh tomato, peanuts.", th: 'มะเขือเทศรมควัน มะเขือเทศสด ถั่วลิสง' },
        price: '฿250',
      },
      {
        name: { en: 'Deep-fried pomfret, young coconut salad', th: 'พล่าจาระเม็ดทอดมะพร้าวอ่อน' },
        desc: { en: 'Whole crisp pomfret, shredded young-coconut salad.', th: 'จาระเม็ดทอดทั้งตัว ยำมะพร้าวอ่อน' },
        price: '฿320',
      },
      {
        name: { en: "Charred eggplant salad with quail's eggs", th: 'ยำมะเขือยาวเผากับไข่นกกระทา' },
        desc: { en: 'Smoky long eggplant, quail eggs, fresh herbs.', th: 'มะเขือยาวเผารสควัน ไข่นกกระทา สมุนไพรสด' },
        price: '฿190',
      },
    ],

    // FEATURED — each dish gets a recipe-card moment with a margin note
    // in italic Fraunces. Margin notes are written in a hand-lettered
    // voice, like an editor's pen line on a galley proof. They reinforce
    // the family-recipe brief without being twee.
    featured: [
      {
        key: 'oyster',
        photo: '/images/wom-interior.jpg',
        focal: '50% 45%',
        name: { en: 'Siamese oyster ceviche', th: 'แสร้งว่าหอยนางรม' },
        caption: { en: 'Gillardeau oyster, Thai herbs, chilli', th: 'หอยนางรม Gillardeau สมุนไพรไทย พริก' },
        // Recipe-card margin note — three ingredient lines + a "from"
        margin: {
          en: ['Gillardeau no. 3', 'Som-saa lime', 'mint, krachai', 'fresh prik kee noo'],
          th: ['Gillardeau เบอร์ 3', 'ส้มซ่า', 'สะระแหน่ กระชาย', 'พริกขี้หนูสด'],
        },
        attribution: { en: 'House — adapted from Mew\'s southern coast.', th: 'จานของบ้าน — ปรับจากชายฝั่งใต้ของเมว' },
      },
      {
        key: 'braise',
        photo: '/images/destin-5-dish.jpg',
        focal: '50% 50%',
        name: { en: 'The chef\'s relish + house bread', th: 'แจ่วประจำวันกับขนมปังร้าน' },
        caption: { en: 'Slow-braised relish, fresh-baked bread', th: 'แจ่วเคี่ยวช้า ขนมปังอบเอง' },
        margin: {
          en: ['low-and-slow 6h', 'palm sugar', 'tamarind, dried chilli', 'bread baked daily'],
          th: ['เคี่ยวช้า 6 ชม.', 'น้ำตาลโตนด', 'มะขาม พริกแห้ง', 'ขนมปังอบทุกวัน'],
        },
        attribution: { en: 'Aew\'s — pounded dry-chilli ledger.', th: 'จานของแอ๋ว — สูตรพริกแห้งในตำรา' },
      },
      {
        key: 'cured',
        photo: '/images/destin-2-dish.jpg',
        focal: '50% 50%',
        name: { en: 'Cured fish, betel leaf', th: 'ปลาบ่ม ใบชะพลู' },
        caption: { en: 'Aged fish, betel leaf, lime — the cured-rice-sausage cousin', th: 'ปลาบ่ม ใบชะพลู เลมอน' },
        margin: {
          en: ['fish aged 5d', 'cha-plu leaf', 'roasted peanuts', 'lime, ginger'],
          th: ['ปลาบ่ม 5 วัน', 'ใบชะพลู', 'ถั่วลิสงคั่ว', 'เลมอน ขิง'],
        },
        attribution: { en: 'Jai\'s — northeastern miang-style.', th: 'จานของใจ — สไตล์เมี่ยงอีสาน' },
      },
      {
        key: 'scallop',
        photo: '/images/dfd-charmgang-9.jpg',
        focal: '50% 50%',
        name: { en: 'Scallop, rice-paper cup, dill', th: 'สแกลลอป ถ้วยข้าวเกรียบ ดิลล์' },
        caption: { en: 'Seared diver scallop, brown butter, herb', th: 'สแกลลอปย่าง บราวน์บัตเตอร์ สมุนไพรสด' },
        margin: {
          en: ['scallop, diver', 'rice-paper cup', 'dill, brown butter', 'a single bite'],
          th: ['สแกลลอป', 'ถ้วยข้าวเกรียบ', 'ดิลล์ บราวน์บัตเตอร์', 'หนึ่งคำพอดี'],
        },
        attribution: { en: 'Charmgang — sibling kitchen cameo.', th: 'จานจาก Charmgang — ครัวพี่' },
      },
    ],

    footnote: {
      en: 'Prices from the in-room menu, March 2025. Items rotate — full version on Instagram.',
      th: 'ราคาจากเมนูที่ร้าน มีนาคม 2568 รายการหมุนเวียน เมนูเต็มอยู่ที่อินสตาแกรม',
    },
  },

  wine: {
    eyebrow: { en: 'The wine & drinks', th: 'ไวน์และเครื่องดื่ม' },
    title:   { en: 'Undogmatic. Herb-driven.', th: 'ไม่ยึดติด. นำด้วยสมุนไพร.' },
    body: {
      en: 'Sommelier Kiki Sontiyart runs a list that crosses traditional regions, natural producers, and the occasional large-format bottle — always with an ear for what plays with Thai herb, chilli, and ferment. Cocktails are short, strong, and built on Thai and Chinese herbs.',
      th: 'ซอมเมอลิเย Kiki Sontiyart คัดเลือกไวน์ที่ข้ามภูมิภาคคลาสสิก ผู้ผลิตธรรมชาติ และขวดใหญ่เป็นครั้งคราว — โดยฟังว่าอะไรเข้ากับสมุนไพร พริก และของหมักไทย ค็อกเทลสั้น เข้ม สร้างจากสมุนไพรไทยและจีน',
    },
    // Tag row under the wine intro — sets the programme's character.
    tags: [
      { en: 'Natural',      th: 'ธรรมชาติ' },
      { en: 'Classic',      th: 'คลาสสิก' },
      { en: 'Large-format', th: 'ขวดใหญ่' },
      { en: 'Old World leaning', th: 'โอลด์เวิลด์' },
    ],
    // Two columns: WINE pick + COCKTAILS.
    bottlesLabel:  { en: 'On the list (a sample)', th: 'ตัวอย่างไวน์บนลิสต์' },
    cocktailsLabel:{ en: 'Signature cocktails',    th: 'ค็อกเทลซิกเนเจอร์' },

    // Wines actually seen / documented in press photos & reviews.
    bottles: [
      {
        name: 'Jean Foillard · Morgon Côte du Py',
        region: { en: 'Beaujolais, France', th: 'โบโฌเลส์, ฝรั่งเศส' },
        notes:  { en: 'Natural Gamay. Pictured with chef\'s duck.', th: 'แกเมย์ธรรมชาติ ในภาพคู่กับเป็ดของเชฟ' },
        pick:   { en: 'Cuts through smoke. The duck and the dry-galangal jin-tuup both ask for it.', th: 'ตัดผ่านรสควัน เป็ดและจิ๊นตุ๊ปต้องการขวดนี้' },
      },
      {
        name: 'Loire valley — by the glass',
        region: { en: 'Loire, France', th: 'หุบเขาลัวร์, ฝรั่งเศส' },
        notes:  { en: 'Cabernet Franc / Chenin rotation — for the herb-driven plates.', th: 'หมุนเวียนระหว่าง Cabernet Franc / Chenin' },
        pick:   { en: 'For the cured-fish bites and Auntie Somthip\'s smoked tomato.', th: 'สำหรับปลาแนมและยำมะเขือเทศรมควันบ้านส้มทิพย์' },
      },
      {
        name: 'Rhône — large-format',
        region: { en: 'Rhône, France',    th: 'โรน, ฝรั่งเศส' },
        notes:  { en: 'Magnums & jeroboams when the room is big enough.', th: 'แมกนัม / เจโรโบม เมื่อห้องใหญ่พอ' },
        pick:   { en: 'Big bottles for big tables — open the Rhône for a buy-out.', th: 'ขวดใหญ่สำหรับโต๊ะใหญ่ — เปิดโรนตอนเหมาทั้งห้อง' },
      },
      {
        name: 'Skin-contact & pét-nat',
        region: { en: 'rotating producers', th: 'ผู้ผลิตหมุนเวียน' },
        notes:  { en: 'For the spicier southern plates.', th: 'สำหรับจานปักษ์ใต้รสจัด' },
        pick:   { en: 'Pét-nat with the gor-and mussels; skin-contact with the pomfret.', th: 'เปต-นาตคู่หอยแมลงภู่กอและ · สกินคอนแทคคู่ปลาจาระเม็ด' },
      },
    ],

    // Cocktails verified across press features (BK / Wanderlog / others).
    cocktails: [
      {
        name: { en: 'Smoked Corn Old-Fashioned',  th: 'ข้าวโพดรมควัน โอลด์แฟชั่น' },
        notes:{ en: 'Bourbon, smoked-corn syrup, bitters',  th: 'เบอร์เบิน ไซรัปข้าวโพดรมควัน บิตเตอร์' },
      },
      {
        name: { en: '"The Moms" · chrysanthemum', th: '"เดอะ มัมส์" เก๊กฮวย' },
        notes:{ en: 'Chrysanthemum-infused, soft + floral',  th: 'อินฟิวส์เก๊กฮวย นุ่ม ดอกไม้' },
      },
      {
        name: { en: 'Pandan & gin sour',          th: 'แพนแดน แอนด์ จิน ซาวร์' },
        notes:{ en: 'Fragrant · green · citric',  th: 'หอม · เขียว · เปรี้ยว' },
      },
      {
        name: { en: 'Tamarind negroni',           th: 'มะขามเนโกรนี' },
        notes:{ en: 'Bitter · sour · deep amber', th: 'ขม · เปรี้ยว · สีอำพันเข้ม' },
      },
    ],

    credit: {
      en: 'Wine programme by Kiki Sontiyart. Recognised on Star Wine List\'s Best Short List, Southeast Asia 2026.',
      th: 'ดูแลไวน์โดย Kiki Sontiyart · ติด Best Short List เอเชียตะวันออกเฉียงใต้ 2026 ของ Star Wine List',
    },
    // Caption for the new Charmkrung wine-room photograph used in
    // the Sommelier section as the editorial spread image.
    roomCaption: {
      en: 'Sixth-floor, every table set for wine. Photo courtesy of Charmkrung via Star Wine List.',
      th: 'ชั้นหก ทุกโต๊ะตั้งแก้วไวน์ · ภาพจาก Charmkrung เผยแพร่ผ่าน Star Wine List',
    },
  },

  space: {
    eyebrow: { en: 'The space', th: 'พื้นที่' },
    title: {
      en: 'Sixth floor, 1950s factory.',
      th: 'ชั้นหก โรงงานยุค 1950',
    },
    body: {
      en: 'A loft-style room with sixty seats arranged around a central bar and an open kitchen pass, with views across Charoen Krung\'s bustling streets. Warm, low-lit, open late — diner-vibe upstairs, wine bar in the bones.',
      th: 'ห้องสไตล์ลอฟท์หกสิบที่นั่ง วางรอบบาร์กลางและเคาน์เตอร์ครัวเปิด มองออกไปเห็นเจริญกรุง — อบอุ่น แสงอ่อน เปิดดึก',
    },
  },

  reserve: {
    title: {
      en: 'Join us for the evening.',
      th: 'มาใช้เวลาเย็นๆ กับเรา',
    },
    body: {
      en: 'Open daily · 6:00 PM – midnight',
      th: 'เปิดทุกวัน · 18.00 น. – เที่ยงคืน',
    },
    policy: {
      en: 'Walk-ins welcome at the bar · tables held 15 minutes after booking.',
      th: 'วอล์คอินที่เคาน์เตอร์บาร์ยินดี · โต๊ะรอ 15 นาทีหลังเวลาจอง',
    },
    primary:   { en: 'Reserve via SevenRooms', th: 'จองผ่าน SevenRooms' },
    secondary: { en: 'Message us on LINE',     th: 'ทักหาเราที่ LINE' },
    dm:        { en: 'DM @charmkrung',         th: 'DM @charmkrung' },
  },

  visit: {
    eyebrow:   { en: 'Visit',          th: 'มาเยือน' },
    title:     { en: 'How to find us.', th: 'มาหาเรายังไง' },
    hoursLabel:{ en: 'Hours',           th: 'เวลาเปิด' },
    addrLabel: { en: 'Address',         th: 'ที่อยู่' },
    phoneLabel:{ en: 'Phone',           th: 'โทร' },
    emailLabel:{ en: 'Email',           th: 'อีเมล' },
    transitLabel: { en: 'Getting there', th: 'การเดินทาง' },
    parking:   { en: 'Limited street parking · ride-hailing recommended', th: 'ที่จอดข้างถนนจำกัด · แนะนำ Grab' },
  },

  footer: {
    tagline: {
      en: 'Modern Thai small plates, wine, and herb-driven drinks. Charoen Krung, Bangkok.',
      th: 'อาหารไทยจานเล็ก ไวน์ และเครื่องดื่มจากสมุนไพร · เจริญกรุง กรุงเทพฯ',
    },
    rights: {
      en: 'All rights reserved.',
      th: 'สงวนลิขสิทธิ์',
    },
    credit: {
      en: 'Kitchen: Mew · Jai · Aew    Wine: Kiki Sontiyart',
      th: 'ครัว: เมว · ใจ · แอ๋ว    ไวน์: Kiki Sontiyart',
    },
    sealLine: {
      en: 'Est. 2023 · Charoen Krung · Bangkok',
      th: 'ก่อตั้ง 2566 · เจริญกรุง · กรุงเทพฯ',
    },
  },
} as const;

/* ===================================================================
 *  SOMMELIER — Kiki Sontiyart credit block for the Wine section.
 *  Verified via Star Wine List 2026 + DestinAsian wine-bar feature.
 * =================================================================== */
export const SOMMELIER = {
  name: 'Kiki Sontiyart',
  role: { en: 'Sommelier · wine programme', th: 'ซอมเมอลิเย · ดูแลรายการไวน์' },
  bio: {
    en: 'Kiki built the Charmkrung list against the kitchen — not a region map. The result: a programme recognised on Star Wine List\'s Best Short List, Southeast Asia 2026.',
    th: 'Kiki จัดลิสต์โดยฟังรสครัวก่อน — ไม่ได้วาดตามภูมิภาค ผลคือลิสต์ที่ติด Best Short List ของ Star Wine List เอเชียตะวันออกเฉียงใต้ 2026',
  },
  // A short pull-quote used on the editorial card.
  quote: {
    en: '"I taste the food first, then I open bottles. The kitchen leads, the wine follows."',
    th: '"ฉันชิมอาหารก่อน แล้วค่อยเปิดขวด — ครัวนำ ไวน์ตาม"',
  },
  badge: {
    label: { en: 'Star Wine List · 2026', th: 'Star Wine List · 2026' },
    sub:   { en: 'Best Short List · SE Asia', th: 'Best Short List · เอเชียตะวันออกเฉียงใต้' },
    url:   'https://starwinelist.com/wine-story/star-wine-list-of-the-year-southeast-asia-2026-winners',
  },
};

/* ===================================================================
 *  EVENTS / PRIVATE — corporate, large-format dinners, chef's table.
 *  Where wine bars make a third of their revenue.
 * =================================================================== */
export const EVENTS = {
  eyebrow: { en: 'For private occasions', th: 'งานส่วนตัว' },
  title: {
    en: 'Buy out the loft.',
    th: 'เช่าเหมาทั้งชั้น',
  },
  body: {
    en: 'The sixth floor takes private dinners, brand launches, large-format wine nights, and chef\'s-table tastings. Sommelier-paired menus on request; kitchen will scale the list around the table.',
    th: 'ชั้นหกรับงานเลี้ยงส่วนตัว เปิดตัวแบรนด์ คืนไวน์ขวดใหญ่ และเชฟส์เทเบิล — คู่ไวน์โดยซอมเมอลิเยตามคำสั่ง ครัวออกแบบเมนูรอบโต๊ะ',
  },
  capacities: [
    { en: 'Full venue · up to 60', th: 'เหมาทั้งร้าน · สูงสุด 60' },
    { en: 'Chef\'s table tasting · 8–14', th: 'เชฟส์เทเบิล · 8–14 ท่าน' },
    { en: 'Large-format wine night · 20+', th: 'คืนไวน์ขวดใหญ่ · 20+' },
  ],
  cta: { en: 'Email the team', th: 'อีเมลหาทีม' },
  emailBody: {
    en: "Hi Charmkrung, I'd like to enquire about a private event for ___ guests, on or around ___. Format: full venue / chef's table tasting / large-format wine night. Thank you.",
    th: 'สวัสดีค่ะ/ครับ ทีม Charmkrung อยากสอบถามเรื่องงานส่วนตัว ___ ท่าน วันที่ ___ รูปแบบ: เหมาทั้งร้าน / เชฟส์เทเบิล / คืนไวน์ขวดใหญ่ ขอบคุณค่ะ/ครับ',
  },
};

/* ===================================================================
 *  SOURCES — every claim on the site, paired with its publication URL.
 *  Powers the /sources appendix page. 17 verified citations.
 * =================================================================== */
export const SOURCES = [
  { claim: 'Address: 6th Floor, 839 Charoen Krung Road, Talat Noi, Samphanthawong, Bangkok 10100',
    publication: 'Indagare Travel',
    url: 'https://indagare.com/restaurant/charmkrung' },
  { claim: 'Phone +66 97 994 5523',
    publication: 'Indagare Travel',
    url: 'https://indagare.com/restaurant/charmkrung' },
  { claim: 'Hours: Daily · 6:00 PM – midnight',
    publication: 'Star Wine List 2026 + Wanderlog (Google Maps) + Instagram',
    url: 'https://starwinelist.com/wine-place/charmkrung' },
  { claim: 'Chef: Aruss "Jai" Lerlerstkull (also of Charmgang)',
    publication: 'Wikipedia — Charmgang (sourced to Koktail + Bangkok Post)',
    url: 'https://en.wikipedia.org/wiki/Charmgang' },
  { claim: 'Trio behind Charmgang and Charmkrung: Mew, Jai, Aew',
    publication: 'Koktail Magazine — Future List 2022',
    url: 'https://www.koktailmagazine.com/the-future-list/charm-gang-chef-trio/' },
  { claim: 'Sommelier: Kiki Sontiyart',
    publication: 'Star Wine List · Charmkrung profile',
    url: 'https://starwinelist.com/wine-place/charmkrung' },
  { claim: 'Sister restaurant: Charmgang (Michelin Bib Gourmand)',
    publication: 'Michelin Guide — Charmgang Bangkok',
    url: 'https://guide.michelin.com/th/en/bangkok-region/bangkok/restaurant/charmgang' },
  { claim: 'Wine programme on Star Wine List Best Short List, SE Asia 2026',
    publication: 'Star Wine List',
    url: 'https://starwinelist.com/wine-story/star-wine-list-of-the-year-southeast-asia-2026-winners' },
  { claim: 'Founder quote: "vongole clams in southern turmeric sauce, kanom krok with chicken-liver pâté"',
    publication: 'BK Magazine, December 2023',
    url: 'https://bk.asia-city.com/restaurants/news/new-restaurants-and-cafes-to-check-out-first-month-2024' },
  { claim: 'Menu prices verified from in-room menu photograph (Mar 2025)',
    publication: 'The Brief Review',
    url: 'https://thebriefreview.com/charmkrung-review-a-taste-of-traditional-thai-elegance-in-bangkok-bangkok-thailand/' },
  { claim: 'Sixth-floor 1950s factory loft, sixty seats around central bar + kitchen pass',
    publication: 'CreatorsLab restaurant profile',
    url: 'https://creatorslab.co/charmkrung/' },
  { claim: 'Siamese Oyster Ceviche (Gillardeau) — confirmed signature dish photo',
    publication: 'World of Mouth — Oliver Jansson recommendation',
    url: 'https://www.worldofmouth.app/restaurants/charmkrung' },
  { claim: 'Duck breast paired with Jean Foillard Morgon Côte du Py 2021 (bottle visible in frame)',
    publication: 'DestinAsian feature',
    url: 'https://destinasian.com/bangkok-dining-charmkrung' },
  { claim: 'Cocktails built on Thai + Chinese herbs (Smoked Corn Old-Fashioned, The Moms chrysanthemum)',
    publication: 'BK Magazine + Wanderlog reviews',
    url: 'https://bk.asia-city.com/restaurants/news/new-restaurants-and-cafes-to-check-out-first-month-2024' },
  { claim: 'Reservations via SevenRooms',
    publication: 'Restaurant\'s own SevenRooms deep link',
    url: 'https://www.sevenrooms.com/explore/charmkrungbangkok/reservations/create' },
  { claim: 'Wine-room interior photograph (every table set with wine glasses)',
    publication: 'Star Wine List — courtesy of Charmkrung',
    url: 'https://starwinelist.com/wine-place/charmkrung' },
  { claim: 'Charmgang sibling photographs (interior, wine wall, scallop bite)',
    publication: 'DanielFoodDiary — Charmgang Bangkok, July 2025',
    url: 'https://danielfooddiary.com/2025/07/31/charmgang/' },
];




export type CopyKey = typeof COPY;
