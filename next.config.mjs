/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ID: process.env.APP_ID,
    PAGE_ID: process.env.PAGE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
}

export default nextConfig
