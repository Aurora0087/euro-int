import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect dev-mode build cache to local disk to avoid atomic-write
  // failures on network/external drives (ENOENT on _buildManifest.js.tmp.*).
  // Production builds keep .next inside the project directory for deployment.
  distDir: process.env.NODE_ENV === "production" ? ".next" : "/tmp/next-riva-dev",
};

export default nextConfig;
