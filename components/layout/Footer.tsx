'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_LINKS, COMPANY, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="mt-auto bg-[#121212] text-white pt-10 sm:pt-12 pb-6 w-full overflow-hidden select-none border-t border-white/10">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
                {/* Top Section: Description on Left, Links on Right */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-start">
                    {/* Top Left: Description Paragraph */}
                    <p className="text-sm sm:text-base text-zinc-400 max-w-sm sm:max-w-md leading-relaxed font-normal">
                        {COMPANY.description}
                    </p>

                    {/* Top Right: Extra Links & Social Media */}
                    <div className="flex items-start gap-16 sm:gap-24 lg:gap-32">
                        {/* Column 1: Extra links / Navigation */}
                        <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-medium text-zinc-200 tracking-wide">
                                Extra links
                            </h4>
                            <ul className="space-y-2.5">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Social Media */}
                        <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-medium text-zinc-200 tracking-wide">
                                Social Media
                            </h4>
                            <ul className="space-y-2.5">
                                {SOCIAL_LINKS.map((social) => (
                                    <li key={social.name}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
                                        >
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Contact on Left + Giant Typography on Right */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 overflow-hidden">
                    {/* Bottom Left: Contact Info */}
                    <div className="space-y-2.5 shrink-0 pb-1">
                        <h4 className="text-xs sm:text-sm font-medium text-zinc-200 tracking-wide">
                            Contact
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm text-zinc-400">
                            <p>{COMPANY.location}</p>
                            <p>
                                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                                    {COMPANY.email}
                                </a>
                            </p>
                            <p>
                                <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                                    {COMPANY.phone}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Bottom Right: Giant Typography aligned horizontally with Contact */}
                    <div className="w-full lg:w-auto flex items-end justify-start lg:justify-end pb-1 sm:pb-2">
                        <h2 className="text-[18vw] sm:text-[22vw] lg:text-[220px] xl:text-[260px] font-medium font-outfit text-white tracking-tight leading-[0.92] select-none whitespace-nowrap pr-2 sm:pr-4">
                            Dotq
                        </h2>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                    <p>{COMPANY.copyright}</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
