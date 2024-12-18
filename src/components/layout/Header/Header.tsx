'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDesignStore } from '@/useDesignStore';
import Image from 'next/image';
//import HeaderNavigation from './HeaderNavigation';
import HeaderNavigation from './HeaderNavigation2';
import SceneLogo from './SceneLogo';
import { NAV_LINKS } from '@/constants/navlinks';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const { designType } = useDesignStore();

  useEffect(() => {
    if (openMenu) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
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
            designType === 'designBySvitlana' &&
              'font-second-family font-medium'
          )}
        >
          {/* If open header   */}
          <HeaderNavigation
            headerNav={NAV_LINKS}
            handleMenuClick={handleMenuClick}
            openMenu={openMenu}
          />
          {/* If  header do not open  */}
          {/* {!openMenu && ( */}
          <>
            <Link
              href="/"
              className={clsx(
                designType === 'designByOlga' &&
                  'ml-4 pt-10 lg:ml-6 lg:py-[30px] 2xl:ml-5 2xl:py-10',
                designType === 'designBySvitlana' &&
                  'ml-4 py-3 lg:ml-6 lg:py-4 2xl:ml-20 2xl:pb-[14px] 2xl:pt-4'
              )}
            >
              {/* For Olga not 3d */}
              {designType === 'designByOlga' && (
                <Image
                  className={clsx('h-16 w-16 lg:h-20 lg:w-20')}
                  src="/assets/images/Logo/logo_baza.png"
                  alt="Logo Baza Trainee Ukraine"
                  //priority
                  width={80}
                  height={80}
                />
              )}
              {/* for Svitlana 3d*/}
              {designType === 'designBySvitlana' && (
                <div
                  className={clsx(
                    'h-10 w-10 lg:h-[68px] lg:w-[68px] 2xl:h-[76px] 2xl:w-[76px]'
                  )}
                >
                  <SceneLogo />
                </div>
              )}
              {/*we do not need it any more ?*/}
              {/* designType === 'designBySvitlana' && 'w-[40px] lg:w-[68px]
                2xl:w-[76px]' */}
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
                    'bg-olga-btn-menu p-3 lg:h-[100px] lg:w-[180px] 2xl:h-[120px] 2xl:w-[344px] 2xl:hover:text-olga-green/90',
                  designType === 'designBySvitlana' &&
                    'bg-s-gray lg:h-[68px] lg:w-[140px] lg:p-4 2xl:h-[78px] 2xl:w-[217px] 2xl:pb-3 2xl:pl-5 2xl:hover:text-s-purple'
                )}
              >
                {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
              </Link>

              {/* b3 menu */}
              <button
                onClick={handleMenuClick}
                className={clsx(
                  'cursor-pointer pb-6 pr-4 uppercase text-white transition-colors duration-300 ease-linear',
                  designType === 'designByOlga' &&
                    'h-[104px] w-[112px] bg-olga-btn-menu pl-8 pt-16 lg:h-[140px] lg:w-[200px] lg:px-3 lg:pb-3 lg:pt-6 2xl:h-[160px] 2xl:w-[236px] 2xl:hover:bg-olga-green 2xl:hover:text-olga-bg',
                  designType === 'designBySvitlana' &&
                    'bg-transparent h-16 w-[107px] pl-[27px] pt-6 lg:h-[100px] lg:w-[180px] lg:bg-s-gray lg:pb-4 lg:pl-4 lg:pr-6 lg:pt-6 2xl:h-[107px] 2xl:w-[297px] 2xl:pb-3 2xl:pl-5 2xl:pr-20 2xl:pt-8 2xl:hover:bg-s-purple 2xl:hover:text-s-gray'
                )}
              >
                <ICONS_SRC.OPEN_MENU_ICON
                  className={clsx(
                    'fill-current ml-auto w-16 transition-colors duration-300 ease-linear',
                    designType === 'designByOlga' &&
                      'lg:mb-[62px] 2xl:mb-[77px] 2xl:hover:fill-black',
                    designType === 'designBySvitlana' &&
                      'lg:mb-6 2xl:mb-[26px] 2xl:hover:fill-s-gray'
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
          {/*  )} */}
        </header>
      )}
    </>
  );
};
export default Header;
