import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/lib/projectsData';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';
import ProjectDetailScreen from '@/components/work/ProjectDetailScreen';

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

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS_DATA[slug];

    if (!project) {
        return baseGenerateMetadata({
            title: 'Project Not Found | DotQ',
            description: 'The requested project case study could not be found.',
            path: '/work',
        });
    }

    return baseGenerateMetadata({
        title: `${project.name} — ${project.category} | DotQ Selected Work`,
        description: `${project.tagline} ${project.overview.slice(0, 150)}...`,
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

    const allKeys = Object.keys(PROJECTS_DATA);
    const currentIndex = allKeys.indexOf(slug);
    const prevKey = currentIndex > 0 ? allKeys[currentIndex - 1] : undefined;
    const nextKey = currentIndex < allKeys.length - 1 ? allKeys[currentIndex + 1] : undefined;

    const prevProject = prevKey ? { id: prevKey, name: PROJECTS_DATA[prevKey].name } : undefined;
    const nextProject = nextKey ? { id: nextKey, name: PROJECTS_DATA[nextKey].name } : undefined;

    return (
        <ProjectDetailScreen
            project={project}
            prevProject={prevProject}
            nextProject={nextProject}
        />
    );
}
