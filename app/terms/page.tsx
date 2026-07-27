import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
    title: 'Terms and Conditions | DotQ IT & Automation',
    description: 'Terms and Conditions for DotQ IT & Automation.',
    path: '/terms',
});

export default function TermsPage() {
    return (
        <div className="py-20 sm:py-28 bg-white min-h-screen">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xs font-mono text-cobalt hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-6">
                    Terms and Conditions
                </h1>
                <div className="prose prose-zinc max-w-none text-secondary space-y-4 text-sm leading-relaxed">
                    <p>Last updated: July 2026</p>
                    <p>
                        Welcome to {COMPANY.fullName}! These terms and conditions outline the rules and regulations for the use of DotQ&apos;s Website and Services.
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">Services</h2>
                    <p>
                        DotQ provides software engineering, web development, mobile app development, e-commerce, and business automation solutions under agreed client contracts.
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">Intellectual Property</h2>
                    <p>
                        Unless otherwise stated, DotQ and/or its licensors own the intellectual property rights for all material on DotQ. All intellectual property rights are reserved.
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">Contact</h2>
                    <p>
                        For any queries regarding our terms, please contact us at{' '}
                        <a href={`mailto:${COMPANY.email}`} className="text-cobalt underline">
                            {COMPANY.email}
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
