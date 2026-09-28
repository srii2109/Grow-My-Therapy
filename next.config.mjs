/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/walkthrough',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
