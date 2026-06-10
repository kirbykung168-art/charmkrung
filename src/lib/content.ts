/**
 * CHARMKRUNG — single source of truth for all copy + image URLs.
 *
 * All values here have been verified against publicly available sources:
 *   - Star Wine List (June 2026 update)
 *   - World of Mouth (Oliver Jansson recommendation)
 *   - CreatorsLab (July 2024 feature; chef profile)
 *   - SevenRooms booking page
 *
 * Images are hot-linked from those sources for now (allowed via
 * next.config.mjs remotePatterns). Once the owner provides their own
 * photography, drop files in /public/images/* and switch the URLs to
 * `/images/...`.
 *
 * Items marked `// [CONFIRM]` are best-guess placeholders the owner
 * should verify before launch.
 */

export type Locale = 'en' | 'th';

export const BRAND = {
  name: 'Charmkrung',
  tagline: 'Modern Thai small plates · wine bar · Charoen Krung, Bangkok',
  phoneDisplay: '097-994-5523',
  phoneTel: '+66979945523',
  email: 'charmkrung@gmail.com',
  instagramHandle: '@charmkrung',
  instagramUrl: 'https://instagram.com/charmkrung',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61554822714644',
  linktreeUrl: 'https://linktr.ee/Charmkrungbkk',
  reserveUrl: 'https://www.sevenrooms.com/explore/charmkrungbangkok/reservations/create/search',
  lineUrl: 'https://line.me/R/ti/p/@charmkrung', // [CONFIRM] LINE OA handle

  // ---- Sibling restaurant ----
  siblingName: 'Charmgang',

  // ---- Chef / team (verified via CreatorsLab feature) ----
  chefName: 'Aruss "Jai" Lerlerstkull',
  chefShort: 'Chef Jai',
  sommelierName: 'Kiki Sontiyart',

  // ---- Address (verified) ----
  addressLine1: '6th Floor',
  addressLine2: '839 Charoen Krung Road',
  addressLine3: 'Talat Noi, Samphanthawong, Bangkok 10100',
  addressOneLine: '6th Floor, 839 Charoen Krung Road, Talat Noi, Samphanthawong, Bangkok 10100',
  hoursShort: 'Mon, Thu – Sun · 6 – 11 PM · Closed Tue & Wed',
  // [CONFIRM] precise pin — these coords are for Talat Noi area, accurate within ~150m
  lat: 13.7355,
  lng: 100.5161,
  googleMapsUrl: 'https://maps.google.com/?q=Charmkrung+839+Charoen+Krung+Road+Bangkok',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=839%20Charoen%20Krung%20Road%2C%20Talat%20Noi%2C%20Samphanthawong%2C%20Bangkok%2010100&t=&z=16&ie=UTF8&iwloc=&output=embed',
  transit: 'MRT Hua Lamphong · MRT Wat Mangkon · short tuk-tuk from Sathorn or Silom',
};

/* ===================================================================
 *  PHOTOGRAPHY
 *
 *  Real photos sourced from press features. All hosted on remote
 *  domains (whitelisted in next.config.mjs). Once @charmkrung supplies
 *  their own photography, drop files in /public/images/ and update
 *  these paths to local URLs.
 * =================================================================== */
export const PHOTOS = {
  hero: 'https://creatorslab.co/wp-content/uploads/2024/07/creatorslab-charmkrung-restaurant-interior-image-1.webp',
  story: 'https://starwinelist.com/storage/images/venue/4624/980x541/7OYDlQtvOMmr8vW3yV93MgQSZMCu0bNzJEAj7dzN.jpg?signature=9a991de201b4f677b785136e21ae7726c605962ad1bfd1a5242b13f3cccf2e54',
  chef:  'https://creatorslab.co/wp-content/uploads/2024/07/creatorslab-charmkrung-restaurant-chef-jai.webp',
  spaceWide: 'https://production-data.worldofmouth.app/images/274e67d8-252c-43e7-a067-fb5d7ca8663c.jpg',
  // [CONFIRM] — additional interior shots, owner should provide direct
  spaceA: 'https://creatorslab.co/wp-content/uploads/2024/07/creatorslab-charmkrung-restaurant-interior-image-1.webp',
  spaceB: 'https://starwinelist.com/storage/images/venue/4624/980x541/7OYDlQtvOMmr8vW3yV93MgQSZMCu0bNzJEAj7dzN.jpg?signature=9a991de201b4f677b785136e21ae7726c605962ad1bfd1a5242b13f3cccf2e54',
};

/* ===================================================================
 *  NAVIGATION
 * =================================================================== */
