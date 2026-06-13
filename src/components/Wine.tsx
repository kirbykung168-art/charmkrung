'use client';

import Image from 'next/image';
import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * WINE — wine + cocktails editorial.
 *
 * v3 push (opus pass):
 *   - The duck/Foillard photo stays (real bottle on the table) but now
 *     lives as a small inset card next to a larger asymmetric layout.
 *   - The TAGS row visually anchors with a leading vertical brass tick.
 *   - The bottle list switches to italic Fraunces names + uppercase
 *     region eyebrows for stronger editorial hierarchy.
 *   - A short "we work the room" caption block has been added between
 *     bottles and cocktails so the section reads as written copy not
 *     a database dump.
 */
export default function Wine() {
  const { locale } = useLocale();
  const w = COPY.wine;

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

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* LEFT — story + tags + photo */}
        <div className="space-y-10">
          <Reveal>
            <p className="eyebrow text-brass">{w.eyebrow[locale]}</p>
            <h2
              className="display italic leading-[1.04] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {w.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
            <p
              className="font-sans text-[15.5px] leading-[1.85] text-cream/80 mt-8 max-w-md"
              lang={locale}
            >
              {w.body[locale]}
            </p>
          </Reveal>

          {/* TAG ROW with leading brass tick — anchors the tags as a
              category bar, not bunched chips. */}
          <Reveal delay={0.1}>
            <div className="flex items-stretch gap-3">
              <span aria-hidden className="block w-px self-stretch bg-brass/55" />
              <ul className="flex flex-wrap gap-2.5">
                {w.tags.map((t, i) => (
                  <li
                    key={i}
                    className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass border border-brass/35 px-3 py-2"
                    lang={locale}
                  >
                    {t[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* DUCK + MORGON photo — the one in-frame real bottle */}
          <Reveal delay={0.15}>
            <figure className="relative aspect-[3/2] overflow-hidden warm-sweep">
              <Image
                src={PHOTOS.dishDuck}
                alt="Charmkrung — duck breast pictured with Jean Foillard Morgon Côte du Py 2021"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={88}
                className="object-cover object-center"
              />
              {/* Brass corner brackets — match the recipe cards on the
                  menu so the visual language is consistent */}
              <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 22, height: 22, borderTop: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }} />
            </figure>
            <figcaption className="font-sans text-[11px] uppercase tracking-[0.28em] text-cream/55 mt-4">
              Pairing · Foillard Morgon Côte du Py 2021
            </figcaption>
          </Reveal>
        </div>

        {/* RIGHT — bottle list + cocktail list */}
        <div className="space-y-14">
          <Reveal delay={0.1}>
            <h3 className="font-sans text-[10.5px] uppercase tracking-[0.48em] text-brass border-b border-[var(--rule-soft)] pb-4 mb-7" lang={locale}>
              {w.bottlesLabel[locale]}
            </h3>
            <ul className="space-y-6">
              {w.bottles.map((b, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-5 items-baseline border-b border-[var(--rule-soft)] pb-5 last:border-0"
                >
                  <span
                    className="display text-brass text-xl tabular-nums"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="display italic text-[19px] leading-tight">
                      {b.name}
                    </h4>
                    <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass/85 mt-2" lang={locale}>
                      {b.region[locale]}
                    </p>
                    <p className="font-sans text-[12.5px] leading-[1.7] text-cream/70 mt-2" lang={locale}>
                      {b.notes[locale]}
                    </p>
                    {'pick' in b && b.pick && (
                      <p className="display italic text-[13px] leading-[1.55] text-brass/85 mt-2" lang={locale}>
                        &mdash; {b.pick[locale]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Inter-section editorial caption — distinguishes the page
              from a database dump of bottles. */}
          <Reveal delay={0.16}>
            <p
              className="font-sans text-[12px] uppercase tracking-[0.32em] text-cream/55 leading-[1.7] border-l-2 border-brass/45 pl-4"
              lang={locale}
            >
              {locale === 'en'
                ? 'We work the room. Tell us how spicy you like things, and what you don\'t drink — Kiki will pour from there.'
                : 'เราอ่านห้อง · บอกเราว่าคุณชอบเผ็ดแค่ไหน และไม่ดื่มอะไร — Kiki จะรินจากตรงนั้น'}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-sans text-[10.5px] uppercase tracking-[0.48em] text-brass border-b border-[var(--rule-soft)] pb-4 mb-7" lang={locale}>
              {w.cocktailsLabel[locale]}
            </h3>
            <ul className="space-y-5">
              {w.cocktails.map((c, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-5 items-baseline border-b border-[var(--rule-soft)] pb-4 last:border-0"
                >
                  <span
                    className="display italic text-brass/80 text-lg tabular-nums"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="display italic text-[18px] leading-tight" lang={locale}>
                      {c.name[locale]}
                    </h4>
                    <p className="font-sans text-[12px] tracking-[0.04em] text-cream/65 mt-1" lang={locale}>
                      {c.notes[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <p
              className="font-sans text-[11px] uppercase tracking-[0.32em] text-brass leading-[1.7]"
              lang={locale}
            >
              {w.credit[locale]}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
