import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow existing domains plus Sanity CDN images
    domains: ["picsum.photos", "cdn.sanity.io"],
    // Remote patterns provide finer control (recommended going forward)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // Sanity image URLs follow /images/<projectId>/<dataset>/<assetId>-<dims>.<ext>
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
