'use client';

import { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Props {
  to: number;
  from?: number;
  duration?: number;
  /** Render only when scrolled into view. Default true. */
  whenInView?: boolean;
}

/**
 * CountUp — tabular number that animates from `from` to `to` over the
 * given duration, easing out. Fires on first intersection by default.
 * Reduced motion: snaps to the final value.
 */
export default function CountUp({ to, from = 0, duration = 1.8, whenInView = true }: Props) {
  const [n, setN] = useState(whenInView ? from : to);
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      setN(to);
      return;
    }
    const start = () => {
      if (fired.current) return;
      fired.current = true;
      const t0 = performance.now();
      const ease = (x: number) => 1 - Math.pow(1 - x, 3);
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / (duration * 1000));
        setN(Math.round(from + (to - from) * ease(p)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!whenInView) {
      start();
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration, prefersReduced, whenInView]);

  return <span ref={ref} className="tabular-nums">{n}</span>;
}
