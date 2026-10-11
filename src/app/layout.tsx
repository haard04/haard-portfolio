import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
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

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument',
});
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-jetbrains' });

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
  themeColor: '#f4f1ea',
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
    'NestJS',
    'Next.js',
    'Node.js',
    'React',
    'FastAPI',
    'Django',
    'TypeScript',
    'Python',
    'Cloud Infrastructure',
  ],
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
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
