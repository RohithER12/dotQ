import FeaturedWork from '@/components/home/FeaturedWork';
import FinalCTA from '@/components/home/FinalCTA';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
    title: 'Selected Client Work & Portfolio | DotQ',
    description: 'Explore live web platforms, e-commerce storefronts, and custom software systems engineered by DotQ.',
    path: '/work',
});

export default function WorkPage() {
    return (
        <div className="pt-8 sm:pt-12">
            <FeaturedWork />
            <FinalCTA />
        </div>
    );
}
