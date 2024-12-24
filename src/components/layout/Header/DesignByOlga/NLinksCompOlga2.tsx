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
}) => {
  const pathname = usePathname();
  const [isLayoutChanged, setIsLayoutChanged] = useState<boolean>(false);
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
    /////
    //-----
    const mobileMinFontSize = 24;
    const mobileMaxFontSize = 44;
    const mobileMinHeight = 500;
    const mobileMaxHeight = 630;
    //-----
    const tabletMinFontSize = 22;
    const tabletMaxFontSize = 64;
    const tabletMinHeight = 500;
    const tabletMaxHeight = 682; //751;

    //////////
    const calculateFontSize = () => {
      const screenHeight = window.innerHeight;
      console.log('screenHeight', screenHeight);

      if (isMobile) {
        // if (screenHeight < 630) {
        //   console.log('mobile less');
        //   setIsLayoutChanged(true);
        // }
        const newFontSize =
          screenHeight >= mobileMaxHeight
            ? mobileMaxFontSize
            : mobileMinFontSize +
              ((screenHeight - mobileMinHeight) *
                (mobileMaxFontSize - mobileMinFontSize)) /
                (mobileMaxHeight - mobileMinHeight);

        setFontSize(newFontSize);
        console.log('New Font mobile', newFontSize);
      }
      if (isTablet) {
        // if (screenHeight < 682) {
        //   console.log('tablet less');
        //   setIsLayoutChanged(true);
        // }
        console.log('tablet less');
        const newFontSize =
          screenHeight >= tabletMaxHeight
            ? tabletMaxFontSize
            : tabletMinFontSize +
              ((screenHeight - tabletMinHeight) *
                (tabletMaxFontSize - tabletMinFontSize)) /
                (tabletMaxHeight - tabletMinHeight);

        setFontSize(newFontSize);
        console.log('New Font tablet', newFontSize);
      }
      //    return screenHeight > 800 ? '18px' : '16px';

      if (isDesktop) {
        if (screenHeight < 848) {
          console.log('desktop less');
          setIsLayoutChanged(true);
        }
        //return screenHeight > 900 ? '20px' : '18px';
      }
    };
    ////////
    //const updateFontSize = () => setFontSize(calculateFontSize());

    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);

    return () => {
      window.removeEventListener('resize', calculateFontSize);
    };
  }, [isClient, isDesktop, isMobile, isTablet]);

  return (
    <ul className="flex flex-col items-center gap-5 xl:gap-2 2xl:gap-4">
      {/* py-6  2xl:py-2 xl:py-[18px] xl:gap-[18px] gap-5 2xl:gap-2 */}
      {headerNav.map((item, index) => {
        return (
          <li key={index} className="flex w-full justify-center py-[10px]">
            <Link
              href={item.link}
              onClick={onClickLink}
              className={clsx(
                pathname === item.link ? 'text-olga-green-extra' : 'text-white',

                //text-[44px] lg:text-2xl
                'uppercase leading-o-120 transition-colors duration-300 ease-linear 2xl:text-4xl 2xl:hover:text-olga-green'
              )}
              style={{
                fontSize: `${fontSize}px`,
              }}
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
