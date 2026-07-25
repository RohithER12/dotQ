'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbstractShapeProps {
    variant?: 'sphere' | 'torus' | 'cube' | 'pill' | 'ring';
    className?: string;
    size?: number;
}

export default function AbstractShape({
    variant = 'torus',
    className = '',
    size = 120,
}: AbstractShapeProps) {
    if (variant === 'torus') {
        return (
            <motion.div
                animate={{
                    rotate: [0, 360],
                    y: [0, -10, 0],
                }}
                transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className={`relative pointer-events-none select-none ${className}`}
                style={{ width: size, height: size }}
            >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-nova-md">
                    <defs>
                        <linearGradient id="cobaltGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#405BFF" />
                            <stop offset="50%" stopColor="#2442D7" />
                            <stop offset="100%" stopColor="#101D6B" />
                        </linearGradient>
                        <radialGradient id="cobaltHighlight" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#A8B1FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#2442D7" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <path
                        d="M 100 20 A 80 80 0 1 0 100 180 A 80 80 0 1 0 100 20 Z M 100 65 A 35 35 0 1 1 100 135 A 35 35 0 1 1 100 65 Z"
                        fill="url(#cobaltGrad1)"
                    />
                    <circle cx="100" cy="100" r="75" fill="url(#cobaltHighlight)" />
                </svg>
            </motion.div>
        );
    }

    if (variant === 'sphere') {
        return (
            <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className={`relative pointer-events-none select-none ${className}`}
                style={{ width: size, height: size }}
            >
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-nova-md">
                    <defs>
                        <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#8094FF" />
                            <stop offset="45%" stopColor="#2442D7" />
                            <stop offset="100%" stopColor="#0B1348" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="url(#sphereGrad)" />
                </svg>
            </motion.div>
        );
    }

    if (variant === 'pill') {
        return (
            <motion.div
                animate={{
                    rotate: [-5, 5, -5],
                    y: [0, -8, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className={`relative pointer-events-none select-none ${className}`}
                style={{ width: size * 1.6, height: size * 0.8 }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-cobalt-bright via-cobalt to-[#142380] shadow-cobalt-glow border border-white/30 backdrop-blur-md" />
            </motion.div>
        );
    }

    // Default cube/crystal shape
    return (
        <motion.div
            animate={{
                rotate: [0, 15, 0],
                y: [0, -12, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className={`relative pointer-events-none select-none ${className}`}
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-nova-md">
                <defs>
                    <linearGradient id="cubeGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#405BFF" />
                        <stop offset="100%" stopColor="#2442D7" />
                    </linearGradient>
                    <linearGradient id="cubeGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2442D7" />
                        <stop offset="100%" stopColor="#101C66" />
                    </linearGradient>
                </defs>
                <path d="M60 10 L105 35 L105 85 L60 110 L15 85 L15 35 Z" fill="url(#cubeGradA)" />
                <path d="M60 10 L105 35 L60 60 L15 35 Z" fill="#A8B1FF" opacity="0.6" />
                <path d="M60 60 L105 35 L105 85 L60 110 Z" fill="url(#cubeGradB)" />
            </svg>
        </motion.div>
    );
}
