// Shared data for the About page

export const ABOUT_HERO = {
    eyebrow: 'ABOUT DOTQ',
    title: 'We engineer digital products built to move businesses forward.',
    description: 'DotQ builds high-performance websites, custom software, business automation and AI solutions.',
    primaryCta: { text: 'Start Your Project', href: '/contact' },
    secondaryCta: { text: 'Explore Our Work', href: '/work' },
};

export const ABOUT_INTRO = {
    eyebrow: 'WHO WE ARE',
    title: 'Technology should solve complexity, not create more of it.',
    bodyParagraphs: [
        'DotQ combines product thinking, interactive design and modern engineering to transform complex business challenges into useful, reliable and scalable digital products.',
        'From high-performance frontend experiences to backend systems, automation and AI integration, every solution is designed around a real business purpose.',
    ],
};

export const ABOUT_STORY = {
    eyebrow: 'OUR STORY',
    title: 'Engineering high-impact digital solutions with precision & purpose.',
    bodyParagraphs: [
        'DotQ started with a clear mission: to replace bloated, complex workflows with high-performance digital products engineered for modern scaling.',
        'From cross-platform mobile apps with Flutter to enterprise backend systems, automated business infrastructure and custom AI integrations, we partner with ambitious companies to solve complex challenges.',
    ],
    stats: [
        {
            value: '25+',
            label: 'Completed Projects',
            description: 'Delivered across Web, Flutter Mobile, Custom Backend & Automation.',
        },
        {
            value: '15+',
            label: 'Successful Stories',
            description: 'Transformative digital client case studies & enterprise systems.',
        },
        {
            value: '99.8%',
            label: 'Success Rate',
            description: 'Production uptime, Core Web Vitals optimization & SLA delivery.',
        },
    ],
};

export const ABOUT_PRINCIPLES = [
    {
        num: '01',
        title: 'Purposeful Engineering',
        description: 'We make technical decisions based on the business problem, user needs and long-term product goals.',
        variant: 'white' as const,
        visualType: 'grid-nodes',
    },
    {
        num: '02',
        title: 'Performance by Design',
        description: 'Speed, reliability and usability are considered from the beginning, not added at the end.',
        variant: 'soft' as const,
        visualType: 'wave-chart',
    },
    {
        num: '03',
        title: 'Built to Scale',
        description: 'Our systems are designed to support future features, heavier usage and long-term business growth.',
        variant: 'cobalt' as const,
        visualType: 'network-tube',
    },
];

export const ABOUT_MANIFESTO = {
    part1: 'DotQ does not simply build websites.',
    part2: 'We engineer digital systems that help businesses operate better, automate repetitive work, serve customers efficiently and prepare for growth.',
    part3: 'Our approach connects strategy, design and technology so every feature has a clear purpose.',
};

