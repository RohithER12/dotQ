'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { ARCHITECTURE_PILLARS } from '@/lib/technologiesData';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ArchitectureSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="architecture" className="py-20 sm:py-28 bg-[#F3F4F6] border-y border-border-subtle scroll-mt-20">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <SectionHeading
                    eyebrow="ARCHITECTURE & METHODOLOGY"
                    title="Engineering principles for mission-critical software."
                    description="Modern business platforms demand more than working code—they require deterministic boundaries, sub-millisecond latency, zero data leaks, and automated fault recovery."
                    align="center"
                    className="mx-auto"
                />

                {/* 6 Architectural Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARCHITECTURE_PILLARS.map((pillar, idx) => (
                        <motion.div
                            key={pillar.id}
                            initial={mounted ? { opacity: 0, y: 25 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className="bg-white rounded-3xl p-7 sm:p-8 border border-border-subtle shadow-nova-sm hover:shadow-nova-md transition-all duration-300 flex flex-col justify-between h-full group"
                        >
                            <div className="space-y-5">
                                {/* Number and Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="font-outfit text-3xl font-semibold text-cobalt tracking-tight">
                                        {pillar.num}
                                    </span>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200/60">
                                        Pillar {pillar.num}
                                    </span>
                                </div>

                                {/* Title & Subtitle */}
                                <div className="space-y-1.5">
                                    <h3 className="text-xl font-semibold font-sans text-primary group-hover:text-cobalt transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs font-medium text-secondary">
                                        {pillar.subtitle}
                                    </p>
                                </div>

                                {/* Body Description */}
                                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                                    {pillar.description}
                                </p>

                                {/* Key Guarantees List */}
                                <div className="space-y-2 pt-2">
                                    {pillar.points.map((pt, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-secondary">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-cobalt flex-shrink-0 mt-0.5" />
                                            <span className="leading-snug">{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Tech Stack Tools for this Pillar */}
                            <div className="pt-6 mt-6 border-t border-border-subtle">
                                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                                    Primary Technology Enablers
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {pillar.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-2 py-0.5 rounded-md bg-soft-blue text-cobalt text-[11px] font-mono font-medium border border-cobalt/20"
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
