import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

interface BtnNotAnimatedProps {
  href: string;
  className?: string;
  color: 'gray' | 'white';
  linkAttributes?: boolean;
}

const BtnNotAnimated = ({
  className,
  color,
  href,
  linkAttributes,
}: BtnNotAnimatedProps) => {
  const relAttribute = linkAttributes ? 'noopener noreferrer' : '';
  const targetAttribute = linkAttributes ? '_blank' : '';
  return (
    // {/* btn */}
    <button
      className={clsx(
        'relative h-12 w-[214px] cursor-pointer rounded-full border font-third-family text-md uppercase leading-s-100 tracking-s-1',
        color === 'white'
          ? 'border-white bg-white text-s-gray'
          : 'border-s-gray bg-s-gray text-white',
        className
      )}
    >
      <Link
        className="flex h-full w-full items-center justify-center"
        href={href}
        rel={relAttribute}
        target={targetAttribute}
      >
        {/*gray text for white btn/white text for gray btn */}
        {/* <span
          className={clsx(
            'absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1',
            color === 'white' ? 'text-s-gray' : 'text-white'
          )} 
        >*/}
        переглянути
        {/* </span> */}
      </Link>
      {/* icon*/}

      <ICONS_SHARED.ARROW_BTN_ICON
        className={clsx(
          'absolute -right-[14px] top-[10px] z-30',
          color === 'white' ? 'text-white' : 'text-s-gray'
        )}
      />
    </button>
  );
};

export default BtnNotAnimated;

//how to use

//  <BtnNotAnimated
//   color="white"
//   href="https://baza-trainee.tech/uk/projects"
//   linkAttributes
//  />
//   <BtnNotAnimated
//     className="mt-4"
//     color="gray"
//     href="https://baza-trainee.tech/uk/projects"
//    />
