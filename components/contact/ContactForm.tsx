'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function ContactForm() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (status !== 'idle') setStatus('idle');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('Please complete all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            // Trigger mailto link fallback seamlessly
            const mailtoLink = `mailto:${COMPANY.email}?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
            )}`;

            // Short artificial delay for smooth UX feedback
            await new Promise((resolve) => setTimeout(resolve, 800));

            window.location.href = mailtoLink;
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
            setErrorMessage('Something went wrong. Please email us directly at ' + COMPANY.email);
        }
    };

    return (
        <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-nova-md"
        >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Form Field: Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Your Name <span className="text-muted">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all"
                    />
                </div>

                {/* Form Field: Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Email Address <span className="text-muted">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all"
                    />
                </div>

                {/* Form Field: Project Details */}
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Tell Us About Your Project <span className="text-muted">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your system requirements, tech stack, scale or timeline..."
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all resize-none"
                    />
                </div>

                {/* Status Banners */}
                {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                    </div>
                )}

                {status === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Thank you! Your inquiry message draft has been prepared. We'll be in touch soon.</span>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-full bg-cobalt text-white font-medium text-sm hover:bg-cobalt-hover shadow-nova-sm hover:shadow-cobalt-glow transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-muted">
                    We typically respond within 24 hours
                </p>
            </form>
        </motion.div>
    );
}
