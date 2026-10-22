import React from 'react';
import { generateMetadata } from '@/lib/metadata';
import AboutHero from '@/components/about/AboutHero';
import OurStorySection from '@/components/about/OurStorySection';
import WhyDotQSection from '@/components/about/WhyDotQSection';
import TechnologySection from '@/components/about/TechnologySection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = generateMetadata({
    title: 'About DotQ | Custom Software & Engineering Studio',
    description: 'Learn about DotQ, our engineering philosophy, and how we build resilient custom software, high-performance web and mobile apps, and intelligent automation.',
    path: '/about',
});

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-canvas">
            <AboutHero />
            <OurStorySection />
            <WhyDotQSection />
            <TechnologySection />
            <AboutCTA />
        </main>
    );
}
