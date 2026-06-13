'use client';

/**
 * NeonMark — the orange "CHARMKRUNG" neon-sign motif as a typographic
 * ornament. The actual venue is recognised by the orange-and-red neon
 * CHARMKRUNG signage above the kitchen pass — leaning into that as a
 * repeatable brand mark distinguishes the site from a generic warm-Thai
 * editorial layout.
 *
 * Used as a section divider between Story and Menu, and at the top of
 * the Footer as a wordmark sign-off.
 *
 * @param size – baseline font size in px (default 56)
 * @param align – horizontal alignment of the mark
 */
export default function NeonMark({
  size = 56,
  align = 'center',
  withChinese = true,
  className = '',
}: {
  size?: number;
  align?: 'left' | 'center' | 'right';
  withChinese?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:
          align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
        gap: '6px',
      }}
    >
      {withChinese && (
        <span
          aria-hidden
          className="font-sans"
          style={{
            fontSize: Math.round(size * 0.22),
            letterSpacing: '0.18em',
            color: '#B08D4C',
            opacity: 0.92,
            textShadow: '0 0 6px rgba(176, 141, 76, 0.45)',
          }}
        >
          歡 城
        </span>
      )}

      <span
        className="display italic candle-flicker"
        style={{
          fontSize: size,
          lineHeight: 0.95,
          color: '#FFB05A',
          letterSpacing: '0.03em',
          // Layered text-shadows mimic neon halation — the closer halos
          // glow orange, the wider halos drop into oxblood to seat the
          // ornament in the brand palette.
          textShadow: [
            '0 0 1px rgba(255,176,90,0.95)',
            '0 0 6px rgba(255,140,60,0.85)',
            '0 0 18px rgba(255,120,40,0.65)',
            '0 0 38px rgba(220, 70, 30, 0.45)',
            '0 0 72px rgba(94, 27, 27, 0.55)',
          ].join(', '),
        }}
      >
        CHARMKRUNG
      </span>
    </div>
  );
}
