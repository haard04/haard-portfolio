import type { MetadataRoute } from 'next';
import { siteName, siteTitle, siteDescription } from '@/lib/site';

const manifest = (): MetadataRoute.Manifest => ({
  name: siteTitle,
  short_name: siteName,
  description: siteDescription,
  start_url: '/',
  display: 'standalone',
  background_color: '#f4f1ea',
  theme_color: '#17160f',
  icons: [
    {
      src: '/icon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
  ],
});

export default manifest;
