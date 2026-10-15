import type { Metadata } from 'next';

export const siteUrl = 'https://www.dotq.in';

interface PageMetadata {
    title: string;
    description: string;
    path: string;
}

export function generateMetadata({ title, description, path }: PageMetadata): Metadata {
    const siteName = 'DotQ';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = cleanPath === '/' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;

    return {
        title,
        description,
        metadataBase: new URL(siteUrl),
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName,
            type: 'website',
            images: [
                {
                    url: '/icon-512x512.png',
                    width: 512,
                    height: 512,
                    alt: siteName,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/icon-512x512.png'],
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
    title: 'DotQ | IT Automation & Custom Software',
    description: 'Premier IT company in India offering freelance services, web development, automation, digital marketing, and custom software for global enterprises.',
    path: '/',
});
