import { publicAsset } from '../utils/assets';
import hmLogo from '../assets/logos/hm.svg';
import discoverLogo from '../assets/logos/discover.svg';
import vikingLogo from '../assets/logos/viking.svg';

export const RESUME_URL = publicAsset('ShrikarTare_LeadEngineer_CV.pdf');

export interface Client {
  name: string;
  role: string;
  description: string;
  highlights: string[];
  url: string;
  logo: string;
  logoAlt: string;
}

export const metrics = [
  { value: 'Millions', label: 'Users Served', detail: 'Global retail & banking platforms' },
  { value: '20+', label: 'Enterprise Projects', detail: 'Delivered for top-tier clients' },
  { value: '20%', label: 'Conversion Rate', detail: 'Achieved on commerce experiences' },
  { value: 'Cloud & AI', label: 'Enthusiast', detail: 'Azure, RAG & GenAI systems' },
  { value: '8+', label: 'Years Experience', detail: 'Full-stack & platform engineering' },
  { value: '20%', label: 'Performance Gains', detail: 'Frontend architecture optimization' },
];

export const whyHireMe = [
  {
    title: 'Technical Leadership',
    description:
      'Lead Engineer owning delivery, architecture discussions, code reviews, mentoring, and stakeholder alignment across Product, Design, SRE, and DevOps.',
  },
  {
    title: 'Full-Stack Ownership',
    description:
      'End-to-end ownership from scalable React/Next.js frontends to Node.js APIs, cloud deployment, and production reliability at enterprise scale.',
  },
  {
    title: 'AI & RAG Systems',
    description:
      'Built production GenAI chatbot using RAG architecture — reducing CMS content discovery effort by 20% for content and internal teams.',
  },
  {
    title: 'Performance Engineering',
    description:
      'Delivered ~20% frontend performance gains and ~10% conversion improvements on high-traffic commerce experiences serving millions of users.',
  },
  {
    title: 'Distributed Systems & Cloud',
    description:
      'Experienced in microservices, API design, Azure cloud architecture, CI/CD pipelines, and scalable system design for global products.',
  },
  {
    title: 'Production Engineering',
    description:
      'Collaborated with SRE teams on incident response, WCAG-compliant banking systems, and zero-defect production deliveries for financial platforms.',
  },
];

