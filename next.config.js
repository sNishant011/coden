const withPWA = require('next-pwa')
module.exports = withPWA({
  images: {
    domains: ['storage.googleapis.com'],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
