import React from 'react';
import { notFound } from 'next/navigation';
import ProductDetailView from '@/components/product/ProductDetailView';
import { GOFORGE_PRODUCT, TAPQ_PRODUCT, PROPRIETARY_PRODUCTS } from '@/lib/productData';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return PROPRIETARY_PRODUCTS.map((prod) => ({
        slug: prod.id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = PROPRIETARY_PRODUCTS.find((p) => p.id === slug);

    if (!product) {
        return baseGenerateMetadata({
            title: 'Product Not Found | DotQ',
            description: 'The requested software product could not be found.',
            path: '/product',
        });
    }

    const preview = product.id === 'goforge' ? '/assets/goforge_preview.jpg' : '/assets/tapq_preview.jpg';

    return baseGenerateMetadata({
        title: `${product.name} — ${product.headline} | DotQ Products`,
        description: `${product.tagline} ${product.summary}`,
        path: `/product/${slug}`,
        image: preview,
    });
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = PROPRIETARY_PRODUCTS.find((p) => p.id === slug);

    if (!product) {
        notFound();
    }

    const otherProduct = product.id === 'goforge' ? { id: 'tapq', name: 'TapQ' } : { id: 'goforge', name: 'GoForge' };

    return (
        <main className="min-h-screen bg-canvas">
            <ProductDetailView product={product} otherProduct={otherProduct} />
        </main>
    );
}
