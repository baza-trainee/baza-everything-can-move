import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

interface BtnAnimatedProps {
  href: string;
  className?: string;
  color: 'gray' | 'white';
  linkAttributes?: boolean;
}

const BtnAnimated = ({
  className,
  color,
  href,
  linkAttributes,
}: BtnAnimatedProps) => {
  const relAttribute = linkAttributes ? 'noopener noreferrer' : '';
  const targetAttribute = linkAttributes ? '_blank' : '';
  return (
    // common div for btn and icon
    <div
      className={clsx(
        'flex w-[214px] transition-colors duration-300 ease-linear',
        color === 'white'
          ? 'text-white hover:text-s-gray'
          : 'text-s-gray hover:text-white',
        className
      )}
    >
      {/* btn */}
      <motion.button
        className={clsx(
          'relative inline-block h-12 w-[214px] cursor-pointer overflow-hidden rounded-full border',
          color === 'white'
            ? 'border-white bg-white'
            : 'border-s-gray bg-s-gray'
        )}
        aria-label="Перейти за посиланням"
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        animate="rest"
      >
        {/* gray cicle */}
        <motion.div
          //
          className={clsx(
            'absolute left-0 right-0 z-0 mx-auto rounded-full transition-all duration-300 ease-out',
            color === 'white' ? 'bg-s-gray' : 'bg-white'
          )}
          variants={{
            rest: {
              y: '-38px',
              width: 28,
              height: 28,
            },
            hover: {
              y: '-83px',
              width: 214,
              height: 214,
            },
          }}
        />

        <Link
          className="block h-full w-full"
          href={href}
          rel={relAttribute}
          target={targetAttribute}
        >
          {/*gray text for white btn/white text for gray btn */}
          <motion.span
            className={clsx(
              'absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1',
              color === 'white' ? 'text-s-gray' : 'text-white'
            )}
            variants={{
              rest: {
                y: '0px',
                opacity: 1,
                transition: { duration: 0.4, ease: 'linear' },
              },
              hover: {
                y: '-48px',
                opacity: 0,
                transition: { duration: 0.4, ease: 'linear' },
              },
            }}
          >
            переглянути
          </motion.span>
          {/* white text for white btn/ gray text for gray btn  */}
          <motion.span
            className={clsx(
              'absolute inset-0 z-10 flex items-center justify-center font-third-family text-md uppercase leading-s-100 tracking-s-1',
              color === 'white' ? 'text-white' : 'text-s-gray'
            )}
            variants={{
              rest: {
                y: '48px',
                opacity: 0,
                transition: { duration: 0.4, ease: 'linear' },
              },
              hover: {
                y: '0px',
                opacity: 1,
                transition: { duration: 0.4, ease: 'linear' },
              },
            }}
          >
            переглянути
          </motion.span>
        </Link>
      </motion.button>
      {/* icon*/}
      <div className="relative h-12">
        <ICONS_SHARED.ARROW_BTN_ICON className="absolute -right-[14px] top-[10px] z-30" />
      </div>
    </div>
  );
};

export default BtnAnimated;
// example how to use
//  <BtnAnimated
//     color="white"
//     href="https://baza-trainee.tech/uk/projects"
//     linkAttributes
//   />
// <BtnAnimated color="gray" href="/experience" className="mb-8" />
// color= "white" or "gray" depends on background of button
// href - href of link
// linkAttributes - true if it is necessary to open link in another window
