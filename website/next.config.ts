import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["glide-tabs"],
  turbopack: {
    root: path.resolve(__dirname, ".."),
    resolveAlias: {
      "glide-tabs": path.resolve(__dirname, "../src"),
      "glide-tabs/styles.css": path.resolve(__dirname, "../src/styles.css"),
    },
  },
};

export default nextConfig;
