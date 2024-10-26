'use client';
import { useState } from 'react';
import clsx from 'clsx';
import CloseMenuIcon from '@/assets/icons/header/close-menu-icon.svg';

type NavLink = {
  name: string;
  link: string;
};

interface NavigationProps {
  headerNav: NavLink[];
  handleMenuClick: () => void;
  openMenu: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  return (
    <div
      className={clsx(
        'bg-olga-bg absolute left-0 top-0 h-24 w-full transform text-white transition-transform duration-300 ease-in-out',
        openMenu ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      Navigation
      <button
        className="hover:text-olga-green text-white"
        onClick={handleMenuClick}
      >
        <CloseMenuIcon className="w-16 fill-current" />
      </button>
    </div>
  );
};
export default Navigation;
