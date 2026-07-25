import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/layout/PageShell";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { DEFAULT_METADATA } from "@/lib/metadata";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DotQ',
        legalName: 'Dotq IT Automation',
        url: 'https://dotq.in',
        logo: 'https://dotq.in/assets/dotq-logo.png',
        sameAs: [
            'https://www.instagram.com/dotq__/',
            'https://www.linkedin.com/company/dotq',
            'https://twitter.com/dotq',
            'https://github.com/RohithER12'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'rohither.tech@gmail.com',
            contactType: 'customer service'
        },
        description: 'Premier IT company in India offering freelance services, web development, automation and custom software for global enterprises.'
    };

    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="antialiased bg-white text-text-primary font-sans" suppressHydrationWarning>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <SmoothScroll>
                    <PageShell>
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </PageShell>
                </SmoothScroll>
            </body>
        </html>
    );
}
