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

const PRODUCT_SEO: Record<string, { title: string; description: string }> = {
    goforge: {
        title: 'GoForge — Multi-Tenant E-Commerce Platform | DotQ Products',
        description: 'GoForge is DotQ’s high-concurrency multi-tenant e-commerce engine, built with Go and PostgreSQL for strict tenant data isolation, fast APIs, and Razorpay payments.',
    },
    tapq: {
        title: 'TapQ — WhatsApp Commerce Operating System | DotQ Products',
        description: 'TapQ turns WhatsApp into a conversational commerce engine for brands—unifying interactive catalogs, Razorpay payment links, stock sync, and automated workflows.',
    },
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = PROPRIETARY_PRODUCTS.find((p) => p.id === slug);

    if (!product) {
        return baseGenerateMetadata({
            title: 'Product Not Found | DotQ',
            description: 'The requested software product could not be found.',
            path: '/product',
            noindex: true,
        });
    }

    const preview = product.image || (product.id === 'goforge' ? '/GoForge Multi-Tenant Analytics Dashboard.png' : '/Tapq dashboard.png');
    const seo = PRODUCT_SEO[slug];

    return baseGenerateMetadata({
        title: seo ? seo.title : `${product.name} — ${product.headline} | DotQ Products`,
        description: seo ? seo.description : `${product.tagline} ${product.summary}`,
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
