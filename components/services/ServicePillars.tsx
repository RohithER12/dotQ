'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ServicePillar } from '@/lib/servicesData';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface Props {
    pillars: ServicePillar[];
    serviceTitle: string;
}

export default function ServicePillars({ pillars, serviceTitle }: Props) {
    return (
        <section className="py-20 sm:py-28 bg-[#F4F4F6] border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CAPABILITIES & PILLARS"
                    title={`What We Deliver in ${serviceTitle}`}
                    description="Deep domain competence engineered with architectural precision and production-ready resilience."
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="bg-white rounded-3xl p-7 sm:p-9 border border-border-subtle shadow-nova-sm hover:shadow-nova-md transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-soft-blue flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                                        PILLAR 0{idx + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight mb-3">
                                    {pillar.title}
                                </h3>

                                <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6 font-normal">
                                    {pillar.description}
                                </p>
                            </div>

                            <div className="pt-5 border-t border-black/5 mt-auto space-y-2.5">
                                {pillar.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary">
                                        <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                                        <span className="font-medium text-primary">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
