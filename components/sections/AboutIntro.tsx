'use client';

import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '@/lib/constants';

export default function AboutIntro() {
    return (
        <section className="py-24 px-6 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">
                        We Are <span className="gradient-text">DotQ</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-foreground/80 mb-12 leading-relaxed font-light"
                    >
                        {ABOUT_CONTENT.intro}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 mb-12"
                    >
                        {ABOUT_CONTENT.values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-colors"
                            >
                                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                                <p className="text-lg text-foreground/80">{value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            {ABOUT_CONTENT.mission}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
