// Navigation links
export const NAV_LINKS = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Process', href: '/#process' },
    { name: 'Works', href: '/work' },
    { name: 'Contact', href: '/contact' },
];

// Company information
export const COMPANY = {
    name: 'DotQ',
    fullName: 'Dotq IT & Automation',
    tagline: 'Engineering The Impossible.',
    description: 'Premier IT company in India offering freelance services, web development, mobile app development with Flutter, e-commerce solutions, digital marketing, and custom software for global enterprises.',
    email: 'business@dotq.in',
    phone: '+91 9207209856',
    location: 'Kochi, Kerala, India',
    city: 'Kochi, India',
    copyright: '© 2026 Dotq IT Automation. All rights reserved.',
};

// Social links (only verified existing URLs)
export const SOCIAL_LINKS = [
    { name: 'Instagram', href: 'https://www.instagram.com/dotq__/', external: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/dotq-in/', external: true },
    { name: 'Twitter', href: 'https://twitter.com/', external: true },
    { name: 'GitHub', href: 'https://github.com/RohithER12', external: true },
];

// Technology marquee items
export const TECH_STACK = [
    { name: 'Flutter', category: 'Cross-Platform Mobile Apps' },
    { name: 'Next.js', category: 'Frontend Framework' },
    { name: 'React', category: 'UI Library' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Go', category: 'Backend Systems' },
    { name: 'E-Commerce', category: 'Digital Storefronts' },
    { name: 'WebGL', category: 'Graphics Engine' },
    { name: 'LLM Integration', category: 'Artificial Intelligence' },
];

// Technology categories for the dark Technologies We Use section
export const TECHNOLOGY_CATEGORIES = [
    {
        num: '01',
        title: 'Mobile & Web Apps (Flutter & React)',
        description: 'Cross-platform mobile applications engineered with Flutter alongside high-performance Next.js and React web apps.',
        tools: ['Flutter', 'Next.js', 'React', 'TypeScript', 'iOS & Android', 'TailwindCSS'],
    },
    {
        num: '02',
        title: 'Backend & Microservices',
        description: 'High-concurrency microservices, distributed architectures, and serverless backends built for high performance.',
        tools: ['Go', 'Node.js', 'REST APIs', 'gRPC', 'PostgreSQL', 'Redis'],
    },
    {
        num: '03',
        title: 'Automation & Cloud DevOps',
        description: 'Automated business workflows, CI/CD pipelines, containerization, and cloud infrastructure management.',
        tools: ['n8n Workflows', 'Docker', 'CI/CD Pipelines', 'DevOps', 'Cloud Infra'],
    },
    {
        num: '04',
        title: 'AI & Data Intelligence',
        description: 'Large Language Model (LLM) integrations, vector search databases, and custom AI-driven automation tools.',
        tools: ['LLM APIs', 'Vector Search', 'Python', 'Custom AI Models'],
    },
];

// Brand statement (Concise & Punchy matching Nova reference)
export const BRAND_STATEMENT = {
    part1: "We engineer high-performance web applications, cross-platform mobile apps, and intelligent automation systems that transform how modern businesses scale.",
    part2: "From enterprise backends to cloud infrastructure, we build resilient digital products designed for speed, reliability, and real business impact.",
};

// Services (DOTQ capabilities)
export const SERVICES = [
    {
        id: 'web-mobile-dev',
        num: '01',
        title: 'Web & Mobile App Development',
        description: 'Cross-platform Flutter mobile apps alongside Next.js and React web applications.',
        tags: ['Flutter', 'Next.js', 'React', 'iOS & Android', 'State Management'],
        graphicType: 'code-tree',
    },
    {
        id: 'custom-backend',
        num: '02',
        title: 'Custom IT Solutions & Backend',
        description: 'Distributed microservices and serverless architectures built with Go and Node.js.',
        tags: ['Go', 'Node.js', 'Microservices', 'Distributed Systems'],
        graphicType: 'architecture',
    },
    {
        id: 'ecommerce-dev',
        num: '03',
        title: 'E-Commerce Website Development',
        description: 'High-performance e-commerce storefronts, custom checkouts, and inventory sync.',
        tags: ['E-Commerce Platforms', 'Next.js Storefronts', 'Payment Gateways', 'Inventory Sync'],
        graphicType: 'webgl-preview',
    },
    {
        id: 'business-automation',
        num: '04',
        title: 'Business Automation Solutions',
        description: 'Cloud-native infrastructure, DevOps pipelines, and automated workflows.',
        tags: ['DevOps', 'Cloud Infrastructure', 'CI/CD Pipelines', 'n8n Workflows'],
        graphicType: 'workflow',
    },
    {
        id: 'performance-engineering',
        num: '05',
        title: 'Performance Engineering',
        description: 'Optimization for Core Web Vitals, sub-second latency, and high-load scenarios.',
        tags: ['Core Web Vitals', 'Load Optimization', 'Caching', 'Latency Reduction'],
        graphicType: 'performance-chart',
    },
    {
        id: 'ai-integration',
        num: '06',
        title: 'AI Integration',
        description: 'LLM API integration, vector databases, and custom AI model deployment.',
        tags: ['LLM APIs', 'Vector DBs', 'Custom AI Models', 'Prompt Workflows'],
        graphicType: 'ai-panel',
    },
    {
        id: 'digital-marketing',
        num: '07',
        title: 'Digital Marketing',
        description: 'Data-driven SEO, performance marketing, social media campaigns, and conversion rate optimization.',
        tags: ['SEO & SEM', 'Performance Marketing', 'Social Media Ads', 'Analytics & CRO'],
        graphicType: 'digital-marketing',
    },
];

// Core delivery cards
export const DELIVERY_CARDS = [
    {
        id: 'product-engineering',
        title: 'Modern Web, Mobile & E-Commerce Engineering',
        description: 'Cross-platform mobile apps with Flutter, Next.js e-commerce storefronts, and React web applications.',
        visualType: 'browser-mobile',
    },
    {
        id: 'backend-systems',
        title: 'Reliable Backend Systems',
        description: 'Distributed systems, microservices and serverless applications engineered with Go and Node.js.',
        visualType: 'architecture-diagram',
    },
    {
        id: 'automation-ai-performance',
        title: 'Automation, AI and Performance',
        description: 'Business automation, LLM integration, cloud infrastructure and performance optimisation for demanding applications.',
        visualType: 'automation-dashboard',
    },
];

// Process steps
export const PROCESS_STEPS = [
    {
        num: '01',
        title: 'Discovery',
        description: 'We dive deep into your architecture, identifying bottlenecks and opportunities.',
        details: 'Comprehensive system audit, requirement analysis, and tech stack evaluation.',
        graphicType: 'audit',
    },
    {
        num: '02',
        title: 'Strategy',
        description: 'We engineer a roadmap that solves complex problems with elegant code.',
        details: 'System design blueprint, API specification, and technical risk assessment.',
        graphicType: 'roadmap',
    },
    {
        num: '03',
        title: 'Execution',
        description: 'Agile development with rigorous testing and pixel-perfect implementation.',
        details: 'Sprint-based iteration, CI/CD pipeline deployment, and unit/integration testing.',
        graphicType: 'pipeline',
    },
    {
        num: '04',
        title: 'Scale',
        description: 'Optimization for millions of users, ensuring 99.99% uptime.',
        details: 'Load testing, CDN configuration, real-time monitoring, and SLA assurances.',
        graphicType: 'scale-dashboard',
    },
];

// Capability summary cards
export const CAPABILITY_SUMMARY = [
    {
        title: 'Digital Product Engineering',
        capabilities: [
            'Web & Mobile App Development (Flutter)',
            'Custom IT Solutions & Backend',
            'E-Commerce Website Development',
        ],
        ctaText: 'Discuss Your Product',
        href: '/contact',
        featured: false,
    },
    {
        title: 'Scale & Growth',
        capabilities: [
            'Business Automation Solutions',
            'Performance Engineering',
            'AI Integration',
            'Digital Marketing & Growth',
        ],
        ctaText: 'Discuss Your Challenge',
        href: '/contact',
        featured: true,
    },
];

// Client portfolio
export const CLIENTS = [
    {
        id: 'naiksha',
        name: 'Naiksha',
        url: 'https://www.naiksha.com',
        displayUrl: 'www.naiksha.com',
        description: 'Next-generation e-commerce platform with immersive product visualization.',
        tags: ['E-Commerce', 'Web Design'],
        category: 'E-Commerce',
        cardStyle: 'browser',
        bgGradient: 'from-[#3b5966] via-[#2d4652] to-[#1c2e37]',
        previewImage: '/Works IMG/Naiksha 01.png',
        objectFit: 'object-cover',
        objectPosition: 'object-center',
    },
    {
        id: 'yugen-bags',
        name: 'Yugen Bags',
        url: 'https://yugenbags.com',
        displayUrl: 'yugenbags.com',
        description: 'Direct-to-consumer digital storefront engineered for high conversion rates.',
        tags: ['D2C Brand', 'Retail Tech'],
        category: 'E-Commerce & Retail',
        cardStyle: 'image',
        bgGradient: 'from-[#2d4030] via-[#1f2e22] to-[#121c14]',
        previewImage: '/Works IMG/yugenbags 01.png',
    },
    {
        id: 'fourteen-yards',
        name: 'Fourteen Yards Studio',
        url: 'https://fourteenyardsarchitecturestudio.com',
        displayUrl: 'fourteenyardsarchitecturestudio.com',
        description: 'Minimalist architectural portfolio and design studio showcase.',
        tags: ['Architecture', 'Portfolio'],
        category: 'Architecture & Design',
        cardStyle: 'browser',
        bgGradient: 'from-[#4a3e3d] via-[#352c2b] to-[#211a19]',
        previewImage: '/Works IMG/Fourteen Yards 01.png',
    },
    {
        id: 'breta-world',
        name: 'Breta World',
        url: 'https://bretaworld.com',
        displayUrl: 'bretaworld.com',
        description: 'Enterprise global web presence and interactive corporate platform.',
        tags: ['Corporate Web', 'Enterprise'],
        category: 'Corporate & Tech',
        cardStyle: 'image',
        bgGradient: 'from-[#1e3a8a] via-[#172554] to-[#0f172a]',
        previewImage: '/Works IMG/bretaworld 01.png',
    },
    {
        id: 'kasera-interiors',
        name: 'Kasera Interiors',
        url: 'https://www.keserainteriors.com/',
        displayUrl: 'keserainteriors.com',
        description: 'Luxury interior design portfolio highlighting key architectural projects.',
        tags: ['Interior Design', 'Portfolio'],
        category: 'Interior Design',
        cardStyle: 'image',
        bgGradient: 'from-[#4a4238] via-[#332d26] to-[#1c1814]',
        previewImage: '/Works IMG/Kasera Interiros 01.png',
    },
    {
        id: 'stoxwaves',
        name: 'Stoxwaves',
        url: 'https://stoxwaves.com',
        displayUrl: 'stoxwaves.com',
        description: 'Fintech platform and market analytics portal engineered for real-time data visualization.',
        tags: ['Fintech', 'Market Analytics'],
        category: 'Fintech & Analytics',
        cardStyle: 'image',
        bgGradient: 'from-[#0f172a] via-[#1e293b] to-[#020617]',
        previewImage: '/Works IMG/Stoxwave 01.png',
    },
    {
        id: 'cff-academy',
        name: 'CFF Academy',
        url: 'https://cffacademy.com',
        displayUrl: 'cffacademy.com',
        description: "Premier children's football academy platform engineered for player enrollment, training schedules, and youth sports development.",
        tags: ['Youth Football', 'Sports Tech'],
        category: 'Sports & Football Academy',
        cardStyle: 'image',
        bgGradient: 'from-[#14532d] via-[#064e3b] to-[#022c22]',
        previewImage: '/Works IMG/CFFAcadamy 01.png',
    },
    {
        id: 'zenmode-clothing',
        name: 'Zenmode Clothing',
        url: 'https://zenmodeclothing.com',
        displayUrl: 'zenmodeclothing.com',
        description: 'Direct-to-consumer apparel storefront engineered for high conversion and minimal aesthetic.',
        tags: ['Fashion D2C', 'E-Commerce'],
        category: 'Apparel & E-Commerce',
        cardStyle: 'image',
        bgGradient: 'from-[#2a2a2a] via-[#1a1a1a] to-[#0d0d0d]',
        previewImage: '/Works IMG/Zenmode Clothing 01.png',
    },
];

// Featured projects (aliased to CLIENTS for backward compatibility)
export const PROJECTS = CLIENTS;

