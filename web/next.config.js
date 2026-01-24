/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
