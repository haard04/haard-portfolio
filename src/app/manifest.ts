import type { MetadataRoute } from 'next';
import { siteName, siteTitle, siteDescription } from '@/lib/site';

const manifest = (): MetadataRoute.Manifest => ({
  name: siteTitle,
  short_name: siteName,
  description: siteDescription,
  start_url: '/',
  display: 'standalone',
  background_color: '#0a0a0a',
  theme_color: '#6366f1',
  icons: [
    {
      src: '/icon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
  ],
});

export default manifest;
