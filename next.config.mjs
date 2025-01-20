/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all paths
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://soulsadhnabe.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
