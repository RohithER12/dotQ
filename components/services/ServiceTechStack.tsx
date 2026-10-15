'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ServiceTechCategory } from '@/lib/servicesData';
import { Layers } from 'lucide-react';

interface Props {
    techStack: ServiceTechCategory[];
    serviceTitle: string;
}

export default function ServiceTechStack({ techStack, serviceTitle }: Props) {
    return (
        <section className="py-20 sm:py-28 bg-white border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="TECH STACK & TOOLS"
                    title="Engineered with Industry-Standard Technologies"
                    description={`We select high-performance frameworks and resilient infrastructure specifically suited for ${serviceTitle}.`}
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="rounded-2xl p-6 sm:p-7 bg-surface-subtle border border-border-subtle hover:border-cobalt/30 transition-colors flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-2.5 text-cobalt font-semibold text-xs uppercase tracking-wider">
                                    <Layers className="w-4 h-4 text-cobalt" />
                                    <span>{cat.category}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {cat.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1.5 rounded-xl bg-white border border-border-subtle text-xs font-medium text-primary shadow-subtle group-hover:border-zinc-300 transition-colors"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
