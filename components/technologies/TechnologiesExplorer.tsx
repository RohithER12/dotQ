'use client';

import React from 'react';
import Image from 'next/image';
import { TECHNOLOGY_SECTIONS } from '@/lib/technologiesData';

export default function TechnologiesExplorer() {
    return (
        <section id="technology-stack" className="py-16 sm:py-24 bg-canvas scroll-mt-20">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">

                {/* Technology Logo Grids (Organized by Category Sections) */}
                <div className="space-y-12 sm:space-y-16">
                    {TECHNOLOGY_SECTIONS.map((section) => (
                        <div key={section.id} className="space-y-5">
                            {/* Category Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                                <h3 className="text-xl sm:text-2xl font-semibold font-sans text-primary tracking-tight">
                                    {section.title}
                                </h3>
                                <span className="text-xs font-mono text-zinc-400">
                                    {section.technologies.length} tools
                                </span>
                            </div>

                            {/* Clean Logo Tiles Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-5">
                                {section.technologies.map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-nova-md hover:border-zinc-300 transition-all duration-300 aspect-[4/3] select-none"
                                    >
                                        {/* Vector Logo Image */}
                                        <div className="relative w-full h-11 sm:h-12 flex items-center justify-center">
                                            <Image
                                                src={tech.logo}
                                                alt={tech.alt}
                                                width={110}
                                                height={48}
                                                className="max-h-11 sm:max-h-12 w-auto max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Technology Name */}
                                        <span className="text-xs font-medium text-zinc-700 group-hover:text-primary transition-colors mt-3 text-center truncate w-full px-1">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
