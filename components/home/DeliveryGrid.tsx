'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGY_CATEGORIES } from '@/lib/constants';

export default function DeliveryGrid() {
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-24 sm:py-32 bg-black text-white relative border-t border-b border-white/10 overflow-hidden" id="tech-stack">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title matching Nova dark reference */}
                <div className="mb-14 sm:mb-20 max-w-4xl">
                    <motion.p
                        initial={mounted ? { opacity: 0, y: 10 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3"
                    >
                        TECHNOLOGY STACK
                    </motion.p>
                    <motion.h2
                        initial={mounted ? { opacity: 0, y: 15 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-1xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white font-sans text-balance leading-[1.1]"
                    >
                        Technologies We Use — Built with Modern Engineering Tools
                    </motion.h2>
                </div>

                {/* 4 Technology Category Cards matching Nova dark style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {TECHNOLOGY_CATEGORIES.map((cat, idx) => {
                        const isActive = activeCategory === idx;
                        return (
                            <motion.div
                                key={cat.num}
                                initial={mounted ? { opacity: 0, y: 20 } : false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                onClick={() => setActiveCategory(idx)}
                                className={`rounded-2xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${isActive
                                    ? 'bg-[#222226] border-white/20 shadow-lg'
                                    : 'bg-[#141417] border-white/5 hover:bg-[#1A1A1E] hover:border-white/10'
                                    }`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                                        <span>CATEGORY</span>
                                        <span>{cat.num}</span>
                                    </div>

                                    <h3 className={`text-lg sm:text-xl font-medium tracking-tight font-sans ${isActive ? 'text-white' : 'text-zinc-200'
                                        }`}>
                                        {cat.title}
                                    </h3>

                                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                                    {cat.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/5"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
