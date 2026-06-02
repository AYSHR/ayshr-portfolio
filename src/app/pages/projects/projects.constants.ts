import { IconName } from '../../shared/components/icon/icon.constants';

export type ProjectCategory =
  | 'Open Source'
  | 'Library'
  | 'Tool'
  | 'Client Work'
  | 'Project'
  | 'Article';

export type ProjectFilter = 'All' | ProjectCategory;

export type ProjectItem = {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  icon: IconName;
  link?: string;
};

export const PROJECT_FILTERS: ProjectFilter[] = [
  'All',
  'Project',
  'Article',
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Rendering Strategies in Angular',
    description:
      'A comprehensive documentation explaining different rendering strategies in Angular.',
    category: 'Article',
    link: 'https://medium.com/@AYSHR_M/modern-rendering-strategies-in-angular-from-csr-to-hybrid-29baa8fe652c',
    tags: ['Angular', 'SSR', 'CSR', 'Hydration', 'SSG'],
    icon: 'badge',
  },
  {
    title: 'Voyage-vault',
    description:
      'An AI assistant travel itenerary planner which gives you an easy travel guide based on preference.',
    category: 'Project',
    link: 'https://github.com/AYSHR/voyage-vault',
    tags: ['Angular', 'TypeScript', 'SCSS', 'Gemini 2.5 Flash Lite model', 'Google Maps API', 'Node.js'],
    icon: 'book',
  },
  {
    title: 'Relief-mate',
    link: 'https://github.com/AYSHR/relief-mate',
    description:
      'A SPA and PWA angular application, which provides an option to inform any emergency on the app and the Volunteer can access to help.',
    category: 'Project',
    tags: ['Angular', 'Typescript', 'SCSS', 'Node.js', 'PWA', 'SPA', 'Authentication', 'Mapbox'],
    icon: 'star',
  },
  {
    title: 'GEO: Generative Engine Optimization',
    link: 'https://medium.com/@AYSHR_M/from-google-search-to-ai-answers-the-growing-importance-of-geo-25d352e12065',
    description:
      'An article discussing the increasing significance of Generative Engine Optimization (GEO) in the evolving landscape of search and AI-driven content discovery.',
    category: 'Article',
    tags: ['Angular', 'GEO', 'SEO', 'AI search', 'Content optimization', 'Digital Marketing'],
    icon: 'star',
  }
];

