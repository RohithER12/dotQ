'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ServicesHero() {
    const [mounted, setMounted] = useState(false);

    // Mouse movement parallax values for 3D element
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
        const x = (clientX - left - width / 2) / 12;
        const y = (clientY - top - height / 2) / 12;
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
            className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 bg-canvas overflow-hidden select-none"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cobalt/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Small Floating 3D Element in Left Bottom Corner */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 lg:left-16 block w-20 sm:w-28 lg:w-36 pointer-events-none select-none z-0 opacity-90"
            >
                <motion.div
                    animate={{
                        y: [0, -14, 0],
                        rotate: [0, 6, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Image
                        src="/assets/9RYAIENdwIJA09yuNFrc85YWG0.avif"
                        alt="Small Abstract 3D Element"
                        width={140}
                        height={140}
                        className="w-full h-auto object-contain drop-shadow-md pointer-events-none select-none"
                        draggable={false}
                        priority
                    />
                </motion.div>
            </motion.div>

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
                        <span>OUR SERVICES & CAPABILITIES</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-regular tracking-tight text-primary leading-[1.08] text-balance mx-auto"
                    >
                        Comprehensive IT, custom software & automation services.
                    </motion.h1>

                    {/* Supporting Paragraph */}
                    <motion.p
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg text-secondary max-w-2xl leading-relaxed text-balance mx-auto"
                    >
                        From cross-platform Flutter mobile applications and Next.js web systems to enterprise backend architecture, DevOps automation, and AI integrations.
                    </motion.p>

                    {/* Start Your Project CTA Button */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="pt-2 flex justify-center"
                    >
                        <Button href="/contact" size="lg" variant="primary" showArrow={true}>
                            Start Your Project
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
