export interface ProductCapability {
    title: string;
    description: string;
    points?: string[];
}

export interface TechStackItem {
    component: string;
    technology: string;
}

export interface TargetAudienceItem {
    title: string;
    description: string;
}

export interface ValuePropItem {
    title: string;
    description: string;
}

export interface FlowStep {
    step: string;
    title: string;
    detail: string;
}

export interface RoadmapPhase {
    phase: string;
    tag: string;
    title: string;
    items: string[];
    successCriteria?: string;
}

export interface ProductDetail {
    id: 'goforge' | 'tapq';
    name: string;
    image: string;
    category: string;
    badge: string;
    headline: string;
    tagline: string;
    summary: string;
    overviewParagraphs: string[];
    coreCapabilities: ProductCapability[];
    architecture: {
        title: string;
        description: string;
        flowSteps: FlowStep[];
        principles?: string[];
    };
    techStack: TechStackItem[];
    securityReliability?: {
        title: string;
        description?: string;
        points: string[];
        verificationNote?: string;
    };
    targetAudience: TargetAudienceItem[];
    valueProps?: ValuePropItem[];
    problemSolved?: {
        description: string;
        points: string[];
    };
    roadmap?: RoadmapPhase[];
    developmentStatus: {
        implemented: string[];
        inVerification: string[];
        summary: string;
    };
    positioningStatement: {
        title: string;
        lead: string;
        body: string;
        coreBullets: string[];
        conclusion: string;
    };
}

