'use client';

import { COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';
import CountUp from './CountUp';

/**
 * STATS — a quiet four-up band between Story and Menu. Big tabular
 * numbers count up on scroll; brass hairline under each label.
 */
const STATS = [
  { value: 60,  label: { en: 'Seats',           th: 'ที่นั่ง' } },
  { value: 200, label: { en: 'Wines on the list', th: 'ไวน์ในลิสต์' },  suffix: '+' },
  { value: 6,   label: { en: 'Storeys up',      th: 'ชั้น' },             prefix: '#' },
  { value: 1950,label: { en: 'Factory vintage', th: 'อาคารยุค' } },
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
                  style={{ fontSize: 'clamp(40px, 5vw, 70px)' }}
                >
                  {s.prefix ?? ''}
                  <CountUp to={s.value} duration={1.8} />
                  {s.suffix ?? ''}
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
