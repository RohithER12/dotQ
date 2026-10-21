'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ShieldCheck, Clock, Zap, ArrowRight } from 'lucide-react';

export default function TechnologyCta() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-canvas select-none">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl bg-zinc-950 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-nova-lg border border-zinc-800">
                    {/* Ambient Glows inside CTA banner */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt/25 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
                        <motion.div
                            initial={mounted ? { opacity: 0, y: 10 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200 text-xs font-mono uppercase tracking-wider"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                            <span>ENGINEERING CONSULTATION &amp; ADVISORY</span>
                        </motion.div>

                        <motion.h2
                            initial={mounted ? { opacity: 0, y: 15 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-white leading-[1.12]"
                        >
                            Build your next platform on hardened architecture.
                        </motion.h2>

                        <motion.p
                            initial={mounted ? { opacity: 0, y: 15 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal"
                        >
                            Whether you need multi-tenant commerce infrastructure, high-throughput microservices, event-driven streaming, or cloud modernization—DotQ delivers production-hardened solutions tailored to your operational scale.
                        </motion.p>

                        <motion.div
                            initial={mounted ? { opacity: 0, y: 15 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-2 flex flex-wrap items-center gap-4"
                        >
                            <Button href="/contact" size="lg" variant="primary" showArrow={true}>
                                Start Technical Discussion
                            </Button>
                            <Button href="/product" size="lg" variant="secondary">
                                View Proprietary Products
                            </Button>
                        </motion.div>

                        {/* Assurance Badges */}
                        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-zinc-400">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-cobalt" />
                                <span>24-Hour Architecture Response</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-cobalt" />
                                <span>Mutual NDA Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-cobalt" />
                                <span>Direct Senior Technical Leads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
