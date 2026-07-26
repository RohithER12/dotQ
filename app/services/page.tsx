import React from 'react';
import { generateMetadata } from '@/lib/metadata';
import ServicesHero from '@/components/services/ServicesHero';
import CapabilitySection from '@/components/home/CapabilitySection';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = generateMetadata({
    title: 'IT Services & Software Capabilities | DotQ',
    description: 'Explore DotQ services including web engineering, Flutter mobile apps, custom backend architectures, DevOps automation, and AI integrations.',
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
