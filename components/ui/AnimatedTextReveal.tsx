'use client';

import { motion } from 'framer-motion';

interface AnimatedTextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function AnimatedTextReveal({ text, className = '', delay = 0 }: AnimatedTextRevealProps) {
    const words = text.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={`inline-block ${className}`}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className="inline-block mr-[0.2em] last:mr-0"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
