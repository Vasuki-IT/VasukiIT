import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/VasukiIT",
  assetPrefix: "/VasukiIT/", // enables svg and other static assets to be served correctly
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
