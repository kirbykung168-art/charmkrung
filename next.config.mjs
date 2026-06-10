/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Remote photo sources used until owner provides their own.
    remotePatterns: [
      { protocol: 'https', hostname: 'creatorslab.co' },
      { protocol: 'https', hostname: 'starwinelist.com' },
      { protocol: 'https', hostname: 'production-data.worldofmouth.app' },
    ],
  },
};

export default nextConfig;
