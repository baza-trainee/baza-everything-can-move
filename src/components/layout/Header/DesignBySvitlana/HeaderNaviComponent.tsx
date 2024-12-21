import React from 'react';
import clsx from 'clsx';

import { ICONS_SRC } from '@/constants/icons/iconsSrc';
import { HeaderNavigationProps } from '@/components/layout/Header/types';

import NavigationLinks from '@/components/layout/Header/NavigationLinks';



const HeaderNaviComponentSvitlana: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  return (
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

        <NavigationLinks headerNav={headerNav} onClickLink={handleMenuClick} />
      </div>
    </div>
  );
};

export default HeaderNaviComponentSvitlana;
