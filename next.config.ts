import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import './src/libs/Env';

let baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

// Enable bundle analyzer only if ANALYZE=true
if (process.env.ANALYZE === 'true') {
  baseConfig = withBundleAnalyzer({ enabled: true })(baseConfig);
}

export default baseConfig;
