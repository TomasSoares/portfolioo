export interface TechItem {
  name: string
  /** Full icon class string: Devicon (`devicon-*`) or Phosphor (`ph ph-*`). */
  icon: string
  /** Brand colour of the glyph. */
  hex: string
}

export interface Role {
  period: string
  kind: string
  title: string
  company: string
  summary: string
}

export interface Project {
  name: string
  blurb: string
  href: string
  /** Where `href` points: the GitHub repo (default) or a live site. */
  linkKind?: 'github' | 'site'
  stack: TechItem[]
  /** Optional 16:9 screenshot, imported from src/assets/. */
  image?: string
}

export interface StackGroup {
  label: string
  items: TechItem[]
}

export const links = {
  email: 'mailto:soarestomas2003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-soares-98bb7a338/',
  github: 'https://github.com/TomasSoares',
  // Served from public/assets/cv/, same path as the previous site.
  cv: '/assets/cv/TomasSoaresEN.pdf',
} as const

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
] as const

const tech = {
  javascript: { name: 'JavaScript', icon: 'devicon-javascript-plain', hex: '#e3c604' },
  typescript: { name: 'TypeScript', icon: 'devicon-typescript-plain', hex: '#3178c6' },
  php: { name: 'PHP', icon: 'devicon-php-plain', hex: '#8892bf' },
  python: { name: 'Python', icon: 'devicon-python-plain', hex: '#4b8bbe' },
  java: { name: 'Java', icon: 'devicon-java-plain', hex: '#f89820' },
  csharp: { name: 'C#', icon: 'devicon-csharp-plain', hex: '#a35b9e' },
  cpp: { name: 'C++', icon: 'devicon-cplusplus-plain', hex: '#3f7fbf' },
  c: { name: 'C', icon: 'devicon-c-plain', hex: '#659ad2' },
  r: { name: 'R', icon: 'devicon-r-plain', hex: '#276dc3' },
  react: { name: 'React', icon: 'devicon-react-original', hex: '#3fb9dd' },
  nextjs: { name: 'Next.js', icon: 'devicon-nextjs-plain', hex: '#c9c9c9' },
  vue: { name: 'Vue', icon: 'devicon-vuejs-plain', hex: '#41b883' },
  html: { name: 'HTML', icon: 'devicon-html5-plain', hex: '#e34f26' },
  css: { name: 'CSS', icon: 'devicon-css3-plain', hex: '#3b7ef5' },
  laravel: { name: 'Laravel', icon: 'devicon-laravel-plain', hex: '#ff2d20' },
  rest: { name: 'REST APIs', icon: 'ph ph-plugs-connected', hex: '#8a8a8a' },
  sql: { name: 'SQL', icon: 'devicon-mysql-plain', hex: '#0e8fa8' },
  sqlServer: { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', hex: '#cc2927' },
  git: { name: 'Git', icon: 'devicon-git-plain', hex: '#f05032' },
  jira: { name: 'Jira', icon: 'devicon-jira-plain', hex: '#2684ff' },
  electron: { name: 'Electron', icon: 'devicon-electron-original', hex: '#4a9dd6' },
  nodejs: { name: 'Node.js', icon: 'devicon-nodejs-plain', hex: '#5fa04e' },
  markdown: { name: 'Markdown', icon: 'devicon-markdown-original', hex: '#c9c9c9' },
  // Devicon's Nginx glyph is the full wordmark, unreadable at pill size.
  nginx: { name: 'Nginx', icon: 'ph ph-hard-drives', hex: '#009639' },
  githubActions: { name: 'GitHub Actions', icon: 'devicon-githubactions-plain', hex: '#2088ff' },
  vite: { name: 'Vite', icon: 'devicon-vitejs-plain', hex: '#9f7aea' },
  vercel: { name: 'Vercel', icon: 'devicon-vercel-original', hex: '#c9c9c9' },
} satisfies Record<string, TechItem>

export const roles: Role[] = [
  {
    period: 'Jan 2026 to present',
    kind: 'Full-time, remote',
    title: 'Web Developer Trainee',
    company: 'Innovation Makers, Lisbon, Portugal',
    summary:
      'Building and maintaining web features day to day, front end through to the REST APIs behind them, remotely, on a shared codebase.',
  },
  {
    period: 'May to Jul 2022',
    kind: 'Erasmus internship, Barcelona',
    title: 'Intern',
    company: 'Advanced Nanotechnologies',
    summary:
      "An Erasmus placement applying HTML and CSS on the company's web work, and my first real exposure to React.",
  },
  {
    period: 'Apr to May 2022',
    kind: 'Internship, hybrid',
    title: 'Intern',
    company: 'MA Servicos, Pombal, Leiria',
    summary: 'Developed a website for the company in HTML and CSS.',
  },
  {
    period: 'Jun to Jul 2021',
    kind: 'Internship, on-site',
    title: 'Intern',
    company: 'Comsoftweb, Pombal, Leiria',
    summary:
      'Worked with SQL and databases, including Microsoft SQL Server, and picked up the Eticadata business management software.',
  },
]

export const stackGroups: StackGroup[] = [
  {
    label: 'Languages',
    items: [
      tech.javascript,
      tech.typescript,
      tech.php,
      tech.python,
      tech.java,
      tech.csharp,
      tech.cpp,
      tech.c,
      tech.r,
    ],
  },
  {
    label: 'Interfaces',
    items: [tech.react, tech.nextjs, tech.vue, tech.html, tech.css],
  },
  {
    label: 'Server & data',
    items: [tech.laravel, tech.rest, tech.sql, tech.sqlServer, tech.nginx, tech.vercel],
  },
  {
    label: 'Workflow',
    items: [tech.git, tech.githubActions, tech.vite, tech.markdown, tech.jira],
  },
]

export const projects: Project[] = [
  {
    name: 'Torneio Outeiro',
    blurb:
      'A tournament manager for a local football championship: seven teams in a single round-robin league, with live standings, fixtures by matchday, score entry and an admin area for teams and players.',
    href: 'https://github.com/TomasSoares/torneio-outeiro',
    stack: [tech.nextjs, tech.typescript, tech.react, tech.sql],
  },
  {
    name: 'usefuldocs',
    blurb:
      'Short, step-by-step guides in English and Portuguese, written in my Obsidian vault and built with MkDocs. Every push publishes them automatically to my own VPS through a GitHub Action.',
    href: 'https://docs.tomassoares.dev',
    linkKind: 'site',
    stack: [tech.python, tech.markdown, tech.nginx, tech.githubActions],
  },
  {
    name: 'This portfolio',
    blurb:
      "The site you're reading: a single-page React and TypeScript build with dark and light themes and no UI libraries, deployed on Vercel. My own playground for layout, motion and the details I care about.",
    href: 'https://github.com/TomasSoares/portfolioo',
    stack: [tech.react, tech.typescript, tech.vite, tech.css, tech.vercel],
  },
]
