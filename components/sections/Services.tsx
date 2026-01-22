'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <SectionWrapper id="services" className="relative overflow-hidden">
            {/* Scroll-driven Ambient Background */}
            <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
                />
                <motion.div
                    style={{ y: y2, opacity }}
                    className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]), opacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-6 p-4 rounded-xl bg-brand-primary/10 w-fit group-hover:bg-brand-primary/20 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
