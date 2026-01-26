import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { DEFAULT_METADATA } from "@/lib/metadata";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
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
        name: 'Dotq',
        url: 'https://dotq.dev',
        logo: 'https://dotq.dev/logo.png',
        sameAs: [
            'https://www.linkedin.com/company/dotq',
            'https://twitter.com/dotq'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '',
            contactType: 'customer service'
        },
        description: 'Dotq is a premier IT and automation company based in India, specializing in custom software development, freelance IT services, and digital transformation.'
    };

    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased bg-brand-dark">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <SmoothScroll>
                    <NoiseOverlay />
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
