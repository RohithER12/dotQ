'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_TECH_STACK } from '@/lib/aboutData';

export default function TechnologySection() {
    const prefersReducedMotion = useReducedMotion();
    const marqueeItems = [...ABOUT_TECH_STACK, ...ABOUT_TECH_STACK];

    return (
        <section className="py-16 sm:py-24 bg-white border-y border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <SectionHeading
                    eyebrow="OUR TECH STACK"
                    title="Modern technology, selected with purpose."
                    description="We engineer applications and platforms using resilient, battle-tested modern tools."
                />
            </div>

            {/* Infinite Marquee Wrapper with Pause-on-Hover */}
            <div className="relative w-full overflow-hidden group">
                {/* Edge Fades */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                    className={`flex items-center gap-6 sm:gap-8 w-max ${
                        prefersReducedMotion ? 'flex-wrap justify-center max-w-[1240px] mx-auto px-4' : 'animate-marquee group-hover:[animation-play-state:paused]'
                    }`}
                >
                    {marqueeItems.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface-subtle border border-border-subtle hover:border-cobalt/30 transition-all shadow-subtle"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt" />
                            <span className="text-base font-semibold text-primary tracking-tight">
                                {tech.name}
                            </span>
                            <span className="text-[10px] font-mono uppercase text-secondary bg-white px-2.5 py-0.5 rounded-full border border-black/5">
                                {tech.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
