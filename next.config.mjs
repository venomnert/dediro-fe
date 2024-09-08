/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=60, s-maxage=60, stale-while-revalidate=3600',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
