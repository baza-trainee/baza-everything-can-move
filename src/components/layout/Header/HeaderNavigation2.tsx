'use client';
//import { useEffect } from 'react';
import clsx from 'clsx';
import { useDesignStore } from '@/useDesignStore';
import Link from 'next/link';
//import Image from 'next/image';
import NavigationLinks from './NavigationLinks';
import SocialMedia from './SocialMedia';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';
import { NavLinksArrType } from '@/constants/navlinks';
import SceneLogo from './SceneLogo';

interface HeaderNavigationProps {
  headerNav: NavLinksArrType;
  handleMenuClick: () => void;
  openMenu: boolean;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  const { designType } = useDesignStore();
  // useEffect(() => {
  //   if (openMenu) {
  //     document.body.style.overflow = 'hidden';
  //     //document.body.style.position = 'fixed';
  //   } else {
  //     document.body.style.overflow = '';
  //     //document.body.style.position = '';
  //   }
  // }, [openMenu]);
  return (
    <>
      {designType === 'designByOlga' && (
        <div
          // pb-[18px] h-dvh h-svh overflow-y-auto w-screen ??
          className={clsx(
            'fixed inset-0 z-[100000] flex-col overflow-hidden transition-[max-height,opacity] duration-700 ease-in xl:gap-2',

            openMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-80'
          )}
        >
          <div className="relative flex h-full min-h-full w-screen flex-col overflow-y-auto bg-olga-bg text-white">
            {' '}
            {/* upper line */}
            <div className="flex items-center justify-between px-4 lg:pl-10 lg:pr-6 2xl:pr-5">
              <Link
                href="/"
                onClick={handleMenuClick}
                className="py-[18px] lg:py-[10px]"
              >
                <div className={clsx('h-16 w-16 lg:h-20 lg:w-20')}>
                  <SceneLogo />
                </div>
              </Link>
              <button
                className="flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 ease-linear lg:h-[100px] lg:w-[100px] 2xl:hover:text-olga-green"
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
            <div className="flex flex-grow flex-col justify-end xl:flex-grow-0">
              {/* className="pb-6 2xl:pb-[14px]" */}
              <p className="mb-1 text-center text-s leading-o-130 text-white lg:text-m 2xl:text-sm">
                Слідкуй за нами
              </p>
              <SocialMedia />
            </div>
            {/* end of soc media section*/}
          </div>
        </div>
      )}
      {/* design By Svitlana */}
      {designType === 'designBySvitlana' && (
        <div
          className={clsx(
            //   h-dvh??  h-[812px] lg:h-[1024px] 2xl:h-[860px]
            'fixed top-0 z-[10000] flex w-screen flex-col overflow-y-auto bg-s-gray font-second-family text-white transition-transform duration-500 ease-in 2xl:right-0 2xl:top-0 2xl:w-[730px]',
            openMenu ? 'translate-y-0' : '-translate-y-full',
            'max-h-screen pb-[85px] lg:pb-[130px] 2xl:pb-[188px]'
          )}
        >
          <div>
            <div className="w-full px-6 pb-[49px] pt-6 lg:pb-[134px] 2xl:px-20 2xl:pb-[38px] 2xl:pt-8">
              <button
                onClick={handleMenuClick}
                className="ml-auto flex h-[54px] w-[54px] items-center justify-center rounded-full transition-colors duration-300 ease-linear 2xl:h-[60px] 2xl:w-[60px] 2xl:hover:bg-s-light-purple 2xl:hover:text-s-gray"
              >
                <ICONS_SRC.CLOSE_MENU_ICON className="fill-current h-8 w-8 2xl:hover:fill-s-light-purple" />
              </button>
            </div>

            <NavigationLinks
              headerNav={headerNav}
              onClickLink={handleMenuClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;
