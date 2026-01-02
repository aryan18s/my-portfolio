/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'utfs.io',
        },
        {
            protocol: 'https',
            hostname: 'jq8q9rbcfr.ufs.sh',
        },
    ]
  }
};

export default nextConfig;
