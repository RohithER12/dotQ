'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { CAPABILITY_SUMMARY } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export default function CapabilitySummary() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-canvas border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CAPABILITY SUMMARY"
                    title="Engineering capabilities for ambitious projects."
                    description="From interactive frontend experiences to scalable backend infrastructure, DotQ provides the technical capabilities needed to build, automate and grow."
                    align="center"
                    className="mb-14 sm:mb-20"
                />

                {/* 2 Large Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                    {/* Card 1: White Surface */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 30 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-border-subtle shadow-nova-md flex flex-col justify-between space-y-8 hover:shadow-nova-lg transition-all duration-300"
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-soft-blue text-cobalt text-xs font-mono font-bold">
                                FRONTEND & CORE PRODUCT
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">
                                {CAPABILITY_SUMMARY[0].title}
                            </h3>

                            <ul className="space-y-4">
                                {CAPABILITY_SUMMARY[0].capabilities.map((cap) => (
                                    <li key={cap} className="flex items-center gap-3 text-sm text-secondary">
                                        <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                                        <span className="font-medium text-primary">{cap}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-border-subtle">
                            <Button href={CAPABILITY_SUMMARY[0].href} variant="outline" className="w-full">
                                {CAPABILITY_SUMMARY[0].ctaText}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Card 2: Cobalt Accent Surface */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 30 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-cobalt rounded-3xl p-8 sm:p-10 text-white shadow-cobalt-glow flex flex-col justify-between space-y-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-mono font-bold border border-white/20">
                                BACKEND & AUTOMATION
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                                {CAPABILITY_SUMMARY[1].title}
                            </h3>

                            <ul className="space-y-4">
                                {CAPABILITY_SUMMARY[1].capabilities.map((cap) => (
                                    <li key={cap} className="flex items-center gap-3 text-sm text-white/90">
                                        <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                                        <span className="font-medium text-white">{cap}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-white/20 relative z-10">
                            <Button href={CAPABILITY_SUMMARY[1].href} variant="white" className="w-full">
                                {CAPABILITY_SUMMARY[1].ctaText}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
