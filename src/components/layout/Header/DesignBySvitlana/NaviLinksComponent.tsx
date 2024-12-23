'use client';
import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationLinksProps } from '@/components/layout/Header/types';
import { ICONS_HEADER_SV } from '@/constants/icons/iconsSrc';

const NaviLinksComponentSvitlana: React.FC<NavigationLinksProps> = ({
  headerNav,
  onClickLink,
}) => {
  const pathname = usePathname();
  return (
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
  );
};

export default NaviLinksComponentSvitlana;
