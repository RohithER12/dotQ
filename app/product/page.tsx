import React from 'react';
import ProductHubScreen from '@/components/product/ProductHubScreen';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

export const metadata = baseGenerateMetadata({
    title: 'DotQ Products — GoForge & TapQ Commerce Platforms',
    description: 'Explore proprietary software platforms developed by DotQ: GoForge (multi-tenant e-commerce backend) and TapQ (WhatsApp commerce operating system).',
    path: '/product',
    image: '/assets/goforge_preview.jpg',
});

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-canvas">
            <ProductHubScreen />
        </main>
    );
}
