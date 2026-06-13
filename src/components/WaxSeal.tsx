'use client';

/**
 * WaxSeal — circular brass "wax seal" ornament used as the Footer
 * terminator. Fits the family-recipe-ledger brand voice: the way a
 * recipe card might be sealed on the back of a folio. Used once on the
 * footer so it reads as a distinctive sign-off, not decoration.
 *
 * The SVG is the entire seal; the centre runs the EST. year + venue +
 * neighborhood, with curved upper / lower text around the rim. Brass
 * fill, oxblood ink shadow, very tight letter-spacing.
 */
export default function WaxSeal({ size = 132 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Charmkrung wax seal — Est. 2023, Charoen Krung, Bangkok"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Subtle brass gradient — gives the seal volume */}
        <radialGradient id="ws-fill" cx="50%" cy="40%" r="65%">
          <stop offset="0%"  stopColor="#D8B57A" />
          <stop offset="55%" stopColor="#B08D4C" />
          <stop offset="100%" stopColor="#7E6132" />
        </radialGradient>
        {/* Curved paths for top + bottom text */}
        <path id="ws-top"
              d="M 30 100 a 70 70 0 0 1 140 0" />
        <path id="ws-bot"
              d="M 32 102 a 68 68 0 0 0 136 0" />
      </defs>

      {/* Outer ring shadow */}
      <circle cx="100" cy="100" r="92" fill="#1A1614" opacity="0.45" />
      {/* Seal body */}
      <circle cx="100" cy="100" r="86" fill="url(#ws-fill)" />
      {/* Inner ring */}
      <circle cx="100" cy="100" r="78" fill="none" stroke="#1A1614" strokeOpacity="0.45" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="#1A1614" strokeOpacity="0.45" strokeWidth="0.5" />

      {/* Curved top text */}
      <text
        fill="#1A1614"
        fillOpacity="0.85"
        fontFamily="var(--font-hanken), sans-serif"
        fontSize="8"
        letterSpacing="0.42em"
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href="#ws-top" startOffset="50%" textAnchor="middle">
          CHARMKRUNG · CHAROEN KRUNG
        </textPath>
      </text>

      {/* Curved bottom text */}
      <text
        fill="#1A1614"
        fillOpacity="0.85"
        fontFamily="var(--font-hanken), sans-serif"
        fontSize="7.5"
        letterSpacing="0.36em"
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href="#ws-bot" startOffset="50%" textAnchor="middle">
          TALAT NOI · BANGKOK
        </textPath>
      </text>

      {/* Centre mark — EST 2023 + Chinese chars */}
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontStyle="italic"
        fontSize="12"
        fill="#1A1614"
        fillOpacity="0.85"
      >
        Est.
      </text>
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontSize="28"
        fill="#1A1614"
        fillOpacity="0.92"
        letterSpacing="-1"
      >
        2023
      </text>
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fontFamily="var(--font-hanken), sans-serif"
        fontSize="9"
        fill="#1A1614"
        fillOpacity="0.65"
        letterSpacing="0.34em"
        style={{ textTransform: 'uppercase' }}
      >
        歡 城
      </text>

      {/* Tiny ornaments at compass points */}
      <g fill="#1A1614" fillOpacity="0.65">
        <circle cx="100" cy="22" r="1.6" />
        <circle cx="100" cy="178" r="1.6" />
        <circle cx="22"  cy="100" r="1.6" />
        <circle cx="178" cy="100" r="1.6" />
      </g>
    </svg>
  );
}
