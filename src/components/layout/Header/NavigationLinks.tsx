'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useDesignStore } from '@/useDesignStore';
import clsx from 'clsx';
import { ICONS_HEADER_SV } from '@/constants/icons/iconsSrc';
import { NavLinksArrType } from '@/constants/navlinks';


export interface NavigationLinksProps {
  headerNav: NavLinksArrType;
  onClickLink: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  headerNav,
  onClickLink,
}) => {
  const pathname = usePathname();
  const { designType } = useDesignStore();
  return (
    <nav>
      {designType === 'designByOlga' && (
        <ul className="flex flex-col items-center gap-5 xl:gap-2 2xl:gap-4">
          {/* py-6  2xl:py-2 xl:py-[18px] xl:gap-[18px] gap-5 2xl:gap-2 */}
          {headerNav.map((item, index) => {
            return (
              <li key={index} className="flex w-full justify-center py-[10px]">
                <Link
                  href={item.link}
                  onClick={onClickLink}
                  className={clsx(
                    pathname === item.link
                      ? 'text-olga-green-extra'
                      : 'text-white',
                    'text-[44px] uppercase leading-o-120 transition-colors duration-300 ease-linear lg:text-2xl 2xl:text-4xl 2xl:hover:text-olga-green'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {designType === 'designBySvitlana' && (
        <ul className="flex flex-col">
          {headerNav.map((item, index) => {
            const IconComponent = ICONS_HEADER_SV[index];
            return (
              <li
                key={index}
                className={clsx(
                  'group relative flex w-full overflow-hidden border-b border-white pb-[28px] pl-[47px] pt-[29px] text-xl font-medium uppercase leading-[62.4px]',
                  pathname === item.link ? 'text-s-purple' : 'text-white',
                  'transition-colors duration-300 ease-linear 2xl:hover:text-s-gray'
                )}
              >
                <div
                  className={clsx(
                    'absolute inset-0 h-full w-full scale-x-0 transform bg-s-light-purple transition-transform duration-300 ease-linear',
                    'origin-left 2xl:group-hover:scale-x-100'
                  )}
                />

                <Link
                  href={item.link}
                  onClick={onClickLink}
                  className={clsx(
                    'relative z-10 flex items-center gap-6 lg:gap-[207px] 2xl:gap-[188px]'
                  )}
                >
                  {IconComponent && (
                    <IconComponent className="fill-current h-10 w-[29px] 2xl:hover:fill-s-gray" />
                  )}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default NavigationLinks;
