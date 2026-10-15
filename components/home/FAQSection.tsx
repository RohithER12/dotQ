'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: 'What services does DotQ specialize in?',
        answer: 'We specialize in custom web development (Next.js, React), cross-platform mobile apps with Flutter, scalable backend microservices, digital marketing & SEO, API architecture, and business workflow automation.',
    },
    {
        question: 'How long does a typical project take from start to launch?',
        answer: 'Project timelines depend on overall scope and complexity. Standard web platforms and mobile apps typically take 4 to 8 weeks, while complex enterprise systems and automation workflows range from 8 to 12+ weeks.',
    },
    {
        question: 'What is your development process and engagement model?',
        answer: 'We follow a structured 4-phase framework: Discovery, Strategy, Agile Execution, and Scale. We offer transparent fixed-price project milestones as well as dedicated monthly engineering retainers.',
    },
    {
        question: 'Do you provide post-launch support and maintenance?',
        answer: 'Yes, every project includes 30 days of post-launch monitoring and support. We also offer dedicated ongoing SLA maintenance, security updates, feature enhancements, and cloud management.',
    },
    {
        question: 'Can you integrate custom software with our existing tools and APIs?',
        answer: 'Absolutely. We frequently build custom API integrations, database connectors, webhooks, and automated workflows linking CRMs, payment gateways, ERPs, and internal tools.',
    },
    {
        question: 'How do we get started on a project with DotQ?',
        answer: 'You can reach out via our contact page or schedule a consultation. We will evaluate your requirements and deliver a comprehensive technical proposal, timeline, and estimate within 48 hours.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-28 bg-white border-b border-border-subtle">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    align="center"
                    eyebrow="FREQUENTLY ASKED QUESTIONS"
                    title="Got Questions? We Have Answers."
                    description="Everything you need to know about partnering with DotQ for software engineering, mobile apps, and automation."
                    className="mb-14 sm:mb-16"
                />

                {/* Accordion FAQ List */}
                <div className="space-y-4">
                    {FAQS.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <motion.div
                                key={faq.question}
                                initial={mounted ? { opacity: 0, y: 16 } : false}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="rounded-2xl border border-border-subtle bg-canvas overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="font-semibold text-lg sm:text-xl text-primary tracking-tight">
                                        {faq.question}
                                    </h3>
                                    <div className={`w-8 h-8 rounded-full bg-white border border-border-subtle flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                                        isOpen ? 'rotate-180 bg-soft-blue border-cobalt/30 text-cobalt' : 'text-muted'
                                    }`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-6 pb-6 pt-1 text-secondary text-sm sm:text-base leading-relaxed border-t border-black/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
