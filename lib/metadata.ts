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
                    url: '/icon.png',
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
            images: ['/icon.png'],
        },
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
                { url: '/icon.png', sizes: '512x512', type: 'image/png' },
            ],
            shortcut: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        alternates: {
            canonical: url,
        },
        verification: {
            google: 'googlee97bf558361105d9',
        },
    };
}

export const DEFAULT_METADATA: Metadata = generateMetadata({
    title: 'DotQ | IT Automation & Custom Software',
    description: 'Premier IT company in India offering freelance services, web development, automation and custom software for global enterprises.',
    path: '/',
});
