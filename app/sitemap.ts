import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';
import { SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes = ['', '/about', '/services', '/work', '/contact', '/privacy', '/terms'];
    const serviceRoutes = SERVICES.map((service) => `/services/${service.id}`);
    const routes = [...baseRoutes, ...serviceRoutes];

    return routes.map((route) => ({
        url: route === '' ? `${siteUrl}/` : `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/services/') ? 0.85 : 0.8,
    }));
}
