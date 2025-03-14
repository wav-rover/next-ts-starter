const SEO = {
  titleTemplate: '%s | Next.js Starter',
  defaultTitle: 'Next.js Starter',
  description: 'A Next.js starter with Shadcn UI, Framer Motion, Next SEO, Tailwind CSS, Stripe, and Better Auth',
  canonical: 'https://your-site-url.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://your-site-url.com',
    siteName: 'Next.js Starter',
    images: [
      {
        url: 'https://your-site-url.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Starter',
      },
    ],
  },
  twitter: {
    handle: '@yourusername',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
};

export default SEO;
