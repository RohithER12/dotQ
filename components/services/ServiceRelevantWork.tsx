'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { CLIENTS } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

interface Props {
    relatedClientIds: string[];
    serviceTitle: string;
}

export default function ServiceRelevantWork({ relatedClientIds, serviceTitle }: Props) {
    const matchedClients = CLIENTS.filter((c) => relatedClientIds.includes(c.id));
    const displayClients = matchedClients.length > 0 ? matchedClients : CLIENTS.slice(0, 3);

    return (
        <section className="py-20 sm:py-28 bg-canvas border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
                    <SectionHeading
                        eyebrow="PROVEN IN PRODUCTION"
                        title="Selected Work in This Domain"
                        description={`Live platforms, apps, and digital systems engineered with our ${serviceTitle} capabilities.`}
                    />

                    <Button href="/work" variant="outline" size="md" showArrow={true} className="flex-shrink-0 self-start sm:self-auto">
                        View All Projects
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {displayClients.map((client, idx) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <a
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full h-[280px] sm:h-[320px] rounded-[24px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-slate-900"
                            >
                                {/* Top-Right Glass External Link Icon */}
                                <div className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white opacity-90 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-md">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>

                                {/* Preview Image */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <Image
                                        src={client.previewImage}
                                        alt={`${client.name} preview`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="w-full h-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Vignette Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none z-10" />

                                {/* Bottom Info */}
                                <div className="absolute bottom-5 left-5 right-12 z-20 space-y-1.5">
                                    <span className="text-[11px] font-mono font-bold text-soft-blue uppercase tracking-wider">
                                        {client.category}
                                    </span>
                                    <h3 className="text-xl font-medium tracking-tight text-white font-sans drop-shadow-md">
                                        {client.name}
                                    </h3>
                                    <p className="text-xs text-zinc-300 line-clamp-1">
                                        {client.description}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
