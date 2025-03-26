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
    optimizeCss: true, // Critical CSS ko Automatically Optimize karega
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
