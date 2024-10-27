'use client';
import React, { useState } from 'react';
// import clsx from 'clsx';
import OpenMenuIcon from '@/assets/icons/header/open-menu-icon.svg';
import HeaderNavigation from './HeaderNavigation';
import { NAV_LINKS } from '@/constans/navlinks';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="flex justify-end">
      {!openMenu && (
        <div
          //   type="button"
          //   onClick={openModal}
          onClick={handleMenuClick}
          className="bg-olga-btn-menu hover:bg-olga-green hover:text-olga-bg h-[160px] w-[236px] cursor-pointer px-3 pb-3 pt-6 text-white transition-colors duration-300 ease-linear"
        >
          <OpenMenuIcon className="mb-[77px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black" />
          <p className="ml-auto transition-colors duration-300 ease-linear">
            МЕНЮ
          </p>
        </div>
      )}

      {openMenu && (
        <HeaderNavigation
          headerNav={NAV_LINKS}
          handleMenuClick={handleMenuClick}
          openMenu={openMenu}
        />
      )}
    </header>
  );
};
export default Header;

//---- mob menu
// const [openMobileMenu, setOpenMobileMenu] = useState({
//   right: false,
// });

// const toggleDrawer = (anchor, open) => (event) => {
//   if (
//     event.type === 'keydown' &&
//     (event.key === 'Tab' || event.key === 'Shift')
//   ) {
//     return;
//   }

//   setOpenMobileMenu({ ...openMobileMenu, [anchor]: open });
// };
// --- end mobile menu
