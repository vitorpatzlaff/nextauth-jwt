/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  const env = {
    mongodb_username: 'vitorpatzlaff',
    mongodb_password: 'nextmongo',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-site' 
  }
  
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env.mongodb_database = 'my-site-dev'
  }

  return {
    reactStrictMode: false,
    swcMinify: true,
    env: env
  }
}

module.exports = nextConfig
