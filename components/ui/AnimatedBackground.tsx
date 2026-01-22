'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Generate random particles
        const generatedParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 300 + 100,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 5,
        }));
        setParticles(generatedParticles);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

            {/* Floating gradient orbs */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full blur-3xl opacity-30 dark:opacity-20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: `radial-gradient(circle, ${particle.id % 3 === 0
                                ? 'rgba(59, 130, 246, 0.5)'
                                : particle.id % 3 === 1
                                    ? 'rgba(168, 85, 247, 0.5)'
                                    : 'rgba(236, 72, 153, 0.5)'
                            } 0%, transparent 70%)`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Mouse follower gradient */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
                }}
                animate={{
                    x: `${mousePosition.x}%`,
                    y: `${mousePosition.y}%`,
                }}
                transition={{
                    type: 'spring',
                    damping: 50,
                    stiffness: 100,
                }}
            />

            {/* Grid overlay with fade effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        </div>
    );
}
