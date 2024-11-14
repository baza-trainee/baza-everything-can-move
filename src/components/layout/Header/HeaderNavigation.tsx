'use client';

import { useDesignStore } from '@/useDesignStore';
import Link from 'next/link';
import Image from 'next/image';

import clsx from 'clsx';

import NavigationLinks from './NavigationLinks';
import SocialMedia from './SocialMedia';

import { ICONS_SRC } from '@/constants/icons/iconsSrc';

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
  const { designType } = useDesignStore();
  return (
    <>
      {designType === 'designByOlga' && (
        <div
          // overflow-y-auto pb-[18px]
          className={clsx(
            'fixed inset-0 z-50 flex h-dvh w-full transform flex-col justify-between bg-olga-bg pb-6 text-white transition-transform duration-300 ease-in-out lg:overflow-y-auto 2xl:pb-[18px]',

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
          {/* end of  upper line flex flex-col justify-between*/}

          {/* nav links section*/}
          <NavigationLinks
            headerNav={headerNav}
            onClickLink={handleMenuClick}
          />
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
      )}
      {/* design By Svitlana */}
      {designType === 'designBySvitlana' && (
        <div className="fixed inset-0 z-50 flex flex-col bg-s-gray pb-[85px] text-white">
          <button
            onClick={handleMenuClick}
            className="absolute right-6 top-6 flex h-[60px] w-[60px] items-center justify-center rounded-full transition-colors duration-300 ease-linear hover:bg-s-light-purple hover:text-s-gray"
          >
            <ICONS_SRC.CLOSE_MENU_ICON className="fill-current h-8 w-8 hover:fill-s-light-purple" />
          </button>
        </div>
      )}
    </>
  );
};
export default HeaderNavigation;
