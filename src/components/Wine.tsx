'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * WINE — espresso-soft band. Big italic headline, then a horizontal row
 * of three signature drink chips. Each chip has a tiny brass mark and a
 * tasting-notes line.
 */
export default function Wine() {
  const { locale } = useLocale();

  return (
    <section id="wine" className="relative bg-espresso-soft text-cream py-28 lg:py-36 overflow-hidden">
      {/* Ambient oxblood + brass wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(900px 700px at 25% 30%, rgba(94,27,27,0.20) 0%, rgba(94,27,27,0.04) 35%, transparent 70%), radial-gradient(800px 500px at 80% 80%, rgba(176,141,76,0.16) 0%, rgba(176,141,76,0.03) 40%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow text-brass">{COPY.wine.eyebrow[locale]}</p>
          <h2
            className="display italic leading-[1.04] mt-5"
            style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
            lang={locale}
          >
            {COPY.wine.title[locale]}
          </h2>
          <span className="brass-rule wide mt-8" />
          <p
            className="font-sans text-[15.5px] leading-[1.85] text-cream/80 mt-8 max-w-md"
            lang={locale}
          >
            {COPY.wine.body[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-7">
            {COPY.wine.drinks.map((d, i) => (
              <li
                key={i}
                className="grid grid-cols-[28px_1fr] gap-5 items-baseline border-b border-[var(--rule-soft)] pb-5"
              >
                <span
                  className="display text-brass text-2xl tabular-nums"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display text-[22px] leading-tight" lang={locale}>
                    {d.name[locale]}
                  </h3>
                  <p
                    className="font-sans text-[12.5px] tracking-[0.04em] text-cream/65 mt-1.5"
                    lang={locale}
                  >
                    {d.notes[locale]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* Sommelier credit — Kiki Sontiyart leads the wine programme.
              Verified via Star Wine List. */}
          <p
            className="font-sans text-[11px] uppercase tracking-[0.32em] text-brass mt-10"
            lang={locale}
          >
            {COPY.wine.credit[locale]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
