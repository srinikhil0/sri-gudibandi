import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sri' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sri' : '',
  trailingSlash: true,
};

export default nextConfig;
