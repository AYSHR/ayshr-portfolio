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
    description:
      'The Wiley Edge Software Developer badge is for future-ready talent, selected based on a 4-step rigorous selection process, trained extensively in technical competencies relevant for the job role, as well as business and professional skills required to succeed in the job role. The Alumni have successfully completed a comprehensive training program designed by Wiley Edge, based on the Wiley Edge Academy\'s global learning model for preparing the next generation of Tech talent.',
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
    description:
      'Demonstrated the ability to use SAS Visual Analytics to analyze data and design reports that provide concise, interactive, and relevant data summaries and are skilled in such areas as adding and manipulating data items within SAS Visual Analytics, analyzing data, and designing reports using objects in SAS Visual Analytics',
    category: 'Analytics',
    link: 'https://www.credly.com/badges/887f90e1-d963-426d-87b8-a3e535193454',
    badgeImageSrc: '/images/achievements/sas-2.png',
    badgeImageAlt: 'SAS Certified Specialist badge',
    icon: 'palette',
  },
];
