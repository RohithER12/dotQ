'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/lib/constants';
import { Code2, Server, Layout, Workflow, Gauge, Bot, Megaphone, ArrowRight } from 'lucide-react';

interface Props {
    currentServiceId: string;
}

export default function ServiceOtherServices({ currentServiceId }: Props) {
    const otherServices = SERVICES.filter((s) => s.id !== currentServiceId);

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
        <section className="py-20 sm:py-28 bg-[#F4F4F6] border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="EXPLORE CAPABILITIES"
                    title="Other Engineering Services"
                    description="Explore our complementary technical specializations to assemble an end-to-end digital solution."
                    className="mb-14 sm:mb-18"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherServices.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.06 }}
                        >
                            <Link
                                href={`/services/${service.id}`}
                                className="bg-white rounded-3xl p-7 border border-border-subtle shadow-nova-sm flex flex-col justify-between h-full"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-soft-blue flex items-center justify-center text-cobalt">
                                            {getIcon(service.graphicType)}
                                        </div>
                                        <span className="text-xs font-mono font-bold text-zinc-400">
                                            {service.num}
                                        </span>
                                    </div>

                                    <h3 className="font-poppins font-medium text-lg sm:text-xl text-primary tracking-tight mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="font-poppins text-secondary text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-cobalt">
                                    <span>Explore Service</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
