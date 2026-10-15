import type { Metadata } from 'next';

export const siteUrl = 'https://www.dotq.in';

interface PageMetadata {
    title: string;
    description: string;
    path: string;
    image?: string;
}

export function generateMetadata({ title, description, path, image }: PageMetadata): Metadata {
    const siteName = 'DotQ';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = cleanPath === '/' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;
    const ogImage = image || '/icon-512x512.png';

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
    title: 'DotQ | IT Automation & Custom Software',
    description: 'Premier IT company in India offering freelance services, web development, automation, digital marketing, and custom software for global enterprises.',
    path: '/',
});