export interface CaseStudy {
  title: string;
  role: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  challenges: string[];
  decisions: string[];
  impact: string;
  metrics: string[];
  results: string[];
  websiteUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'H&M Commerce Platform',
    role: 'Lead Engineer · Publicis Sapient',
    problem:
      'Global e-commerce platform needed scalable product detail page architecture serving millions of users across regions with performance and conversion targets.',
    solution:
      'Led development of responsive, themeable PDP and customer service experiences with modular frontend architecture, performance optimization, and conversion-focused engineering.',
    architecture:
      'Scalable frontend architecture · Component-driven design · Multi-brand theming · Performance-optimized rendering · Cross-market deployment',
    technologies: ['React', 'TypeScript', 'Next.js', 'AEM', 'Node.js', 'Azure DevOps', 'CI/CD'],
    challenges: [
      'Millions of concurrent users across global markets',
      'Multi-brand, multi-locale theming at scale',
      'Strict performance budgets on commerce PDPs',
    ],
    decisions: [
      'Modular component architecture for cross-brand reuse',
      'Performance-first rendering and asset optimization strategy',
      'Close SRE collaboration for production incident resolution',
    ],
    impact:
      'Contributed to experiences generating ~$240K AUD monthly business value with measurable conversion and performance gains.',
    metrics: ['~$240K AUD/mo business value', '~10% conversion lift', 'Millions of users'],
    results: [
      'Led module teams and mentored junior engineers',
      'Nominated for Partnering for Client Impact award',
      'Delivered production-grade commerce at global scale',
    ],
    websiteUrl: 'https://www2.hm.com/en_in/index.html',
    featured: true,
  },
  {
    title: 'Discover Bank Digital Banking',
    role: 'Software Engineer · Cognizant',
    problem:
      'Financial institution required secure, accessible banking web applications meeting WCAG AA standards for millions of customers.',
    solution:
      'Developed mobile-friendly, WCAG AA-compliant banking applications with secure API integrations and production-grade quality standards.',
    architecture:
      'Secure API layer · Accessible UI components · Mobile-first responsive design · Financial compliance patterns',
    technologies: ['React', 'Angular', 'TypeScript', 'REST APIs', 'WCAG AA', 'Secure APIs'],
    challenges: [
      'Strict accessibility and security requirements',
      'Complex financial workflows with zero-defect tolerance',
      'Cross-team coordination for production releases',
    ],
    decisions: [
      'Accessibility-first component design patterns',
      'Dual-framework expertise (React + Angular) for team flexibility',
      'Comprehensive testing before production deployment',
    ],
    impact:
      'Awarded Star Performer for delivering a complex banking web app to production with zero major bugs.',
    metrics: ['WCAG AA compliant', 'Zero major production bugs', 'Secure API integration'],
    results: [
      'Mentored new hires and conducted technical interviews',
      'Created internal training documentation',
      'Delivered production banking applications at scale',
    ],
    websiteUrl: 'https://www.discover.com/',
    featured: true,
  },
  {
    title: 'AI-Powered RAG Content Intelligence',
    role: 'Lead Engineer · Internal Platform',
    problem:
      'Content teams struggled to search Adobe Experience Manager content structures, components, metadata, and content hierarchy — slowing editorial workflows.',
    solution:
      'Built a RAG-based chatbot that semantically searches component structures, content hierarchy, metadata, and AEM content models using LLMs and vector databases.',
    architecture:
      'RAG pipeline · Vector embeddings · LLM orchestration · React frontend · Node.js API · AEM content indexing',
    technologies: ['React', 'Node.js', 'RAG', 'LLMs', 'LangChain', 'Vector Databases', 'AEM'],
    challenges: [
      'Complex AEM component taxonomy and nested content models',
      'Accurate semantic retrieval across large content corpora',
      'Adoption by non-technical content teams',
    ],
    decisions: [
      'RAG over fine-tuning for faster iteration on AEM schemas',
      'Vector database for scalable semantic search',
      'Conversational UI for content team accessibility',
    ],
    impact: 'Reduced CMS content discovery effort by 20%, improving content team productivity.',
    metrics: ['20% CMS effort reduction', 'Faster content discovery', 'Internal team adoption'],
    results: [
      'Enabled content teams to self-serve structure queries',
      'Reduced dependency on engineering for AEM navigation',
      'Demonstrated production GenAI value at enterprise scale',
    ],
    websiteUrl: 'https://shrikartare.github.io/chatbot-frontend/',
    githubUrl: 'https://github.com/shrikartare/chatbot-frontend',
    featured: true,
  },
  {
    title: 'Vaccine Finder Platform',
    role: 'Full-Stack Engineer · Side Project',
    problem:
      'Users struggled to find available COVID vaccination slots during high-demand periods with manual checking.',
    solution:
      'Built an API-driven monitoring platform with scheduled polling, slot detection, and automated email/SMS notification delivery.',
    architecture:
      'Scheduler service · API polling engine · Notification service · REST API · Event-driven alerts',
    technologies: ['Node.js', 'REST API', 'Scheduler', 'Email/SMS Notifications', 'API Polling'],
    challenges: [
      'High-frequency polling without rate limiting issues',
      'Reliable notification delivery under load',
      'Real-time slot availability detection',
    ],
    decisions: [
      'Decoupled scheduler from notification service',
      'Polling with backoff to respect API limits',
      'Multi-channel notification for user reach',
    ],
    impact: 'Helped users secure vaccination appointments through automated real-time alerts.',
    metrics: ['Automated slot monitoring', 'Multi-channel notifications', 'API-driven architecture'],
    results: [
      'Continuous availability checking',
      'Instant alerts on slot openings',
      'Scalable notification pipeline',
    ],
    githubUrl: 'https://github.com/shrikartare/vaccine-finder-api',
  },
  {
    title: 'Children Traffic Park',
    role: 'Full-Stack Engineer · Public Sector',
    problem:
      'Traffic authorities needed a digital platform to support traffic safety education initiatives for children.',
    solution:
      'Built an interactive platform supporting traffic education programs in collaboration with traffic police authorities.',
    architecture:
      'Responsive web application · Content-driven education modules · Public sector accessibility',
    technologies: ['React', 'Node.js', 'Responsive Design'],
    challenges: [
      'Engaging UX for young learners',
      'Public sector stakeholder requirements',
    ],
    decisions: [
      'Mobile-first design for field use',
      'Clear, accessible educational content structure',
    ],
    impact: 'Supported traffic safety education for children through an engaging digital experience.',
    metrics: ['Public sector collaboration', 'Education-focused UX'],
    results: [
      'Deployed platform for traffic police initiatives',
      'Interactive traffic safety education content',
    ],
    websiteUrl: 'https://shrikartare.github.io/children-traffic-park/',
    githubUrl: 'https://github.com/shrikartare/children-traffic-park',
  },
  {
    title: 'Legal Solutions Platform',
    role: 'Full-Stack Engineer · Client Project',
    problem:
      'A legal practice needed a modern digital presence focused on client acquisition and professional credibility.',
    solution:
      'Built a modern legal services website with client acquisition flows, service showcase, and professional digital branding.',
    architecture:
      'Marketing-focused SPA · SEO-optimized structure · Client inquiry flows',
    technologies: ['React', 'Node.js', 'REST API', 'Responsive Design'],
    challenges: [
      'Professional brand representation for legal services',
      'Client conversion optimization',
    ],
    decisions: [
      'Clean, trust-focused UI design',
      'Mobile-responsive client acquisition flows',
    ],
    impact: 'Delivered a professional digital presence driving client acquisition for the practice.',
    metrics: ['Client acquisition focus', 'Modern legal services UX'],
    results: [
      'Professional digital brand for legal practice',
      'Client-facing service portal',
    ],
    websiteUrl: 'https://shrikartare.github.io/legal-solutions/',
    githubUrl: 'https://github.com/shrikartare/legal-solutions',
  },
];

