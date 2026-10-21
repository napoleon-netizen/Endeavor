import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ar", destination: "/", permanent: false },
      { source: "/ar/:path*", destination: "/:path*", permanent: false },
      {
        source: "/services/carpet-shampooing",
        destination: "/services/carpet-cleaning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
