export interface TechnologyLogoItem {
    id: string;
    name: string;
    category: 'backend' | 'frontend' | 'mobile' | 'cloud' | 'bigdata' | 'devops';
    logo: string;
    alt: string;
}

export interface TechnologyCategorySection {
    id: 'backend' | 'frontend' | 'mobile' | 'cloud' | 'bigdata' | 'devops';
    title: string;
    description: string;
    technologies: TechnologyLogoItem[];
}

export interface ArchitecturePillar {
    id: string;
    num: string;
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    tools: string[];
}

export const TECH_CATEGORIES = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'bigdata', label: 'Big Data & Analytics' },
    { id: 'devops', label: 'DevOps & Tools' },
] as const;

export const TECHNOLOGY_SECTIONS: TechnologyCategorySection[] = [
    {
        id: 'backend',
        title: 'Backend Technologies',
        description: 'High-performance runtime environments, scalable frameworks, and transactional databases.',
        technologies: [
            { id: 'python', name: 'Python', category: 'backend', logo: '/tech-logos/python.svg', alt: 'Python' },
            { id: 'java', name: 'Java', category: 'backend', logo: '/tech-logos/java.svg', alt: 'Java' },
            { id: 'php', name: 'PHP', category: 'backend', logo: '/tech-logos/php.svg', alt: 'PHP' },
            { id: 'mysql', name: 'MySQL', category: 'backend', logo: '/tech-logos/mysql.svg', alt: 'MySQL' },
            { id: 'elasticsearch', name: 'Elasticsearch', category: 'backend', logo: '/tech-logos/elasticsearch.svg', alt: 'Elasticsearch' },
            { id: 'golang', name: 'Go (Golang)', category: 'backend', logo: '/tech-logos/golang.svg', alt: 'Go Logo' },
            { id: 'dotnet', name: '.NET', category: 'backend', logo: '/tech-logos/dotnet.svg', alt: '.NET' },
        ],
    },
    {
        id: 'frontend',
        title: 'Front-End Technologies',
        description: 'Modern component libraries, frameworks, and responsive markup for accessible web experiences.',
        technologies: [
            { id: 'nextjs', name: 'Next.js', category: 'frontend', logo: '/tech-logos/nextjs.svg', alt: 'Next.js' },
            { id: 'react', name: 'React', category: 'frontend', logo: '/tech-logos/react.svg', alt: 'React' },
            { id: 'angular', name: 'Angular', category: 'frontend', logo: '/tech-logos/angular.svg', alt: 'Angular' },
            { id: 'html5', name: 'HTML5', category: 'frontend', logo: '/tech-logos/html5.svg', alt: 'HTML5' },
            { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', logo: '/tech-logos/bootstrap.svg', alt: 'Bootstrap' },
            { id: 'css3', name: 'CSS3', category: 'frontend', logo: '/tech-logos/css3.svg', alt: 'CSS3' },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile Technologies',
        description: 'Native iOS and Android engineering paired with cross-platform frameworks.',
        technologies: [
            { id: 'apple', name: 'Apple (iOS)', category: 'mobile', logo: '/tech-logos/apple.svg', alt: 'Apple iOS' },
            { id: 'android', name: 'Android', category: 'mobile', logo: '/tech-logos/android.svg', alt: 'Android' },
            { id: 'flutter', name: 'Flutter', category: 'mobile', logo: '/tech-logos/flutter.svg', alt: 'Flutter' },
            { id: 'ionic', name: 'Ionic', category: 'mobile', logo: '/tech-logos/ionic.svg', alt: 'Ionic' },
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud Technologies',
        description: 'Elastic compute, serverless architectures, and managed multi-region cloud services.',
        technologies: [
            { id: 'azure', name: 'Microsoft Azure', category: 'cloud', logo: '/tech-logos/azure.svg', alt: 'Microsoft Azure' },
            { id: 'aws', name: 'AWS', category: 'cloud', logo: '/tech-logos/aws.svg', alt: 'Amazon Web Services' },
            { id: 'gcp', name: 'Google Cloud', category: 'cloud', logo: '/tech-logos/gcp.svg', alt: 'Google Cloud Platform' },
        ],
    },
    {
        id: 'bigdata',
        title: 'Big Data & Analytics',
        description: 'Distributed streaming engines, data lakehouses, and interactive business intelligence.',
        technologies: [
            { id: 'tableau', name: 'Tableau', category: 'bigdata', logo: '/tech-logos/tableau.svg', alt: 'Tableau' },
            { id: 'powerbi', name: 'Power BI', category: 'bigdata', logo: '/tech-logos/powerbi.svg', alt: 'Power BI' },
            { id: 'databricks', name: 'Databricks', category: 'bigdata', logo: '/tech-logos/databricks.svg', alt: 'Databricks' },
            { id: 'hadoop', name: 'Hadoop', category: 'bigdata', logo: '/tech-logos/hadoop.svg', alt: 'Hadoop' },
            { id: 'spark', name: 'Apache Spark', category: 'bigdata', logo: '/tech-logos/spark.svg', alt: 'Apache Spark' },
            { id: 'deltalake', name: 'Delta Lake', category: 'bigdata', logo: '/tech-logos/deltalake.svg', alt: 'Delta Lake' },
            { id: 'awsglue', name: 'AWS Glue', category: 'bigdata', logo: '/tech-logos/awsglue.svg', alt: 'AWS Glue' },
            { id: 'kafka', name: 'Apache Kafka', category: 'bigdata', logo: '/tech-logos/kafka.svg', alt: 'Apache Kafka' },
            { id: 'hive', name: 'Apache Hive', category: 'bigdata', logo: '/tech-logos/hive.svg', alt: 'Apache Hive' },
            { id: 'hortonworks', name: 'Hortonworks', category: 'bigdata', logo: '/tech-logos/hortonworks.svg', alt: 'Hortonworks' },
            { id: 'nifi', name: 'Apache NiFi', category: 'bigdata', logo: '/tech-logos/nifi.svg', alt: 'Apache NiFi' },
        ],
    },
    {
        id: 'devops',
        title: 'Devops & Other Tools',
        description: 'Container orchestration, continuous integration, automated QA, and team collaboration.',
        technologies: [
            { id: 'jira', name: 'Jira', category: 'devops', logo: '/tech-logos/jira.svg', alt: 'Jira' },
            { id: 'confluence', name: 'Confluence', category: 'devops', logo: '/tech-logos/confluence.svg', alt: 'Confluence' },
            { id: 'redmine', name: 'Redmine', category: 'devops', logo: '/tech-logos/redmine.svg', alt: 'Redmine' },
            { id: 'git', name: 'Git', category: 'devops', logo: '/tech-logos/git.svg', alt: 'Git' },
            { id: 'zendesk', name: 'Zendesk', category: 'devops', logo: '/tech-logos/zendesk.svg', alt: 'Zendesk' },
            { id: 'freshdesk', name: 'Freshdesk', category: 'devops', logo: '/tech-logos/freshdesk.svg', alt: 'Freshdesk' },
            { id: 'selenium', name: 'Selenium', category: 'devops', logo: '/tech-logos/selenium.svg', alt: 'Selenium' },
            { id: 'jenkins', name: 'Jenkins', category: 'devops', logo: '/tech-logos/jenkins.svg', alt: 'Jenkins' },
            { id: 'awsdevops', name: 'AWS DevOps', category: 'devops', logo: '/tech-logos/awsdevops.svg', alt: 'AWS DevOps' },
            { id: 'docker', name: 'Docker', category: 'devops', logo: '/tech-logos/docker.svg', alt: 'Docker' },
            { id: 'kubernetes', name: 'Kubernetes', category: 'devops', logo: '/tech-logos/kubernetes.svg', alt: 'Kubernetes' },
            { id: 'jiraservice', name: 'Jira Service Management', category: 'devops', logo: '/tech-logos/jiraservice.svg', alt: 'Jira Service' },
            { id: 'splunk', name: 'Splunk', category: 'devops', logo: '/tech-logos/splunk.svg', alt: 'Splunk' },
        ],
    },
];

// Flat list for global search and counting
export const ALL_TECHNOLOGIES: TechnologyLogoItem[] = TECHNOLOGY_SECTIONS.flatMap(
    (sec) => sec.technologies
);

export const ARCHITECTURE_PILLARS: ArchitecturePillar[] = [
    {
        id: 'microservices',
        num: '01',
        title: 'Modular Microservices & Domain APIs',
        subtitle: 'Decoupled, high-concurrency systems built for rapid independent scaling.',
        description:
            'Instead of fragile monolithic architectures, we design systems as loosely coupled domain services. Each service owns its data boundary, communicates via efficient gRPC or REST protocols, and scales independently under variable load.',
        points: [
            'Bounded context domain modeling preventing schema entanglement',
            'Lightweight Go and Node.js microservices with sub-millisecond response latency',
            'Unified API Gateway routing with tenant resolution and JWT token validation',
            'Resilient circuit breaking and dead-letter queue recovery protocols',
        ],
        tools: ['Go', 'Node.js', 'gRPC', 'PostgreSQL', 'Docker'],
    },
    {
        id: 'event-driven',
        num: '02',
        title: 'Event-Driven Real-Time Data Streaming',
        subtitle: 'Asynchronous event buses guaranteeing zero dropped messages and instant state sync.',
        description:
            'Mission-critical workflows—from payment webhooks and stock reservations to notification dispatchers—run on high-throughput asynchronous message queues that process spikes without degradation.',
        points: [
            'Apache Kafka and Redis pub/sub handling burst traffic reliably',
            'Idempotent webhook receivers with exponential backoff retry policies',
            'Real-time WebSocket event dispatching to modern frontend interfaces',
            'Distributed audit trail recording every state change chronologically',
        ],
        tools: ['Apache Kafka', 'Redis', 'WebSockets', 'AWS SQS', 'FastAPI'],
    },
    {
        id: 'multi-tenant',
        num: '03',
        title: 'Cloud-Native & Multi-Tenant Scalability',
        subtitle: 'Mathematical tenant data isolation with centralized operational infrastructure.',
        description:
            'Drawing from our proprietary platforms like GoForge and TapQ, we engineer multi-tenant cloud backends that allow multiple independent brands or business units to operate securely on shared high-efficiency infrastructure.',
        points: [
            'Query-level row security and tenant ID resolution at the ingress gateway',
            'Zero cross-tenant data contamination with isolated storage partitions',
            'Dynamic custom domain routing and SSL certificate termination at edge CDNs',
            'Automated resource allocation matching per-tenant tier and traffic demands',
        ],
        tools: ['AWS CloudFront', 'PostgreSQL RLS', 'Go', 'Docker', 'Kubernetes'],
    },
    {
        id: 'devops-cicd',
        num: '04',
        title: 'Automated CI/CD & Infrastructure as Code',
        subtitle: 'Predictable releases with automated testing, containerization, and zero downtime.',
        description:
            'We eliminate deployment anxiety through fully automated delivery pipelines. Every commit undergoes automated unit tests, end-to-end regression runs, container image building, and canary blue/green deployments.',
        points: [
            'GitOps workflows ensuring production infrastructure mirrors declarative code',
            'Automated regression testing preventing broken user journeys or checkout flaws',
            'Containerized deployments with Docker and Kubernetes cluster autoscaling',
            'Comprehensive Splunk and CloudWatch observability with instant alert channels',
        ],
        tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'Selenium', 'Splunk'],
    },
    {
        id: 'bigdata-lakehouse',
        num: '05',
        title: 'Big Data Lakehouse & Unified Analytics',
        subtitle: 'Turning distributed operational datasets into real-time business intelligence.',
        description:
            'Modern organizations generate vast data streams. We design modern Lakehouse architectures combining the cost efficiency of object storage with the transactional reliability of data warehouses for real-time analytics.',
        points: [
            'Databricks and Apache Spark pipelines processing batch and streaming workloads',
            'Delta Lake ACID transaction layers preventing data drift and corruption',
            'Automated AWS Glue serverless ETL transforming unstructured logs into structured catalogs',
            'Interactive Tableau and Power BI executive dashboards for decision telemetry',
        ],
        tools: ['Databricks', 'Apache Spark', 'Delta Lake', 'AWS Glue', 'Tableau'],
    },
    {
        id: 'security-zero-trust',
        num: '06',
        title: 'Zero-Trust Security & Enterprise Compliance',
        subtitle: 'Defense-in-depth security embedded into every API endpoint and database query.',
        description:
            'Security is never an afterthought. From cryptographic key rotation and Razorpay AES-256-GCM encryption to role-based access control and strict CORS/CSP policies, our architectures protect sensitive business and consumer data.',
        points: [
            'End-to-end encryption in transit (TLS 1.3) and at rest (AES-256)',
            'Strict Identity Platform authentication with MFA and short-lived tokens',
            'Automated vulnerability dependency audits integrated into CI/CD',
            'Compliance-ready architecture meeting GDPR and data privacy standards',
        ],
        tools: ['Firebase Auth', 'AES-256-GCM', 'TLS 1.3', 'Role-Based Access', 'Splunk'],
    },
];
