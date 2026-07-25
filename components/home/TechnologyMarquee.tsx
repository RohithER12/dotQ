'use client';

import React from 'react';
import { TECH_STACK } from '@/lib/constants';

export default function TechnologyMarquee() {
    // Duplicate stack items to ensure seamless 100% infinite scroll
    const marqueeItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

    return (
        <section className="py-12 bg-white border-y border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Technology built for modern businesses
                </p>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden marquee-container">
                {/* Fade edges gradient masks */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex items-center gap-8 sm:gap-12 w-max animate-marquee marquee-content">
                    {marqueeItems.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-subtle border border-border-subtle hover:border-cobalt/30 transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-cobalt" />
                            <span className="text-sm font-semibold text-text-primary tracking-tight">
                                {tech.name}
                            </span>
                            <span className="text-[10px] text-text-muted font-mono uppercase bg-white px-2 py-0.5 rounded border border-black/5">
                                {tech.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
