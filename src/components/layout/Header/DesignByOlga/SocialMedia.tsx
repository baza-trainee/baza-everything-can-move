import React from 'react';

import Link from 'next/link';
import { SocialMediaData } from '@/constants/data/SocialMediaData';

const SocialMedia: React.FC = () => {
  return (
    <ul className="flex justify-center gap-[18px]">
      {SocialMediaData.map((social, index) => (
        <li
          key={index}
          className="flex h-10 w-10 cursor-pointer items-center justify-center"
        >
          <Link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[18px] w-[18px] text-white transition-all duration-300 ease-in-out 2xl:hover:scale-125 2xl:hover:text-olga-green-extra"
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SocialMedia;
