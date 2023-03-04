/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
