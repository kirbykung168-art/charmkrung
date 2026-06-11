import type { Metadata } from 'next';
import { Fraunces, Hanken_Grotesk, Noto_Sans_Thai } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { BRAND, COPY, SOMMELIER } from '@/lib/content';
import { LanguageProvider } from '@/components/LanguageProvider';
import SmoothScroll from '@/components/SmoothScroll';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-hanken',
  display: 'swap',
});

const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500'],
  variable: '--font-noto-thai',
  display: 'swap',
});

const SITE_URL = 'https://charmkrung.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND.name} — Modern Thai Small Plates & Wine Bar | Charoen Krung, Bangkok`,
  description:
    'Playful modern Thai small plates and a curated wine list on the sixth floor of a 1950s Charoen Krung factory. Reserve a table at Charmkrung, Bangkok.',
  keywords: [
    'Charmkrung',
    'Charmgang',
    'Thai wine bar Bangkok',
    'Charoen Krung restaurant',
    'Talat Noi restaurant',
    'modern Thai small plates',
    'Bangkok tapas',
    'wine bar Bangkok',
    'Aruss Jai Lerlerstkull',
    'Kiki Sontiyart',
  ],
  openGraph: {
    title: `${BRAND.name} — Modern Thai Small Plates & Wine Bar`,
    description:
      'Playful modern Thai small plates and a curated wine list on the sixth floor of a 1950s Charoen Krung factory.',
    type: 'website',
    locale: 'en_TH',
    siteName: BRAND.name,
    url: SITE_URL,
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} — Modern Thai Small Plates & Wine Bar`,
    description:
      'Playful modern Thai small plates and a curated wine list on the sixth floor of a 1950s Charoen Krung factory.',
    images: ['/og.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * JSON-LD #1 — Restaurant. Hours, address, geo, telephone, social handles,
 * reservations URL, sommelier + chef. Eligible for Maps + Knowledge Panel.
 */
const RESTAURANT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BRAND.name,
  image: `${SITE_URL}/og.jpg`,
  url: SITE_URL,
  telephone: BRAND.phoneTel,
  email: `mailto:${BRAND.email}`,
  servesCuisine: ['Thai', 'Modern Thai', 'Wine bar'],
  priceRange: '฿฿฿',
  acceptsReservations: true,
  award: 'Star Wine List · Best Short List Southeast Asia 2026',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRAND.addressLine2,
    addressLocality: 'Samphanthawong',
    addressRegion: 'Bangkok',
    postalCode: '10100',
    addressCountry: 'TH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BRAND.lat,
    longitude: BRAND.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '17:30',
      closes: '23:59',
    },
  ],
  employee: [
    {
      '@type': 'Person',
      name: BRAND.chefName,
      jobTitle: 'Executive Chef',
    },
    {
      '@type': 'Person',
      name: SOMMELIER.name,
      jobTitle: 'Sommelier',
    },
  ],
  sameAs: [
    BRAND.instagramUrl,
    BRAND.facebookUrl,
    BRAND.linktreeUrl,
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: BRAND.reserveUrl,
      inLanguage: 'en-TH',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    result: { '@type': 'Reservation', name: 'Dinner reservation' },
  },
};

/**
 * JSON-LD #2 — Menu with featured signature dishes. Lets Google show
 * a menu carousel in rich results for "Charmkrung menu" queries.
 */
const MENU_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Charmkrung · Signatures',
  inLanguage: 'en-TH',
  hasMenuSection: [{
    '@type': 'MenuSection',
    name: 'Signatures',
    hasMenuItem: COPY.menu.featured.map((f: any) => ({
      '@type': 'MenuItem',
      name: f.name.en,
      description: f.caption.en,
      image: `${SITE_URL}${f.photo}`,
    })),
  }],
};

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: SITE_URL,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${fraunces.variable} ${hanken.variable} ${notoThai.variable}`}
    >
      <head>
        {/* Prevent Chrome / Google auto-translate from mangling the
            curated Thai copy — without this, visitors whose browser
            is set to auto-translate Thai see Chrome's literal English. */}
        <meta name="google" content="notranslate" />
        <meta name="robots" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(RESTAURANT_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(MENU_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </head>
      <body className="bg-espresso text-cream antialiased">
        {/* Skip-to-content for keyboard + screen readers */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-cream focus:text-espresso focus:px-4 focus:py-3 focus:text-[11px] focus:tracking-[0.28em] focus:uppercase"
        >
          Skip to content
        </a>

        <LanguageProvider>
          <SmoothScroll>
            <main id="main">{children}</main>
          </SmoothScroll>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
