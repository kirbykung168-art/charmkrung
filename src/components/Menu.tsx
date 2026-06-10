'use client';

import Image from 'next/image';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — dish cards on espresso. Each card pairs a real press
 * photograph with the dish name, description, and price. The
 * brass hairline draws in on hover.
 */
export default function Menu() {
  const { locale } = useLocale();

  return (
    <section id="menu" className="relative bg-espresso text-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mb-16 items-end">
          <Reveal>
            <p className="eyebrow text-brass">{COPY.menu.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(36px, 5vw, 80px)' }}
              lang={locale}
            >
              {COPY.menu.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-[15.5px] leading-[1.85] text-cream/80 max-w-md lg:ml-auto" lang={locale}>
              {COPY.menu.intro[locale]}
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-12 lg:gap-y-20">
          {COPY.menu.dishes.map((dish, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <article className="group">
                {/* Real press photograph — pulls one of the dish slots from
                    PHOTOS.dish[]. Vary the alt to describe each dish. */}
                <div className="relative aspect-[4/3] overflow-hidden bg-espresso-soft warm-sweep">
                  <Image
                    src={PHOTOS.dish[i % PHOTOS.dish.length]}
                    alt={`${dish.name.en} — Charmkrung`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={86}
                    className="object-cover object-center transition-transform duration-[1800ms] ease-elegant group-hover:scale-[1.04]"
                  />
                  {/* warm vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(26,22,20,0) 0%, rgba(26,22,20,0) 60%, rgba(26,22,20,0.55) 100%)',
                    }}
                  />
                  <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 18, height: 18, borderTop: '1px solid rgba(176,141,76,0.65)', borderLeft: '1px solid rgba(176,141,76,0.65)' }} />
                  <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 18, height: 18, borderBottom: '1px solid rgba(176,141,76,0.65)', borderRight: '1px solid rgba(176,141,76,0.65)' }} />
                </div>

                <div className="pt-6 flex items-baseline justify-between gap-4">
                  <h3 className="display text-[26px] leading-tight" lang={locale}>
                    {dish.name[locale]}
                  </h3>
                  <span className="font-sans text-[14px] tracking-[0.04em] text-brass tabular-nums whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>

                <span className="block w-full h-px bg-brass/30 mt-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-elegant" />
                <p
                  className="font-sans text-[13.5px] leading-[1.75] text-cream/70 mt-4"
                  lang={locale}
                >
                  {dish.desc[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 text-center">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.28em] text-cream/85 hover:text-brass transition-colors duration-300 underline underline-offset-8 decoration-brass/60 decoration-[0.5px]"
              lang={locale}
            >
              {COPY.menu.fullMenuCta[locale]} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
