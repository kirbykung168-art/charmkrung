/**
 * /api/koktail-trio — server-side proxy for the Koktail Magazine
 * "Future List 2022" Charm Gang trio portrait, used as the Chef Plate
 * on the Story section.
 *
 * Why a proxy: the upstream PNG (1.9 MB) lives on koktailmagazine.com.
 * Hosting it directly on Charmkrung's static /public would require
 * committing the binary; serving it via a Vercel edge route lets the
 * page point at a same-origin URL and avoids shipping a copy of the
 * file in the repo. The route caches aggressively at the CDN so the
 * upstream is hit at most once per build cycle.
 *
 * Permission status: pending — credit reads "Photo · Koktail Magazine,
 * Future List 2022" and should be confirmed with the publisher before
 * a paid client engagement.
 */

const UPSTREAM =
  'https://www.koktailmagazine.com/wp-content/uploads/2024/10/resized/c859bf773fea73baf4f9987737b5c2aa-1290x916.png';

export const runtime = 'edge';
export const revalidate = 86400; // 24h CDN cache

export async function GET() {
  try {
    const upstream = await fetch(UPSTREAM, {
      // keep upstream response cached on Vercel's CDN for a day
      next: { revalidate: 86400 },
      headers: {
        // identify ourselves so Koktail can see legitimate referrer traffic
        'User-Agent': 'Charmkrung-Bangkok-Site/1.0 (+https://charmkrung.vercel.app)',
      },
    });

    if (!upstream.ok) {
      return new Response(`upstream ${upstream.status}`, { status: 502 });
    }

    const body = await upstream.arrayBuffer();
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': upstream.headers.get('content-type') ?? 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable',
        'Content-Length': String(body.byteLength),
        'X-Photo-Credit': 'Koktail Magazine, Future List 2022',
      },
    });
  } catch (err) {
    return new Response(`proxy error: ${(err as Error).message}`, { status: 500 });
  }
}
