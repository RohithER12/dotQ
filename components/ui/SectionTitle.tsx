'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    align = 'center',
    className = '',
}: SectionTitleProps) {
    const alignClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end',
    };

    return (
        <div className={`flex flex-col mb-12 ${alignClasses[align]} ${className}`}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-brand-primary font-medium tracking-wider uppercase text-sm mb-3"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold font-display"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    {title}
                </span>
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-accent mt-6 rounded-full ${align === 'center' ? 'origin-center' : 'origin-left'}`}
            />
        </div>
    );
}
