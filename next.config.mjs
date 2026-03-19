/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  basePath: "/atlas-construction-group",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
