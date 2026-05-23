/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'www.metrolibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'www.laportelibrary.org',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.bookmylibrary.in',
      },
      {
        protocol: 'https',
        hostname: 'd4804za1f1gw.cloudfront.source',
      },
      {
        protocol: 'https',
        hostname: 'd4804za1f1gw.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'library.princeton.edu',
      },
    ],
  },
};

export default nextConfig;