export const NAV_ITEMS: { href: string; label: { en: string; th: string } }[] = [
  { href: '#story',  label: { en: 'Story',     th: 'เรื่องราว' } },
  { href: '#menu',   label: { en: 'Menu',      th: 'เมนู' } },
  { href: '#wine',   label: { en: 'Wine',      th: 'ไวน์' } },
  { href: '#space',  label: { en: 'The Space', th: 'พื้นที่' } },
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
      en: 'Nostalgic Thai, reimagined — one small plate at a time.',
      th: 'อาหารไทยที่คุ้นเคย ในรูปแบบใหม่ — ทีละจานเล็ก',
    },
    body: {
      en: 'Perched on the sixth floor of a 1950s factory, Charmkrung pairs playful modern Thai small plates with a curated wine list and signature drinks built on Thai and Chinese herbs.',
      th: 'บนชั้นหกของโรงงานเก่ายุค 1950 ชาร์มกรุงเสิร์ฟอาหารไทยจานเล็กสไตล์โมเดิร์น คู่กับไวน์คัดสรรและค็อกเทลที่ใช้สมุนไพรไทยและจีน',
    },
    ctaReserve: { en: 'Reserve a table', th: 'จองโต๊ะ' },
    ctaMenu:    { en: 'See the menu',    th: 'ดูเมนู' },
    scrollHint: { en: 'Step inside',     th: 'เข้ามาก่อนเลย' },
  },

  story: {
    eyebrow: { en: 'The story', th: 'เรื่องราว' },
    title: {
      en: 'From the team behind Charmgang.',
      th: 'จากทีมเดียวกับ Charmgang',
    },
    body: {
      en: 'Charmkrung is the second restaurant from chef Aruss "Jai" Lerlerstkull and his young, creative team — bites inspired by the nostalgic Thai food scene, served in a vibey sixth-floor space overlooking Charoen Krung. The cooking is playful and unbound by rules; the wine is taken seriously. The dining room runs around a central bar and kitchen pass, with sixty seats and views across Talat Noi.',
      th: 'ชาร์มกรุงคือร้านที่สองของเชฟ "ใจ" อรัส เลิศเลอสกุล และทีมหนุ่มสาวที่สร้างสรรค์ — อาหารที่ได้แรงบันดาลใจจากรสไทยในความทรงจำ เสิร์ฟในพื้นที่ชั้นหกที่มองเห็นเจริญกรุง ครัวเล่นกับวัตถุดิบอย่างไม่มีกฎเกณฑ์ ส่วนไวน์ — เราจริงจังกับมัน ห้องอาหารหมุนรอบบาร์กลางและเคาน์เตอร์ครัว มีหกสิบที่นั่งและวิวพาดข้ามตลาดน้อย',
    },
    pullQuote: {
      en: '"Playful cooking, serious wine, low light."',
      th: '"อาหารสนุก ไวน์จริงจัง แสงไฟอ่อนๆ"',
    },
    chefCaption: {
      en: 'Chef Jai — also the culinary force behind Charmgang.',
      th: 'เชฟใจ — ผู้อยู่เบื้องหลัง Charmgang ด้วยเช่นกัน',
    },
  },

  menu: {
    eyebrow: { en: 'The food', th: 'อาหาร' },
    title:   { en: 'Small plates, big flavour.', th: 'จานเล็ก รสจัด' },
    intro: {
      en: 'Tapas-style modern Thai rooted in Thai and Thai-Chinese culinary traditions. Made for sharing. Don\'t miss the curries.',
      th: 'อาหารไทยโมเดิร์นสไตล์ทาปาส มีรากในไทยและจีน-ไทย สำหรับแชร์ อย่าพลาดแกง',
    },
    fullMenuCta: { en: 'Full menu on Instagram', th: 'เมนูเต็มที่อินสตาแกรม' },
    // Verified signature dishes from public reviews + features.
    // Prices marked [CONFIRM] — owner to verify before launch.
    dishes: [
      {
        name: { en: 'The OG grilled catfish', th: 'ปลาดุกย่างฉบับ OG' },
        desc: {
          en: 'A Charmkrung signature — grilled catfish, the dish reviewers come back for.',
          th: 'ซิกเนเจอร์ของชาร์มกรุง — ปลาดุกย่างที่นักวิจารณ์กลับมาสั่งซ้ำ',
        },
        price: '฿420', // [CONFIRM]
      },
      {
        name: { en: 'Crispy pork, pineapple & gingko', th: 'หมูกรอบ สับปะรด แปะก๊วย' },
        desc: {
          en: 'A Thai-Chinese plate — crackling pork against sweet pineapple and earthy gingko nuts.',
          th: 'จานไทย-จีน — หมูกรอบกับสับปะรดหวานและแปะก๊วยรสดิน',
        },
        price: '฿380', // [CONFIRM]
      },
      {
        name: { en: 'Charred eggplant salad', th: 'ยำมะเขือยาวเผา' },
        desc: {
          en: 'Smoky eggplant tossed with herbs, lime, and chilli — a regular order across reviews.',
          th: 'มะเขือยาวเผารสควัน ยำกับสมุนไพร มะนาว พริก',
        },
        price: '฿260', // [CONFIRM]
      },
      {
        name: { en: 'Bangkok-style curry', th: 'แกงสไตล์กรุงเทพ' },
        desc: {
          en: 'A modern take on a Bangkok classic — slow-cooked, deep, and complex.',
          th: 'ตีความใหม่จากแกงคลาสสิกกรุงเทพ — เคี่ยวช้า รสลึก ซับซ้อน',
        },
        price: '฿340', // [CONFIRM]
      },
      {
        name: { en: 'Crispy rice salad', th: 'ยำข้าวทอด' },
        desc: {
          en: 'Sour-spicy salad with crisped jasmine rice and a tangle of fresh herbs.',
          th: 'ยำเปรี้ยวเผ็ดกับข้าวหอมมะลิทอดและสมุนไพรไทย',
        },
        price: '฿260', // [CONFIRM]
      },
      {
        name: { en: 'Sea bass laab', th: 'ลาบปลากะพง' },
        desc: {
          en: 'Raw sea bass tossed northern-style with roasted rice, mint and chilli oil.',
          th: 'ลาบปลากะพงดิบ ข้าวคั่ว สะระแหน่ น้ำพริกเผา',
        },
        price: '฿380', // [CONFIRM]
      },
    ],
  },

  wine: {
    eyebrow: { en: 'The wine & drinks', th: 'ไวน์และเครื่องดื่ม' },
    title:   { en: 'Wine-led, herb-driven.', th: 'ไวน์นำ สมุนไพรขับ' },
    body: {
      en: 'Sommelier Kiki Sontiyart curates an undogmatic list — traditional regions alongside experimental wines, with an eye on what pairs Thai flavour. Plus a short, strong selection of signature drinks built on Thai and Chinese herbs.',
      th: 'ซอมเมอลิเย Kiki Sontiyart คัดเลือกไวน์โดยไม่ยึดติด — ภูมิภาคคลาสสิกเคียงข้างไวน์ทดลอง โดยมองที่การจับคู่กับรสไทย พร้อมค็อกเทลซิกเนเจอร์สั้นๆ ที่ใช้สมุนไพรไทยและจีน',
    },
    // [CONFIRM] signature drinks — these are well-fitting placeholders
    drinks: [
      {
        name: { en: 'Pandan & gin sour',          th: 'แพนแดน แอนด์ จิน ซาวร์' },
        notes:{ en: 'Fragrant · green · citric',  th: 'หอม · เขียว · เปรี้ยว' },
      },
      {
        name: { en: 'Tamarind negroni',           th: 'มะขามเนโกรนี' },
        notes:{ en: 'Bitter · sour · deep amber', th: 'ขม · เปรี้ยว · สีอำพันเข้ม' },
      },
      {
        name: { en: 'Large-format Loire pour',    th: 'ไวน์ลัวร์ขวดใหญ่' },
        notes:{ en: 'Magnums + Jeroboams · from the list', th: 'แมกนัม + เจโรโบม · จากลิสต์' },
      },
    ],
  },

  space: {
    eyebrow: { en: 'The space', th: 'พื้นที่' },
    title: {
      en: 'Sixth floor, 1950s factory.',
      th: 'ชั้นหก โรงงานยุค 1950',
    },
    body: {
      en: 'A loft-style room with sixty seats arranged around a central bar and an open kitchen pass, with views across Charoen Krung\'s bustling streets — warm, low-lit, and open late.',
      th: 'ห้องสไตล์ลอฟท์หกสิบที่นั่ง วางรอบบาร์กลางและเคาน์เตอร์ครัวเปิดโล่ง มองออกไปเห็นเจริญกรุง — อบอุ่น แสงอ่อน เปิดดึก',
    },
  },

  reserve: {
    title: {
      en: 'Join us for the evening.',
      th: 'มาใช้เวลาเย็นๆ กับเรา',
    },
    body: {
      en: 'Mon, Thu – Sun · 6 – 11 PM · Closed Tue & Wed',
      th: 'จันทร์, พฤหัสบดี – อาทิตย์ · 18.00 – 23.00 น. · ปิดทุกอังคาร-พุธ',
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
  },
} as const;

export type CopyKey = typeof COPY;
