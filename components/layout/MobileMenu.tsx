'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Available drawer menu items matching site structure
    const drawerItems = [
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            subItems: [
                { name: 'All Services', href: '/services' },
                { name: 'Web & Mobile App Development', href: '/services/web-mobile-dev' },
                { name: 'Custom Backend & Microservices', href: '/services/custom-backend' },
                { name: 'E-Commerce Solutions', href: '/services/ecommerce-dev' },
                { name: 'Business Automation', href: '/services/business-automation' },
                { name: 'Performance Engineering', href: '/services/performance-engineering' },
                { name: 'AI Integration', href: '/services/ai-integration' },
                { name: 'Digital Marketing', href: '/services/digital-marketing' },
            ],
        },
        { name: 'Product', href: '/product' },
        { name: 'Works', href: '/work' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 overflow-y-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation Menu"
                    >
                        <div>
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-6 mb-2 border-b border-black/10">
                                <Link href="/" onClick={onClose} className="focus:outline-none">
                                    <Image
                                        src="/assets/dot%20q%20Logo.png"
                                        alt="DotQ Logo"
                                        width={110}
                                        height={32}
                                        className="h-7 sm:h-8 w-auto object-contain"
                                        priority
                                    />
                                </Link>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-black/5 text-primary transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav List Stack matching reference image */}
                            <div className="flex flex-col divide-y divide-black/10">
                                {drawerItems.map((item) => (
                                    <div key={item.name} className="py-0.5">
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => setServicesExpanded(!servicesExpanded)}
                                                    className="w-full py-4 px-1 flex items-center justify-between font-poppins text-lg font-normal text-[#1A1A1A] hover:text-cobalt transition-colors text-left"
                                                >
                                                    <span>{item.name}</span>
                                                    {servicesExpanded ? (
                                                        <ChevronUp className="w-5 h-5 text-black/60 stroke-[1.5]" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-black/60 stroke-[1.5]" />
                                                    )}
                                                </button>

                                                {/* Expanded Sub-items */}
                                                <AnimatePresence>
                                                    {servicesExpanded && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pl-4 pb-3 space-y-2.5 overflow-hidden"
                                                        >
                                                            {item.subItems?.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    onClick={onClose}
                                                                    className="block font-poppins text-sm text-secondary hover:text-cobalt py-1.5 transition-colors"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="block py-4 px-1 font-poppins text-lg font-normal text-[#1A1A1A] hover:text-cobalt transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Drawer Footer CTA */}
                        <div className="pt-6 mt-6 border-t border-black/10 space-y-4">
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="w-full py-4 rounded-full bg-cobalt text-white font-poppins font-medium text-center text-base flex items-center justify-center gap-2 shadow-cobalt-glow hover:bg-cobalt/95 transition-all"
                            >
                                <span>Start Your Project</span>
                            </Link>

                            <p className="text-xs text-center text-secondary font-poppins">
                                {COMPANY.tagline}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

