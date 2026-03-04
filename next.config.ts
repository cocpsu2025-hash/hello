import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '/**/**',
      },
      new URL('https://avatars.githubusercontent.com/u/**?v=4'),
    ],
  },
};

export default nextConfig;