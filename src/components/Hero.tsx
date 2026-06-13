'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BRAND, COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import LetterReveal from './LetterReveal';
import CursorCandle from './CursorCandle';

/**
 * HERO — full-viewport candle-lit factory loft.
 *
 * v3 push: a small neon-orange wordmark accent floats below the title
 * before the body copy, picking up the venue's actual orange CHARMKRUNG
 * neon signage. Layered text-shadows mimic neon halation. Kept tiny and
 * single-line so it ornaments rather than competing with the headline.
 */
export default function Hero() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Calmer parallax — less likely to judder against Lenis smooth wheel.
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <section
      id="top"
      ref={ref}
      data-candle
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-espresso"
    >
      <CursorCandle />

      <motion.div
        style={prefersReduced ? undefined : { y, scale, opacity }}
        className="absolute inset-0"
      >
        <div className={prefersReduced ? 'absolute inset-0' : 'absolute inset-0 ken-burns'}>
          <Image
            src={PHOTOS.hero}
            alt="Charmkrung — sixth-floor 1950s factory interior at night with the orange CHARMKRUNG signage above the kitchen pass, Charoen Krung, Bangkok"
            fill
            priority
            sizes="100vw"
            quality={88}
            className="object-cover object-[50%_35%] md:object-center"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,22,20,0.55) 0%, rgba(26,22,20,0.30) 25%, rgba(26,22,20,0.55) 65%, rgba(26,22,20,0.96) 100%)',
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

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.32em' }}
          transition={{ duration: 1.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-sans uppercase mb-7 text-brass"
          style={{ fontSize: 11, fontWeight: 500 }}
          lang={locale}
        >
          {COPY.hero.eyebrow[locale]}
        </motion.p>

        <LetterReveal
          as="h1"
          text={COPY.hero.title[locale]}
          delay={0.45}
          stagger={0.025}
          className="display text-cream max-w-[22ch] leading-[1.08]"
          style={{
            fontSize: 'clamp(36px, 6.2vw, 96px)',
            textShadow: '0 2px 20px rgba(0,0,0,0.55)',
          }}
          lang={locale}
        />

        {/* Neon orange wordmark accent — picks up the venue's actual
            CHARMKRUNG neon signage. Single-line, candle-flicker
            animated so it reads as light, not a logo. */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-7 flex items-center gap-4"
          aria-hidden
        >
          <span
            className="block w-12 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,140,60,0.6))' }}
          />
          <span
            className="display italic candle-flicker tracking-[0.06em]"
            style={{
              fontSize: 14,
              color: '#FFB05A',
              textShadow: [
                '0 0 6px rgba(255,140,60,0.85)',
                '0 0 18px rgba(255,120,40,0.6)',
                '0 0 38px rgba(220, 70, 30, 0.4)',
              ].join(', '),
            }}
          >
            歡 城 · CHARMKRUNG
          </span>
          <span
            className="block w-12 h-px"
            style={{ background: 'linear-gradient(270deg, transparent, rgba(255,140,60,0.6))' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-sans text-[14.5px] text-cream/85 leading-relaxed max-w-2xl mt-7"
          lang={locale}
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}
        >
          {COPY.hero.body[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.9 }}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-cream/70 text-[10px] tracking-[0.32em] uppercase" lang={locale}>
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
