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
  async rewrites() {
    return [
      {
        source: '/propiedades/:id/:statusId/:companyId',
        destination:
          '/propiedades/[id]?statusId=:statusId&companyId=:companyId',
      },
    ];
  },
};

module.exports = nextConfig;
