import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  images:{
    domains:['ap-south-1.graphassets.com','img.clerk.com']
  }
};

export default nextConfig;
