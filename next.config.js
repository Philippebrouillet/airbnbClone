/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "www.flaticon.com"],
  },
  env: {
    NEXT_PUBLIC_mapbox_key:
      "pk.eyJ1IjoicGhpbGlwcGViciIsImEiOiJjbGY5dzhnYWIya2pvM3hyMGhvcm5mdTlmIn0.iR1dTb6JK1T2XxCgcgP6dw",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
