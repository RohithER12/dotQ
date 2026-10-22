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

const SERVICE_SEO: Record<string, { title: string; description: string }> = {
    'web-mobile-dev': {
        title: 'Web & Mobile App Development Services | DotQ',
        description: 'Engineer cross-platform Flutter mobile apps and high-performance Next.js web applications with native fluidity, responsive layouts, and clean architecture.',
    },
    'custom-backend': {
        title: 'Custom Backend & Microservices Engineering | DotQ',
        description: 'Build distributed microservices, event-driven architectures, and high-concurrency Go and Node.js backends engineered for low latency and high availability.',
    },
    'ecommerce-dev': {
        title: 'E-Commerce Website Development & Architecture | DotQ',
        description: 'Develop fast headless e-commerce storefronts, custom checkouts, inventory synchronization, and secure payment integrations built to maximize conversion rates.',
    },
    'business-automation': {
        title: 'Business Workflow Automation & DevOps Solutions | DotQ',
        description: 'Eliminate operational bottlenecks with custom workflow automation, n8n orchestration, API integrations, and reliable CI/CD cloud infrastructure from DotQ.',
    },
    'performance-engineering': {
        title: 'Performance Engineering & Core Web Vitals | DotQ',
        description: 'Optimize Core Web Vitals, eliminate database bottlenecks, reduce full-stack latency, and ensure high-load resilience for mission-critical web platforms.',
    },
    'ai-integration': {
        title: 'AI Integration & Enterprise LLM Solutions | DotQ',
        description: 'Deploy production LLM integrations, retrieval-augmented generation (RAG) pipelines, vector databases, and custom AI agents designed for reliable enterprise utility.',
    },
    'digital-marketing': {
        title: 'Digital Marketing & Growth Engineering | DotQ',
        description: 'Accelerate customer acquisition with technical SEO, performance marketing campaigns, analytics tracking, and conversion rate optimization (CRO) from DotQ.',
    },
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];

    if (!service) {
        notFound();
    }

    const seo = SERVICE_SEO[slug];

    return baseGenerateMetadata({
        title: seo ? seo.title : `${service.title} | DotQ IT Services`,
        description: seo ? seo.description : service.heroDescription.slice(0, 155),
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

