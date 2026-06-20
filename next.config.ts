import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 🔥 Unblocks Next.js HMR resources across your local Wi-Fi addresses safely
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
        ],
      },
    ];
  },
};

export default nextConfig;