'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight, Code2, Server, Layout, Workflow, Gauge, Bot } from 'lucide-react';

export default function CapabilitySection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const activeService = SERVICES[activeIndex];

    const getIcon = (type: string) => {
        switch (type) {
            case 'code-tree': return <Code2 className="w-6 h-6 text-cobalt" />;
            case 'architecture': return <Server className="w-6 h-6 text-cobalt" />;
            case 'webgl-preview': return <Layout className="w-6 h-6 text-cobalt" />;
            case 'workflow': return <Workflow className="w-6 h-6 text-cobalt" />;
            case 'performance-chart': return <Gauge className="w-6 h-6 text-cobalt" />;
            case 'ai-panel': return <Bot className="w-6 h-6 text-cobalt" />;
            default: return <Code2 className="w-6 h-6 text-cobalt" />;
        }
    };

    return (
        <section id="services" className="py-20 sm:py-28 bg-white border-b border-border-subtle">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR SERVICES"
                    title="What We Do"
                    description="From high-performance web apps and Flutter mobile solutions to resilient microservices, DevOps automation, and AI integration."
                    className="mb-12 sm:mb-16"
                />

                {/* Desktop Interactive Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
                    {/* Left Column: Service List */}
                    <div className="col-span-5 space-y-3">
                        {SERVICES.map((service, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border cursor-pointer ${isActive
                                        ? 'bg-soft-blue border-cobalt/20 shadow-nova-sm text-primary'
                                        : 'bg-canvas border-border-subtle hover:border-black/15 text-secondary hover:text-primary'
                                        }`}
                                >
                                    <span className={`text-xs font-mono font-bold mt-1 px-2 py-0.5 rounded ${isActive ? 'bg-cobalt text-white' : 'bg-black/5 text-muted'
                                        }`}>
                                        {service.num}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg tracking-tight mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 mt-1 ${isActive ? 'translate-x-1 text-cobalt' : 'opacity-0 text-muted'
                                        }`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Sticky Graphic Preview Card */}
                    <div className="col-span-7 sticky top-28">
                        <div className="rounded-3xl bg-canvas border border-border-subtle p-8 shadow-nova-md min-h-[460px] flex flex-col justify-between relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={mounted ? { opacity: 0, y: 15 } : false}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-6 relative z-10"
                                >
                                    <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-white border border-border-subtle flex items-center justify-center shadow-nova-sm">
                                                {getIcon(activeService.graphicType)}
                                            </div>
                                            <div>
                                                <span className="text-xs font-mono text-cobalt font-bold">
                                                    SERVICE {activeService.num}
                                                </span>
                                                <h4 className="text-2xl font-semibold text-primary">
                                                    {activeService.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-base text-secondary leading-relaxed">
                                        {activeService.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {activeService.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full bg-white border border-border-subtle text-xs font-medium text-primary shadow-nova-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Abstract Graphic Representation Panel */}
                                    <div className="pt-4">
                                        <div className="p-6 rounded-2xl bg-white border border-border-subtle shadow-nova-sm space-y-4">
                                            <div className="flex items-center justify-between text-xs text-muted font-mono">
                                                <span>SYSTEM_MODULE: {activeService.id.toUpperCase()}</span>
                                                <span className="text-emerald-600 font-semibold">OPTIMIZED</span>
                                            </div>

                                            {/* Graphic Mock Content based on graphicType */}
                                            {activeService.graphicType === 'code-tree' && (
                                                <div className="space-y-2 font-mono text-xs text-primary bg-surface-subtle p-3 rounded-xl border border-black/5">
                                                    <p className="text-cobalt">&lt;AppRouter&gt;</p>
                                                    <p className="pl-4 text-emerald-600">├── &lt;RealtimeStream websocket="wss://" /&gt;</p>
                                                    <p className="pl-4 text-emerald-600">└── &lt;NextStateManagement /&gt;</p>
                                                    <p className="text-cobalt">&lt;/AppRouter&gt;</p>
                                                </div>
                                            )}

                                            {activeService.graphicType === 'architecture' && (
                                                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                                                    <div className="p-3 rounded-lg bg-soft-blue border border-cobalt/15 text-cobalt font-semibold">Go Microservice</div>
                                                    <div className="p-3 rounded-lg bg-surface-subtle border border-black/5 text-primary font-semibold">Node API Gate</div>
                                                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">PostgreSQL</div>
                                                </div>
                                            )}

                                            {activeService.graphicType === 'webgl-preview' && (
                                                <div className="h-24 rounded-xl bg-gradient-to-r from-cobalt via-cobalt-bright to-soft-blue flex items-center justify-center text-white font-bold text-sm shadow-cobalt-glow">
                                                    WebGL 3D Canvas / Framer Motion
                                                </div>
                                            )}

                                            {activeService.graphicType === 'workflow' && (
                                                <div className="space-y-2 text-xs">
                                                    <div className="flex justify-between font-semibold">
                                                        <span>Cloud Infrastructure CI/CD</span>
                                                        <span className="text-cobalt">100% Automated</span>
                                                    </div>
                                                    <div className="h-2 bg-canvas rounded-full overflow-hidden">
                                                        <div className="h-full bg-cobalt w-4/5 rounded-full" />
                                                    </div>
                                                </div>
                                            )}

                                            {activeService.graphicType === 'performance-chart' && (
                                                <div className="flex items-end justify-between h-20 pt-4 px-2">
                                                    <div className="w-8 bg-cobalt/20 h-1/2 rounded-t" />
                                                    <div className="w-8 bg-cobalt/40 h-3/4 rounded-t" />
                                                    <div className="w-8 bg-cobalt h-full rounded-t" />
                                                    <div className="w-8 bg-emerald-500 h-full rounded-t" />
                                                </div>
                                            )}

                                            {activeService.graphicType === 'ai-panel' && (
                                                <div className="p-3 bg-surface-subtle rounded-xl text-xs space-y-1 font-mono">
                                                    <span className="text-cobalt font-bold">&gt; LLM Model Request</span>
                                                    <p className="text-secondary">Token Context: 128k | Temperature: 0.2 | Vector Search: Active</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Mobile Stacked Layout */}
                <div className="lg:hidden space-y-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-4 shadow-nova-sm"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-mono font-bold bg-cobalt text-white px-2 py-0.5 rounded">
                                    {service.num}
                                </span>
                                <h3 className="font-bold text-xl text-primary">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-sm text-secondary leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white border border-border-subtle text-xs text-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
