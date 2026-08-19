import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

/*
  The portfolio is a single page; its sections are hash anchors, which are not
  separate URLs and must not be listed as such.
*/
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
];

export default sitemap;
