'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
    dark?: boolean;
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    className = '',
    dark = false,
}: SectionHeadingProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isCenter = align === 'center';

    return (
        <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
            {eyebrow && (
                <motion.div
                    initial={mounted ? { opacity: 0, y: 10 } : false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-subtle ${
                        dark
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-white border-border-subtle text-primary'
                    }`}
                >
                    <span className={`w-2 h-2 rounded-full ${dark ? 'bg-white' : 'bg-cobalt'}`} />
                    {eyebrow}
                </motion.div>
            )}

            <motion.h2
                initial={mounted ? { opacity: 0, y: 15 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`font-sans font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight text-balance ${
                    dark ? 'text-white' : 'text-primary'
                }`}
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={mounted ? { opacity: 0, y: 15 } : false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-sm sm:text-base leading-relaxed ${
                        dark ? 'text-zinc-300' : 'text-secondary'
                    }`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
