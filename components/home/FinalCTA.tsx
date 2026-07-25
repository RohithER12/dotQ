'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AbstractShape from '@/components/ui/AbstractShape';

export default function FinalCTA() {
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
                    <div className="absolute -top-12 -left-12 opacity-80 pointer-events-none hidden sm:block">
                        <AbstractShape variant="sphere" size={140} />
                    </div>
                    <div className="absolute -bottom-16 -right-16 opacity-80 pointer-events-none hidden sm:block">
                        <AbstractShape variant="torus" size={160} />
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                        <motion.span
                            initial={mounted ? { opacity: 0, y: 10 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-mono font-bold tracking-wider uppercase text-white"
                        >
                            GET STARTED WITH DOTQ
                        </motion.span>

                        <motion.h2
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight text-balance"
                        >
                            Ready for the next level?
                        </motion.h2>

                        <motion.p
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed text-balance max-w-xl mx-auto"
                        >
                            We don't just write code. We engineer success. Let's discuss your most complex challenge.
                        </motion.p>

                        <motion.div
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="pt-4"
                        >
                            <Button href="/contact" size="lg" variant="white">
                                Start Your Project
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
