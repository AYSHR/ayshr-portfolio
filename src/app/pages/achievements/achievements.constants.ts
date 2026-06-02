import { IconName } from '../../shared/components/icon/icon.constants';

export type AchievementItem = {
  year: string;
  organization: string;
  description?: string;
  category: string;
  link?: string;
  badgeImageSrc?: string;
  badgeImageAlt?: string;
  icon: IconName;
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2023',
    organization: 'Software Development, issued by mthree Academy',
    link: 'https://www.credly.com/badges/71343f19-4d94-4d76-8e6a-451f9abc4745',
    description: 'Awarded with the badge after passing a rigorous 4-step selection and completing intensive technical, business, and professional training.\n' +
      'This program (Wiley Edge Academy) prepared me with job-ready skills and practical experience to excel in software roles.',
    category: 'Software Development',
    badgeImageSrc: '/images/achievements/sd-1.png',
    badgeImageAlt: 'Software Development badge from mthree Academy',
    icon: 'star',
  },
  {
    year: '2023',
    organization: 'Software Development, authorized by Columbia School of Engineering',
    link: 'https://www.credly.com/badges/799399df-6d96-448f-bd6c-a0552ccfc43c',
    description:
      'This certificate recognizes mastery of the fundamentals of developing a full-stack web application using Java, the Spring Framework, and SQL',
    category: 'Software Development',
    badgeImageSrc: '/images/achievements/sd-2.png',
    badgeImageAlt: 'Software Development badge from Columbia School of Engineering',
    icon: 'badge',
  },
  {
    year: '2022',
    organization: 'SAS Visual Analytics, issued by SAS',
    link: 'https://www.credly.com/badges/c0679e7d-ddf8-40fc-9da6-cb893c1194ab',
    description:
      'This course describes data preparation (including advanced features), data discovery, analytics, and report creation in SAS Visual Analytics.',
    category: 'Analytics',
    badgeImageSrc: '/images/achievements/sas-1.png',
    badgeImageAlt: 'SAS Visual Analytics badge',
    icon: 'book',
  },
  {
    year: '2022',
    organization: 'SAS Certified Specialist, issued by SAS',
    description: 'Demonstred ability to use SAS Visual Analytics to analyze data and design concise, interactive reports, including data item manipulation and report object usage.',
    category: 'Analytics',
    link: 'https://www.credly.com/badges/887f90e1-d963-426d-87b8-a3e535193454',
    badgeImageSrc: '/images/achievements/sas-2.png',
    badgeImageAlt: 'SAS Certified Specialist badge',
    icon: 'palette',
  },
];
