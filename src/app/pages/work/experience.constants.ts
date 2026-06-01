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
    period: '2024 - Present',
    role: 'Associate UI Developer',
    highlights: [
      'Led the design system team and built accessible React components used across products.',
      'Improved Core Web Vitals scores by 40% across the dashboard.',
    ],
    skills: [ 'Angular', 'TypeScript', 'Node.js', 'WCAG Accessibility', 'Internationalization(i18n)', 'HTML', 'CSS', 'Storybook' ],
  },
  {
    companyName: 'BXB Digital (via WileyEdge & Mthree)',
    period: '2021 - 2023',
    role: 'UI Software Developer (Contractual)',
    highlights: [
      'Built and maintained the Next.js documentation platform and interactive examples.',
      'Created developer tooling that reduced onboarding time by 60% for new team members.',
    ],
    skills: [ 'Angular', 'TypeScript', 'Node.JS', 'HTML', 'CSS', 'Storybook' ],
  },
];
