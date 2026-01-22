'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress from the entire window (for general flow)
    const { scrollY } = useScroll();

    // Smooth scroll for smoother animation
    const smoothScroll = useSpring(scrollY, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    // Transform mapping
    // Rotate the entire graphic slowly as we scroll
    const rotate = useTransform(smoothScroll, [0, 1000], [0, 45]);

    // Parallax effect for different layers
    const y1 = useTransform(smoothScroll, [0, 1000], [0, 200]);
    const y2 = useTransform(smoothScroll, [0, 1000], [0, -150]);
    const scale = useTransform(smoothScroll, [0, 1000], [1, 1.2]);

    // Subtle morphing/skew
    const skewX = useTransform(smoothScroll, [0, 500], [0, 5]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* Base ambient glow */}
            <div className="absolute inset-0 bg-brand-dark" />

            {/* Main Animated SVG System */}
            <motion.div
                className="absolute inset-0 w-full h-full opacity-60"
                style={{ rotate, scale }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
                    <svg
                        viewBox="0 0 1000 1000"
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <filter id="noiseFilter">
                                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            </filter>
                            <filter id="blurFilter">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
                            </filter>
                            <linearGradient id="gradBrand" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            </linearGradient>
                            <radialGradient id="gradGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Background Noise Texture */}
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.03" />

                        {/* Layer 1: Deep Background Orbs */}
                        <motion.g style={{ y: y2 }}>
                            <motion.circle
                                cx="200" cy="200" r="300"
                                fill="url(#gradBrand)"
                                filter="url(#blurFilter)"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    x: [0, 30, 0],
                                    y: [0, -20, 0]
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx="800" cy="800" r="350"
                                fill="#4c1d95"
                                fillOpacity="0.3"
                                filter="url(#blurFilter)"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, -40, 0]
                                }}
                                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.g>

                        {/* Layer 2: Main Moving Shapes */}
                        <motion.g style={{ y: y1, skewX }}>
                            <motion.path
                                d="M 100 500 Q 500 100 900 500 T 900 600"
                                fill="none"
                                stroke="url(#gradBrand)"
                                strokeWidth="150"
                                strokeLinecap="round"
                                filter="url(#blurFilter)"
                                opacity="0.5"
                                animate={{
                                    d: [
                                        "M 100 500 Q 500 100 900 500 T 900 600",
                                        "M 100 500 Q 500 900 900 500 T 900 400",
                                        "M 100 500 Q 500 100 900 500 T 900 600"
                                    ]
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.circle
                                cx="500" cy="500" r="200"
                                fill="url(#gradGlow)"
                                filter="url(#blurFilter)"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.g>
                    </svg>
                </div>
            </motion.div>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark" />
        </div>
    );
}
