import type { Metadata } from 'next';

interface PageMetadata {
    title: string;
    description: string;
    path: string;
}

export function generateMetadata({ title, description, path }: PageMetadata): Metadata {
    const siteName = 'DotQ';
    const baseUrl = 'https://dotq.in';
    const url = `${baseUrl}${path}`;

    return {
        title,
        description,
        metadataBase: new URL(baseUrl),
        openGraph: {
            title,
            description,
            url,
            siteName,
            type: 'website',
            images: [
                {
                    url: '/assets/dotq-logo.png',
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
            images: ['/assets/dotq-logo.png'],
        },
        icons: {
            icon: '/assets/fav%20icon%2002.png',
            shortcut: '/assets/fav%20icon%2002.png',
            apple: '/assets/fav%20icon%2002.png',
        },
        alternates: {
            canonical: url,
        },
    };
}

export const DEFAULT_METADATA: Metadata = generateMetadata({
    title: 'DotQ | IT Automation & Custom Software',
    description: 'Premier IT company in India offering freelance services, web development, automation and custom software for global enterprises.',
    path: '/',
});
