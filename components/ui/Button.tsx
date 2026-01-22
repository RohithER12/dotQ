'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
}: ButtonProps) {
    const baseStyles = 'px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 inline-block';

    const variantStyles = {
        primary: 'bg-foreground text-background hover:scale-105 hover:shadow-lg',
        secondary: 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
    };

    const buttonContent = (
        <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick}>
                {buttonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} type="button">
            {buttonContent}
        </button>
    );
}
