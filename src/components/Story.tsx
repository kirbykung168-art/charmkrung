'use client';

import Image from 'next/image';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * Koktail trio image — delivered through wsrv.nl (free Cloudflare-backed
 * image proxy that does on-the-fly resize + WebP conversion).
 *
 * v3: now committed locally too (PHOTOS.trio), but the upstream wsrv
 * route is kept as primary because it serves a more aggressively
 * compressed WebP than the local PNG.
 */
const KOKTAIL_UPSTREAM = encodeURIComponent(
  'https://www.koktailmagazine.com/wp-content/uploads/2024/10/resized/c859bf773fea73baf4f9987737b5c2aa-1290x916.png',
);
const wsrv = (w: number) => `https://wsrv.nl/?url=${KOKTAIL_UPSTREAM}&w=${w}&output=webp&q=82`;
const KOKTAIL_TRIO = {
  src480:  wsrv(480),
  src640:  wsrv(640),
  src1080: wsrv(1080),
  src1290: wsrv(1290),
};

/**
 * STORY — editorial section with the trio portrait + named credits +
 * sibling-restaurant context shot.
 *
 * v3 push (opus pass):
 *   - Adds a named ledger under the trio photo listing each chef's
 *     craft (fire, curry, spice) — sourced from Koktail's Future List
 *     2022 piece. The site now reads as "three named hands", not "Chef
 *     Jai and others".
 *   - Adds a sibling-restaurant card (Charmgang interior from
 *     DanielFoodDiary). Spells out the family relationship visually.
 *   - Keeps the editorial press-card frame on the main portrait.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-espresso py-28 lg:py-40 paper-grain">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* LEFT — chef trio portrait + named-craft ledger + sibling card */}
        <Reveal>
          <figure className="max-w-[480px]">
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(94,27,27,0.04) 0%, rgba(176,141,76,0.05) 100%)',
                border: '1px solid rgba(176,141,76,0.55)',
                padding: '20px 20px 18px 20px',
              }}
            >
              {/* PLATE I eyebrow + oxblood ledger dot */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-brass-deep">
                    Plate I
                  </p>
                  <p className="font-sans text-[8.5px] uppercase tracking-[0.32em] text-espresso/55 mt-1">
                    The Charmgang trio · Koktail Magazine
                  </p>
                </div>
                <span
                  aria-hidden
                  className="block w-2 h-2 rounded-full mt-1"
                  style={{ background: '#5E1B1B' }}
                />
              </div>

              <div className="relative aspect-[4/5] md:aspect-[1290/916] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={KOKTAIL_TRIO.src1080}
                  srcSet={`${KOKTAIL_TRIO.src480} 480w, ${KOKTAIL_TRIO.src640} 640w, ${KOKTAIL_TRIO.src1080} 1080w, ${KOKTAIL_TRIO.src1290} 1290w`}
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  alt="Mew, Jai and Aew — the three founding chefs behind Charmgang and Charmkrung, photographed for Koktail Magazine's Future List 2022"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_62%] md:object-center"
                  style={{ filter: 'contrast(1.04) saturate(0.94)' }}
                />
                {/* Warm vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(26,22,20,0.12) 0%, rgba(26,22,20,0) 24%, rgba(26,22,20,0) 70%, rgba(26,22,20,0.35) 100%), radial-gradient(120% 80% at 50% 45%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.16) 100%)',
                  }}
                />
                {/* Brass corner brackets */}
                <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }} />
                <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }} />
              </div>

              {/* Signature ledger — chefs' names + house */}
              <div className="mt-4 flex items-baseline justify-between">
                <p
                  className="display italic text-espresso/85"
                  style={{ fontSize: 18 }}
                >
                  Mew &middot; Jai &middot; Aew
                </p>
                <p className="font-sans text-[9px] uppercase tracking-[0.32em] text-espresso/55">
                  Charmgang &middot; Charmkrung
                </p>
              </div>

              {/* Named craft ledger — three rows, one per chef */}
              <dl className="mt-4 border-t border-brass/30 pt-3 grid grid-cols-3 gap-2 text-center">
                {BRAND.trio.map((t) => (
                  <div key={t.name}>
                    <dt
                      className="display italic text-espresso"
                      style={{ fontSize: 16 }}
                    >
                      {t.name}
                    </dt>
                    <dd
                      className="font-sans text-[9.5px] uppercase tracking-[0.22em] text-brass-deep mt-1 leading-tight"
                      lang={locale}
                    >
                      {t.craft[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figcaption className="font-sans text-[12px] uppercase tracking-[0.28em] text-brass-deep mt-5" lang={locale}>
              {COPY.story.chefCaption[locale]}
            </figcaption>
            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-brass-deep/55 mt-2">
              Photo · Koktail Magazine · Future List 2022
            </p>

            {/* SIBLING CARD — Charmgang interior, asymmetric stacked
                under the trio. Spells out "same hands, two rooms". */}
            <div className="mt-10 relative">
              <p className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-brass-deep mb-3">
                Sibling · Charmgang
              </p>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={PHOTOS.sibling}
                  alt="Charmgang — the trio's older Bib Gourmand sibling on Soi Nakhon Kasem, with the pink-yellow textile wall and terracotta floor"
                  fill
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  quality={86}
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(26,22,20,0) 60%, rgba(26,22,20,0.50) 100%)' }}
                />
              </div>
              <p className="font-sans text-[11.5px] leading-[1.6] text-espresso/70 mt-3" lang={locale}>
                {COPY.story.siblingCaption[locale]}
              </p>
              <p className="font-sans text-[9.5px] uppercase tracking-[0.28em] text-espresso/40 mt-1">
                Photo · DanielFoodDiary, July 2025
              </p>
            </div>
          </figure>
        </Reveal>

        {/* RIGHT — narrative + pull-quote */}
        <Reveal delay={0.15}>
          <p className="eyebrow text-brass-deep">{COPY.story.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-5"
            style={{ fontSize: 'clamp(36px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {COPY.story.title[locale]}
          </h2>
          <span className="brass-rule wide mt-8" />
          <p
            className="font-sans text-[15.5px] leading-[1.85] text-espresso/85 max-w-prose mt-8"
            lang={locale}
          >
            {COPY.story.body[locale]}
          </p>

          <blockquote
            className="display italic mt-10 leading-[1.25] text-espresso max-w-[22ch]"
            style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}
            lang={locale}
          >
            <span className="text-brass mr-1">&ldquo;</span>
            {COPY.story.pullQuote[locale].replace(/[“”"]/g, '')}
            <span className="text-brass ml-1">&rdquo;</span>
          </blockquote>
          <p className="display italic text-[14px] text-brass-deep mt-4" lang={locale}>
            — {BRAND.chefShort}, {BRAND.chefName.split(' ').slice(-1)[0]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
