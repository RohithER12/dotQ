'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code2, Server, Layout, Workflow, Gauge, Bot, Megaphone } from 'lucide-react';

export default function CapabilitySection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'code-tree': return <Code2 className="w-5 h-5 text-cobalt" />;
            case 'architecture': return <Server className="w-5 h-5 text-cobalt" />;
            case 'webgl-preview': return <Layout className="w-5 h-5 text-cobalt" />;
            case 'workflow': return <Workflow className="w-5 h-5 text-cobalt" />;
            case 'performance-chart': return <Gauge className="w-5 h-5 text-cobalt" />;
            case 'ai-panel': return <Bot className="w-5 h-5 text-cobalt" />;
            case 'digital-marketing': return <Megaphone className="w-5 h-5 text-cobalt" />;
            default: return <Code2 className="w-5 h-5 text-cobalt" />;
        }
    };

    return (
        <section id="services" className="py-20 sm:py-28 bg-[#F2F2F2]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR SERVICES"
                    title="What We Do"
                    description="From high-performance web apps and Flutter mobile solutions to resilient microservices, DevOps automation, AI integration, and digital marketing."
                    className="mb-14 sm:mb-16"
                />

                {/* Cards Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={mounted ? { opacity: 0, y: 24 } : false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            className="h-full scroll-mt-28"
                        >
                            <div className="rounded-3xl bg-white p-7 sm:p-8 flex flex-col justify-between h-full group">
                                <div>
                                    {/* Top Row: Icon Container & Number Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-soft-blue flex items-center justify-center flex-shrink-0">
                                            {getIcon(service.graphicType)}
                                        </div>
                                        {/* <span className="text-xs font-mono font-semibold text-Cobalt">
                                            {service.num}
                                        </span> */}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-poppins font-medium text-xl sm:text-2xl text-primary tracking-tight mb-3 leading-snug">
                                        {service.title}
                                    </h3>

                                    {/* Sub Description */}
                                    <p className="font-poppins text-secondary text-sm sm:text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Technologies Tags */}
                                <div className="pt-4 border-t border-black/5 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium bg-canvas px-2.5 py-1 rounded-full border border-border-subtle text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
