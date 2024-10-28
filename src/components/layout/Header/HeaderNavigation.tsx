'use client';

import Image from 'next/image';

import clsx from 'clsx';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';
// import CloseMenuIcon from '@/assets/icons/header/close-menu-icon.svg';
import NavigationLinks from './NavigationLinks';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

type NavLink = {
  name: string;
  link: string;
};

interface HeaderNavigationProps {
  headerNav: NavLink[];
  handleMenuClick: () => void;
  openMenu: boolean;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  return (
    <div
      className={clsx(
        'bg-olga-bg w-full transform pb-[18px] text-white transition-transform duration-300 ease-in-out',
        openMenu ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="flex items-center justify-between pl-5 lg:pl-10">
        <Link href="/" onClick={handleMenuClick}>
          <Image
            src="/assets/images/Logo/logo_baza.png"
            alt="Logo Baza Trainee Ukraine"
            width={80}
            height={80}
            priority
          />
        </Link>
        <button
          className="hover:text-olga-green h-20 w-20 p-2 text-white transition-colors duration-300 ease-linear lg:h-[100px] lg:w-[100px] lg:p-[18px]"
          onClick={handleMenuClick}
        >
          <ICONS_SRC.CLOSE_MENU_ICON className="w-full fill-current lg:w-16" />
          {/* <CloseMenuIcon className="w-16 fill-current" /> */}
        </button>
      </div>
      <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
      <div>
        <p className="leading-o-130 text-center text-sm text-white">
          Слідкуй за нами
        </p>
        {/* <ul className="flex justify-center gap-[18px]">
          <li className="flex h-10 w-10 cursor-pointer items-center justify-center">
            <Link
              href="https://www.linkedin.com/company/baza-trainee-ukraine/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ICONS_SRC.TELEGRAM className="w-[18px] transition-transform duration-300 ease-in-out hover:scale-150" />
            </Link>
          </li>
          <li className="flex h-10 w-10 items-center justify-center">
            <ICONS_SRC.FACEBOOK className="w-[18px]" />
          </li>
          <li className="flex h-10 w-10 items-center justify-center">
            <ICONS_SRC.LINKEDIN className="w-[18px]" />
          </li>
        </ul> */}
        <SocialMedia />
      </div>
    </div>
  );
};
export default HeaderNavigation;