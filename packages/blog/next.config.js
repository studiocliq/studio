const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@studio/monte']); // pass the modules you would like to see transpiled
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([
  withMDX({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  }),
  withTM,
]);
