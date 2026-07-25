'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 w-full bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-4 transition-all duration-300">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Left: Only Brand Logo (Company name text removed) */}
                    <Link href="/" className="flex items-center group focus:outline-none rounded-lg">
                        <div className="relative h-8 sm:h-9 w-auto flex items-center">
                            <Image
                                src="/assets/dot%20q%20Logo.png"
                                alt="DotQ Logo"
                                width={120}
                                height={36}
                                className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Centre Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-black hover:text-cobalt transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Plain Text Action Link with Arrow */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-primary hover:text-cobalt transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-lg text-primary hover:bg-black/5 transition-colors"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
}
