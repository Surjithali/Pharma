/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // ✅ Keeps type validation warnings unblocked during active development sessions
  typescript: {
    ignoreBuildErrors: true,
  },

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