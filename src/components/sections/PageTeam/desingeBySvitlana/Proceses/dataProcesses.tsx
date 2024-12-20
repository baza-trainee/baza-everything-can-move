// import { cn } from '@/lib/utils';
import clsx from 'clsx';
// import Image from 'next/image';

export const messagesDiscord = [
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/1.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/2.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/3.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/4.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/5.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/6.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/7.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/8.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/9.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/10.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/11.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/12.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/13.webp' },
  { url: '/assets/images/PageTeam/DesignSvitlna/FoneMessages/14.webp' },
];

export const images = messagesDiscord.map((item, index) => (
  <img
    src={item.url}
    alt={item.url}
    key={item.url}
    // priority={true}
    className={clsx(
      'h-auto w-[302px] rounded-xl lg:w-[498px] lg:rounded-[24px]',
      index === 3 && 'w-[202px] lg:w-[360px]',
      index === 6 && 'w-[202px] lg:w-[360px]',
      index === 8 && 'w-[202px] lg:w-[360px]'
    )}
    // width={498}
    // height={50}
  />
));
