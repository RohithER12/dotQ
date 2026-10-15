import React from 'react';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/lib/servicesData';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';
import ServiceDetailEditorial from '@/components/services/ServiceDetailEditorial';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return Object.keys(SERVICES_DATA).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];

    if (!service) {
        return baseGenerateMetadata({
            title: 'Service Not Found | DotQ',
            description: 'The requested service capability could not be found.',
            path: '/services',
        });
    }

    return baseGenerateMetadata({
        title: `${service.title} | DotQ IT Services`,
        description: service.heroDescription.slice(0, 155),
        path: `/services/${slug}`,
    });
}

export default async function DedicatedServicePage({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];

    if (!service) {
        notFound();
    }

    return <ServiceDetailEditorial service={service} />;
}

