import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Contact',
    description: 'Have a challenging project? Get in touch with DotQ. We\'re ready to tackle complex engineering problems and deliver production-ready solutions.',
    path: '/contact',
});

export default function ContactPage() {
    return <ContactForm />;
}
