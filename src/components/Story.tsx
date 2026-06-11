'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream editorial section with an editorial linework chef
 * "plate" on the left and the maison voice on the right.
 *
 * Why a linework illustration vs the original phone selfie: the photo on
 * file was a smiling, head-on selfie against a busy printed curtain —
 * wrong register for the candle-lit / editorial / factory-loft voice the
 * rest of the page is setting up, and it undercut the Star Wine List
 * credential two scrolls below. The linework treatment communicates
 * "the chef" without claiming a likeness and matches the typographic
 * weight of the credentials around it. Swap to a real editorial portrait
 * (hands plating, low key, half-light) when one is available.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-espresso py-28 lg:py-40 paper-grain">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Editorial chef plate */}
        <Reveal>
          <figure>
            <ChefPlate />
            <figcaption className="font-sans text-[12px] uppercase tracking-[0.28em] text-brass-deep mt-5" lang={locale}>
              {COPY.story.chefCaption[locale]}
            </figcaption>
            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-brass-deep/55 mt-2">
              Illustration · not a likeness
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

/**
 * Editorial linework "PLATE I" — chef silhouette, toque/cap, knife,
 * thread of brass that ties this card to the Sommelier "PLATE II".
 * Paper-tone background to feel placed on the Story section's cream.
 */
function ChefPlate() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 360 460"
      aria-label="Editorial illustration of the chef — not a likeness"
      className="max-w-[420px]"
    >
      <defs>
        <linearGradient id="cp-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(94,27,27,0.04)" />
          <stop offset="100%" stopColor="rgba(176,141,76,0.05)" />
        </linearGradient>
        <filter id="cp-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.88" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0.30   0 0 0 0 0.20   0 0 0 0 0.14   0 0 0 0.06 0" />
        </filter>
      </defs>

      {/* Paper card frame */}
      <rect x="2" y="2" width="356" height="456" rx="3"
        fill="url(#cp-paper)" stroke="#B08D4C" strokeOpacity="0.55" strokeWidth="0.7" />
      <rect x="2" y="2" width="356" height="456" rx="3" fill="transparent" filter="url(#cp-grain)" />

      {/* Plate eyebrow */}
      <text x="24" y="40" fontFamily="var(--font-hanken), sans-serif"
        fontSize="9" letterSpacing="0.32em" fill="#B08D4C">
        PLATE I
      </text>
      <circle cx="332" cy="34" r="4" fill="#5E1B1B" />
      <text x="24" y="58" fontFamily="var(--font-hanken), sans-serif"
        fontSize="8" letterSpacing="0.32em" fill="rgba(30,18,15,0.55)">
        THE CHEF
      </text>

      {/* Chef figure — head + toque + jacket + plating gesture */}
      <g
        fill="none"
        stroke="#1A1614"
        strokeOpacity="0.78"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Toque (chef hat) — soft cloud silhouette */}
        <path d="M 138 132
                 C 138 108, 148 92, 168 88
                 C 186 84, 200 88, 210 96
                 C 222 92, 236 100, 240 116
                 C 244 130, 240 144, 232 152
                 L 132 152
                 C 128 146, 132 138, 138 132 Z" />
        {/* Toque band */}
        <line x1="132" y1="158" x2="240" y2="158" />
        <line x1="132" y1="168" x2="240" y2="168" />

        {/* Face — Picasso single line */}
        <path d="M 156 180
                 C 156 200, 162 220, 178 232
                 C 198 240, 220 232, 226 216
                 C 230 200, 230 188, 226 178" />
        {/* Eyes — closed crescents (concentration) */}
        <path d="M 168 198 C 172 196, 178 196, 182 198" />
        {/* Mouth — quiet */}
        <path d="M 188 222 C 192 224, 200 224, 204 222" />

        {/* Collar / chef coat */}
        <path d="M 154 246 L 130 270 L 130 380" />
        <path d="M 232 246 L 254 270 L 254 380" />
        <path d="M 130 290 L 254 290" />
        <path d="M 130 318 L 254 318" />
        {/* Button placket */}
        <line x1="192" y1="250" x2="192" y2="380" strokeDasharray="3 3" />
        {/* Buttons */}
        <circle cx="192" cy="270" r="2.2" fill="#B08D4C" stroke="none" />
        <circle cx="192" cy="300" r="2.2" fill="#B08D4C" stroke="none" />
        <circle cx="192" cy="332" r="2.2" fill="#B08D4C" stroke="none" />
        <circle cx="192" cy="362" r="2.2" fill="#B08D4C" stroke="none" />
      </g>

      {/* Knife resting beside the plate, brass blade with oxblood handle dot */}
      <g>
        <line x1="62" y1="408" x2="298" y2="408" stroke="#B08D4C" strokeOpacity="0.7" strokeWidth="0.7" />
        <rect x="74" y="416" width="120" height="8" rx="1.5" fill="none"
          stroke="#1A1614" strokeOpacity="0.55" strokeWidth="0.8" />
        <rect x="194" y="416" width="48" height="8" rx="1.5" fill="#5E1B1B" fillOpacity="0.75" stroke="none" />
        <circle cx="240" cy="420" r="1.8" fill="#B08D4C" />
      </g>

      {/* Signature ledger */}
      <text x="180" y="446" textAnchor="middle"
        fontFamily="var(--font-fraunces), serif" fontStyle="italic" fontSize="14"
        fill="rgba(30,18,15,0.78)">
        Chef Jai
      </text>
    </svg>
  );
}
