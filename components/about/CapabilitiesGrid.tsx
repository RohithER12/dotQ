'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_CAPABILITIES } from '@/lib/aboutData';
import { Code, Database, Sparkles, Workflow, Gauge, Bot } from 'lucide-react';

export default function CapabilitiesGrid() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const icons = {
        'web-automation': Code,
        'custom-backend': Database,
        'interactive-design': Sparkles,
        'business-automation': Workflow,
        'performance-engineering': Gauge,
        'ai-integration': Bot,
    };

    return (
        <section className="py-20 sm:py-28 bg-canvas overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="WHAT WE BUILD"
                    title="Complete digital capabilities for ambitious businesses."
                    description="From web interfaces to distributed backend architectures, automation pipelines and custom AI models."
                    className="mb-14 sm:mb-20"
                />

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
                    {ABOUT_CAPABILITIES.map((cap, idx) => {
                        const IconComponent = icons[cap.id as keyof typeof icons] || Code;
                        return (
                            <motion.div
                                key={cap.id}
                                initial={mounted ? { opacity: 0, y: 25 } : false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className={`${cap.span} bg-white rounded-3xl p-8 sm:p-10 border border-border-subtle shadow-nova-sm hover:shadow-nova-md transition-all duration-300 flex flex-col justify-between space-y-6 group`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-muted uppercase">
                                            CAPABILITY 0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                        {cap.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-secondary leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border-subtle/70 flex flex-wrap items-center gap-2">
                                    {cap.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-medium bg-canvas px-3 py-1 rounded-full border border-border-subtle text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
