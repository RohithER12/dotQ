import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactLeftGraphic from '@/components/contact/ContactLeftGraphic';
import { generateMetadata } from '@/lib/metadata';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata = generateMetadata({
    title: 'Contact DotQ | Start Your Custom Software Project',
    description: 'Contact DotQ to discuss custom software development, web & mobile applications, Go backends, e-commerce platforms, or business workflow automation.',
    path: '/contact',
});

export default function ContactPage() {
    const breadcrumbJsonLd = getBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
    ]);

    return (
        <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-canvas relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <ContactHero />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Side: Increased Size 3D Element Graphic & Info */}
                <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-start">
                    <ContactLeftGraphic />
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-6 xl:col-span-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
