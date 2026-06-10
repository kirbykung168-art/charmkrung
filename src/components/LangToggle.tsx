'use client';

import { useLocale } from './LanguageProvider';
import clsx from 'clsx';

interface Props {
  variant?: 'dark' | 'light';
  className?: string;
}

/**
 * EN / TH toggle — a pair of buttons separated by a hairline brass divider.
 */
export default function LangToggle({ variant = 'dark', className }: Props) {
  const { locale, setLocale } = useLocale();
  const inactive = variant === 'dark' ? 'text-cream/55' : 'text-espresso/55';
  const active = variant === 'dark' ? 'text-cream' : 'text-espresso';

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.28em]',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={clsx(
          'transition-colors duration-300',
          locale === 'en' ? active : `${inactive} hover:text-brass`,
        )}
      >
        EN
      </button>
      <span className="w-px h-3 bg-brass/50" aria-hidden />
      <button
        type="button"
        onClick={() => setLocale('th')}
        aria-pressed={locale === 'th'}
        className={clsx(
          'transition-colors duration-300',
          locale === 'th' ? active : `${inactive} hover:text-brass`,
        )}
      >
        TH
      </button>
    </div>
  );
}
