'use client';

import React from 'react';

interface DeviceMockupProps {
    children: React.ReactNode;
    className?: string;
}

export default function DeviceMockup({
    children,
    className = "",
}: DeviceMockupProps) {
    return (
        <div className={`relative rounded-[32px] p-2.5 bg-[#18181B] shadow-nova-lg border border-white/20 ${className}`}>
            {/* Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#18181B] rounded-full z-20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>

            {/* Screen Viewport */}
            <div className="relative rounded-[24px] bg-white overflow-hidden text-text-primary h-full pt-6">
                {children}
            </div>
        </div>
    );
}
