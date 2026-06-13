'use client';

import Image from 'next/image';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * MENU — recipe-card editorial treatment.
 *
 * v3 (opus pass): the previous version was a competent grid of three
 * featured cards + two columns of items. This version pushes harder:
 *
 *   (1) Featured dishes are recipe cards — each has a margin note in
 *       italic Fraunces with the actual ingredient list, an attribution
 *       line ("Mew's — fire-grilled scallop"), an indexed PLATE number,
 *       and a brass corner-bracket framing the photo. Reads like a
 *       page from a chef's ledger, not a stock card grid.
 *
 *   (2) The featured grid alternates orientation: cards 1 & 3 have the
 *       margin note on the LEFT of the photo; cards 2 & 4 on the RIGHT.
 *       Breaks the rigid centre-and-three grid.
 *
 *   (3) Each card has a small rotated "PLATE n" ledger tag.
 */
export default function Menu() {
  const { locale } = useLocale();
  const m = COPY.menu;

  return (
    <section id="menu" className="relative bg-espresso text-cream py-28 lg:py-40 paper-grain">
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

        {/* FEATURED — alternating recipe-card layout (asymmetric) */}
        <div className="space-y-12 lg:space-y-16 mb-20 lg:mb-28">
          {m.featured.map((f, i) => (
            <RecipeCard
              key={f.key}
              index={i + 1}
              photo={f.photo}
              focal={f.focal}
              name={f.name[locale]}
              caption={f.caption[locale]}
              ingredients={f.margin[locale]}
              attribution={f.attribution[locale]}
              flip={i % 2 === 1}
            />
          ))}
        </div>

        {/* Brass divider — separates the editorial showcase from the
            full menu card below. */}
        <div className="flex items-center gap-4 mb-14">
          <span aria-hidden className="flex-1 h-px bg-brass/30" />
          <p className="font-sans text-[10.5px] uppercase tracking-[0.48em] text-brass" lang={locale}>
            {locale === 'en' ? 'The full card' : 'เมนูเต็ม'}
          </p>
          <span aria-hidden className="flex-1 h-px bg-brass/30" />
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

/**
 * RecipeCard — single editorial featured-dish entry. Photo + margin
 * note column with handwritten-feel ingredient list + attribution line.
 * The `flip` prop swaps left/right placement so cards alternate.
 */
function RecipeCard({
  index,
  photo,
  focal,
  name,
  caption,
  ingredients,
  attribution,
  flip,
}: {
  index: number;
  photo: string;
  focal?: string;
  name: string;
  caption: string;
  ingredients: readonly string[];
  attribution: string;
  flip: boolean;
}) {
  const plate = String(index).padStart(2, '0');

  return (
    <Reveal>
      <article
        className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 lg:gap-14 items-center"
        style={{ direction: flip ? 'rtl' : 'ltr' }}
      >
        {/* LEFT (or RIGHT) — margin note: handwritten ingredient list */}
        <div style={{ direction: 'ltr' }} className="relative">
          {/* Indexed PLATE tag — small rotated brass label */}
          <span
            className="font-sans text-[10px] uppercase tracking-[0.42em] text-brass inline-block"
            style={{ transform: 'rotate(-3deg)', transformOrigin: 'left center' }}
          >
            Plate · {plate}
          </span>

          <h3
            className="display italic leading-[1.05] mt-4"
            style={{ fontSize: 'clamp(26px, 3vw, 44px)', letterSpacing: '-0.01em' }}
          >
            {name}
          </h3>

          <p className="font-sans text-[12.5px] uppercase tracking-[0.22em] text-brass/85 mt-3">
            {caption}
          </p>

          {/* Recipe-ledger ingredient list — italic Fraunces, hand-set
              with offset margins to feel pencil-jotted */}
          <ul className="mt-6 space-y-1.5 max-w-[28ch]">
            {ingredients.map((ing, j) => (
              <li
                key={j}
                className="display italic text-cream/80 leading-[1.4]"
                style={{
                  fontSize: 17,
                  paddingLeft: `${(j % 3) * 8}px`,
                }}
              >
                <span
                  aria-hidden
                  className="inline-block mr-2 align-middle"
                  style={{
                    width: 14,
                    height: 1,
                    background: '#B08D4C',
                    opacity: 0.55,
                  }}
                />
                {ing}
              </li>
            ))}
          </ul>

          {/* Attribution line — like a margin signature */}
          <p
            className="display italic text-brass mt-6 max-w-[30ch]"
            style={{ fontSize: 14, transform: 'rotate(-1deg)', transformOrigin: 'left top' }}
          >
            — {attribution}
          </p>
        </div>

        {/* RIGHT (or LEFT) — photo with brass corner bracket frame */}
        <div style={{ direction: 'ltr' }}>
          <figure className="relative">
            <div className="relative aspect-[5/4] overflow-hidden warm-sweep group">
              <Image
                src={photo}
                alt={`${name} at Charmkrung — ${caption.toLowerCase()}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={88}
                style={{ objectPosition: focal ?? '50% 50%' }}
                className="object-cover transition-transform duration-[1800ms] ease-elegant group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(26,22,20,0) 60%, rgba(26,22,20,0.55) 100%)',
                }}
              />
              {/* Brass corner brackets — frame like a ledger card */}
              <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 26, height: 26, borderTop: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ top: 10, right: 10, width: 26, height: 26, borderTop: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 10, left: 10, width: 26, height: 26, borderBottom: '1.2px solid #B08D4C', borderLeft: '1.2px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 26, height: 26, borderBottom: '1.2px solid #B08D4C', borderRight: '1.2px solid #B08D4C' }} />
            </div>
          </figure>
        </div>
      </article>
    </Reveal>
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
