'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight, Mail, Layers, MessageSquareCode } from 'lucide-react';
import { GOFORGE_PRODUCT, TAPQ_PRODUCT, COMPARISON_MATRIX } from '@/lib/productData';
import ProductHero from './ProductHero';
import FinalCTA from '@/components/home/FinalCTA';

export default function ProductHubScreen() {
    return (
        <article className="min-h-screen bg-canvas select-none">
            {/* Standard Full-width Elevated Hero Section */}
            <ProductHero />

            <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
                {/* Quick Jump Strip */}
                <div className="mb-12 sm:mb-16 pt-2 pb-8 border-b border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <Link
                        href="#goforge"
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-border-subtle hover:border-zinc-400 transition-colors shadow-subtle"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-primary group-hover:bg-cobalt group-hover:text-white transition-colors">
                                <Layers className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="block font-semibold text-primary text-sm">GoForge</span>
                                <span className="text-secondary text-xs">Multi-Tenant Commerce Engine</span>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                    </Link>

                    <Link
                        href="#tapq"
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-border-subtle hover:border-zinc-400 transition-colors shadow-subtle"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-primary group-hover:bg-cobalt group-hover:text-white transition-colors">
                                <MessageSquareCode className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="block font-semibold text-primary text-sm">TapQ</span>
                                <span className="text-secondary text-xs">WhatsApp Commerce Operating System</span>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                    </Link>
                </div>

                {/* Product 1: GoForge Showcase */}
                <section id="goforge" className="space-y-8 pb-16 sm:pb-20 border-b border-border-subtle scroll-mt-24">
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-4xl font-semibold font-sans text-primary tracking-tight">
                            GoForge
                        </h2>
                        <p className="text-lg text-primary font-medium">
                            {GOFORGE_PRODUCT.headline}
                        </p>
                        <p className="text-base text-secondary leading-relaxed">
                            {GOFORGE_PRODUCT.summary}
                        </p>
                    </div>

                    {/* GoForge Conceptual Visual (No border outline) */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-nova-md bg-slate-900">
                        <Image
                            src={GOFORGE_PRODUCT.image}
                            alt="GoForge Multi-Tenant Analytics Dashboard"
                            fill
                            sizes="(max-width: 880px) 100vw, 880px"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                            Core Engineering Highlights
                        </h3>
                        <div className="space-y-5">
                            {GOFORGE_PRODUCT.coreCapabilities.slice(0, 4).map((cap, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <h4 className="text-base sm:text-lg font-semibold text-primary">
                                        {cap.title}
                                    </h4>
                                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                                        {cap.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        <Button href="/product/goforge" variant="primary" size="md" showArrow={true}>
                            Explore GoForge Architecture & Details
                        </Button>
                        <span className="text-xs font-mono text-zinc-400">
                            Go • PostgreSQL • Firebase Auth • Razorpay AES-256-GCM
                        </span>
                    </div>
                </section>

                {/* Product 2: TapQ Showcase */}
                <section id="tapq" className="space-y-8 py-16 sm:py-20 border-b border-border-subtle scroll-mt-24">
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-4xl font-semibold font-sans text-primary tracking-tight">
                            TapQ
                        </h2>
                        <p className="text-lg text-primary font-medium">
                            {TAPQ_PRODUCT.headline}
                        </p>
                        <p className="text-base text-secondary leading-relaxed">
                            {TAPQ_PRODUCT.summary}
                        </p>
                    </div>

                    {/* TapQ Conceptual Visual (No border outline) */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-nova-md bg-slate-900">
                        <Image
                            src={TAPQ_PRODUCT.image}
                            alt="TapQ WhatsApp Commerce OS Dashboard"
                            fill
                            sizes="(max-width: 880px) 100vw, 880px"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                            Core Engineering Highlights
                        </h3>
                        <div className="space-y-5">
                            {TAPQ_PRODUCT.coreCapabilities.slice(0, 4).map((cap, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <h4 className="text-base sm:text-lg font-semibold text-primary">
                                        {cap.title}
                                    </h4>
                                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                                        {cap.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        <Button href="/product/tapq" variant="primary" size="md" showArrow={true}>
                            Explore TapQ Architecture & Details
                        </Button>
                        <span className="text-xs font-mono text-zinc-400">
                            Go Modular Monolith • Next.js • PostgreSQL • Meta Cloud API
                        </span>
                    </div>
                </section>

                {/* Section 3: Comparative Analysis Matrix */}
                <section className="space-y-6 py-16 sm:py-20">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            How TapQ and GoForge Complement Each Other
                        </h2>
                        <p className="text-base text-secondary leading-relaxed">
                            While both platforms empower modern digital merchants, they solve distinct problems across the commerce journey. GoForge powers structured, high-traffic web storefronts with multi-tenant scale; TapQ transforms high-intent WhatsApp conversations into verified orders and payments.
                        </p>
                    </div>

                    <div className="overflow-x-auto pt-4">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-border-subtle text-primary font-semibold">
                                    <th className="py-3.5 pr-4 font-mono text-xs uppercase tracking-wider text-zinc-500 w-1/4">
                                        Area
                                    </th>
                                    <th className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-zinc-500 w-[37.5%]">
                                        TapQ (WhatsApp-First)
                                    </th>
                                    <th className="py-3.5 pl-4 font-mono text-xs uppercase tracking-wider text-zinc-500 w-[37.5%]">
                                        GoForge (Multi-Tenant Storefront)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-subtle">
                                {COMPARISON_MATRIX.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-black/[0.01] transition-colors">
                                        <td className="py-4 pr-4 font-semibold text-primary align-top text-xs sm:text-sm">
                                            {row.area}
                                        </td>
                                        <td className="py-4 px-4 text-secondary font-normal align-top leading-relaxed text-xs sm:text-sm">
                                            {row.tapq}
                                        </td>
                                        <td className="py-4 pl-4 text-secondary font-normal align-top leading-relaxed text-xs sm:text-sm">
                                            {row.goforge}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Consultation Callout */}
                <section className="p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-nova-sm space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-primary tracking-tight">
                            Interested in DotQ Platform Architecture?
                        </h3>
                        <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal max-w-xl">
                            Whether you need multi-tenant commerce infrastructure, conversational WhatsApp automation, or bespoke software engineering, our technical team is ready to consult.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        <Button href="/contact" variant="primary" size="md" showArrow={true}>
                            Start a Conversation
                        </Button>
                        <a
                            href="mailto:business@dotq.in"
                            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            <Mail className="w-4 h-4 text-zinc-500" />
                            <span>business@dotq.in</span>
                        </a>
                    </div>
                </section>
            </div>

            {/* Signature Cobalt Callout matching Services and Works pages */}
            <FinalCTA />
        </article>
    );
}
