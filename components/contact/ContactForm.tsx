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
        website: '', // Honeypot field (hidden from real users)
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
        if (status === 'error') setStatus('idle');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('Please complete all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                    website: formData.website, // Honeypot payload
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                // Reset form fields on successful email submission
                setFormData({ name: '', email: '', message: '', website: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || "Sorry, we couldn’t send your message right now. Please try again in a moment.");
            }
        } catch (err) {
            console.error('Submission fetch error:', err);
            setStatus('error');
            setErrorMessage("Sorry, we couldn’t send your message right now. Please try again in a moment.");
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
                {/* Honeypot Anti-Spam Field (Hidden from human visitors) */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>

                {/* Form Field: Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Your Name <span className="text-cobalt" aria-hidden="true">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        disabled={status === 'loading'}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all disabled:opacity-60"
                    />
                </div>

                {/* Form Field: Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Email Address <span className="text-cobalt" aria-hidden="true">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        disabled={status === 'loading'}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all disabled:opacity-60"
                    />
                </div>

                {/* Form Field: Project Details */}
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-primary">
                        Tell Us About Your Project <span className="text-cobalt" aria-hidden="true">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        disabled={status === 'loading'}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your system requirements, tech stack, scale or timeline..."
                        className="w-full px-4 py-3.5 rounded-xl bg-canvas border border-border-subtle text-primary text-sm placeholder:text-muted focus:outline-none focus:border-gray-400 focus:bg-white transition-all resize-none disabled:opacity-60"
                    />
                </div>

                {/* Accessibility Live Region for Status Notifications */}
                <div aria-live="polite" role="status" className="space-y-3">
                    {status === 'error' && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2.5">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                            <span>Thank you! Your message has been sent successfully. We’ll get back to you shortly.</span>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-full bg-cobalt text-white font-medium text-sm hover:bg-cobalt-hover shadow-nova-sm hover:shadow-cobalt-glow transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
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
