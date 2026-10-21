'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductDetail } from '@/lib/productData';
import Button from '@/components/ui/Button';
import { ChevronRight, ArrowLeft, ArrowRight, Mail, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface Props {
    product: ProductDetail;
    otherProduct?: { id: string; name: string };
}

export default function ProductDetailView({ product, otherProduct }: Props) {
    const previewSrc = product.image || (product.id === 'goforge' ? '/GoForge Multi-Tenant Analytics Dashboard.png' : '/Tapq dashboard.png');

    return (
        <article className="min-h-screen bg-canvas py-12 sm:py-20 select-none">
            <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-medium text-secondary mb-10" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <Link href="/product" className="hover:text-primary transition-colors">
                        Products
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-primary font-semibold truncate">
                        {product.name}
                    </span>
                </nav>

                {/* Header Area */}
                <header className="space-y-6 mb-10 sm:mb-12">
                    <h1 className="text-3xl sm:text-5xl font-sans font-medium text-primary tracking-tight leading-[1.12]">
                        {product.name}
                    </h1>

                    <p className="text-lg sm:text-xl text-primary font-medium leading-relaxed">
                        {product.headline}
                    </p>

                    <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal pt-1">
                        {product.summary}
                    </p>

                    {/* Metadata Strip */}
                    <div className="pt-4 pb-2 border-y border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Platform
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                {product.name}
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Category
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                {product.category}
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Primary Tech
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                Go & PostgreSQL
                            </span>
                        </div>
                        <div>
                            <span className="block font-mono text-zinc-400 uppercase tracking-wider mb-1">
                                Engineered By
                            </span>
                            <span className="font-semibold text-primary text-sm">
                                DotQ
                            </span>
                        </div>
                    </div>
                </header>

                {/* Conceptual UI Preview Visual (No border outline) */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-nova-md bg-slate-900 mb-14 sm:mb-18">
                    <Image
                        src={previewSrc}
                        alt={`${product.name} interface visual reference`}
                        fill
                        sizes="(max-width: 880px) 100vw, 880px"
                        priority
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Main Editorial Content */}
                <main className="space-y-14 sm:space-y-16">
                    {/* What is Product Section */}
                    <section className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            What is {product.name}?
                        </h2>
                        <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed font-normal">
                            {product.overviewParagraphs.map((para, idx) => (
                                <p key={idx}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </section>

                    {/* Problem Solved (for TapQ) */}
                    {product.problemSolved && (
                        <section className="space-y-5">
                            <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                                The Operational Problem {product.name} Solves
                            </h2>
                            <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
                                {product.problemSolved.description}
                            </p>
                            <ul className="space-y-3 pt-2">
                                {product.problemSolved.points.map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-base text-secondary leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span className="text-primary font-normal">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Core Product Capabilities */}
                    <section className="space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Core Product Capabilities
                        </h2>

                        <div className="space-y-8">
                            {product.coreCapabilities.map((cap, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-lg sm:text-xl font-semibold text-primary">
                                        {idx + 1}. {cap.title}
                                    </h3>
                                    <p className="text-base text-secondary leading-relaxed font-normal">
                                        {cap.description}
                                    </p>
                                    {cap.points && cap.points.length > 0 && (
                                        <ul className="space-y-2 pt-1 pl-1">
                                            {cap.points.map((pt, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-secondary leading-relaxed">
                                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                                    <span className="text-primary font-normal">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Architecture & Flow */}
                    <section className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            {product.architecture.title}
                        </h2>
                        <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
                            {product.architecture.description}
                        </p>

                        {/* Request Flow Sequence */}
                        <div className="space-y-6 pt-2">
                            {product.architecture.flowSteps.map((step) => (
                                <div key={step.step} className="space-y-1.5">
                                    <h4 className="text-base sm:text-lg font-semibold text-primary">
                                        {step.step}. {step.title}
                                    </h4>
                                    <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                                        {step.detail}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Architectural Principles if present */}
                        {product.architecture.principles && (
                            <div className="pt-4 space-y-3">
                                <h3 className="text-lg font-semibold text-primary">
                                    Key Architectural Principles
                                </h3>
                                <ul className="space-y-2 pl-1">
                                    {product.architecture.principles.map((pr, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-secondary leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                            <span className="text-primary font-normal">{pr}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Technology Stack Table */}
                    <section className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Technology Stack & Architecture
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-border-subtle text-primary font-semibold">
                                        <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-zinc-500 w-1/3">
                                            Component
                                        </th>
                                        <th className="py-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                                            Technology / Approach
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-subtle">
                                    {product.techStack.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-black/[0.01] transition-colors">
                                            <td className="py-3.5 pr-4 font-medium text-primary align-top">
                                                {item.component}
                                            </td>
                                            <td className="py-3.5 text-secondary font-normal align-top leading-relaxed">
                                                {item.technology}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Payment Security & Reliability (for GoForge) */}
                    {product.securityReliability && (
                        <section className="space-y-5">
                            <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                                {product.securityReliability.title}
                            </h2>
                            {product.securityReliability.description && (
                                <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal">
                                    {product.securityReliability.description}
                                </p>
                            )}
                            <ul className="space-y-3 pt-2">
                                {product.securityReliability.points.map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-base text-secondary leading-relaxed">
                                        <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-primary font-normal">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            {product.securityReliability.verificationNote && (
                                <div className="mt-4 p-5 rounded-2xl bg-surface-subtle border border-border-subtle">
                                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                                        {product.securityReliability.verificationNote}
                                    </p>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Who is it for? */}
                    <section className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Who is {product.name} For?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                            {product.targetAudience.map((target, idx) => (
                                <div key={idx} className="space-y-2">
                                    <h3 className="text-lg font-semibold text-primary">
                                        {target.title}
                                    </h3>
                                    <p className="text-sm text-secondary leading-relaxed font-normal">
                                        {target.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Value Propositions (for GoForge) */}
                    {product.valueProps && (
                        <section className="space-y-5">
                            <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                                What Makes {product.name} Valuable?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                {product.valueProps.map((vp, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="text-lg font-semibold text-primary">
                                            {vp.title}
                                        </h3>
                                        <p className="text-sm text-secondary leading-relaxed font-normal">
                                            {vp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Product Roadmap (for TapQ) */}
                    {product.roadmap && (
                        <section className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                                Product Roadmap & Phasing
                            </h2>
                        <div className="space-y-8 pt-2">
                            {product.roadmap.map((rm, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs font-bold text-primary">
                                            {rm.phase} • {rm.tag}
                                        </span>
                                        <h3 className="text-lg font-semibold text-primary">
                                            {rm.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-1.5 pl-1">
                                        {rm.items.map((it, iIdx) => (
                                            <li key={iIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-secondary leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                <span className="text-primary font-normal">{it}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {rm.successCriteria && (
                                        <p className="text-xs text-secondary pt-1 font-mono">
                                            Success criterion: {rm.successCriteria}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        </section>
                    )}

                    {/* Development Status */}
                    <section className="space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-semibold font-sans text-primary tracking-tight">
                            Current Development Position
                        </h2>
                        <p className="text-sm text-secondary leading-relaxed">
                            {product.developmentStatus.summary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-3">
                                <h3 className="text-base font-semibold text-primary flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Implemented or Substantially Developed</span>
                                </h3>
                                <ul className="space-y-2 pl-1">
                                    {product.developmentStatus.implemented.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                                            <span className="text-primary font-normal">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-base font-semibold text-primary flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-amber-600" />
                                    <span>Requires Latest-State Verification</span>
                                </h3>
                                <ul className="space-y-2 pl-1">
                                    {product.developmentStatus.inVerification.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                                            <span className="text-primary font-normal">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Recommended Product Positioning Block */}
                    <section className="p-8 sm:p-10 rounded-3xl bg-surface-subtle border border-border-subtle space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                            {product.positioningStatement.title}
                        </h3>
                        <p className="text-base font-medium text-primary leading-relaxed">
                            {product.positioningStatement.lead}
                        </p>
                        <p className="text-sm sm:text-base text-secondary leading-relaxed">
                            {product.positioningStatement.body}
                        </p>
                        <div className="pt-2">
                            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                Core Capabilities
                            </h4>
                            <ul className="space-y-2 pl-1">
                                {product.positioningStatement.coreBullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span className="text-primary font-normal">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-xs font-mono text-zinc-400 pt-2">
                            {product.positioningStatement.conclusion}
                        </p>
                    </section>

                    {/* Next / Other Product Navigation */}
                    <nav className="pt-8 border-t border-border-subtle flex items-center justify-between gap-4 text-sm" aria-label="Product Navigation">
                        <Link
                            href="/product"
                            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>All DotQ Products</span>
                        </Link>

                        {otherProduct && (
                            <Link
                                href={`/product/${otherProduct.id}`}
                                className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors ml-auto"
                            >
                                <span>Explore {otherProduct.name}</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </nav>

                    {/* Direct Consultation Callout */}
                    <section className="p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-nova-sm space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-primary tracking-tight">
                                Interested in deploying {product.name}?
                            </h3>
                            <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal max-w-xl">
                                We review your business requirements, discuss tenant onboarding or WhatsApp commerce workflows, and provide an architecture consultation.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <Button href="/contact" variant="primary" size="md" showArrow={true}>
                                Request Platform Consultation
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
                </main>
            </div>
        </article>
    );
}
