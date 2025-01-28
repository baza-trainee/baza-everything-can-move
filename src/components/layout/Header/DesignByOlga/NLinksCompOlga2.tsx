'use client';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationLinksProps } from '@/components/layout/Header/types';

const NaviLinksComponentOlga2: React.FC<NavigationLinksProps> = ({
  headerNav,
  onClickLink,
  setIsScroll,
}) => {
  const pathname = usePathname();
  const [isLayoutChanged, setIsLayoutChanged] = useState<boolean>(false);
  // const [isScroll, setIsScroll] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(44);
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 767.5px)' });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.5px)',
  });

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    //-----
    const layouts = {
      mobile: {
        minFontSize: 30,
        maxFontSize: 44,
        minHeight: 500,
        maxHeight: 630,
      },
      tablet: {
        minFontSize: 30,
        maxFontSize: 64,
        minHeight: 500,
        maxHeight: 702,
      },
      desktop: {
        minFontSize: 44,
        maxFontSize: 86,
        minHeight: 700,
        maxHeight: 848,
      },
    };

    //////////
    const calculateFontSize = () => {
      const screenHeight = window.innerHeight;

      let config;
      if (isMobile) config = layouts.mobile;
      else if (isTablet) config = layouts.tablet;
      else if (isDesktop) config = layouts.desktop;
      else return;

      const { minFontSize, maxFontSize, minHeight, maxHeight } = config;

      let newFontSize;
      if (screenHeight >= maxHeight) {
        newFontSize = maxFontSize;
        handleLayoutMode('max');
      } else if (screenHeight < minHeight) {
        newFontSize = maxFontSize;
        handleLayoutMode('min');
      } else {
        newFontSize =
          minFontSize +
          ((screenHeight - minHeight) * (maxFontSize - minFontSize)) /
            (maxHeight - minHeight);
        handleLayoutMode('middle');
      }
      setFontSize(newFontSize);
    };
    // update states setIsScroll, setIsLayoutChanged
    const handleLayoutMode = (mode: 'max' | 'min' | 'middle') => {
      setIsLayoutChanged(mode === 'middle'); // true for middle, false for max and min
      if (setIsScroll) {
        setIsScroll(mode === 'min'); // true for min, false for max and middle
      }
    };
    /////////////////////

    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, [isClient, isDesktop, isMobile, isTablet, setIsScroll]);

  return (
    <ul
      className={clsx(
        'flex flex-col items-center',
        isLayoutChanged
          ? 'gap-2 xl:gap-2 2xl:gap-[4px]'
          : 'gap-5 xl:gap-2 2xl:gap-[4px]'
      )}
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {/*isLayoutChanged, py-6  2xl:py-2 xl:py-[18px] xl:gap-[18px] gap-5 2xl:gap-2 */}
      {headerNav.map((item, index) => {
        return (
          <li key={index} className="flex w-full justify-center py-[10px]">
            <Link
              href={item.link}
              onClick={onClickLink}
              className={clsx(
                pathname === item.link ? 'text-olga-green-extra' : 'text-white',

                //text-[44px] lg:text-2xl
                'uppercase leading-o-120 transition-colors duration-300 ease-linear 2xl:hover:text-olga-green'
              )}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NaviLinksComponentOlga2;
