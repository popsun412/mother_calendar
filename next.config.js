/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // backendUrl: 'https://mothers-calendayar-server-p2z7ecnysq-du.a.run.app',
    // backendUrl: 'http://localhost:8080',
    backendUrl: 'https://mothers-calendar-api-p2z7ecnysq-du.a.run.app',
  },
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    reactStrictMode: false,
  },
  theme: {
    extend: {
      fontFamily: "SuncheonR",
    },
  },
}

module.exports = nextConfig
