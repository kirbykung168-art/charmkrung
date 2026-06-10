'use client';

import { useEffect } from 'react';

/**
 * CURSOR CANDLE — a soft warm-light halo that follows the cursor inside
 * its parent container. Set `data-candle` on the parent (a `relative`
 * element) and this component will scope its glow to that container.
 *
 * Disabled on coarse/touch pointers and on prefers-reduced-motion users.
 * Pure CSS variable + transform via JS; no React state churn per move.
 */
export default function CursorCandle() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isCoarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isCoarse) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const host = document.querySelector('[data-candle]') as HTMLElement | null;
    if (!host) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-candle';
    glow.style.cssText = `
      position: absolute;
      top: 0; left: 0;
      width: 520px; height: 520px;
      transform: translate3d(-50%, -50%, 0);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.6s ease;
      background:
        radial-gradient(closest-side,
          rgba(176, 141, 76, 0.30) 0%,
          rgba(176, 141, 76, 0.10) 35%,
          rgba(176, 141, 76, 0) 70%);
      mix-blend-mode: screen;
      z-index: 5;
    `;
    host.appendChild(glow);

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      glow.style.opacity = '1';
    };
    const onLeave = () => {
      glow.style.opacity = '0';
    };

    host.addEventListener('mousemove', onMove);
    host.addEventListener('mouseleave', onLeave);

    // gentle candle flicker — subtle scale jitter ~12hz
    let raf = 0;
    const start = performance.now();
    const flicker = (t: number) => {
      const elapsed = (t - start) / 1000;
      const s = 1 + Math.sin(elapsed * 6.0) * 0.04 + Math.sin(elapsed * 11.0) * 0.025;
      glow.style.setProperty('--flicker', String(s));
      // baseline transform is set in onMove; tack on flicker via filter
      glow.style.filter = `blur(${0.5 + Math.sin(elapsed * 7) * 0.3}px)`;
      raf = requestAnimationFrame(flicker);
    };
    raf = requestAnimationFrame(flicker);

    return () => {
      host.removeEventListener('mousemove', onMove);
      host.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      glow.remove();
    };
  }, []);

  return null;
}
