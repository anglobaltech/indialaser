/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path(.*).html",
        destination: "/:path",
        permanent: true,
      },

      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },

      {
        source: "/LaserSoldering",
        destination: "/laser-machines/laser-soldering-machine",
        permanent: true,
      },

      {
        source: "/TableTopLaser",
        destination: "/laser-machines/laser-marking-machine/fiber-laser",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
