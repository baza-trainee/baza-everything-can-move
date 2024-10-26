import React from 'react';
import { useState } from 'react';
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

  return (
    <nav>
      {' '}
      <ul className="relative flex flex-col items-center gap-1">
        {headerNav.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.link}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                activeIndex === index ? 'text-olga-green-extra' : 'text-white',
                'leading-o-120 hover:text-olga-green block w-full px-4 py-2 text-4xl uppercase transition'
              )}
            >
              {item.name}
            </a>

            {activeIndex === index && (
              <div
                className="absolute left-0 top-0 h-full w-1 bg-white/25 transition-transform"
                style={{ transform: `translateY(${index * 100}%)` }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
