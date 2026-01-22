'use client';

import { motion } from 'framer-motion';

export default function CustomSVGGraphic() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg
                viewBox="0 0 1000 1000"
                className="w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.2 }} />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M 100 100 Q 500 500 900 100 T 900 900 T 100 900 T 100 100"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Abstract Blobs */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="url(#grad1)"
                    filter="blur(80px)"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                    cx="800"
                    cy="800"
                    r="200"
                    fill="#3b82f6"
                    fillOpacity="0.1"
                    filter="blur(100px)"
                    animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
        </div>
    );
}
