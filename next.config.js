/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.edgestore.dev'],
  },
  // Add these settings to fix static file issues
  reactStrictMode: true,
  swcMinify: true,
  // Disable output file tracing for client components
  outputFileTracing: false
}

module.exports = nextConfig
