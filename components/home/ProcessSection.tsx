'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="process" className="py-20 sm:py-28 bg-white border-b border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR PROCESS"
                    title="How we turn complex problems into scalable products."
                    description="Our structured engineering delivery framework ensures speed, reliability, and production quality."
                    className="mb-14 sm:mb-16"
                />

                {/* Horizontal 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {PROCESS_STEPS.map((step, idx) => (
                        <motion.div
                            key={step.num}
                            initial={mounted ? { opacity: 0, y: 24 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <div className="rounded-3xl bg-canvas border border-border-subtle p-6 sm:p-7 shadow-nova-sm hover:shadow-nova-lg hover:border-cobalt/30 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    {/* Card Header: Step Pill & Stepper Index (No Icons) */}
                                    <div className="flex items-center justify-between mb-15 sm:mb-20">
                                        <span className="text-xs font-mono font-bold text-cobalt bg-soft-blue px-3.5 py-1 rounded-full border border-cobalt/15">
                                            STEP {step.num}
                                        </span>
                                        <span className="text-xs font-mono text-text-muted font-semibold uppercase tracking-wider">
                                            PHASE 0{idx + 1}
                                        </span>
                                    </div>

                                    {/* Step Title & Description */}
                                    <h3 className="text-2xl font-semibold text-primary group-hover:text-cobalt transition-colors mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-secondary leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


