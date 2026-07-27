'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck, ArrowUpRight, MapPin } from 'lucide-react';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

export default function ContactLeftGraphic() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative flex flex-col items-center lg:items-start justify-center h-full w-full">
            {/* Main 3D Element */}
            <motion.div
                initial={mounted ? { opacity: 0, scale: 0.85, x: -30 } : false}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mx-0"
            >
                <motion.div
                    animate={{
                        y: [0, -14, 0],
                        rotate: [0, 4, -2, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="w-full flex justify-center items-center"
                >
                    <Image
                        src="/assets/9RYAIENdwIJA09yuNFrc85YWG0.avif"
                        alt="DotQ 3D Abstract Shape"
                        width={420}
                        height={420}
                        className="w-full h-auto object-contain pointer-events-none select-none"
                        draggable={false}
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Quick Contact & Info Card Below Graphic */}
            <motion.div
                initial={mounted ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full max-w-2xl mt-6 space-y-4 text-left"
            >
                <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-border-subtle shadow-nova-sm space-y-3.5 w-full">
                    {/* Location / Headquarters */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 flex-shrink-0">
                            <MapPin className="w-5 h-5 text-cobalt" />
                        </div>
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-secondary">
                                Location / Headquarters
                            </span>
                            <span className="text-sm font-medium text-primary block">
                                {COMPANY.location}
                            </span>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-3 pt-2.5 border-t border-gray-200">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 flex-shrink-0">
                            <Phone className="w-5 h-5 text-cobalt" />
                        </div>
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-secondary">
                                Phone Number
                            </span>
                            <a
                                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                                className="text-sm font-medium text-primary hover:text-black transition-colors"
                            >
                                {COMPANY.phone}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-gray-200 text-xs text-secondary">
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />
                            <span>Response within 24h</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-zinc-700 flex-shrink-0" />
                            <span>NDA Available</span>
                        </div>
                    </div>
                </div>

                {/* Social Badges */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                    <span className="text-xs text-muted font-medium mr-1">Follow Us:</span>
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-border-subtle text-xs font-medium text-secondary hover:text-cobalt hover:border-cobalt/30 transition-all shadow-subtle"
                        >
                            <span>{social.name}</span>
                            <ArrowUpRight className="w-3 h-3 text-muted" />
                        </a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
