'use client';

import Image from 'next/image';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * STORY — cream editorial section with the chef portrait on the left
 * and the maison voice on the right.
 */
export default function Story() {
  const { locale } = useLocale();

  return (
    <section id="story" className="relative bg-cream text-espresso py-28 lg:py-40 paper-grain">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Chef portrait */}
        <Reveal>
          <figure>
            <div className="relative aspect-[4/5] max-w-[440px] overflow-hidden">
              <Image
                src={PHOTOS.chef}
                alt={`${BRAND.chefName}, chef and owner of Charmkrung`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={88}
                className="object-cover object-center"
              />
              {/* corner brackets in brass */}
              <span className="absolute pointer-events-none" style={{ top: 12, left: 12, width: 20, height: 20, borderTop: '1px solid #B08D4C', borderLeft: '1px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 12, right: 12, width: 20, height: 20, borderBottom: '1px solid #B08D4C', borderRight: '1px solid #B08D4C' }} />
            </div>
            <figcaption className="font-sans text-[12px] uppercase tracking-[0.28em] text-brass-deep mt-5" lang={locale}>
              {COPY.story.chefCaption[locale]}
            </figcaption>
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
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-brass-deep mt-4" lang={locale}>
            {BRAND.chefShort}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
