'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/lib/constants';
import { Send, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${COMPANY.email}?subject=Contact from ${formData.name}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const inputClasses = "w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none transition-all duration-300";

    return (
        <SectionWrapper id="contact" dark>
            <div className="max-w-3xl mx-auto w-full px-6">
                <SectionTitle
                    title="Let's Build Something Complex"
                    subtitle="Contact Us"
                    className="mb-16"
                />

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {['name', 'email'].map((field) => (
                            <div key={field} className="relative group">
                                <label
                                    htmlFor={field}
                                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === field || formData[field as keyof typeof formData]
                                        ? '-top-3 text-xs text-brand-primary bg-brand-dark px-1'
                                        : 'top-4 text-white/40'
                                        }`}
                                >
                                    {field === 'name' ? 'Your Name' : 'Email Address'}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    id={field}
                                    name={field}
                                    required
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField(field)}
                                    onBlur={() => setFocusedField(null)}
                                    className={`${inputClasses} ${focusedField === field ? 'border-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'group-hover:border-white/20'}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="relative group">
                        <label
                            htmlFor="message"
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                                ? '-top-3 text-xs text-brand-primary bg-brand-dark px-1'
                                : 'top-4 text-white/40'
                                }`}
                        >
                            Tell Us About Your Project
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            rows={6}
                            className={`${inputClasses} resize-none ${focusedField === 'message' ? 'border-brand-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'group-hover:border-white/20'}`}
                        />
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <button
                            type="submit"
                            className="w-full px-8 py-4 rounded-full bg-brand-primary text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </motion.div>

                    <p className="text-center text-sm text-white/40">
                        We typically respond within 24 hours
                    </p>
                </motion.form>
            </div>
        </SectionWrapper>
    );
}
