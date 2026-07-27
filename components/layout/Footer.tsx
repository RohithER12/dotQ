'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NAV_LINKS, COMPANY, SOCIAL_LINKS, SERVICES } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const waveText = "Dotq Automation";

    return (
        <footer className="mt-auto border-t border-white/10 bg-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
            <div className="max-w-[1240px] mx-auto">
                {/* Top Section: 4 Main Columns with Generous Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 xl:gap-20 pb-14">
                    {/* Column 1: Brand & Description */}
                    <div className="md:col-span-4 space-y-4">
                        <Link href="/" className="inline-block group mb-1">
                            <Image
                                src="/assets/dot%20q.png"
                                alt="DotQ Logo"
                                width={140}
                                height={42}
                                className="h-10 sm:h-9 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <div className="space-y-1">
                            <p className="text-base sm:text-sm text-white font-light tracking-tight">
                                Engineering The Impossible.
                            </p>
                        </div>

                        <p className="text-sm sm:text-xs text-zinc-400 max-w-sm leading-relaxed pt-1">
                            Premier IT company in India offering freelance services, web development, mobile app development with Flutter, e-commerce solutions, and custom software for global enterprises.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="md:col-span-2 space-y-4 md:pl-2">
                        <h4 className="text-xs sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-400">
                            NAVIGATION
                        </h4>
                        <ul className="space-y-4 sm:space-y-3.5">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base sm:text-sm text-zinc-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="md:col-span-3 space-y-4 md:pl-2">
                        <h4 className="text-xs sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-400">
                            SERVICES
                        </h4>
                        <ul className="space-y-4 sm:space-y-3.5">
                            {SERVICES.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href="/#services"
                                        className="text-base sm:text-sm text-zinc-300 hover:text-white transition-colors block"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div className="md:col-span-3 space-y-4 md:pl-2">
                        <h4 className="text-xs sm:text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-400">
                            CONNECT
                        </h4>
                        <ul className="space-y-4 sm:space-y-3.5">
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base sm:text-sm text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                                    >
                                        <span>{social.name}</span>
                                        <ArrowUpRight className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2 space-y-1">
                            <p className="text-xs text-zinc-500">Headquarters:</p>
                            <p className="text-sm sm:text-xs text-zinc-300 font-medium">
                                {COMPANY.location}
                            </p>
                        </div>

                        <div className="pt-1 space-y-1">
                            <p className="text-xs text-zinc-500">Phone Enquiry:</p>
                            <a
                                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                                className="text-sm sm:text-xs font-mono text-[#3B82F6] hover:underline block"
                            >
                                {COMPANY.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Giant Full-Width Typography Banner with Wave Animation */}
                <div className="pt-10 pb-8 overflow-hidden select-none flex items-center justify-center">
                    <h2 className="text-[11.5vw] xl:text-[160px] font-normal tracking-tight text-white leading-none font-sans text-center whitespace-nowrap w-full flex items-center justify-center">
                        {waveText.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                animate={{
                                    y: [0, -18, 0],
                                    opacity: [0.15, 0.5, 0.15],
                                }}
                                transition={{
                                    duration: 4.8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: index * 0.22,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-xs text-zinc-400">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center text-xs sm:text-[10px] font-bold text-white">
                            N
                        </div>
                        <p>{COMPANY.copyright}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
