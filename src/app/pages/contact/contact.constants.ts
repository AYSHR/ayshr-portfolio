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
    icon: 'star',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/AYSHR',
    icon: 'book',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@ayushreemishra',
    icon: 'palette',
  },
  {
    label: 'Email',
    url: 'mailto:hello@ayushreemishra.com',
    icon: 'badge',
  },
];

