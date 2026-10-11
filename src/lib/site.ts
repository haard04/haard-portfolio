/**
 * Single source of truth for site-level constants.
 *
 * The URL is derived rather than hardcoded: Vercel injects
 * VERCEL_PROJECT_PRODUCTION_URL at build time, so the canonical/OG/sitemap
 * URLs follow the deployment. Set NEXT_PUBLIC_SITE_URL to override — that's
 * the hook to use if a custom domain is attached later.
 */
const productionUrl = 'https://haard-portfolio-haard-shahs-projects.vercel.app';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NODE_ENV === 'production'
      ? // Never emit a localhost canonical/sitemap URL from a production build,
        // even if Vercel's system environment variables are unavailable.
        productionUrl
      : 'http://localhost:3000';

export const siteName = 'Haard Shah';
export const siteTitle = 'Haard Shah — Software Engineer';
export const siteDescription =
  'Portfolio of Haard Shah, a software engineer building full-stack products across NestJS, Next.js, Node.js, React, FastAPI, Django and cloud infrastructure.';

export const jobTitle = 'Software Engineer';
export const email = 'haardshah04@gmail.com';

/** Used for schema.org `sameAs`, which is how search engines link identities. */
export const profiles = [
  'https://www.linkedin.com/in/haard-/',
  'https://github.com/haard04',
  'https://twitter.com/haardshah10',
  'https://leetcode.com/haardshah04',
  'https://instagram.com/haardshah41',
  'https://www.facebook.com/haard.shah.58',
];
