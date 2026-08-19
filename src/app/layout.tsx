import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import {
  siteUrl,
  siteName,
  siteTitle,
  siteDescription,
  jobTitle,
  email,
  profiles,
} from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@haardshah10',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

/*
  schema.org Person markup. This is what lets search engines connect the page to
  a named individual and their profiles elsewhere, rather than treating it as an
  anonymous document.
*/
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteName,
  jobTitle,
  email: `mailto:${email}`,
  url: siteUrl,
  sameAs: profiles,
  knowsAbout: [
    'Software Engineering',
    'Full Stack Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Django',
    'FastAPI',
    'Cloud Infrastructure',
  ],
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // Serialised from a local literal -- no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
