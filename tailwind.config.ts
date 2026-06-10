import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1A1614',
        cream: '#F2E9D8',
        oxblood: '#5E1B1B',
        brass: '#B08D4C',
        stone: '#9A8F7D',
        // tinted variants for chrome / hairlines
        'espresso-soft': '#241F1B',
        'cream-soft': '#E9DFCB',
        'brass-deep': '#8C6F38',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'Hanken Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        thai: ['var(--font-noto-thai)', 'Noto Sans Thai', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        wider: '0.18em',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 1.0s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
        'draw-rule': 'drawRule 1.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawRule: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
