export const eslint = {
    // target: 'serverless',
    // trailingSlash: false,
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
};

const path = require('path');

module.exports = {
  webpack(config) {
    // Add alias for '@'
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
