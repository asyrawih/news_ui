/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'backend.asyrawih.id']
  },
  rewrites: async () => {
    return [
      {
        source: '/uploads/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + `/uploads/:path*`
      }
    ]
  }
}

module.exports = nextConfig
