import React from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

type NavLink = {
  name: string;
  link: string;
};
export interface NavigationLinksProps {
  headerNav: NavLink[];
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ headerNav }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();
  return (
    <nav>
      {' '}
      <ul className="flex flex-col items-center gap-4 px-[45px]">
        {headerNav.map((item, index) => (
          <li key={index} className="flex w-full justify-center py-[10px]">
            <Link
              href={item.link}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                pathname === item.link ? 'text-olga-green-extra' : 'text-white',
                'leading-o-120 hover:text-olga-green block text-4xl uppercase transition'
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
