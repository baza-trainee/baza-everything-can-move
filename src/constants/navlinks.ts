interface NavLink {
  name: string;
  link: string;
}
export type NavLinksArrType = NavLink[];

export const NAV_LINKS: NavLinksArrType = [
  { name: 'Головна', link: '/' },
  { name: 'Команди', link: '/team' },
  { name: 'Проєкти', link: '/projects' },
  { name: 'Досвід', link: '/experience' },
  { name: 'Майбутнє', link: '/future' },
];
