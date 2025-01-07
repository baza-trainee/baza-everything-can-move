'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

import HeaderNavigation from '@/components/layout/Header/Shared/HeaderNavigation';
//import SceneLogo from './Shared/SceneLogo';

import { NAV_LINKS } from '@/constants/navlinks';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

const HeaderOlga: React.FC = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      //
      document.body.style.overflow = 'hidden';
      //const scrollBarWidth =
      //   window.innerWidth - document.documentElement.clientWidth;
      // document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      // document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      // document.body.style.paddingRight = '';
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
    <header className={clsx('flex justify-between')}>
      {/* If open header   */}
      <HeaderNavigation
        headerNav={NAV_LINKS}
        handleMenuClick={handleMenuClick}
        openMenu={openMenu}
      />

      {/* If  header do not open  */}
      <>
        <Link
          href="/"
          className={clsx('ml-4 pt-10 lg:ml-6 lg:py-[30px] 2xl:ml-5 2xl:py-10')}
        >
          {/* For Olga not 3d Logo*/}

          <Image
            className={clsx('h-16 w-16 lg:h-20 lg:w-20')}
            src="/assets/images/Logo/logo_baza.png"
            alt="Logo Baza Trainee Ukraine"
            //priority
            width={80}
            height={80}
          />

          {/* designType === 'designBySvitlana' && 'w-[40px] lg:w-[68px]
                2xl:w-[76px]' */}
        </Link>
        {/* right side */}
        <div
          className={clsx(
            'z-50 flex uppercase leading-o-130 lg:text-md 2xl:text-l'
          )}
        >
          {/* button 1  current page */}
          <div
            className={clsx(
              'hidden items-end bg-olga-btn-menu p-3 text-olga-green-extra lg:flex lg:h-16 lg:w-[120px] 2xl:h-[80px] 2xl:w-[174px]'
            )}
          >
            {indexOfCurrentPage >= 0
              ? NAV_LINKS[indexOfCurrentPage].name
              : 'UPS'}
          </div>
          {/* b2 next page */}

          <Link
            href={NAV_LINKS[indexOfNextPage].link}
            className={clsx(
              'hidden items-end bg-olga-btn-menu p-3 text-white transition-colors duration-300 ease-linear lg:z-50 lg:flex lg:h-[100px] lg:w-[180px] 2xl:h-[120px] 2xl:w-[344px] 2xl:hover:text-olga-green/90'
            )}
          >
            {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
          </Link>

          {/* b3 menu */}
          <button
            onClick={handleMenuClick}
            className={clsx(
              'h-[104px] w-[112px] cursor-pointer bg-olga-btn-menu pb-6 pl-8 pr-4 pt-16 uppercase text-white transition-colors duration-300 ease-linear lg:h-[140px] lg:w-[200px] lg:px-3 lg:pb-3 lg:pt-6 2xl:h-[160px] 2xl:w-[236px] 2xl:hover:bg-olga-green 2xl:hover:text-olga-bg'
            )}
          >
            <ICONS_SRC.OPEN_MENU_ICON
              className={clsx(
                'fill-current ml-auto w-16 transition-colors duration-300 ease-linear lg:mb-[62px] 2xl:mb-[77px] 2xl:hover:fill-black'
              )}
            />

            <p
              className={clsx(
                'hidden text-left transition-colors duration-300 ease-linear lg:block'
              )}
            >
              Меню
            </p>
          </button>
        </div>
      </>
    </header>
  );
};

export default HeaderOlga;
