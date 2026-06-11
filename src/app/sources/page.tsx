import Link from 'next/link';
import { SOURCES, BRAND } from '@/lib/content';

export const metadata = {
  title: 'Sources · Charmkrung',
  description: 'Every claim on the Charmkrung site, paired with its press URL. Verifiable, citation by citation.',
};

/**
 * /sources — appendix listing every factual claim on the site with its
 * publication URL. Builds trust that the site isn't fabricated, it's
 * a research-backed asset that the owner can audit.
 */
export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-espresso text-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <Link
          href="/"
          className="inline-block font-sans text-[11px] uppercase tracking-[0.32em] text-cream/55 hover:text-brass mb-12 underline underline-offset-8 decoration-cream/30"
        >
          ← back to Charmkrung
        </Link>

        <p className="eyebrow text-brass">Appendix</p>
        <h1
          className="display leading-[1.02] mt-5 max-w-[18ch]"
          style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
        >
          What we verified.
        </h1>
        <p className="font-sans text-[15px] leading-[1.85] text-cream/75 mt-8 max-w-[60ch]">
          Every fact on this site — address, hours, dishes, prices, the
          award badge, the chef and sommelier credits — has a citation.
          This page lists them all with the source URL. Click any link
          to read the original.
        </p>
        <p className="font-sans text-[12.5px] uppercase tracking-[0.28em] text-brass mt-6">
          {SOURCES.length} citations · {BRAND.name} · {new Date().getFullYear()}
        </p>

        <ul className="mt-14 lg:mt-20 grid gap-6">
          {SOURCES.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-x-6 items-baseline border-b border-[var(--rule-soft)] pb-5"
            >
              <span className="font-sans text-[10.5px] uppercase tracking-[0.32em] text-cream/45 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="display text-[18px] leading-snug text-cream">{s.claim}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-3 mt-2 font-sans text-[12px] uppercase tracking-[0.22em] text-brass hover:text-brass-light transition-colors duration-300 flex-wrap"
                >
                  {s.publication}
                  <span className="font-sans text-[10px] tracking-[0.32em] text-cream/45 normal-case truncate">{s.url}</span>
                  <span className="text-cream/40">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-sans text-[12px] leading-relaxed text-cream/55 mt-16 max-w-[60ch]">
          If anything on the live site is inaccurate, tell us and we&apos;ll fix it within
          24 hours. The data is editable in a single file
          (<code className="text-brass">src/lib/content.ts</code>) — no codebase
          surgery required.
        </p>
      </div>
    </main>
  );
}
