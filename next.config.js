/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/GhPages",
  assetPrefix: "/GhPages",
};

module.exports = nextConfig;
