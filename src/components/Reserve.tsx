'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * RESERVE — full-width oxblood band. Big headline, hours, primary
 * SevenRooms button, secondary LINE link.
 */
export default function Reserve() {
  const { locale } = useLocale();

  return (
    <section className="relative bg-oxblood text-cream py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(900px 600px at 30% 50%, rgba(176,141,76,0.30) 0%, rgba(176,141,76,0.04) 45%, transparent 75%)',
        }}
      />
      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-10 text-center">
        <Reveal>
          <h2
            className="display leading-[1.04]"
            style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
            lang={locale}
          >
            {COPY.reserve.title[locale]}
          </h2>
          <p
            className="font-sans text-[14px] tracking-[0.12em] uppercase text-cream/80 mt-6"
            lang={locale}
          >
            {COPY.reserve.body[locale]}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={BRAND.reserveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.28em] bg-cream text-espresso px-8 py-4 hover:bg-brass transition-colors duration-300"
              lang={locale}
            >
              {COPY.reserve.primary[locale]} →
            </a>
            <a
              href={BRAND.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.28em] text-cream/85 hover:text-brass underline underline-offset-8 decoration-cream/60 decoration-[0.5px] transition-colors duration-300"
              lang={locale}
            >
              {COPY.reserve.secondary[locale]}
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.28em] text-cream/85 hover:text-brass underline underline-offset-8 decoration-cream/60 decoration-[0.5px] transition-colors duration-300"
              lang={locale}
            >
              {COPY.reserve.dm[locale]}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