export const GOFORGE_PRODUCT: ProductDetail = {
    id: 'goforge',
    name: 'GoForge',
    image: '/GoForge Multi-Tenant Analytics Dashboard.png',
    category: 'Commerce Infrastructure',
    badge: 'Multi-Tenant Platform',
    headline: 'Multi-Tenant E-Commerce Platform',
    tagline: 'Engineering scalable, multi-tenant digital commerce with high-concurrency Go backends and PostgreSQL tenant isolation.',
    summary:
        'GoForge is DotQ’s multi-tenant e-commerce platform, engineered to help businesses launch and operate online stores on a shared, secure backend while keeping each brand’s data, customers, products, orders, and payment integrations strictly isolated.',
    overviewParagraphs: [
        'GoForge is built around a clear architectural principle: instead of developing, provisioning, and maintaining a disconnected backend for every e-commerce brand, multiple businesses operate reliably within a unified, high-performance infrastructure—with each merchant isolated within their own tenant.',
        'A fashion brand and a luxury jewelry atelier can both run their business operations on GoForge simultaneously while maintaining fully partitioned product catalogs, variant matrixes, customer records, orders, inventory reservations, and independent Razorpay merchant integrations.',
        'Developed with Go (Golang) and PostgreSQL, GoForge pairs Firebase Authentication/Identity Platform for secure identity verification with tenant-aware authorization and data partitioning enforced directly at the API and database query layer.',
    ],
    coreCapabilities: [
        {
            title: 'Product & Catalog Management',
            description:
                'Manage comprehensive product hierarchies, SKUs, colors, high-resolution imagery, and nested category structures. The data model supports global product imagery alongside color-specific variant associations, enabling multi-attribute variant management without schema fragmentation.',
            points: [
                'Multi-attribute SKU and variant hierarchy',
                'Color-specific media associations and responsive asset delivery',
                'Taxonomy and nested collection categorization',
                'Fast facet-based catalog filtering at scale',
            ],
        },
        {
            title: 'E-Commerce & Order Lifecycle',
            description:
                'Handles end-to-end digital commerce transaction lifecycles—from checkout initiation and payment verification to status state transitions and order history tracking. The backend coordinates payment confirmation with inventory locking as a single atomic workflow.',
            points: [
                'State-machine driven order status progression',
                'Coordinated checkout with stock reservation',
                'Customer order timeline and dispatch tracking',
                'Automated transactional record generation',
            ],
        },
        {
            title: 'Inventory & Stock Management',
            description:
                'Precise variant-level stock tracking across physical warehouses and digital channels. Inventory mutations execute through guarded backend operations that protect stock levels against overselling and race conditions during high-volume drops.',
            points: [
                'Variant-level real-time inventory tracking',
                'Concurrency-safe stock mutations and reservation locking',
                'Multi-warehouse reconciliation pipelines',
                'Automated low-stock threshold monitoring',
            ],
        },
        {
            title: 'Tenant-Scoped Payment Integrations',
            description:
                'Full Razorpay integration supporting direct merchant accounts, cryptographically verified webhooks, idempotent status updates, and refund lifecycles. Payment API credentials are encrypted per tenant using authenticated encryption.',
            points: [
                'Tenant-level Razorpay credential configuration',
                'Cryptographically verified webhook validation',
                'Idempotency safeguards to eliminate duplicate charges',
                'Automated reconciliation for delayed gateway webhooks',
            ],
        },
        {
            title: 'Multi-Tenant Administration & RBAC',
            description:
                'Enterprise-grade multi-tenancy engineered directly into the core. Features tenant-aware authentication, organization memberships, granular role-based access control (RBAC), platform administrator tools, and tenant-scoped data isolation.',
            points: [
                'Strict tenant query scoping preventing ID enumeration exploits',
                'Granular store-level roles (Admin, Manager, Staff)',
                'Platform-level administrative monitoring and telemetry',
                'Encrypted credential storage with secret masking',
            ],
        },
        {
            title: 'Business Operations & Reporting Foundations',
            description:
                'Structured operational schemas tracking orders, gross volume, variant velocity, stock turnover, and payment gateway settlement records. Designed to feed operational dashboards with zero query leakage across tenant boundaries.',
            points: [
                'Sales volume, refund, and payment health logs',
                'Inventory turnover velocity reports',
                'Audit logging for administrative and store configuration mutations',
                'Extensible reporting APIs for custom analytics integrations',
            ],
        },
    ],
    architecture: {
        title: 'How GoForge’s Multi-Tenant Architecture Works',
        description:
            'Logical tenant isolation within a shared platform and database architecture represents GoForge’s core engineering differentiator. The system avoids the operational overhead of running hundreds of discrete containers while enforcing mathematical boundary separation.',
        flowSteps: [
            {
                step: '01',
                title: 'Domain & Tenant Resolution',
                detail: 'A customer or store manager accesses a brand storefront or admin portal. The GoForge ingress gateway resolves the request domain to its associated tenant identifier.',
            },
            {
                step: '02',
                title: 'Identity Verification',
                detail: 'Firebase Authentication verifies the incoming user identity token and confirms cryptographic validity.',
            },
            {
                step: '03',
                title: 'Tenant Membership & RBAC',
                detail: 'GoForge validates the verified identity against the resolved tenant, establishing permissions, store membership, and active role policies.',
            },
            {
                step: '04',
                title: 'Tenant-Scoped API Enforcement',
                detail: 'The API middleware injects tenant context into request processing. All SQL queries are strictly parameterized with tenant keys.',
            },
            {
                step: '05',
                title: 'Atomic Transaction Execution',
                detail: 'The business operation executes within the isolated tenant context—guaranteeing no cross-tenant data leakage or ID-switching vulnerabilities.',
            },
        ],
    },
    techStack: [
        { component: 'Backend Engine', technology: 'Go (Golang) high-concurrency microservices & HTTP APIs' },
        { component: 'Database Layer', technology: 'PostgreSQL with parameterized tenant indexing' },
        { component: 'Identity & Auth', technology: 'Firebase Authentication / Identity Platform' },
        { component: 'Multi-Tenancy', technology: 'Tenant-aware authorization and query-level logical isolation' },
        { component: 'Payment Gateways', technology: 'Razorpay integration with tenant-scoped API keys' },
        { component: 'Security Architecture', technology: 'RBAC, AES-256-GCM credential encryption, secret masking' },
        { component: 'Payment Reliability', technology: 'HMAC webhooks, idempotency keys, reconciliation pipelines' },
        { component: 'Schema Migrations', technology: 'Explicit versioned SQL migrations (zero auto-mutations)' },
        { component: 'Verification & Quality', technology: 'Go tests, race detection (-race), static analysis linting' },
    ],
    securityReliability: {
        title: 'Payment Security & Data Isolation',
        description:
            'Payments require absolute state consistency. An online store must keep payment records, orders, and stock perfectly synchronized during network timeouts and gateway retries.',
        points: [
            'Tenant-specific Razorpay credential storage encrypted with AES-256-GCM using authenticated encryption context.',
            'Cryptographic webhook signature verification and controlled payment-state transitions.',
            'Distributed idempotency safeguards to eliminate duplicate payment processing.',
            'Transactional database updates across payment, order timeline, and inventory stock.',
            'Reconciliation workflows engineered to resolve incomplete or delayed gateway callbacks.',
            'Strict access control and secret masking for store integration-management screens.',
        ],
        verificationNote:
            'Engineering integrity note: Implementing these safeguards establishes robust architectural foundations. As part of ongoing development, edge-case refund lifecycles and automated gateway recovery continue to undergo active verification against latest code builds.',
    },
    targetAudience: [
        {
            title: 'D2C and Retail Brands',
            description: 'Jewelry, apparel, and lifestyle brands requiring full control over product variants, media presentations, and checkout conversions without standard SaaS lock-in.',
        },
        {
            title: 'Growing Small & Medium Businesses',
            description: 'Companies that need structured product, order, stock, and payment management rather than wrestling with disconnected spreadsheets and generic plugins.',
        },
        {
            title: 'Agencies & Commerce Operators',
            description: 'Digital agencies managing multiple brand storefronts through a unified, cost-effective infrastructure platform with dedicated client tenant administration.',
        },
    ],
    valueProps: [
        {
            title: 'One Platform, Multiple Businesses',
            description: 'A single, high-performance Go backend powers multiple independent brand storefronts, drastically cutting cloud infrastructure and maintenance costs.',
        },
        {
            title: 'Connected Commerce Operations',
            description: 'Catalogs, inventory reservations, checkouts, and Razorpay settlements communicate through atomic database transactions rather than fragile webhook chains.',
        },
        {
            title: 'Tenant-Aware Security by Design',
            description: 'User identity, store memberships, and payment keys are partitioned at the database query level, preventing unauthorized cross-tenant data access.',
        },
        {
            title: 'Extensible Software Architecture',
            description: 'Built on clean Go architecture and explicit PostgreSQL migrations, allowing customized integrations without having to fork codebases per client.',
        },
    ],
    developmentStatus: {
        summary: 'Overview of GoForge engineering milestones and development hardening status:',
        implemented: [
            'Multi-tenant backend foundations with tenant-scoped routing',
            'Tenant-aware product catalogs and variant attribute models',
            'Firebase Identity Platform token verification',
            'Platform-admin hardening and permission boundaries',
            'Razorpay credential encryption using AES-256-GCM',
            'Payment webhook verification and transactional order updating',
            'Guarded inventory stock mutations and reservation locks',
        ],
        inVerification: [
            'Automated self-serve tenant onboarding workflow',
            'Custom business domain-to-tenant DNS lifecycle automation',
            'Extended platform-wide administrative monitoring consoles',
            'Automated multi-gateway refund reconciliation pipelines',
            'Final production deployment environment hardening',
        ],
    },
    positioningStatement: {
        title: 'GoForge — Multi-Tenant E-Commerce Platform',
        lead: 'GoForge is a modern commerce platform developed by DotQ to help businesses launch and manage online stores through a shared, secure, and extensible backend.',
        body: 'Built with Go and PostgreSQL, GoForge brings together product catalog management, product variants, inventory, orders, payment integrations, and tenant-aware access control. Its multi-tenant architecture is designed to support multiple businesses on a common platform while maintaining strict separation between their data, users, permissions, and payment configurations.',
        coreBullets: [
            'Multi-tenant store and business management',
            'Product catalogs, SKUs, variants, and color-specific images',
            'Inventory locking and atomic order workflows',
            'Encrypted Razorpay payment gateway integration',
            'Tenant-aware authentication and role-based authorization',
            'Secure integration credential management with AES-256-GCM',
            'Extensible Go backend and explicit PostgreSQL migrations',
        ],
        conclusion: 'Built by DotQ — Engineering Software That Scales With Your Business.',
    },
};

