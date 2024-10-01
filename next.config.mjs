export default {
  // ...other configuration
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};