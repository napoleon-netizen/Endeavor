import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/carpet-shampooing",
        destination: "/services/carpet-cleaning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
