'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function TechnologiesHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const metrics = [
        { label: 'Core Disciplines', value: '6', detail: 'Backend to Cloud & Big Data' },
        { label: 'Supported Technologies', value: '40+', detail: 'Enterprise & Modern Stacks' },
        { label: 'Cloud Architecture', value: '100%', detail: 'Containerized & Resilient' },
        { label: 'Uptime Reliability', value: '99.99%', detail: 'High-Availability Standard' },
    ];

    return (
        <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-canvas overflow-hidden select-none border-b border-border-subtle">
            {/* Ambient background glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                    {/* Eyebrow Pill */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 10 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border-subtle text-primary text-xs font-semibold uppercase tracking-wider shadow-subtle"
                    >
                        <span className="w-2 h-2 rounded-full bg-cobalt" />
                        <span>TECHNOLOGIES, TOOLS & ARCHITECTURE</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-sans font-normal tracking-tight text-primary leading-[1.08] text-balance mx-auto"
                    >
                        Modern technology stacks engineered for resilience, speed &amp; scale.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed text-balance mx-auto font-normal"
                    >
                        From high-concurrency Go and Python backends to Flutter mobile apps, Apache Spark Lakehouses, and automated Kubernetes cloud infrastructure—we select and master the right tools for your business.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                    >
                        <Button href="/contact" size="lg" variant="primary" showArrow={true}>
                            Consult Technical Team
                        </Button>
                        <a
                            href="#technology-stack"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border-subtle text-primary text-sm font-medium hover:border-zinc-400 hover:bg-zinc-50 transition-all shadow-subtle cursor-pointer"
                        >
                            <span>Explore Tech Stack</span>
                            <ArrowRight className="w-4 h-4 text-zinc-500" />
                        </a>
                    </motion.div>
                </div>

                {/* Metrics Strip */}
                <motion.div
                    initial={mounted ? { opacity: 0, y: 30 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-14 sm:mt-18 pt-10 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
                >
                    {metrics.map((item, idx) => (
                        <div key={idx} className="text-center space-y-1">
                            <span className="block font-outfit text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                                {item.value}
                            </span>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                                {item.label}
                            </span>
                            <span className="block text-[11px] text-muted">
                                {item.detail}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
