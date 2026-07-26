import React from 'react';
import { generateMetadata } from '@/lib/metadata';
import AboutHero from '@/components/about/AboutHero';
import OurStorySection from '@/components/about/OurStorySection';
import WhyDotQSection from '@/components/about/WhyDotQSection';
import TechnologySection from '@/components/about/TechnologySection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = generateMetadata({
    title: 'About DotQ | IT Automation and Software Engineering',
    description: 'Discover how DotQ builds high-performance websites, custom software, business automation systems, backend platforms and AI-powered digital products.',
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
