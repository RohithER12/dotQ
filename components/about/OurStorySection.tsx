'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_STORY } from '@/lib/aboutData';

// Animated Counter component that counts up when scrolled into view
function AnimatedCounter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });
    const [displayVal, setDisplayVal] = useState('0');

    useEffect(() => {
        if (!isInView) return;

        const match = value.match(/([\d.]+)(.*)/);
        if (!match) {
            setDisplayVal(value);
            return;
        }

        const target = parseFloat(match[1]);
        const suffix = match[2] || '';
        const isDecimal = match[1].includes('.');
        const duration = 1800; // 1.8s count up animation duration
        const startTime = performance.now();

        const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Smooth easeOutCubic curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNumber = target * easeProgress;

            if (isDecimal) {
                setDisplayVal(`${currentNumber.toFixed(1)}${suffix}`);
            } else {
                setDisplayVal(`${Math.floor(currentNumber)}${suffix}`);
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setDisplayVal(value);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isInView, value]);

    return <span ref={ref}>{displayVal}</span>;
}

export default function OurStorySection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 sm:py-28 bg-white border-y border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header & Story Text */}
                <div className="max-w-3xl space-y-6 mb-12 sm:mb-16 text-left">
                    <SectionHeading
                        eyebrow={ABOUT_STORY.eyebrow}
                        title={ABOUT_STORY.title}
                        align="left"
                    />

                    <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed font-normal">
                        {ABOUT_STORY.bodyParagraphs.map((para, idx) => (
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

                {/* Minimalist Unboxed Stat Numbers with Smooth Count Up Animation */}
                <div className="pt-10 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                    {ABOUT_STORY.stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={mounted ? { opacity: 0, y: 15 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="space-y-1"
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-primary tracking-tight">
                                <AnimatedCounter value={stat.value} />
                            </div>
                            <p className="text-base sm:text-lg font-regular text-secondary tracking-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
