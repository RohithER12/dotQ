'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Card from '@/components/ui/Card';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const PROJECTS = [
    {
        name: 'Arabian Palace',
        description: 'High-performance ordering platform handling complex real-time inventory and logistics.',
        url: 'https://order.arabianpalace.online',
        // In a real app, I'd use an actual image here
    },
    {
        name: 'Naiksha',
        description: 'Next-generation e-commerce experience with immersive product visualizations.',
        url: 'https://naiksha.com',
    },
    {
        name: 'DotQ Internal',
        description: 'Proprietary engineering tools and developer experience platforms.',
        url: '#',
    }
];

export default function Projects() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <SectionWrapper id="projects" dark>
            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                <SectionTitle
                    title="Featured Work"
                    subtitle="Selected Projects"
                    align="left"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`${index === 2 ? 'lg:col-span-2' : ''}`}
                        >
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block relative rounded-3xl overflow-hidden bg-brand-dark border border-white/10 hover:border-brand-primary/50 transition-all duration-500 shadow-2xl">
                                {/* Browser Toolbar Mockup */}
                                <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    <div className="ml-4 px-3 py-1 rounded-full bg-black/30 text-[10px] text-white/40 font-mono w-full max-w-[200px] truncate">
                                        {project.url}
                                    </div>
                                </div>

                                {/* Project Content / Mockup */}
                                <div className={`relative p-8 md:p-12 ${index === 2 ? 'min-h-[300px]' : 'min-h-[400px]'} flex flex-col justify-end group-hover:bg-brand-primary/5 transition-colors duration-500`}>

                                    {/* Abstract Gradient Background representing the "Image" */}
                                    <div className="absolute inset-0 z-0">
                                        <div className="absolute inset-x-10 -bottom-20 h-64 bg-gradient-to-t from-brand-primary/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                                        <div className="absolute -right-20 top-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px]" />
                                    </div>

                                    {/* Hover Reveal Arrow */}
                                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-bold font-display text-white mb-3 group-hover:text-brand-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-white/60 text-lg max-w-xl">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
