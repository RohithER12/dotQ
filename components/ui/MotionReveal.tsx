'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function MotionReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}: MotionRevealProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const directionOffset = {
        up: { y: 24, x: 0 },
        down: { y: -24, x: 0 },
        left: { x: 24, y: 0 },
        right: { x: -24, y: 0 },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directionOffset[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
