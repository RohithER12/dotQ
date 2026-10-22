import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['framer-motion'],
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'dotq.in',
                    },
                ],
                destination: 'https://www.dotq.in/:path*',
                permanent: true, // Emits HTTP 308 Permanent Redirect
            },
            {
                source: '/products',
                destination: '/product',
                permanent: true,
            },
            {
                source: '/products/:path*',
                destination: '/product/:path*',
                permanent: true,
            },
            {
                source: '/works',
                destination: '/work',
                permanent: true,
            },
            {
                source: '/works/:path*',
                destination: '/work/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
