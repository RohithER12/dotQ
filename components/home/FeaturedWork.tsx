'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import BrowserMockup from '@/components/ui/BrowserMockup';
import { CLIENTS } from '@/lib/constants';
import { ArrowRight, ArrowUpRight, ShoppingBag, Building2, Globe, Store, Compass, Sparkles } from 'lucide-react';

export default function FeaturedWork() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Custom visual icons & accents per client
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
            case 'breta-world':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-blue-50/80 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-blue-600 font-bold">
                                <Globe className="w-4 h-4 text-blue-600" />
                                <span>Breta World Portal</span>
                            </div>
                            <div className="h-2 bg-blue-100 rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-4/5" />
                        </div>
                    </BrowserMockup>
                );
            case 'myson':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-emerald-50/80 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-emerald-600 font-bold">
                                <Compass className="w-4 h-4 text-emerald-600" />
                                <span>Myson Digital Presence</span>
                            </div>
                            <div className="h-2 bg-emerald-100 rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-3/5" />
                        </div>
                    </BrowserMockup>
                );
            case 'kasera-interiors':
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-gradient-to-br from-stone-100/90 to-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-stone-800 font-bold">
                                <Sparkles className="w-4 h-4 text-amber-700" />
                                <span>Kasera Interiors Portfolio</span>
                            </div>
                            <div className="h-2 bg-stone-200 rounded w-full" />
                            <div className="h-2 bg-zinc-100 rounded w-2/3" />
                        </div>
                    </BrowserMockup>
                );
            default:
                return (
                    <BrowserMockup url={urlDisplay} liveUrl={fullUrl} title={name} className="w-full">
                        <div className="p-4 bg-white space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-cobalt font-bold">
                                <Globe className="w-4 h-4 text-cobalt" />
                                <span>{name}</span>
                            </div>
                            <div className="h-2 bg-soft-blue rounded w-full" />
                        </div>
                    </BrowserMockup>
                );
        }
    };

    return (
        <section id="work" className="py-20 sm:py-28 bg-white border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CLIENT PORTFOLIO"
                    title="Our Clients & Selected Work"
                    description="Modern web platforms, e-commerce storefronts, and architectural portals engineered for high growth."
                    className="mb-14 sm:mb-20"
                />

                {/* 6 Client Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                                className="group block rounded-3xl bg-canvas border border-border-subtle p-6 shadow-nova-sm hover:shadow-nova-lg hover:border-cobalt/30 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-cobalt"
                            >
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-end min-h-[26px]">
                                        <div className="flex items-center gap-1 text-xs font-mono text-muted group-hover:text-cobalt transition-colors">
                                            <span>Visit</span>
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-primary group-hover:text-cobalt transition-colors">
                                        {client.name}
                                    </h3>

                                    <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                                        {client.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {client.tags.map((tag) => (
                                            <span key={tag} className="text-[11px] font-medium bg-white px-2.5 py-0.5 rounded-full border border-border-subtle text-muted">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Browser Mockup Preview */}
                                <div className="pt-2">
                                    {getClientVisual(client.id, client.name, client.displayUrl, client.url)}
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

