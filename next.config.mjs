/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "v5.airtableusercontent.com",
      "raw.githubusercontent.com",
      "ipfs.io",
    ],
  },
  experimental: {
    optimizeCss: true, // Optimize Critical CSS
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
