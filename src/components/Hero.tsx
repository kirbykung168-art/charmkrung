'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BRAND, COPY } from '@/lib/content';
import { useLocale } from './LanguageProvider';

/**
 * HERO — full-viewport candle-lit factory loft.
 * Parallax photo backdrop, fade-up display headline, two CTAs.
 *
 * Image placeholder: an SVG warm radial that suggests a candle in a dim
 * room. Swap for /public/images/hero.jpg once owner photography arrives.
 */
export default function Hero() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-espresso"
    >
      {/* Atmospheric backdrop */}
      <motion.div
        style={prefersReduced ? undefined : { y, opacity }}
        className="absolute inset-0"
      >
        <HeroBackdrop />
        {/* warm vignette + text-legibility wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,22,20,0.55) 0%, rgba(26,22,20,0.30) 25%, rgba(26,22,20,0.55) 65%, rgba(26,22,20,0.95) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 700px at 50% 55%, rgba(94,27,27,0.18) 0%, rgba(0,0,0,0) 60%)',
          }}
        />
      </motion.div>

      {/* Centerpiece */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="eyebrow text-brass mb-7"
          lang={locale}
        >
          {COPY.hero.eyebrow[locale]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="display text-cream max-w-[18ch] leading-[1.02]"
          style={{
            fontSize: 'clamp(38px, 6.6vw, 100px)',
            textShadow: '0 2px 20px rgba(0,0,0,0.45)',
          }}
          lang={locale}
        >
          {COPY.hero.title[locale]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-sans text-[14.5px] text-cream/85 leading-relaxed max-w-2xl mt-8"
          lang={locale}
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
        >
          {COPY.hero.body[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BRAND.reserveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
            lang={locale}
          >
            {COPY.hero.ctaReserve[locale]} <span className="btn-arrow">→</span>
          </a>
          <a
            href="#menu"
            className="font-sans text-[12px] uppercase tracking-[0.28em] text-cream/85 hover:text-brass transition-colors duration-300 underline underline-offset-8 decoration-brass/60 decoration-[0.5px] pt-3 sm:pt-0"
            lang={locale}
          >
            {COPY.hero.ctaMenu[locale]}
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-cream/65 text-[10px] tracking-[0.32em] uppercase" lang={locale}>
          {COPY.hero.scrollHint[locale]}
        </span>
        <motion.span
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-10 bg-brass/70 origin-top"
        />
      </motion.div>
    </section>
  );
}

/**
 * Placeholder atmospheric backdrop — a warm candle-glow gradient over
 * espresso. Replace with a real photograph by adding /public/images/hero.jpg
 * and swapping this for an Image component.
 */
function HeroBackdrop() {
  return (
    <div className="absolute inset-0 paper-grain">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 600px at 30% 35%, rgba(176,141,76,0.30) 0%, rgba(176,141,76,0.06) 30%, rgba(26,22,20,0) 60%), radial-gradient(700px 500px at 75% 70%, rgba(94,27,27,0.32) 0%, rgba(94,27,27,0.05) 40%, rgba(26,22,20,0) 70%), #1A1614',
        }}
      />
    </div>
  );
}
