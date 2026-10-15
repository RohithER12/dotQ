'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceDetail } from '@/lib/servicesData';
import Button from '@/components/ui/Button';
import { ChevronRight, ArrowLeft, ArrowRight, Mail } from 'lucide-react';

interface Props {
    service: ServiceDetail;
}

export default function ServiceDetailEditorial({ service }: Props) {
    return (
        <article className="min-h-screen bg-canvas py-12 sm:py-20">
            <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Navigation & Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-medium text-secondary mb-10" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <Link href="/services" className="hover:text-primary transition-colors">
                        Services
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-primary font-semibold truncate">
                        {service.title}
                    </span>
                </nav>

                {/* Header Area */}
                <header className="space-y-6 mb-12 sm:mb-16">
                    {/* Eyebrow Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-subtle text-primary text-xs font-semibold uppercase tracking-wider shadow-subtle">
                        <span className="w-2 h-2 rounded-full bg-cobalt" />
                        <span>SERVICE {service.num} • {service.badge}</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-5xl font-sans font-medium text-primary tracking-tight leading-[1.12]">
                        {service.title}
                    </h1>

                    {/* Lead Paragraph */}
                    <p className="text-lg sm:text-xl text-secondary leading-relaxed font-normal pt-2">
                        {service.heroDescription}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                        <Button href="/contact" size="md" variant="primary" showArrow={true}>
                            Discuss Your Project
                        </Button>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>All Services</span>
                        </Link>
                    </div>
                </header>

                {/* Divider */}
                <hr className="border-t border-border-subtle my-12" />

                {/* Editorial Paragraph Sections */}
                <main className="space-y-14 sm:space-y-16">
                    {service.editorialSections.map((section, idx) => (
                        <section key={idx} className="space-y-5">
                            <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                                {section.title}
                            </h2>

                            <div className="space-y-5 text-base sm:text-lg text-secondary leading-relaxed font-normal">
                                {section.paragraphs.map((p, pIdx) => (
                                    <p key={pIdx}>
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* Key Takeaway Callout Box */}
                            {section.keyTakeaway && (
                                <div className="border-l-2 border-cobalt bg-surface-subtle/80 rounded-r-2xl p-5 sm:p-6 my-6">
                                    <p className="text-xs font-mono font-semibold text-cobalt uppercase tracking-wider mb-1.5">
                                        Core Principle
                                    </p>
                                    <p className="text-base sm:text-lg font-medium text-primary leading-snug">
                                        {section.keyTakeaway}
                                    </p>
                                </div>
                            )}

                            {/* Bullet Points List */}
                            {section.bulletPoints && section.bulletPoints.length > 0 && (
                                <ul className="space-y-2.5 pt-2 pl-1">
                                    {section.bulletPoints.map((point, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-secondary leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cobalt mt-2.5 flex-shrink-0" />
                                            <span className="text-primary font-normal">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}

                    {/* Technologies Mention */}
                    <section className="pt-8 border-t border-border-subtle space-y-4">
                        <h3 className="text-xs font-mono font-bold text-secondary uppercase tracking-wider">
                            Technologies & Tools Deployed
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {service.techStack.flatMap((cat) => cat.tools).map((tool) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1 rounded-full bg-white border border-border-subtle text-xs font-medium text-primary shadow-subtle"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Clean Minimalist Consultation Callout */}
                    <section className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-nova-sm space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs font-mono font-bold text-cobalt uppercase tracking-wider">
                                Direct Consultation
                            </span>
                            <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                Have a project in mind for {service.shortTitle}?
                            </h3>
                            <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal max-w-xl">
                                We review requirements, assess technical feasibility, and deliver an actionable architecture plan and timeline estimate.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <Button href="/contact" variant="primary" size="md" showArrow={true}>
                                Start Your Project
                            </Button>
                            <a
                                href="mailto:business@dotq.in"
                                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-cobalt transition-colors"
                            >
                                <Mail className="w-4 h-4 text-cobalt" />
                                <span>business@dotq.in</span>
                            </a>
                        </div>
                    </section>

                    {/* Back Link */}
                    <div className="pt-6 flex justify-between items-center text-sm">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-cobalt font-semibold hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to All Services</span>
                        </Link>
                    </div>
                </main>
            </div>
        </article>
    );
}