export const clients: Client[] = [
  {
    name: 'H&M',
    role: 'Lead Engineer · Publicis Sapient',
    description:
      'Commerce platform serving millions of users — product detail page architecture, performance optimization, and conversion engineering.',
    highlights: ['Millions of users', 'PDP architecture', 'Performance optimization', 'Technical leadership'],
    url: 'https://www2.hm.com/en_in/index.html',
    logo: hmLogo,
    logoAlt: 'H&M logo',
  },
  {
    name: 'Discover Bank',
    role: 'Software Engineer · Cognizant',
    description:
      'WCAG-compliant banking applications with secure APIs and financial systems engineering for a major US financial institution.',
    highlights: ['WCAG AA compliance', 'Secure APIs', 'Banking systems', 'Production quality'],
    url: 'https://www.discover.com/',
    logo: discoverLogo,
    logoAlt: 'Discover Bank logo',
  },
  {
    name: 'Viking River Cruises',
    role: 'Lead Engineer · Publicis Sapient',
    description:
      'Luxury river cruise brand — built responsive, themeable customer service and digital experiences serving global travelers across regions.',
    highlights: ['Customer service platforms', 'Multi-region delivery', 'Themeable UI', 'Enterprise scale'],
    url: 'https://www.vikingrivercruises.com/',
    logo: vikingLogo,
    logoAlt: 'Viking River Cruises logo',
  },
];

