/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    prependData: `@import "~@styles/variables.scss";`,
  },
};

export default nextConfig;
