import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const TITLE = 'Haard Shah — Software Engineer';
const DESCRIPTION =
  'Portfolio of Haard Shah, a software engineer building full-stack products across React, Next.js, Django, FastAPI and cloud infrastructure.';

// Vercel injects the production URL at build time, so the canonical/OG URLs
// follow the deployment instead of being hardcoded to a domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: siteUrl,
    siteName: 'Haard Shah',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
