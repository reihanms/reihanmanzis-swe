import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/icons/:path*",
        destination: "/assets/icons/:path*",
      },
    ];
  },
};

export default nextConfig;

