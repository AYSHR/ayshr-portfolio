import { IconName } from '../../shared/components/icon/icon.constants';

export type ProjectCategory =
  | 'Open Source'
  | 'Library'
  | 'Tool'
  | 'Client Work'
  | 'Side Project'
  | 'Experiment';

export type ProjectFilter = 'All' | ProjectCategory;

export type ProjectItem = {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  icon: IconName;
};

export const PROJECT_FILTERS: ProjectFilter[] = [
  'All',
  'Open Source',
  'Library',
  'Tool',
  'Client Work',
  'Side Project',
  'Experiment',
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Design System - Aurora UI',
    description:
      'A comprehensive component library with built-in accessibility, theming, and documentation.',
    category: 'Open Source',
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
    icon: 'badge',
  },
  {
    title: 'Motion - Animation Toolkit',
    description:
      'A lightweight animation library for React that helps build smooth and sequenced transitions.',
    category: 'Library',
    tags: ['TypeScript', 'Web Animations API', 'React'],
    icon: 'book',
  },
  {
    title: 'AccessLint - WCAG Checker',
    description:
      'Automated accessibility checks for CI/CD pipelines with focused WCAG reporting.',
    category: 'Tool',
    tags: ['Node.js', 'Puppeteer', 'Axe-core', 'React'],
    icon: 'star',
  },
  {
    title: 'Campus Portal Revamp',
    description:
      'Delivered an end-to-end portal redesign for a university client with modular architecture.',
    category: 'Client Work',
    tags: ['Angular', 'RxJS', 'SCSS'],
    icon: 'palette',
  },
  {
    title: 'Portfolio CMS',
    description:
      'Built a side project CMS to manage personal projects, blogs, and media with markdown support.',
    category: 'Side Project',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    icon: 'badge',
  },
  {
    title: 'Interaction Sandbox',
    description:
      'An experimental playground to test motion patterns and micro-interactions for UI components.',
    category: 'Experiment',
    tags: ['Framer Motion', 'TypeScript'],
    icon: 'palette',
  },
];

