/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  },
  rewrites: async () => {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://127.0.0.1:8000/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
