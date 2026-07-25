import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                outer: "#FFFFFF",
                canvas: "#FFFFFF",
                surface: "#FFFFFF",
                "surface-subtle": "#F8F8FA",
                "soft-blue": "#EEF1FF",
                "soft-lavender": "#F3F5FF",
                
                // Color mappings for both `text-primary` and `text-text-primary`
                primary: "#09090B",
                secondary: "#6F7078",
                muted: "#9A9BA2",

                "text-primary": "#09090B",
                "text-secondary": "#6F7078",
                "text-muted": "#9A9BA2",
                
                cobalt: {
                    DEFAULT: "#2442D7",
                    hover: "#1D37B8",
                    bright: "#405BFF",
                    light: "#A8B1FF",
                    subtle: "#EFF2FF",
                },
                
                border: {
                    subtle: "rgba(10, 10, 10, 0.08)",
                    strong: "rgba(10, 10, 10, 0.15)",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                '4xl': '32px',
                '3xl': '24px',
                '2xl': '18px',
                'xl': '14px',
            },
            boxShadow: {
                'nova-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
                'nova-md': '0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                'nova-lg': '0 20px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
                'cobalt-glow': '0 10px 30px rgba(36, 66, 215, 0.25)',
            },
            animation: {
                'marquee': 'marquee 35s linear infinite',
                'float-slow': 'floatSlow 7s ease-in-out infinite',
                'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-12px) rotate(2deg)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.85', transform: 'scale(1.02)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
