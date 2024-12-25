import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';
import { HeaderNavigationProps } from '@/components/layout/Header/types';
import SceneLogo from '@/components/layout/Header/Shared/SceneLogo';
import NavigationLinks from '@/components/layout/Header/Shared/NavigationLinks';
import SocialMedia from '@/components/layout/Header/DesignByOlga/SocialMedia';

const HeaderNaviComponentOlga: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  return (
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
        <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
        {/* end of nav links section*/}
        {/* soc media section*/}
        {/* xl:flex-grow-0 */}
        <div className="mb-6 flex flex-grow flex-col justify-end">
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

export default HeaderNaviComponentOlga;
