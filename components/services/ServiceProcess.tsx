'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ServiceProcessStep } from '@/lib/servicesData';
import { Clock } from 'lucide-react';

interface Props {
    process: ServiceProcessStep[];
}

export default function ServiceProcess({ process }: Props) {
    return (
        <section className="py-20 sm:py-28 bg-canvas border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="EXECUTION ROADMAP"
                    title="Our Engineering Process"
                    description="Transparent, structured execution phases that keep your project on schedule and aligned with strategic business targets."
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {process.map((step, idx) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-nova-sm flex flex-col justify-between h-full group hover:shadow-nova-md transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl sm:text-4xl font-mono font-bold text-cobalt/80">
                                        {step.step}
                                    </span>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-soft-blue text-cobalt text-xs font-semibold">
                                        <Clock className="w-3 h-3" />
                                        <span>{step.timeframe}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-primary tracking-tight">
                                    {step.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
                                    {step.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-black/5 mt-6">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                                    Phase 0{idx + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
