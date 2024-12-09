/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SSR for Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
};

module.exports = nextConfig;