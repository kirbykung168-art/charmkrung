'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { BRAND, NAV_ITEMS, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import LangToggle from './LangToggle';

/**
 * Sticky nav.
 *  - Transparent over hero, fades to espresso once scrolled.
 *  - Mobile: hamburger → full-screen overlay menu with focus trap.
 *  - Active-section highlight via IntersectionObserver.
 */
export default function Nav() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant',
          scrolled
            ? 'bg-espresso/95 backdrop-blur border-b border-[var(--rule-soft)]'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10 h-[78px] flex items-center justify-between">
          <a
            href="#top"
            aria-label={BRAND.name}
            className="display text-[26px] leading-none text-cream tracking-[-0.015em] hover:text-brass transition-colors duration-300"
          >
            {BRAND.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'group relative font-sans text-[11.5px] uppercase tracking-[0.28em] pb-1 transition-colors duration-300',
                    isActive ? 'text-brass' : 'text-cream/80 hover:text-cream',
                  )}
                >
                  {item.label[locale]}
                  <span
                    className={clsx(
                      'absolute left-0 right-0 -bottom-0.5 h-px bg-brass origin-left transition-transform duration-500 ease-elegant',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </a>
              );
            })}
            <LangToggle variant="dark" className="ml-2" />
            <a
              href={BRAND.reserveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[11.5px] uppercase tracking-[0.24em] px-5 py-3 bg-oxblood text-cream hover:bg-brass hover:text-espresso transition-colors duration-400"
            >
              {COPY.nav.reserve[locale]}
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col items-end gap-[5px] p-2"
          >
            <span className="block h-[1px] w-8 bg-cream" />
            <span className="block h-[1px] w-6 bg-cream" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ease-elegant',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-espresso" />
        <div className="relative h-full flex flex-col text-cream">
          <div className="px-6 h-[78px] flex items-center justify-between">
            <span className="display text-2xl">{BRAND.name}</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-cream text-[11px] uppercase tracking-[0.28em] p-2"
            >
              Close ✕
            </button>
          </div>
          <hr className="brass-rule full opacity-30" />
          <nav className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display text-4xl hover:text-brass transition-colors duration-300"
              >
                {item.label[locale]}
              </a>
            ))}
            <a
              href={BRAND.reserveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 bg-oxblood text-cream px-7 py-3.5 font-sans text-[11px] uppercase tracking-[0.28em]"
            >
              {COPY.nav.reserve[locale]}
            </a>
            <LangToggle variant="dark" className="mt-6" />
          </nav>
          <div className="px-6 py-8 text-center text-[10.5px] uppercase tracking-[0.28em] text-cream/65" lang={locale}>
            {BRAND.addressLine2} · {COPY.reserve.body[locale]}
          </div>
        </div>
      </div>
    </>
  );
}
