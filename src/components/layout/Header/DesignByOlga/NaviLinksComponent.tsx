'use client';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationLinksProps } from '@/components/layout/Header/types';

const NaviLinksComponentOlga: React.FC<NavigationLinksProps> = ({
  headerNav,
  onClickLink,
}) => {
  const pathname = usePathname();

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
                'text-[44px] uppercase leading-o-120 transition-colors duration-300 ease-linear lg:text-2xl 2xl:text-4xl 2xl:hover:text-olga-green'
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

export default NaviLinksComponentOlga;
