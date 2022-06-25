/**
 * @type {import('next').NextConfig}
 */

const nextTranslate = require('next-translate');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const configuration = {
  swcMinify: false,
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'tr'],
    defaultLocale: 'en-US',
  },
};

module.exports = withBundleAnalyzer(nextTranslate(configuration));
