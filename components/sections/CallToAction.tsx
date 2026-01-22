'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function CallToAction() {
    return (
        <SectionWrapper className="!py-32">
            <div className="absolute inset-0 bg-brand-primary/10" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
                >
                    Ready for the <span className="text-brand-primary">Next Level?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/70 mb-10 leading-relaxed"
                >
                    We don't just write code. We engineer success. Let's discuss your most complex challenge.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button href="/contact" variant="primary" className="!text-lg !px-12 !py-4">
                        Start Your Project
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
