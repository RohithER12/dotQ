import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/layout/PageShell";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import { DEFAULT_METADATA } from "@/lib/metadata";
import { getOrganizationSchema } from "@/lib/schema";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6G99KSVBNK';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = getOrganizationSchema();

    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${outfit.variable}`} suppressHydrationWarning>
            <body className="antialiased bg-white text-text-primary font-sans" suppressHydrationWarning>
                {gaMeasurementId && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gaMeasurementId}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <SmoothScroll>
                    <PageShell>
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                        <WhatsAppFloatingButton />
                    </PageShell>
                </SmoothScroll>
            </body>
        </html>
    );
}
