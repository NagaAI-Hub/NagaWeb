const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withMDX = require('@next/mdx')();
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  swcMinify: true,
  compress: true,
  experimental: {
    mdxRs: true,
  }
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withMDX({
      ...nextConfig,
      devIndicators: {
        buildActivityPosition: 'top-right',
      },
      experimental: {
        webVitalsAttribution: ['CLS', 'LCP']
      },
    });
  }

  return withMDX(nextConfig);
};