'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream section. Editorial layout with display heading on the
 * left, body + pull-quote on the right.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-espresso py-28 lg:py-40 paper-grain">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
        <Reveal>
          <p className="eyebrow text-brass-deep">{COPY.story.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-5"
            style={{ fontSize: 'clamp(36px, 5.4vw, 84px)' }}
            lang={locale}
          >
            {COPY.story.title[locale]}
          </h2>
          <span className="brass-rule wide mt-8" />
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="font-sans text-[16px] leading-[1.9] text-espresso/85 max-w-prose"
            lang={locale}
          >
            {COPY.story.body[locale]}
          </p>

          <blockquote
            className="display italic mt-10 leading-[1.25] text-espresso max-w-[22ch]"
            style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}
            lang={locale}
          >
            <span className="text-brass mr-1">“</span>
            {COPY.story.pullQuote[locale].replace(/[“”]/g, '')}
            <span className="text-brass ml-1">”</span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
