import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactLeftGraphic from '@/components/contact/ContactLeftGraphic';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
    title: 'Contact DotQ | Start Your Project',
    description: 'Discuss your web development, automation, custom software, backend, performance or AI integration project with DotQ.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-canvas relative overflow-hidden">
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