export const ABOUT_CAPABILITIES = [
    {
        id: 'web-automation',
        title: 'Web Development and Automation',
        description: 'Modern Next.js and React applications with real-time features, complex interactions and automated workflows.',
        tags: ['Next.js', 'React', 'TypeScript', 'Workflows'],
        span: 'col-span-1 md:col-span-2 lg:col-span-8',
        graphic: 'code-interactive',
    },
    {
        id: 'custom-backend',
        title: 'Custom Software and Backend Systems',
        description: 'Scalable backend services, APIs, microservices and serverless systems built using Node.js and Go.',
        tags: ['Node.js', 'Go', 'Microservices', 'REST & gRPC'],
        span: 'col-span-1 md:col-span-1 lg:col-span-4',
        graphic: 'architecture-tree',
    },
    {
        id: 'interactive-design',
        title: 'Interactive Design',
        description: 'Modern interface experiences enhanced by thoughtful motion, WebGL, Three.js and Framer Motion.',
        tags: ['Framer Motion', 'WebGL', 'UI/UX', 'Animation'],
        span: 'col-span-1 md:col-span-1 lg:col-span-4',
        graphic: 'motion-panel',
    },
    {
        id: 'business-automation',
        title: 'Business Automation',
        description: 'Systems that reduce repetitive tasks, improve operations and connect business processes.',
        tags: ['n8n', 'DevOps', 'CI/CD', 'Process Sync'],
        span: 'col-span-1 md:col-span-1 lg:col-span-4',
        graphic: 'automation-gears',
    },
    {
        id: 'performance-engineering',
        title: 'Performance Engineering',
        description: 'Optimisation for loading speed, Core Web Vitals, reliability and demanding user traffic.',
        tags: ['Core Web Vitals', 'CDN', 'Caching', 'Latency'],
        span: 'col-span-1 md:col-span-1 lg:col-span-4',
        graphic: 'performance-pulse',
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'LLM integration and AI-powered functionality designed around real product requirements.',
        tags: ['LLM APIs', 'Vector Search', 'Python', 'AI Tools'],
        span: 'col-span-1 md:col-span-1 lg:col-span-6',
        graphic: 'ai-matrix',
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Targeted multi-channel campaigns, search visibility, conversion optimization, and brand scaling strategies.',
        tags: ['SEO & SEM', 'Social Ads', 'Analytics & CRO', 'Growth Strategy'],
        span: 'col-span-1 md:col-span-1 lg:col-span-6',
        graphic: 'marketing-trend',
    },
];

export const ABOUT_PROCESS = [
    {
        num: '01',
        stage: 'Discovery',
        title: 'Discovery',
        description: 'We study the business, users, current systems, challenges and opportunities before recommending a solution.',
        visualType: 'magnifier-lens',
    },
    {
        num: '02',
        stage: 'Strategy',
        title: 'Strategy',
        description: 'We define the product direction, technical architecture, priorities and practical development roadmap.',
        visualType: 'architecture-roadmap',
    },
    {
        num: '03',
        stage: 'Execution',
        title: 'Execution',
        description: 'We design, develop and test the product through a structured and transparent development process.',
        visualType: 'pipeline-flow',
    },
    {
        num: '04',
        stage: 'Scale',
        title: 'Scale',
        description: 'We optimise performance, reliability and infrastructure so the solution can support future growth.',
        visualType: 'scale-dashboard',
    },
];

export const ABOUT_WHY_DOTQ = [
    {
        num: '01',
        title: 'Business-first thinking',
        description: 'Technology decisions begin with the actual business objective.',
    },
    {
        num: '02',
        title: 'Modern engineering',
        description: 'We use modern frameworks and architecture suitable for long-term products.',
    },
    {
        num: '03',
        title: 'Performance focus',
        description: 'Our work prioritises speed, reliability and smooth user experiences.',
    },
    {
        num: '04',
        title: 'Scalable foundations',
        description: 'Products are structured to support future features and business growth.',
    },
];

export const ABOUT_TECH_STACK = [
    { name: 'Next.js', category: 'Frontend Framework' },
    { name: 'React', category: 'UI Library' },
    { name: 'Node.js', category: 'Backend Runtime' },
    { name: 'Go', category: 'Microservices & Systems' },
    { name: 'WebGL', category: '3D Graphics Engine' },
    { name: 'Three.js', category: '3D Web Experiences' },
    { name: 'Framer Motion', category: 'Interactive Animation' },
    { name: 'LLM Integration', category: 'Artificial Intelligence' },
    { name: 'Cloud Infra', category: 'Scalable Hosting' },
    { name: 'DevOps', category: 'CI/CD & Automation' },
];

export const ABOUT_CTA_DATA = {
    eyebrow: 'HAVE A PROJECT IN MIND?',
    title: 'Let’s build something that creates real value.',
    description: 'Tell us about your challenge, product or automation requirement. We will help you identify the right way forward.',
    primaryBtn: { text: 'Start Your Project', href: '/contact' },
    secondaryBtn: { text: 'Return Home', href: '/' },
};
