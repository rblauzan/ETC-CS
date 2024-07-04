/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en-US', 'fr', 'nl-NL'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'es-ES',
  // },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
    experimental: {
      serverActions:{
        allowedOrigins: ['localhost'],
      },
    },
  }

module.exports = nextConfig;
