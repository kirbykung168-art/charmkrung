'use client';

import Image from 'next/image';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream editorial section. Chef Trio portrait card on the left,
 * brand voice + pull-quote on the right.
 *
 * Portrait: the Koktail Magazine "Future List 2022" trio shot of Mew,
 * Jai & Aew — the actual founding team behind Charmgang (and therefore
 * Charmkrung). Served via the /api/koktail-trio edge proxy rather than
 * a committed binary so the page can point at a same-origin URL without
 * shipping a copy of the photograph in the repo.
 *
 * Credit reads "Photo · Koktail Magazine · Future List 2022" — confirm
 * permission with the publisher before any paid client engagement.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-espresso py-28 lg:py-40 paper-grain">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Chef trio portrait — editorial press card */}
        <Reveal>
          <figure className="max-w-[460px]">
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
                    The Charmgang trio
                  </p>
                </div>
                <span
                  aria-hidden
                  className="block w-2 h-2 rounded-full mt-1"
                  style={{ background: '#5E1B1B' }}
                />
              </div>

              {/* Photo with brass corner brackets + warm vignette */}
              <div className="relative aspect-[1290/916] overflow-hidden">
                <Image
                  src="/api/koktail-trio"
                  alt="Mew, Jai and Aew — the three founding chefs behind Charmgang and Charmkrung, photographed for Koktail Magazine's Future List 2022"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={92}
                  unoptimized
                  className="object-cover object-center"
                  style={{ filter: 'contrast(1.04) saturate(0.94)' }}
                />
                {/* Warm vignette — pulls the gallery wall into the brand palette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(26,22,20,0.12) 0%, rgba(26,22,20,0) 24%, rgba(26,22,20,0) 70%, rgba(26,22,20,0.35) 100%), radial-gradient(120% 80% at 50% 45%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.16) 100%)',
                  }}
                />
                {/* Brass corner brackets — the credential card frame */}
                <span
                  className="absolute pointer-events-none"
                  style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }}
                />
                <span
                  className="absolute pointer-events-none"
                  style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }}
                />
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
            </div>

            <figcaption className="font-sans text-[12px] uppercase tracking-[0.28em] text-brass-deep mt-5" lang={locale}>
              {COPY.story.chefCaption[locale]}
            </figcaption>
            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-brass-deep/55 mt-2">
              Photo · Koktail Magazine · Future List 2022
            </p>
          </figure>
        </Reveal>

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
