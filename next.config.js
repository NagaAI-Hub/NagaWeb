const { next } = require('next');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */


module.exports = (phase, {defaultConfig}) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      devIndicators: {
        buildActivityPosition: 'top-right',
        experimental: {
          webVitalsAttribution: ['CLS', 'LCP']
        },
      },
  }
  

}
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  swcMinify: true,
  compress: true,
  experimental: {
    mdxRs: true,
  }
};
return nextConfig
};