export const systemDesignAreas = [
  {
    title: 'Microservices',
    skills: ['Service decomposition', 'API gateways', 'Event-driven patterns', 'Domain boundaries'],
  },
  {
    title: 'Cloud Architecture',
    skills: ['Azure', 'Azure DevOps', 'Azure Pipelines', 'Cloud-native deployment'],
  },
  {
    title: 'Distributed Systems',
    skills: ['Scalable systems', 'High availability', 'Load balancing', 'Fault tolerance'],
  },
  {
    title: 'RAG & GenAI Systems',
    skills: ['RAG pipelines', 'LLMs', 'Vector databases', 'LangChain', 'Generative AI'],
  },
  {
    title: 'API Design',
    skills: ['REST APIs', 'API versioning', 'Secure APIs', 'Backend engineering', 'Node.js/Express'],
  },
  {
    title: 'Frontend Architecture',
    skills: ['React', 'Next.js', 'TypeScript', 'Performance optimization', 'Scalable component systems'],
  },
];

export const leadershipAreas = [
  {
    title: 'Mentoring & Growth',
    items: [
      'Mentored junior engineers and new hires across Publicis Sapient and Cognizant',
      'Conducted technical interviews and created internal training documentation',
      'Led module teams with ownership of delivery outcomes',
    ],
  },
  {
    title: 'Architecture & Code Quality',
    items: [
      'Led architecture discussions for scalable frontend and AI systems',
      'Conducted code reviews ensuring production-grade quality standards',
      'Drove performance optimization delivering ~20% frontend improvements',
    ],
  },
  {
    title: 'Cross-Functional Leadership',
    items: [
      'Collaborated with Product, Design, SRE, and DevOps on production delivery',
      'Managed stakeholder expectations across enterprise client engagements',
      'Resolved critical production incidents with SRE teams',
    ],
  },
];

export const experience = [
  {
    role: 'Lead Software Engineer',
    company: 'Publicis Sapient',
    client: 'H&M',
    period: 'Aug 2021 – Present',
    location: 'Pune, India',
    highlights: [
      'Built GenAI RAG chatbot reducing CMS effort by 20%',
      'Led PDP experiences serving millions of users (~$240K AUD/mo value)',
      'Delivered ~20% performance and ~10% conversion improvements',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Cognizant Technology Solutions',
    client: 'Discover Bank',
    period: 'Aug 2018 – Aug 2021',
    location: 'Pune, India',
    highlights: [
      'WCAG AA-compliant banking apps with React and Angular',
      'Star Performer — zero major bugs in production delivery',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'FIGMD',
    client: 'Healthcare',
    period: 'Sep 2016 – July 2018',
    location: 'Pune, India',
    highlights: [
      'Migrated legacy healthcare systems to React.js/Node.js',
      'Employee of the Month for MIPS system migration',
    ],
  },
];

export const certifications = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: 'Certified',
  },
];

export const education = [
  {
    degree: 'Generative AI, Machine Learning and Intelligent Systems',
    institution: 'IIIT Madras',
    status: 'Ongoing',
  },
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'CDAC ACTS, Pune, India',
    status: 'Completed',
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'Gujarat Technological University, India',
    status: 'Completed',
  },
];

export const hobbies = [
  { name: 'Swimming', emoji: '🏊', description: 'Endurance, discipline, and mental clarity' },
  { name: 'Badminton', emoji: '🏸', description: 'Competitive spirit and strategic thinking' },
];

export const atsKeywords = [
  'Lead Engineer',
  'Software Architect',
  'Distributed Systems',
  'System Design',
  'Cloud Architecture',
  'Azure',
  'Microservices',
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Performance Optimization',
  'Scalable Systems',
  'RAG',
  'LLM',
  'Generative AI',
  'Vector Databases',
  'Technical Leadership',
  'API Design',
  'CI/CD',
  'Frontend Architecture',
  'Backend Engineering',
];
