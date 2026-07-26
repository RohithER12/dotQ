'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_WHY_DOTQ } from '@/lib/aboutData';
import { CheckCircle2 } from 'lucide-react';

export default function WhyDotQSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-[#F2F2F2] overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Heading & 4 Value Point Cards */}
                    <div className="lg:col-span-8 space-y-10">
                        <SectionHeading
                            eyebrow="WHY DOTQ"
                            title="Built around outcomes, not unnecessary complexity."
                            description="Four core commitments that define our engineering partnership with modern businesses."
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {ABOUT_WHY_DOTQ.map((point, idx) => (
                                <motion.div
                                    key={point.num}
                                    initial={mounted ? { opacity: 0, y: 20 } : false}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-border-subtle space-y-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-soft-blue flex items-center justify-center text-cobalt flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-cobalt" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-primary tracking-tight">
                                            {point.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-secondary leading-relaxed pl-11">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Standalone Purple Abstract Form */}
                    <div className="lg:col-span-4 flex justify-center items-center relative">
                        <motion.div
                            initial={mounted ? { opacity: 0, scale: 0.85 } : false}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full max-w-[320px] aspect-square flex justify-center items-center"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, -8, 0],
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="w-full h-full flex justify-center items-center"
                            >
                                {/* Distinctive Standalone Torus Graphic */}
                                <Image
                                    src="/assets/79Mtcw7fULA68U4TnlxZLxsbxo.avif"
                                    alt="DotQ Torus Visual"
                                    width={360}
                                    height={360}
                                    className="w-full h-auto object-contain drop-shadow-xl pointer-events-none select-none"
                                    draggable={false}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
