'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AbstractShape from '@/components/ui/AbstractShape';
import { ABOUT_CTA_DATA } from '@/lib/aboutData';

export default function AboutCTA() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-canvas relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cobalt Rounded Callout Container */}
                <div className="relative rounded-4xl bg-cobalt p-10 sm:p-16 md:p-20 text-center text-white shadow-cobalt-glow overflow-hidden">
                    {/* Abstract Floating Shapes */}
                    <div className="absolute -top-12 -left-12 opacity-70 pointer-events-none hidden sm:block">
                        <AbstractShape variant="sphere" size={150} />
                    </div>
                    <div className="absolute -bottom-16 -right-16 opacity-70 pointer-events-none hidden sm:block">
                        <AbstractShape variant="torus" size={170} />
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                        {/* Section Eyebrow Pill */}
                        <motion.span
                            initial={mounted ? { opacity: 0, y: 10 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-mono font-bold tracking-wider uppercase text-white"
                        >
                            {ABOUT_CTA_DATA.eyebrow}
                        </motion.span>

                        {/* Main Callout Heading */}
                        <motion.h2
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight text-balance"
                        >
                            {ABOUT_CTA_DATA.title}
                        </motion.h2>

                        {/* Supporting Paragraph */}
                        <motion.p
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed text-balance max-w-xl mx-auto"
                        >
                            {ABOUT_CTA_DATA.description}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button href={ABOUT_CTA_DATA.primaryBtn.href} size="lg" variant="white" showArrow={true}>
                                {ABOUT_CTA_DATA.primaryBtn.text}
                            </Button>

                            <Button href={ABOUT_CTA_DATA.secondaryBtn.href} size="lg" variant="outline" showArrow={false} className="border-white/30 text-white hover:bg-white/10">
                                {ABOUT_CTA_DATA.secondaryBtn.text}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
