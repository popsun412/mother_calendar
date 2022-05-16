/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    backendUrl: process.env.API_URL || 'http://localhost:8080',
  },
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    reactStrictMode: false,
  },
}

module.exports = nextConfig
