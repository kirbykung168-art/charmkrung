'use client';

import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * VISIT — espresso section with two columns:
 *  - Left: address, hours, phone, email, transit, parking
 *  - Right: lazy-loaded Google Maps embed
 */
export default function Visit() {
  const { locale } = useLocale();

  return (
    <section id="visit" className="relative bg-espresso text-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-brass">{COPY.visit.eyebrow[locale]}</p>
          <h2
            className="display leading-[1.02] mt-5 max-w-3xl"
            style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
            lang={locale}
          >
            {COPY.visit.title[locale]}
          </h2>
          <span className="brass-rule wide mt-8" />
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal delay={0.15}>
            <dl className="space-y-10">
              <Row label={COPY.visit.addrLabel[locale]}>
                <p className="display text-[24px] leading-snug" lang={locale}>{BRAND.addressLine1}</p>
                <p className="font-sans text-[14px] text-cream/75 mt-2 leading-relaxed" lang={locale}>
                  {BRAND.addressLine2}
                  <br />
                  {BRAND.addressLine3}
                </p>
              </Row>

              <Row label={COPY.visit.hoursLabel[locale]}>
                <p className="display text-[20px] leading-snug" lang={locale}>{BRAND.hoursShort}</p>
              </Row>

              <Row label={COPY.visit.phoneLabel[locale]}>
                <a href={`tel:${BRAND.phoneTel}`} className="display text-[20px] hover:text-brass transition-colors duration-300">
                  {BRAND.phoneDisplay}
                </a>
              </Row>

              <Row label={COPY.visit.emailLabel[locale]}>
                <a href={`mailto:${BRAND.email}`} className="display text-[20px] hover:text-brass transition-colors duration-300">
                  {BRAND.email}
                </a>
              </Row>

              <Row label={COPY.visit.transitLabel[locale]}>
                <p className="font-sans text-[14.5px] leading-relaxed text-cream/85" lang={locale}>{BRAND.transit}</p>
                <p className="font-sans text-[13px] leading-relaxed text-cream/65 mt-2" lang={locale}>{COPY.visit.parking[locale]}</p>
              </Row>
            </dl>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden border border-[var(--rule)]">
              <iframe
                title={`${BRAND.name} location map`}
                src={BRAND.googleMapsEmbed}
                className="absolute inset-0 w-full h-full grayscale-[0.5] contrast-[1.05] brightness-[0.85]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* hairline brass corner brackets */}
              <span className="absolute pointer-events-none" style={{ top: 14, left: 14, width: 22, height: 22, borderTop: '1px solid #B08D4C', borderLeft: '1px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ top: 14, right: 14, width: 22, height: 22, borderTop: '1px solid #B08D4C', borderRight: '1px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 14, left: 14, width: 22, height: 22, borderBottom: '1px solid #B08D4C', borderLeft: '1px solid #B08D4C' }} />
              <span className="absolute pointer-events-none" style={{ bottom: 14, right: 14, width: 22, height: 22, borderBottom: '1px solid #B08D4C', borderRight: '1px solid #B08D4C' }} />
            </div>
            <div className="mt-4 text-right">
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.28em] text-cream/65 hover:text-brass transition-colors duration-300"
              >
                Open in Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[max-content_1fr] gap-x-8 items-baseline border-b border-[var(--rule-soft)] pb-7">
      <dt className="eyebrow text-brass/85 whitespace-nowrap">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
