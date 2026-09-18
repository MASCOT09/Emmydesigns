import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid devtools bundler issues on Windows (can break CSS/JS delivery in dev)
  devIndicators: false,
};

export default nextConfig;
