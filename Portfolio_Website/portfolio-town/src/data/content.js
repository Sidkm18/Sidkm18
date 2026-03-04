export const PROFILE = {
  name: 'Sidharth Kamath',
  roles: [
    'Computer Engineer',
    'Cybersecurity Enthusiast',
    'AR/VR Developer',
    'CTF Solver',
    'Creative Builder',
  ],
  tagline: 'Building secure systems & immersive experiences, one brick at a time',
  location: 'Mumbai, India',
  currentPursuit: 'Honours in Cyber Security & Forensics',
  about:
    'Computer Engineering student with a passion for cybersecurity, competitive programming, and game development. I build things that matter — from AR chemistry apps to VS Code extensions — and break things to understand them better through CTFs.',
  stats: [
    { value: '9.65', label: 'CGPA' },
    { value: 'Top 20%', label: 'CTF Rank' },
    { value: '10+', label: 'Projects' },
  ],
  socials: [
    { platform: 'GitHub', url: 'https://github.com/sidkm18', icon: 'FaGithub' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/Sidkm18', icon: 'FaLinkedinIn' },
    { platform: 'Codeforces', url: 'https://codeforces.com/profile/sidkm18', icon: 'SiCodeforces' },
    { platform: 'CodeChef', url: 'https://www.codechef.com/users/sidkm18', icon: 'SiCodechef' },
    { platform: 'LeetCode', url: 'https://leetcode.com/sidkm18', icon: 'SiLeetcode' },
    { platform: 'HackerRank', url: 'https://www.hackerrank.com/sidkm18', icon: 'FaHackerrank' },
  ],
};

export const EXPERIENCE = [
  {
    role: 'Network & Security Intern',
    company: 'Universal Sompo General Insurance',
    period: 'December 2025 – January 2026',
    tasks: [
      'Network Monitoring',
      'Threat Detection',
      'Firewall & Access Control',
      'SOC Operations & EDR/XDR',
    ],
    highlights: [
      'Monitored SIEM dashboards & security events',
      'Identified malware indicators & suspicious activity',
      'Managed endpoint security under SOC supervision',
    ],
  },
  {
    role: 'AR/VR Developer Intern',
    company: 'SwDC, KJSCE',
    period: 'May 2025 – June 2025',
    tasks: [
      'Immersive Experiences',
      '3D Development',
      'Cross-platform AR',
    ],
    highlights: [
      'Built AR chemistry simulations in Unity',
      'Developed VR therapeutic environment in UE5',
      'Delivered 4 standalone iOS/Android apps',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'leethelp',
    title: 'LeetHelp',
    description: 'VS Code extension with AI-powered LeetCode workflow, hints, and solutions.',
    techStack: ['TypeScript', 'VS Code API', 'Node.js', 'AI'],
    features: [
      'Seamless LeetCode integration inside VS Code',
      'AI-powered solution hints & explanations',
      'Progress tracking dashboard',
      'Direct code submission from editor',
    ],
    links: { github: 'https://github.com/sidkm18' },
  },
  {
    id: 'hearmeout',
    title: 'hearMeOut',
    description: 'Secure mental health platform connecting students with counselors.',
    techStack: ['Firebase', 'React', 'Node.js', 'AI/ML'],
    features: [
      'End-to-end encrypted messaging',
      'Anonymous support options',
      'AI-powered mood tracking',
      'Counselor matching algorithm',
    ],
    links: { github: 'https://github.com/sidkm18' },
  },
  {
    id: 'atomic',
    title: 'Atomic & Compounding QR',
    description: 'AR app visualizing 3D molecular structures via QR code scanning.',
    techStack: ['Unity', 'AR Foundation', 'C#', 'Vuforia'],
    features: [
      '3D molecular visualization in AR',
      'Interactive chemical bonding demos',
      'QR code triggered AR experiences',
      'Educational quizzes & assessments',
    ],
    links: { github: 'https://github.com/sidkm18' },
  },
  {
    id: 'chatbotmotivator',
    title: 'AI Friend',
    description: 'Local AI chatbot companion with persistent memory, vector embeddings, and customizable personas.',
    techStack: ['React', 'Node.js', 'SQLite', 'Transformers.js'],
    features: [
      'Multi-persona support (Hype, Coach, Therapist)',
      'Semantic memory with vector embeddings',
      'XP gamification & mood-based interactions',
      'Fully offline with local LLMs (Ollama, GPT4All)',
    ],
    links: { github: 'https://github.com/sidkm18' },
  },
  {
    id: 'productivemuch',
    title: 'ProductiveMuch',
    description: 'AI-powered desktop productivity app with Groq-based schedule optimization and coding platform tracking.',
    techStack: ['React', 'TypeScript', 'Tauri', 'Groq AI'],
    features: [
      'AI schedule generation with Groq API',
      'Multi-platform CP tracking (LeetCode, Codeforces, CodeChef)',
      'Native desktop app via Tauri',
      'Smart state management with Zustand',
    ],
    links: { github: 'https://github.com/Sidkm18/ProductiveMuch' },
  },
  {
    id: 'yourdailyflow',
    title: 'Your Daily Flow',
    description: 'Desktop dashboard for managing academics, emails, coding activities, and calendar events.',
    techStack: ['React', 'TypeScript', 'Tauri', 'Supabase'],
    features: [
      'Unified academics, email & calendar dashboard',
      'Native desktop app with deep-linking',
      'Supabase auth with protected routes',
      'Drag-and-drop UI with calendar visualization',
    ],
    links: { github: 'https://github.com/Sidkm18/your-daily-flow' },
  },
  {
    id: 'lmsandmail',
    title: 'LMS & Mail Hub',
    description: 'Self-hosted dashboard unifying Gmail and Google Classroom with AI-powered email classification.',
    techStack: ['Node.js', 'Express', 'Google APIs', 'Docker'],
    features: [
      'Unified Gmail + Google Classroom interface',
      'AI-powered email classification & prioritization',
      'Encrypted token storage (AES-256-GCM)',
      'Docker deployment with HTTPS support',
    ],
    links: { github: 'https://github.com/Sidkm18/LMSandMail' },
  },
];

export const SKILLS = {
  security: {
    title: 'Security',
    level: 'Advanced',
    items: ['SIEM Concepts', 'Network Monitoring', 'EDR/XDR', 'CTF Solving'],
  },
  languages: {
    title: 'Languages',
    level: 'Proficient',
    items: ['Java', 'C++', 'Python', 'C'],
  },
  frameworks: {
    title: 'Frameworks',
    level: 'Intermediate',
    items: ['Unity', 'Unreal Engine 5'],
  },
  tools: {
    title: 'Dev Tools',
    level: 'Expert',
    items: ['Git', 'VS Code', 'IntelliJ IDEA'],
  },
  soft: {
    title: 'Soft Skills',
    level: 'Excellent',
    items: ['Teamwork', 'Communication', 'English', 'Hindi'],
  },
};

export const CERTIFICATIONS = [
  {
    issuer: 'ISC\u00B2',
    title: 'Certified in Cybersecurity (CC)',
    date: 'December 2025',
    skills: ['Network Security', 'Threat Detection', 'Risk Management', 'Access Controls'],
  },
  {
    issuer: 'Google',
    title: 'Cybersecurity Professional',
    date: '2025',
    skills: ['Security Operations', 'Linux', 'Python', 'SIEM Tools'],
  },
  {
    issuer: 'Cisco',
    title: 'SOC Operations Fundamentals',
    date: '2025',
    skills: ['SOC Procedures', 'Incident Response', 'Threat Analysis'],
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'KJSCE CTF 2.0',
    subtitle: 'Top 20%',
    details: 'Steganography, Cryptography, Reverse Engineering',
  },
  {
    title: 'Network Ethical Hacking',
    subtitle: 'Cisco Networking Academy',
    details: 'Sniffing, Spoofing, Vulnerability Scanning',
  },
];

export const HOBBIES = {
  currentlyBuilding: [
    'Enhancing LeetHelp extension',
    'Exploring new CTF challenges',
    'Building LEGO MOCs',
    'Learning Rust security tools',
    'Creating VR experiences',
    'Writing security automation scripts',
  ],
  interestedIn: [
    'Cybersecurity opportunities',
    'AR/VR projects',
    'Collaborative hackathons',
    'LEGO & tech discussions',
  ],
};
