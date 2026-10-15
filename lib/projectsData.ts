export interface ProjectDetail {
    id: string;
    name: string;
    tagline: string;
    client: string;
    category: string;
    year: string;
    url: string;
    displayUrl: string;
    previewImage: string;
    overview: string;
    challenge: string[];
    solution: string[];
    keyFeatures: string[];
    results: {
        metric: string;
        label: string;
        description: string;
    }[];
    techStack: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export const PROJECTS_DATA: Record<string, ProjectDetail> = {
    'naiksha': {
        id: 'naiksha',
        name: 'Naiksha',
        tagline: 'Immersive luxury e-commerce platform with sub-second page transitions.',
        client: 'Naiksha Luxury Pret',
        category: 'E-Commerce & Retail',
        year: '2025',
        url: 'https://www.naiksha.com',
        displayUrl: 'www.naiksha.com',
        previewImage: '/Works IMG/Naiksha 01.png',
        overview:
            'Naiksha is a premium contemporary apparel and luxury pret label requiring a digital storefront that matches the artisanal precision of its physical collections. DotQ engineered a headless Next.js commerce architecture focused on rich product imagery, instant catalog filtering, and frictionless mobile checkout.',
        challenge: [
            'Traditional commerce templates struggled with Naiksha’s ultra-high-resolution garment photography, causing sluggish initial paint times and noticeable Cumulative Layout Shift (CLS) on mobile devices.',
            'Furthermore, the brand’s high-traffic festival drops frequently overwhelmed standard monolithic checkouts, leading to cart timeouts, inventory overselling, and lost orders.',
        ],
        solution: [
            'We architected a bespoke headless Next.js 15 storefront that pre-renders product pages at the edge, converting heavy garment assets into responsive WebP/AVIF formats with zero layout shifting.',
            'We decoupled checkout processing with an event-driven inventory locking queue that guarantees transactional accuracy during sudden surges of concurrent shoppers. A streamlined, single-page drawer checkout was introduced with native express payments via UPI and Apple Pay.',
        ],
        keyFeatures: [
            'Sub-second catalog browsing with instant algorithmic facet filtering',
            'Dynamic slide-out cart drawer with real-time stock reservation',
            'Full mobile-first checkout with address autocomplete and express payment triggers',
            'Multi-warehouse inventory synchronization linking physical boutique stock with digital storefront',
        ],
        results: [
            { metric: '0.8s', label: 'Average Page Load', description: 'Reduced mobile LCP down from 3.8s on legacy platform' },
            { metric: '+32%', label: 'Checkout Conversion', description: 'Measurable lift in completed mobile purchase sessions' },
            { metric: '99+', label: 'Lighthouse Score', description: 'Near-perfect performance and accessibility ratings' },
        ],
        techStack: ['Next.js 15', 'React 19', 'TailwindCSS', 'TypeScript', 'Shopify Storefront API', 'Stripe', 'Razorpay', 'Cloudflare Edge'],
    },

    'yugen-bags': {
        id: 'yugen-bags',
        name: 'Yugen Bags',
        tagline: 'High-conversion direct-to-consumer storefront engineered for contemporary lifestyle accessories.',
        client: 'Yugen Lifestyle',
        category: 'E-Commerce & Retail',
        year: '2025',
        url: 'https://yugenbags.com',
        displayUrl: 'yugenbags.com',
        previewImage: '/Works IMG/yugenbags 01.png',
        overview:
            'Yugen Bags designs minimalist, durable lifestyle carry goods for urban professionals. DotQ was tasked with engineering a high-speed direct-to-consumer (D2C) storefront optimized for paid social ad traffic, high mobile engagement, and automated fulfillment operations.',
        challenge: [
            'Yugen was experiencing a high drop-off rate on mobile Instagram and Meta ad campaigns. Visitors arriving from social platforms were faced with slow mobile load times and multi-step checkout forms that caused over 70% of potential buyers to abandon their carts.',
            'Manual courier dispatching and tracking email creation were also consuming hours of daily operational time for their small team.',
        ],
        solution: [
            'We rebuilt the storefront using Next.js App Router, prioritizing mobile-first viewport ergonomics, one-click buy-now buttons, and interactive 360-degree product zoom galleries.',
            'We integrated automated fulfillment webhooks linking incoming orders directly to courier shipping APIs for instant AWB generation, thermal shipping label printing, and automated WhatsApp delivery updates to customers.',
        ],
        keyFeatures: [
            'One-click express mobile checkout reducing purchase steps from 5 down to 1',
            'Automated Shiprocket courier integration with automated parcel tracking notifications',
            'Dynamic product bundle builder allowing customers to create discounted kit sets',
            'Meta Conversions API (CAPI) server-side tracking ensuring 99%+ marketing attribution',
        ],
        results: [
            { metric: '+41%', label: 'Mobile Conversion Rate', description: 'Surge in completed purchases from paid social ad traffic' },
            { metric: '1.1s', label: 'Time to Interactive', description: 'Instant page responsiveness on 4G cellular connections' },
            { metric: '100%', label: 'Fulfillment Automation', description: 'Zero manual data entry for shipping label generation' },
        ],
        techStack: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion', 'Shiprocket API', 'Razorpay', 'Meta CAPI', 'Redis'],
    },

    'fourteen-yards': {
        id: 'fourteen-yards',
        name: 'Fourteen Yards Studio',
        tagline: 'Minimalist architectural portfolio and design studio showcase.',
        client: 'Fourteen Yards Architecture Studio',
        category: 'Architecture & Design',
        year: '2025',
        url: 'https://fourteenyardsarchitecturestudio.com',
        displayUrl: 'fourteenyardsarchitecturestudio.com',
        previewImage: '/Works IMG/Fourteen Yards 01.png',
        overview:
            'Fourteen Yards Studio is an acclaimed architectural practice known for sculptural forms and sustainable material palettes. DotQ designed and engineered an editorial digital showcase that mirrors the studio’s architectural ethos: clean negative space, structural rhythm, and uncompromising craftsmanship.',
        challenge: [
            'The studio needed to present comprehensive architectural project monographs—incorporating high-resolution site photography, floor plans, and material diagrams—without compromising page load speed or causing browser scroll stuttering.',
            'The existing portfolio felt static and failed to communicate the progressive, award-winning caliber of their residential and commercial commissions.',
        ],
        solution: [
            'We designed an asymmetric, editorial grid system featuring fluid smooth-scrolling physics, custom cursor interactions, and responsive image galleries powered by progressive decoding.',
            'Architectural photography is served via edge CDN with adaptive resolution negotiation, providing retina-sharp detail on high-DPI desktop screens while preserving snappy navigation.',
        ],
        keyFeatures: [
            'Smooth inertia-based scroll engine tuned for effortless portfolio browsing',
            'Interactive project detail monographs with embedded technical drawings and blueprints',
            'Dynamic project categorization across residential, hospitality, and commercial sectors',
            'Minimalist inquiry capture drawer connecting directly to studio principals',
        ],
        results: [
            { metric: '3.4x', label: 'Average Session Duration', description: 'Significant increase in prospective client engagement time' },
            { metric: '98', label: 'Performance Rating', description: 'Flawless image optimization with zero layout shifting' },
            { metric: '+65%', label: 'Qualified Inquiries', description: 'Substantial increase in commercial architectural commissions' },
        ],
        techStack: ['Next.js', 'React', 'Lenis Smooth Scroll', 'Framer Motion', 'TailwindCSS', 'TypeScript', 'Vercel Edge'],
    },

    'breta-world': {
        id: 'breta-world',
        name: 'Breta World',
        tagline: 'Enterprise global corporate presence and interactive technological platform.',
        client: 'Breta World Global',
        category: 'Corporate & Tech',
        year: '2025',
        url: 'https://bretaworld.com',
        displayUrl: 'bretaworld.com',
        previewImage: '/Works IMG/bretaworld 01.png',
        overview:
            'Breta World is a diversified enterprise operating across international supply chains and technological consulting. DotQ engineered a modern, multilingual corporate web presence establishing authority, showcasing global operations, and facilitating enterprise partnership inquiries.',
        challenge: [
            'The corporate web presence needed to communicate complex multi-sector capabilities across varied geographic regions without confusing enterprise decision-makers.',
            'The legacy corporate platform suffered from outdated branding, fragile code architecture, and lack of mobile optimization.',
        ],
        solution: [
            'We engineered an authoritative, modern platform with dark-themed corporate aesthetics, structured business-unit portals, and global CDN routing.',
            'We built modular component systems that allow Breta’s communications team to rapidly publish corporate whitepapers, operational milestones, and executive announcements with consistent typography and formatting.',
        ],
        keyFeatures: [
            'Enterprise information architecture structuring multi-sector industrial capabilities',
            'Global edge network routing delivering < 100ms response times worldwide',
            'Secure corporate inquiry dispatching with automated spam filtration and CRM ingestion',
            'Accessible, WCAG-compliant design language engineered for corporate stakeholders',
        ],
        results: [
            { metric: '99.99%', label: 'Platform Uptime', description: 'Continuous availability across global enterprise timezones' },
            { metric: '< 90ms', label: 'Global Edge TTFB', description: 'Fast page delivery across North America, Europe, and Asia' },
            { metric: '2.5x', label: 'Enterprise Inquiries', description: 'Higher conversion of institutional partnership leads' },
        ],
        techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Cloudflare Workers', 'Resend API', 'Zod'],
    },

    'kasera-interiors': {
        id: 'kasera-interiors',
        name: 'Kasera Interiors',
        tagline: 'Luxury interior design portfolio highlighting bespoke residential and commercial spaces.',
        client: 'Kasera Interiors',
        category: 'Interior Design',
        year: '2025',
        url: 'https://www.keserainteriors.com/',
        displayUrl: 'keserainteriors.com',
        previewImage: '/Works IMG/Kasera Interiros 01.png',
        overview:
            'Kasera Interiors crafts bespoke residential and luxury commercial interiors defined by rich textures and bespoke furnishings. DotQ engineered an editorial portfolio showcase designed to communicate luxury, craftsmanship, and spatial harmony.',
        challenge: [
            'High-end interior design clients evaluate studios almost entirely based on visual presentation. Low-contrast images, awkward layout breaks, and slow image loading diminish the perceived value of multi-million dollar design projects.',
            'The studio needed a seamless way to showcase before-and-after spatial transformations and material moodboards.',
        ],
        solution: [
            'We developed an editorial layout utilizing warm neutral palettes, balanced typography (Poppins and Outfit), and immersive full-bleed imagery that allows the studio’s craftsmanship to take center stage.',
            'A lightweight lightbox and project gallery filtering system lets prospective homeowners and commercial developers explore by room category, material style, and project scope.',
        ],
        keyFeatures: [
            'Immersive full-bleed project galleries with retina-grade responsive photography',
            'Interactive project filtering by residential, commercial, and bespoke furniture commissions',
            'Integrated client consultation booking funnel linking directly to design team calendars',
            'Technical SEO schema markup for interior architecture and local search visibility',
        ],
        results: [
            { metric: '+85%', label: 'Mobile Engagement', description: 'Substantial increase in mobile portfolio browsing depth' },
            { metric: '0.9s', label: 'Largest Contentful Paint', description: 'Rapid visual render of heavy interior photography' },
            { metric: '3x', label: 'Design Consultations', description: 'Consistent flow of high-budget residential client bookings' },
        ],
        techStack: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    },

    'stoxwaves': {
        id: 'stoxwaves',
        name: 'Stoxwaves',
        tagline: 'Fintech portal and market analytics portal engineered for real-time data visualization.',
        client: 'Stoxwaves Analytics',
        category: 'Fintech & Analytics',
        year: '2026',
        url: 'https://stoxwaves.com',
        displayUrl: 'stoxwaves.com',
        previewImage: '/Works IMG/Stoxwave 01.png',
        overview:
            'Stoxwaves provides quantitative market intelligence, algorithmic trading indicators, and real-time equity analytics. DotQ engineered a high-concurrency web portal capable of streaming live ticker updates, rendering interactive financial charts, and managing subscriber tiers.',
        challenge: [
            'Rendering real-time market data ticks and high-frequency candlestick charts on client browsers often leads to frame drops and browser memory leaks.',
            'The platform required stringent security to protect proprietary proprietary market algorithms and manage paid membership access tiers.',
        ],
        solution: [
            'We designed a high-performance frontend architecture using WebSocket streaming and hardware-accelerated Canvas charting to render thousands of price ticks with zero UI lag.',
            'On the backend, we implemented Go-powered microservices backed by Redis Pub/Sub to aggregate market data feeds and broadcast updates to thousands of concurrent users with sub-10ms delivery latency.',
        ],
        keyFeatures: [
            'Real-time WebSocket market data streaming with sub-second price ticker updates',
            'Hardware-accelerated interactive financial charting with multi-timeframe overlays',
            'Role-based access control (RBAC) and Stripe subscription billing integration',
            'Low-latency Go microservices handling thousands of concurrent trader connections',
        ],
        results: [
            { metric: '< 8ms', label: 'Data Broadcast Latency', description: 'Near-instantaneous transmission of live market price signals' },
            { metric: '10,000+', label: 'Concurrent Users', description: 'Zero degradation during market open and volatility spikes' },
            { metric: '99.99%', label: 'System Reliability', description: 'Resilient fault-tolerant financial data infrastructure' },
        ],
        techStack: ['Go (Golang)', 'Next.js 15', 'TypeScript', 'Redis Pub/Sub', 'WebSockets', 'Canvas API', 'Stripe Billing'],
    },

    'cff-academy': {
        id: 'cff-academy',
        name: 'CFF Academy',
        tagline: 'Premier children’s football academy platform engineered for player enrollment and training management.',
        client: 'Champions Football Federation',
        category: 'Sports & Football Academy',
        year: '2026',
        url: 'https://cffacademy.com',
        displayUrl: 'cffacademy.com',
        previewImage: '/Works IMG/CFFAcadamy 01.png',
        overview:
            'CFF Academy is a premier youth football development institution providing professional UEFA-standard coaching. DotQ engineered an intuitive digital platform streamlining player enrollment, session scheduling, tuition payments, and academy announcements for parents and coaches.',
        challenge: [
            'The academy previously managed player registrations, medical disclosures, and monthly fee collections through manual paper forms and disjointed messaging groups, resulting in payment tracking chaos and missed enrollment deadlines.',
            'Parents needed an easy, mobile-friendly way to register children, select training batches, and pay tuition fees securely.',
        ],
        solution: [
            'We built a streamlined parent portal with batch selection, digital medical consent sign-offs, and integrated UPI/card recurring subscriptions via Razorpay.',
            'An administrative coaching dashboard allows academy staff to mark attendance, communicate session schedule adjustments, and automatically trigger WhatsApp updates to parents.',
        ],
        keyFeatures: [
            'Frictionless mobile enrollment funnel with automated age-category allocation',
            'Automated tuition payment reminders and instant GST receipt generation',
            'Coaching staff management portal with live batch attendance tracking',
            'Direct WhatsApp API integration for weather cancellations and training updates',
        ],
        results: [
            { metric: '95%', label: 'Online Adoption', description: 'Parents transitioned entirely to digital registrations within 30 days' },
            { metric: '0 hrs', label: 'Payment Reconciliation', description: 'Automated invoice settlement replacing manual spreadsheet tracking' },
            { metric: '+50%', label: 'Academy Enrollment', description: 'Streamlined online onboarding doubled new student intake' },
        ],
        techStack: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Razorpay Subscriptions', 'WhatsApp Business API', 'PostgreSQL'],
    },

    'zenmode-clothing': {
        id: 'zenmode-clothing',
        name: 'Zenmode Clothing',
        tagline: 'Direct-to-consumer apparel storefront engineered for minimal aesthetic and high checkout conversion.',
        client: 'Zenmode Clothing Co.',
        category: 'Apparel & E-Commerce',
        year: '2026',
        url: 'https://zenmodeclothing.com',
        displayUrl: 'zenmodeclothing.com',
        previewImage: '/Works IMG/Zenmode Clothing 01.png',
        overview:
            'Zenmode Clothing is a modern streetwear and relaxed-fit apparel brand emphasizing clean aesthetics and functional simplicity. DotQ engineered an e-commerce platform that mirrors the label’s zen philosophy: unhurried elegance, lightning-fast interactions, and zero checkout friction.',
        challenge: [
            'With high advertising investment in Instagram Reels and TikTok campaigns, Zenmode needed a mobile storefront that could convert high-bounce social traffic into paying customers in seconds.',
            'Sizing discrepancies and high return rates were also impacting overall operating margins.',
        ],
        solution: [
            'We engineered a lightweight Next.js storefront with a dynamic mobile size advisor, instant slide-out cart drawers, and one-tap checkout via UPI, Google Pay, and Apple Pay.',
            'Lookbook video embeds and interactive fabric texture zooms let customers understand product fit and drape before buying, cutting return rates significantly.',
        ],
        keyFeatures: [
            'Interactive mobile size advisor and fit guide reducing return rates by 22%',
            'Express drawer checkout with instant UPI intent and automated address saving',
            'Automated abandoned checkout recovery sequences via SMS and WhatsApp',
            'Optimized image pipeline serving crisp lookbook imagery under 60KB per product',
        ],
        results: [
            { metric: '+38%', label: 'Mobile Conversion', description: 'Measurable lift in completed purchases from social media traffic' },
            { metric: '-22%', label: 'Return Rate', description: 'Fit guidance and detailed garment zoom reduced sizing exchanges' },
            { metric: '1.0s', label: 'Average Page Speed', description: 'Sub-second mobile experience across all catalog pages' },
        ],
        techStack: ['Next.js 15', 'React', 'TailwindCSS', 'Framer Motion', 'Shopify Storefront API', 'Razorpay', 'Meta Pixel'],
    },
};
