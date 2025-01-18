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
};

export default nextConfig;
