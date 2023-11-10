/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "",
  output: "export",
  // // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
