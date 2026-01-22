'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import { Sparkles } from 'lucide-react';

export default function Hero() {
    const titleWords = 'Engineering Complex Solutions'.split(' ');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <AnimatedBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Floating badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-white/20 backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Elite Digital Engineering Collective
                    </span>
                </motion.div>

                {/* Animated title with 3D effect */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className={`inline-block mx-2 ${word === 'Complex' || word === 'Solutions'
                                        ? 'gradient-text'
                                        : 'text-foreground'
                                    }`}
                                style={{
                                    textShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                {/* Glowing subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                    A high-skill digital engineering collective delivering{' '}
                    <span className="text-foreground font-semibold relative">
                        production-ready solutions
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </span>{' '}
                    for the most challenging real-world problems.
                </motion.p>

                {/* CTA Buttons with magnetic effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
                        <Button href="#contact" variant="primary" className="relative">
                            Work With Us
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button href="#projects" variant="secondary">
                            View Our Work
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating stats or badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
                >
                    {[
                        { label: 'Production Systems', value: '100%' },
                        { label: 'Client Satisfaction', value: '5★' },
                        { label: 'Complex Projects', value: '∞' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                            className="glass-dark rounded-xl p-6 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-foreground/50 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
