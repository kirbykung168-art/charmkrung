'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface Props {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
  lang?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * LetterReveal — each character fades up through a soft blur. Used for the
 * hero title and other set-piece headlines. Words are kept intact via
 * `whitespace-nowrap` per word so wrapping still works at any viewport.
 */
export default function LetterReveal({
  text,
  delay = 0.2,
  stagger = 0.035,
  className = '',
  style,
  lang,
  as = 'h1',
}: Props) {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');
  let counter = 0;
  const Tag = as as 'h1' | 'h2' | 'h3' | 'p';

  return (
    <Tag aria-label={text} className={className} style={style} lang={lang}>
      <span aria-hidden>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap" style={{ marginRight: '0.32em' }}>
            {Array.from(word).map((ch, ci) => {
              const d = delay + counter++ * stagger;
              return (
                <motion.span
                  key={ci}
                  initial={prefersReduced ? false : { opacity: 0, y: '0.4em', filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: '0em', filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: d, ease: [0.22, 0.61, 0.36, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    </Tag>
  );
}
