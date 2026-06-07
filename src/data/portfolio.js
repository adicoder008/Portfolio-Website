/**
 * Portfolio content — Aditya Singh
 */

export const profile = {
  shortName: 'Aditya',
  fullName: 'Aditya Singh',
  role: 'Software Engineer',
  headline: 'Software engineer building distributed systems and AI-powered products.',
  subheadline:
    'I design and ship backend services, concurrent pipelines, real-time platforms, and production systems — from event-driven architectures and observability tooling to full product delivery.',
  heroTags: ['Distributed systems', 'Backend engineering', 'Systems design'],
  heroStats: [
    { value: '10+', label: 'Products shipped' },
    { value: 'C++ · Node · TS', label: 'Core languages' },
    { value: 'SDE', label: 'Engineer' },
  ],
  location: 'NITK Surathkal',
  email: 'adityasingh13240@gmail.com',
  heroPhoto: '/Me.avif',
  resumeUrl: '/resume.pdf', // Place resume.pdf in /public, or change to your PDF URL
  availability: 'Open to full-time · contract · founding-engineer roles',
}

/** Rotating screenshots in hero engineering visual */
export const heroScreenshots = [
  { label: 'NetPulse · Service monitoring', src: '/netpulse.png' },
  { label: 'Sentinel · Log pipeline', src: '/sentinel.png' },
  { label: 'OnQuest · Travel platform', src: '/onquest.png' },
  { label: 'AI Analytics Engine', src: '/analytics.png' },
  { label: 'ProductSense AI', src: '/prod.png' },
  { label: 'Glucometer · Monitoring UI', src: '/gluco.png' },
  { label: 'Smart Resume Analyser', src: '/res.png' },
]

export const aboutPoints = [
  {
    title: 'Backend & distributed systems',
    icon: 'stack',
    body: 'Design event-driven services, concurrent pipelines, and scalable APIs — Node.js & Fastify backends, Redis Streams, PostgreSQL, WebSockets, and production-grade system architecture.',
  },
  {
    title: 'AI & analytics',
    icon: 'ai',
    body: 'Build AI-assisted workflows, analytics dashboards, and automation pipelines tied to real product usage, operational metrics, and decision-ready insights for founders and teams.',
  },
  {
    title: 'Ship fast, ship right',
    icon: 'bolt',
    body: 'Thrive in fast-moving environments where ownership, iteration speed, and production-ready engineering discipline matter — from systems prototype to deployed product.',
  },
]

// export const techStack = [
//   { name: 'React', category: 'Frontend' },
//   { name: 'TypeScript', category: 'Language' },
//   { name: 'Tailwind CSS', category: 'Styling' },
//   { name: 'Node.js', category: 'Backend' },
//   { name: 'Express', category: 'Backend' },
//   { name: 'MongoDB', category: 'Database' },
//   { name: 'REST APIs', category: 'Integration' },
//   { name: 'WebSockets', category: 'Realtime' },
//   { name: 'AI integrations', category: 'AI / ML' },
//   { name: 'Vite', category: 'Tooling' },
//   { name: 'ESP32 / IoT', category: 'Embedded' },
//   { name: 'Vercel', category: 'Deploy' },
// ]

export const engineeringCapabilities = [
  {
    id: 'backend',
    title: 'Backend & Systems Engineering',
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'C++17', 'REST APIs', 'WebSockets'],
    description:
      'Built distributed services, concurrent pipelines, and production backends — event-driven architectures, stream processing, and scalable API design with equal depth in systems and application layers.',
    emphasis: 'Primary',
    strength: 94,
    projects: '7+ systems',
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    skills: ['OpenAI', 'Gemini', 'Prompt Engineering', 'Workflows', 'Integrations'],
    description: 'Built AI-powered recommendation, automation, and product intelligence systems.',
    emphasis: 'Core',
    strength: 88,
    projects: '4+ AI systems',
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    skills: ['SQL', 'Pandas', 'Power BI', 'Python', 'Dashboards'],
    description: 'Built analytics pipelines, dashboards, and business intelligence workflows.',
    emphasis: 'Applied',
    strength: 80,
    projects: '3+ pipelines',
  },
  {
    id: 'embedded',
    title: 'Embedded & Real-Time Systems',
    skills: ['ESP32', 'Sensors', 'WebSockets', 'IoT', 'Signal processing'],
    description: 'Built real-time monitoring, sensor pipelines, and hardware-software integrations.',
    emphasis: 'Research',
    strength: 75,
    projects: '2+ systems',
  },
]


