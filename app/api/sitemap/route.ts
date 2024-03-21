
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextRequest, NextResponse } from 'next/server';

interface SitemapLink {
  url: string;
  changefreq?: string;
  priority?: number;
}

export async function GET(request: NextRequest) {
  // An array with your pages
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/dashboard/models', changefreq: 'daily', priority: 0.4 },
    { url: '/dashboard/docs', changefreq: 'monthly', priority: 0.7 },
    // Add more pages as needed
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${request.headers.get('host')}` });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  return new NextResponse(xmlString, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}