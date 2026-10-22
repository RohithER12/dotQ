import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/lib/projectsData';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';
import ProjectDetailScreen from '@/components/work/ProjectDetailScreen';
import { getBreadcrumbSchema } from '@/lib/schema';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return Object.keys(PROJECTS_DATA).map((slug) => ({
        slug,
    }));
}

const PROJECT_SEO: Record<string, { title: string; description: string }> = {
    'naiksha': {
        title: 'Naiksha Case Study — Luxury E-Commerce | DotQ Work',
        description: 'See how DotQ engineered an edge-rendered headless Next.js e-commerce storefront with optimized mobile loading, facet filtering, and streamlined checkout for luxury label Naiksha.',
    },
    'yugen-bags': {
        title: 'Yugen Bags Case Study — D2C E-Commerce | DotQ Work',
        description: 'How DotQ built a high-speed Next.js D2C e-commerce storefront with express mobile checkout and automated courier fulfillment for lifestyle brand Yugen Bags.',
    },
    'fourteen-yards': {
        title: 'Fourteen Yards Studio Case Study — Architecture | DotQ Work',
        description: 'How DotQ designed and engineered an editorial architectural showcase featuring smooth-scroll physics and responsive edge image delivery for Fourteen Yards Studio.',
    },
    'breta-world': {
        title: 'Breta World Case Study — Enterprise Corporate | DotQ Work',
        description: 'Learn how DotQ engineered an authoritative corporate platform with low-latency global CDN edge delivery and automated CRM inquiry ingestion for Breta World.',
    },
    'kasera-interiors': {
        title: 'Kasera Interiors Case Study — Interior Design | DotQ Work',
        description: 'See how DotQ engineered an editorial portfolio showcase with full-bleed image galleries and consultation booking funnels for luxury studio Kasera Interiors.',
    },
    'stoxwaves': {
        title: 'Stoxwaves Case Study — Fintech Market Portal | DotQ Work',
        description: 'How DotQ built a fintech market analytics portal using Go microservices, WebSockets, and Canvas charting for live streaming market data platform Stoxwaves.',
    },
    'cff-academy': {
        title: 'CFF Academy Case Study — Sports Tech Platform | DotQ Work',
        description: 'Learn how DotQ built a youth football academy management platform with automated online enrollment, recurring tuition billing, and WhatsApp messaging for CFF Academy.',
    },
    'zenmode-clothing': {
        title: 'Zenmode Clothing Case Study — Apparel E-Commerce | DotQ Work',
        description: 'How DotQ engineered a fast mobile e-commerce storefront with one-tap express checkout and dynamic sizing guides for contemporary streetwear label Zenmode Clothing.',
    },
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS_DATA[slug];

    if (!project) {
        notFound();
    }

    const seo = PROJECT_SEO[slug];

    return baseGenerateMetadata({
        title: seo ? seo.title : `${project.name} — ${project.category} | DotQ Selected Work`,
        description: seo ? seo.description : `${project.tagline} ${project.overview.slice(0, 150)}...`,
        path: `/work/${slug}`,
        image: project.previewImage,
    });
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS_DATA[slug];

    if (!project) {
        notFound();
    }

    const breadcrumbJsonLd = getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: project.name, path: `/work/${slug}` },
    ]);

    const allKeys = Object.keys(PROJECTS_DATA);
    const currentIndex = allKeys.indexOf(slug);
    const prevKey = currentIndex > 0 ? allKeys[currentIndex - 1] : undefined;
    const nextKey = currentIndex < allKeys.length - 1 ? allKeys[currentIndex + 1] : undefined;

    const prevProject = prevKey ? { id: prevKey, name: PROJECTS_DATA[prevKey].name } : undefined;
    const nextProject = nextKey ? { id: nextKey, name: PROJECTS_DATA[nextKey].name } : undefined;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ProjectDetailScreen
                project={project}
                prevProject={prevProject}
                nextProject={nextProject}
            />
        </>
    );
}
