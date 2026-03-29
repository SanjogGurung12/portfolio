/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  images: { unoptimized: true } // required for next/image in static export
};

module.exports = nextConfig;