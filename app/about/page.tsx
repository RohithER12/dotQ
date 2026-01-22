import type { Metadata } from 'next';
import AboutIntro from '@/components/sections/AboutIntro';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'About',
    description: 'DotQ is a group of elite freelancers working on complex production systems. We take strong ownership, solve deep problems, and have a passion for difficult engineering challenges.',
    path: '/about',
});

export default function AboutPage() {
    return <AboutIntro />;
}
