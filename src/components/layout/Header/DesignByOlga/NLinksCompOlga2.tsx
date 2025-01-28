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
  console.log('fs', fontSize);
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
    const mobileMinFontSize = 30;
    const mobileMaxFontSize = 44;
    const mobileMinHeight = 500;
    const mobileMaxHeight = 630;
    //-----
    const tabletMinFontSize = 30;
    const tabletMaxFontSize = 64;
    const tabletMinHeight = 500;
    const tabletMaxHeight = 702;
    //-----
    const desktopMinFontSize = 44;
    const desktopMaxFontSize = 86;
    const desktopMinHeight = 700;
    const desktopMaxHeight = 848;

    //////////
    const calculateFontSize = () => {
      const screenHeight = window.innerHeight;

      let newFontSize;
      if (isMobile) {
        //big height: normal font, normal layout, no scroll
        if (screenHeight >= mobileMaxHeight) {
          newFontSize = mobileMaxFontSize;

          setIsLayoutChanged(false);
          if (setIsScroll) {
            setIsScroll(false);
          }
        }
        //very small height: normal font, normal layout, yes scroll
        else if (screenHeight < mobileMinHeight) {
          newFontSize = mobileMaxFontSize;
          setIsLayoutChanged(false);

          if (setIsScroll) {
            setIsScroll(true);
          }
        }
        //med small height: dynamic font, change layout, no scroll
        else {
          newFontSize =
            mobileMinFontSize +
            ((screenHeight - mobileMinHeight) *
              (mobileMaxFontSize - mobileMinFontSize)) /
              (mobileMaxHeight - mobileMinHeight);
          setIsLayoutChanged(true);

          if (setIsScroll) {
            setIsScroll(false);
          }
        }

        setFontSize(newFontSize);
        // console.log('New Font mobile', newFontSize);
      }
      //-------
      if (isTablet) {
        if (screenHeight >= tabletMaxHeight) {
          newFontSize = tabletMaxFontSize;
          setIsLayoutChanged(false);
        } else {
          newFontSize =
            tabletMinFontSize +
            ((screenHeight - tabletMinHeight) *
              (tabletMaxFontSize - tabletMinFontSize)) /
              (tabletMaxHeight - tabletMinHeight);

          setIsLayoutChanged(true);
        }
        setFontSize(newFontSize);
        // console.log('New Font tablet', newFontSize);
      }
      //-------
      if (isDesktop) {
        if (screenHeight >= desktopMaxHeight) {
          newFontSize = desktopMaxFontSize;
          setIsLayoutChanged(false);
        } else {
          newFontSize =
            desktopMinFontSize +
            ((screenHeight - desktopMinHeight) *
              (desktopMaxFontSize - desktopMinFontSize)) /
              (desktopMaxHeight - desktopMinHeight);

          setIsLayoutChanged(true);
        }
        setFontSize(newFontSize);
        //console.log('New Font desktop', newFontSize);
      }
    };
    ////////
    //const updateFontSize = () => setFontSize(calculateFontSize());

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
