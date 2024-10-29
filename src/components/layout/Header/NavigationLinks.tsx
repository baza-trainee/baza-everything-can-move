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
      <ul className="flex flex-col items-center gap-5 py-6 xl:gap-[18px] xl:py-[18px] 2xl:gap-2 2xl:py-2">
        {headerNav.map((item, index) => (
          <li key={index} className="flex w-full justify-center py-[10px]">
            <Link
              href={item.link}
              onClick={onClickLink}
              className={clsx(
                pathname === item.link ? 'text-olga-green-extra' : 'text-white',
                'leading-o-120 hover:text-olga-green block text-[44px] uppercase transition-colors duration-300 ease-linear lg:text-2xl 2xl:text-4xl'
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
