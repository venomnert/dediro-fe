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
  webpack: (config) => {
    /* On `node-fetch` v2 the `encoding` package was optionally required.
    See: https://github.com/node-fetch/node-fetch/issues/412.
    Since `encoding` is not part of the deps by default, when using with webpack,
    it will raise a warning message which can be safely ignored. */
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];
    return config;
  },
};

export default nextConfig;
