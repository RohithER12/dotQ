'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ServiceDetail } from '@/lib/servicesData';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Props {
    service: ServiceDetail;
}

export default function ServiceDetailHero({ service }: Props) {
    const [mounted, setMounted] = useState(false);

    // Parallax mouse movements for ambient feel
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
        const x = (clientX - left - width / 2) / 16;
        const y = (clientY - top - height / 2) / 16;
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
            className="relative pt-10 sm:pt-14 pb-14 sm:pb-20 bg-canvas border-b border-border-subtle overflow-hidden select-none"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cobalt/8 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumbs */}
                <motion.nav
                    initial={mounted ? { opacity: 0, y: 10 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 text-xs font-medium text-secondary mb-8"
                    aria-label="Breadcrumb"
                >
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <Link href="/services" className="hover:text-primary transition-colors">
                        Services
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-primary font-semibold truncate max-w-[200px] sm:max-w-none">
                        {service.title}
                    </span>
                </motion.nav>

                <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
                    {/* Eyebrow Pill */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 12 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border-subtle text-primary text-xs font-semibold uppercase tracking-wider shadow-subtle"
                    >
                        <span className="w-2 h-2 rounded-full bg-cobalt" />
                        <span>SERVICE {service.num} • {service.badge}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={mounted ? { opacity: 0, y: 18 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-normal font-sans text-primary tracking-tight leading-[1.08] text-balance"
                    >
                        {service.title}
                    </motion.h1>


                    {/* Extended Description */}
                    <motion.p
                        initial={mounted ? { opacity: 0, y: 18 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed"
                    >
                        {service.heroDescription}
                    </motion.p>

                    {/* CTA Actions */}
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 18 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                    >
                        <Button href="/contact" size="lg" variant="primary" showArrow={true}>
                            Discuss This Service
                        </Button>
                        <Button href="/work" size="lg" variant="outline">
                            View Relevant Projects
                        </Button>
                    </motion.div>
                </div>

                {/* Key Statistics Grid */}
                <motion.div
                    initial={mounted ? { opacity: 0, y: 24 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-14 sm:mt-18 pt-10 border-t border-border-subtle"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {service.stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-5 sm:p-6 border border-border-subtle shadow-nova-sm flex flex-col justify-between"
                            >
                                <span className="text-xs font-mono font-medium text-secondary uppercase tracking-wider mb-2">
                                    {stat.label}
                                </span>
                                <div className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight mb-1">
                                    {stat.value}
                                </div>
                                <p className="text-xs text-secondary leading-snug">
                                    {stat.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
