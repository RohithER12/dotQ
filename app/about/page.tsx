'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import CustomSVGGraphic from '@/components/ui/CustomSVGGraphic';

const TIMELINE = [
    { year: '2019', title: 'The Collective Forms', description: 'A group of senior engineers frustrated with agency inefficiencies band together.' },
    { year: '2021', title: 'First Major Scale', description: 'Successfully re-architected a fintech platform handling $50M+ daily volume.' },
    { year: '2023', title: 'Global Expansion', description: 'Partnering with startups in SF, London, and Singapore.' },
    { year: '2024', title: 'DotQ Evolution', description: 'Launch of our proprietary component system and AI division.' }
];

export default function AboutPage() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <SectionWrapper dark className="!py-20 lg:!py-32 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-brand-dark/50">
                    <CustomSVGGraphic />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
                            Builders of the <span className="text-brand-primary">Impossible</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            We are not just a dev shop. We are a special operations team for software engineering.
                            When off-the-shelf solutions fail and complexity spikes, DotQ steps in.
                        </p>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Ethos Section */}
            <SectionWrapper>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle title="Our Ethos" subtitle="Engineering Culture" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card title="Code Quality is Non-Negotiable" description="We write code that is clean, testable, and maintainable. No shortcuts, no technical debt masquerading as 'MVP'." />
                        <Card title="Performance First" description="We optimize for the 99th percentile. Speed is a feature, and we treat it with the same priority as functionality." />
                        <Card title="Radical Transparency" description="No black boxes. You see what we build, how we build it, and why we made every decision." />
                    </div>
                </div>
            </SectionWrapper>

            {/* Timeline Section */}
            <SectionWrapper dark>
                <div className="max-w-7xl mx-auto px-6">
                    <SectionTitle title="Our Journey" subtitle="Evolution" />

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
                        {TIMELINE.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Dot */}
                                <div className="absolute top-0 left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-brand-primary border-4 border-brand-dark" />

                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                                    <span className="text-brand-primary font-bold font-display text-xl mb-2 block">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/60">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
