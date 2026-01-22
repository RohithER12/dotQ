'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center gradient-bg pt-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Engineering{' '}
                        <span className="gradient-text">Complex Solutions</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto"
                    >
                        A high-skill digital engineering collective delivering production-ready solutions
                        for the most challenging real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button href="#contact" variant="primary">
                            Work With Us
                        </Button>
                        <Button href="#projects" variant="secondary">
                            View Our Work
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
