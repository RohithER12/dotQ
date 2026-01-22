'use client';

import { motion } from 'framer-motion';
import { WHY_DOTQ } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function WhyDotQ() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-background to-accent-50/30 dark:to-accent-900/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Why DotQ</h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        We're not your typical agency. We're engineers who live for complexity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {WHY_DOTQ.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-4 p-6 rounded-xl bg-background border border-foreground/10 hover:border-accent-300 dark:hover:border-accent-700 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
