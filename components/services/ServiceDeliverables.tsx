'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Check, ShieldCheck } from 'lucide-react';

interface Props {
    deliverables: string[];
    serviceTitle: string;
}

export default function ServiceDeliverables({ deliverables, serviceTitle }: Props) {
    return (
        <section className="py-20 sm:py-28 bg-[#121215] text-white border-b border-white/10">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="TANGIBLE DELIVERABLES"
                    title={`What You Receive with ${serviceTitle}`}
                    description="Zero ambiguity. Complete source code ownership, enterprise documentation, and production readiness guaranteed."
                    dark={true}
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverables.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="rounded-2xl p-6 sm:p-7 bg-[#1A1A1F] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4"
                        >
                            <div className="w-9 h-9 rounded-xl bg-cobalt/20 border border-cobalt/40 flex items-center justify-center text-cobalt flex-shrink-0 mt-0.5">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
                                    DELIVERABLE 0{idx + 1}
                                </span>
                                <p className="text-sm sm:text-base font-medium text-white leading-snug">
                                    {item}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
