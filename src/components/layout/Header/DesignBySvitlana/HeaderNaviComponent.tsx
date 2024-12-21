'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { ICONS_SRC } from '@/constants/icons/iconsSrc';
import { HeaderNavigationProps } from '@/components/layout/Header/types';

import NavigationLinks from '@/components/layout/Header/Shared/NavigationLinks';

const HeaderNaviComponentSvitlana: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (openMenu) {
      // in open menu
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 700);
      return () => clearTimeout(timeout);
    } else {
      // in close menu
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [openMenu]);

  return (
    // <div className="max-h-screen overflow-y-auto">
    <div
      className={clsx(
        //   h-dvh??  h-[812px] lg:h-[1024px] 2xl:h-[860px]
        'fixed top-0 z-[10000] flex w-screen flex-col bg-s-gray font-second-family text-white transition-all duration-700 ease-linear 2xl:right-0 2xl:top-0 2xl:w-[730px]',
        openMenu
          ? 'translate-y-0 opacity-100'
          : '-translate-y-[812px] opacity-80 lg:-translate-y-[1024px] 2xl:-translate-y-[860px]',
        isAnimating ? 'overflow-y-auto' : 'max-h-screen overflow-y-auto'
      )}
    >
      <div className="flex-1 pb-[85px] lg:pb-[212px] 2xl:pb-[130px]">
        {' '}
        <div className="w-full px-6 pb-[49px] pt-6 lg:pb-[134px] 2xl:px-20 2xl:pb-[38px] 2xl:pt-8">
          <button
            onClick={handleMenuClick}
            className="ml-auto flex h-[54px] w-[54px] items-center justify-center rounded-full transition-colors duration-300 ease-linear 2xl:h-[60px] 2xl:w-[60px] 2xl:hover:bg-s-light-purple 2xl:hover:text-s-gray"
          >
            <ICONS_SRC.CLOSE_MENU_ICON className="fill-current h-8 w-8 2xl:hover:fill-s-light-purple" />
          </button>
        </div>
        <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
      </div>
    </div>
    // </div>
  );
};

export default HeaderNaviComponentSvitlana;
