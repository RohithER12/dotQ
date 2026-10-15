export interface ServicePillar {
    title: string;
    description: string;
    features: string[];
}

export interface ServiceTechCategory {
    category: string;
    tools: string[];
}

export interface ServiceProcessStep {
    step: string;
    title: string;
    description: string;
    timeframe: string;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceStat {
    label: string;
    value: string;
    detail: string;
}

export interface EditorialSection {
    title: string;
    paragraphs: string[];
    keyTakeaway?: string;
    bulletPoints?: string[];
}

export interface ServiceDetail {
    id: string;
    num: string;
    title: string;
    shortTitle: string;
    tagline: string;
    heroDescription: string;
    badge: string;
    iconType: string;
    stats: ServiceStat[];
    pillars: ServicePillar[];
    techStack: ServiceTechCategory[];
    process: ServiceProcessStep[];
    deliverables: string[];
    faqs: ServiceFAQ[];
    relatedClientIds: string[];
    editorialSections: EditorialSection[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
    'web-mobile-dev': {
        id: 'web-mobile-dev',
        num: '01',
        title: 'Web & Mobile App Development',
        shortTitle: 'Web & Mobile Dev',
        tagline: 'High-performance Next.js web applications & native-grade cross-platform Flutter mobile apps.',
        heroDescription:
            'We engineer unified digital platforms combining responsive Next.js 15 web storefronts and applications with cross-platform Flutter mobile solutions for iOS and Android. Built for speed, fluid micro-interactions, and flawless cross-device consistency.',
        badge: 'ENGINEERING & MOBILE APPS',
        iconType: 'code-tree',
        stats: [
            { label: 'Platform Support', value: 'iOS & Android', detail: 'Single high-performance Flutter codebase' },
            { label: 'Target Load Time', value: '< 1.2s', detail: 'Server-side rendered with sub-second TTFB' },
            { label: 'Code Reusability', value: '85%+', detail: 'Shared business logic, schemas, and API clients' },
            { label: 'Uptime Reliability', value: '99.9%', detail: 'Resilient edge hosting with zero-downtime deploy' },
        ],
        pillars: [
            {
                title: 'Cross-Platform Flutter Mobile Apps',
                description: 'Native performance on iOS and Android engineered with Dart and Flutter. Smooth 60/120fps animations, native sensor integration, and offline-first capabilities.',
                features: ['Riverpod state management', 'Native device API integration', 'Offline cache persistence', 'App Store & Play Store deployment pipeline'],
            },
            {
                title: 'Modern Next.js & React Web Platforms',
                description: 'Full-stack React architectures leveraging App Router, React Server Components (RSC), and edge caching for instant initial page delivery and SEO dominance.',
                features: ['React Server Components', 'Dynamic edge rendering', 'TypeScript end-to-end typing', 'Optimized Core Web Vitals'],
            },
            {
                title: 'Dynamic Design Systems & Interactions',
                description: 'Custom UI design systems engineered with TailwindCSS, Framer Motion, and accessible HTML elements that make your brand stand out with polished micro-interactions.',
                features: ['Custom design tokens', 'Hardware-accelerated animations', 'Accessible WCAG compliance', 'Fluid responsive breakpoints'],
            },
            {
                title: 'API Integration & Real-Time Sync',
                description: 'Seamless integration with GraphQL, REST, and WebSocket backends to provide instant data synchronization, push notifications, and live transactional updates.',
                features: ['Bi-directional WebSockets', 'TanStack Query data hydration', 'Background push notifications', 'Optimistic UI state updates'],
            },
        ],
        techStack: [
            { category: 'Mobile Frameworks', tools: ['Flutter', 'Dart', 'Riverpod', 'Bloc', 'SQLite / Hive'] },
            { category: 'Web Technologies', tools: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
            { category: 'State & Data', tools: ['TanStack Query', 'Zustand', 'Axios', 'GraphQL', 'WebSockets'] },
            { category: 'Deployment & CI/CD', tools: ['Vercel Edge', 'Fastlane', 'GitHub Actions', 'TestFlight', 'Google Play Console'] },
        ],
        process: [
            { step: '01', title: 'Architecture & UX Wireframing', description: 'Interactive prototyping, user flows, data schema definition, and technical feasibility validation.', timeframe: 'Week 1-2' },
            { step: '02', title: 'Sprint-Based Engineering', description: 'Parallel development of web frontend and Flutter mobile app with bi-weekly preview builds.', timeframe: 'Week 3-6' },
            { step: '03', title: 'QA & Cross-Device Testing', description: 'Comprehensive device matrix testing across iOS models, Android OEMs, and responsive desktop viewports.', timeframe: 'Week 7' },
            { step: '04', title: 'App Store Submission & Launch', description: 'Store asset optimization, guidelines compliance verification, DNS edge routing, and live rollout.', timeframe: 'Week 8' },
        ],
        deliverables: [
            'Production Next.js Web Application with full source code',
            'Signed iOS (.ipa) and Android (.aab) application binaries',
            'Reusable component library and Figma design tokens',
            'Automated CI/CD deployment pipelines',
            'Complete API documentation and Postman collections',
            '30-day post-launch warranty and live telemetry monitoring',
        ],
        faqs: [
            {
                question: 'Why choose Flutter for mobile app development?',
                answer: 'Flutter allows us to write a single high-performance codebase that compiles to native ARM code for both iOS and Android. This reduces development and maintenance costs by up to 40% while preserving smooth 60fps animations and full native device features.',
            },
            {
                question: 'Do you handle Apple App Store and Google Play Store submission?',
                answer: 'Yes, we manage the entire publishing process from creating developer accounts, configuring certificates and provisioning profiles, preparing privacy disclosures, to handling review feedback until your app is live.',
            },
            {
                question: 'Can you migrate an existing React web app to Next.js?',
                answer: 'Absolutely. We routinely modernize legacy client-side React apps to Next.js App Router to achieve instant server-side rendering, better Google search rankings, and lower bundle sizes.',
            },
            {
                question: 'How do you ensure data sync between web and mobile?',
                answer: 'We build unified API contracts using OpenAPI or GraphQL schemas paired with reactive client-side cache stores like TanStack Query and Riverpod, ensuring user actions on mobile immediately reflect on the web dashboard.',
            },
        ],
        relatedClientIds: ['naiksha', 'yugen-bags', 'fourteen-yards'],
        editorialSections: [
            {
                title: 'The Challenge of Modern Multi-Platform Experiences',
                paragraphs: [
                    'Today’s customers transition between smartphones, tablets, and desktop browsers effortlessly. When a product feels fragmented or behaves inconsistently across platforms, users notice immediately. Historically, companies were forced to choose between managing three separate native codebases—iOS, Android, and Web—or compromising on performance with clunky hybrid web-wrappers.',
                    'At DotQ, we reject this compromise. We architect software using a unified engineering paradigm that pairs Next.js 15 App Router for the web with Google Flutter for iOS and Android. By sharing architectural data schemas, API contracts, design tokens, and core business logic, we achieve lightning-fast delivery while ensuring every platform feels completely native and fluid to the user.',
                ],
                keyTakeaway: 'A unified codebase architecture reduces ongoing engineering maintenance costs by up to 40% while delivering true native ARM execution speed on all devices.',
            },
            {
                title: 'Cross-Platform Mobile Engineering with Flutter',
                paragraphs: [
                    'Our mobile applications are built on Flutter and Dart, compiling directly into native ARM machine code rather than relying on interpreted JavaScript bridges. This guarantees butter-smooth 60fps and 120fps animations, instant gesture responses, and seamless hardware access to camera sensors, GPS geofencing, Bluetooth peripherals, and biometric authentication.',
                    'We implement strict unidirectional data flow using Riverpod and Bloc state management. Critical application data is cached locally using embedded SQLite and Hive engines, allowing your users to browse catalogs, manage accounts, and compose drafts even in offline scenarios. As soon as a connection is restored, state mutations synchronize idempotently with your cloud servers.',
                ],
                bulletPoints: [
                    'Hardware-accelerated rendering engine with 0ms touch latency',
                    'Offline-first data persistence with automated background sync',
                    'Full integration with Apple Pay, Google Pay, and biometric Face ID/Touch ID',
                    'Automated Fastlane deployment pipelines for continuous TestFlight and Play Store releases',
                ],
            },
            {
                title: 'High-Performance Web Platforms with Next.js 15',
                paragraphs: [
                    'On the web, we build exclusively with Next.js 15 and React 19, taking full advantage of React Server Components (RSC) and dynamic edge streaming. Instead of shipping massive JavaScript bundles to the client browser, page components are rendered on the server nearest to your visitor, resulting in sub-second Time to First Byte (TTFB) and instant Largest Contentful Paint (LCP).',
                    'Every web interface is paired with custom design tokens, TailwindCSS, and hardware-accelerated micro-interactions via Framer Motion. The result is a web application that feels distinctly premium, navigates like a native desktop app, and routinely scores 95+ on Google Lighthouse Core Web Vitals audits.',
                ],
                keyTakeaway: 'Server-side rendered architectures give your business a permanent advantage in Google organic rankings while converting visitors at significantly higher rates.',
            },
            {
                title: 'End-to-End Delivery and App Store Governance',
                paragraphs: [
                    'Writing code is only half the battle. Launching a world-class mobile app requires strict compliance with Apple App Store Review Guidelines and Google Play Developer Policies. We handle the entire release lifecycle: generating cryptographic signing certificates, setting up sandbox merchant accounts, auditing third-party privacy disclosures, and resolving reviewer feedback.',
                    'Following deployment, every application is connected to real-time crash reporting (Sentry) and user session telemetry, giving your executive team complete visibility into platform stability, active user retention, and performance bottlenecks from day one.',
                ],
            },
        ],
    },

    'custom-backend': {
        id: 'custom-backend',
        num: '02',
        title: 'Custom IT Solutions & Backend',
        shortTitle: 'Backend & Systems',
        tagline: 'Distributed microservices, resilient APIs, and enterprise cloud infrastructure.',
        heroDescription:
            'We architect high-concurrency backend services, serverless systems, and event-driven architectures engineered with Go and Node.js. Built to handle heavy transactional volume with sub-10ms response times and fault-tolerant cloud resilience.',
        badge: 'ARCHITECTURE & MICROSERVICES',
        iconType: 'architecture',
        stats: [
            { label: 'API Throughput', value: '10,000+ RPS', detail: 'High-concurrency Go goroutine microservices' },
            { label: 'Query Latency', value: '< 8ms p95', detail: 'Indexed PostgreSQL and multi-tier Redis caching' },
            { label: 'Service Uptime', value: '99.99%', detail: 'Auto-healing Kubernetes and serverless failovers' },
            { label: 'Security Standard', value: 'Zero Trust', detail: 'Strict RBAC, OAuth2, and encrypted payloads' },
        ],
        pillars: [
            {
                title: 'High-Concurrency Go & Node.js Services',
                description: 'Leveraging Go for raw execution speed and Node.js for rapid integration ecosystems. Clean hexagonal architecture that isolates business logic from infrastructure.',
                features: ['Hexagonal / Clean architecture', 'Goroutine concurrency pools', 'Strict memory profiling', 'Low-footprint containerization'],
            },
            {
                title: 'Event-Driven Microservices & Queues',
                description: 'Asynchronous event streaming and message broker pipelines using Redis Streams, RabbitMQ, and Kafka to decouple critical processes and prevent system lockups.',
                features: ['Idempotent job consumers', 'Dead-letter queue handling', 'Distributed tracing with OpenTelemetry', 'At-least-once message delivery'],
            },
            {
                title: 'Database Architecture & Caching Tiers',
                description: 'Relational data modeling with PostgreSQL alongside document stores and in-memory caches. Query optimization, connection pooling, and automated backup strategies.',
                features: ['Optimized indexing & query plans', 'Connection poolers (PgBouncer)', 'Multi-level Redis caching', 'Zero-downtime schema migrations'],
            },
            {
                title: 'Enterprise API Security & Governance',
                description: 'Comprehensive authentication protocols, granular role-based access control (RBAC), API rate limiting, and automated OWASP vulnerability scanning.',
                features: ['JWT & Refresh token rotation', 'OAuth2 & SSO enterprise login', 'Sliding-window rate limiting', 'Comprehensive audit logging'],
            },
        ],
        techStack: [
            { category: 'Core Languages', tools: ['Go (Golang)', 'Node.js', 'TypeScript', 'Python'] },
            { category: 'Databases & Cache', tools: ['PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse', 'PgBouncer'] },
            { category: 'Message Brokers', tools: ['Redis Streams', 'RabbitMQ', 'Apache Kafka', 'AWS SQS'] },
            { category: 'DevOps & Observability', tools: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry'] },
        ],
        process: [
            { step: '01', title: 'Domain Modeling & API Schema', description: 'Deconstructing core business entities, defining OpenAPI contracts, and designing resilient database schemas.', timeframe: 'Week 1-2' },
            { step: '02', title: 'Core Service Implementation', description: 'Developing core business services, integrating ORM/raw SQL layers, and unit testing domain logic.', timeframe: 'Week 3-5' },
            { step: '03', title: 'Load Simulation & Concurrency Testing', description: 'Simulating traffic spikes up to 50k RPS using k6 to identify memory leaks, lock contentions, and bottlenecks.', timeframe: 'Week 6' },
            { step: '04', title: 'Cloud Infrastructure & Go-Live', description: 'Terraform provisioning, CI/CD pipeline deployment, monitoring dashboards setup, and production traffic cutover.', timeframe: 'Week 7-8' },
        ],
        deliverables: [
            'Microservices source code with full test suites (>85% coverage)',
            'Interactive Swagger / OpenAPI documentation hub',
            'Production Docker Compose & Kubernetes manifest configs',
            'Database schema migrations and seed scripts',
            'Grafana & Prometheus monitoring dashboard templates',
            'Disaster recovery protocol & failover runbook',
        ],
        faqs: [
            {
                question: 'When should we choose Go over Node.js for backend services?',
                answer: 'We recommend Go for CPU-bound computations, real-time data pipelines, high-throughput financial or IoT transactions, and services requiring minimal RAM footprint. Node.js is ideal for I/O-heavy REST endpoints and teams looking for full-stack TypeScript parity.',
            },
            {
                question: 'How do you handle zero-downtime database migrations?',
                answer: 'We use expanding-and-contracting schema migration strategies. New columns and tables are added first without breaking existing queries; code is deployed to populate both; and obsolete fields are deprecated and pruned only after traffic has safely stabilized.',
            },
            {
                question: 'Can you integrate with our legacy enterprise databases?',
                answer: 'Yes, we frequently build modern API proxy layers over legacy SQL Server, Oracle, or MySQL databases, giving frontends clean REST/GraphQL endpoints without requiring a risky total database rewrite.',
            },
            {
                question: 'How do you protect backend APIs against DDoS and abuse?',
                answer: 'We enforce cloud-edge defenses via Cloudflare, sliding-window rate limiters backed by Redis, cryptographically signed API keys, payload size limits, and bot mitigation policies.',
            },
        ],
        relatedClientIds: ['stoxwaves', 'breta-world', 'naiksha'],
        editorialSections: [
            {
                title: 'The Foundation of Resilient Digital Systems',
                paragraphs: [
                    'Every high-growth digital product is ultimately constrained by the strength of its backend. When database queries lock, memory leaks choke server instances, or API endpoints fail to scale under sudden traffic surges, user trust evaporates in seconds. The cost of technical debt in core infrastructure compounds rapidly.',
                    'At DotQ, backend engineering is treated as precision engineering. We design server systems capable of handling tens of thousands of concurrent requests while maintaining deterministic sub-10ms response times. By pairing compiled Go (Golang) microservices with Node.js TypeScript APIs, we deliver systems that remain rock-solid regardless of how fast your user base expands.',
                ],
                keyTakeaway: 'Clean architecture isolates business domain rules from volatile cloud infrastructure, making systems maintainable for decades rather than months.',
            },
            {
                title: 'High-Concurrency Concurrency and Asynchronous Queues',
                paragraphs: [
                    'Synchronous HTTP requests are dangerous when handling complex business workflows like invoice generation, payment confirmations, or notification broadcasts. If a third-party gateway delays response, standard monolithic threads freeze, leading to cascading system-wide outages.',
                    'We decouple backend responsibilities using event-driven architectures powered by Redis Streams, RabbitMQ, and Apache Kafka. Incoming transactions are acknowledged instantaneously, while background worker pools process compute-heavy tasks asynchronously with guaranteed at-least-once delivery semantics and automated dead-letter queue isolation.',
                ],
                bulletPoints: [
                    'Goroutine worker pools capable of handling 10,000+ requests per second',
                    'Idempotent event consumers that prevent duplicate billing or transaction processing',
                    'Distributed tracing using OpenTelemetry to track requests across microservices',
                    'Auto-scaling consumer groups that absorb sudden demand spikes gracefully',
                ],
            },
            {
                title: 'Relational Integrity and Database Performance',
                paragraphs: [
                    'Databases are the single most difficult component of any architecture to scale retrospectively. We model relational structures in PostgreSQL with strict foreign keys, composite indexes, and normalized schemas. For high-read scenarios, we implement PgBouncer connection pooling alongside multi-level Redis caching, reducing database CPU load by up to 80%.',
                    'When schemas must evolve, we execute zero-downtime database migrations using expand-and-contract patterns. New columns are populated in parallel, existing client queries continue uninterrupted, and legacy data is cleanly phased out without a single second of maintenance window downtime.',
                ],
                keyTakeaway: 'Proper indexing and connection pooling often multiply backend throughput by 5x to 10x without requiring expensive server hardware upgrades.',
            },
            {
                title: 'Zero-Trust Security and Observability',
                paragraphs: [
                    'We adhere strictly to Zero-Trust security principles across all backend endpoints. All incoming payloads are validated using strict Zod or Go struct validator schemas. User authentication utilizes short-lived JWT tokens paired with secure HTTP-only refresh token rotation and sliding-window Redis rate limiters.',
                    'Complete observability is integrated directly into every service. Prometheus metrics, Grafana visualization dashboards, and structured JSON logging provide your engineering leadership with immediate clarity on latency percentiles (p50, p95, p99), error rates, and resource utilization in real time.',
                ],
            },
        ],
    },

    'ecommerce-dev': {
        id: 'ecommerce-dev',
        num: '03',
        title: 'E-Commerce Website Development',
        shortTitle: 'E-Commerce Solutions',
        tagline: 'High-conversion storefronts, headless architectures, and frictionless checkouts.',
        heroDescription:
            'We build lightning-fast e-commerce experiences that convert visitors into repeat customers. From headless Next.js storefronts and custom cart drawers to multi-currency payment integrations and automated inventory synchronization.',
        badge: 'RETAIL TECH & CONVERSION',
        iconType: 'webgl-preview',
        stats: [
            { label: 'Lighthouse Score', value: '98+', detail: 'Optimized Core Web Vitals for maximum SEO ranking' },
            { label: 'Checkout Abandonment', value: '-28%', detail: 'Frictionless one-click mobile checkout workflows' },
            { label: 'Payment Gateway', value: 'Global & Local', detail: 'Stripe, Razorpay, Apple Pay, PayPal & COD' },
            { label: 'Inventory Sync', value: 'Real-Time', detail: 'Instant multi-channel webhook updates' },
        ],
        pillars: [
            {
                title: 'Headless Next.js Storefronts',
                description: 'Decoupled frontend architecture providing sub-second page loads, instant search filtering, and bespoke brand design impossible on traditional monoliths.',
                features: ['Instant algorithmic search', 'Dynamic cart & slide-out drawers', 'Rich product video & 3D previews', 'Server-driven SEO metadata'],
            },
            {
                title: 'High-Converting Checkout Engineering',
                description: 'Single-page checkouts engineered to eliminate drop-offs. Address autocomplete, guest checkout, dynamic tax calculations, and localized currency selection.',
                features: ['Stripe & Razorpay integrations', 'Apple Pay & Google Pay express', 'Automatic coupon code application', 'Real-time shipping carrier rates'],
            },
            {
                title: 'Inventory & Order Automation',
                description: 'Centralized stock management syncing orders across storefronts, physical retail POS, and warehouses to prevent overselling and manual bookkeeping.',
                features: ['Low stock alerts & auto-reorder', 'Multi-warehouse fulfillment routing', 'Automated invoice & GST generation', 'Return & refund management portal'],
            },
            {
                title: 'Retention & Customer Loyalty Systems',
                description: 'Tools designed to increase Lifetime Value (LTV): automated abandoned cart recovery, customer reward points, personalized recommendations, and subscription billing.',
                features: ['WhatsApp & SMS order notifications', 'Automated abandoned cart flows', 'Tiered customer loyalty points', 'Recurring subscription payments'],
            },
        ],
        techStack: [
            { category: 'Storefront', tools: ['Next.js 15', 'React', 'TailwindCSS', 'Framer Motion', 'TypeScript'] },
            { category: 'Commerce Engines', tools: ['Shopify Storefront API', 'Medusa.js', 'WooCommerce Headless', 'Custom Backend'] },
            { category: 'Payment Processors', tools: ['Stripe', 'Razorpay', 'PayPal', 'Apple Pay', 'Cashfree'] },
            { category: 'Analytics & Search', tools: ['Algolia / Meilisearch', 'Google Tag Manager', 'Meta Pixel', 'PostHog'] },
        ],
        process: [
            { step: '01', title: 'Brand Discovery & Catalog Architecture', description: 'Analyzing product hierarchies, variant matrices, pricing rules, shipping tiers, and payment needs.', timeframe: 'Week 1' },
            { step: '02', title: 'Storefront UI/UX & Flow Prototype', description: 'Designing high-conversion mobile-first product cards, filtering drawers, and checkout funnels.', timeframe: 'Week 2-3' },
            { step: '03', title: 'Integration & Gateway Certification', description: 'Connecting payment gateways, webhooks, shipping calculators, and catalog inventory feeds.', timeframe: 'Week 4-6' },
            { step: '04', title: 'Testing, Security Audit & Launch', description: 'Live transaction testing, PCI-DSS compliance verification, load testing, and marketing tag audit.', timeframe: 'Week 7' },
        ],
        deliverables: [
            'Complete custom Next.js e-commerce storefront',
            'Full administrative dashboard for orders and inventory',
            'Configured payment gateways with multi-currency support',
            'Automated email, SMS, and WhatsApp notification templates',
            'Technical SEO schema markup for Google Shopping rich snippets',
            'Conversion analytics tracking suite (GA4 & Meta CAPI)',
        ],
        faqs: [
            {
                question: 'What is the advantage of a headless storefront over standard Shopify?',
                answer: 'A headless Next.js storefront gives you sub-second page speeds, unlimited design customization freedom without theme limitations, better Google Core Web Vitals rankings, and cheaper hosting overheads for large catalogs.',
            },
            {
                question: 'Can you integrate Indian payment gateways like Razorpay with international cards?',
                answer: 'Yes, we configure Razorpay or Stripe to accept UPI, NetBanking, credit/debit cards, EMI, Wallets, and international foreign currency cards with automated fraud shields.',
            },
            {
                question: 'How do you handle shipping rate calculation and tracking?',
                answer: 'We integrate APIs from Shiprocket, Delhivery, FedEx, or custom courier partners to calculate real-time pin code delivery rates and provide customers with live parcel tracking.',
            },
            {
                question: 'Can you migrate our products, customer data, and order history?',
                answer: 'Yes, we handle complete data migrations from existing Shopify, WooCommerce, Magento, or custom databases with zero data loss and automated 301 URL redirects.',
            },
        ],
        relatedClientIds: ['naiksha', 'yugen-bags', 'zenmode-clothing'],
        editorialSections: [
            {
                title: 'Why Standard E-Commerce Templates Fail Ambitious Brands',
                paragraphs: [
                    'Traditional e-commerce platforms like standard Shopify or WooCommerce rely on monolithic themes bloated with dozens of uncoordinated third-party plugins. Every added app injects heavy tracking scripts and render-blocking CSS, slowing page load speeds down to 4 or 5 seconds on standard mobile networks.',
                    'Data shows that 53% of mobile shoppers abandon a website that takes longer than 3 seconds to load. Generic storefront templates also constrain your brand into identical cookie-cutter layouts that fail to convey quality or command premium pricing.',
                ],
                keyTakeaway: 'Headless commerce separates the visual presentation layer from the commerce engine, achieving sub-second speeds and complete visual freedom.',
            },
            {
                title: 'Headless Next.js Storefront Engineering',
                paragraphs: [
                    'We engineer headless storefronts powered by Next.js 15, paired with modern commerce backends like Medusa.js, Shopify Storefront API, or custom Go/Node backends. By pre-rendering product catalogs at the edge and revalidating content dynamically, category browsing and product detail pages load instantly with zero layout shifts.',
                    'Interactive product features—such as smooth slide-out cart drawers, real-time stock counter badges, color swatch selectors, and high-resolution zoom galleries—are designed with bespoke micro-interactions that engage customers and encourage higher average order values (AOV).',
                ],
                bulletPoints: [
                    'Sub-second page navigation powered by edge React Server Components',
                    'Algorithmic instant search and facet filtering with zero page reloads',
                    'Automated Google Shopping JSON-LD rich product schema for higher search clicks',
                    'Lightweight, accessible UI design compliant with modern mobile design standards',
                ],
            },
            {
                title: 'Eliminating Drop-Offs at Checkout',
                paragraphs: [
                    'The checkout flow is where the majority of retail revenue is won or lost. We engineer streamlined, single-page checkout funnels designed to eradicate cognitive friction. Features include Google Maps address autocomplete, guest checkout by default, dynamic tax calculation, and automatic coupon code testing.',
                    'We integrate localized and international payment options: UPI express intent, NetBanking, debit/credit cards, Cash on Delivery (COD) verification via OTP, Apple Pay, Google Pay, and Stripe. Fraud mitigation shields and automated retry prompts safeguard your margins while ensuring genuine buyers never experience false declines.',
                ],
                keyTakeaway: 'Streamlining the mobile checkout funnel and offering express UPI and Apple Pay reduces cart abandonment by an average of 28%.',
            },
            {
                title: 'Automated Operations, Fulfillment, and Customer Retention',
                paragraphs: [
                    'An e-commerce storefront is only as effective as the fulfillment operations supporting it. We build automated webhook integrations linking orders directly to courier partners like Shiprocket, Delhivery, and FedEx for real-time tracking generation, label printing, and automated customer WhatsApp updates.',
                    'To maximize customer Lifetime Value (LTV), we configure automated abandoned cart recovery sequences, replenishment reminder triggers, and tiered loyalty points programs that drive consistent recurring revenue without requiring manual marketing management.',
                ],
            },
        ],
    },

    'business-automation': {
        id: 'business-automation',
        num: '04',
        title: 'Business Automation Solutions',
        shortTitle: 'Business Automation',
        tagline: 'Intelligent workflow automation, cloud DevOps pipelines, and hands-free operations.',
        heroDescription:
            'We eliminate operational bottlenecks and repetitive manual tasks through intelligent automation pipelines. Connecting your CRMs, billing systems, communication tools, and databases with self-healing n8n workflows and enterprise cloud infrastructure.',
        badge: 'AUTOMATION & DEVOPS',
        iconType: 'workflow',
        stats: [
            { label: 'Hours Saved', value: '40+ hrs/wk', detail: 'Average team time liberated from manual data entry' },
            { label: 'Execution Speed', value: 'Real-Time', detail: 'Instant event-driven webhooks and triggers' },
            { label: 'Error Rate', value: '0.01%', detail: 'Automated retry logic and alerting sentries' },
            { label: 'Tool Integrations', value: '250+', detail: 'CRM, ERP, Slack, WhatsApp, Google & Custom APIs' },
        ],
        pillars: [
            {
                title: 'End-to-End Workflow Orchestration',
                description: 'Building custom automated logic flows using n8n and Python scripts that synchronize data between sales, marketing, fulfillment, and customer support without human intervention.',
                features: ['Visual & scriptable n8n nodes', 'Conditional branching logic', 'Data transformation & cleansing', 'Automated scheduled cron routines'],
            },
            {
                title: 'Cloud DevOps & Infrastructure as Code',
                description: 'Standardizing your cloud infrastructure on AWS, Google Cloud, or DigitalOcean using Docker containers, Terraform, and automated backup snapshots.',
                features: ['Automated cloud provisioning', 'Containerized micro-environments', 'Zero-downtime rolling deploys', 'SSL, DNS & firewall hardening'],
            },
            {
                title: 'CI/CD Pipeline Automation',
                description: 'Accelerating software release cycles with GitHub Actions pipelines that automatically run linting, test suites, vulnerability checks, and production deployments.',
                features: ['Automated test execution', 'Docker image registry pushes', 'Preview environments for PRs', 'Slack / Discord deployment pings'],
            },
            {
                title: 'Self-Healing Monitoring & Alerting',
                description: 'Real-time telemetry and error capturing using Sentry, Prometheus, and automated recovery webhooks that restart failed tasks before users notice.',
                features: ['Instant WhatsApp/Slack incident alerts', 'Automatic retry policies with backoff', 'Performance degradation thresholding', 'Daily audit digest summaries'],
            },
        ],
        techStack: [
            { category: 'Orchestration', tools: ['n8n (Self-Hosted)', 'Zapier', 'Make', 'Custom Node.js Daemons'] },
            { category: 'Cloud & Containers', tools: ['AWS (ECS, S3, Lambda)', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
            { category: 'CI/CD & Source', tools: ['GitHub Actions', 'GitLab CI', 'Docker Hub', 'ArgoCD'] },
            { category: 'Observability', tools: ['Sentry', 'Prometheus', 'Grafana', 'BetterStack', 'Uptime Kuma'] },
        ],
        process: [
            { step: '01', title: 'Operations Audit & Bottleneck Mapping', description: 'Interviewing stakeholders, auditing current toolchains, and quantifying repetitive manual tasks.', timeframe: 'Week 1' },
            { step: '02', title: 'Workflow Architecture & Sandbox Build', description: 'Designing flowchart logic in isolated test staging environments with mock data.', timeframe: 'Week 2-3' },
            { step: '03', title: 'Data Migration & Pipeline Deployment', description: 'Connecting live API tokens, configuring webhooks, and establishing failure-fallback handlers.', timeframe: 'Week 4' },
            { step: '04', title: 'Staff Onboarding & Monitoring Runbook', description: 'Handing over documentation, configuring incident dashboards, and providing team training.', timeframe: 'Week 5' },
        ],
        deliverables: [
            'Self-hosted, unlimited-run n8n or cloud automation instances',
            'Full workflow JSON blueprints and transformation scripts',
            'Configured GitHub Actions CI/CD pipelines',
            'Live incident notification system connected to Slack / WhatsApp',
            'Complete credential management and API security documentation',
            '60-day operational support and flow maintenance',
        ],
        faqs: [
            {
                question: 'Why choose self-hosted n8n over Zapier or Make?',
                answer: 'Zapier charges per task execution, which can become exorbitantly expensive for high-volume businesses. Self-hosted n8n gives you unlimited workflow executions, zero per-task charges, complete data privacy, and full access to custom code nodes.',
            },
            {
                question: 'Can you automate actions with WhatsApp and Google Sheets?',
                answer: 'Yes, we build systems that trigger instant WhatsApp order updates, lead notifications, customer intake surveys, and sync live rows directly into Google Sheets and your core CRM.',
            },
            {
                question: 'What happens if a third-party API goes down during a workflow?',
                answer: 'Our workflows include built-in exponential backoff retries, dead-letter logging, and immediate alert notifications so no data is ever lost or silently discarded.',
            },
            {
                question: 'Is business data kept private and secure?',
                answer: 'Yes. By running automations on your private cloud infrastructure with encrypted environment variables, your customer and financial data never leaves your enterprise boundary.',
            },
        ],
        relatedClientIds: ['breta-world', 'stoxwaves', 'fourteen-yards'],
        editorialSections: [
            {
                title: 'The Hidden Cost of Repetitive Operations',
                paragraphs: [
                    'In almost every scaling enterprise, high-value team members spend countless hours acting as human data routers: manually copying customer inquiries from email into CRMs, compiling weekly Excel reports, generating billing PDFs, and cross-checking inventory spreadsheets. These tasks are tedious, error-prone, and act as an invisible brake on your company’s growth.',
                    'At DotQ, we treat operational efficiency as a core engineering discipline. We build enterprise automation pipelines that link your isolated tools into an autonomous, self-healing digital nervous system. Data flows instantly where it belongs, alerts are delivered before issues escalate, and your staff is liberated to focus on strategic execution.',
                ],
                keyTakeaway: 'Automating high-frequency operational handoffs typically saves teams 30 to 50 hours of administrative labor every single week.',
            },
            {
                title: 'Self-Hosted n8n Workflows with Zero Execution Limits',
                paragraphs: [
                    'Many companies start their automation journey on proprietary SaaS platforms like Zapier or Make. However, as transactional volume scales, their per-task pricing tiers become an enormous recurring financial penalty, and sensitive customer data is repeatedly transmitted across third-party servers.',
                    'DotQ specializes in deploying self-hosted, enterprise-grade n8n workflow servers on private cloud instances (AWS, GCP, or DigitalOcean). You get unlimited automated executions, zero per-task pricing, complete data sovereign privacy, and the unrestricted ability to write custom JavaScript and Python logic nodes for complex business rules.',
                ],
                bulletPoints: [
                    'Unlimited workflow executions with zero recurring per-task licensing fees',
                    'Complete data privacy with on-premise or private cloud hosting',
                    'Direct database connectors for PostgreSQL, MongoDB, Redis, and MySQL',
                    'Native bi-directional integrations for WhatsApp Business, Slack, Google Workspace, and HubSpot',
                ],
            },
            {
                title: 'Cloud DevOps and CI/CD Automation',
                paragraphs: [
                    'Modern software engineering requires rapid, reliable deployment cycles. We design automated continuous integration and continuous deployment (CI/CD) pipelines using GitHub Actions. Every code commit triggers automated linting, security scans, unit tests, and seamless zero-downtime rolling deployments to production.',
                    'Cloud environments are defined strictly as code (IaC) using Docker containerization and Terraform scripts. This guarantees that staging and production environments match identically, eliminating the notorious "it works on my machine" dilemma and making disaster recovery an automated, one-click reality.',
                ],
                keyTakeaway: 'Standardized CI/CD pipelines allow development teams to ship bug fixes and new features multiple times a day with zero production downtime.',
            },
            {
                title: 'Resilience, Error Handling, and Automated Alerting',
                paragraphs: [
                    'Real-world APIs will occasionally timeout, rate-limit, or crash. A naive automation script fails silently, leaving orders unfulfilled or leads forgotten. DotQ automations are engineered with enterprise failover resilience.',
                    'Every workflow incorporates automated exponential backoff retries and structured dead-letter logging. If an unexpected failure occurs, an instant notification is dispatched directly to your team’s Slack or WhatsApp incident channel with complete error payload context, ensuring full operational reliability around the clock.',
                ],
            },
        ],
    },

    'performance-engineering': {
        id: 'performance-engineering',
        num: '05',
        title: 'Performance Engineering',
        shortTitle: 'Performance & Speed',
        tagline: 'Core Web Vitals mastery, sub-second latency, and high-concurrency optimization.',
        heroDescription:
            'Speed is a feature and a direct revenue driver. We audit, profile, and re-engineer web and backend systems to achieve sub-second page loads, green Google Core Web Vitals, and the resilience to absorb extreme traffic spikes effortlessly.',
        badge: 'OPTIMIZATION & RELIABILITY',
        iconType: 'performance-chart',
        stats: [
            { label: 'Average Speed Boost', value: '3x - 5x', detail: 'Reduction in Largest Contentful Paint (LCP)' },
            { label: 'Core Web Vitals', value: '100% Green', detail: 'Passing Google search ranking benchmarks' },
            { label: 'Bundle Reduction', value: '-65%', detail: 'Tree-shaking, code-splitting & dynamic imports' },
            { label: 'Server Response', value: '< 90ms', detail: 'Edge-cached responses at global points of presence' },
        ],
        pillars: [
            {
                title: 'Core Web Vitals Optimization',
                description: 'Optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to secure top organic search rankings and eliminate visitor frustration.',
                features: ['Critical CSS inlining', 'Font preloading & zero-shift rendering', 'Next-gen WebP/AVIF image compression', 'Main-thread JavaScript deduplication'],
            },
            {
                title: 'Database Profiling & Query Optimization',
                description: 'Diagnosing slow database queries, eliminating N+1 queries, optimizing composite indexes, and introducing connection pooling to multiply throughput.',
                features: ['EXPLAIN ANALYZE query profiling', 'B-tree & GiST index optimization', 'PgBouncer connection pooling', 'Query-level Redis result caching'],
            },
            {
                title: 'Global Edge Caching & CDN Networks',
                description: 'Distributing static assets, server-rendered HTML, and dynamic API micro-responses across global edge nodes via Cloudflare Workers and Vercel Edge.',
                features: ['Stale-while-revalidate policies', 'Edge cache-tag purging', 'Smart DDoS & bot filtering', 'HTTP/3 and Brotli compression'],
            },
            {
                title: 'Stress Testing & Concurrency Hardening',
                description: 'Rigorous load testing using k6 and Locust to simulate thousands of concurrent users, pinpointing breaking points before high-stakes marketing campaigns.',
                features: ['Load simulation up to 100k users', 'Memory leak & thread dump analysis', 'Auto-scaling policy configuration', 'Failover resilience audits'],
            },
        ],
        techStack: [
            { category: 'Profiling Tools', tools: ['Chrome DevTools', 'Lighthouse CI', 'WebPageTest', 'Flamegraphs'] },
            { category: 'Edge & CDN', tools: ['Cloudflare Enterprise', 'Vercel Edge', 'AWS CloudFront', 'Fastly'] },
            { category: 'Load Testing', tools: ['k6 by Grafana', 'Locust', 'Artillery', 'wrk'] },
            { category: 'Monitoring', tools: ['Google Search Console', 'Datadog APM', 'Sentry Performance', 'New Relic'] },
        ],
        process: [
            { step: '01', title: 'Comprehensive Speed Audit', description: 'Profiling bundle sizes, TTFB, database query latency, and Core Web Vitals on mobile 4G connections.', timeframe: 'Week 1' },
            { step: '02', title: 'Frontend Asset & Render Optimization', description: 'Eliminating blocking resources, code-splitting bundles, and converting media to AVIF/WebP formats.', timeframe: 'Week 2' },
            { step: '03', title: 'Backend & Database Acceleration', description: 'Indexing database tables, adding Redis caching tiers, and optimizing ORM query execution.', timeframe: 'Week 3' },
            { step: '04', title: 'Benchmarking & Performance Budgets', description: 'Re-testing across global devices, setting up Lighthouse CI guards in PRs to prevent regressions.', timeframe: 'Week 4' },
        ],
        deliverables: [
            'Before & After performance audit report with Lighthouse scores',
            'Refactored frontend codebase with optimized bundle sizes',
            'Database query index improvements and schema patches',
            'Configured Cloudflare edge rules and cache policies',
            'Automated CI performance budget preventing future regressions',
            'Executive summary detailing expected conversion rate impact',
        ],
        faqs: [
            {
                question: 'How does site speed affect Google search rankings?',
                answer: 'Google uses Core Web Vitals as an explicit mobile search ranking factor. Websites that pass all three metrics (LCP, INP, CLS) receive preferential organic ranking over slower competitors with similar content.',
            },
            {
                question: 'Can you optimize performance without redesigning our entire site?',
                answer: 'Yes! Over 80% of speed improvements come from optimizing critical asset delivery, lazy-loading heavy scripts, database index tuning, and edge caching — leaving your visual design completely intact.',
            },
            {
                question: 'What is the target load time for e-commerce conversion?',
                answer: 'Industry studies show that every 100ms improvement in page speed can increase checkout conversions by 1-2%. We target sub-1.5 second total loads on standard mobile networks.',
            },
            {
                question: 'How do you prevent developers from making the site slow again?',
                answer: 'We configure automated Performance Budgets in your GitHub Actions CI. If a developer opens a pull request that increases bundle size or drops Lighthouse scores below agreed thresholds, the build automatically flags it.',
            },
        ],
        relatedClientIds: ['naiksha', 'yugen-bags', 'stoxwaves'],
        editorialSections: [
            {
                title: 'The Economic Impact of Milliseconds',
                paragraphs: [
                    'In digital product engineering, speed is not a superficial vanity metric—it is a direct multiplier of commercial success. Extensive benchmark studies by Google and Amazon have repeatedly proven that every 100-millisecond reduction in page latency delivers a 1% to 2% increase in checkout conversions. Conversely, sluggish interfaces increase bounce rates, destroy paid advertising ROI, and frustrate users.',
                    'Furthermore, Google has integrated Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) directly into its primary search ranking algorithms. If your site scores poorly, your competitors will systematically outrank you for high-intent commercial keywords even if your content is superior.',
                ],
                keyTakeaway: 'Passing Google’s Core Web Vitals threshold is both an organic search ranking prerequisite and a proven driver of checkout revenue.',
            },
            {
                title: 'Deconstructing Frontend Bottlenecks',
                paragraphs: [
                    'Most modern web applications suffer not from bad servers, but from bloated client-side JavaScript execution. Massive multi-megabyte bundle payloads tie up the browser’s single main thread during initial parsing, causing taps and clicks to lag and freezing mobile browsers.',
                    'Our engineers conduct forensic runtime profiling using Chrome DevTools and WebPageTest. We eliminate unneeded dependency bloat, implement strict route-based code splitting, inline critical CSS, and defer non-essential analytics tags. Media assets are automatically transcoded to next-gen AVIF and WebP formats with explicit aspect ratios, completely eliminating cumulative layout shifts.',
                ],
                bulletPoints: [
                    'JavaScript payload reductions exceeding 60% through dead-code tree-shaking',
                    'Zero-shift font loading with font-display: swap and preloaded WOFF2 assets',
                    'Interaction to Next Paint (INP) tuned to sub-50ms responsiveness',
                    'Automated responsive image srcsets serving optimal sizes per device viewport',
                ],
            },
            {
                title: 'Database Profiling and Global Edge Caching',
                paragraphs: [
                    'A blistering frontend is useless if your server takes 800ms to return the initial HTML document. We audit database access layers using EXPLAIN ANALYZE, uncovering unindexed foreign keys, table full-scans, and the classic ORM N+1 query problem.',
                    'We deploy Cloudflare Workers and edge caching networks that sit directly in front of your core servers. Dynamic pages and API responses are cached across hundreds of global points of presence using stale-while-revalidate headers. A visitor in London, Dubai, or Mumbai receives fully rendered content within 80 milliseconds.',
                ],
                keyTakeaway: 'Distributing cached HTML at the network edge drops global TTFB to under 100ms, making your site feel instantaneously responsive.',
            },
            {
                title: 'Load Stress Testing and Continuous Performance Budgets',
                paragraphs: [
                    'Performance engineering is incomplete without stress validation. Using k6 and distributed worker fleets, we subject your systems to synthetic traffic surges up to 50,000 concurrent virtual users. We identify database connection pool saturation, memory leaks, and auto-scaler delays before high-stakes product launches or marketing campaigns.',
                    'To protect your investment over the long term, we embed automated Lighthouse CI performance budgets into your pull request pipelines. If a future code change increases bundle sizes or drops performance metrics below agreed thresholds, the build is automatically blocked.',
                ],
            },
        ],
    },

    'ai-integration': {
        id: 'ai-integration',
        num: '06',
        title: 'AI Integration',
        shortTitle: 'AI Integration',
        tagline: 'LLM API integration, vector embeddings, autonomous agentic workflows, and fine-tuned models.',
        heroDescription:
            'We bridge state-of-the-art artificial intelligence directly into your production software. From Retrieval-Augmented Generation (RAG) knowledge bases and intelligent chatbots to autonomous multi-agent systems and custom LLM API workflows.',
        badge: 'INTELLIGENCE & LLM APIS',
        iconType: 'ai-panel',
        stats: [
            { label: 'LLM Orchestration', value: 'Multi-Model', detail: 'OpenAI, Anthropic Claude, Google Gemini & Open-Source' },
            { label: 'Query Latency', value: '< 450ms TTFT', detail: 'Streaming token responses with edge vector lookup' },
            { label: 'Retrieval Precision', value: '95%+', detail: 'Hybrid dense + sparse semantic vector search' },
            { label: 'Enterprise Security', value: 'Private RAG', detail: 'Zero data retention & enterprise compliance' },
        ],
        pillars: [
            {
                title: 'Retrieval-Augmented Generation (RAG)',
                description: 'Connecting LLMs to your private business documents, customer manuals, and databases. Accurate, hallucination-free answers with clickable source citations.',
                features: ['Hybrid semantic + keyword search', 'Dynamic chunking & reranking', 'Vector embeddings with pgvector / Pinecone', 'Strict citations and source attribution'],
            },
            {
                title: 'Autonomous AI Agents & Function Calling',
                description: 'Engineering intelligent agents that can browse APIs, execute database queries, generate reports, and automate multi-step operational tasks autonomously.',
                features: ['Structured tool & function calling', 'Multi-agent orchestration loops', 'Self-correcting error recovery', 'Human-in-the-loop approval checkpoints'],
            },
            {
                title: 'Smart Conversational Assistants & Copilots',
                description: 'Custom AI chatbots trained on your brand voice and support FAQs. Delivering instant, personalized customer resolutions 24/7 across web, WhatsApp, and Slack.',
                features: ['Streaming token UI responses', 'Multi-turn conversation memory', 'CRM & ticketing escalation', 'Sentiment & intent classification'],
            },
            {
                title: 'AI Guardrails, Privacy & Cost Optimization',
                description: 'Protecting your application from prompt injections, securing proprietary IP, and optimizing token consumption using smart semantic caching.',
                features: ['Prompt injection shields (NeMo / Llama Guard)', 'Semantic cache tiers (GPTCache)', 'PII redaction and data masking', 'Token usage analytics and budget caps'],
            },
        ],
        techStack: [
            { category: 'AI Models & APIs', tools: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Google Gemini 2.0', 'Ollama / DeepSeek'] },
            { category: 'Frameworks', tools: ['LangChain', 'LlamaIndex', 'Vercel AI SDK', 'FastAPI', 'Python'] },
            { category: 'Vector Databases', tools: ['pgvector (PostgreSQL)', 'Pinecone', 'ChromaDB', 'Qdrant'] },
            { category: 'Embeddings & Rerankers', tools: ['text-embedding-3', 'Cohere Rerank', 'BGE Embeddings', 'HuggingFace'] },
        ],
        process: [
            { step: '01', title: 'Use Case Feasibility & Data Audit', description: 'Evaluating business goals, assessing private data cleanliness, and selecting the optimal foundation models.', timeframe: 'Week 1' },
            { step: '02', title: 'RAG Pipeline & Embeddings Sandbox', description: 'Chunking proprietary documents, building vector index collections, and benchmarking retrieval accuracy.', timeframe: 'Week 2-3' },
            { step: '03', title: 'Agent Tooling & Frontend UI Integration', description: 'Connecting function-calling APIs, building streaming chat components, and integrating with web/mobile apps.', timeframe: 'Week 4-5' },
            { step: '04', title: 'Guardrails Hardening & Deployment', description: 'Testing adversarial prompts, setting rate limits, caching common queries, and deploying to production.', timeframe: 'Week 6' },
        ],
        deliverables: [
            'Production AI API service with streaming endpoints',
            'Configured vector database cluster with automated document ingestion',
            'Embedded streaming chat UI components for web and mobile',
            'Full prompt engineering suite and system instruction prompts',
            'Security guardrail layer with PII masking and prompt defense',
            'Telemetry dashboard tracking token spend, latency, and feedback',
        ],
        faqs: [
            {
                question: 'Will our proprietary company data be used to train public AI models?',
                answer: 'No. We exclusively use enterprise API agreements (OpenAI, Anthropic, AWS Bedrock) which contractually guarantee that your data and prompts are never used for model training.',
            },
            {
                question: 'How do you prevent AI hallucinations?',
                answer: 'We implement rigorous RAG pipelines where the model is strictly constrained to answer only from verified retrieved context chunks, complete with verbatim source references.',
            },
            {
                question: 'Can the AI interact with our existing internal database or CRM?',
                answer: 'Yes! Using function calling and structured tool execution, the AI can safely look up customer records, check stock status, book appointments, or create support tickets.',
            },
            {
                question: 'How much do LLM API calls typically cost to run?',
                answer: 'Modern models like GPT-4o Mini and Claude 3.5 Haiku are remarkably affordable (fractions of a cent per conversation). We also implement semantic caching to serve repeat queries for zero additional API cost.',
            },
        ],
        relatedClientIds: ['stoxwaves', 'naiksha', 'breta-world'],
        editorialSections: [
            {
                title: 'Moving Beyond Generic Chatbots to Practical AI',
                paragraphs: [
                    'Artificial Intelligence has captured global attention, but the vast majority of enterprise AI implementations fail to produce measurable business value. Off-the-shelf generative tools and generic chatbot wrappers frequently invent facts (hallucinations), leak confidential customer information, and lack connection to real operational systems.',
                    'At DotQ, we treat AI as an engineering capability, not a marketing gimmick. We build production-ready intelligent systems that connect state-of-the-art foundation models (OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini) directly into your private business databases, APIs, and customer workflows with mathematical precision.',
                ],
                keyTakeaway: 'The value of AI is not in general conversation; it is in automating high-value decisions with verified data ground truth.',
            },
            {
                title: 'Private Retrieval-Augmented Generation (RAG)',
                paragraphs: [
                    'Standard foundation models only know information up to their training cutoff date and know nothing about your private business documents, customer orders, or proprietary procedures. Fine-tuning models on private data is prohibitively expensive and difficult to update continuously.',
                    'We solve this by engineering private Retrieval-Augmented Generation (RAG) architectures. We ingest your company’s PDFs, databases, Notion wikis, and technical manuals, converting them into high-dimensional vector embeddings using pgvector or Pinecone. When a user asks a question, we execute hybrid semantic search to retrieve the exact relevant excerpts, constraining the LLM to generate responses solely based on verified facts with clickable citations.',
                ],
                bulletPoints: [
                    'Hybrid dense semantic vector + sparse BM25 keyword retrieval for 95%+ precision',
                    'Cohere cross-encoder reranking ensuring the most relevant context is fed to the model',
                    'Zero hallucinations with mandatory verbatim citation attribution',
                    'Automated incremental document ingestion pipelines as internal knowledge evolves',
                ],
            },
            {
                title: 'Autonomous Multi-Agent Workflows and Tool Calling',
                paragraphs: [
                    'Modern AI is at its most powerful when it transitions from passive reading to active execution. Using structured JSON function calling and LangChain/LlamaIndex orchestration, we build autonomous software agents capable of executing complex multi-step workflows.',
                    'An AI agent can parse an unstructured customer inquiry email, verify the customer’s identity in your PostgreSQL database, retrieve their tracking number from Shiprocket, check return eligibility rules, draft a courteous response, and queue a refund for human manager sign-off—all within 4 seconds.',
                ],
                keyTakeaway: 'Agents bridge generative language capabilities with transactional APIs, transforming natural language directly into automated database actions.',
            },
            {
                title: 'Enterprise Guardrails, Security, and Cost Control',
                paragraphs: [
                    'Deploying AI into production requires rigorous risk management. We implement adversarial prompt injection defense layers (such as Llama Guard and custom regex shields) to prevent malicious users from jailbreaking your system or extracting private system instructions. Personally Identifiable Information (PII) is automatically scrubbed before reaching external LLM APIs.',
                    'To protect your bottom line from runaway API billing, we introduce semantic caching tiers using Redis. If a user asks a question identical or semantically equivalent to one answered recently, the verified response is served instantly from cache for zero API token cost.',
                ],
            },
        ],
    },

    'digital-marketing': {
        id: 'digital-marketing',
        num: '07',
        title: 'Digital Marketing & Growth',
        shortTitle: 'Digital Marketing',
        tagline: 'Data-driven SEO, high-ROI performance marketing, social campaigns, and CRO.',
        heroDescription:
            'Great products require great distribution. We engineer comprehensive digital marketing engines combining technical SEO, targeted paid advertising, content marketing, and conversion rate optimization (CRO) to scale qualified traffic and revenue.',
        badge: 'GROWTH & REVENUE',
        iconType: 'digital-marketing',
        stats: [
            { label: 'Organic Traffic', value: 'Up to +240%', detail: 'Semantic keyword targeting and technical SEO dominance' },
            { label: 'Average ROAS', value: '4.2x - 6.8x', detail: 'Targeted Google Ads & Meta Ads campaign management' },
            { label: 'Lead Conversion', value: '+35%', detail: 'Funnel restructuring and A/B tested landing pages' },
            { label: 'Reporting Cadence', value: 'Live & Weekly', detail: 'Real-time Looker Studio dashboards & ROI tracking' },
        ],
        pillars: [
            {
                title: 'Technical & Semantic SEO',
                description: 'Dominating search engine rankings with pristine technical health, rich schema markup, core web vitals optimization, and high-intent commercial keyword architectures.',
                features: ['Comprehensive schema structured data', 'Site architecture & internal linking', 'High-intent programmatic SEO content', 'Competitor keyword gap analysis'],
            },
            {
                title: 'Performance Paid Ads (PPC & Social)',
                description: 'High-converting ad campaigns across Google Search, Performance Max, Meta (Instagram/Facebook), and LinkedIn Ads engineered to maximize Return on Ad Spend (ROAS).',
                features: ['Google Search & Shopping ads', 'Meta high-converting video creatives', 'Negative keyword pruning & bid strategies', 'Pixel & Meta Conversions API (CAPI) sync'],
            },
            {
                title: 'Conversion Rate Optimization (CRO)',
                description: 'Transforming passive visitors into paying customers. Analyzing user friction points through heatmaps, screen recordings, and rigorous split-testing of landing page elements.',
                features: ['A/B and multivariate split testing', 'Hotjar heatmap & session recordings', 'Form friction reduction & micro-copy', 'Mobile user journey overhaul'],
            },
            {
                title: 'Full-Funnel Analytics & Attribution',
                description: 'Setting up clean, first-party data tracking with Google Analytics 4, Tag Manager, and custom Looker Studio dashboards so every marketing dollar spent is accountable.',
                features: ['GA4 server-side container tracking', 'Custom UTM attribution models', 'Automated Looker Studio dashboards', 'Customer Lifetime Value (LTV) cohorts'],
            },
        ],
        techStack: [
            { category: 'Search & SEO', tools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'SurferSEO'] },
            { category: 'Ad Platforms', tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'YouTube Ads'] },
            { category: 'Analytics & Tracking', tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'PostHog'] },
            { category: 'CRO & Heatmaps', tools: ['Hotjar', 'Microsoft Clarity', 'VWO', 'Google Optimize'] },
        ],
        process: [
            { step: '01', title: 'Market & Competitor Audit', description: 'Analyzing existing traffic sources, competitor ad copies, keyword gaps, and tracking infrastructure.', timeframe: 'Week 1' },
            { step: '02', title: 'Tracking Setup & Audience Architecture', description: 'Deploying GA4, Meta CAPI, Google Tag Manager events, and building high-intent remarketing audiences.', timeframe: 'Week 2' },
            { step: '03', title: 'Campaign Launch & SEO Foundation', description: 'Publishing optimized landing pages, activating targeted search/social ads, and implementing technical SEO.', timeframe: 'Week 3-4' },
            { step: '04', title: 'Iterative Optimization & Scale', description: 'Pruning underperforming ad sets, A/B testing checkout copy, and scaling high-performing keywords.', timeframe: 'Ongoing' },
        ],
        deliverables: [
            'Complete Technical SEO audit and implementation roadmap',
            'Production Google Ads & Meta Ads campaign structure',
            'Full GA4 and Meta Conversions API (CAPI) server-side setup',
            'Custom high-converting landing page designs and copy',
            'Live Looker Studio executive dashboard for real-time ROI',
            'Weekly performance reviews and growth strategy recommendations',
        ],
        faqs: [
            {
                question: 'How quickly can we expect to see results from digital marketing?',
                answer: 'Paid advertising campaigns (Google Search and Meta Ads) begin generating qualified leads and sales within 48 to 72 hours of launch. Organic SEO typically shows compounding ranking and traffic gains within 6 to 12 weeks.',
            },
            {
                question: 'What is your approach to managing advertising budget and ROAS?',
                answer: 'We test small batches of creatives and keyword groups before allocating significant budget. We scale only the campaigns that demonstrate a verifiable positive Return on Ad Spend (ROAS).',
            },
            {
                question: 'How do you track conversions accurately with iOS tracking restrictions?',
                answer: 'We implement server-side tracking via Google Tag Manager and Meta Conversions API (CAPI) directly from your backend/edge server. This bypasses browser ad blockers and iOS privacy filters for 99%+ attribution accuracy.',
            },
            {
                question: 'Do you create the ad creatives and copywriting as well?',
                answer: 'Yes! Our team handles end-to-end creative production including compelling ad copy, custom visual banners, motion graphics, and high-converting landing page designs.',
            },
        ],
        relatedClientIds: ['naiksha', 'yugen-bags', 'cff-academy'],
        editorialSections: [
            {
                title: 'Engineering the Distribution Engine',
                paragraphs: [
                    'Even the most elegantly engineered digital product will fail if prospective customers cannot find it. Too many businesses maintain a total separation between their engineering team and their marketing agency. The result is sluggish, bloated landing pages, broken conversion tracking scripts, and tens of thousands of dollars wasted on ad campaigns that fail to deliver a positive ROI.',
                    'At DotQ, we treat digital marketing with the exact same quantitative rigor as software engineering. We build growth engines that connect technical search visibility, data-driven paid advertising, and conversion rate optimization (CRO) into a unified, predictable revenue pipeline.',
                ],
                keyTakeaway: 'Marrying clean web performance with semantic SEO and high-intent paid campaigns drives down customer acquisition costs by up to 35%.',
            },
            {
                title: 'Dominating Organic Search with Technical SEO',
                paragraphs: [
                    'Modern SEO is no longer about stuffing repetitive keywords into blog posts. Google’s neural ranking algorithms prioritize technical page health, comprehensive JSON-LD schema markup, clear entity relationships, and green Core Web Vitals performance scores.',
                    'We construct your website’s information architecture so search engine bots can index your core service and product pages without wasting crawl budget. Every page includes custom structured data for Google rich snippets (products, FAQs, reviews, breadcrumbs), ensuring your brand commands higher click-through rates (CTR) on organic search results pages.',
                ],
                bulletPoints: [
                    'Deep schema markup (JSON-LD) for rich search snippets and knowledge graph placement',
                    'High-intent commercial keyword architectures targeting ready-to-buy decision makers',
                    'Elimination of 404 dead ends, redirect chains, and duplicate canonical indexing issues',
                    'Continuous monitoring of indexing status via Google Search Console telemetry',
                ],
            },
            {
                title: 'High-ROAS Paid Acquisition and Funnel Strategy',
                paragraphs: [
                    'Paid advertising should be an automated profit center, not a speculative expense. We plan, execute, and manage high-conversion campaigns across Google Search, Performance Max, Meta Ads (Instagram and Facebook), and LinkedIn Ads.',
                    'Instead of broad, wasteful targeting, we structure campaigns around high-intent search queries and precise demographic cohorts. Ad creatives, copy variations, and value propositions are tested continuously in structured sprint cycles. Underperforming ad groups are pruned ruthlessly, while budget is scaled aggressively into the campaigns delivering proven 4x+ Return on Ad Spend (ROAS).',
                ],
                keyTakeaway: 'Systematic A/B testing of value propositions and ad copy guarantees that marketing capital is directed exclusively toward high-converting customer segments.',
            },
            {
                title: 'Conversion Rate Optimization (CRO) and First-Party Attribution',
                paragraphs: [
                    'Doubling your website’s conversion rate has the exact same economic impact as doubling your marketing budget, but at a fraction of the cost. We analyze customer journeys using session recordings, scroll heatmaps, and funnel drop-off analytics. Form fields are simplified, friction points are removed, and key calls-to-action are placed strategically.',
                    'In an era of strict iOS privacy restrictions and browser ad-blockers, standard client-side pixel tracking loses up to 30% of sales attribution. We implement server-side tracking containers using Google Tag Manager and Meta Conversions API (CAPI) hosted on your cloud infrastructure. Every conversion is verified with 99%+ accuracy, feeding clean conversion data back to ad algorithms for superior bidding efficiency.',
                ],
            },
        ],
    },
};
