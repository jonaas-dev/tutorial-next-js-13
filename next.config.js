/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.dicebear.com']
  }
}

module.exports = nextConfig
