/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serveur minimal dans .next/standalone, utilisé par le Dockerfile
  output: "standalone",
};

export default nextConfig;
