import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
  return (
    <nav>
      <ul className="flex flex-col items-center justify-between">
        {/* py-6  2xl:py-2 xl:py-[18px] xl:gap-[18px] gap-5 2xl:gap-2 */}
        {headerNav.map((item, index) => (
          <li key={index} className="flex w-full justify-center py-[10px]">
            <Link
              href={item.link}
              onClick={onClickLink}
              className={clsx(
                pathname === item.link ? 'text-olga-green-extra' : 'text-white',
                'block text-[44px] uppercase leading-o-120 transition-colors duration-300 ease-linear hover:text-olga-green lg:text-2xl 2xl:text-4xl'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
