import React from 'react';
import ProductHubScreen from '@/components/product/ProductHubScreen';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

import { GOFORGE_PRODUCT } from '@/lib/productData';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata = baseGenerateMetadata({
    title: 'Proprietary Software Platforms & Products | DotQ',
    description: 'Discover proprietary commerce platforms developed by DotQ: GoForge (multi-tenant e-commerce engine) and TapQ (conversational WhatsApp commerce operating system).',
    path: '/product',
    image: GOFORGE_PRODUCT.image,
});

export default function ProductPage() {
    const breadcrumbJsonLd = getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/product' },
    ]);

    return (
        <main className="min-h-screen bg-canvas">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ProductHubScreen />
        </main>
    );
}
