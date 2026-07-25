'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const pathD = "M 30,370 C 100,370 110,275 150,275 C 220,275 290,345 380,345 C 480,345 540,160 620,160 C 720,160 770,200 850,200 C 910,200 950,185 980,185";

    // 4 Steps positioning for desktop wave curve
    const desktopNodes = [
        {
            ...PROCESS_STEPS[0],
            dotLeft: '15%',
            dotTop: '275px',
            textLeft: '15%',
            textTop: '80px',
            align: 'top',
        },
        {
            ...PROCESS_STEPS[1],
            dotLeft: '38%',
            dotTop: '345px',
            textLeft: '38%',
            textTop: '375px',
            align: 'bottom',
        },
        {
            ...PROCESS_STEPS[2],
            dotLeft: '62%',
            dotTop: '160px',
            textLeft: '62%',
            textTop: '15px',
            align: 'top',
        },
        {
            ...PROCESS_STEPS[3],
            dotLeft: '85%',
            dotTop: '200px',
            textLeft: '85%',
            textTop: '235px',
            align: 'bottom',
        },
    ];

    return (
        <section id="process" className="py-20 sm:py-28 bg-white border-b border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR PROCESS"
                    title="How we turn complex problems into scalable products."
                    description="Our structured engineering delivery framework ensures speed, reliability, and production quality."
                    className="mb-16 sm:mb-20"
                />

                {/* Desktop Wave Timeline (Large Screens) */}
                <div className="hidden lg:block relative w-full h-[540px]">
                    {/* SVG Canvas for Guidelines & Animated Wave Curve */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                        viewBox="0 0 1000 540"
                        preserveAspectRatio="none"
                    >
                        {/* Vertical Dashed Guidelines */}
                        <line x1="150" y1="0" x2="150" y2="540" stroke="rgba(10,10,10,0.12)" strokeWidth="1.5" strokeDasharray="5 5" />
                        <line x1="380" y1="0" x2="380" y2="540" stroke="rgba(10,10,10,0.12)" strokeWidth="1.5" strokeDasharray="5 5" />
                        <line x1="620" y1="0" x2="620" y2="540" stroke="rgba(10,10,10,0.12)" strokeWidth="1.5" strokeDasharray="5 5" />
                        <line x1="850" y1="0" x2="850" y2="540" stroke="rgba(10,10,10,0.12)" strokeWidth="1.5" strokeDasharray="5 5" />

                        {/* Smooth Base Wave Curve Line */}
                        <path
                            d={pathD}
                            stroke="#E2E8F0"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Animated Flowing Energy Streak overlay */}
                        <motion.path
                            d={pathD}
                            stroke="#2442D7"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="120 800"
                            animate={{ strokeDashoffset: [920, -920] }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </svg>

                    {/* Nodes & Text Blocks Overlay */}
                    {desktopNodes.map((node, idx) => (
                        <React.Fragment key={node.num}>
                            {/* Animated Node Dot */}
                            <motion.div
                                initial={mounted ? { scale: 0, opacity: 0 } : false}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.15 }}
                                className="absolute w-4 h-4 rounded-full bg-cobalt ring-4 ring-white shadow-md z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                style={{ left: node.dotLeft, top: node.dotTop }}
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                                    className="absolute inset-0 rounded-full bg-cobalt"
                                />
                            </motion.div>

                            {/* Text Block with Continuous Gentle Floating Effect */}
                            <motion.div
                                initial={mounted ? { opacity: 0, y: node.align === 'top' ? -16 : 16 } : false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="absolute max-w-[250px] z-20 pl-4 border-l-2 border-cobalt"
                                style={{ left: node.textLeft, top: node.textTop }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 4.5 + idx * 0.4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: idx * 0.5,
                                    }}
                                >
                                    <h3 className="font-poppins font-semibold text-2xl text-primary tracking-tight mb-2">
                                        {node.title}
                                    </h3>
                                    <p className="font-poppins text-secondary text-sm leading-relaxed">
                                        {node.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile / Tablet Vertical Timeline (Small/Medium Screens) */}
                <div className="lg:hidden relative pl-6 border-l-2 border-dashed border-black/15 space-y-12">
                    {PROCESS_STEPS.map((step, idx) => (
                        <motion.div
                            key={step.num}
                            initial={mounted ? { opacity: 0, x: -16 } : false}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="relative pl-4 border-l-2 border-cobalt"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4 + idx * 0.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: idx * 0.5,
                                }}
                            >
                                {/* Blue Node Dot on left timeline */}
                                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cobalt ring-4 ring-white shadow-md" />

                                <h3 className="font-poppins font-bold text-xl text-primary tracking-tight mb-2">
                                    {step.title}
                                </h3>
                                <p className="font-poppins text-secondary text-sm sm:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