export const TAPQ_PRODUCT: ProductDetail = {
    id: 'tapq',
    name: 'TapQ',
    image: '/Tapq dashboard.png',
    category: 'Conversational Commerce',
    badge: 'WhatsApp Commerce OS',
    headline: 'WhatsApp Commerce OS by DotQ',
    tagline: 'Turn WhatsApp conversations into organized commerce—connecting enquiries, catalogs, orders, payments, and workflow automation.',
    summary:
        'TapQ is DotQ’s WhatsApp-first commerce platform, designed to help small and medium-sized businesses sell products, manage customer conversations, collect payments via Razorpay, and automate order workflows directly through WhatsApp.',
    overviewParagraphs: [
        'The core philosophy behind TapQ is turning WhatsApp from a casual messaging app into a practical business operating system. Instead of expecting customers to browse a detached website, TapQ aligns with how modern social-first businesses already sell: buyers discover items on Instagram or WhatsApp, message the merchant, ask questions, confirm details, and pay.',
        'Many growing businesses currently manage sales through chaotic chat threads, disconnected spreadsheets, manual screenshot payment checks, and outdated inventory notes. This leads to missed customer inquiries, slow replies, inconsistent records, and stock discrepancies.',
        'TapQ unites customer conversations, product catalogs, inventory management, instant payment links, and order tracking into a streamlined, automated workflow—eliminating manual guesswork without forcing merchants to adopt an overly complex traditional e-commerce system.',
    ],
    problemSolved: {
        description: 'Common friction points TapQ eliminates for modern conversational sellers:',
        points: [
            'Customer enquiries getting lost in flooded message inboxes during peak sales hours.',
            'Repeatedly copy-pasting product specs, photos, prices, and stock availability manually.',
            'Order details recorded inconsistently across notes apps, paper diaries, and spreadsheets.',
            'Relying on manual payment screenshots that are tedious to verify and prone to fraud.',
            'Stock counts falling out of sync, leading to accidental overselling and angry customers.',
            'No automated way to follow up with shoppers who showed interest but did not complete payment.',
            'Inability to scale chat-based customer service across multiple staff members.',
        ],
    },
    coreCapabilities: [
        {
            title: 'WhatsApp Business Inbox',
            description:
                'A collaborative team workspace for merchants to manage customer conversations, triage inbound inquiries, and link incoming messages directly with customer profiles and order histories.',
            points: [
                'Unified conversation stream with customer history context',
                'Inquiry tagging and assignment across team members',
                'Quick-reply message templates for frequent questions',
                'Direct link to customer order and shipping records',
            ],
        },
        {
            title: 'Interactive Product Catalog',
            description:
                'Structured catalog management where merchants configure product pricing, rich gallery images, variant matrices, and real-time availability to power quick sales conversations.',
            points: [
                'Instant product lookup and spec cards directly in chat',
                'Variant and size availability indicators',
                'Rich media cards optimized for WhatsApp delivery',
                'Centralized pricing updates across all conversation channels',
            ],
        },
        {
            title: 'Order & Inventory Coordination',
            description:
                'Convert active WhatsApp dialogues into formal, trackable commerce orders in two taps. Updates stock counts synchronously with payment confirmations.',
            points: [
                'One-tap draft order creation from chat conversations',
                'Live stock reservation preventing double bookings',
                'Automatic order status progression (Created, Paid, Dispatched)',
                'Structured customer shipping address capture',
            ],
        },
        {
            title: 'Integrated Payment Link Collection',
            description:
                'Generates secure Razorpay payment links directly inside WhatsApp conversations. Webhooks verify real-time payment completion and update orders automatically.',
            points: [
                'Instant Razorpay payment link generation for UPI, cards, and netbanking',
                'Cryptographic webhook verification of gateway settlements',
                'Eliminates reliance on screenshots and manual bank transfer checks',
                'Instant payment receipts issued directly to the customer in chat',
            ],
        },
        {
            title: 'Commerce Workflow Automation',
            description:
                'Automates high-frequency administrative tasks including order confirmations, dispatch tracking alerts, payment reminders, and follow-ups with abandoned enquiries.',
            points: [
                'Instant order confirmation messages on payment verification',
                'Automated tracking number and dispatch status notifications',
                'Scheduled gentle payment reminders for pending transactions',
                'Post-purchase feedback and re-engagement workflows',
            ],
        },
        {
            title: 'AI Sales Assistant (Roadmap Stage)',
            description:
                'A planned future intelligence module capable of answering routine product queries, recommending complementary items from the merchant catalog, and assisting shoppers 24/7.',
            points: [
                'Natural language responses grounded strictly in the merchant catalog',
                'Intelligent size and styling recommendations',
                'Seamless handoff to human staff for complex inquiries',
                'Deferred beyond initial MVP to ensure core transactional reliability first',
            ],
        },
    ],
    architecture: {
        title: 'How TapQ Works — The Core Sales Loop',
        description:
            'TapQ is built around an efficient, proven commerce loop that delivers immediate operational clarity before adding complex AI or marketing layers.',
        flowSteps: [
            {
                step: '01',
                title: 'Customer Messages Business',
                detail: 'A buyer discovers an item on Instagram or WhatsApp and sends an initial product inquiry to the brand’s official WhatsApp number.',
            },
            {
                step: '02',
                title: 'Merchant Manages Enquiry',
                detail: 'The merchant reviews stock in the TapQ dashboard, selects the product variant, and creates a verified order summary.',
            },
            {
                step: '03',
                title: 'Customer Receives Payment Link',
                detail: 'TapQ generates a secure Razorpay payment link and delivers an interactive payment request directly inside the WhatsApp chat.',
            },
            {
                step: '04',
                title: 'Payment Verification',
                detail: 'The customer completes payment via UPI or card. Razorpay triggers an authenticated webhook that transitions order and stock status.',
            },
            {
                step: '05',
                title: 'Automated Status Updates',
                detail: 'Both merchant and customer receive verified confirmations, digital receipts, and tracking updates automatically.',
            },
        ],
        principles: [
            'Multi-Tenancy: Each merchant’s users, catalog, orders, and integration keys are strictly scoped to their tenant.',
            'PostgreSQL as Transactional Source of Truth: All inventory and order mutations execute within ACID transactions.',
            'Idempotent Payment Processing: Verified webhooks and unique transaction keys prevent duplicate order fulfillment.',
            'Asynchronous Processing: Background workers (NATS JetStream) handle message delivery without blocking API calls.',
            'Secure Secret Storage: Merchant-specific WhatsApp Cloud tokens and Razorpay secrets are encrypted and masked.',
            'Explicit Migrations: Controlled SQL migrations preserve production database integrity.',
        ],
    },
    techStack: [
        { component: 'Merchant Dashboard', technology: 'Next.js web application with modern responsive UI' },
        { component: 'Backend Architecture', technology: 'Go (Golang) modular monolith API' },
        { component: 'Primary Database', technology: 'PostgreSQL (transactional records, catalog, orders)' },
        { component: 'Caching & Transient State', technology: 'Redis for high-speed session and rate limiting' },
        { component: 'Async Messaging & Jobs', technology: 'NATS JetStream for durable event queues and workers' },
        { component: 'Messaging Integration', technology: 'Meta WhatsApp Cloud API (official business messaging)' },
        { component: 'Payment Gateway', technology: 'Razorpay payment links and authenticated webhook handlers' },
    ],
    targetAudience: [
        {
            title: 'Jewelry & Fashion Brands',
            description: 'Businesses managing high volumes of daily WhatsApp inquiries regarding designs, sizing, and payment confirmations.',
        },
        {
            title: 'Instagram-First D2C Sellers',
            description: 'Independent creators and direct-to-consumer brands turning social traffic into structured, trackable orders without manual chaos.',
        },
        {
            title: 'Local Retailers & Boutiques',
            description: 'Physical store owners who want to offer personal remote shopping and repeat-order replenishment to their local customer base.',
        },
        {
            title: 'Growing Direct-to-Consumer Brands',
            description: 'Growing brands needing to graduate from spreadsheet tracking to automated multi-agent customer workflows.',
        },
    ],
    roadmap: [
        {
            phase: 'Phase 1',
            tag: 'MVP',
            title: 'Prove the Core Sales Loop',
            items: [
                'WhatsApp message intake & merchant order creation',
                'Product catalog and customer profile records',
                'Razorpay payment-link generation directly in chat',
                'Cryptographic payment verification and order updates',
                'Basic automated customer and merchant notifications',
            ],
            successCriteria: 'A merchant can reliably process a complete customer transaction from initial enquiry to confirmed payment without manual intervention.',
        },
        {
            phase: 'Phase 2',
            tag: 'V1',
            title: 'Improve Day-to-Day Operations',
            items: [
                'Shared collaborative conversation inbox for multiple staff',
                'Enhanced order and inventory management with low-stock alerts',
                'Customer purchase history and order tracking lookup',
                'Reusable rich message templates and quick-reply triggers',
                'Operational sales reports and basic follow-up automations',
            ],
        },
        {
            phase: 'Phase 3',
            tag: 'V1.5',
            title: 'Introduce Intelligent Selling',
            items: [
                'AI-assisted product discovery and FAQ responses',
                'Catalog-grounded product and accessory recommendations',
                'Real-time conversation assistance and tone formatting',
                'Context-aware follow-up prompts for stalled conversations',
            ],
        },
        {
            phase: 'Later',
            tag: 'Scale',
            title: 'Platform Expansion',
            items: [
                'Customer broadcast messaging and audience segmentation',
                'Advanced multi-step workflow automation triggers',
                'External developer APIs and third-party logistics integrations',
                'Agency and white-label multi-merchant capabilities',
                'Multi-channel commerce coordination',
            ],
        },
    ],
    developmentStatus: {
        summary: 'Current engineering status and planned development milestones:',
        implemented: [
            'System architecture definition (Go modular monolith & Next.js dashboard)',
            'Core database schema designs for multi-tenant messaging, catalog, and orders',
            'Meta WhatsApp Cloud API webhook receiver prototypes',
            'Razorpay payment link generation and webhook verification design',
            'Core sales loop validation specifications',
        ],
        inVerification: [
            'End-to-end merchant dashboard UI implementation in Next.js',
            'Full WhatsApp multi-tenant onboarding workflow',
            'Automated production deployment and monitoring pipelines',
            'Comprehensive testing across high-concurrency message surges',
        ],
    },
    positioningStatement: {
        title: 'TapQ — WhatsApp Commerce OS',
        lead: 'Turn WhatsApp conversations into organized commerce.',
        body: 'TapQ is a WhatsApp-first commerce platform being developed by DotQ to help growing businesses manage customer enquiries, organize orders, collect payments, and automate repetitive sales workflows. Designed for businesses that sell through WhatsApp and social media, TapQ connects customer conversations with product catalogs, inventory, payment processing, and order management in one streamlined workflow.',
        coreBullets: [
            'WhatsApp-based customer communication and shared inbox',
            'Product catalog and customer profile management',
            'Two-tap order creation and live inventory tracking',
            'Instant Razorpay payment links and verified settlements',
            'Automated order confirmations, receipts, and dispatch tracking',
            'Future AI-assisted sales and catalog-grounded recommendations',
            'Go modular monolith backend with PostgreSQL reliability',
        ],
        conclusion: 'Built by DotQ — Engineering Software That Scales With Your Business.',
    },
};

