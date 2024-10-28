'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

import HeaderNavigation from './HeaderNavigation';
import { NAV_LINKS } from '@/constants/navlinks';

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  //define indexes of current and next pages
  function headerNav() {
    const indexOfCurrentPage = NAV_LINKS.findIndex(
      (linkItem) => linkItem.link === pathname
    );
    let indexOfNextPage;
    if (indexOfCurrentPage <= NAV_LINKS.length - 2) {
      indexOfNextPage = indexOfCurrentPage + 1;
    } else {
      indexOfNextPage = 0;
    }
    return [indexOfCurrentPage, indexOfNextPage];
  }

  const indexPages = headerNav();

  const indexOfCurrentPage = indexPages[0];
  const indexOfNextPage = indexPages[1];

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header>
      {!openMenu && (
        <div className="text-l leading-o-120 flex justify-end uppercase">
          <div className="text-olga-green-extra bg-olga-btn-menu flex h-[80px] w-[174px] items-end p-3">
            {indexOfCurrentPage >= 0
              ? NAV_LINKS[indexOfCurrentPage].name
              : 'UPS'}
          </div>
          <Link
            href={NAV_LINKS[indexOfNextPage].link}
            className="hover:text-olga-green/90 bg-olga-btn-menu flex h-[120px] w-[344px] items-end p-3 text-white transition-colors duration-300 ease-linear"
          >
            {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
          </Link>
          <div
            onClick={handleMenuClick}
            className="bg-olga-btn-menu hover:bg-olga-green hover:text-olga-bg h-[130px] w-[150px] cursor-pointer px-3 pb-3 pt-6 text-white transition-colors duration-300 ease-linear lg:h-[160px] lg:w-[236px]"
          >
            <ICONS_SRC.OPEN_MENU_ICON className="mb-[50px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black lg:mb-[77px]" />
            {/* <OpenMenuIcon className="mb-[77px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black" /> */}
            <p className="ml-auto transition-colors duration-300 ease-linear">
              Меню
            </p>
          </div>
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
