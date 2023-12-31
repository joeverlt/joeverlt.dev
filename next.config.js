const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
