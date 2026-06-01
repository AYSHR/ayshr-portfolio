import { IconName } from '../../shared/components/icon/icon.constants';

export type AchievementItem = {
  year: string;
  organization: string;
  description?: string;
  category: string;
  icon: IconName;
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2024',
    organization: 'Speaker - React Conf',
    description:
      'Delivered a featured talk on building accessible animation systems at React Conf.',
    category: 'Speaking',
    icon: 'star',
  },
  {
    year: '2023',
    organization: 'Open Source Contributor - Angular Community',
    description:
      'Contributed multiple pull requests and documentation improvements to Angular ecosystem projects.',
    category: 'Recognition',
    icon: 'badge',
  },
  {
    year: '2022',
    organization: 'Hackathon Winner - CodeSprint Jaipur',
    description:
      'Won first place for building an accessibility-focused web app prototype within 24 hours.',
    category: 'Award',
    icon: 'book',
  },
  {
    year: '2021',
    organization: 'Technical Blogger - Frontend Chronicles',
    description:
      'Published beginner-friendly frontend engineering articles covering Angular, TypeScript, and UI patterns.',
    category: 'Publishing',
    icon: 'palette',
  },
];
