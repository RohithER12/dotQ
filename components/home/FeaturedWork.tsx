'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import BrowserMockup from '@/components/ui/BrowserMockup';
import Button from '@/components/ui/Button';
import { CLIENTS } from '@/lib/constants';
import { ArrowRight, ArrowUpRight, ShoppingBag, Building2, Globe, Store, Compass, Sparkles } from 'lucide-react';

export default function FeaturedWork() {
    const pathname = usePathname();
    const isWorkPage = pathname ? (pathname.startsWith('/work') || pathname.startsWith('/works')) : false;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Render exact local screenshot visual per client inside BrowserMockup
    const getClientVisual = (id: string, name: string, urlDisplay: string) => {
        switch (id) {
            case 'naiksha':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/naiksha.png" title={name} className="w-full" />;
            case 'yugen-bags':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/yugen bags.png" title={name} className="w-full" />;
            case 'fourteen-yards':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/fourteen yards.png" title={name} className="w-full" />;
            case 'breta-world':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/breta world.png" title={name} className="w-full" />;
            case 'myson':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/myson.png" title={name} className="w-full" />;
            case 'kasera-interiors':
                return <BrowserMockup url={urlDisplay} previewImage="/Works IMG/kasera.png" title={name} className="w-full" />;
            default:
                return <BrowserMockup url={urlDisplay} title={name} className="w-full" />;
        }
    };

    return (
        <section id="work" className="py-20 sm:py-28 bg-[#F2F2F2]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CLIENT PORTFOLIO"
                    title="Our Clients & Selected Work"
                    description="Modern web platforms, e-commerce storefronts, and architectural portals engineered for high growth."
                    className="mb-14 sm:mb-20"
                />

                {/* 6 Client Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-8">
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
                                className="group block h-full flex flex-col justify-between cursor-pointer focus:outline-none"
                            >
                                {/* Top: Browser Mockup Preview */}
                                <div className="mb-3">
                                    {getClientVisual(client.id, client.name, client.displayUrl, client.url)}
                                </div>

                                {/* Bottom: Project Details */}
                                <div className="px-2 sm:px-3 space-y-2">
                                    <h3 className="font-poppins text-xl font-semibold text-primary">
                                        {client.name}
                                    </h3>
                                    <p className="font-poppins text-sm text-secondary leading-relaxed line-clamp-2">
                                        {client.description}
                                    </p>
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
                        className="mt-14 sm:mt-16 flex justify-center"
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

