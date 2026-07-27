'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { CLIENTS } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedWork() {
    const pathname = usePathname();
    const isWorkPage = pathname ? (pathname.startsWith('/work') || pathname.startsWith('/works')) : false;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="work" className="py-20 sm:py-28 bg-[#F2F2F2]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CLIENT PORTFOLIO"
                    title="Our Clients & Selected Work"
                    description="Modern web platforms, e-commerce storefronts, and architectural portals engineered for high growth."
                    className="mb-12 sm:mb-16"
                />

                {/* Compact 2-Column Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
                    {CLIENTS.map((client, idx) => (
                        <motion.div
                            key={client.id}
                            initial={mounted ? { opacity: 0, y: 30 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                        >
                            <a
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full h-[280px] sm:h-[330px] md:h-[360px] rounded-[24px] sm:rounded-[28px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900"
                            >
                                {/* Top-Right Glass External Link Icon */}
                                <div className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-90 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-md">
                                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>

                                {/* Full-Bleed Atmospheric Project Image */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <img
                                        src={client.previewImage}
                                        alt={`${client.name} project preview`}
                                        className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Gradient Vignette Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none z-10" />

                                {/* Bottom Left Overlay: Title + Glass Pill Badges */}
                                <div className="absolute bottom-5 left-5 right-14 sm:bottom-6 sm:left-6 sm:right-16 z-20 space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white font-sans drop-shadow-md">
                                        {client.name}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {client.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3.5 py-1 rounded-full border border-white/35 bg-white/15 backdrop-blur-md text-xs font-medium text-white shadow-sm hover:bg-white/25 transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* View All Works CTA Button (Only shown on non-works pages e.g. Home) */}
                {!isWorkPage && (
                    <motion.div
                        initial={mounted ? { opacity: 0, y: 20 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 sm:mt-16 flex justify-center"
                    >
                        <Button href="/work" size="lg" variant="primary" showArrow={true}>
                            View All Selected Work
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
