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
    icon: <ICONS_SRC.TELEGRAM className="fill-current w-full" />,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/BazaTraineeUkraine',
    icon: <ICONS_SRC.FACEBOOK className="fill-current w-full" />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all',
    icon: <ICONS_SRC.LINKEDIN className="fill-current w-full" />,
  },
];
