'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import CustomSVGGraphic from '@/components/ui/CustomSVGGraphic';
import AnimatedTextReveal from '@/components/ui/AnimatedTextReveal';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-brand-dark">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark" />
                <CustomSVGGraphic />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
                        Engineering The Impossible
                    </span>
                </motion.div>

                {/* Main Headline */}
                <div className="flex flex-col gap-2 mb-8">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter text-white">
                        <AnimatedTextReveal text="We Build" delay={0.2} />
                    </h1>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter pb-4">
                        <AnimatedTextReveal
                            text="What Others Dare Not"
                            delay={0.6}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary gradient-animated"
                        />
                    </h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="max-w-2xl text-xl md:text-2xl text-white/60 mb-12 leading-relaxed"
                >
                    An elite engineering collective solving high-complexity problems for the world's most ambitious startups.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Button href="#projects" variant="primary" className="!h-14 !px-10 !text-lg">
                        Showcase Our Work
                    </Button>
                    <Button href="/contact" variant="ghost" className="!h-14 !px-10 !text-lg">
                        Contact Us
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
