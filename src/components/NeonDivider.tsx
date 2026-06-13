'use client';

import NeonMark from './NeonMark';
import { useLocale } from './LanguageProvider';

/**
 * NeonDivider — full-width section break placing the orange neon
 * CHARMKRUNG wordmark on the espresso ground, with a quiet credit line
 * underneath. Used between Story and Menu, where the page transitions
 * from chef narrative to the actual cooking. The neon wordmark is the
 * venue's recognisable brand mark (orange neon CHARMKRUNG signage
 * above the kitchen pass) — leaning into that distinguishes the site
 * from generic warm-Thai editorial.
 *
 * Background uses a soft orange-oxblood radial bloom to mimic the
 * neon glow spilling onto the kitchen wall.
 */
export default function NeonDivider() {
  const { locale } = useLocale();
  return (
    <section
      aria-label="brand-divider"
      className="relative bg-espresso overflow-hidden py-20 lg:py-28 border-y border-[var(--rule-soft)]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px 360px at 50% 50%, rgba(255,140,60,0.18) 0%, rgba(220,70,30,0.06) 35%, transparent 70%), radial-gradient(900px 600px at 50% 50%, rgba(94,27,27,0.30) 0%, transparent 65%)',
        }}
      />

      {/* Brass hairline above + below */}
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 flex flex-col items-center">
        <span
          aria-hidden
          className="block w-24 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(176,141,76,0.6) 50%, transparent)' }}
        />

        <div className="mt-8 mb-8">
          <NeonMark size={84} withChinese align="center" />
        </div>

        <p
          className="font-sans text-[10.5px] uppercase tracking-[0.42em] text-cream/55"
          lang={locale}
        >
          歡 城 · since 2023 · sixth floor · charoen krung
        </p>

        <span
          aria-hidden
          className="mt-8 block w-24 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(176,141,76,0.6) 50%, transparent)' }}
        />
      </div>
    </section>
  );
}
