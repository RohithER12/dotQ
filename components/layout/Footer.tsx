import { COMPANY } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/10 bg-background">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold gradient-text">{COMPANY.name}</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-foreground/60 text-sm">
                        © {currentYear} {COMPANY.name}. Engineering excellence, delivered.
                    </p>
                </div>
            </div>
        </footer>
    );
}
