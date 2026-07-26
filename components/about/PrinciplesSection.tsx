'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_PRINCIPLES } from '@/lib/aboutData';
import { Cpu, Zap, Layers } from 'lucide-react';

export default function PrinciplesSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-canvas overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR PRINCIPLES"
                    title="What defines our work"
                    description="Core engineering values behind every architecture, product and line of code we deliver."
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Purposeful Engineering (White Surface) */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 30 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-border-subtle shadow-nova-md hover:shadow-nova-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-primary">
                                <Cpu className="w-6 h-6 text-cobalt" />
                            </div>

                            <span className="inline-block text-xs font-mono font-bold tracking-widest text-muted uppercase">
                                {ABOUT_PRINCIPLES[0].num} — PRINCIPLE
                            </span>

                            <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                {ABOUT_PRINCIPLES[0].title}
                            </h3>

                            <p className="text-sm sm:text-base text-secondary leading-relaxed">
                                {ABOUT_PRINCIPLES[0].description}
                            </p>
                        </div>

                        {/* Visual 1: Structured Node Grid */}
                        <div className="pt-6 border-t border-border-subtle/80 flex justify-center">
                            <div className="w-full h-24 rounded-xl bg-surface-subtle border border-border-subtle/60 p-3 grid grid-cols-4 gap-2 items-center">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-6 rounded-md border ${
                                            i % 2 === 0
                                                ? 'bg-cobalt/15 border-cobalt/30'
                                                : 'bg-white border-border-subtle'
                                        } flex items-center justify-center`}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Performance by Design (Soft-Blue Surface) */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 30 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-soft-blue/60 rounded-3xl p-8 sm:p-10 border border-cobalt/20 shadow-nova-md hover:shadow-nova-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-cobalt/15 flex items-center justify-center text-cobalt">
                                <Zap className="w-6 h-6 text-cobalt" />
                            </div>

                            <span className="inline-block text-xs font-mono font-bold tracking-widest text-cobalt uppercase">
                                {ABOUT_PRINCIPLES[1].num} — PRINCIPLE
                            </span>

                            <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                {ABOUT_PRINCIPLES[1].title}
                            </h3>

                            <p className="text-sm sm:text-base text-secondary leading-relaxed">
                                {ABOUT_PRINCIPLES[1].description}
                            </p>
                        </div>

                        {/* Visual 2: Smooth Cobalt Performance Wave */}
                        <div className="pt-6 border-t border-cobalt/15 flex justify-center">
                            <div className="w-full h-24 rounded-xl bg-white border border-cobalt/20 p-3 flex items-center justify-center overflow-hidden relative">
                                <svg className="w-full h-full" viewBox="0 0 200 60" fill="none">
                                    <path
                                        d="M 0,30 Q 50,5 100,30 T 200,30"
                                        stroke="#2442D7"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                    <circle cx="100" cy="30" r="4" fill="#2442D7" className="animate-ping" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Built to Scale (Cobalt Accent Surface) */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 30 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-cobalt rounded-3xl p-8 sm:p-10 text-white shadow-cobalt-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden"
                    >
                        <div className="space-y-6 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white">
                                <Layers className="w-6 h-6 text-white" />
                            </div>

                            <span className="inline-block text-xs font-mono font-bold tracking-widest text-white/80 uppercase">
                                {ABOUT_PRINCIPLES[2].num} — PRINCIPLE
                            </span>

                            <h3 className="text-2xl font-semibold text-white tracking-tight">
                                {ABOUT_PRINCIPLES[2].title}
                            </h3>

                            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                                {ABOUT_PRINCIPLES[2].description}
                            </p>
                        </div>

                        {/* Visual 3: Expanding Network Tube Structure */}
                        <div className="pt-6 border-t border-white/20 relative z-10 flex justify-center">
                            <div className="w-full h-24 rounded-xl bg-white/10 border border-white/20 p-3 flex items-center justify-around">
                                <span className="w-4 h-4 rounded-full bg-white animate-pulse" />
                                <div className="h-0.5 w-12 bg-white/40" />
                                <span className="w-6 h-6 rounded-full bg-white/80" />
                                <div className="h-0.5 w-12 bg-white/40" />
                                <span className="w-8 h-8 rounded-full bg-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
