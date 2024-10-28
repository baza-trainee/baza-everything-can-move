'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header className="flex justify-between">
      {!openMenu && (
        <>
          <Link
            href="/"
            onClick={handleMenuClick}
            className="pl-5 pt-2 lg:pl-10 lg:pt-10"
          >
            <Image
              src="/assets/images/Logo/logo_baza.png"
              alt="Logo Baza Trainee Ukraine"
              width={80}
              height={80}
              priority
            />
          </Link>
          <div className="text-l leading-o-120 flex uppercase">
            <div className="text-olga-green-extra bg-olga-btn-menu hidden items-end p-3 xl:flex xl:h-[80px] xl:w-[174px]">
              {indexOfCurrentPage >= 0
                ? NAV_LINKS[indexOfCurrentPage].name
                : 'UPS'}
            </div>
            <Link
              href={NAV_LINKS[indexOfNextPage].link}
              className="hover:text-olga-green/90 bg-olga-btn-menu hidden items-end p-3 text-white transition-colors duration-300 ease-linear xl:flex xl:h-[120px] xl:w-[344px]"
            >
              {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
            </Link>
            <div
              onClick={handleMenuClick}
              className="bg-olga-btn-menu hover:bg-olga-green hover:text-olga-bg h-[130px] w-[125px] cursor-pointer px-3 pb-3 pt-6 text-white transition-colors duration-300 ease-linear xl:h-[160px] xl:w-[236px]"
            >
              <ICONS_SRC.OPEN_MENU_ICON className="mb-[50px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black xl:mb-[77px]" />
              {/* <OpenMenuIcon className="mb-[77px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black" /> */}
              <p className="text-l ml-auto transition-colors duration-300 ease-linear">
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

//h-[50px] w-[100px]  ....h-[90px] w-[139px] Link logo pt-4 in main div text:md lg:text-l
