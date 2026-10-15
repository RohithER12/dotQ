'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ServiceFAQ as FAQType } from '@/lib/servicesData';
import { ChevronDown } from 'lucide-react';

interface Props {
    faqs: FAQType[];
    serviceTitle: string;
}

export default function ServiceFAQ({ faqs, serviceTitle }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-20 sm:py-28 bg-white border-b border-border-subtle">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="FREQUENTLY ASKED QUESTIONS"
                    title={`Common Questions About ${serviceTitle}`}
                    description="Clear, honest answers regarding our technical stack, timelines, pricing models, and deliverables."
                    align="center"
                    className="mb-14 sm:mb-18"
                />

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen
                                        ? 'bg-canvas border-cobalt/30 shadow-subtle'
                                        : 'bg-white border-border-subtle hover:border-zinc-300'
                                }`}
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-poppins font-medium text-base sm:text-lg text-primary">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                                            isOpen ? 'bg-cobalt text-white rotate-180' : 'bg-surface-subtle text-primary'
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-secondary leading-relaxed border-t border-border-subtle/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
