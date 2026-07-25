'use client';

import React, { useState } from 'react';

interface BrowserMockupProps {
    url?: string;
    liveUrl?: string;
    previewImage?: string;
    children?: React.ReactNode;
    className?: string;
    title?: string;
}

export default function BrowserMockup({
    url = "https://dotq.in/app/dashboard",
    liveUrl,
    previewImage,
    children,
    className = "",
    title = "DotQ System Dashboard",
}: BrowserMockupProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Compute live screenshot URL if liveUrl is provided and previewImage is not explicitly passed
    const screenshotUrl = previewImage || (liveUrl ? `https://api.microlink.io/?url=${encodeURIComponent(liveUrl)}&screenshot=true&embed=screenshot.url` : null);

    return (
        <div className={`rounded-2xl overflow-hidden bg-white border border-border-subtle text-text-primary ${className}`}>
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F6F6F8] border-b border-border-subtle select-none">
                <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* URL Pill */}
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-black/5 text-xs text-text-muted max-w-[240px] sm:max-w-[340px] truncate">
                    <svg className="w-3.5 h-3.5 text-cobalt flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate text-text-secondary font-mono">{url}</span>
                </div>

                <div className="flex items-center gap-1.5 text-text-muted">
                    <span className="text-[10px] font-semibold bg-cobalt/10 text-cobalt px-2 py-0.5 rounded-full uppercase tracking-wider">
                        LIVE
                    </span>
                </div>
            </div>

            {/* Browser Canvas Content */}
            <div className="relative bg-canvas overflow-hidden min-h-[160px] sm:min-h-[190px] flex items-center justify-center">
                {screenshotUrl && !hasError ? (
                    <>
                        {/* Loading Skeleton */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-zinc-100 animate-pulse flex items-center justify-center p-6 text-xs text-zinc-400 font-mono">
                                <span>Loading preview...</span>
                            </div>
                        )}
                        {/* Live Website Screenshot Image */}
                        <img
                            src={screenshotUrl}
                            alt={`${title || url} preview`}
                            className={`w-full h-auto object-cover object-top transition-all duration-500 group-hover:scale-[1.03] ${
                                isLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setIsLoading(false);
                                setHasError(true);
                            }}
                            loading="lazy"
                        />
                    </>
                ) : (
                    <div className="w-full p-4 sm:p-6">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

