'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { BRAND_STATEMENT } from '@/lib/constants';

interface ScrollRevealWordProps {
    word: string;
    range: [number, number];
    progress: MotionValue<number>;
    shouldReduceMotion: boolean | null;
}

function ScrollRevealWord({ word, range, progress, shouldReduceMotion }: ScrollRevealWordProps) {
    const color = useTransform(progress, range, ['#D1D1D1', '#000000']);

    return (
        <motion.span
            style={{ color: shouldReduceMotion ? '#000000' : color }}
            className="inline"
        >
            {word}
        </motion.span>
    );
}

export default function BrandStatement() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const part1Words = BRAND_STATEMENT.part1 ? BRAND_STATEMENT.part1.split(' ') : [];
    const part2Words = BRAND_STATEMENT.part2 ? BRAND_STATEMENT.part2.split(' ') : [];
    const totalWords = part1Words.length + part2Words.length;

    return (
        <section
            id="about"
            ref={containerRef}
            className="h-[200vh] bg-canvas border-b border-border-subtle relative pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32"
        >
            <div className="sticky top-[20vh] sm:top-[22vh] max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 sm:space-y-8">
                    {/* Paragraph 1 */}
                    {part1Words.length > 0 && (
                        <p
                            className="font-sans font-regular text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[2] text-balance"
                            aria-label={BRAND_STATEMENT.part1}
                        >
                            <span aria-hidden="true">
                                {part1Words.map((word, idx) => {
                                    const globalIndex = idx;
                                    const start = globalIndex / totalWords;
                                    const end = (globalIndex + 1) / totalWords;
                                    return (
                                        <React.Fragment key={`p1-${word}-${idx}`}>
                                            <ScrollRevealWord
                                                word={word}
                                                range={[start, end]}
                                                progress={scrollYProgress}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />
                                            {idx < part1Words.length - 1 && ' '}
                                        </React.Fragment>
                                    );
                                })}
                            </span>
                        </p>
                    )}

                    {/* Paragraph 2 */}
                    {part2Words.length > 0 && (
                        <p
                            className="font-sans font-regular text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[2] text-balance"
                            aria-label={BRAND_STATEMENT.part2}
                        >
                            <span aria-hidden="true">
                                {part2Words.map((word, idx) => {
                                    const globalIndex = part1Words.length + idx;
                                    const start = globalIndex / totalWords;
                                    const end = (globalIndex + 1) / totalWords;
                                    return (
                                        <React.Fragment key={`p2-${word}-${idx}`}>
                                            <ScrollRevealWord
                                                word={word}
                                                range={[start, end]}
                                                progress={scrollYProgress}
                                                shouldReduceMotion={shouldReduceMotion}
                                            />
                                            {idx < part2Words.length - 1 && ' '}
                                        </React.Fragment>
                                    );
                                })}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

