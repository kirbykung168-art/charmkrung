'use client';

import { SOMMELIER, BRAND } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * SOMMELIER — credit card for Kiki Sontiyart + Star Wine List badge.
 * Lives directly below the Wine section as a credentials anchor.
 *
 * No photo on file (same privacy logic as e-ga founder card) — a
 * stylized linework "vintage stencil" treatment stands in.
 */
export default function Sommelier() {
  const { locale } = useLocale();
  return (
    <section className="relative bg-espresso text-cream py-20 lg:py-28 border-t border-[var(--rule-soft)]">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-14 items-start">
            <SommelierStencil />

            <figcaption className="pt-3 max-w-[60ch]">
              <p className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-brass">
                Wine programme
              </p>
              <p
                className="display leading-[1.15] text-cream mt-2"
                style={{ fontSize: 'clamp(22px, 2.4vw, 30px)' }}
              >
                {SOMMELIER.name}
              </p>
              <p
                className="font-sans text-[12px] uppercase tracking-[0.22em] text-cream/55 mt-2"
                lang={locale}
              >
                {SOMMELIER.role[locale]}
              </p>
              <p
                className="font-sans text-[14.5px] leading-[1.8] text-cream/80 mt-5"
                lang={locale}
              >
                {SOMMELIER.bio[locale]}
              </p>
            </figcaption>

            <a
              href={SOMMELIER.badge.url}
              target="_blank"
              rel="noreferrer"
              className="block group relative w-[170px] shrink-0"
              aria-label="View Charmkrung on Star Wine List"
            >
              <div className="border border-brass/45 px-5 py-6 text-center transition-colors duration-500 group-hover:border-brass group-hover:bg-brass/[0.06]">
                <p className="font-sans text-[9.5px] uppercase tracking-[0.32em] text-cream/55">
                  Award
                </p>
                <p className="display leading-[1.05] text-brass mt-2" style={{ fontSize: 26 }}>
                  SWL ’26
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-cream/75 mt-3 leading-tight" lang={locale}>
                  {SOMMELIER.badge.sub[locale]}
                </p>
                <span className="block mt-4 font-sans text-[9px] uppercase tracking-[0.32em] text-brass/80">
                  Verify ↗
                </span>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Editorial stencil — sommelier silhouette (corkscrew + glass).
 * Not a likeness; communicates role.
 */
function SommelierStencil() {
  return (
    <svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      aria-hidden
      className="shrink-0"
    >
      <rect x="2" y="2" width="116" height="156" rx="2"
        fill="none" stroke="var(--brass)" strokeOpacity="0.45" strokeWidth="0.6" />
      <circle cx="105" cy="14" r="2.5" fill="var(--oxblood)" />
      <text x="10" y="18" fontFamily="var(--font-hanken), sans-serif" fontSize="5" letterSpacing="0.32em" fill="var(--brass)">
        PLATE II
      </text>
      <g fill="none" stroke="var(--cream)" strokeOpacity="0.78" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Wine glass — bowl + stem + base */}
        <path d="M 36 52 C 36 70, 48 80, 60 80 C 72 80, 84 70, 84 52 L 36 52 Z" />
        <line x1="60" y1="80" x2="60" y2="118" />
        <line x1="46" y1="118" x2="74" y2="118" />
        {/* Wine fill — oxblood */}
        <path d="M 41 56 C 42 66, 50 75, 60 75 C 70 75, 78 66, 79 56 L 41 56 Z" stroke="var(--oxblood)" fill="var(--oxblood)" fillOpacity="0.78" />
        {/* Light reflection */}
        <path d="M 46 58 C 47 60, 50 60, 52 58" stroke="var(--cream)" strokeOpacity="0.85" />
      </g>
      {/* Decorative diamond row */}
      <g fill="var(--brass)" fillOpacity="0.6">
        <rect x="38" y="135" width="3" height="3" transform="rotate(45 39.5 136.5)" />
        <rect x="58" y="135" width="3" height="3" transform="rotate(45 59.5 136.5)" />
        <rect x="78" y="135" width="3" height="3" transform="rotate(45 79.5 136.5)" />
      </g>
      <line x1="10" y1="148" x2="110" y2="148" stroke="var(--brass)" strokeOpacity="0.4" strokeWidth="0.4" />
      <text x="60" y="146" textAnchor="middle"
        fontFamily="var(--font-fraunces), serif" fontStyle="italic" fontSize="10"
        fill="var(--cream)" fillOpacity="0.75">
        Kiki
      </text>
    </svg>
  );
}
