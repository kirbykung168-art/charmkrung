'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import CountUp from './CountUp';

/**
 * STATS — a quiet four-up band between Story and Menu. Big tabular
 * numbers count up on scroll; brass hairline under each label.
 */
/**
 * Each stat either counts up to a real number or shows static text.
 * Static items (years, awards) display verbatim; only quantities animate.
 */
type Stat = {
  label: { en: string; th: string };
} & (
  | { kind: 'count'; value: number; prefix?: string; suffix?: string }
  | { kind: 'static'; display: string }
);

const STATS: Stat[] = [
  {
    kind: 'count',
    value: 60,
    label: { en: 'Seats', th: 'ที่นั่ง' },
  },
  {
    // Star Wine List of the Year — Best Short List Southeast Asia 2026.
    // Verified at starwinelist.com/wine-place/charmkrung.
    kind: 'static',
    display: 'SWL ’26',
    label: { en: 'Best Short List · SE Asia', th: 'รายชื่อยอดเยี่ยม · เอเชียตะวันออกเฉียงใต้' },
  },
  {
    kind: 'count',
    value: 6,
    prefix: '#',
    label: { en: 'Storeys up', th: 'ชั้น' },
  },
  {
    kind: 'static',
    display: '1950s',
    label: { en: 'Factory vintage', th: 'อาคารยุค' },
  },
];

export default function Stats() {
  const { locale } = useLocale();
  return (
    <section className="relative bg-espresso text-cream border-b border-[var(--rule-soft)]">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="text-center lg:text-left">
                <p
                  className="display text-cream leading-none"
                  style={{ fontSize: 'clamp(36px, 4.6vw, 64px)' }}
                >
                  {s.kind === 'count' ? (
                    <>
                      {s.prefix ?? ''}
                      <CountUp to={s.value} duration={1.8} />
                      {s.suffix ?? ''}
                    </>
                  ) : (
                    s.display
                  )}
                </p>
                <span className="block w-10 h-px bg-brass mt-4 mx-auto lg:mx-0" />
                <p
                  className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-cream/65 mt-4"
                  lang={locale}
                >
                  {s.label[locale]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
