import { IconName } from '../../shared/components/icon/icon.constants';

export type ContactLink = {
  label: string;
  url: string;
  icon: IconName;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/ayushree-mishra-ayshr',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/AYSHR',
    icon: 'github',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@AYSHR_M',
    icon: 'medium',
  },
  {
    label: 'Email',
    url: 'mailto:missamishra@gmail.com',
    icon: 'mail',
  },
];

