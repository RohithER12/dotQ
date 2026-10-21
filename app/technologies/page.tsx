import React from 'react';
import TechnologiesHero from '@/components/technologies/TechnologiesHero';
import TechnologiesExplorer from '@/components/technologies/TechnologiesExplorer';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';

export const metadata = baseGenerateMetadata({
    title: 'Technologies, Tools & Architecture | DotQ Engineering',
    description:
        'Explore DotQ’s comprehensive technology stack and architecture methodology: Backend (Go, Python, Java, Node.js), Front-End (Next.js, React), Mobile (Flutter, iOS, Android), Cloud (AWS, Azure, GCP), Big Data (Spark, Databricks, Kafka), and DevOps & QA tooling.',
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
