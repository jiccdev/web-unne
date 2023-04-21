/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'reqres.in',
      'wallpapercave.com',
      'dummyimage.com',
      'cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
