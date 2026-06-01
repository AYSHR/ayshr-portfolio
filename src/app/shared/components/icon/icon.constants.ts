export const ICON_PATHS = {
  hamburger: 'M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z',
  arrow_up: 'M12 4.5 4.5 12h4.75v7.5h5.5V12h4.75L12 4.5z',
  star: 'M12 3.25 14.55 8.42 20.25 9.25 16.12 13.28 17.1 18.95 12 16.26 6.9 18.95 7.88 13.28 3.75 9.25 9.45 8.42 12 3.25z',
  book: 'M6.25 4.5A2.75 2.75 0 0 1 9 1.75h8.75v17.75H9A2.75 2.75 0 0 0 6.25 22H4.5V7.25A2.75 2.75 0 0 1 6.25 4.5zM9 3.5a1 1 0 0 0-1 1v13.8a4.4 4.4 0 0 1 1-.12h7V3.5H9z',
} as const;

export type IconName = keyof typeof ICON_PATHS;

