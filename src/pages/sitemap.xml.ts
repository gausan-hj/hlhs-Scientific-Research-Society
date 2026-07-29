export async function GET() {
  const url = 'https://research-society.vercel.app';
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'weekly' },
    { path: '/activities', priority: '0.8', changefreq: 'weekly' },
    { path: '/announcements', priority: '0.8', changefreq: 'weekly' },
    { path: '/resources', priority: '0.8', changefreq: 'weekly' },
    { path: '/join', priority: '0.8', changefreq: 'weekly' },
  ];

  const urls = staticPages.map((p) => ({
    loc: `${url}${p.path}`,
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
