'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

import HeaderNavigation from './HeaderNavigation';
import { NAV_LINKS } from '@/constants/navlinks';

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);
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
    <header className="flex justify-between">
      {!openMenu && (
        <>
          <Link
            href="/"
            onClick={handleMenuClick}
            className="pl-4 pt-10 lg:pb-[30px] lg:pl-6 lg:pt-[30px] 2xl:pb-10 2xl:pl-10 2xl:pt-10"
          >
            <Image
              className="h-16 w-16 lg:h-20 lg:w-20"
              src="/assets/images/Logo/logo_baza.png"
              alt="Logo Baza Trainee Ukraine"
              priority
              width={80}
              height={80}
            />
          </Link>
          {/* right side */}
          <div className="lg:text-md 2xl:text-l leading-o-130 flex uppercase">
            {/* b1  current page */}
            <div className="text-olga-green-extra bg-olga-btn-menu hidden items-end p-3 lg:flex lg:h-16 lg:w-[120px] 2xl:h-[80px] 2xl:w-[174px]">
              {indexOfCurrentPage >= 0
                ? NAV_LINKS[indexOfCurrentPage].name
                : 'UPS'}
            </div>
            {/* b2 next page */}
            <Link
              href={NAV_LINKS[indexOfNextPage].link}
              className="hover:text-olga-green/90 bg-olga-btn-menu hidden items-end p-3 text-white transition-colors duration-300 ease-linear lg:flex lg:h-[100px] lg:w-[180px] 2xl:h-[120px] 2xl:w-[344px]"
            >
              {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
            </Link>
            {/* b3 menu */}
            <div
              onClick={handleMenuClick}
              className="bg-olga-btn-menu hover:bg-olga-green hover:text-olga-bg h-[104px] w-[112px] cursor-pointer pb-6 pl-8 pr-[16px] pt-16 text-white transition-colors duration-300 ease-linear lg:h-[140px] lg:w-[200px] lg:px-3 lg:pb-3 lg:pt-6 2xl:h-[160px] 2xl:w-[236px]"
            >
              <ICONS_SRC.OPEN_MENU_ICON className="ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black lg:mb-[62px] 2xl:mb-[77px]" />

              <p className="lg:text-md 2xl:text-l leading-o-130 ml-auto hidden transition-colors duration-300 ease-linear lg:block">
                Меню
              </p>
            </div>
          </div>
        </>
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
