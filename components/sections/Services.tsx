'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Palette, Workflow, Zap, Brain, Smartphone, Gamepad2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import Card3D from '@/components/ui/Card3D';

const icons = [Code2, Server, Palette, Workflow, Zap, Brain, Smartphone, Gamepad2];

export default function Services() {
    return (
        <section className="py-24 px-6 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
                            Our Expertise
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        What We <span className="gradient-text">Do</span>
                    </h2>
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
                                className="group"
                            >
                                <Card3D className="h-full">
                                    <div className="relative p-8 rounded-2xl h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <motion.div
                                                className="mb-4 inline-block"
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 border border-blue-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                                                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                                </div>
                                            </motion.div>

                                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                                                {service.title}
                                            </h3>

                                            <p className="text-foreground/70 text-sm leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Decorative corner accent */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </Card3D>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
