import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';
import { SERVICES, CLIENTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseRoutes = ['', '/about', '/services', '/product', '/work', '/contact', '/privacy', '/terms'];
    const serviceRoutes = SERVICES.map((service) => `/services/${service.id}`);
    const projectRoutes = CLIENTS.map((client) => `/work/${client.id}`);
    const productRoutes = ['/product/goforge', '/product/tapq'];
    const routes = [...baseRoutes, ...serviceRoutes, ...projectRoutes, ...productRoutes];

    return routes.map((route) => ({
        url: route === '' ? `${siteUrl}/` : `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/product') || route.startsWith('/work/') || route.startsWith('/services/') ? 0.85 : 0.8,
    }));
}