export const featuredProjects = [
  /* Tier 1 — Hero */
  {
    id: 'netpulse',
    title: 'NetPulse AI',
    subtitle: 'Distributed service monitoring',
    description:
      'Event-driven health monitoring with Redis Streams, incident automation, multi-region workers, and real-time WebSocket dashboards.',
    tech: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis Streams', 'WebSockets', 'React', 'Docker'],
    image: '/netpulse.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #0f172a 45%, #1e3a5f 100%)',
    github: 'https://github.com/adicoder008/NetPulse---Full-Stack-Network-Monitor',
    live: null,
    featured: true,
    tier: 'hero',
    gridClass: 'grid-netpulse',
  },
  /* Tier 2 — Major */
  {
    id: 'sentinel',
    title: 'Sentinel Log Engine',
    subtitle: 'Multithreaded log analyzer & alerts',
    description:
      'C++17 concurrent pipeline — ingestion, parsing, enrichment, rule evaluation, and alerting across six worker stages with 1M-log benchmarks.',
    tech: ['C++17', 'ThreadPool', 'Concurrency', 'CMake', 'GoogleTest', 'Systems design'],
    image: '/sentinel.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #1a1a2e 45%, #16213e 100%)',
    github: 'https://github.com/adicoder008/Multi-threaded-Log-Processing-Alerting-Engine',
    live: null,
    featured: true,
    tier: 'major',
    gridClass: 'grid-sentinel',
  },
  {
    id: 'onquest',
    title: 'OnQuest',
    subtitle: 'Travel-tech platform',
    description:
      'End-to-end travel product for discovery, itineraries, and community engagement — responsive UI, API design, and growth-focused landing experiences.',
    tech: ['React.js', 'TypeScript', 'Next.js', 'GCP', 'Firebase', 'LLMs', 'System Design'],
    image: '/onquest.png',
    github: null,
    live: 'https://onquest.in/',
    featured: true,
    tier: 'major',
    gridClass: 'grid-onquest',
  },
  /* Tier 3 — Supporting */
  {
    id: 'productsense',
    title: 'ProductSense AI',
    subtitle: 'Browser extension · e-commerce',
    description:
      'AI platform for product teams — analyzes feedback, usage signals, and feature data to surface priorities and evidence-backed decisions.',
    tech: ['React', 'TypeScript', 'Plasmo', 'OpenAI API', 'Analytics'],
    image: '/prod.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #312e81 42%, #4c1d95 100%)',
    github: 'https://github.com/adicoder008/ProductSense-AI/blob/main/README.md',
    live: null,
    featured: true,
    tier: 'standard',
    gridClass: 'grid-productsense',
  },
  {
    id: 'glucometer',
    title: 'Glucometer Healthcare Monitor',
    subtitle: 'Non-invasive biosensing',
    description:
      'ESP32 electrochemical sensing with real-time streaming to a MERN dashboard — signal processing, live waveforms, and health-trend visualization.',
    tech: ['React', 'TypeScript', 'Express', 'WebSockets', 'ESP32', 'MongoDB'],
    image: '/gluco.png',
    imageFallback: '/projects/glucometer-dashboard.png',
    github: 'https://github.com/adicoder008/Glucometer-Demo-Website',
    live: 'https://glucometer-demo-website-git-main-adityas-projects-07892ce5.vercel.app/',
    featured: true,
    tier: 'standard',
    gridClass: 'grid-glucometer',
  },
  {
    id: 'resume-analyser',
    title: 'Smart Resume Analyser',
    subtitle: 'AI-powered resume analysis',
    description:
      'Operations dashboard with permissions, audit trails, and live metrics — replacing spreadsheet workflows for a distributed team.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'MongoDB'],
    image: '/res.png',
    imageFallback: 'linear-gradient(145deg, #050816 0%, #1e1b4b 42%, #312e81 100%)',
    github: 'https://github.com/adicoder008/NEWW',
    live: 'https://neww-git-master-adityas-projects-07892ce5.vercel.app/',
    featured: true,
    tier: 'standard',
    gridClass: 'grid-resume-analyser',
  },
  /* Tier 4 — Least prominent (last in grid) */
  {
    id: 'analytics',
    title: 'AI Business Analytics Engine',
    subtitle: 'Insights & automation',
    description:
      'Modular analytics layer that ingests business metrics, surfaces AI-assisted trends, and exposes actionable dashboards for operators.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Express', 'Charts'],
    image: '/analytics.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #1e1b4b 45%, #312e81 100%)',
    github: 'https://github.com/adicoder008/Business-Insights-Engine',
    live: null,
    featured: true,
    tier: 'minor',
    gridClass: 'grid-analytics',
  },
]

export const experience = [
  {
    period: 'March 2025 — Present',
    title: 'Lead Developer · OnQuest',
    org: 'Travel-tech startup',
    highlight: true,
    bullets: [
      'Built production frontend systems, APIs, and AI-assisted product features for a consumer travel platform.',
      'Worked directly with founders on rapid shipping, analytics workflows, and scalable React architecture.',
    ],
  },
  {
    period: '2024 — Present',
    title: 'Full-stack developer · product & client systems',
    org: 'Independent engineering work',
    highlight: false,
    bullets: [
      'Built dashboards, internal tools, and scalable full-stack applications using React, TypeScript, Node.js, and MongoDB.',
      'Developed AI-integrated workflows, real-time systems, and production-ready backend architectures.',
    ],
  },
  {
    period: '2025 — 2026',
    title: 'Non-invasive glucometer & IoT systems',
    org: 'Research · NITK',
    highlight: false,
    bullets: [
      'Developed a non-invasive glucose monitoring prototype integrating ESP32, sensors, and live monitoring systems.',
      'Built real-time dashboards and healthcare-oriented data visualization pipelines for sensor analytics.',
    ],
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-singh-216122308/' },
  { label: 'Github', href: 'https://github.com/adicoder008' },
  { label: 'Leetcode', href: 'https://leetcode.com/u/unicoder_008/' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
