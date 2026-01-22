'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Palette, Workflow, Zap, Brain } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const SERVICES = [
    { title: 'Complex Web Apps', description: 'Next.js & React applications with heavy state management and real-time features.', icon: Code2 },
    { title: 'High-Scale Backend', description: 'Distributed systems, microservices, and serverless architectures in Go and Node.js.', icon: Server },
    { title: 'Interactive Design', description: 'Award-winning UI/UX with WebGL, Three.js, and Framer Motion animations.', icon: Palette },
    { title: 'System Architecture', description: 'Cloud-native infrastructure and DevOps scaling strategies.', icon: Workflow },
    { title: 'Performance Engineering', description: 'Optimization for core web vitals and high-load scenarios.', icon: Zap },
    { title: 'AI Integration', description: 'LLM integration and custom AI model deployment.', icon: Brain },
];

export default function Services() {
    return (
        <SectionWrapper id="services">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle
                    title="Our Capability"
                    subtitle="What We Deliver"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-300"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-brand-primary/10 w-fit group-hover:bg-brand-primary/20 transition-colors">
                                    <Icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
