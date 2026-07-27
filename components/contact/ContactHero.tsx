'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
            <motion.div
                initial={mounted ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-primary text-xs font-semibold uppercase tracking-wider border border-border-subtle shadow-subtle"
            >
                <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                <span>CONTACT DOTQ • KOCHI, INDIA</span>
            </motion.div>

            <motion.h1
                initial={mounted ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-regular tracking-tight text-primary text-balance"
            >
                Let's Build Something Complex
            </motion.h1>

            <motion.p
                initial={mounted ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-secondary max-w-xl mx-auto leading-relaxed text-balance"
            >
                Tell us about your project, challenge or idea. Our team typically responds within 24 hours.
            </motion.p>
        </div>
    );
}
