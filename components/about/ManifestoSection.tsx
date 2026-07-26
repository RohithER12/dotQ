'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ABOUT_MANIFESTO } from '@/lib/aboutData';

export default function ManifestoSection() {
    const [mounted, setMounted] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-24 sm:py-32 bg-white border-y border-border-subtle overflow-hidden select-none">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <div className="space-y-8 sm:space-y-12">
                    {/* Part 1: Headline */}
                    <motion.h2
                        initial={mounted && !prefersReducedMotion ? { opacity: 0.3, y: 20 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-primary leading-[1.12]"
                    >
                        {ABOUT_MANIFESTO.part1}
                    </motion.h2>

                    {/* Part 2: Body Core Statement */}
                    <motion.p
                        initial={mounted && !prefersReducedMotion ? { opacity: 0.3, y: 20 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-sans text-2xl sm:text-4xl md:text-5xl font-regular tracking-tight text-secondary leading-[1.2] text-balance"
                    >
                        {ABOUT_MANIFESTO.part2}
                    </motion.p>

                    {/* Part 3: Conclusion */}
                    <motion.p
                        initial={mounted && !prefersReducedMotion ? { opacity: 0.3, y: 20 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-sans text-xl sm:text-3xl font-regular tracking-tight text-muted leading-relaxed max-w-3xl"
                    >
                        {ABOUT_MANIFESTO.part3}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
