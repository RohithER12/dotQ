'use client';

import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    dark?: boolean;
}

export default function SectionWrapper({ children, id, className = '', dark = false }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`py-24 md:py-32 relative overflow-hidden ${dark ? 'bg-brand-dark' : 'bg-brand-dark/95'} ${className}`}
        >
            {/* Subtle Gradient Mesh Background - ensuring no static blocks */}
            {!dark && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                </div>
            )}
            {children}
        </section>
    );
}
