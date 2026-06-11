'use client';

import { EVENTS, BRAND } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * EVENTS / private — wine-bar revenue driver. Sits below Space, above
 * Reserve, so a corporate planner browsing the site sees the option
 * before they're funneled to the consumer reservation button.
 */
export default function Events() {
  const { locale } = useLocale();
  const subject = encodeURIComponent('Charmkrung private event enquiry');
  const mailto = `mailto:${BRAND.email}?subject=${subject}`;

  return (
    <section
      id="events"
      className="relative bg-espresso-soft text-cream py-24 lg:py-32 overflow-hidden border-y border-[var(--rule-soft)]"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'radial-gradient(700px 500px at 80% 50%, rgba(94,27,27,0.18) 0%, rgba(94,27,27,0.02) 50%, transparent 75%)',
        }}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
        <Reveal>
          <div>
            <p className="eyebrow text-brass">{EVENTS.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {EVENTS.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
            <p
              className="font-sans text-[15.5px] leading-[1.85] text-cream/80 mt-8 max-w-md"
              lang={locale}
            >
              {EVENTS.body[locale]}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <p className="font-sans text-[10.5px] uppercase tracking-[0.48em] text-brass border-b border-[var(--rule-soft)] pb-4 mb-7" lang={locale}>
              Capacity
            </p>
            <ul className="space-y-5">
              {EVENTS.capacities.map((c, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-5 items-baseline border-b border-[var(--rule-soft)] pb-5 last:border-0"
                >
                  <span className="display italic text-brass/85 text-lg tabular-nums" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="display text-[18px] leading-snug" lang={locale}>
                    {c[locale]}
                  </p>
                </li>
              ))}
            </ul>
            <a
              href={mailto}
              className="btn btn-solid mt-9"
              lang={locale}
            >
              {EVENTS.cta[locale]} <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
