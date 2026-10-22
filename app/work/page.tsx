import WorksHero from '@/components/work/WorksHero';
import FeaturedWork from '@/components/home/FeaturedWork';
import FinalCTA from '@/components/home/FinalCTA';
import { generateMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata = generateMetadata({
    title: 'Selected Client Work & Case Studies | DotQ',
    description: 'Explore live web platforms, headless e-commerce storefronts, fintech portals, and custom software engineering case studies delivered by DotQ.',
    path: '/work',
});

export default function WorkPage() {
    const breadcrumbJsonLd = getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
    ]);

    return (
        <main className="min-h-screen bg-canvas">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <WorksHero />
            <FeaturedWork />
            <FinalCTA />
        </main>
    );
}
