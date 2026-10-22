import type { Metadata } from 'next';

export const siteUrl = 'https://www.dotq.in';

interface PageMetadata {
    title: string;
    description: string;
    path: string;
    image?: string;
    noindex?: boolean;
}

export function generateMetadata({ title, description, path, image, noindex }: PageMetadata): Metadata {
    const siteName = 'DotQ';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = cleanPath === '/' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;
    const rawImage = image || '/icon-512x512.png';
    const ogImage = encodeURI(rawImage);

    const robotsDirective = noindex
        ? {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
                index: false,
                follow: false,
                noimageindex: true,
            },
        }
        : {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large' as const,
                'max-snippet': -1,
            },
        };

    return {
        title,
        description,
        metadataBase: new URL(siteUrl),
        robots: robotsDirective,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName,
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
                { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
                { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
                { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
            ],
            shortcut: '/favicon.ico',
            apple: {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        },
        alternates: {
            canonical: canonicalUrl,
        },
        verification: {
            google: 'googlee97bf558361105d9',
        },
    };
}

export const DEFAULT_METADATA: Metadata = generateMetadata({
    title: 'DotQ | Custom Software Development Company',
    description: 'DotQ builds custom software, ecommerce platforms, web and mobile apps, Go backends, and business automation solutions for growing businesses.',
    path: '/',
});
