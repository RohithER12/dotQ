import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';

export const metadata = {
    title: 'Privacy Policy | DotQ IT & Automation',
    description: 'Privacy Policy for DotQ IT & Automation.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="py-20 sm:py-28 bg-white min-h-screen">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xs font-mono text-cobalt hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-6">
                    Privacy Policy
                </h1>
                <div className="prose prose-zinc max-w-none text-secondary space-y-4 text-sm leading-relaxed">
                    <p>Last updated: July 2026</p>
                    <p>
                        At {COMPANY.fullName} ({COMPANY.name}), accessible from dotq.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DotQ and how we use it.
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, and message details when you reach out to us via our contact form or direct email ({COMPANY.email}).
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">How We Use Information</h2>
                    <p>
                        We use the information we collect to communicate with you, fulfill requested development services, provide project updates, and improve our services.
                    </p>
                    <h2 className="text-lg font-bold text-primary pt-4">Contact Us</h2>
                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{' '}
                        <a href={`mailto:${COMPANY.email}`} className="text-cobalt underline">
                            {COMPANY.email}
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
