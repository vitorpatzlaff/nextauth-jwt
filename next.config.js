/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    mongodb_username: 'vitorpatzlaff',
    mongodb_password: 'nextmongo',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-site-dev'
  }
}

module.exports = nextConfig