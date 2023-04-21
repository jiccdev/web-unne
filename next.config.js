/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: [
      'reqres.in',
      'wallpapercave.com',
      'dummyimage.com',
      'cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
