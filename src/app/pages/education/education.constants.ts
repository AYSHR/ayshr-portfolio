import { IconName } from '../../shared/components/icon/icon.constants';

export type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  grade?: string;
  description?: string;
  icon: IconName;
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Arya Institute of Engineering & Technology, Jaipur, Rajasthan',
    period: '2019 — 2023',
    degree: 'Bachelor of Technology — Information Technology',
    grade: 'CGPA: 9.55/10',
    description: 'Ranked 2nd for Academic Result in Rajasthan Technical University, Kota in IT domain.',
    icon: 'book',
  },
  {
    institution: 'Kendriya Vidyalaya Number 4, Jaipur, Rajasthan',
    period: '2019',
    degree: 'Intermediate',
    grade: 'Percentage: 84.4%',
    icon: 'palette',
  },
  {
    institution: 'Kendriya Vidyalaya Number 4, Jaipur, Rajasthan',
    period: '2016',
    degree: 'Matriculation',
    grade: 'CGPA: 9.6/10',
    icon: 'badge',
  },
];
