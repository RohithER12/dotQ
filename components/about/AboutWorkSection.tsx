'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import BrowserMockup from '@/components/ui/BrowserMockup';
import { CLIENTS } from '@/lib/constants';
import { ArrowUpRight, ArrowRight, ShoppingBag, Building2, Globe, Store, Compass, Sparkles } from 'lucide-react';

export default function AboutWorkSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Helper for rendering client preview visual
    const getClientVisual = (id: string, name: string, urlDisplay: string, fullUrl: string) => {
        switch (id) {
            case 'naiksha':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-indigo-50/80 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-cobalt font-bold">
                                <ShoppingBag className="w-4 h-4 text-cobalt" />
                                <span>Naiksha E-Commerce</span>
                            </div>
                            <div className="h-2 bg-soft-blue rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-2/3" />
                        </div>
                    </BrowserMockup>
                );
            case 'yugen-bags':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-amber-50/80 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-amber-600 font-bold">
                                <Store className="w-4 h-4 text-amber-600" />
                                <span>Yugen Bags Storefront</span>
                            </div>
                            <div className="h-2 bg-amber-100 rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-3/4" />
                        </div>
                    </BrowserMockup>
                );
            case 'fourteen-yards':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-zinc-100 to-white space-y-2 text-xs font-mono">
                            <div className="flex items-center gap-2 text-zinc-900 font-bold">
                                <Building2 className="w-4 h-4 text-zinc-800" />
                                <span>Fourteen Yards Studio</span>
                            </div>
                            <div className="h-2 bg-zinc-200 rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-1/2" />
                        </div>
                    </BrowserMockup>
                );
            default:
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-blue-50/80 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-cobalt font-bold">
                                <Globe className="w-4 h-4 text-cobalt" />
                                <span>{name}</span>
                            </div>
                            <div className="h-2 bg-soft-blue rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-3/4" />
                        </div>
                    </BrowserMockup>
                );
        }
    };

    return (
        <section className="py-20 sm:py-28 bg-canvas border-b border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20">
                    <SectionHeading
                        eyebrow="SELECTED WORK"
                        title="Products created for real-world challenges."
                        description="Genuine client applications and platforms engineered for performance, scale, and business impact."
                    />

                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-hover transition-colors group flex-shrink-0"
                    >
                        <span>View All Projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CLIENTS.slice(0, 3).map((client, idx) => (
                        <motion.div
                            key={client.id}
                            initial={mounted ? { opacity: 0, y: 25 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-nova-sm hover:shadow-nova-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
                        >
                            <div className="space-y-4">
                                {getClientVisual(client.id, client.name, client.displayUrl, client.url)}

                                <div className="space-y-2 pt-2">
                                    <span className="text-xs font-mono font-bold text-cobalt uppercase">
                                        {client.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-primary tracking-tight">
                                        {client.name}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        {client.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    {client.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="text-[11px] font-medium bg-canvas px-2.5 py-0.5 rounded-full border border-border-subtle text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={client.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-surface-subtle text-primary hover:bg-cobalt hover:text-white transition-colors flex-shrink-0"
                                    aria-label={`Visit ${client.name}`}
                                >
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
