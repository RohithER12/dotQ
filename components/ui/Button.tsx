'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const x = (clientX - (left + width / 2)) * 0.3;
        const y = (clientY - (top + height / 2)) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = 'relative px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 inline-block overflow-hidden';

    const variantStyles = {
        primary: 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40',
        secondary: 'bg-white text-brand-dark hover:bg-gray-100',
        outline: 'border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm',
        ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    };

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            <motion.span className="relative z-10">{children}</motion.span>
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick} className="inline-block">
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} type="button" className="inline-block">
            {content}
        </button>
    );
}
