'use client';

import Image from 'next/image';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — proper restaurant-menu treatment.
 *
 * 1. Three "featured" dishes at the top with REAL verified photos.
 * 2. Below that, the actual printed menu (Small Bites + Medium Plates)
 *    in two editorial columns — names, descriptions, prices.
 *
 * Photography is restricted to dishes we can verify; the rest of the
 * menu reads as a real restaurant card, not stock-photo cards.
 */
export default function Menu() {
  const { locale } = useLocale();
  const m = COPY.menu;

  return (
    <section id="menu" className="relative bg-espresso text-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mb-16 items-end">
          <Reveal>
            <p className="eyebrow text-brass">{m.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(36px, 5vw, 80px)' }}
              lang={locale}
            >
              {m.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-sans text-[15.5px] leading-[1.85] text-cream/80 max-w-md lg:ml-auto" lang={locale}>
              {m.intro[locale]}
            </p>
          </Reveal>
        </div>

        {/* FEATURED DISHES — three verified photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-20 lg:mb-28">
          {m.featured.map((f, i) => (
            <Reveal key={f.key} delay={i * 0.07}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-espresso-soft warm-sweep">
                  <Image
                    src={f.photo}
                    alt={`${f.name.en} at Charmkrung, Bangkok — ${f.caption.en.toLowerCase()}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={88}
                    // `focal` is per-dish so DestinAsian's split-frame
                    // photos (destin-2 / destin-5) crop to the actual
                    // dish on the left, not the seam between scenes.
                    style={{ objectPosition: f.focal ?? '50% 50%' }}
                    className="object-cover transition-transform duration-[2000ms] ease-elegant group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(26,22,20,0) 0%, rgba(26,22,20,0) 55%, rgba(26,22,20,0.6) 100%)',
                    }}
                  />
                </div>
                <figcaption className="pt-5">
                  <h3 className="display italic text-[24px] leading-tight" lang={locale}>
                    {f.name[locale]}
                  </h3>
                  <p className="font-sans text-[12px] uppercase tracking-[0.22em] text-cream/55 mt-2" lang={locale}>
                    {f.caption[locale]}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* THE ACTUAL MENU — two columns */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14">
          <MenuColumn
            label={m.smallBitesLabel[locale]}
            items={m.smallBites.map((d) => ({ name: d.name[locale], desc: d.desc[locale], price: d.price }))}
            locale={locale}
          />
          <MenuColumn
            label={m.mediumPlatesLabel[locale]}
            items={m.mediumPlates.map((d) => ({ name: d.name[locale], desc: d.desc[locale], price: d.price }))}
            locale={locale}
          />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center space-y-4">
            <p className="font-sans text-[11.5px] uppercase tracking-[0.28em] text-cream/45" lang={locale}>
              {m.footnote[locale]}
            </p>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-sans text-[12px] uppercase tracking-[0.28em] text-cream/85 hover:text-brass transition-colors duration-300 underline underline-offset-8 decoration-brass/60 decoration-[0.5px]"
              lang={locale}
            >
              {m.fullMenuCta[locale]} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MenuColumn({
  label,
  items,
  locale,
}: {
  label: string;
  items: { name: string; desc: string; price: string }[];
  locale: string;
}) {
  return (
    <Reveal>
      <div>
        <p
          className="font-sans text-[10.5px] uppercase tracking-[0.48em] text-brass border-b border-[var(--rule-soft)] pb-4 mb-8"
          lang={locale}
        >
          {label}
        </p>
        <ul className="space-y-7">
          {items.map((it, i) => (
            <li key={i} className="grid grid-cols-[1fr_auto] gap-x-6 items-baseline border-b border-[var(--rule-soft)] pb-7 last:border-0">
              <div>
                <h3 className="display text-[20px] leading-snug" lang={locale}>
                  {it.name}
                </h3>
                <p className="font-sans text-[13px] leading-[1.7] text-cream/65 mt-1.5" lang={locale}>
                  {it.desc}
                </p>
              </div>
              <span className="font-sans text-[14px] tracking-[0.04em] text-brass tabular-nums whitespace-nowrap">
                {it.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