export const COMPARISON_MATRIX = [
    {
        area: 'Primary Focus',
        tapq: 'WhatsApp-led conversational selling & customer communication',
        goforge: 'E-commerce backend infrastructure & branded online storefronts',
    },
    {
        area: 'Main Customer Experience',
        tapq: 'Messaging-first commerce directly inside WhatsApp chat',
        goforge: 'Website and storefront-first commerce with cart & checkout',
    },
    {
        area: 'Main Workflow',
        tapq: 'Customer Enquiry → Order Creation → Payment Link → Follow-up',
        goforge: 'Catalog Browse → Cart Selection → Edge Checkout → Order Fulfillment',
    },
    {
        area: 'Core Differentiator',
        tapq: 'Conversation-driven workflow automation & instant payment links',
        goforge: 'Reusable multi-tenant architecture & query-level data isolation',
    },
    {
        area: 'AI Opportunity',
        tapq: 'Sales assistance, FAQ automation, & catalog-grounded discovery',
        goforge: 'Algorithmic product search, store telemetry, & operations insights',
    },
    {
        area: 'Product Maturity',
        tapq: 'In active development; MVP sales loop specification established',
        goforge: 'Substantially developed backend with ongoing hardening & audits',
    },
];

export const PROPRIETARY_PRODUCTS = [GOFORGE_PRODUCT, TAPQ_PRODUCT];
