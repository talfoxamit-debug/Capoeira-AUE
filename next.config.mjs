/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local images live in /public/media. If you later host photos/videos on an
    // external CDN, add the hostnames here so next/image can optimize them.
    remotePatterns: [],
  },
};

export default nextConfig;
