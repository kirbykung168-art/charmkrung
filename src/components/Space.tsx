'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { COPY, PHOTOS } from '@/lib/content';
import { useLocale } from './LanguageProvider';
import Reveal from './Reveal';

/**
 * SPACE — three real interior photographs of the sixth-floor loft.
 * Each tile drifts at a different scroll-tied rate, giving the wall depth.
 */
export default function Space() {
  const { locale } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calmer parallax — half the previous amplitude so it doesn't
  // fight Lenis smooth scroll. Was [20,-20] / [60,-60] / [38,-38].
  const yWide = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const yA    = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yB    = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const tiles = [
    {
      src: PHOTOS.spaceWide,
      alt: 'Charmkrung — sixth-floor dining room with central bar and kitchen pass',
      cls: 'lg:col-span-12 aspect-[16/9] lg:aspect-[16/8]',
      y: yWide,
    },
    {
      src: PHOTOS.spaceA,
      alt: 'Charmkrung interior — warm low-lit factory loft',
      cls: 'lg:col-span-6 aspect-[5/4]',
      y: yA,
    },
    {
      src: PHOTOS.spaceB,
      alt: 'Charmkrung — table seating with views over Charoen Krung',
      cls: 'lg:col-span-6 aspect-[5/4]',
      y: yB,
    },
  ];

  return (
    <section ref={ref} id="space" className="relative bg-espresso text-cream py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-end mb-14">
          <Reveal>
            <p className="eyebrow text-brass">{COPY.space.eyebrow[locale]}</p>
            <h2
              className="display leading-[1.02] mt-5"
              style={{ fontSize: 'clamp(34px, 5vw, 76px)' }}
              lang={locale}
            >
              {COPY.space.title[locale]}
            </h2>
            <span className="brass-rule wide mt-8" />
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-sans text-[15.5px] leading-[1.85] text-cream/80 max-w-md lg:ml-auto"
              lang={locale}
            >
              {COPY.space.body[locale]}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {tiles.map((tile, i) => (
            <Tile key={i} {...tile} prefersReduced={!!prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  src, alt, cls, y, prefersReduced,
}: {
  src: string;
  alt: string;
  cls: string;
  y: MotionValue<number>;
  prefersReduced: boolean;
}) {
  return (
    <motion.figure
      style={prefersReduced ? undefined : { y }}
      className={cls}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="relative w-full h-full overflow-hidden warm-sweep">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={88}
          className="object-cover object-center transition-transform duration-[2200ms] ease-elegant hover:scale-[1.04]"
        />
        <span className="absolute pointer-events-none" style={{ top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid rgba(176,141,76,0.7)', borderLeft: '1px solid rgba(176,141,76,0.7)' }} />
        <span className="absolute pointer-events-none" style={{ bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid rgba(176,141,76,0.7)', borderRight: '1px solid rgba(176,141,76,0.7)' }} />
      </div>
    </motion.figure>
  );
}
