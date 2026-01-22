'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import Card from '@/components/ui/Card';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        Real-world solutions built for scale, performance, and user experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card
                                title={project.name}
                                description={project.description}
                                href={project.url}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
