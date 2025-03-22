/**
 * Helper utility to get the correct path for assets like images
 * that need to work in both development and production/GitHub Pages
 */
export function getAssetPath(path) {
  const basePath = process.env.GITHUB_PAGES ? '/Vanderbilt-Partners-for-Parkinsons-Program-Website' : '';
  
  // Make sure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
} 