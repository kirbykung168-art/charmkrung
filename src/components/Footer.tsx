'use client';

import { BRAND, COPY, NAV_ITEMS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import WaxSeal from './WaxSeal';

/**
 * FOOTER — small, quiet, anchors repeated, social icons, copyright.
 *
 * v3: adds the brass WaxSeal terminator. The seal serves as the
 * editorial sign-off — distinguishes the footer from a generic
 * warm-Thai restaurant template and reinforces the family-recipe-
 * ledger brand voice.
 */
export default function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="relative bg-espresso text-cream border-t border-[var(--rule-soft)] pt-16 pb-10">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr_1fr_auto] gap-12 items-start">
        <div>
          <a
            href="#top"
            className="display text-[28px] hover:text-brass transition-colors duration-300"
            aria-label={BRAND.name}
          >
            {BRAND.name}
          </a>
          <p
            className="font-sans text-[13px] leading-relaxed text-cream/65 max-w-sm mt-4"
            lang={locale}
          >
            {COPY.footer.tagline[locale]}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow text-brass mb-2">Browse</p>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[12.5px] uppercase tracking-[0.24em] text-cream/75 hover:text-brass transition-colors duration-300"
              lang={locale}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow text-brass mb-2">Follow</p>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.24em] text-cream/75 hover:text-brass transition-colors duration-300">Instagram · @charmkrung</a>
          <a href={BRAND.facebookUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.24em] text-cream/75 hover:text-brass transition-colors duration-300">Facebook</a>
          <a href={BRAND.linktreeUrl} target="_blank" rel="noreferrer" className="font-sans text-[12.5px] uppercase tracking-[0.24em] text-cream/75 hover:text-brass transition-colors duration-300">Linktree</a>
          <a href={`mailto:${BRAND.email}`} className="font-sans text-[12.5px] uppercase tracking-[0.24em] text-cream/75 hover:text-brass transition-colors duration-300">{BRAND.email}</a>
        </div>

        {/* WAX SEAL — distinctive editorial terminator */}
        <div className="flex flex-col items-center lg:items-end gap-3 candle-flicker">
          <WaxSeal size={128} />
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-cream/50" lang={locale}>
            {COPY.footer.sealLine[locale]}
          </p>
        </div>
      </div>

      <hr className="brass-rule full mt-12 opacity-30" />

      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 mt-8 grid md:grid-cols-3 gap-3 text-[10.5px] tracking-[0.28em] uppercase text-cream/55">
        <p lang={locale} className="md:text-left text-center">© {new Date().getFullYear()} {BRAND.name}. {COPY.footer.rights[locale]}</p>
        <p lang={locale} className="text-center">{COPY.footer.credit[locale]}</p>
        <p lang={locale} className="md:text-right text-center">{BRAND.addressLine2}</p>
      </div>
    </footer>
  );
}
