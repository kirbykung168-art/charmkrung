'use client';

import Image from 'next/image';
import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * SPACE — real interior photographs of the sixth-floor factory loft.
 * Layout: one wide hero tile, two square tiles below.
 */
export default function Space() {
  const { locale } = useLocale();

  const tiles = [
    {
      src: PHOTOS.spaceWide,
      alt: 'Charmkrung — sixth-floor dining room with central bar and kitchen pass',
      cls: 'lg:col-span-12 aspect-[16/9] lg:aspect-[16/8]',
    },
    {
      src: PHOTOS.spaceA,
      alt: 'Charmkrung interior — warm low-lit factory loft',
      cls: 'lg:col-span-6 aspect-[5/4]',
    },
    {
      src: PHOTOS.spaceB,
      alt: 'Charmkrung — table seating with views over Charoen Krung',
      cls: 'lg:col-span-6 aspect-[5/4]',
    },
  ];

  return (
    <section id="space" className="relative bg-espresso text-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-brass">{COPY.space.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.space.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[15.5px] leading-[1.85] text-cream/80 max-w-md lg:ml-auto"
              lang={locale}
            >
              {COPY.space.body[locale]}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {tiles.map((tile, i) => (
            <Reveal key={i} delay={i * 0.08} className={tile.cls}>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={88}
                  className="object-cover object-center"
                />
                {/* hairline brass corners */}
                <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid rgba(176,141,76,0.7)', borderLeft: '1px solid rgba(176,141,76,0.7)' }} />
                <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid rgba(176,141,76,0.7)', borderRight: '1px solid rgba(176,141,76,0.7)' }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
