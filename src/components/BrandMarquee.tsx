'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * BRAND MARQUEE — a single line of brand tags scrolling continuously,
 * separated by small brass diamond glyphs. Sits as a thin tape between
 * Hero (and Press Strip) and Story.
 *
 * Implementation switched from framer-motion to a pure CSS animation so
 * we can `animation-play-state: paused` on hover AND on `:active` (touch).
 * That gives mobile users a way to actually read the strip.
 *
 * Reduced motion: shows tags static, no scroll.
 */
// Reduced to five precise tags after the aesthetic audit — better to
// repeat fewer, sharper words than scroll a longer list of vague ones.
const TAGS = [
  'Wine-led',
  'Talat Noi · 6th Floor',
  '60 Seats',
  'Since 2024',
  'SWL · Best Short List · SE Asia 2026',
];

export default function BrandMarquee() {
  const prefersReduced = useReducedMotion();
  const list = [...TAGS, ...TAGS, ...TAGS];

  if (prefersReduced) {
    return (
      <div className="bg-espresso-soft text-cream border-y border-[var(--rule-soft)] overflow-hidden">
        <div className="flex items-center gap-10 py-4 px-6 lg:px-10 flex-wrap justify-center">
          {TAGS.map((t, i) => <Tag key={i}>{t}</Tag>)}
        </div>
      </div>
    );
  }

  return (
    <div className="brand-marquee bg-espresso-soft text-cream border-y border-[var(--rule-soft)] overflow-hidden">
      <div className="brand-marquee-track flex items-center gap-10 py-4 whitespace-nowrap">
        {list.map((t, i) => <Tag key={i}>{t}</Tag>)}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-10 font-sans text-[11.5px] uppercase tracking-[0.32em] text-brass/85">
      {children}
      <svg width="9" height="12" viewBox="0 0 9 12" aria-hidden>
        <path d="M4.5 0 L9 6 L4.5 12 L0 6 Z" fill="currentColor" opacity="0.55" />
      </svg>
    </span>
  );
}
