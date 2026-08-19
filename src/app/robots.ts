import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
      // Next.js build artifacts; no value in crawling them.
      disallow: '/_next/',
    },
  ],
  sitemap: `${siteUrl}/sitemap.xml`,
  host: siteUrl,
});

export default robots;
