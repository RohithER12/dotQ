'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ABOUT_PROCESS } from '@/lib/aboutData';
import { Search, Compass, GitCommit, LineChart } from 'lucide-react';

export default function AboutProcessSection() {
    const [mounted, setMounted] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const processVisuals = [
        {
            icon: Search,
            label: 'DISCOVERY INTERFACE',
            detail: 'System Audit • Gap Analysis • Tech Stack Mapping',
        },
        {
            icon: Compass,
            label: 'STRATEGY BLUEPRINT',
            detail: 'API Specification • Architecture • Risk Matrix',
        },
        {
            icon: GitCommit,
            label: 'EXECUTION PIPELINE',
            detail: 'Sprint Delivery • Integration Testing • CI/CD Deploy',
        },
        {
            icon: LineChart,
            label: 'SCALE DASHBOARD',
            detail: 'Load Testing • Latency Reduction • 99.99% Uptime',
        },
    ];

    return (
        <section className="py-20 sm:py-28 bg-white border-y border-border-subtle overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="OUR PROCESS"
                    title="A clear process for complex digital projects."
                    description="From initial architectural audit to strategy, agile execution, and global scale."
                    className="mb-14 sm:mb-20"
                />

                {/* Desktop Layout (Interactive Step Selector + Visual Panel) */}
                <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
                    {/* Left Column: Interactive Step Tabbing */}
                    <div className="col-span-5 space-y-4">
                        {ABOUT_PROCESS.map((step, idx) => {
                            const isActive = activeStep === idx;
                            return (
                                <div
                                    key={step.num}
                                    onClick={() => setActiveStep(idx)}
                                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? 'bg-soft-blue/60 border-cobalt shadow-nova-sm scale-[1.02]'
                                            : 'bg-canvas border-border-subtle hover:border-cobalt/30'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-cobalt' : 'text-muted'}`}>
                                            STAGE {step.num}
                                        </span>
                                        {isActive && (
                                            <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                                        )}
                                    </div>
                                    <h3 className={`text-xl font-semibold tracking-tight ${isActive ? 'text-cobalt' : 'text-primary'}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed mt-2">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Sticky Active Visual Panel */}
                    <div className="col-span-7 sticky top-28">
                        <div className="bg-canvas rounded-3xl p-10 border border-border-subtle shadow-nova-md h-[480px] flex flex-col justify-between relative overflow-hidden">
                            <div className="flex items-center justify-between border-b border-border-subtle pb-4 z-10">
                                <span className="text-xs font-mono font-bold text-cobalt uppercase">
                                    {processVisuals[activeStep].label}
                                </span>
                                <span className="text-xs font-mono text-muted">
                                    STAGE 0{activeStep + 1} / 04
                                </span>
                            </div>

                            {/* Active Visual Component Render */}
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="my-auto flex flex-col items-center justify-center text-center space-y-6 z-10"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-cobalt text-white flex items-center justify-center shadow-cobalt-glow">
                                    {React.createElement(processVisuals[activeStep].icon, { className: 'w-10 h-10' })}
                                </div>

                                <h4 className="text-2xl font-semibold text-primary">
                                    {ABOUT_PROCESS[activeStep].title} Architecture
                                </h4>

                                <p className="text-sm font-mono text-secondary max-w-md bg-white px-4 py-2 rounded-xl border border-border-subtle shadow-subtle">
                                    {processVisuals[activeStep].detail}
                                </p>
                            </motion.div>

                            <div className="border-t border-border-subtle pt-4 text-xs text-muted font-mono z-10">
                                DOTQ ENGINEERING DELIVERY FRAMEWORK
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet Stacked Layout */}
                <div className="lg:hidden space-y-8">
                    {ABOUT_PROCESS.map((step, idx) => {
                        const IconComponent = processVisuals[idx].icon;
                        return (
                            <motion.div
                                key={step.num}
                                initial={mounted ? { opacity: 0, y: 20 } : false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-canvas rounded-2xl p-6 sm:p-8 border border-border-subtle space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-cobalt">
                                        STAGE {step.num}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-cobalt text-white flex items-center justify-center">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-primary tracking-tight">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
