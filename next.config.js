/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // backendUrl: 'https://mothers-calendar-server-p2z7ecnysq-du.a.run.app' || 'http://localhost:8080',
    backendUrl: "http://localhost:8080",
  },
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    reactStrictMode: false,
  },
}

module.exports = nextConfig
