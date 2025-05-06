export const dynamic = 'force-static'

export async function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: https://adwaitg.com/sitemap.xml`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 