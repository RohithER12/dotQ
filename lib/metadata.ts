import type { Metadata } from 'next';

interface PageMetadata {
    title: string;
    description: string;
    path: string;
}

export function generateMetadata({ title, description, path }: PageMetadata): Metadata {
    const siteName = 'DotQ';
    const baseUrl = 'https://dotq.dev';
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
    const url = `${baseUrl}${path}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(baseUrl),
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName,
            type: 'website',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: siteName,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: ['/og-image.jpg'],
        },
        alternates: {
            canonical: url,
        },
    };
}

export const DEFAULT_METADATA: Metadata = generateMetadata({
    title: 'DotQ',
    description: 'A high-skill digital engineering collective delivering complex, real-world solutions. Web engineering, scalable backends, and performance-driven development.',
    path: '/',
});
