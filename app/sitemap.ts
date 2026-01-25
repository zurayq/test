import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://your-domain.com'; // Update with your actual domain
    const locales = ['en', 'ar', 'tr', 'it'];
    const routes = ['', '/about', '/projects', '/contact'];

    const sitemap: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: route === '' ? 1.0 : 0.8,
            });
        });
    });

    return sitemap;
}
