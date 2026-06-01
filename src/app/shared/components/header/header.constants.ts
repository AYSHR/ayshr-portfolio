export type HeaderNavLink = {
  label: string;
  fragment: string;
};

export const NAV_LINKS: HeaderNavLink[] = [
  { label: 'Work', fragment: 'experience' },
  { label: 'Education', fragment: 'education' },
  { label: 'Achievements', fragment: 'achievements' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Contact', fragment: 'contact' },
];
