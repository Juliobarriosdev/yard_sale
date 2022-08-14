// const { redirect } = require('next/dist/server/api-utils')
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'media.techeblog.com', 'thumbs.dreamstime.com', 'images.unsplash.com'],
  },
  /*   env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/',
        permanent: true,
      },
    ]
  }, */
})

module.exports = nextConfig
