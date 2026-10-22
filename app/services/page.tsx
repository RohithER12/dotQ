import React from 'react';
import { generateMetadata } from '@/lib/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import CapabilitySection from '@/components/home/CapabilitySection';
import FinalCTA from '@/components/home/FinalCTA';

import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata = generateMetadata({
    title: 'Custom Software & IT Engineering Services | DotQ',
    description: 'Explore DotQ engineering services: web and mobile apps, scalable Go backends, ecommerce platforms, business automation, performance engineering, and AI systems.',
    path: '/services',
});

export default function ServicesPage() {
    const breadcrumbJsonLd = getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
    ]);

    return (
        <main className="min-h-screen bg-canvas">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ServicesHero />
            <CapabilitySection />
            <FinalCTA />
        </main>
    );
}
