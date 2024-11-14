'use client';
import React, { useState, useEffect } from 'react';
import { useDesignStore } from '@/useDesignStore';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

import HeaderNavigation from './HeaderNavigation';
import { NAV_LINKS } from '@/constants/navlinks';

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const { designType } = useDesignStore();

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
    <>
      {designType !== 'initial' && (
        <header
          className={clsx(
            'flex justify-between',
            designType === 'designBySvitlana' && 'font-font5 font-medium'
          )}
        >
          {!openMenu && (
            <>
              <Link
                href="/"
                className={clsx(
                  'pl-4 lg:pl-6',
                  designType === 'designByOlga' &&
                    'pt-10 lg:pb-[30px] lg:pt-[30px] 2xl:pb-10 2xl:pl-10 2xl:pt-10',
                  designType === 'designBySvitlana' &&
                    'pb-1 pt-1 lg:pb-[26px] lg:pt-[10px] 2xl:pb-4 2xl:pl-20 2xl:pt-4'
                )}
              >
                <Image
                  className={clsx(
                    designType === 'designByOlga' &&
                      'h-16 w-16 lg:h-20 lg:w-20',
                    designType === 'designBySvitlana' &&
                      'w-[56px] lg:w-[53px] 2xl:w-[66px]'
                  )}
                  src="/assets/images/Logo/logo_baza.png"
                  alt="Logo Baza Trainee Ukraine"
                  priority
                  width={80}
                  height={80}
                />
              </Link>
              {/* right side */}
              <div
                className={clsx(
                  'z-50 flex uppercase lg:text-md',
                  designType === 'designByOlga' && 'leading-o-130 2xl:text-l',
                  designType === 'designBySvitlana' &&
                    'leading-s-100 tracking-s-2'
                )}
              >
                {/* button 1  current page */}
                <div
                  className={clsx(
                    'hidden items-end lg:flex',
                    designType === 'designByOlga' &&
                      'bg-olga-btn-menu p-3 text-olga-green-extra lg:h-16 lg:w-[120px] 2xl:h-[80px] 2xl:w-[174px]',
                    designType === 'designBySvitlana' &&
                      'bg-s-gray text-s-purple lg:h-[50px] lg:w-[140px] lg:p-4 2xl:w-[216px] 2xl:pb-3 2xl:pl-5'
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
                    'hidden items-end text-white transition-colors duration-300 ease-linear lg:z-50 lg:flex',
                    designType === 'designByOlga' &&
                      'bg-olga-btn-menu p-3 hover:text-olga-green/90 lg:h-[100px] lg:w-[180px] 2xl:h-[120px] 2xl:w-[344px]',
                    designType === 'designBySvitlana' &&
                      'bg-s-gray hover:text-s-purple lg:h-[68px] lg:w-[140px] lg:p-4 2xl:h-[78px] 2xl:w-[217px] 2xl:pb-3 2xl:pl-5'
                  )}
                >
                  {indexOfNextPage >= 0
                    ? NAV_LINKS[indexOfNextPage].name
                    : 'UPS'}
                </Link>
                {/* b3 menu */}
                <div
                  onClick={handleMenuClick}
                  className={clsx(
                    'cursor-pointer pb-6 pr-4 text-white transition-colors duration-300 ease-linear',
                    designType === 'designByOlga' &&
                      'h-[104px] w-[112px] bg-olga-btn-menu pl-8 pt-16 hover:bg-olga-green hover:text-olga-bg lg:h-[140px] lg:w-[200px] lg:px-3 lg:pb-3 lg:pt-6 2xl:h-[160px] 2xl:w-[236px]',
                    designType === 'designBySvitlana' &&
                      'h-16 w-[107px] bg-s-gray pl-[27px] pt-6 hover:bg-s-purple hover:text-s-gray lg:h-[100px] lg:w-[180px] lg:pb-4 lg:pl-4 lg:pr-6 lg:pt-6 2xl:h-[107px] 2xl:w-[297px] 2xl:pb-3 2xl:pl-5 2xl:pr-20 2xl:pt-8'
                  )}
                >
                  <ICONS_SRC.OPEN_MENU_ICON
                    className={clsx(
                      'fill-current ml-auto w-16 transition-colors duration-300 ease-linear',
                      designType === 'designByOlga' &&
                        'hover:fill-black lg:mb-[62px] 2xl:mb-[77px]',
                      designType === 'designBySvitlana' &&
                        'hover:fill-s-gray lg:mb-6 2xl:mb-[26px]'
                    )}
                  />

                  <p
                    className={clsx(
                      'hidden transition-colors duration-300 ease-linear lg:block'
                      //  designType === 'designByOlga' && 'ml-auto', //leading-o-130 lg:text-md 2xl:text-l
                      //  designType === 'designBySvitlana' && ''
                    )}
                  >
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
      )}
    </>
  );
};
export default Header;
