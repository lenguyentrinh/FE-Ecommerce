import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enable sourcemaps for client-side in development
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
};

export default nextConfig;
