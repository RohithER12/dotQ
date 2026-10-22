import { siteUrl } from './metadata';

export interface BreadcrumbItem {
    name: string;
    path: string;
}

export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'DotQ',
        legalName: 'Dotq IT & Automation',
        url: siteUrl,
        logo: `${siteUrl}/icon-512x512.png`,
        image: `${siteUrl}/icon-512x512.png`,
        description:
            'DotQ builds custom software, ecommerce platforms, web and mobile apps, Go backends, and business automation solutions for growing businesses.',
        telephone: '+91 9207209856',
        email: 'business@dotq.in',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kochi',
            addressRegion: 'Kerala',
            addressCountry: 'IN',
        },
        sameAs: [
            'https://www.linkedin.com/company/dotq-in/',
            'https://www.instagram.com/dotq__/',
            'https://twitter.com/dotq',
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+91 9207209856',
                email: 'business@dotq.in',
                contactType: 'sales',
                areaServed: 'Worldwide',
                availableLanguage: ['English', 'Malayalam'],
            },
        ],
    };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => {
            const cleanPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
            const itemUrl = cleanPath === '/' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;
            return {
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: itemUrl,
            };
        }),
    };
}

export function getServiceSchema(service: {
    id: string;
    title: string;
    heroDescription: string;
    deliverables?: string[];
}) {
    const serviceUrl = `${siteUrl}/services/${service.id}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.heroDescription,
        url: serviceUrl,
        provider: {
            '@id': `${siteUrl}/#organization`,
        },
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
        ...(service.deliverables && service.deliverables.length > 0
            ? {
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: `${service.title} Deliverables`,
                    itemListElement: service.deliverables.map((deliverable) => ({
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: deliverable,
                        },
                    })),
                },
            }
            : {}),
    };
}

export function getSoftwareApplicationSchema(product: {
    id: string;
    name: string;
    headline: string;
    summary: string;
    coreCapabilities?: { title: string }[];
}) {
    const productUrl = `${siteUrl}/product/${product.id}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${productUrl}#software`,
        name: product.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: `${product.name} is a ${product.headline.toLowerCase()} engineered by DotQ. ${product.summary}`,
        url: productUrl,
        publisher: {
            '@id': `${siteUrl}/#organization`,
        },
        ...(product.coreCapabilities && product.coreCapabilities.length > 0
            ? {
                featureList: product.coreCapabilities.map((c) => c.title).join(', '),
            }
            : {}),
    };
}
