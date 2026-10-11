import { ImageResponse } from 'next/og';
import { siteTitle, jobTitle, siteName } from '@/lib/site';

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/*
  Rendered once at build time. Previously the site had no OG image at all, so
  links shared to LinkedIn/Twitter/Slack unfurled with no preview card.
*/
const Image = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f4f1ea',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 96,
            height: 96,
            marginBottom: 48,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            background: '#17160f',
            color: '#f4f1ea',
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          HS
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 700,
            color: '#17160f',
            letterSpacing: '-0.03em',
          }}
        >
          {siteName}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 20,
            fontSize: 36,
            color: '#66625a',
          }}
        >
          {jobTitle}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 56,
            width: 160,
            height: 6,
            borderRadius: 999,
            background: '#b93a15',
          }}
        />
      </div>
    ),
    { ...size }
  );
};

export default Image;
