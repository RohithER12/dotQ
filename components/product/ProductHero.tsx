'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ProductHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 bg-canvas overflow-hidden select-none">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
                        <span>PROPRIETARY SOFTWARE PRODUCTS</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-regular tracking-tight text-primary leading-[1.08] text-balance mx-auto"
                    >
                        Proprietary platforms engineered for modern scale.
                    </motion.h1>

                    {/* Supporting Paragraph */}
                    <motion.p
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed text-balance mx-auto"
                    >
                        Beyond bespoke engineering services, DotQ designs and incubates foundational software platforms—solving systemic operational bottlenecks from multi-tenant storefront infrastructure to conversational commerce OS.
                    </motion.p>

                    {/* Action CTA Buttons */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                    >
                        <Button href="/contact" size="lg" variant="primary" showArrow={true}>
                            Start Your Project
                        </Button>
                        <a
                            href="#goforge"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border-subtle text-primary text-sm font-medium hover:border-zinc-400 hover:bg-zinc-50 transition-all shadow-subtle cursor-pointer"
                        >
                            <span>Explore Platforms</span>
                            <ArrowRight className="w-4 h-4 text-zinc-500" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
