'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useDesignStore } from '@/useDesignStore';
import clsx from 'clsx';

type NavLink = {
  name: string;
  link: string;
};
export interface NavigationLinksProps {
  headerNav: NavLink[];
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
        <ul className="xl:gap-2 flex flex-col items-center gap-5 2xl:gap-4">
          {/* py-6  2xl:py-2 xl:py-[18px] xl:gap-[18px] gap-5 2xl:gap-2 */}
          {headerNav.map((item, index) => (
            <li key={index} className="flex w-full justify-center py-[10px]">
              <Link
                href={item.link}
                onClick={onClickLink}
                className={clsx(
                  pathname === item.link
                    ? 'text-olga-green-extra'
                    : 'text-white',
                  'block text-[44px] uppercase leading-o-120 transition-colors duration-300 ease-linear hover:text-olga-green lg:text-2xl 2xl:text-4xl'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {designType === 'designBySvitlana' && (
        <ul className="flex flex-col">
          {headerNav.map((item, index) => (
            <li
              key={index}
              className={clsx(
                'flex w-full border-b border-white py-[29px] pl-[47px] text-xl font-medium uppercase transition-colors duration-300 ease-linear hover:bg-s-light-purple hover:text-s-gray',
                pathname === item.link ? 'text-s-purple' : 'text-white'
              )}
            >
              <Link
                href={item.link}
                onClick={onClickLink}
                // className={clsx(
                //   pathname === item.link ? 'text-s-purple' : 'text-white',
                //   'block'
                // )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavigationLinks;
