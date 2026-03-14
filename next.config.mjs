/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/atlas-construction-group",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'export',
};

export default nextConfig;