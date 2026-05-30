/**
 * Portfolio content — Aditya Singh
 */

export const profile = {
  shortName: 'Aditya',
  fullName: 'Aditya Singh',
  role: 'Full-stack engineer',
  headline: 'Full-stack engineer building AI-powered products.',
  subheadline:
    'I ship React & Node applications — analytics dashboards, APIs, and startup products — with clean architecture and production discipline.',
  heroTags: ['AI systems', 'Full-stack', 'Startup products'],
  heroStats: [
    { value: '10+', label: 'Products shipped' },
    { value: 'MERN · Next.js · TS', label: 'Core stack' },
    { value: 'Full Stack', label: 'Engineer' },
  ],
  location: 'NITK Surathkal',
  email: 'adityasingh13240@gmail.com',
  heroPhoto: '/Me.avif',
  resumeUrl: '/resume.pdf', // Place resume.pdf in /public, or change to your PDF URL
  availability: 'Open to full-time · contract · founding-engineer roles',
}

/** Rotating screenshots in hero engineering visual */
export const heroScreenshots = [
  { label: 'OnQuest · Travel platform', src: '/onquest.png' },
  { label: 'AI Analytics Engine', src: '/analytics.png' },
  { label: 'ProductSense AI', src: '/prod.png' },
  { label: 'Glucometer · Monitoring UI', src: '/gluco.png' },
  { label: 'Smart Resume Analyser', src: '/res.png' },
]

export const aboutPoints = [
  {
    title: 'Full-stack systems',
    icon: 'stack',
    body: 'Design and ship end-to-end product systems — React & Next.js on the frontend, Node.js & Express on the backend, plus Firebase and Appwrite services with auth and authorization built as scalable systems.',
  },
  {
    title: 'AI & analytics',
    icon: 'ai',
    body: 'Build AI-assisted workflows, analytics dashboards, and automation pipelines tied to real product usage, operational metrics, and decision-ready insights for founders and teams.',
  },
  {
    title: 'Ship fast, ship right',
    icon: 'bolt',
    body: 'Thrive in fast-moving startup environments where ownership, iteration speed, and production-ready engineering discipline matter — from prototype to deployed product.',
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
    id: 'fullstack',
    title: 'Full Stack Engineering',
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Firebase', 'Appwrite', 'Auth', 'Authorization', 'REST APIs'],
    description:
      'Built production web applications and backend services — APIs, auth layers, and scalable systems with equal depth across frontend and server-side engineering.',
    emphasis: 'Primary',
    strength: 92,
    projects: '5+ products',
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
  {
    id: 'onquest',
    title: 'OnQuest',
    subtitle: 'Travel-tech platform',
    description:
      'End-to-end travel product for discovery, itineraries, and community engagement. Led full-stack delivery — responsive UI, API design, and growth-focused landing experiences for a startup audience.',
    tech: ['React.js', 'TypeScript', 'Next.js', 'GCP', 'Firebase', 'LLMs', 'System Design'],
    image: '/onquest.png',
    github: null,
    live: 'https://onquest.in/',
    featured: true,
    bentoClass: 'col-span-12 row-span-3 sm:col-span-4 sm:col-start-1 sm:row-start-1',
  },
  {
    id: 'analytics',
    title: 'AI Business Analytics Engine',
    subtitle: 'Insights & automation',
    description:
      'Modular analytics layer that ingests business metrics, surfaces trends with AI-assisted summaries, and exposes actionable dashboards for operators. Built for fast iteration in startup environments.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Express', 'Charts'],
    image: '/analytics.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #1e1b4b 45%, #312e81 100%)',
    github: 'https://github.com/adicoder008/Business-Insights-Engine',
    live: null,
    featured: true,
    bentoClass: 'col-span-12 row-span-3 sm:col-span-4 sm:col-start-5 sm:row-start-1',
  },
  {
    id: 'productsense',
    title: 'ProductSense AI',
    subtitle: 'Browser Extension for e-commerce platforms',
    description:
      'AI platform for product teams — analyzes feedback, usage signals, and feature data to surface priorities and support faster, evidence-backed product decisions.',
    tech: ['React', 'TypeScript', 'Plasmo', 'OpenAI API', 'Analytics'],
    image: '/prod.png',
    imageFallback: 'linear-gradient(135deg, #050816 0%, #312e81 42%, #4c1d95 100%)',
    github: 'https://github.com/adicoder008/ProductSense-AI/blob/main/README.md',
    live: null,
    featured: true,
    bentoClass: 'col-span-12 row-span-3 sm:col-span-4 sm:col-start-9 sm:row-start-1',
  },
  {
    id: 'glucometer',
    title: 'Glucometer Healthcare Monitor',
    subtitle: 'Non-invasive biosensing',
    description:
      'ESP32-based electrochemical sensing pipeline with real-time streaming to a MERN dashboard. Signal processing, live waveforms, and health-trend visualization for continuous glucose monitoring research.',
    tech: ['React', 'TypeScript', 'Express', 'WebSockets', 'ESP32','Hardware integration', 'MongoDB'],
    image: '/gluco.png',
    imageFallback: '/projects/glucometer-dashboard.png',
    github: 'https://github.com/adicoder008/Glucometer-Demo-Website',
    live: 'https://glucometer-demo-website-git-main-adityas-projects-07892ce5.vercel.app/',
    featured: true,
    bentoClass: 'col-span-12 row-span-3 sm:col-span-6 sm:col-start-1 sm:row-start-4',
  },
  {
    id: 'Smart Resume Analyser',
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
    bentoClass: 'col-span-12 row-span-3 sm:col-span-6 sm:col-start-7 sm:row-start-4',
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
