'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    description: string;
    href?: string;
    image?: string; // Optional image for project cards
    children?: ReactNode;
    className?: string;
}

export default function Card({ title, description, href, children, className = '' }: CardProps) {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md hover:border-white/20 transition-colors ${className}`}
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Spotlight Effect (simplified CSS version) */}
            <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_50%)] opactiy-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-brand-primary transition-colors">
                        {title}
                    </h3>
                    {href && (
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                        </div>
                    )}
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {children}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
            </a>
        );
    }

    return content;
}
