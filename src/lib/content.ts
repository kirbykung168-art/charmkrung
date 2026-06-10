/**
 * CHARMKRUNG — single source of truth for all copy on the page.
 *
 * Every string in the site reads from this file. To change copy, edit here.
 * Each entry has `en` and `th` so the language toggle can swap them.
 *
 * Entries marked `// [CONFIRM]` are best-effort placeholders — owner must
 * verify before launch.
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
  facebookUrl: 'https://facebook.com/charmkrung',
  linktreeUrl: 'https://linktr.ee/Charmkrungbkk',
  // SevenRooms reservations page
  reserveUrl: 'https://www.sevenrooms.com/explore/charmkrungbangkok/reservations/create/search',
  // LINE — placeholder, owner to confirm
  lineUrl: 'https://line.me/R/ti/p/@charmkrung', // [CONFIRM]
  // [CONFIRM] exact floor + building number
  addressLine1: '6th Floor, 1950s Factory Building',
  addressLine2: 'Charoen Krung Soi 31, Talat Noi',
  addressLine3: 'Samphanthawong, Bangkok 10100',
  addressOneLine: '6th Floor, 1950s Factory Building, Charoen Krung Soi 31, Talat Noi, Samphanthawong, Bangkok 10100',
  hoursShort: 'Open daily · Kitchen 6 – 11 PM', // [CONFIRM]
  // [CONFIRM] precise coords for the Google Map pin
  lat: 13.7355,
  lng: 100.5161,
  googleMapsUrl: 'https://maps.google.com/?q=Charmkrung+Bangkok',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Charmkrung+Bangkok&t=&z=15&ie=UTF8&iwloc=&output=embed',
  transit: 'MRT Hua Lamphong · MRT Wat Mangkon · short tuk-tuk from Sathorn',
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
      en: 'Charmkrung carries the spirit of its sibling Charmgang into a wine bar of its own — bites inspired by the nostalgic Thai food scene, served in a vibey sixth-floor space overlooking Charoen Krung. The cooking is playful and unbound by rules; the wine is taken seriously.',
      th: 'ชาร์มกรุงนำจิตวิญญาณของ Charmgang มาสู่ไวน์บาร์ของตัวเอง — อาหารที่ได้แรงบันดาลใจจากความทรงจำของรสไทย ในพื้นที่ชั้นหกที่มองเห็นบรรยากาศของเจริญกรุง ครัวเล่นกับวัตถุดิบอย่างไม่มีกฎเกณฑ์ ส่วนไวน์ — เราจริงจังกับมัน',
    },
    pullQuote: {
      en: '“Playful cooking, serious wine, low light.”',
      th: '“อาหารสนุก ไวน์จริงจัง แสงไฟอ่อนๆ”',
    },
  },

  menu: {
    eyebrow: { en: 'The food', th: 'อาหาร' },
    title:   { en: 'Small plates, big flavour.', th: 'จานเล็ก รสจัด' },
    intro: {
      en: "Tapas-style modern Thai, made for sharing. Don't miss the curries.",
      th: 'อาหารไทยโมเดิร์นสไตล์ทาปาส — สำหรับแชร์ อย่าพลาดแกง',
    },
    fullMenuCta: { en: 'Full menu on Instagram', th: 'เมนูเต็มที่อินสตาแกรม' },
    // [CONFIRM] dish names + descriptions + prices
    dishes: [
      {
        name: { en: 'Signature curry', th: 'แกงซิกเนเจอร์' },
        desc: {
          en: 'Slow-cooked curry, our take on a Bangkok classic.',
          th: 'แกงเคี่ยวช้าๆ ตีความใหม่จากรสคลาสสิกกรุงเทพ',
        },
        price: '฿320',
      },
      {
        name: { en: 'Crispy rice salad', th: 'ยำข้าวทอด' },
        desc: {
          en: 'Sour-spicy salad with crisped jasmine rice and herbs.',
          th: 'ยำเปรี้ยวเผ็ดกับข้าวหอมมะลิทอดและสมุนไพรไทย',
        },
        price: '฿260',
      },
      {
        name: { en: 'Grilled river prawn', th: 'กุ้งแม่น้ำเผา' },
        desc: {
          en: 'Charcoal-grilled, served with northern Thai dipping sauce.',
          th: 'ย่างถ่านเสิร์ฟพร้อมน้ำจิ้มแจ่วเหนือ',
        },
        price: '฿480',
      },
      {
        name: { en: 'Smoked pork jowl', th: 'คอหมูรมควัน' },
        desc: {
          en: 'Slow-smoked, with sour tamarind glaze and crisp shallots.',
          th: 'รมควันช้าๆ กับซอสมะขามและหอมเจียว',
        },
        price: '฿340',
      },
      {
        name: { en: 'Sea bass laab', th: 'ลาบปลากะพง' },
        desc: {
          en: 'Raw sea bass tossed northern-style with roasted rice and mint.',
          th: 'ลาบปลากะพงดิบ ข้าวคั่ว สะระแหน่',
        },
        price: '฿380',
      },
      {
        name: { en: 'Tamarind palm sugar custard', th: 'คัสตาร์ดมะขามน้ำตาลปี๊บ' },
        desc: {
          en: 'A nostalgic sweet to close, served warm.',
          th: 'ขนมหวานคลาสสิก เสิร์ฟอุ่นๆ',
        },
        price: '฿180',
      },
    ],
  },

  wine: {
    eyebrow: { en: 'The wine & drinks', th: 'ไวน์และเครื่องดื่ม' },
    title:   { en: 'Wine-led, herb-driven.', th: 'ไวน์นำ สมุนไพรขับ' },
    body: {
      en: 'A well-curated wine list alongside a short, strong selection of signature drinks built on Thai and Chinese herbs and spices.',
      th: 'ไวน์ลิสต์คัดสรรมาดี พร้อมค็อกเทลซิกเนเจอร์สั้นๆ ที่ใช้สมุนไพรและเครื่องเทศไทย-จีน',
    },
    // [CONFIRM] signature drink names + descriptions
    drinks: [
      {
        name: { en: 'Pandan & gin sour',          th: 'แพนแดน แอนด์ จิน ซาวร์' },
        notes:{ en: 'Fragrant, green, citric',    th: 'หอม เขียว เปรี้ยว' },
      },
      {
        name: { en: 'Tamarind negroni',           th: 'มะขามเนโกรนี' },
        notes:{ en: 'Bitter, sour, deep amber',   th: 'ขม เปรี้ยว สีอำพันเข้ม' },
      },
      {
        name: { en: 'Cha yen highball',           th: 'ชาเย็นไฮบอล' },
        notes:{ en: 'Thai tea, soda, whisky',     th: 'ชาไทย โซดา วิสกี้' },
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
      en: 'A loft-style room with views over the bustling streets of Charoen Krung — warm, low-lit, and open late.',
      th: 'ห้องสไตล์ลอฟท์ที่มองออกไปเห็นเจริญกรุง — อบอุ่น แสงอ่อน เปิดดึก',
    },
  },

  reserve: {
    title: {
      en: 'Join us for the evening.',
      th: 'มาใช้เวลาเย็นๆ กับเรา',
    },
    body: {
      en: 'Open every day · Kitchen 6 – 11 PM', // [CONFIRM]
      th: 'เปิดทุกวัน · ครัว 18.00 – 23.00 น.',
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
    parking:   { en: 'Limited street parking · ride-hailing recommended', th: 'ที่จอดข้างถนนจำกัด · แนะนำ Grab' }, // [CONFIRM]
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
