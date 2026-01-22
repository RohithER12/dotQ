'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    description: string;
    href?: string;
    children?: ReactNode;
}

export default function Card({ title, description, href, children }: CardProps) {
    const content = (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-accent-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-accent-500/10 group-hover:to-primary-500/10 transition-all duration-500" />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {title}
                    </h3>
                    {href && (
                        <ExternalLink className="w-5 h-5 text-foreground/60 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    )}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                    {description}
                </p>
                {children}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
}
