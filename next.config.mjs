/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rice.storage.iran.liara.space",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
