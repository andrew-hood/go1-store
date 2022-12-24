/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
