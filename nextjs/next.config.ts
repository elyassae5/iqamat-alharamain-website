import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The source photos are large PNGs, so let next/image serve resized AVIF/WebP.
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
};

export default nextConfig;
