'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-2xl font-bold font-display tracking-tight text-white">
                        DotQ
                    </span>
                    <p className="text-white/40 text-sm">
                        Engineering The Impossible.
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-white/60">
                    <Link href="#" className="hover:text-brand-primary transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-brand-primary transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-brand-primary transition-colors">GitHub</Link>
                </div>

                <div className="text-white/20 text-xs">
                    © {new Date().getFullYear()} DotQ Inc.
                </div>
            </div>
        </footer>
    );
}
