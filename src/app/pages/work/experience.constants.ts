export type ExperienceItem = {
  companyName: string;
  period: string;
  role: string;
  highlights: string[];
  skills: string[];
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    companyName: 'BXB Digital',
    period: '04/2025 - Present',
    role: 'Associate UI Developer (Permanent)',
    highlights: [
      `Engineered deep code optimizations and modernized legacy codebases,
      implementing robust security principles like Content Security Policy (CSP) to ensure secure, high-performance applications.`,
      `Scaled Component library by providing support for Internationalization, WCAG compliance and Theming in Angular Component Library.`,
      `Actively participated in peer code reviews and led domain brainstorming sessions, driving team collaboration,
      knowledge sharing, and high-quality pull request deliveries`
    ],
    skills: [ 'Angular', 'TypeScript', 'Node.js', 'WCAG Accessibility', 'Internationalization(i18n)', 'Theming', 'SCSS',
      'Echarts', 'Mapbox', 'Matomo', 'Code Optimization', 'Cross-browser Compatibility', 'CSP' ],
  },
  {
    companyName: 'BXB Digital (via WileyEdge & Mthree)',
    period: '03/2024 - 03/2025',
    role: 'UI Software Developer (Contractual)',
    highlights: [
      'Created reusable components for Component Library and implemented visual implementation for them using Storybook.',
      `Implemented interactive visualization features (charts, maps), designed their API mockups, and developed
       configuration-driven implementations.`,
      `Spearheaded the feature of exporting a pdf of scrollable view for data-heavy visualization application.`
    ],
    skills: [ 'Angular', 'TypeScript', 'Html', 'SCSS', 'Html2Canvas', 'jsPdf', 'Component Library', 'Echarts', 'Mapbox', 'Storybook' ],
  },
  {
    companyName: 'Wiley Edge',
    period: '05/2023-07/2023',
    role: 'Software Development Trainee',
    highlights: [
      'Completed a 10-week intensive software engineering program in full‑stack development.',
      'Delivered capstone projects showcasing end-to-end application design, architecture, and deployment.',
      `Demonstrated proficiency through weekly technical assessmentsGained hands-on experience with agile workflows,
       code reviews and collaborative development practices.`
    ],
    skills: [ 'HTML', 'CSS', 'Java', 'SQL', 'Angular', 'JavaScript', 'TypeScript', 'Spring Boot', 'Cloud', 'Agile Practices',
      'Financial Markets', 'Data Structures', 'Problem Solving' ],
  }
];
