'use client';

import React from 'react';

interface PageShellProps {
    children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
    return (
        <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-cobalt selection:text-white flex flex-col">
            {children}
        </div>
    );
}
