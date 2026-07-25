import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
    title: 'Contact DotQ | Start Your Project',
    description: 'Discuss your web development, automation, custom software, backend, performance or AI integration project with DotQ.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-canvas">
            <ContactHero />
            <ContactForm />
        </div>
    );
}
