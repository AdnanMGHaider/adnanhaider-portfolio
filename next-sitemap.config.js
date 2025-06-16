/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-domain.com', // Replace after deploying
  generateRobotsTxt: true,
  sitemapSize: 7000, // default
};
