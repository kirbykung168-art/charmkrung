'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * SPACE — atmospheric 4-tile gallery on espresso. Placeholder "interior
 * shots" rendered as warm gradient tiles in different tones; swap with
 * /public/images/space/* once owner photography arrives.
 */
export default function Space() {
  const { locale } = useLocale();

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

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {SPACE_TILES.map((tile, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={tile.cls}
            >
              <div className="relative w-full h-full aspect-[3/4] sm:aspect-auto overflow-hidden paper-grain" style={{ background: tile.bg }}>
                {/* hairline brass corners */}
                <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid rgba(176,141,76,0.65)', borderLeft: '1px solid rgba(176,141,76,0.65)' }} />
                <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid rgba(176,141,76,0.65)', borderRight: '1px solid rgba(176,141,76,0.65)' }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SPACE_TILES = [
  {
    cls: 'lg:col-span-7 lg:row-span-2 lg:aspect-[16/12]',
    bg: 'radial-gradient(800px 500px at 35% 30%, rgba(176,141,76,0.35) 0%, rgba(94,27,27,0.18) 45%, #1A1614 80%)',
  },
  {
    cls: 'lg:col-span-5 lg:aspect-[6/5]',
    bg: 'radial-gradient(600px 400px at 60% 40%, rgba(94,27,27,0.30) 0%, rgba(176,141,76,0.12) 50%, #1A1614 80%)',
  },
  {
    cls: 'lg:col-span-5 lg:aspect-[6/5]',
    bg: 'radial-gradient(600px 400px at 35% 70%, rgba(176,141,76,0.22) 0%, rgba(94,27,27,0.10) 50%, #1A1614 80%)',
  },
];
