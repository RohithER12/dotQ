'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetail } from '@/lib/projectsData';
import Button from '@/components/ui/Button';
import { ChevronRight, ArrowLeft, ArrowUpRight, ArrowRight, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';

interface Props {
    project: ProjectDetail;
    prevProject?: { id: string; name: string };
    nextProject?: { id: string; name: string };
}

export default function ProjectDetailScreen({ project, prevProject, nextProject }: Props) {
    return (
        <article className="min-h-screen bg-canvas py-12 sm:py-20 select-none">
            <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-medium text-secondary mb-10" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <Link href="/work" className="hover:text-primary transition-colors">
                        Works
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-primary font-semibold truncate">
                        {project.name}
                    </span>
                </nav>

                {/* Header Area */}
                <header className="space-y-6 mb-10 sm:mb-12">
                    {/* Project Title */}
                    <h1 className="text-3xl sm:text-5xl font-sans font-medium text-primary tracking-tight leading-[1.12]">
                        {project.name}
                    </h1>

                    {/* Tagline / Subtitle */}
                    <p className="text-lg sm:text-xl text-primary font-medium leading-relaxed">
                        {project.tagline}
                    </p>

                    {/* Lead Overview Paragraph */}
                    <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal pt-1">
                        {project.overview}
                    </p>

                    {/* Project Metadata Details Bar */}
                    <div className="pt-4 pb-2 border-y border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Client
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                {project.client}
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Industry
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                {project.category}
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Year
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                {project.year}
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Live Platform
                            </span>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline text-sm"
                            >
                                <span>{project.displayUrl}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </header>

                {/* Hero Featured Visual */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-nova-md bg-slate-900 mb-14 sm:mb-18">
                    <Image
                        src={project.previewImage}
                        alt={`${project.name} project showcase`}
                        fill
                        sizes="(max-width: 880px) 100vw, 880px"
                        priority
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Case Study Content (Paragraph Style) */}
                <main className="space-y-14 sm:space-y-16">
                    {/* The Challenge Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            The Challenge
                        </h2>
                        <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed font-normal">
                            {project.challenge.map((para, idx) => (
                                <p key={idx}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* The Solution & Architecture Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Our Approach & Solution
                        </h2>
                        <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed font-normal">
                            {project.solution.map((para, idx) => (
                                <p key={idx}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Key System Features */}
                    <section className="space-y-4 pt-2">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Key Features Engineered
                        </h2>
                        <ul className="space-y-3 pt-2">
                            {project.keyFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-base text-secondary leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-primary font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Results & Business Metrics */}
                    <section className="space-y-6 pt-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Measurable Results
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
                            {project.results.map((res, idx) => (
                                <div
                                    key={idx}
                                    className="space-y-1.5"
                                >
                                    <div className="text-3xl sm:text-4xl font-mono font-bold text-primary tracking-tight">
                                        {res.metric}
                                    </div>
                                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                                        {res.label}
                                    </div>
                                    <p className="text-xs text-secondary leading-snug font-normal">
                                        {res.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technologies Deployed */}
                    <section className="pt-8 border-t border-border-subtle space-y-4">
                        <h3 className="text-xs font-mono font-bold text-secondary uppercase tracking-wider">
                            Technologies & Tools Deployed
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3.5 py-1.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-primary shadow-subtle"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* External Link Action Bar */}
                    <section className="p-6 sm:p-8 rounded-3xl bg-surface-subtle border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <h4 className="text-base sm:text-lg font-semibold text-primary">
                                Experience {project.name} Live
                            </h4>
                            <p className="text-xs sm:text-sm text-secondary">
                                Visit the live production platform to experience the performance firsthand.
                            </p>
                        </div>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-zinc-800 transition-colors flex-shrink-0"
                        >
                            <span>Visit {project.displayUrl}</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </section>

                    {/* Previous / Next Project Navigation */}
                    <nav className="pt-8 border-t border-border-subtle flex items-center justify-between gap-4 text-sm" aria-label="Project Navigation">
                        {prevProject ? (
                            <Link
                                href={`/work/${prevProject.id}`}
                                className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Previous: {prevProject.name}</span>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextProject ? (
                            <Link
                                href={`/work/${nextProject.id}`}
                                className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors ml-auto"
                            >
                                <span>Next: {nextProject.name}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </nav>

                    {/* Consultation Callout */}
                    <section className="p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-nova-sm space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                Planning a project similar to {project.name}?
                            </h3>
                            <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal max-w-xl">
                                We evaluate your requirements, review technical constraints, and deliver an actionable architecture roadmap and cost estimate.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <Button href="/contact" variant="primary" size="md" showArrow={true}>
                                Start Your Project
                            </Button>
                            <a
                                href="mailto:business@dotq.in"
                                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4 text-zinc-500" />
                                <span>business@dotq.in</span>
                            </a>
                        </div>
                    </section>

                    {/* Back to All Projects */}
                    <div className="pt-4 pb-12 flex justify-start">
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to All Selected Work</span>
                        </Link>
                    </div>
                </main>
            </div>
        </article>
    );
}
