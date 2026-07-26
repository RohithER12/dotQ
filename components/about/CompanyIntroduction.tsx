'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_INTRO } from '@/lib/aboutData';

export default function CompanyIntroduction() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-white border-y border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Large Editorial Text */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                        <SectionHeading
                            eyebrow={ABOUT_INTRO.eyebrow}
                            title={ABOUT_INTRO.title}
                            align="left"
                        />

                        <div className="space-y-5 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl font-normal">
                            {ABOUT_INTRO.bodyParagraphs.map((para, idx) => (
                                <motion.p
                                    key={idx}
                                    initial={mounted ? { opacity: 0, y: 15 } : false}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Separate Glossy Wave / Ribbon Visual */}
                    <div className="lg:col-span-5 flex justify-center items-center relative">
                        <motion.div
                            initial={mounted ? { opacity: 0, scale: 0.9 } : false}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full max-w-[360px] aspect-square bg-surface-subtle p-8 rounded-3xl border border-border-subtle shadow-nova-md flex flex-col items-center justify-center overflow-hidden"
                        >
                            {/* Ambient Flowing Ribbon Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/5 via-purple-500/10 to-transparent pointer-events-none" />

                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="w-48 h-48 rounded-full border-2 border-dashed border-cobalt/30 flex items-center justify-center p-4 relative"
                            >
                                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cobalt to-purple-600 opacity-90 shadow-cobalt-glow flex items-center justify-center text-white font-mono text-xs font-bold tracking-widest uppercase">
                                    DOTQ MATRIX
                                </div>
                            </motion.div>

                            <p className="text-xs font-mono text-muted uppercase tracking-wider mt-6 relative z-10">
                                Product • Architecture • Code
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
