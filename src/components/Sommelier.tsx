'use client';

import Image from 'next/image';
import { SOMMELIER, PHOTOS, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * SOMMELIER — wine programme editorial spread.
 *
 * v3 fix (opus pass): the previous build used a hand-drawn SVG stencil
 * here because we didn't have a portrait. Star Wine List's Charmkrung
 * page now provides the actual Kiki Sontiyart portrait + a "courtesy
 * of Charmkrung" room shot showing every table set for wine — both
 * properly attributable, both leaned into.
 *
 * Layout: editorial card on the left (Kiki portrait, name, role, pull-
 * quote, Star Wine List '26 badge). Wide landscape on the right showing
 * the Charmkrung dining room — the wine programme in situ. Asymmetric
 * 4:7 column split breaks the previous symmetric grid.
 */
export default function Sommelier() {
  const { locale } = useLocale();
  return (
    <section className="relative bg-espresso text-cream py-24 lg:py-32 border-t border-[var(--rule-soft)] overflow-hidden">
      {/* Warm oxblood + brass ambient wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(900px 600px at 30% 30%, rgba(94,27,27,0.22) 0%, rgba(94,27,27,0.05) 35%, transparent 65%), radial-gradient(700px 500px at 85% 80%, rgba(176,141,76,0.18) 0%, rgba(176,141,76,0.04) 45%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-brass">Wine programme</p>
          <h2
            className="display italic leading-[1.04] mt-5 max-w-[16ch]"
            style={{ fontSize: 'clamp(28px, 3.6vw, 56px)' }}
            lang={locale}
          >
            The list, the room, the hands.
          </h2>
          <span className="brass-rule wide mt-7" />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[4fr_7fr] gap-10 lg:gap-16 items-start">
          {/* LEFT — editorial card: portrait + name + quote + SWL badge */}
          <Reveal delay={0.1}>
            <figure
              className="relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(176,141,76,0.06) 0%, rgba(94,27,27,0.04) 100%)',
                border: '1px solid rgba(176,141,76,0.45)',
                padding: '22px 22px 22px 22px',
              }}
            >
              {/* PLATE II ledger header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-brass">
                    Plate II
                  </p>
                  <p className="font-sans text-[8.5px] uppercase tracking-[0.32em] text-cream/55 mt-1">
                    The sommelier
                  </p>
                </div>
                <span aria-hidden className="block w-2 h-2 rounded-full mt-1" style={{ background: '#5E1B1B' }} />
              </div>

              {/* Portrait */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={PHOTOS.sommelier}
                  alt="Kiki Sontiyart, sommelier and wine-programme lead at Charmkrung, photographed for Star Wine List"
                  fill
                  sizes="(max-width: 1024px) 90vw, 32vw"
                  quality={92}
                  className="object-cover object-center"
                  style={{ filter: 'contrast(1.04) saturate(0.96)' }}
                />
                {/* Warm vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(26,22,20,0.45) 100%), radial-gradient(120% 80% at 50% 35%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.20) 100%)',
                  }}
                />
                {/* Brass corner brackets */}
                <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }} />
                <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }} />
              </div>

              {/* Name + role */}
              <figcaption className="mt-5">
                <p className="display italic leading-[1.1]" style={{ fontSize: 26 }}>
                  {SOMMELIER.name}
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-brass mt-1.5" lang={locale}>
                  {SOMMELIER.role[locale]}
                </p>
              </figcaption>

              {/* Pull quote — italic Fraunces */}
              <blockquote
                className="display italic text-cream/85 leading-[1.4] mt-5"
                style={{ fontSize: 16 }}
                lang={locale}
              >
                <span className="text-brass mr-1">&ldquo;</span>
                {SOMMELIER.quote[locale].replace(/[“”"]/g, '')}
                <span className="text-brass ml-1">&rdquo;</span>
              </blockquote>

              {/* SWL '26 badge — internal anchor, smaller than before */}
              <a
                href={SOMMELIER.badge.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 group flex items-center justify-between border-t border-[var(--rule-soft)] pt-4"
                aria-label="View Charmkrung on Star Wine List"
              >
                <div>
                  <p className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-cream/55">Award</p>
                  <p className="display text-brass leading-tight mt-1" style={{ fontSize: 18 }}>
                    Star Wine List &rsquo;26
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-cream/70 mt-1" lang={locale}>
                    {SOMMELIER.badge.sub[locale]}
                  </p>
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-brass group-hover:text-cream transition-colors duration-300">
                  Verify ↗
                </span>
              </a>

              {/* Photo credit */}
              <p className="font-sans text-[9px] uppercase tracking-[0.28em] text-cream/40 mt-5">
                Photo · Star Wine List · Kiki Sontiyart profile
              </p>
            </figure>
          </Reveal>

          {/* RIGHT — wide editorial photo of the Charmkrung wine room */}
          <Reveal delay={0.2}>
            <figure className="relative">
              <div className="relative aspect-[16/10] overflow-hidden warm-sweep">
                <Image
                  src={PHOTOS.wineRoom}
                  alt="Charmkrung — sixth-floor dining room with the orange CHARMKRUNG neon sign above the kitchen pass, every table set with wine glasses, backlit bottle shelves visible at the bar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  quality={92}
                  className="object-cover object-center"
                />
                {/* Subtle bottom-fade so the caption reads cleanly */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(26,22,20,0) 55%, rgba(26,22,20,0.68) 100%)',
                  }}
                />
                {/* In-photo caption — anchored bottom-left */}
                <div className="absolute left-5 bottom-4 right-5">
                  <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-brass">
                    Sixth floor · Charoen Krung
                  </p>
                  <p className="display italic text-cream leading-tight mt-1" style={{ fontSize: 'clamp(18px, 1.8vw, 26px)' }}>
                    Every table set for wine.
                  </p>
                </div>
              </div>

              {/* Caption + sibling-kitchen secondary card.
                  This is the second photograph showing the wine programme
                  in its sibling context — Charmgang's kitchen pass with
                  the bottle wall. */}
              <div className="mt-5 grid grid-cols-[1.4fr_1fr] gap-4 lg:gap-6 items-stretch">
                <p
                  className="font-sans text-[11.5px] leading-[1.7] text-cream/65 max-w-[44ch] pt-1"
                  lang={locale}
                >
                  {COPY.wine.roomCaption[locale]}
                </p>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={PHOTOS.wineKitchen}
                    alt="The sibling kitchen pass at Charmgang — wine bottles racked above the counter, the trio's signature spirit-figure mark glowing red"
                    fill
                    sizes="(max-width: 1024px) 40vw, 22vw"
                    quality={86}
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, rgba(26,22,20,0) 50%, rgba(26,22,20,0.55) 100%)' }}
                  />
                  <p className="absolute left-3 bottom-2 font-sans text-[9px] uppercase tracking-[0.28em] text-cream/85">
                    Sister kitchen · Charmgang
                  </p>
                </div>
              </div>

              {/* Final body — Kiki's bio sits under the photo as the
                  pull-out caption / editorial intro paragraph */}
              <p
                className="font-sans text-[14.5px] leading-[1.8] text-cream/82 max-w-[68ch] mt-7"
                lang={locale}
              >
                {SOMMELIER.bio[locale]}
              </p>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
