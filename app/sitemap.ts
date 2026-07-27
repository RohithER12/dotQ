import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/about', '/services', '/work', '/contact', '/privacy', '/terms'];

    return routes.map((route) => ({
        url: route === '' ? `${siteUrl}/` : `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
