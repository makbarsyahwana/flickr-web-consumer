/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['live.staticflickr.com'],
  }
}

module.exports = nextConfig
