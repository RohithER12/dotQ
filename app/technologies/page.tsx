import React from 'react';
import TechnologiesHero from '@/components/technologies/TechnologiesHero';
import TechnologiesExplorer from '@/components/technologies/TechnologiesExplorer';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

export const metadata = baseGenerateMetadata({
    title: 'Technology Stack & Systems Architecture | DotQ',
    description:
        'Explore DotQ’s core technology stack: high-concurrency Go backends, Next.js web applications, Flutter mobile apps, cloud infrastructure, and DevOps tooling.',
    path: '/technologies',
});

export default function TechnologiesPage() {
    return (
        <main className="min-h-screen bg-canvas">
            {/* Top Hero Section */}
            <TechnologiesHero />

            {/* Interactive Technology Stack Explorer */}
            <TechnologiesExplorer />
        </main>
    );
}
