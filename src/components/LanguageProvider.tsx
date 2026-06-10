'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Locale } from '@/lib/content';

const LOCALE_KEY = 'charmkrung-locale';

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
}
const LanguageContext = createContext<Ctx>({ locale: 'en', setLocale: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_KEY) as Locale | null;
      if (stored === 'en' || stored === 'th') {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem(LOCALE_KEY, l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
