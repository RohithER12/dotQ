// Navigation links
export const NAV_LINKS = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/#process' },
    { name: 'Works', href: '/work' },
    { name: 'Contact', href: '/contact' },
];

// Company information
export const COMPANY = {
    name: 'DotQ',
    fullName: 'Dotq IT & Automation',
    tagline: 'Engineering The Impossible.',
    description: 'Premier IT company in India offering freelance services, web development, mobile app development with Flutter, e-commerce solutions, and custom software for global enterprises.',
    email: 'rohither.tech@gmail.com',
    phone: '+91 90722 06389',
    copyright: '© 2026 Dotq IT Automation. All rights reserved.',
};

// Social links (only verified existing URLs)
export const SOCIAL_LINKS = [
    { name: 'Instagram', href: 'https://www.instagram.com/dotq__/', external: true },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dot-q-b667393a8/', external: true },
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

// Services (6 genuine DOTQ capabilities)
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
        title: 'Scale & Intelligence',
        capabilities: [
            'Business Automation Solutions',
            'Performance Engineering',
            'AI Integration',
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
        tags: ['Next.js', 'E-Commerce', 'Product Visualization'],
        category: 'E-Commerce',
    },
    {
        id: 'yugen-bags',
        name: 'Yugen Bags',
        url: 'https://yugenbags.com',
        displayUrl: 'yugenbags.com',
        description: 'Direct-to-consumer digital storefront engineered for high conversion rates.',
        tags: ['E-Commerce', 'D2C Brand', 'Retail Tech'],
        category: 'E-Commerce & Retail',
    },
    {
        id: 'fourteen-yards',
        name: 'Fourteen Yards Studio',
        url: 'https://fourteenyardsarchitecturestudio.com',
        displayUrl: 'fourteenyardsarchitecturestudio.com',
        description: 'Minimalist architectural portfolio and design studio showcase.',
        tags: ['Architecture', 'Portfolio', 'UI/UX Design'],
        category: 'Architecture & Design',
    },
    {
        id: 'breta-world',
        name: 'Breta World',
        url: 'https://bretaworld.com',
        displayUrl: 'bretaworld.com',
        description: 'Enterprise global web presence and interactive corporate platform.',
        tags: ['Corporate Web', 'Next.js', 'Enterprise'],
        category: 'Corporate & Tech',
    },
    {
        id: 'myson',
        name: 'Myson',
        url: 'https://myson.in',
        displayUrl: 'myson.in',
        description: 'High-performance e-commerce storefront with optimized checkout.',
        tags: ['E-Commerce', 'Web App', 'Brand Store'],
        category: 'E-Commerce',
    },
    {
        id: 'kasera-interiors',
        name: 'Kasera Interiors',
        url: 'https://www.keserainteriors.com/',
        displayUrl: 'keserainteriors.com',
        description: 'Luxury interior design portfolio highlighting key architectural projects.',
        tags: ['Interior Design', 'Portfolio', 'Custom Web'],
        category: 'Interior Design',
    },
];

// Featured projects (aliased to CLIENTS for backward compatibility)
export const PROJECTS = CLIENTS;

