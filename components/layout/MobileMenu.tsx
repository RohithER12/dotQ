'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation Menu"
                    >
                        <div>
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-8">
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
                                    className="p-2 rounded-full hover:bg-canvas text-text-secondary transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-2xl font-medium text-black hover:text-cobalt transition-colors flex items-center justify-between group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cobalt" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Bottom CTA */}
                        <div className="pt-6 border-t border-border-subtle space-y-4">
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="w-full py-4 rounded-full bg-cobalt text-white font-medium text-center text-base flex items-center justify-center gap-2 shadow-cobalt-glow"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <p className="text-xs text-center text-text-muted">
                                {COMPANY.tagline}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
