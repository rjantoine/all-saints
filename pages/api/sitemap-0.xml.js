import client from "client"

export default async function handler(req, res) {
    const pages = []
    // index
    const index = (await client.fetch(`*[_type == 'page' && slug.current == "index" && !(_id in path("drafts.**"))]{_updatedAt}`))[0]
    pages.push(`<url><loc>https://allsaintsdaincity.ca</loc><lastmod>${index._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    // 404
    pages.push(`<url><loc>https://allsaintsdaincity.ca/404</loc><lastmod>${index._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    // Pages
    const p = await client.fetch(`*[_type == "page" && !(_id in path("drafts.**"))]{slug, _updatedAt}`)
    p.forEach(post => {
        if(post.slug.current !== 'index') pages.push(`<url><loc>https://allsaintsdaincity.ca/${post.slug.current}</loc><lastmod>${post._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    })
    // News
    pages.push(`<url><loc>https://allsaintsdaincity.ca/news</loc><lastmod>${index._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    const news = await client.fetch(`*[_type == "news" && !(_id in path("drafts.**"))]{slug, _updatedAt}`)
    news.forEach(post => {
        pages.push(`<url><loc>https://allsaintsdaincity.ca/news/${post.slug.current}</loc><lastmod>${post._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    })
    // Events
    pages.push(`<url><loc>https://allsaintsdaincity.ca/events</loc><lastmod>${index._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    const events = await client.fetch(`*[_type == "event" && !(_id in path("drafts.**"))]{slug, _updatedAt}`)
    events.forEach(post => {
        pages.push(`<url><loc>https://allsaintsdaincity.ca/events/${post.slug.current}</loc><lastmod>${post._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    })
    // Ministries
    pages.push(`<url><loc>https://allsaintsdaincity.ca/events</loc><lastmod>${index._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    const ministries = await client.fetch(`*[_type == "ministry" && !(_id in path("drafts.**"))]{slug, _updatedAt}`)
    ministries.forEach(post => {
        pages.push(`<url><loc>https://allsaintsdaincity.ca/ministries/${post.slug.current}</loc><lastmod>${post._updatedAt}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`)
    })


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${pages.join('')}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return res
};