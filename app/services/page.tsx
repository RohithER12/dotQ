import React from 'react';
import { generateMetadata } from '@/lib/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import CapabilitySection from '@/components/home/CapabilitySection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = generateMetadata({
    title: 'Custom Software & IT Engineering Services | DotQ',
    description: 'Explore DotQ engineering services: web and mobile apps, scalable Go backends, ecommerce platforms, business automation, performance engineering, and AI systems.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-canvas">
            <ServicesHero />
            <CapabilitySection />
            <FinalCTA />
        </main>
    );
}
