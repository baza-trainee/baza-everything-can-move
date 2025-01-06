'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//import HeaderNavigation from './Shared/HeaderNavigation';

//import SceneLogo from './Shared/SceneLogo';
import SceneLogo2 from '@/components/layout/Header/Shared/SceneLogo2';
import Container from '@/components/ui/DesignBySvitlna/Container';
import { NAV_LINKS } from '@/constants/navlinks';
import { ICONS_SRC } from '@/constants/icons/iconsSrc';
import HeaderNavigation from '../Shared/HeaderNavigation';

const HeaderSvitlana: React.FC = () => {
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
    <header>
      {/* If open header   */}
      <HeaderNavigation
        headerNav={NAV_LINKS}
        handleMenuClick={handleMenuClick}
        openMenu={openMenu}
      />
      <div className="relative w-full">
        {/* left side*/}
        <Container className="py-3 lg:py-4 2xl:pb-[14px] 2xl:pt-4">
          <Link href="/" className={clsx('')}>
            {/* for Svitlana 3d Logo*/}

            <div
              className={clsx(
                'h-10 w-10 lg:h-[68px] lg:w-[68px] 2xl:h-[76px] 2xl:w-[76px]'
              )}
            >
              <SceneLogo2 />
            </div>

            {/* designType === 'designBySvitlana' && 'w-[40px] lg:w-[68px]
                2xl:w-[76px]' */}
          </Link>
        </Container>
        {/* right side */}
        <div
          className={clsx(
            'width-full flex justify-end font-second-family font-medium',
            'absolute right-0 top-0'
          )}
        >
          {/* right side */}
          <div
            className={clsx(
              'z-50 flex uppercase leading-s-100 tracking-s-2 lg:text-md'
            )}
          >
            {/* button 1  current page */}
            <div
              className={clsx(
                'hidden items-end bg-s-gray text-s-purple lg:flex lg:h-[50px] lg:w-[140px] lg:p-4 2xl:w-[216px] 2xl:pb-3 2xl:pl-5'
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
                'hidden items-end bg-s-gray text-white transition-colors duration-300 ease-linear lg:z-50 lg:flex lg:h-[68px] lg:w-[140px] lg:p-4 2xl:h-[78px] 2xl:w-[217px] 2xl:pb-3 2xl:pl-5 2xl:hover:text-s-purple'
              )}
            >
              {indexOfNextPage >= 0 ? NAV_LINKS[indexOfNextPage].name : 'UPS'}
            </Link>

            {/* b3 menu */}
            <button
              onClick={handleMenuClick}
              className={clsx(
                'bg-transparent 2xl:hover:text-s-graycursor-pointer h-16 w-[107px] pb-6 pl-[27px] pr-4 pt-6 uppercase text-white transition-colors duration-300 ease-linear lg:h-[100px] lg:w-[180px] lg:bg-s-gray lg:pb-4 lg:pl-4 lg:pr-6 lg:pt-6 2xl:h-[107px] 2xl:w-[297px] 2xl:pb-3 2xl:pl-5 2xl:pr-20 2xl:pt-8 2xl:hover:bg-s-purple'
              )}
            >
              <ICONS_SRC.OPEN_MENU_ICON
                className={clsx(
                  'fill-current ml-auto w-16 transition-colors duration-300 ease-linear lg:mb-6 2xl:mb-[26px] 2xl:hover:fill-s-gray'
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
        </div>
      </div>
    </header>
  );
};

export default HeaderSvitlana;
