import type { NextConfig } from "next";
import path from "path";

const workspaceRoot = path.resolve(process.cwd(), "..");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  outputFileTracingRoot: workspaceRoot,
  turbopack: {
    root: workspaceRoot,
  },
};

export default nextConfig;
