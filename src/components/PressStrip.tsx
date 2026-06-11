'use client';

import { COPY, PRESS_LOGOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * PRESS STRIP — a small "As featured in" row that appears between the
 * hero and the brand marquee. Typographic only (no logos) since we
 * don't have publication rights to actual logos. Each item is a quiet
 * uppercase serif so the strip reads as editorial restraint, not a
 * trophy case.
 */
export default function PressStrip() {
  const { locale } = useLocale();

  return (
    <section
      aria-label="Press features"
      className="relative bg-espresso text-cream/70 border-b border-[var(--rule-soft)]"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-10 lg:py-14">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 text-center">
            <p
              className="font-sans text-[10px] uppercase tracking-[0.48em] text-brass"
              lang={locale}
            >
              {COPY.press.label[locale]}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {PRESS_LOGOS.map((p, i) => (
                <li key={p.name} className="flex items-center gap-x-8">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display italic text-cream/85 hover:text-brass transition-colors duration-500 ease-elegant text-[16px] lg:text-[18px] tracking-wide"
                  >
                    {p.name}
                  </a>
                  {i < PRESS_LOGOS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden sm:inline-block w-1 h-1 rotate-45 bg-brass/60"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
