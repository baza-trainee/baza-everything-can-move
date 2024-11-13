'use client';

import Image from 'next/image';

import clsx from 'clsx';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

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
      // overflow-y-auto pb-[18px]
      className={clsx(
        'fixed inset-0 z-50 h-dvh w-full transform bg-olga-bg pb-6 text-white transition-transform duration-300 ease-in-out lg:overflow-y-auto 2xl:pb-[18px]',

        openMenu ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* upper line */}
      <div className="flex items-center justify-between px-4 lg:pl-10 lg:pr-6 2xl:pr-5">
        <Link
          href="/"
          onClick={handleMenuClick}
          className="py-[18px] lg:py-[10px]"
        >
          <Image
            className="h-16 w-16 lg:h-20 lg:w-20"
            src="/assets/images/Logo/logo_baza.png"
            alt="Logo Baza Trainee Ukraine"
            width={80}
            height={80}
            priority
          />
        </Link>
        <button
          className="flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 ease-linear hover:text-olga-green lg:h-[100px] lg:w-[100px]"
          onClick={handleMenuClick}
        >
          <ICONS_SRC.CLOSE_MENU_ICON className="fill-current w-10 lg:w-16" />
        </button>
      </div>
      {/* end of  upper line */}
      <div className="flex flex-col justify-between">
        {/* nav links section*/}
        <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
        {/* end of nav links section*/}
        {/* soc media section*/}
        <div>
          {/* className="pb-6 2xl:pb-[14px]" */}
          <p className="mb-1 text-center text-s leading-o-130 text-white lg:text-m 2xl:text-sm">
            Слідкуй за нами
          </p>
          <SocialMedia />
        </div>
        {/* end of soc media section*/}
      </div>
    </div>
  );
};
export default HeaderNavigation;
