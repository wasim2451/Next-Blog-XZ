import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "qohextfemozbghcnnylp.supabase.co",
        pathname: "/storage/**", // allow images from Supabase "storage"
      },
       {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;