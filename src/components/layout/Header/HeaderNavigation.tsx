'use client';
import { useState } from 'react';

import clsx from 'clsx';
import CloseMenuIcon from '@/assets/icons/header/close-menu-icon.svg';
import NavigationLinks from './NavigationLinks';

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
        'bg-olga-bg left-0 top-0 w-full transform text-white transition-transform duration-300 ease-in-out',
        openMenu ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="flex items-center justify-between pl-10 pr-5">
        <div>
          <p className="text-white">Logo</p>
        </div>
        <button
          className="hover:text-olga-green h--[100px] w-[100px] p-[18px] text-white"
          onClick={handleMenuClick}
        >
          <CloseMenuIcon className="w-16 fill-current" />
        </button>
      </div>
      <NavigationLinks headerNav={headerNav} />
    </div>
  );
};
export default HeaderNavigation;
