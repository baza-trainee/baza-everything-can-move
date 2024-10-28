'use client';

import Image from 'next/image';

import clsx from 'clsx';
import { ICONS_APP } from '@/constants/icons/iconsApp';
// import CloseMenuIcon from '@/assets/icons/header/close-menu-icon.svg';
import NavigationLinks from './NavigationLinks';
import Link from 'next/link';

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
        'bg-olga-bg w-full transform text-white transition-transform duration-300 ease-in-out',
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
          <ICONS_APP.CLOSE_MENU_ICON className="w-full fill-current lg:w-16" />
          {/* <CloseMenuIcon className="w-16 fill-current" /> */}
        </button>
      </div>
      <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
    </div>
  );
};
export default HeaderNavigation;
