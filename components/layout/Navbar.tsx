'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && !link.href.includes('#') && pathname?.startsWith(link.href));
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm transition-colors ${isActive ? 'text-cobalt font-semibold' : 'text-black font-medium hover:text-cobalt'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right: Action Link & Mobile View Icons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden sm:block">
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-primary hover:text-cobalt transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* Mobile Phone Call Action Icon */}
                        <Link
                            href="/contact"
                            className="md:hidden p-2 rounded-lg text-primary hover:bg-black/5 transition-colors flex items-center justify-center"
                            aria-label="Contact us"
                        >
                            <PhoneCall className="w-6 h-6 text-primary" />
                        </Link>

                        {/* Mobile 2-line Hamburger Menu Icon (=) */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-lg text-primary hover:bg-black/5 transition-colors flex items-center justify-center"
                            aria-label="Open navigation menu"
                        >
                            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <line x1="3" y1="14.5" x2="21" y2="14.5" />
                            </svg>
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
