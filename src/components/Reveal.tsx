'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Delay in seconds before reveal starts. */
  delay?: number;
  /** Y offset to animate from. Default 24px. */
  y?: number;
  /** Duration. Default 0.9s. */
  duration?: number;
  className?: string;
  /** Once or every time it enters. Default once. */
  once?: boolean;
}

/**
 * Reveal — fade-up with optional blur, on intersection.
 * Reduced-motion users see the content immediately, no transform.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className = '',
  once = true,
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
