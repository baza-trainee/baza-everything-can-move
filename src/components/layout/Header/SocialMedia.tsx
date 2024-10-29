import React from 'react';

import Link from 'next/link';
import { SocialMediaData } from '@/components/data/SocialMediaData';

const SocialMedia: React.FC = () => {
  return (
    <ul className="flex justify-center gap-[18px]">
      {SocialMediaData.map((social, index) => (
        <li
          key={index}
          className="flex h-10 w-10 cursor-pointer items-center justify-center"
        >
          <Link href={social.link} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SocialMedia;
