'use client';

import React from 'react';
import { CLIENTS } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export default function ClientsMarquee() {
    // Duplicate items for infinite smooth marquee scrolling
    const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS];

    return (
        <section className="py-10 bg-canvas border-b border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-text-muted">
                    TRUSTED BY INNOVATIVE BRANDS & ENTERPRISES
                </p>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden marquee-container">
                {/* Gradient edge masks */}
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

                <div className="flex items-center gap-6 sm:gap-10 w-max animate-marquee marquee-content">
                    {marqueeItems.map((client, index) => (
                        <a
                            key={`${client.id}-${index}`}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-border-subtle hover:border-cobalt/40 hover:shadow-nova-sm transition-all group"
                        >
                            <span className="w-2 h-2 rounded-full bg-cobalt" />
                            <span className="text-sm font-bold text-text-primary group-hover:text-cobalt transition-colors">
                                {client.name}
                            </span>
                            <span className="text-[10px] text-text-muted font-mono bg-surface-subtle px-2 py-0.5 rounded-full border border-black/5">
                                {client.category}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-cobalt transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
