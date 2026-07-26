'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { ABOUT_HERO } from '@/lib/aboutData';

export default function AboutHero() {
    const [mounted, setMounted] = useState(false);

    // Mouse movement parallax values for 3D element (pure translation, no stretching)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 10;
        const y = (clientY - top - height / 2) / 10;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 bg-canvas overflow-hidden select-none"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-cobalt/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
                        {/* Section Eyebrow Pill */}
                        <motion.div
                            initial={mounted ? { opacity: 0, y: 10 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border-subtle text-primary text-xs font-semibold uppercase tracking-wider shadow-subtle"
                        >
                            <span className="w-2 h-2 rounded-full bg-cobalt" />
                            <span>{ABOUT_HERO.eyebrow}</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-regular tracking-tight text-primary leading-[1.08] text-balance"
                        >
                            {ABOUT_HERO.title}
                        </motion.h1>

                        {/* Supporting Paragraph */}
                        <motion.p
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed text-balance"
                        >
                            {ABOUT_HERO.description}
                        </motion.p>

                        {/* CTA Action Buttons */}
                        <motion.div
                            initial={mounted ? { opacity: 0, y: 20 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                        >
                            <Button href={ABOUT_HERO.primaryCta.href} size="lg" variant="primary" showArrow={true}>
                                {ABOUT_HERO.primaryCta.text}
                            </Button>

                            <Button href={ABOUT_HERO.secondaryCta.href} size="lg" variant="outline" showArrow={false}>
                                {ABOUT_HERO.secondaryCta.text}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: Standalone 3D Abstract Visual with Mouse Parallax Physics */}
                    <div className="lg:col-span-5 flex items-center justify-center relative">
                        <motion.div
                            style={{ x: springX, y: springY }}
                            initial={mounted ? { opacity: 0, scale: 0.85, x: 30 } : false}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[300px] sm:max-w-[370px] lg:max-w-[440px] aspect-square flex items-center justify-center"
                        >
                            {/* Floating Motion Wrapper */}
                            <motion.div
                                animate={{
                                    y: [0, -18, 0],
                                    rotate: [0, 6, -3, 0],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="w-full h-full flex justify-center items-center relative"
                            >
                                <Image
                                    src="/assets/58DxpO9Ivj291a7WH2rHdslcc.avif"
                                    alt="DotQ About Abstract Visual"
                                    width={480}
                                    height={480}
                                    className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none select-none"
                                    draggable={false}
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
