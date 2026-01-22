'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Palette, Workflow, Zap, Brain, Smartphone, Gamepad2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const icons = [Code2, Server, Palette, Workflow, Zap, Brain, Smartphone, Gamepad2];

export default function Services() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        Full-stack engineering expertise across the entire product lifecycle
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-gradient-to-br from-background to-primary-50/50 dark:to-primary-900/10 border border-primary-100 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group"
                            >
                                <div className="mb-4 inline-block p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
