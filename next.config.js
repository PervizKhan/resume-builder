/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  // Disable CSS optimization that might look for Tailwind
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;