'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const STEPS = [
    { title: 'Discovery', description: 'We dive deep into your architecture, identifying bottlenecks and opportunities.' },
    { title: 'Strategy', description: 'We engineer a roadmap that solves complex problems with elegant code.' },
    { title: 'Execution', description: 'Agile development with rigorous testing and pixel-perfect implementation.' },
    { title: 'Scale', description: 'Optimization for millions of users, ensuring 99.99% uptime.' }
];

export default function Process() {
    return (
        <SectionWrapper id="process" dark>
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="How We Work" subtitle="Our Process" />

                <div className="relative mt-20">
                    {/* Connecting Line - Desktop */}
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/0 via-brand-primary/50 to-brand-primary/0 hidden md:block" />

                    {/* Connecting Line - Mobile */}
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-brand-primary/0 via-brand-primary/50 to-brand-primary/0 md:hidden" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative group pl-24 md:pl-0 md:pt-20"
                            >
                                {/* Step Number Node */}
                                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-dark border-4 border-brand-primary/20 group-hover:border-brand-primary z-10 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    <span className="text-xl md:text-2xl font-bold font-display text-white">{index + 1}</span>
                                </div>

                                {/* Pulse Effect */}
                                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-primary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="text-left md:text-center p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
