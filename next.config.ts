import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m0fcr61pbt.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
