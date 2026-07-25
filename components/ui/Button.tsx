'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    showArrow?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    external?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    showArrow = true,
    className = '',
    type = 'button',
    disabled = false,
    external = false,
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-2";
    
    const sizeStyles = {
        sm: "px-4 py-2 text-xs gap-1.5",
        md: "px-6 py-3 text-sm gap-2",
        lg: "px-8 py-4 text-base gap-2.5",
    };

    const variantStyles = {
        primary: "bg-cobalt text-white hover:bg-cobalt-hover shadow-nova-sm hover:shadow-cobalt-glow",
        secondary: "bg-soft-blue text-cobalt hover:bg-cobalt/10 border border-cobalt/10",
        outline: "bg-transparent text-text-primary border border-border-strong hover:bg-black/5 hover:border-black/30",
        white: "bg-white text-text-primary hover:bg-canvas shadow-nova-sm hover:shadow-nova-md border border-border-subtle",
        dark: "bg-text-primary text-white hover:bg-black/90 shadow-nova-sm",
    };

    const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const innerContent = (
        <>
            <span>{children}</span>
            {showArrow && (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedClasses}
                >
                    {innerContent}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClasses}>
                {innerContent}
            </Link>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
        >
            {innerContent}
        </motion.button>
    );
}
