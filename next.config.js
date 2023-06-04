/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });

    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    config.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
    });

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: 'source-map-loader',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });

    return config;
  },
  images: {
    domains: [
      'm-calendar.yuanx.me',
      'framerusercontent.com',
      'worth.yuanx.me',
      'ai-lawyer.yuanx.me',
      'github.com',
      'opengraph.githubassets.com',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
