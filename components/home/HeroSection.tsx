'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    // Mouse movement parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Inverse parallax for right asset for 3D depth effect
    const springRightX = useTransform(springX, (val) => -val * 1.2);
    const springRightY = useTransform(springY, (val) => -val * 1.2);

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
            className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-canvas select-none"
        >
            {/* Left Floating 3D Asset */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-12 sm:top-16 left-3 sm:left-6 lg:left-12 block w-24 sm:w-36 lg:w-44 pointer-events-none select-none z-0 opacity-90"
            >
                <motion.div
                    animate={{
                        y: [0, -18, 0],
                        rotate: [0, 8, 0],
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Image
                        src="/assets/79Mtcw7fULA68U4TnlxZLxsbxo.avif"
                        alt="Abstract 3D Shape Left"
                        width={180}
                        height={180}
                        className="w-full h-auto object-contain drop-shadow-md pointer-events-none select-none"
                        draggable={false}
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Right Floating 3D Asset */}
            <motion.div
                style={{ x: springRightX, y: springRightY }}
                className="absolute top-28 sm:top-36 md:top-40 lg:top-48 right-3 sm:right-6 lg:right-12 block w-24 sm:w-36 lg:w-44 pointer-events-none select-none z-0 opacity-90"
            >
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -9, 0],
                    }}
                    transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4,
                    }}
                >
                    <Image
                        src="/assets/9RYAIENdwIJA09yuNFrc85YWG0.avif"
                        alt="Abstract 3D Shape Right"
                        width={180}
                        height={180}
                        className="w-full h-auto object-contain drop-shadow-md pointer-events-none select-none"
                        draggable={false}
                        priority
                    />
                </motion.div>
            </motion.div>

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 select-none">
                {/* Eyebrow Announcement Text */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-5 sm:mb-6"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors group select-none"
                    >
                        <span>DOTQ IT SERVICES — ENGINEERING THE IMPOSSIBLE</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Main Hero Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-sans font-medium text-3xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-text-primary max-w-4xl mx-auto leading-[1.08] text-balance mb-5 sm:mb-6 select-none"
                >
                    Automation and custom software engineered to scale
                </motion.h1>

                {/* Subheading Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto font-normal leading-relaxed text-balance mb-8 sm:mb-10 select-none"
                >
                    Web development, automation, and custom software engineered for modern businesses.
                </motion.p>

                {/* Single Cobalt Pill CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cobalt text-white font-medium text-sm sm:text-base hover:bg-cobalt-hover shadow-nova-sm hover:shadow-cobalt-glow transition-all duration-300 group select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-2"
                    >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

