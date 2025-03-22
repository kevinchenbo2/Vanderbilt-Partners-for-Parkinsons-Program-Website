/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Ensure correct base path for GitHub Pages
  basePath: process.env.GITHUB_PAGES ? '/Vanderbilt-Partners-for-Parkinsons-Program-Website' : '',
  // Add assetPrefix for CSS/JS loading
  assetPrefix: process.env.GITHUB_PAGES ? '/Vanderbilt-Partners-for-Parkinsons-Program-Website' : '',
};

module.exports = nextConfig; 