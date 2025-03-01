/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.ctfassets.net",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "source.unsplash.com",
          },
          {
            protocol:"https",
            hostname:"picsum.photos"
          },
          {
            protocol:"https",
            hostname:"via.placeholder.com"
          },
        ],
      },
};

export default nextConfig;
