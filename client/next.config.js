/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'sjc.microlink.io',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
  },
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure trailing slashes for static export
  trailingSlash: true,
}

module.exports = nextConfig
