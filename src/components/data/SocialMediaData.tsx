import { ICONS_SRC } from '@/constants/icons/iconsSrc';

interface SocialMediaData {
  name: string;
  link: string;

  icon: JSX.Element;
}
export const SocialMediaData: SocialMediaData[] = [
  {
    name: 'telegram',
    link: 'https://t.me/+CBXkAJlsCy83ZDYy',
    icon: (
      <ICONS_SRC.TELEGRAM className="w-[18px] transition-transform duration-300 ease-in-out hover:scale-150" />
    ),
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=61553769122737',
    icon: (
      <ICONS_SRC.FACEBOOK className="w-[18px] transition-transform duration-300 ease-in-out hover:scale-150" />
    ),
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all',
    icon: (
      <ICONS_SRC.LINKEDIN className="w-[18px] transition-transform duration-300 ease-in-out hover:scale-150" />
    ),
  },
];
